import { createClient } from "@supabase/supabase-js";
import { MOUNT_IDA_SITE, type EventRecord } from "@/lib/supabase/events";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const hasAdminSupabaseEnv = Boolean(supabaseUrl && serviceRoleKey);

function getAdminClient() {
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function verifyAdminSecret(request: Request) {
  const expectedSecret = process.env.MOUNT_IDA_ADMIN_SECRET;

  if (!expectedSecret) {
    return false;
  }

  const headerSecret = request.headers.get("x-admin-secret");
  const urlSecret = new URL(request.url).searchParams.get("secret");

  return headerSecret === expectedSecret || urlSecret === expectedSecret;
}

export async function getMountIdaAdminEvents(status = "pending") {
  const supabase = getAdminClient();

  let query = supabase
    .from("events")
    .select("*")
    .eq("site", MOUNT_IDA_SITE)
    .order("start_date", { ascending: true })
    .order("created_at", { ascending: false });

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return (data || []) as EventRecord[];
}

export type AdminEventUpdate = Partial<
  Pick<
    EventRecord,
    | "title"
    | "slug"
    | "description"
    | "raw_description"
    | "ai_summary"
    | "city"
    | "location_name"
    | "address"
    | "start_date"
    | "end_date"
    | "start_time"
    | "end_time"
    | "category"
    | "image_url"
    | "source_url"
    | "status"
    | "featured"
  >
>;

export async function updateMountIdaAdminEvent(id: string, update: AdminEventUpdate) {
  const supabase = getAdminClient();

  const payload = {
    ...update,
    site: MOUNT_IDA_SITE,
    needs_review: update.status === "approved" || update.status === "rejected" ? false : true,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("events")
    .update(payload)
    .eq("id", id)
    .eq("site", MOUNT_IDA_SITE)
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as EventRecord;
}
