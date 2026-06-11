import type { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";

type PageHeroProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  sx?: SxProps<Theme>;
};

export default function PageHero({
  title,
  description,
  children,
  sx,
}: PageHeroProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        mb: { xs: 8, md: 10 },
        alignItems: "center",
        textAlign: "center",
        ...sx,
      }}
    >
      <Typography component="h1" variant="heroTitle">
        {title}
      </Typography>

      {description && (
        <Typography variant="lead" sx={{ maxWidth: 520 }}>
          {description}
        </Typography>
      )}

      {children}
    </Stack>
  );
}
