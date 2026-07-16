import { ImageResponse } from "next/og";

export const alt =
  "Velvet Pour — elevated cocktail service in Salt Lake City";
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
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0D0C0C",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80"
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(105deg, rgba(13, 12, 12, 0.92) 0%, rgba(13, 12, 12, 0.78) 48%, rgba(74, 31, 53, 0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
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
              gap: 22,
              maxWidth: 820,
            }}
          >
            <div
              style={{
                fontSize: 68,
                lineHeight: 1.08,
                color: "#F3EBDD",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              We bring the bar to you
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: "#B7A89A",
                maxWidth: 680,
              }}
            >
              Elevated cocktail service for weddings, private gatherings, and
              corporate celebrations across Salt Lake City
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
      </div>
    ),
    {
      ...size,
    },
  );
}
