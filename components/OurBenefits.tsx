"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";

const borderColor = "rgba(243, 235, 221, 0.28)";

const BENEFITS = [
  {
    number: "01",
    title: (
      <>
        Seasoned
        <br />
        Team
      </>
    ),
    body: "Skilled mixologists and warm, attentive bartenders bring polish and personality to the room — so guests feel hosted, not just served.",
  },
  {
    number: "02",
    title: (
      <>
        Tailored
        <br />
        Menus
      </>
    ),
    body: "We build drink lists around your theme and crowd — signature cocktails, crowd favorites, and premium pours that make every round feel intentional.",
  },
  {
    number: "03",
    title: (
      <>
        Polished
        <br />
        Bar Presence
      </>
    ),
    body: "Our setup looks as good as it works: a stylish station that lifts the room's atmosphere while keeping pours fast and lines short.",
  },
  {
    number: "04",
    title: (
      <>
        Clear
        <br />
        Communication
      </>
    ),
    body: "Expect quick replies and honest planning from first inquiry through the final toast — no radio silence, no surprises.",
  },
  {
    number: "05",
    title: (
      <>
        Fully
        <br />
        Covered
      </>
    ),
    body: "We're licensed and carry general and liquor liability insurance, so you can celebrate knowing the bar side is taken care of.",
  },
] as const;

export default function OurBenefits() {
  return (
    <Box
      component="section"
      id="our-benefits"
      sx={{
        position: "relative",
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
        // Vertical wash ending on burgundy so Packages can pick up seamlessly
        backgroundColor: brandColors.velvet,
        backgroundImage: `
          linear-gradient(
            180deg,
            ${brandColors.velvet} 0%,
            #3a1829 45%,
            ${brandColors.burgundy} 100%
          )
        `,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, md: 3 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(0, 1fr)" },
            gap: { xs: 3, md: 4 },
            alignItems: "center",
          }}
        >
          {/* Intro */}
          <Box
            sx={{
              p: { xs: 0, md: 2 },
              pr: { md: 4 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
              <Typography
                component="p"
                sx={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 400,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  color: brandColors.gold,
                  m: 0,
                  mb: 1,
                }}
              >
                Our Benefits
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
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                Why hosts
                <Box component="br" />
                choose us
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.9375rem", md: "1rem" },
                  lineHeight: 1.7,
                  color: "rgba(243, 235, 221, 0.88)",
                  m: 0,
                  mb: { xs: 3, md: 4 },
                  maxWidth: 420,
                }}
              >
                Years behind the stick and thousands of celebrations later, we
                know how to make the bar a highlight — not a headache. Share
                your vision, then step into the night while we keep pours
                flowing and guests smiling.
              </Typography>

              <Button
                component="a"
                href="/quote"
                variant="outlined"
                size="large"
                sx={{
                  alignSelf: "flex-start",
                  fontSize: { xs: "1rem", md: "0.9375rem" },
                  py: { xs: 1.5, md: 1.25 },
                  px: 4,
                  borderColor: brandColors.ivory,
                  color: brandColors.ivory,
                  backgroundColor: "transparent",
                  "&:hover": {
                    borderColor: brandColors.gold,
                    color: brandColors.gold,
                    backgroundColor: "rgba(243, 235, 221, 0.06)",
                  },
                }}
              >
                Get Quote
              </Button>
            </Box>

          {/* Benefit rows */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {BENEFITS.map((benefit) => (
              <Box
                key={benefit.number}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "flex-start",
                  gap: { xs: 1.5, sm: 2.5 },
                  border: `1px solid ${borderColor}`,
                  p: { xs: 2.5, sm: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    lineHeight: 1.2,
                    color: brandColors.gold,
                    flexShrink: 0,
                    minWidth: { sm: 36 },
                  }}
                >
                  {benefit.number}
                </Typography>

                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontWeight: 500,
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    lineHeight: 1.2,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: brandColors.ivory,
                    flexShrink: 0,
                    width: { sm: "28%" },
                    m: 0,
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.8125rem", md: "0.875rem" },
                    lineHeight: 1.55,
                    color: "rgba(243, 235, 221, 0.78)",
                    m: 0,
                    flex: 1,
                  }}
                >
                  {benefit.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
