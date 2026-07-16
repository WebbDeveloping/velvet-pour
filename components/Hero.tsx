"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";
import HeroPhotoSlider from "@/components/HeroPhotoSlider";
import { MapPin, ShieldCheck, Users } from "@/lib/icons";

const TRUST_ITEMS = [
  { label: "Licensed & insured", Icon: ShieldCheck },
  { label: "Salt Lake City", Icon: MapPin },
  { label: "Weddings & corporate", Icon: Users },
] as const;

/** Approx sticky nav height so the mobile copy panel fills the first screen */
const MOBILE_NAV_OFFSET = "4.75rem";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "100dvh" },
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
        disableGutters
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          alignItems: { xs: "stretch", md: "center" },
          px: { xs: 1.5, sm: 2.5, md: 3 },
          pb: { xs: 0, md: 8 },
          pt: { xs: 0, md: 3 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.05fr) minmax(0, 1fr)",
            },
            gap: { xs: 0, md: 6, lg: 8 },
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Mobile: fill first viewport; copy sits toward the bottom */}
          <Box
            className="hero-fade-delay"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "flex-end", md: "center" },
              minHeight: {
                xs: `calc(100dvh - ${MOBILE_NAV_OFFSET} - 8rem)`,
                md: "auto",
              },
              pt: { xs: 4, md: 0 },
              pb: { xs: 3, md: 0 },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 500,
                fontSize: {
                  xs: "3.25rem",
                  sm: "3.5rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                lineHeight: { xs: 1.1, md: 1.08 },
                letterSpacing: "0.01em",
                color: brandColors.ivory,
                mb: { xs: 2, md: 2.5 },
                maxWidth: 560,
                textAlign: "left",
              }}
            >
              We bring the bar,
              <br />
              the pours, and the polish —
              <br />
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
                fontSize: { xs: "0.9375rem", md: "1.0625rem" },
                color: brandColors.muted,
                maxWidth: 440,
                lineHeight: 1.7,
                mb: { xs: 1.5, md: 2 },
                textAlign: "left",
              }}
            >
              Premium mobile bartending for weddings, private gatherings, and
              corporate events
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: { xs: 3, md: 3.5 }, alignItems: "center" }}
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
                  fontSize: { xs: "0.8125rem", md: "0.9375rem" },
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
              sx={{ mb: { xs: 3, md: 3.5 } }}
            >
              <Button
                component="a"
                href="/quote"
                variant="contained"
                size="large"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: "1rem", md: "0.9375rem" },
                  py: { xs: 1.5, md: 1.25 },
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
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  fontSize: { xs: "1rem", md: "0.9375rem" },
                  py: { xs: 1.5, md: 1.25 },
                }}
              >
                View Packages
              </Button>
            </Stack>

            <Box
              sx={{
                display: { xs: "grid", md: "none" },
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 1,
                pt: 1.25,
                borderTop: "1px solid rgba(198, 161, 91, 0.22)",
              }}
            >
              {TRUST_ITEMS.map(({ label, Icon }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0.75,
                    textAlign: "center",
                    px: 0.5,
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      color: brandColors.gold,
                      display: "inline-flex",
                      lineHeight: 0,
                    }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </Box>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { xs: "0.6875rem", sm: "0.75rem" },
                      letterSpacing: "0.02em",
                      lineHeight: 1.35,
                      color: brandColors.muted,
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Stack
              direction="row"
              useFlexGap
              sx={{
                display: { xs: "none", md: "flex" },
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {TRUST_ITEMS.map(({ label }, index) => (
                <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
                  {index > 0 && (
                    <Box
                      component="span"
                      sx={{
                        mx: 1.75,
                        color: "rgba(198, 161, 91, 0.45)",
                        fontSize: "0.75rem",
                      }}
                      aria-hidden
                    >
                      ·
                    </Box>
                  )}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.8125rem",
                      letterSpacing: "0.04em",
                      color: brandColors.muted,
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Mobile: sits below the fold; desktop: side column */}
          <Box
            className="hero-fade-delay-2"
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              minWidth: 0,
              width: "100%",
              pt: { xs: 5, md: 0 },
              pb: { xs: 6, md: 0 },
            }}
          >
            <HeroPhotoSlider />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
