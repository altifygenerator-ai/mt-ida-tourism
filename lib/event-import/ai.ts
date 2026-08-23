import OpenAI from "openai";
import type { EventSource, ImportedEventDraft } from "./types";
import {
  cleanMultiline,
  cleanString,
  defaultCityForSite,
  guideNameForSite,
  isFutureOrRecent,
  normalizeUrl,
} from "./utils";

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) return null;

  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

function normalizeAiDraft(
  value: unknown,
  defaults: {
    site?: string | null;
    sourceUrl?: string | null;
    city?: string | null;
    category?: string | null;
    venue?: string | null;
  } = {}
): ImportedEventDraft | null {
  if (!value || typeof value !== "object") return null;

  const record = value as Record<string, unknown>;
  const title = cleanString(record.title);
  const startDate = cleanString(record.start_date);

  if (!title || !startDate || !/^20\d{2}-\d{2}-\d{2}$/.test(startDate)) {
    return null;
  }

  if (!isFutureOrRecent(startDate)) return null;

  const tags = Array.isArray(record.tags)
    ? record.tags.map(cleanString).filter((tag): tag is string => Boolean(tag))
    : [];

  return {
    title,
    raw_description: cleanMultiline(record.raw_description) || cleanMultiline(record.description),
    description: cleanMultiline(record.description),
    ai_summary: cleanMultiline(record.ai_summary),
    city: cleanString(record.city) || defaults.city || null,
    location_name:
      cleanString(record.location_name) || cleanString(record.venue_name) || defaults.venue || null,
    address: cleanString(record.address),
    start_date: startDate,
    end_date: cleanString(record.end_date),
    start_time: cleanString(record.start_time),
    end_time: cleanString(record.end_time),
    category: cleanString(record.category) || defaults.category || null,
    tags,
    image_url: cleanString(record.image_url),
    source_url:
      cleanString(record.source_url) ||
      cleanString(record.url) ||
      defaults.sourceUrl ||
      null,
    external_id: cleanString(record.external_id) || cleanString(record.source_url) || null,
    confidence_score:
      typeof record.confidence_score === "number" ? record.confidence_score : 0.72,
    needs_review:
      typeof record.needs_review === "boolean" ? record.needs_review : true,
  };
}

export async function extractEventsFromTextWithAI(
  source: EventSource,
  text: string
): Promise<ImportedEventDraft[]> {
  const openai = getOpenAIClient();
  if (!openai) return [];

  const today = new Date().toISOString().slice(0, 10);
  const clippedText = text.slice(0, 18000);
  const sourceCity = source.city || null;
  const guideCity = defaultCityForSite(source.site);
  const guideName = guideNameForSite(source.site);

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "system",
        content: `You extract event listings for a local ${guideName}. Return JSON only. Do not invent dates, times, prices, locations, performers, or links. Skip anything that is not clearly an upcoming event. Use YYYY-MM-DD dates and 24-hour HH:MM times when known. Mark needs_review true unless the listing is very clear.`,
      },
      {
        role: "user",
        content: `Today's date is ${today}.
Source name: ${source.name}
Source URL: ${source.url}
Guide city: ${guideCity}
Source city hint: ${sourceCity || "none"}
Default category: ${source.category_hint || ""}
Default venue: ${source.venue_hint || ""}

Extract up to 12 upcoming events from this page text. Only include events whose city, venue, address, or source context clearly places them in the guide area. Do not assign the guide city just because the source is being reviewed for this guide. If location cannot be confirmed as relevant, skip the event. Return this JSON shape:
{
  "events": [
    {
      "title": "",
      "raw_description": "",
      "description": "",
      "ai_summary": "",
      "city": "",
      "location_name": "",
      "address": "",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD or empty",
      "start_time": "HH:MM or empty",
      "end_time": "HH:MM or empty",
      "category": "",
      "tags": [],
      "image_url": "",
      "source_url": "",
      "external_id": "",
      "confidence_score": 0.0,
      "needs_review": true
    }
  ]
}

Page text:
${clippedText}`,
      },
    ],
    text: {
      format: {
        type: "json_object",
      },
    },
  });

  const parsed = JSON.parse(response.output_text) as { events?: unknown[] };
  const events = Array.isArray(parsed.events) ? parsed.events : [];

  return events
    .map((event) =>
      normalizeAiDraft(event, {
        site: source.site,
        sourceUrl: source.url,
        city: sourceCity,
        category: source.category_hint || null,
        venue: source.venue_hint || null,
      })
    )
    .filter((event): event is ImportedEventDraft => Boolean(event))
    .map((event) => ({
      ...event,
      source_url: event.source_url ? normalizeUrl(event.source_url, source.url) : source.url,
    }));
}

export async function parsePastedEventWithAI(
  text: string,
  sourceUrl?: string | null,
  site = "mount-ida"
): Promise<ImportedEventDraft | null> {
  const openai = getOpenAIClient();
  if (!openai) {
    throw new Error("OPENAI_API_KEY is required for quick paste imports.");
  }

  const today = new Date().toISOString().slice(0, 10);
  const defaultCity = defaultCityForSite(site);
  const guideName = guideNameForSite(site);

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "system",
        content: `You turn pasted event text into one pending tourism event listing for a local ${guideName}. Return JSON only. Do not invent missing facts. Use needs_review true if details are missing or unclear. Use YYYY-MM-DD dates and 24-hour HH:MM times when known.`,
      },
      {
        role: "user",
        content: `Today's date is ${today}.
Source URL if provided: ${sourceUrl || ""}
Default city: ${defaultCity}

Return JSON only:
{
  "title": "",
  "raw_description": "",
  "description": "",
  "ai_summary": "",
  "city": "${defaultCity}",
  "location_name": "",
  "address": "",
  "start_date": "YYYY-MM-DD",
  "end_date": "YYYY-MM-DD or empty",
  "start_time": "HH:MM or empty",
  "end_time": "HH:MM or empty",
  "category": "",
  "tags": [],
  "source_url": "",
  "confidence_score": 0.0,
  "needs_review": true
}

Pasted event text:
${text.slice(0, 12000)}`,
      },
    ],
    text: {
      format: {
        type: "json_object",
      },
    },
  });

  const parsed = JSON.parse(response.output_text);
  const draft = normalizeAiDraft(parsed, {
    site,
    sourceUrl,
    city: defaultCity,
  });

  if (!draft) return null;

  return {
    ...draft,
    raw_description: draft.raw_description || text,
    source_url: draft.source_url || sourceUrl || null,
    confidence_score: draft.confidence_score || 0.7,
    needs_review: true,
  };
}
