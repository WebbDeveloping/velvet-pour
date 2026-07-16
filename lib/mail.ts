import { getPackageTitle, type PackageId } from "@/lib/packages";

export type QuoteRequestPayload = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  packageId: PackageId;
  eventLengthHours: number;
  location: string;
  eventType?: string;
  notes?: string;
};

/**
 * Stub mailer — logs the quote request and pretends to send.
 * Replace the body with Resend (or similar) when real email is ready.
 */
export async function sendQuoteRequest(
  payload: QuoteRequestPayload,
): Promise<void> {
  const to = process.env.QUOTE_TO_EMAIL ?? "quotes@example.com";
  const packageTitle = getPackageTitle(payload.packageId);

  console.info("[mail:stub] Quote request", {
    to,
    subject: `Quote request from ${payload.name} — ${packageTitle}`,
    payload: {
      ...payload,
      packageTitle,
    },
  });
}
