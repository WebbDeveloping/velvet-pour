"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";

/** Placeholder client names until real logos land */
const CLIENTS = [
  "Summit Estate",
  "The Copper Room",
  "Wasatch Pavilion",
  "Alpine House",
  "Cedar & Stone",
  "The Ivory Room",
  "Larkspur Hall",
  "Magnolia Club",
] as const;

function ClientLogo({ name }: { name: string }) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        px: { xs: 3, md: 4.5 },
        height: { xs: 48, md: 56 },
        whiteSpace: "nowrap",
      }}
    >
      <Typography
        component="span"
        sx={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: { xs: "1.125rem", md: "1.35rem" },
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: brandColors.muted,
          opacity: 0.72,
          userSelect: "none",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}

function MarqueeTrack({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <Box
      className="clients-marquee-track"
      aria-hidden={ariaHidden}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "max-content",
      }}
    >
      {CLIENTS.map((name) => (
        <ClientLogo key={name} name={name} />
      ))}
    </Box>
  );
}

export default function OurClients() {
  return (
    <Box
      component="section"
      aria-label="Our clients"
      sx={{
        py: { xs: 4, md: 5 },
        borderTop: "1px solid rgba(198, 161, 91, 0.14)",
        borderBottom: "1px solid rgba(198, 161, 91, 0.14)",
        backgroundColor: brandColors.background,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: brandColors.gold,
          mb: { xs: 2.5, md: 3 },
        }}
      >
        Our Clients
      </Typography>

      <Box
        className="clients-marquee"
        sx={{
          position: "relative",
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "clientsMarquee 42s linear infinite",
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
        >
          <MarqueeTrack />
          <MarqueeTrack aria-hidden />
        </Box>
      </Box>
    </Box>
  );
}
