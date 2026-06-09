"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";

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

type NavLinkProps = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Button
      component={Link}
      href={href}
      aria-current={isActive ? "page" : undefined}
      sx={getNavLinkSx(isActive)}
    >
      {label}
    </Button>
  );
}
