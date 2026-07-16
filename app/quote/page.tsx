import Link from "next/link";

export default function QuotePage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
        backgroundColor: "#0D0C0C",
        color: "#F3EBDD",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.5rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#F3EBDD",
          marginBottom: "2rem",
        }}
      >
        Velvet Pour
      </Link>
      <h1
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontWeight: 500,
          fontSize: "clamp(2rem, 5vw, 2.75rem)",
          margin: "0 0 0.75rem",
        }}
      >
        Request a Quote
      </h1>
      <p
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          color: "#B7A89A",
          maxWidth: 420,
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        Quote form coming soon. For now, return home — we&apos;ll wire this up
        in a later pass.
      </p>
    </main>
  );
}
