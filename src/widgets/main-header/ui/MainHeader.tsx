"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";

const navItems = [
  { href: "/meals", label: "Browse Meals" },
  { href: "/community", label: "Foodies Community" },
] as const;

function getNavLinkSx(isActive: boolean): SxProps<Theme> {
  return (theme) => ({
    color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "0.95rem",
    letterSpacing: "0.02em",
    textTransform: "none",
    px: 2,
    py: 1,
    backgroundImage: isActive
      ? `linear-gradient(90deg, ${alpha(theme.palette.secondary.main, 0.2)}, ${alpha(theme.palette.primary.main, 0.15)})`
      : "none",
    transition: theme.transitions.create(["color", "background-image"], {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundImage: `linear-gradient(90deg, ${alpha(theme.palette.secondary.main, 0.15)}, ${alpha(theme.palette.primary.main, 0.1)})`,
    },
  });
}

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <Box sx={{ position: "relative" }}>
      <div className="absolute top-0 left-0 -z-10 h-[320px] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block h-auto w-full"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#59453c", stopOpacity: "1" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8f3a09", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>

          <path
            fill="url(#gradient)"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: "100%", mx: "auto", gap: 2 }}>
          <Box
            component={Link}
            href="/"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              "&:hover": { opacity: 0.85 },
            }}
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={40}
              height={40}
              priority
            />

            <Typography
              component="span"
              variant="h6"
              sx={(theme) => ({
                fontFamily: "var(--font-montserrat), sans-serif",
                fontWeight: theme.typography.fontWeightBold,
                fontSize: "1.25rem",
                letterSpacing: "0.04em",
                lineHeight: 1,
                textTransform: "uppercase",
                backgroundImage: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })}
            >
              NextLevel Food
            </Typography>
          </Box>

          <Stack direction="row" spacing={0.5} sx={{ ml: "auto" }}>
            {navItems.map(({ href, label }) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Button
                  key={href}
                  component={Link}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  sx={getNavLinkSx(isActive)}
                >
                  {label}
                </Button>
              );
            })}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
