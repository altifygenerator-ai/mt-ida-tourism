import { NextResponse } from "next/server";
import { verifyAdminSecret } from "@/lib/supabase/admin-events";
import { importEventSources } from "@/lib/event-import/importer";

export async function POST(request: Request) {
  if (!verifyAdminSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const sourceId = typeof body.sourceId === "string" && body.sourceId ? body.sourceId : undefined;
    const summary = await importEventSources({ sourceId, site: "mount-ida" });

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Mount Ida manual event import error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Event import failed." },
      { status: 500 },
    );
  }
}
