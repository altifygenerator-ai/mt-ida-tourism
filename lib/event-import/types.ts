export type EventSourceType = "ics" | "rss" | "json_ld" | "website";

export type EventSource = {
  id: string;
  site?: string | null;
  name: string;
  source_type: EventSourceType;
  url: string;
  city?: string | null;
  category_hint?: string | null;
  venue_hint?: string | null;
  enabled: boolean;
  last_checked_at?: string | null;
  last_status?: string | null;
  notes?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};

export type ImportedEventDraft = {
  title: string;
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
  external_id?: string | null;
  confidence_score?: number | null;
  needs_review?: boolean | null;
};

export type ImportSourceResult = {
  sourceId: string;
  sourceName: string;
  status: "success" | "error";
  found: number;
  inserted: number;
  skipped: number;
  error?: string;
};

export type ImportRunSummary = {
  checked: number;
  found: number;
  inserted: number;
  skipped: number;
  results: ImportSourceResult[];
};
