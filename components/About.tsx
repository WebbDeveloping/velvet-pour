"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80";

const COPY = [
  "We know your event is more than just a party — it's an investment of your time, energy, and emotion. Velvet Pour makes sure you get the best return on that investment: exceptional drinks, polished service, and an atmosphere your guests will remember.",
  "Our team crafts drink menus that match your event's theme — from timeless classics to signature creations. Whether it's a wedding, private celebration, or corporate gathering, we're here to impress your guests and leave a lasting impression.",
] as const;

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        backgroundColor: brandColors.velvet,
        backgroundImage: `
          linear-gradient(
            160deg,
            ${brandColors.velvet} 0%,
            #3a1829 48%,
            ${brandColors.burgundy} 100%
          )
        `,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, md: 3 } }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 500,
            fontSize: { xs: "2.15rem", sm: "2.75rem", md: "3.5rem" },
            lineHeight: 1.15,
            letterSpacing: "0.01em",
            color: brandColors.ivory,
            maxWidth: 820,
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box
            component="span"
            sx={{
              display: "block",
              fontStyle: "italic",
              fontWeight: 400,
              color: brandColors.gold,
              mb: 0.5,
            }}
          >
            Crafting elevated pours across Salt Lake —
          </Box>
          making every moment unforgettable with a perfect blend of quality and
          care.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1fr)",
            },
            gap: { xs: 3.5, md: 4, lg: 5 },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: { xs: "4 / 3", md: "4 / 5" },
              overflow: "hidden",
              borderRadius: "2px",
              border: "1px solid rgba(198, 161, 91, 0.28)",
            }}
          >
            <Image
              src={ABOUT_IMAGE}
              alt="Bartenders serving guests at a warmly lit bar"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </Box>

          {COPY.map((text) => (
            <Typography
              key={text.slice(0, 32)}
              sx={{
                fontSize: { xs: "1rem", md: "1.0625rem" },
                lineHeight: 1.75,
                color: "rgba(243, 235, 221, 0.88)",
                m: 0,
                pt: { md: 0.5 },
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
