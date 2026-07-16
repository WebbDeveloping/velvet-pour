"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Star } from "@/lib/icons";

const borderColor = "rgba(198, 161, 91, 0.2)";

const REVIEWS = [
  {
    body: "Velvet Pour made our company gathering feel effortless. The bartender stayed ahead of every order, kept the energy warm, and treated the whole room like VIPs. We're already booking them for our next event.",
    name: "Rob C",
    location: "Salt Lake City",
  },
  {
    body: "If you want a bartending crew that actually makes the night run smoother, call Velvet Pour. Guests were happy start to finish, and the team jumped in wherever we needed help without missing a beat.",
    name: "Alyssa H",
    location: "Park City",
  },
  {
    body: "Our wedding bartenders were a highlight. From the first pour, we felt looked after — and by the end of the night, half our guests were asking how to hire them. Truly felt like family behind the bar.",
    name: "Francisco T",
    location: "Draper",
  },
  {
    body: "We needed licensed bartenders on a tight timeline, and Velvet Pour came through. They showed up early, built a beautiful full bar, and stayed gracious the entire evening. Couldn't recommend them more.",
    name: "Danielle K",
    location: "Salt Lake City",
  },
  {
    body: "From the first email to last call, everything felt professional and kind. They set up early, stocked a sharp top-shelf bar, and our bartender was efficient without ever rushing guests.",
    name: "Omar H",
    location: "Sandy",
  },
] as const;

const AUTOPLAY_MS = 5200;

function wrapIndex(next: number) {
  return (next + REVIEWS.length) % REVIEWS.length;
}

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, []);

  const activeReview = REVIEWS[activeIndex];

  return (
    <Box
      component="section"
      id="reviews"
      sx={{
        position: "relative",
        py: { xs: 8, md: 10 },
        backgroundColor: brandColors.background,
        backgroundImage: `
          radial-gradient(
            ellipse 60% 50% at 85% 30%,
            rgba(74, 31, 53, 0.24) 0%,
            transparent 55%
          ),
          linear-gradient(
            180deg,
            #0d0c0c 0%,
            #141112 100%
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
              lg: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            },
            gap: { xs: 4, md: 5, lg: 6 },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: { lg: 540 },
              pr: { lg: 2 },
            }}
          >
            <Box>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontWeight: 500,
                  fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
                  lineHeight: 1.08,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: brandColors.ivory,
                  m: 0,
                  mb: 2,
                }}
              >
                Guest stories
                <Box component="br" />
                from the bar
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.7,
                  color: "rgba(243, 235, 221, 0.84)",
                  m: 0,
                  maxWidth: 420,
                }}
              >
                The best compliment we get is hearing from couples, hosts, and
                planners who trusted Velvet Pour to keep their night flowing.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: { xs: 3, md: 4 } }}
              >
                <Box
                  sx={{
                    border: `1px solid ${borderColor}`,
                    px: 2,
                    py: 1.5,
                    minWidth: 150,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: brandColors.gold,
                      mb: 0.75,
                    }}
                  >
                    Google
                  </Typography>
                  <Stack direction="row" spacing={0.5} sx={{ mb: 0.5 }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill={brandColors.gold}
                        color={brandColors.gold}
                        aria-hidden
                      />
                    ))}
                  </Stack>
                  <Typography sx={{ fontSize: "0.875rem", color: brandColors.ivory }}>
                    5.0 average rating
                  </Typography>
                </Box>

                <Box
                  sx={{
                    border: `1px solid ${borderColor}`,
                    px: 2,
                    py: 1.5,
                    minWidth: 150,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: brandColors.gold,
                      mb: 0.75,
                    }}
                  >
                    Thumbtack
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: brandColors.ivory }}>
                    Top-rated event bartending
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{ mt: { xs: 4, lg: 0 }, alignItems: "center" }}
            >
              <IconButton
                aria-label="Previous review"
                onClick={() => setActiveIndex((current) => wrapIndex(current - 1))}
                sx={{
                  border: `1px solid ${borderColor}`,
                  color: brandColors.ivory,
                }}
              >
                <ChevronLeft size={18} />
              </IconButton>
              <IconButton
                aria-label="Next review"
                onClick={() => setActiveIndex((current) => wrapIndex(current + 1))}
                sx={{
                  border: `1px solid ${borderColor}`,
                  color: brandColors.ivory,
                }}
              >
                <ChevronRight size={18} />
              </IconButton>

              <Typography
                component="a"
                href="/quote"
                sx={{
                  ml: 1,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.75,
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: brandColors.gold,
                  textDecoration: "none",
                }}
              >
                Get Quote
                <ArrowRight size={16} />
              </Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minHeight: { xs: 360, md: 460 },
              p: { xs: 0, md: 0 },
              backgroundImage: `
                linear-gradient(
                  180deg,
                  rgba(13, 12, 12, 0.2) 0%,
                  rgba(13, 12, 12, 0.45) 100%
                ),
                url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80")
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: `1px solid ${borderColor}`,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: { xs: 16, md: 24 },
                right: { xs: 16, md: 24 },
                zIndex: 2,
                p: 0.75,
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.18)",
              }}
            >
              <Box
                sx={{
                  border: "1px solid rgba(122, 48, 72, 0.18)",
                  px: 1.5,
                  py: 1,
                  textAlign: "center",
                  minWidth: { xs: 132, md: 156 },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontWeight: 500,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    lineHeight: 1.1,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "#201819",
                    m: 0,
                  }}
                >
                  {activeReview.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "0.85rem",
                    color: brandColors.burgundy,
                    mt: 0.35,
                  }}
                >
                  {activeReview.location}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: { xs: "calc(100% - 24px)", md: "calc(100% - 32px)" },
                minHeight: { xs: 300, md: 340 },
                mt: { xs: 7, md: 10 },
                mb: { xs: 1.5, md: 2 },
                mx: { xs: 1.5, md: 2 },
                p: { xs: 3, md: 3.5 },
                pr: { xs: 3, md: 4 },
                backgroundColor: "rgba(243, 235, 221, 0.94)",
                backgroundImage:
                  "radial-gradient(circle at top left, rgba(198, 161, 91, 0.12), transparent 34%)",
                color: "#1f1a18",
                boxShadow: "0 18px 40px rgba(0, 0, 0, 0.22)",
              }}
            >
              <Quote
                size={40}
                color={brandColors.gold}
                aria-hidden
                style={{ opacity: 0.9, marginBottom: 20 }}
              />
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: { xs: "1rem", md: "1.0625rem" },
                  lineHeight: 1.8,
                  color: "#201819",
                  m: 0,
                  mb: 3,
                }}
              >
                {activeReview.body}
              </Typography>

              <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill={brandColors.gold}
                    color={brandColors.gold}
                    aria-hidden
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
