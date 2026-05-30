import { NextResponse } from "next/server";
import {
  getMountIdaAdminEvents,
  hasAdminSupabaseEnv,
  verifyAdminSecret,
} from "@/lib/supabase/admin-events";

export async function GET(request: Request) {
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
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "pending";
    const events = await getMountIdaAdminEvents(status);

    return NextResponse.json({ events });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load admin events.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
