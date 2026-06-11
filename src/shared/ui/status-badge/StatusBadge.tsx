import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

type StatusBadgeProps = {
  children: ReactNode;
  color?: "primary" | "error";
  fontSize?: string;
};

export default function StatusBadge({
  children,
  color = "primary",
  fontSize = "1.5rem",
}: StatusBadgeProps) {
  return (
    <Box
      sx={(theme) => {
        const paletteColor =
          color === "error" ? theme.palette.error : theme.palette.primary;

        return {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: alpha(paletteColor.main, 0.12),
          border: `1px solid ${alpha(paletteColor.main, 0.3)}`,
          color:
            color === "error" ? theme.palette.error.light : paletteColor.main,
        };
      }}
    >
      <Typography
        component="span"
        aria-hidden
        sx={{ fontSize, fontWeight: 700, lineHeight: 1 }}
      >
        {children}
      </Typography>
    </Box>
  );
}
