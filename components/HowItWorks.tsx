"use client";

import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";
import { Calendar, GlassWater, Sparkles, Users } from "@/lib/icons";
import PhotoOrbitRing from "@/components/PhotoOrbitRing";

const borderColor = "rgba(198, 161, 91, 0.28)";

const STEPS = [
  {
    number: "Step 01",
    title: (
      <>
        Lock in
        <br />
        your date
      </>
    ),
    body: "Tell us when you're celebrating, and we'll hold the bar for your occasion",
    Icon: Calendar,
  },
  {
    number: "Step 02",
    title: "Share your guest count",
    body: "A quick headcount helps us size the bar and staff so everyone is covered",
    Icon: Users,
  },
  {
    number: "Step 03",
    title: (
      <>
        Choose a
        <br />
        package
      </>
    ),
    body: "Browse our bar packages and pick the pour that fits your vibe and budget",
    Icon: GlassWater,
  },
  {
    number: "Step 04",
    title: (
      <>
        Sit back —
        <br />
        we handle it
      </>
    ),
    body: "From arrival to tear-down, we run the bar so you can stay in the moment",
    Icon: Sparkles,
  },
] as const;

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="how-it-works"
      sx={{
        position: "relative",
        pt: { xs: 22, sm: 28, md: 36 },
        pb: { xs: 8, md: 12 },
        backgroundColor: brandColors.background,
        backgroundImage: `
          radial-gradient(
            ellipse 60% 45% at 50% 100%,
            rgba(74, 31, 53, 0.35) 0%,
            transparent 60%
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
            How it works
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 500,
              fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
              lineHeight: 1.1,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: brandColors.ivory,
              m: 0,
            }}
          >
            Booking in four steps
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, md: 1.5 },
            width: "100%",
            mb: { xs: 4, md: 5 },
          }}
        >
          {STEPS.map((step) => (
            <Box
              key={step.number}
              sx={{
                border: `1px solid ${borderColor}`,
                p: { xs: 2.5, md: 2.75 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: { md: 340 },
                backgroundColor: "rgba(13, 12, 12, 0.72)",
                backdropFilter: "blur(6px)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: brandColors.gold,
                  mb: 1.5,
                }}
              >
                {step.number}
              </Typography>

              <Typography
                component="h3"
                sx={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 500,
                  fontSize: { xs: "1.2rem", md: "1.35rem" },
                  lineHeight: 1.25,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: brandColors.ivory,
                  mb: 2.5,
                }}
              >
                {step.title}
              </Typography>

              <Box
                sx={{
                  color: brandColors.gold,
                  mb: 2.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <step.Icon size={48} strokeWidth={1.25} aria-hidden />
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "0.875rem", md: "0.9rem" },
                  lineHeight: 1.65,
                  color: "rgba(183, 168, 154, 0.95)",
                  m: 0,
                }}
              >
                {step.body}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          component="a"
          href="/quote"
          variant="contained"
          size="large"
          sx={{
            fontSize: { xs: "1rem", md: "0.9375rem" },
            py: { xs: 1.5, md: 1.25 },
            px: 4,
            borderColor: brandColors.gold,
            "&:hover": {
              borderColor: brandColors.gold,
            },
          }}
        >
          Get Quote
        </Button>
      </Container>
    </Box>
  );
}
