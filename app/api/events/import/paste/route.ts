import { NextResponse } from "next/server";
import { verifyAdminSecret } from "@/lib/supabase/admin-events";
import { savePastedEvent } from "@/lib/event-import/importer";

export async function POST(request: Request) {
  if (!verifyAdminSecret(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const sourceUrl = typeof body.sourceUrl === "string" ? body.sourceUrl.trim() : "";

    if (!text) {
      return NextResponse.json({ error: "Event text is required." }, { status: 400 });
    }

    const result = await savePastedEvent(text, sourceUrl || null, "mount-ida");

    return NextResponse.json(result);
  } catch (error) {
    console.error("Mount Ida paste event import error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not import pasted event." },
      { status: 500 },
    );
  }
}
