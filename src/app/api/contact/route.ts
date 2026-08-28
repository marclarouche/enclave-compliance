import { NextResponse } from "next/server";

const NOTIFY_TO = process.env.CONTACT_NOTIFICATION_EMAIL ?? "marc.larouche@gmail.com";
const NOTIFY_FROM = process.env.RESEND_FROM_EMAIL ?? "Enclave Compliance <onboarding@resend.dev>";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[contact] lead captured (RESEND_API_KEY not set, notification not sent):", email);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      subject: "New lead — enclavecompliance.com",
      text: `New "Talk to us" submission from: ${email}`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend notification failed:", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "Could not send notification" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
