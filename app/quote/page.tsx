import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { isPackageId, type PackageId } from "@/lib/packages";

export const metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your event — date, guests, package, and location — and we'll put together a custom quote.",
};

type QuotePageProps = {
  searchParams: Promise<{ package?: string | string[] }>;
};

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.package) ? params.package[0] : params.package;
  const initialPackageId: PackageId | undefined =
    raw && isPackageId(raw) ? raw : undefined;

  return (
    <main
      style={{
        minHeight: "100dvh",
        backgroundColor: "#0D0C0C",
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(122, 48, 72, 0.35), transparent 60%),
          linear-gradient(180deg, #0D0C0C 0%, #141012 100%)
        `,
        color: "#F3EBDD",
        padding: "32px 16px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: 40 }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.5rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#F3EBDD",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            Velvet Pour
          </Link>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(2rem, 5vw, 2.75rem)",
              letterSpacing: "0.02em",
              margin: "0 0 0.75rem",
              color: "#F3EBDD",
            }}
          >
            Request a Quote
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              color: "#B7A89A",
              maxWidth: 440,
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "0.9375rem",
            }}
          >
            Share a few details about your celebration and we&apos;ll follow up
            with a custom quote.
          </p>
        </header>

        <QuoteForm initialPackageId={initialPackageId} />
      </div>
    </main>
  );
}
