import type { EventSource, ImportedEventDraft } from "./types";

/** The site's default city is a hint, not proof of an event's location. */
const ALLOWED: Record<string, string[]> = {
  glenwood: ["Glenwood", "Amity", "Caddo Gap", "Bonnerdale", "Norman"],
  "mount-ida": ["Mount Ida", "Oden", "Story", "Pencil Bluff", "Sims", "Mountain Pine"],
  "hot-springs": ["Hot Springs", "Lake Hamilton"],
  murfreesboro: ["Murfreesboro", "Kirby", "Daisy"],
  amity: ["Amity", "Rosboro", "Glenwood"],
};
const TRUSTED_DOMAINS = new Set([
  "glenwoodregionalchamber.com", "mountidachamber.com", "mtidachamber.com",
  "hotsprings.org", "hotspringsar.gov", "murfreesboroar.gov", "arkansas.com",
  "garvangardens.org", "oaklawn.com", "arlingtonhotel.com", "vaporslive.com",
  "magicsprings.com", "theohioclub.com",
]);
const OUTSIDE = /\b(zurich|switzerland|london|united kingdom|paris|france|rome|italy|atlanta|nashville|tennessee|memphis|new york|california|texas|calico rock|fort smith)\b/i;
const OTHER_STATES = /,\s*(?:AL|AK|AZ|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)\b/i;
const VENUE_CITIES: Array<[RegExp, string]> = [
  [/\bdaisy state park\b/i, "Kirby"],
  [/\bcrater of diamonds state park\b/i, "Murfreesboro"],
  [/\blake ouachita state park\b/i, "Mountain Pine"],
];
function includesCity(text: string, city: string) {
  return new RegExp("\\b" + city.replace(/\s+/g, "\\s+") + "\\b", "i").test(text);
}
function trustedSource(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
    if (parsed.protocol !== "https:" || !TRUSTED_DOMAINS.has(host)) return false;
    if (host === "arkansas.com" && !parsed.pathname.startsWith("/state-parks/explore/parks/")) return false;
    return true;
  } catch { return false; }
}
export type EventDecision = {
  accepted: boolean;
  autoApprove: boolean;
  city: string | null;
  confidence: number;
  reason: string;
};
export function assessImportedEvent(
  draft: ImportedEventDraft,
  source: EventSource | null,
  site: string
): EventDecision {
  const confidence = Math.min(1, Math.max(0, Number(draft.confidence_score) || 0));
  const fallback = draft.city || source?.city || null;
  const pending = (reason: string, city = fallback): EventDecision => ({
    accepted: true, autoApprove: false, city, confidence, reason,
  });
  const reject = (reason: string): EventDecision => ({
    accepted: false, autoApprove: false, city: null, confidence, reason,
  });
  if (!source) return pending("Manual or pasted event requires review");
  const title = (draft.title || "").trim();
  const date = (draft.start_date || "").trim();
  if (title.length < 5 || !/^20\d{2}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date))) {
    return reject("Invalid event title or date");
  }
  const now = Date.now();
  const when = Date.parse(date + "T12:00:00Z");
  if (when < now - 3 * 86400000 || when > now + 400 * 86400000) return reject("Date outside import window");
  const venue = (draft.location_name || "").trim();
  const address = (draft.address || "").trim();
  const city = (draft.city || "").trim();
  const location = [venue, address, city].filter(Boolean).join(" | ");
  if (OUTSIDE.test(location) || OTHER_STATES.test(location)) return reject("Location outside guide region");
  if (/\b(webinar|online only|virtual conference)\b/i.test(title + " " + venue)) return reject("Virtual-only event");
  if (/^(?:international conference|world congress|global summit)/i.test(title) && !address) return reject("Unverified conference listing");
  const regions = ALLOWED[site] || ALLOWED.glenwood;
  const override = VENUE_CITIES.find(([pattern]) => pattern.test(venue + " " + address));
  const locatedCity = override?.[1] || regions.find((candidate) => includesCity(address + " " + venue, candidate));
  if (override && !regions.includes(override[1])) return reject("Venue belongs to a different guide");
  if (city && !regions.some((candidate) => includesCity(city, candidate))) return reject("City is not in guide region");
  const verifiedSource = trustedSource(source.url);
  const statedCity = regions.find((candidate) => includesCity(city, candidate)) || null;
  if (!locatedCity && !statedCity && !verifiedSource) return reject("No verified local location");
  if (!verifiedSource) return pending("Untrusted source: verify venue and date", locatedCity || statedCity);
  if (!venue && !address) return pending("Official source but missing event venue", locatedCity || statedCity);
  const outputCity = locatedCity || statedCity || regions.find((candidate) => includesCity(source.city || "", candidate)) || null;
  if (!outputCity) return pending("No confirmable local city", null);
  const hasLocalEvidence = Boolean(locatedCity || (statedCity && venue && verifiedSource));
  if (!hasLocalEvidence) return pending("Venue has no local corroboration", outputCity);
  if (confidence < 0.82 || source.source_type === "rss") return pending("Confidence below autopublish threshold", outputCity);
  return { accepted: true, autoApprove: true, city: outputCity, confidence, reason: "Verified local official listing" };
}