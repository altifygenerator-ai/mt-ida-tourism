import { NextResponse } from "next/server";
import { importEventSources } from "@/lib/event-import/importer";

function isValidCronRequest(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return false;

  const authHeader = request.headers.get("authorization");
  if (authHeader === `Bearer ${cronSecret}`) return true;

  const url = new URL(request.url);
  return url.searchParams.get("secret") === cronSecret;
}

export async function GET(request: Request) {
  if (!isValidCronRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const summary = await importEventSources({ site: "mount-ida" });
    return NextResponse.json({ ok: true, summary });
  } catch (error) {
    console.error("Mount Ida cron event import error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Event import failed." },
      { status: 500 },
    );
  }
}
