import { supabaseAdmin } from "@/lib/supabase/server";
import type {
  EventSource,
  ImportedEventDraft,
  ImportRunSummary,
  ImportSourceResult,
} from "./types";
import { extractEventsFromTextWithAI, parsePastedEventWithAI, rewriteVerifiedEvent } from "./ai";
import { assessImportedEvent, areSameEventTitle, isPublicSourceUrl } from "./event-policy";
import { ensureTrustedEventSources } from "./seed-sources";
import {
  htmlToReadableText,
  parseIcsEvents,
  parseJsonLdEvents,
  parseRssEvents,
} from "./parsers";
import {
  activeSiteKey,
  cleanString,
  defaultCityForSite,
  makeImportSlug,
  makeSourceHash,
  normalizeTitleForCompare,
} from "./utils";

async function fetchSourceText(source: EventSource) {
  if (!isPublicSourceUrl(source.url)) throw new Error("Source URL must be public HTTPS");
  const response = await fetch(source.url, {
    signal: AbortSignal.timeout(18000),
    redirect: "error",
    headers: {
      "User-Agent":
        "MountIdaArkansas.org event importer (+https://www.mountidaarkansas.org)",
      Accept: "text/html,application/rss+xml,application/xml,text/calendar,*/*",
    },
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error(`Fetch failed with ${response.status}`);
  }

  const size = Number(response.headers.get("content-length") || 0);
  if (size > 2000000) throw new Error("Event source exceeds 2 MB");
  const text = await response.text();
  if (text.length > 2000000) throw new Error("Event source exceeds 2 MB");
  return text;
}

async function parseSource(source: EventSource) {
  const text = await fetchSourceText(source);

  if (source.source_type === "ics") {
    return parseIcsEvents(text, source);
  }

  if (source.source_type === "rss") {
    const rssDrafts = parseRssEvents(text, source);
    if (rssDrafts.length) return rssDrafts;
    return extractEventsFromTextWithAI(source, htmlToReadableText(text));
  }

  const jsonLdDrafts = parseJsonLdEvents(text, source);

  if (source.source_type === "json_ld" || jsonLdDrafts.length) {
    return jsonLdDrafts;
  }

  return extractEventsFromTextWithAI(source, htmlToReadableText(text));
}

async function hasDuplicate(
  draft: ImportedEventDraft,
  sourceHash: string,
  site: string
) {
  const { data: hashMatch, error: hashError } = await supabaseAdmin
    .from("events")
    .select("id")
    .eq("source_hash", sourceHash)
    .maybeSingle();

  if (hashError) throw new Error("Cannot verify event hash duplicate: " + hashError.message);

  if (hashMatch) return true;

  if (draft.source_url) {
    const { data: urlMatch, error: urlError } = await supabaseAdmin
      .from("events")
      .select("id,title,location_name")
      .eq("site", site)
      .eq("source_url", draft.source_url)
      .eq("start_date", draft.start_date)
      .limit(100);

    if (urlError) throw new Error("Cannot verify event URL duplicate: " + urlError.message);
    if ((urlMatch || []).some((event) => areSameEventTitle(event.title || "", draft.title) &&
      (!event.location_name || !draft.location_name ||
        normalizeTitleForCompare(event.location_name) === normalizeTitleForCompare(draft.location_name)))) return true;
  }

  const { data: sameDayEvents, error: sameDayError } = await supabaseAdmin
    .from("events")
    .select("id,title,location_name")
    .eq("site", site)
    .eq("start_date", draft.start_date)
    .limit(500);

  if (sameDayError) {
    throw new Error("Cannot verify same-day duplicates: " + sameDayError.message);
  }

  const normalizedTitle = normalizeTitleForCompare(draft.title);
  const normalizedLocation = normalizeTitleForCompare(draft.location_name || "");

  return (sameDayEvents || []).some((event) => {
    const eventTitle = normalizeTitleForCompare(event.title || "");
    const eventLocation = normalizeTitleForCompare(event.location_name || "");

    if (eventTitle && eventTitle === normalizedTitle &&
      (!eventLocation || !normalizedLocation || eventLocation === normalizedLocation)) return true;

    return Boolean(
      eventTitle &&
        normalizedTitle &&
        areSameEventTitle(event.title || "", draft.title) &&
        normalizedLocation &&
        eventLocation === normalizedLocation
    );
  });
}

export async function saveImportedEventDraft(
  draft: ImportedEventDraft,
  options: {
    source?: EventSource | null;
    sourceType?: string;
    site?: string;
  } = {}
) {
  const title = cleanString(draft.title);
  const startDate = cleanString(draft.start_date);

  if (!title || !startDate) {
    return { inserted: false, skipped: true, reason: "Missing title or start date" };
  }

  const source = options.source || null;
  const site = options.site || source?.site || activeSiteKey();
  const assessment = assessImportedEvent(draft, source, site);
  if (!assessment.accepted) return { inserted: false, skipped: true, reason: assessment.reason };
  const sourceHash = makeSourceHash(site, source?.id || null, {
    ...draft,
    title,
    start_date: startDate,
  });

  const duplicate = await hasDuplicate(
    { ...draft, title, start_date: startDate },
    sourceHash,
    site
  );

  if (duplicate) {
    return { inserted: false, skipped: true, reason: "Duplicate" };
  }

  // Rewrite only new verified events; recurring daily imports should not
  // make repeated model calls for events that are already published.
  const cleanedDescription = assessment.autoPublish
    ? await rewriteVerifiedEvent({ ...draft, city: assessment.city })
    : draft.description || draft.raw_description || null;
  const safeSourceUrl = draft.source_url && isPublicSourceUrl(draft.source_url)
    ? draft.source_url : source?.url || null;

  const eventRecord = {
    site,
    title,
    slug: makeImportSlug({ ...draft, title, start_date: startDate }),
    raw_description: draft.raw_description || draft.description || null,
    description: cleanedDescription,
    ai_summary: draft.ai_summary || null,
    city: assessment.city || (source ? null : draft.city || defaultCityForSite(site)),
    location_name: draft.location_name || source?.venue_hint || null,
    address: draft.address || null,
    start_date: startDate,
    end_date: draft.end_date || null,
    start_time: draft.start_time || null,
    end_time: draft.end_time || null,
    category: draft.category || source?.category_hint || null,
    tags: Array.isArray(draft.tags) ? draft.tags : [],
    image_url: draft.image_url || null,
    source_url: safeSourceUrl,
    status: assessment.autoPublish ? "approved" : "pending",
    featured: false,
    source_type: options.sourceType || (source ? `import:${source.source_type}` : "import"),
    source_id: source?.id || null,
    external_id: draft.external_id || draft.source_url || null,
    source_hash: sourceHash,
    confidence_score: draft.confidence_score ?? null,
    needs_review: !assessment.autoPublish,
    imported_at: new Date().toISOString(),
  };

  const { data, error } = await supabaseAdmin
    .from("events")
    .insert(eventRecord)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return { inserted: true, skipped: false, event: data };
}

async function createRun(source: EventSource) {
  const { data, error } = await supabaseAdmin
    .from("event_import_runs")
    .insert({
      source_id: source.id,
      status: "running",
      started_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    console.error("Import run create error:", error);
    return null;
  }

  return data as { id: string };
}

async function finishRun(
  runId: string | null,
  update: {
    status: string;
    found_count: number;
    inserted_count: number;
    skipped_count: number;
    error_message?: string | null;
  }
) {
  if (!runId) return;

  const { error } = await supabaseAdmin
    .from("event_import_runs")
    .update({
      ...update,
      finished_at: new Date().toISOString(),
    })
    .eq("id", runId);

  if (error) console.error("Import run update error:", error);
}

export async function importEventSource(source: EventSource): Promise<ImportSourceResult> {
  const run = await createRun(source);
  let found = 0;
  let inserted = 0;
  let skipped = 0;

  try {
    const drafts = await parseSource(source);
    found = drafts.length;

    for (const draft of drafts) {
      try {
        const result = await saveImportedEventDraft(draft, { source });
        if (result.inserted) inserted += 1;
        if (result.skipped) skipped += 1;
      } catch (error) {
        skipped += 1;
        console.error("Event insert skipped:", error);
      }
    }

    await supabaseAdmin
      .from("event_sources")
      .update({
        last_checked_at: new Date().toISOString(),
        last_status: `success: ${inserted} added, ${skipped} skipped`,
        updated_at: new Date().toISOString(),
      })
      .eq("id", source.id);

    await finishRun(run?.id || null, {
      status: "success",
      found_count: found,
      inserted_count: inserted,
      skipped_count: skipped,
    });

    return {
      sourceId: source.id,
      sourceName: source.name,
      status: "success",
      found,
      inserted,
      skipped,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown import error";

    await supabaseAdmin
      .from("event_sources")
      .update({
        last_checked_at: new Date().toISOString(),
        last_status: `error: ${message}`,
        updated_at: new Date().toISOString(),
      })
      .eq("id", source.id);

    await finishRun(run?.id || null, {
      status: "error",
      found_count: found,
      inserted_count: inserted,
      skipped_count: skipped,
      error_message: message,
    });

    return {
      sourceId: source.id,
      sourceName: source.name,
      status: "error",
      found,
      inserted,
      skipped,
      error: message,
    };
  }
}

export async function importEventSources(options: { sourceId?: string; site?: string } = {}) {
  const site = options.site || activeSiteKey();
  await ensureTrustedEventSources(site);

  let query = supabaseAdmin
    .from("event_sources")
    .select("*")
    .eq("site", site)
    .eq("enabled", true)
    .order("name", { ascending: true });

  if (options.sourceId) {
    query = query.eq("id", options.sourceId);
  }

  const { data: sources, error } = await query;

  if (error) throw new Error(error.message);

  const summary: ImportRunSummary = {
    checked: 0,
    found: 0,
    inserted: 0,
    skipped: 0,
    results: [],
  };

  for (const source of (sources || []) as EventSource[]) {
    const result = await importEventSource(source);
    summary.checked += 1;
    summary.found += result.found;
    summary.inserted += result.inserted;
    summary.skipped += result.skipped;
    summary.results.push(result);
  }

  return summary;
}

export async function savePastedEvent(
  text: string,
  sourceUrl?: string | null,
  site = activeSiteKey()
) {
  const draft = await parsePastedEventWithAI(text, sourceUrl || null, site);

  if (!draft) {
    throw new Error("Could not find a clear event title and date in that text.");
  }

  return saveImportedEventDraft(
    {
      ...draft,
      raw_description: draft.raw_description || text,
      source_url: draft.source_url || sourceUrl || null,
      confidence_score: draft.confidence_score || 0.7,
      needs_review: true,
    },
    { source: null, sourceType: "paste", site }
  );
}
