import crypto from "node:crypto";
import { createEventSlug } from "@/lib/events";
import type { ImportedEventDraft } from "./types";

export function cleanString(value: unknown) {
  if (typeof value !== "string") return null;
  const trimmed = value.replace(/\s+/g, " ").trim();
  return trimmed.length ? trimmed : null;
}

export function cleanMultiline(value: unknown) {
  if (typeof value !== "string") return null;
  const trimmed = value
    .replace(/\r/g, "")
    .replace(/[\t ]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return trimmed.length ? trimmed : null;
}

export function normalizeUrl(url: string, baseUrl?: string) {
  try {
    return new URL(url, baseUrl).toString();
  } catch {
    return url;
  }
}

export function hashText(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function normalizeTitleForCompare(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function makeSourceHash(
  site: string | null,
  sourceId: string | null,
  draft: ImportedEventDraft
) {
  const identity = [
    site || "mount-ida",
    sourceId || "manual-import",
    draft.external_id || "",
    draft.source_url || "",
    normalizeTitleForCompare(draft.title),
    draft.start_date || "",
    draft.location_name || "",
  ]
    .filter(Boolean)
    .join("|");

  return hashText(identity);
}

export function makeImportSlug(draft: ImportedEventDraft) {
  const base = createEventSlug(draft.title, draft.start_date);
  return `${base}-${hashText(`${draft.title}-${draft.start_date}-${draft.source_url || ""}`).slice(0, 6)}`;
}

export function toDateAndTime(value?: string | null) {
  if (!value) return { date: null, time: null };

  const text = value.trim();
  if (!text) return { date: null, time: null };

  const dateOnly = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dateOnly) return { date: text, time: null };

  const isoDate = text.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2})/);
  if (isoDate) {
    return {
      date: `${isoDate[1]}-${isoDate[2]}-${isoDate[3]}`,
      time: `${isoDate[4]}:${isoDate[5]}`,
    };
  }

  const icsDate = text.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2}))?/);
  if (icsDate) {
    return {
      date: `${icsDate[1]}-${icsDate[2]}-${icsDate[3]}`,
      time: icsDate[4] ? `${icsDate[4]}:${icsDate[5]}` : null,
    };
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return {
      date: parsed.toISOString().slice(0, 10),
      time: `${String(parsed.getHours()).padStart(2, "0")}:${String(
        parsed.getMinutes()
      ).padStart(2, "0")}`,
    };
  }

  return { date: null, time: null };
}

export function decodeIcsText(value?: string | null) {
  if (!value) return null;

  const decoded = value
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\")
    .trim();

  return decoded || null;
}

export function isFutureOrRecent(date: string) {
  const eventDate = new Date(`${date}T12:00:00`).getTime();
  if (Number.isNaN(eventDate)) return false;

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 2);
  return eventDate >= cutoff.getTime();
}

export function activeSiteKey() {
  return process.env.SITE_KEY || "mount-ida";
}

export function defaultCityForSite(site?: string | null) {
  if (site === "mount-ida") return "Mount Ida";
  if (site === "hot-springs") return "Hot Springs";
  if (site === "amity") return "Amity";
  if (site === "murfreesboro") return "Murfreesboro";
  return "Glenwood";
}

export function guideNameForSite(site?: string | null) {
  if (site === "mount-ida") return "Mount Ida, Arkansas travel guide";
  if (site === "hot-springs") return "Hot Springs, Arkansas travel guide";
  if (site === "amity") return "Amity, Arkansas travel guide";
  if (site === "murfreesboro") return "Murfreesboro, Arkansas travel guide";
  return "Glenwood, Arkansas travel guide";
}
