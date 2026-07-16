"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";

const PROMO_IMAGE =
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80";

export default function PromoBand() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 0, md: 1 },
        backgroundColor: brandColors.velvet,
        backgroundImage: `
          linear-gradient(
            180deg,
            ${brandColors.velvet} 0%,
            ${brandColors.burgundy} 100%
          )
        `,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            width: "100%",
            py: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: 260 },
              minWidth: { md: 260 },
              height: { xs: 180, sm: 220, md: "auto" },
              minHeight: { md: 220 },
              overflow: "hidden",
            }}
          >
            <Image
              src={PROMO_IMAGE}
              alt="Elegant cocktail service and beverage catering"
              fill
              sizes="(max-width: 900px) 100vw, 260px"
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              ml: { xs: 0, md: 1.25 },
              mt: { xs: 1.25, md: 0 },
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 3, md: 4 },
              border: `1px solid ${brandColors.gold}`,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "rgba(13, 12, 12, 0.18)",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 500,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.7rem" },
                lineHeight: 1.15,
                color: brandColors.ivory,
                m: 0,
              }}
            >
              Mobile Bars & Beverage Catering
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: brandColors.gold,
                }}
              >
                trusted for celebrations across the Wasatch Front
              </Box>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
