"use client";

import { useRef } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";
import PhotoOrbitRing from "@/components/PhotoOrbitRing";

const borderColor = "rgba(243, 235, 221, 0.28)";

const PACKAGES = [
  {
    id: "bws",
    title: "Beer, Wine & Soda",
    body: "Crowd-pleasing beers, wines, and soft drinks — a clean, refreshing lineup that keeps the celebration going without fuss.",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "signature",
    title: "Signature Sips",
    body: "Everything in Beer, Wine & Soda, plus two custom cocktails designed around your theme, colors, or couple story.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "essentials",
    title: "Essentials Bar",
    body: "A complete open-bar feel: spirits, mixers, beer, wine, and soda — the flexible middle ground for most celebrations.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "luxe",
    title: "Luxe Bar",
    body: "Built like Essentials, with upgraded, top-shelf brands that bring a little extra polish to the pour.",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=400&q=80",
    popular: true,
  },
  {
    id: "opulent",
    title: "Opulent Bar",
    body: "Reserved for hosts who want the finest labels only — a truly elevated pour from first toast to last call.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "brunch",
    title: "Brunch Bar",
    body: "Bubbly, juices, and the spirits you need for mimosas, Bloody Marys, and brunch classics — including our Breakfast Martini.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
  },
] as const;

export default function Packages() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="packages"
      sx={{
        position: "relative",
        pt: { xs: 22, sm: 28, md: 36 },
        pb: { xs: 8, md: 12 },
        // Starts on burgundy (Benefits' end) so the two sections read as one band
        backgroundColor: brandColors.burgundy,
        backgroundImage: `
          linear-gradient(
            180deg,
            ${brandColors.burgundy} 0%,
            #5a2840 40%,
            #3a1829 100%
          )
        `,
        overflow: "hidden",
      }}
    >
      <PhotoOrbitRing sectionRef={sectionRef} />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2.5, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            component="p"
            sx={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              color: brandColors.gold,
              m: 0,
              mb: 1,
            }}
          >
            Bar Packages
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 500,
              fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
              lineHeight: 1.1,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: brandColors.ivory,
              m: 0,
            }}
          >
            Options for every
            <Box component="br" />
            celebration
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 2 },
            width: "100%",
          }}
        >
          {PACKAGES.map((pkg) => (
            <Box
              key={pkg.id}
              component="a"
              href="/quote"
              id={pkg.id === "signature" ? "signature" : undefined}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
                border: `1px solid ${borderColor}`,
                p: { xs: 2.5, md: 3 },
                minHeight: { md: 340 },
                backgroundColor: "rgba(13, 12, 12, 0.45)",
                backdropFilter: "blur(6px)",
                transition:
                  "border-color 0.2s ease, background-color 0.2s ease",
                "&:hover": {
                  borderColor: brandColors.gold,
                  backgroundColor: "rgba(13, 12, 12, 0.6)",
                },
              }}
            >
              {"popular" in pkg && pkg.popular ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    px: 1.25,
                    py: 0.5,
                    backgroundColor: brandColors.gold,
                    color: brandColors.background,
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Most Popular
                </Box>
              ) : null}

              <Typography
                component="h3"
                sx={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 500,
                  fontSize: { xs: "1.15rem", md: "1.25rem" },
                  lineHeight: 1.25,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: brandColors.ivory,
                  m: 0,
                  mb: 2,
                  mt: "popular" in pkg && pkg.popular ? 2 : 0,
                }}
              >
                {pkg.title}
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  width: 140,
                  height: 140,
                  mb: 2,
                  overflow: "hidden",
                  borderRadius: "2px",
                  border: `1px solid ${borderColor}`,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={pkg.image}
                  alt=""
                  fill
                  sizes="140px"
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "0.8125rem", md: "0.875rem" },
                  lineHeight: 1.55,
                  color: "rgba(243, 235, 221, 0.78)",
                  m: 0,
                  mt: "auto",
                }}
              >
                {pkg.body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
