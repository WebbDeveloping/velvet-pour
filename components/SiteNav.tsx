"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";
import { Menu, X } from "@/lib/icons";

const NAV_LINKS = [
  { label: "Services", href: "#" },
  { label: "Packages", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Process", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
] as const;

const linkSx = {
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: brandColors.muted,
  transition: "color 0.2s ease",
  "&:hover": {
    color: brandColors.gold,
  },
};

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        component="header"
        className="hero-fade"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          borderBottom: "1px solid rgba(198, 161, 91, 0.16)",
          backgroundColor: "rgba(13, 12, 12, 0.82)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            px: { xs: 2.5, md: 5 },
            py: { xs: 1.75, md: 2 },
            maxWidth: 1280,
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            component="a"
            href="/"
            sx={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: { xs: "1.35rem", md: "1.5rem" },
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: brandColors.ivory,
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            Velvet Pour
          </Typography>

          <Stack
            component="nav"
            direction="row"
            spacing={{ md: 2.5, lg: 3.5 }}
            useFlexGap
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
            }}
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <Box key={link.label} component="a" href={link.href} sx={linkSx}>
                {link.label}
              </Box>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1.5}
            useFlexGap
            sx={{ alignItems: "center", flexShrink: 0 }}
          >
            <Button
              component="a"
              href="/quote"
              variant="contained"
              size="small"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                borderColor: brandColors.gold,
                px: 2.25,
                py: 1,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                "&:hover": {
                  borderColor: brandColors.gold,
                },
              }}
            >
              Request a Quote
            </Button>

            <IconButton
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((prev) => !prev)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: brandColors.ivory,
                border: `1px solid rgba(198, 161, 91, 0.35)`,
                borderRadius: "2px",
                width: 42,
                height: 42,
                "&:hover": {
                  backgroundColor: "rgba(198, 161, 91, 0.1)",
                },
              }}
            >
              {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </IconButton>
          </Stack>
        </Box>
      </Box>

      <Drawer
        id="mobile-nav"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "min(100%, 320px)",
              backgroundColor: brandColors.background,
              borderLeft: `1px solid rgba(198, 161, 91, 0.2)`,
              px: 3,
              py: 3,
            },
          },
        }}
      >
        <Stack spacing={3} sx={{ height: "100%" }}>
          <Stack
            direction="row"
            useFlexGap
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.25rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: brandColors.ivory,
              }}
            >
              Menu
            </Typography>
            <IconButton
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              sx={{
                color: brandColors.ivory,
                borderRadius: "2px",
              }}
            >
              <X size={20} strokeWidth={1.5} />
            </IconButton>
          </Stack>

          <Stack component="nav" spacing={2.5} aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Box
                key={link.label}
                component="a"
                href={link.href}
                onClick={() => setOpen(false)}
                sx={{
                  ...linkSx,
                  fontSize: "0.9375rem",
                  py: 0.5,
                }}
              >
                {link.label}
              </Box>
            ))}
          </Stack>

          <Button
            component="a"
            href="/quote"
            variant="contained"
            fullWidth
            onClick={() => setOpen(false)}
            sx={{
              mt: "auto",
              borderColor: brandColors.gold,
              "&:hover": {
                borderColor: brandColors.gold,
              },
            }}
          >
            Request a Quote
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
