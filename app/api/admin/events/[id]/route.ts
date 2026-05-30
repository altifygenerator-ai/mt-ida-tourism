import { NextResponse } from "next/server";
import {
  type AdminEventUpdate,
  hasAdminSupabaseEnv,
  updateMountIdaAdminEvent,
  verifyAdminSecret,
} from "@/lib/supabase/admin-events";
import { makeEventSlug } from "@/lib/supabase/events";

type RouteContext = {
  params: Promise<{ id: string }>;
};

const allowedStatuses = new Set(["draft", "pending", "approved", "rejected"]);

function nullableText(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function nullableDateOrTime(value: unknown) {
  return typeof value === "string" && value ? value : null;
}

export async function PATCH(request: Request, { params }: RouteContext) {
  if (!verifyAdminSecret(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!hasAdminSupabaseEnv) {
    return NextResponse.json(
      { error: "Admin Supabase environment variables are missing." },
      { status: 500 },
    );
  }

  try {
    const { id } = await params;
    const body = await request.json();

    const update: AdminEventUpdate = {};

    if (typeof body.title === "string") {
      update.title = body.title.trim();
    }

    if (typeof body.start_date === "string") {
      update.start_date = body.start_date;
    }

    if (typeof body.status === "string") {
      if (!allowedStatuses.has(body.status)) {
        return NextResponse.json({ error: "Invalid event status." }, { status: 400 });
      }
      update.status = body.status;
    }

    if (typeof body.slug === "string") {
      update.slug = body.slug.trim() || makeEventSlug(body.title || "event", body.start_date);
    }

    if (body.slug === undefined && typeof body.title === "string" && typeof body.start_date === "string") {
      update.slug = makeEventSlug(body.title, body.start_date);
    }

    update.description = nullableText(body.description);
    update.raw_description = nullableText(body.raw_description ?? body.description);
    update.ai_summary = nullableText(body.ai_summary);
    update.city = nullableText(body.city) || "Mount Ida";
    update.location_name = nullableText(body.location_name);
    update.address = nullableText(body.address);
    update.end_date = nullableDateOrTime(body.end_date);
    update.start_time = nullableDateOrTime(body.start_time);
    update.end_time = nullableDateOrTime(body.end_time);
    update.category = nullableText(body.category);
    update.image_url = nullableText(body.image_url);
    update.source_url = nullableText(body.source_url);

    if (typeof body.featured === "boolean") {
      update.featured = body.featured;
    }

    if (!update.title || !update.start_date) {
      return NextResponse.json(
        { error: "Event title and start date are required." },
        { status: 400 },
      );
    }

    const event = await updateMountIdaAdminEvent(id, update);

    return NextResponse.json({ event });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not update event.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
