import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    // Minimal validation (UI-only project): ensure we received an object.
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    // In a real app you would:
    // - validate + sanitize
    // - store in DB
    // - send confirmation email
    // For now we simply acknowledge.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
