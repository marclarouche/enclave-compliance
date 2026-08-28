import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  // Phase 3 (see SITE_PLAN.md): send a real notification email once a
  // destination address is confirmed. Logs only for now.
  console.log("[contact] lead captured:", email);

  return NextResponse.json({ ok: true });
}
