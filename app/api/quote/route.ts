import { NextResponse } from "next/server";
import { sendQuoteRequest, type QuoteRequestPayload } from "@/lib/mail";
import { isPackageId } from "@/lib/packages";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function asPositiveNumber(value: unknown): number | null {
  const num =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value)
        : NaN;
  if (!Number.isFinite(num) || num <= 0) return null;
  return num;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot — bots that fill hidden fields are rejected quietly.
  const honeypot = asTrimmedString(body.company) ?? asTrimmedString(body.website);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const phone = asTrimmedString(body.phone);
  const eventDate = asTrimmedString(body.eventDate);
  const location = asTrimmedString(body.location);
  const packageRaw = asTrimmedString(body.packageId);
  const guestCount = asPositiveNumber(body.guestCount);
  const eventLengthHours = asPositiveNumber(body.eventLengthHours);
  const eventType = asTrimmedString(body.eventType) ?? undefined;
  const notes = asTrimmedString(body.notes) ?? undefined;

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }
  if (!phone) {
    return NextResponse.json({ error: "Phone is required." }, { status: 400 });
  }
  if (!eventDate) {
    return NextResponse.json(
      { error: "Event date is required." },
      { status: 400 },
    );
  }
  if (guestCount === null) {
    return NextResponse.json(
      { error: "Guest count must be a positive number." },
      { status: 400 },
    );
  }
  if (!packageRaw || !isPackageId(packageRaw)) {
    return NextResponse.json(
      { error: "A valid package is required." },
      { status: 400 },
    );
  }
  if (eventLengthHours === null) {
    return NextResponse.json(
      { error: "Event length must be a positive number of hours." },
      { status: 400 },
    );
  }
  if (!location) {
    return NextResponse.json(
      { error: "Location is required." },
      { status: 400 },
    );
  }

  const payload: QuoteRequestPayload = {
    name,
    email,
    phone,
    eventDate,
    guestCount,
    packageId: packageRaw,
    eventLengthHours,
    location,
    eventType,
    notes,
  };

  try {
    await sendQuoteRequest(payload);
  } catch (error) {
    console.error("[api/quote] Failed to send quote request", error);
    return NextResponse.json(
      { error: "Unable to send your request. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
