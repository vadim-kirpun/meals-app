import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";

type PageSectionProps = {
  title: string;
  titleId: string;
  children: ReactNode;
  headingSx?: SxProps<Theme>;
};

export default function PageSection({
  title,
  titleId,
  children,
  headingSx,
}: PageSectionProps) {
  return (
    <Box component="section" aria-labelledby={titleId}>
      <Typography
        id={titleId}
        component="h2"
        variant="sectionTitle"
        sx={{ textAlign: "center", mb: { xs: 6, md: 8 }, ...headingSx }}
      >
        {title}
      </Typography>

      {children}
    </Box>
  );
}
