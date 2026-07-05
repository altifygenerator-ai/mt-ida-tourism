import { createClient } from "@supabase/supabase-js";

export const MOUNT_IDA_SITE = "mount-ida";
export const DEFAULT_EVENT_CITY = "Mount Ida";

export type EventRecord = {
  id: string;
  title: string;
  slug: string;
  raw_description: string | null;
  description: string | null;
  ai_summary: string | null;
  city: string | null;
  location_name: string | null;
  address: string | null;
  start_date: string;
  end_date: string | null;
  start_time: string | null;
  end_time: string | null;
  category: string | null;
  tags: string[] | null;
  image_url: string | null;
  source_url: string | null;
  submitter_name: string | null;
  submitter_email: string | null;
  status: "draft" | "pending" | "approved" | "rejected";
  featured: boolean | null;
  source_type: string | null;
  site: string | null;
  created_at: string | null;
  updated_at: string | null;
};

export type EventInput = {
  title: string;
  description?: string;
  city?: string;
  location_name?: string;
  address?: string;
  start_date: string;
  end_date?: string;
  start_time?: string;
  end_time?: string;
  category?: string;
  source_url?: string;
  submitter_name?: string;
  submitter_email?: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const hasSupabaseEnv = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = hasSupabaseEnv
  ? createClient(supabaseUrl!, supabaseAnonKey!, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

function getEventWriteClient() {
  if (!supabaseUrl) {
    throw new Error("Event submissions are not connected yet.");
  }

  const key = supabaseServiceKey || supabaseAnonKey;

  if (!key) {
    throw new Error("Event submissions are not connected yet.");
  }

  return createClient(supabaseUrl, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function makeEventSlug(title: string, startDate?: string) {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const datePart = startDate ? `-${startDate}` : "";
  const fallback = `event-${Date.now()}`;

  return `${base || fallback}${datePart}`;
}

export function formatEventDate(
  event: Pick<EventRecord, "start_date" | "end_date">,
) {
  const start = new Date(`${event.start_date}T12:00:00`);
  const end = event.end_date ? new Date(`${event.end_date}T12:00:00`) : null;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!end || event.end_date === event.start_date) {
    return dateFormatter.format(start);
  }

  return `${dateFormatter.format(start)} – ${dateFormatter.format(end)}`;
}

export function formatEventTime(
  event: Pick<EventRecord, "start_time" | "end_time">,
) {
  if (!event.start_time) return null;

  const toReadableTime = (time: string) => {
    const [hours = "0", minutes = "0"] = time.split(":");
    const date = new Date();
    date.setHours(Number(hours), Number(minutes), 0, 0);

    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  };

  const start = toReadableTime(event.start_time);
  const end = event.end_time ? toReadableTime(event.end_time) : null;

  return end ? `${start} – ${end}` : start;
}

export function getEventDescription(
  event: Pick<EventRecord, "description" | "ai_summary" | "raw_description">,
) {
  return (
    event.description ||
    event.ai_summary ||
    event.raw_description ||
    "More details will be added as they become available."
  );
}

export function getWeekendRange(from = new Date()) {
  const date = new Date(from);
  date.setHours(12, 0, 0, 0);

  const day = date.getDay();
  const daysUntilFriday = (5 - day + 7) % 7;

  const friday = new Date(date);
  friday.setDate(date.getDate() + daysUntilFriday);

  const sunday = new Date(friday);
  sunday.setDate(friday.getDate() + 2);

  return {
    friday: friday.toISOString().slice(0, 10),
    sunday: sunday.toISOString().slice(0, 10),
  };
}

export async function getApprovedEvents(options?: {
  limit?: number;
  fromDate?: string;
  toDate?: string;
  featuredOnly?: boolean;
}) {
  if (!supabase) return [] as EventRecord[];

  let query = supabase
    .from("events")
    .select("*")
    .eq("status", "approved")
    .eq("site", MOUNT_IDA_SITE)
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true, nullsFirst: false });

  if (options?.fromDate) {
    query = query.gte("start_date", options.fromDate);
  }

  if (options?.toDate) {
    query = query.lte("start_date", options.toDate);
  }

  if (options?.featuredOnly) {
    query = query.eq("featured", true);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Mount Ida events query failed", error.message);
    return [] as EventRecord[];
  }

  return (data || []) as EventRecord[];
}

export async function getApprovedEventBySlug(slug: string) {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("status", "approved")
    .eq("site", MOUNT_IDA_SITE)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Mount Ida event lookup failed", error.message);
    return null;
  }

  return data as EventRecord | null;
}

export async function submitMountIdaEvent(input: EventInput) {
  const writeClient = getEventWriteClient();

  const cleanTitle = input.title.trim();
  const cleanDescription = input.description?.trim() || null;
  const startDate = input.start_date;

  const payload = {
    title: cleanTitle,
    slug: makeEventSlug(cleanTitle, startDate),
    raw_description: cleanDescription,
    description: cleanDescription,
    city: DEFAULT_EVENT_CITY,
    location_name: input.location_name?.trim() || null,
    address: input.address?.trim() || null,
    start_date: startDate,
    end_date: input.end_date || null,
    start_time: input.start_time || null,
    end_time: input.end_time || null,
    category: input.category?.trim() || null,
    source_url: input.source_url?.trim() || null,
    submitter_name: input.submitter_name?.trim() || null,
    submitter_email: input.submitter_email?.trim() || null,
    status: "pending" as const,
    featured: false,
    source_type: "public-submit",
    site: MOUNT_IDA_SITE,
    needs_review: true,
  };

  const { error } = await writeClient.from("events").insert(payload);

  if (error) {
    throw new Error(error.message);
  }

  return {
    title: cleanTitle,
    slug: payload.slug,
    status: "pending",
    site: MOUNT_IDA_SITE,
  };
}
