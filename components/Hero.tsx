"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";
import HeroPhotoSlider from "@/components/HeroPhotoSlider";
import { MapPin } from "@/lib/icons";

const TRUST_ITEMS = [
  "Licensed & insured",
  "Salt Lake City",
  "Weddings & corporate",
] as const;

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: brandColors.background,
        backgroundImage: `
          radial-gradient(
            ellipse 80% 60% at 85% 40%,
            rgba(74, 31, 53, 0.45) 0%,
            transparent 55%
          ),
          linear-gradient(
            165deg,
            #0d0c0c 0%,
            #141010 45%,
            #0d0c0c 100%
          )
        `,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          alignItems: "center",
          px: { xs: 2.5, md: 3 },
          pb: { xs: 6, md: 8 },
          pt: { xs: 4, md: 3 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.05fr) minmax(0, 1fr)" },
            gap: { xs: 5, md: 6, lg: 8 },
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box className="hero-fade-delay">
            <Typography
              component="h1"
              sx={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 500,
                fontSize: { xs: "2.35rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
                lineHeight: 1.08,
                letterSpacing: "0.01em",
                color: brandColors.ivory,
                mb: 2.5,
                maxWidth: 560,
              }}
            >
              We bring the bar, the pours, and the polish —{" "}
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: brandColors.gold,
                }}
              >
                you bring the celebration.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.0625rem" },
                color: brandColors.muted,
                maxWidth: 440,
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              Premium mobile bartending for weddings, private gatherings, and
              corporate events
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 3.5, alignItems: "center" }}
            >
              <Box
                component="span"
                aria-hidden
                sx={{
                  color: brandColors.gold,
                  display: "inline-flex",
                  flexShrink: 0,
                  lineHeight: 0,
                }}
              >
                <MapPin size={16} strokeWidth={1.5} />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "0.875rem", md: "0.9375rem" },
                  color: brandColors.muted,
                  m: 0,
                }}
              >
                Serving Salt Lake City and the Wasatch Front
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              className="hero-fade-delay-2"
              sx={{ mb: 3.5 }}
            >
              <Button
                component="a"
                href="/quote"
                variant="contained"
                size="large"
                sx={{
                  borderColor: brandColors.gold,
                  "&:hover": {
                    borderColor: brandColors.gold,
                  },
                }}
              >
                Request a Quote
              </Button>
              <Button
                component="a"
                href="#packages"
                variant="outlined"
                size="large"
              >
                View Packages
              </Button>
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.25, sm: 0 }}
              divider={
                <Box
                  component="span"
                  sx={{
                    display: { xs: "none", sm: "inline-block" },
                    mx: 1.75,
                    color: "rgba(198, 161, 91, 0.45)",
                    fontSize: "0.75rem",
                    lineHeight: 1.6,
                    alignSelf: "center",
                  }}
                  aria-hidden
                >
                  ·
                </Box>
              }
              sx={{
                flexWrap: "wrap",
                alignItems: { xs: "flex-start", sm: "center" },
              }}
              useFlexGap
            >
              {TRUST_ITEMS.map((item) => (
                <Typography
                  key={item}
                  component="span"
                  sx={{
                    fontSize: "0.8125rem",
                    letterSpacing: "0.04em",
                    color: brandColors.muted,
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>

          <Box
            className="hero-fade-delay-2"
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              minWidth: 0,
            }}
          >
            <HeroPhotoSlider />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
