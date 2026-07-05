import { NextResponse } from "next/server";
import { verifyAdminSecret } from "@/lib/supabase/admin-events";
import { supabaseAdmin } from "@/lib/supabase/server";
import { cleanString } from "@/lib/event-import/utils";
import type { EventSourceType } from "@/lib/event-import/types";

const sourceTypes = new Set(["website", "json_ld", "ics", "rss"]);

export async function POST(request: Request) {
  if (!verifyAdminSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const name = cleanString(body.name);
    const url = cleanString(body.url);
    const sourceType = cleanString(body.source_type) || "website";

    if (!name || !url) {
      return NextResponse.json({ error: "Source name and URL are required." }, { status: 400 });
    }

    if (!sourceTypes.has(sourceType)) {
      return NextResponse.json({ error: "Invalid source type." }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("event_sources")
      .insert({
        site: "mount-ida",
        name,
        url,
        source_type: sourceType as EventSourceType,
        city: cleanString(body.city) || "Mount Ida",
        category_hint: cleanString(body.category_hint),
        venue_hint: cleanString(body.venue_hint),
        notes: cleanString(body.notes),
        enabled: true,
      })
      .select("*")
      .single();

    if (error) throw new Error(error.message);

    return NextResponse.json({ source: data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not add event source." },
      { status: 500 },
    );
  }
}
