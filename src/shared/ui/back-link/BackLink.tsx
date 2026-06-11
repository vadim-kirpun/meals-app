"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";

type BackLinkProps = {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
};

export default function BackLink({ href, children, sx }: BackLinkProps) {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
      <Typography
        component="span"
        sx={{
          display: "inline-block",
          mb: { xs: 4, md: 6 },
          fontWeight: 600,
          color: "text.secondary",
          "&:hover": { color: "primary.main" },
          ...sx,
        }}
      >
        {children}
      </Typography>
    </Link>
  );
}
