"use client";

import { createTheme } from "@mui/material/styles";

export const brandColors = {
  background: "#0D0C0C",
  velvet: "#4A1F35",
  burgundy: "#7A3048",
  gold: "#C6A15B",
  ivory: "#F3EBDD",
  muted: "#B7A89A",
} as const;

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: brandColors.velvet,
      light: brandColors.burgundy,
      contrastText: brandColors.ivory,
    },
    secondary: {
      main: brandColors.burgundy,
      contrastText: brandColors.ivory,
    },
    background: {
      default: brandColors.background,
      paper: "#141212",
    },
    text: {
      primary: brandColors.ivory,
      secondary: brandColors.muted,
    },
    divider: "rgba(198, 161, 91, 0.24)",
  },
  typography: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    h1: {
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontWeight: 500,
      letterSpacing: "0.02em",
      color: brandColors.ivory,
    },
    h2: {
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontWeight: 500,
      letterSpacing: "0.02em",
      color: brandColors.ivory,
    },
    h3: {
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontWeight: 500,
      color: brandColors.ivory,
    },
    h4: {
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontWeight: 500,
      color: brandColors.ivory,
    },
    h5: {
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontWeight: 500,
      color: brandColors.ivory,
    },
    h6: {
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontWeight: 500,
      color: brandColors.ivory,
    },
    body1: {
      fontFamily: "var(--font-inter), system-ui, sans-serif",
      color: brandColors.muted,
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: "var(--font-inter), system-ui, sans-serif",
      color: brandColors.muted,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: "var(--font-inter), system-ui, sans-serif",
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.04em",
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brandColors.background,
          color: brandColors.ivory,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          paddingInline: 28,
          paddingBlock: 12,
        },
        contained: {
          backgroundColor: brandColors.velvet,
          color: brandColors.ivory,
          border: `1px solid ${brandColors.gold}`,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: brandColors.burgundy,
            boxShadow: "none",
          },
        },
        outlined: {
          borderColor: brandColors.gold,
          color: brandColors.ivory,
          "&:hover": {
            borderColor: brandColors.gold,
            backgroundColor: "rgba(198, 161, 91, 0.08)",
          },
        },
      },
    },
  },
});

export default theme;
