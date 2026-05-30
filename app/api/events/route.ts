import { NextResponse } from "next/server";
import { getApprovedEvents, submitMountIdaEvent } from "@/lib/supabase/events";

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const events = await getApprovedEvents({ fromDate: today });

  return NextResponse.json({ events });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || !body.start_date) {
      return NextResponse.json(
        { error: "Event title and start date are required." },
        { status: 400 },
      );
    }

    const event = await submitMountIdaEvent({
      title: body.title,
      description: body.description,
      city: "Mount Ida",
      location_name: body.location_name,
      address: body.address,
      start_date: body.start_date,
      end_date: body.end_date,
      start_time: body.start_time,
      end_time: body.end_time,
      category: body.category,
      source_url: body.source_url,
      submitter_name: body.submitter_name,
      submitter_email: body.submitter_email,
    });

    return NextResponse.json(
      {
        message: "Event submitted for review.",
        event,
      },
      { status: 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Event submission failed.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}