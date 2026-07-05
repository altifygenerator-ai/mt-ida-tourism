import { NextResponse } from "next/server";

export const runtime = "nodejs";

const fallbackRecipient = "naturalstatetourismproject@gmail.com";
const adminEmail = "altifygenerator@gmail.com";

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 },
      );
    }

    const name = cleanText(body.name) || "Unknown sender";
    const email = cleanText(body.email);
    const business = cleanText(body.business);
    const message = cleanText(body.message);

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const recipient = process.env.NATURAL_STATE_CONTACT_EMAIL || fallbackRecipient;

    await resend.emails.send({
      from: "Mount Ida Arkansas Guide <onboarding@resend.dev>",
      to: recipient,
      bcc: adminEmail,
      replyTo: email || recipient,
      subject: `Mount Ida guide contact${business ? `: ${business}` : ""}`,
      text: [
        "New Mount Ida guide contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email || "Not provided"}`,
        `Business: ${business || "Not provided"}`,
        `Source: ${cleanText(body.source) || "Mount Ida Tourism"}`,
        "",
        "Message:",
        message || "No message provided.",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
