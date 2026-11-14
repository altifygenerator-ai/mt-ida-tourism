import { supabaseAdmin } from "@/lib/supabase/server";

/** Curated live calendars. Imported events still undergo city/date validation. */
const sources = [
  {
    "site": "mount-ida",
    "name": "Mount Ida Area Chamber calendar",
    "url": "https://www.mountidachamber.com/event-calendar/",
    "city": "Mount Ida",
    "category": "Community",
    "notes": "Official area chamber calendar; only dated relevant events qualify"
  }
  {
    "site": "mount-ida",
    "name": "LOViT Trail Marathon — organizer",
    "url": "https://www.runarkansas.com/LoVitTrailMarathon.htm",
    "city": "Mount Ida",
    "category": "Outdoor & Trails",
    "notes": "Primary organizer page for the annual LOViT trail marathon; verify future dates each year"
  },
] as const;

export async function ensureTrustedEventSources(site?: string) {
  for (const source of sources) {
    if (site && source.site !== site) continue;
    let query = supabaseAdmin.from("event_sources").select("id").eq("url", source.url);
    query = query.eq("site", source.site);
    const { data, error } = await query.limit(1);
    if (error) throw new Error("Cannot check event sources: " + error.message);
    if (data && data.length) continue;
    const { error: insertError } = await supabaseAdmin.from("event_sources").insert({
      site: source.site,
      name: source.name,
      source_type: "website",
      url: source.url,
      city: source.city,
      category_hint: source.category,
      notes: source.notes,
      enabled: true,
    });
    if (insertError && insertError.code !== "23505") {
      console.error("Unable to add event source", source.url, insertError);
    }
  }
}
