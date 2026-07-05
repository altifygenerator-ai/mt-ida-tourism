import { NextResponse } from "next/server";
import { verifyAdminSecret } from "@/lib/supabase/admin-events";
import { supabaseAdmin } from "@/lib/supabase/server";
import { cleanString } from "@/lib/event-import/utils";
import type { EventSourceType } from "@/lib/event-import/types";

const sourceTypes = new Set(["website", "json_ld", "ics", "rss"]);

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  if (!verifyAdminSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const update: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    };

    if (typeof body.enabled === "boolean") update.enabled = body.enabled;
    if (typeof body.name === "string") update.name = cleanString(body.name);
    if (typeof body.url === "string") update.url = cleanString(body.url);

    const sourceType = cleanString(body.source_type);
    if (sourceType) {
      if (!sourceTypes.has(sourceType)) {
        return NextResponse.json({ error: "Invalid source type." }, { status: 400 });
      }
      update.source_type = sourceType as EventSourceType;
    }

    if ("city" in body) update.city = cleanString(body.city) || "Mount Ida";
    if ("category_hint" in body) update.category_hint = cleanString(body.category_hint);
    if ("venue_hint" in body) update.venue_hint = cleanString(body.venue_hint);
    if ("notes" in body) update.notes = cleanString(body.notes);

    const { data, error } = await supabaseAdmin
      .from("event_sources")
      .update(update)
      .eq("id", id)
      .eq("site", "mount-ida")
      .select("*")
      .single();

    if (error) throw new Error(error.message);

    return NextResponse.json({ source: data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not update event source." },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request, context: RouteContext) {
  if (!verifyAdminSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const { error } = await supabaseAdmin
      .from("event_sources")
      .delete()
      .eq("id", id)
      .eq("site", "mount-ida");

    if (error) throw new Error(error.message);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not delete event source." },
      { status: 500 },
    );
  }
}
