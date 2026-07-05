import { unstable_noStore as noStore } from "next/cache";
import { hasSupabaseAdminEnv, supabaseAdmin } from "@/lib/supabase/server";

export type EventStatus = "draft" | "pending" | "approved" | "rejected";

export type EventSite = "glenwood" | "mount-ida" | "hot-springs" | "amity" | "murfreesboro";

export type TourismEvent = {
  id: string;
  site?: EventSite | string | null;
  title: string;
  slug: string;
  raw_description?: string | null;
  description?: string | null;
  ai_summary?: string | null;
  city?: string | null;
  location_name?: string | null;
  address?: string | null;
  start_date: string;
  end_date?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  category?: string | null;
  tags?: string[] | null;
  image_url?: string | null;
  source_url?: string | null;
  submitter_name?: string | null;
  submitter_email?: string | null;
  status: EventStatus;
  featured?: boolean | null;
  source_type?: string | null;
  external_id?: string | null;
  confidence_score?: number | null;
  needs_review?: boolean | null;
  source_id?: string | null;
  source_hash?: string | null;
  imported_at?: string | null;
  is_recurring?: boolean | null;
  recurrence_type?: string | null;
  recurrence_days?: string[] | null;
  recurrence_end_date?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};

export const MOUNT_IDA_SITE: EventSite = "mount-ida";

export function createEventSlug(title: string, date?: string) {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  if (!date) return base;

  return `${base}-${date}`.replace(/(^-|-$)+/g, "");
}

export async function getEventSourcesForAdmin(site: EventSite = MOUNT_IDA_SITE) {
  noStore();

  if (!hasSupabaseAdminEnv) return [];

  const { data, error } = await supabaseAdmin
    .from("event_sources")
    .select("*")
    .eq("site", site)
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching event sources:", error);
    return [];
  }

  return data;
}

export async function getRecentEventImportRuns(limit = 20, site: EventSite = MOUNT_IDA_SITE) {
  noStore();

  if (!hasSupabaseAdminEnv) return [];

  const { data, error } = await supabaseAdmin
    .from("event_import_runs")
    .select("*, event_sources!inner(name, site)")
    .eq("event_sources.site", site)
    .order("started_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching event import runs:", error);
    return [];
  }

  return data;
}
