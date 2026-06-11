import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { SxProps, Theme } from "@mui/material/styles";

type PageShellProps = {
  children: ReactNode;
  sx?: SxProps<Theme>;
};

export default function PageShell({ children, sx }: PageShellProps) {
  return (
    <Box component="main">
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 6, md: 10 }, pb: 10, ...sx }}
      >
        {children}
      </Container>
    </Box>
  );
}
