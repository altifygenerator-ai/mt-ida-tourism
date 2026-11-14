import type { EventSource, ImportedEventDraft } from "./types";

/**
 * Auto-publication gate for imported events.
 *
 * A source URL or a site default is not evidence that every event is local.
 * Reviewable events can remain pending; only well-supported listings go live.
 */
const SITE_CITIES: Record<string, string[]> = {
  "hot-springs": ["Hot Springs"],
  glenwood: ["Glenwood", "Caddo Gap", "Amity", "Norman", "Kirby"],
  "mount-ida": ["Mount Ida", "Oden", "Story", "Norman", "Pencil Bluff", "Sims"],
  murfreesboro: ["Murfreesboro", "Daisy", "Kirby"],
  amity: ["Amity"],
};

const KNOWN_CITIES = [
  "Hot Springs Village", "Little Rock", "North Little Rock", "Arkadelphia",
  "Fort Smith", "Texarkana", "Benton", "Malvern", "Nashville", "Mena",
  "Hot Springs", "Mount Ida", "Glenwood", "Murfreesboro", "Amity",
  "Caddo Gap", "Norman", "Oden", "Story", "Pencil Bluff", "Sims",
  "Daisy", "Kirby", "Hope", "De Queen", "Royal", "Jessieville",
];

const LOCAL_ORGANIZERS: Record<string, string[]> = {
  "hot-springs": ["hotsprings.org", "hotspringsarts.org", "hotspringschamber.com"],
  glenwood: ["glenwoodregionalchamber.com"],
  "mount-ida": ["mountidachamber.com"],
  murfreesboro: ["murfreesboroar.gov"],
  amity: ["ohacademy.org"],
};

function simplify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function mentions(text: string, place: string) {
  return (" " + simplify(text) + " ").includes(" " + simplify(place) + " ");
}

function detectPlace(text: string): string | null {
  if (!text.trim()) return null;
  return [...KNOWN_CITIES]
    .sort((a, b) => b.length - a.length)
    .find((city) => mentions(text, city)) || null;
}

function isRealDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(date + "T12:00:00Z");
  return !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === date;
}

export function isPublicSourceUrl(rawUrl: string): boolean {
  try {
    const url = new URL(rawUrl);
    if (url.protocol !== "https:" || url.username || url.password) return false;
    const h = url.hostname.toLowerCase();
    if (h === "localhost" || h.endsWith(".local") ||
      h.endsWith(".internal") || h.endsWith(".localhost") ||
      h === "metadata.google.internal" || h === "0.0.0.0" ||
      h === "169.254.169.254" || h === "::1" || h.startsWith("127.")) return false;
    if (/^\d+\.\d+\.\d+\.\d+$/.test(h)) return false;
    if (h.includes(":")) return false; // IPv6 literals
    return true;
  } catch {
    return false;
  }
}

function isKnownLocalOrganizer(source: EventSource, site: string): boolean {
  try {
    const host = new URL(source.url).hostname.toLowerCase().replace(/^www\./, "");
    return (LOCAL_ORGANIZERS[site] || []).some((known) =>
      host === known || host.endsWith("." + known)
    );
  } catch {
    return false;
  }
}

export type EventAssessment = {
  accepted: boolean;
  autoPublish: boolean;
  city: string | null;
  reason: string;
};

export function assessImportedEvent(
  draft: ImportedEventDraft,
  source: EventSource | null,
  site: string
): EventAssessment {
  const pending = (reason: string, city: string | null = null): EventAssessment => ({
    accepted: true, autoPublish: false, city, reason,
  });
  const reject = (reason: string): EventAssessment => ({
    accepted: false, autoPublish: false, city: null, reason,
  });

  if (/\b(city council|board of directors|planning commission|zoning commission|staff meeting|job fair|deadline|holiday closure)\b/i.test(draft.title)) {
    return reject("Not a visitor-facing event");
  }
  if (!draft.title?.trim() || !isRealDate(draft.start_date)) {
    return reject("Missing title or valid event date");
  }
  const now = new Date();
  const first = new Date(draft.start_date + "T12:00:00Z");
  const oldest = new Date(now);
  oldest.setUTCDate(oldest.getUTCDate() - 1);
  const furthest = new Date(now);
  furthest.setUTCDate(furthest.getUTCDate() + 365);
  if (first < oldest || first > furthest) return reject("Event date is not upcoming");
  if (draft.end_date &&
    (!isRealDate(draft.end_date) || draft.end_date < draft.start_date)) {
    return reject("Invalid end date");
  }

  if (source && !isPublicSourceUrl(source.url)) {
    return reject("Event source must be a public HTTPS URL");
  }

  const acceptedCities = SITE_CITIES[site] || [];
  const fromAddress = detectPlace(draft.address || "");
  const fromVenue = detectPlace(draft.location_name || "");
  const fromCity = detectPlace(draft.city || "");
  const statedPlace = fromAddress || fromVenue || fromCity;
  const localOrganizer = source ? isKnownLocalOrganizer(source, site) : false;

  // The source's configured city is only a hint. A broad statewide feed
  // cannot claim every event occurs in that city.
  if (statedPlace && !acceptedCities.includes(statedPlace)) {
    return reject("Location is outside the guide area: " + statedPlace);
  }
  if (!source) return pending("Manual submissions retain review", statedPlace);
  if (!statedPlace && !localOrganizer) {
    return pending("No independently supported local location");
  }

  const resolvedCity = statedPlace || (
    localOrganizer && source.city && acceptedCities.includes(source.city)
      ? source.city : null
  );
  if (!resolvedCity) return pending("Location is not sufficiently clear");

  const structured = source.source_type === "ics" || source.source_type === "json_ld";
  const confidence = draft.confidence_score ?? 0;
  const hasSource = Boolean(draft.source_url || source.url);
  const hasDescription = Boolean((draft.description || draft.raw_description || "").trim());
  const autoPublish = hasSource && hasDescription && (
    (structured && confidence >= 0.85) ||
    (localOrganizer && confidence >= 0.90 && draft.needs_review === false)
  );

  return {
    accepted: true,
    autoPublish,
    city: resolvedCity,
    reason: autoPublish ? "Verified event from supported source" :
      "Awaiting stronger structured data or source verification",
  };
}


/** Compare event names without treating two different shows as duplicates. */
export function areSameEventTitle(first: string, second: string) {
  const a = simplify(first);
  const b = simplify(second);
  if (!a || !b) return false;
  if (a === b) return true;
  const words = (value: string) =>
    [...new Set(value.split(" ").filter((w) =>
      w.length > 2 && !["the", "and", "for", "with", "2026", "2027", "2028"].includes(w)
    ))];
  const left = words(a);
  const right = words(b);
  if (Math.min(left.length, right.length) < 3) return false;
  const overlap = left.filter((word) => right.includes(word)).length;
  return overlap / Math.max(left.length, right.length) >= 0.86;
}
