import type { CSSProperties } from "react";
import { alpha, createTheme, type Theme } from "@mui/material/styles";

const montserrat = "var(--font-montserrat), sans-serif";

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffb300",
    },
    secondary: {
      main: "#f9572a",
    },
    background: {
      default: "#282c34",
      paper: "#303640",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "var(--font-quicksand), sans-serif",
  },
});

const gradientText = `linear-gradient(90deg, ${baseTheme.palette.secondary.main}, ${baseTheme.palette.primary.main})`;

const theme = createTheme(baseTheme, {
  typography: {
    heroTitle: {
      fontFamily: montserrat,
      fontWeight: 900,
      fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      backgroundImage: gradientText,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    sectionTitle: {
      fontFamily: montserrat,
      fontWeight: 700,
    },
    brandTitle: {
      fontFamily: montserrat,
      fontWeight: 700,
      fontSize: "1.25rem",
      letterSpacing: "0.04em",
      lineHeight: 1,
      textTransform: "uppercase",
      backgroundImage: gradientText,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    lead: {
      fontWeight: 400,
      lineHeight: 1.6,
      color: baseTheme.palette.text.secondary,
    },
    bodyMuted: {
      color: baseTheme.palette.text.secondary,
      lineHeight: 1.7,
    },
    stepTitle: {
      fontWeight: 700,
      fontSize: baseTheme.typography.h6.fontSize,
      lineHeight: baseTheme.typography.h6.lineHeight,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
        },
        sizeLarge: {
          padding: "12px 32px",
          fontSize: "1rem",
        },
        outlinedPrimary: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.primary.main,
          borderColor: alpha(theme.palette.primary.main, 0.5),
          "&:hover": {
            borderColor: theme.palette.primary.main,
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
          },
        }),
      },
    },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heroTitle: CSSProperties;
    sectionTitle: CSSProperties;
    brandTitle: CSSProperties;
    lead: CSSProperties;
    bodyMuted: CSSProperties;
    stepTitle: CSSProperties;
  }

  interface TypographyVariantsOptions {
    heroTitle?: CSSProperties;
    sectionTitle?: CSSProperties;
    brandTitle?: CSSProperties;
    lead?: CSSProperties;
    bodyMuted?: CSSProperties;
    stepTitle?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heroTitle: true;
    sectionTitle: true;
    brandTitle: true;
    lead: true;
    bodyMuted: true;
    stepTitle: true;
  }
}
