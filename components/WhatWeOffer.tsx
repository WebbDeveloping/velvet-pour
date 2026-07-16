"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";

const INTRO_IMAGE =
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80";

const OFFERS = [
  {
    number: "01",
    title: "Complete Mobile Bar — Stocked & Ready",
    body: (
      <>
        From{" "}
        <Box component="strong" sx={{ color: brandColors.ivory, fontWeight: 600 }}>
          spirits and mixers to ice, bar setup, glassware, and garnishes
        </Box>
        , we arrive fully equipped. Your guests get an elevated pour; you get
        an evening free of logistics.
      </>
    ),
  },
  {
    number: "02",
    title: "Licensed Pros Behind the Stick",
    body: (
      <>
        Every bartender is{" "}
        <Box component="strong" sx={{ color: brandColors.ivory, fontWeight: 600 }}>
          licensed, insured, and trained
        </Box>{" "}
        to keep service flowing and drinks dialed in—so your guests feel taken
        care of from the first toast to last call.
      </>
    ),
  },
  {
    number: "03",
    title: "Menus Built Around Your Event",
    body: (
      <>
        Prefer{" "}
        <Box component="strong" sx={{ color: brandColors.ivory, fontWeight: 600 }}>
          classic cocktails
        </Box>
        , a{" "}
        <Box component="strong" sx={{ color: brandColors.ivory, fontWeight: 600 }}>
          custom signature pour
        </Box>
        , or a full themed menu? We build the list around your event—so the bar
        feels like part of the celebration, not a generic add-on.
      </>
    ),
  },
  {
    number: "04",
    title: "Simple Booking, Zero Guesswork",
    body: (
      <>
        Straightforward pricing and a simple booking process, plus{" "}
        <Box component="strong" sx={{ color: brandColors.ivory, fontWeight: 600 }}>
          punctual setup, polished service, and complete tear-down
        </Box>
        . You host; we handle the bar across Salt Lake and the Wasatch Front.
      </>
    ),
  },
] as const;

const borderColor = "rgba(198, 161, 91, 0.28)";

export default function WhatWeOffer() {
  return (
    <Box
      component="section"
      id="what-we-offer"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        backgroundColor: brandColors.background,
        backgroundImage: `
          radial-gradient(
            ellipse 70% 50% at 15% 30%,
            rgba(74, 31, 53, 0.28) 0%,
            transparent 55%
          ),
          linear-gradient(
            180deg,
            #0d0c0c 0%,
            #121010 50%,
            #0d0c0c 100%
          )
        `,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, md: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            },
            gap: { xs: 5, md: 5, lg: 6 },
            alignItems: "stretch",
          }}
        >
          {/* Intro panel */}
          <Box
            sx={{
              p: { xs: 3, md: 3.5 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 500,
                fontSize: { xs: "1.85rem", sm: "2.15rem", md: "2.35rem" },
                lineHeight: 1.2,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: brandColors.ivory,
                mb: { xs: 3, md: 3.5 },
              }}
            >
              Effortless Bar
              <Box component="br" />
              Service for Any Event
            </Typography>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 320,
                aspectRatio: "5 / 4",
                mb: { xs: 3, md: 3.5 },
                overflow: "hidden",
                borderRadius: "2px",
                border: `1px solid ${borderColor}`,
              }}
            >
              <Image
                src={INTRO_IMAGE}
                alt="Craft cocktails and barware ready for service"
                fill
                sizes="(max-width: 900px) 80vw, 320px"
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "0.9375rem", md: "1rem" },
                lineHeight: 1.65,
                color: "rgba(243, 235, 221, 0.82)",
                m: 0,
                maxWidth: 380,
              }}
            >
              The night should be about your guests — not wrangling ice runs or
              bar logistics. Velvet Pour covers everything from setup to last
              call, with refined service for weddings, private parties, and
              corporate events across Salt Lake City and the Wasatch Front.
            </Typography>
          </Box>

          {/* Offers */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: {
                xs: "none",
                md: `1px solid ${borderColor}`,
              },
              pl: { xs: 0, md: 5, lg: 6 },
            }}
          >
            <Box
              sx={{
                pb: 2,
                mb: { xs: 3, md: 4 },
                textAlign: "center",
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 400,
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  lineHeight: 1.1,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: brandColors.gold,
                  m: 0,
                }}
              >
                What you'll get
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },
                gap: { xs: 2, md: 2.5 },
                flex: 1,
              }}
            >
              {OFFERS.map((offer) => (
                <Box
                  key={offer.number}
                  sx={{
                    border: `1px solid ${borderColor}`,
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    minHeight: { sm: 260 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1rem",
                      fontStyle: "italic",
                      lineHeight: 1.2,
                      color: brandColors.gold,
                      mb: 1.5,
                    }}
                  >
                    {offer.number}
                  </Typography>

                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontWeight: 500,
                      fontSize: { xs: "1.15rem", md: "1.25rem" },
                      lineHeight: 1.25,
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      color: brandColors.ivory,
                      mb: 1.5,
                    }}
                  >
                    {offer.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "0.875rem", md: "0.9rem" },
                      lineHeight: 1.65,
                      color: "rgba(183, 168, 154, 0.95)",
                      m: 0,
                      mt: "auto",
                    }}
                  >
                    {offer.body}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
