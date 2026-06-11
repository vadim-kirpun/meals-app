"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

export default function NotFound() {
  return (
    <Box component="main">
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 10 }}>
        <Stack
          spacing={3}
          sx={{
            alignItems: "center",
            textAlign: "center",
            maxWidth: 560,
            mx: "auto",
          }}
        >
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: alpha(theme.palette.primary.main, 0.12),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              color: theme.palette.primary.main,
            })}
          >
            <Typography
              component="span"
              aria-hidden
              sx={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1 }}
            >
              404
            </Typography>
          </Box>

          <Typography component="h1" variant="heroTitle">
            Page not found
          </Typography>

          <Typography variant="lead">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </Typography>

          <Button
            component={Link}
            href="/"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 1 }}
          >
            Back to home
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
