import { ImageResponse } from "next/og";

export const alt =
  "Velvet Pour — Luxury mobile bartending in Salt Lake City";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0D0C0C",
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(74, 31, 53, 0.72) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(122, 48, 72, 0.35) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 36,
              height: 2,
              backgroundColor: "#C6A15B",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C6A15B",
              fontWeight: 500,
            }}
          >
            Velvet Pour
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.08,
              color: "#F3EBDD",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Luxury mobile bartending
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#B7A89A",
              maxWidth: 720,
            }}
          >
            Premium cocktails for weddings, private events, and corporate
            gatherings across Salt Lake City & the Wasatch Front
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "#C6A15B",
              letterSpacing: "0.06em",
            }}
          >
            Licensed · Insured · Ready to pour
          </div>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#C6A15B",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
