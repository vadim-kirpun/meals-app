"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

interface MealsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function MealsError({ error, reset }: MealsErrorProps) {
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
              backgroundColor: alpha(theme.palette.error.main, 0.12),
              border: `1px solid ${alpha(theme.palette.error.main, 0.3)}`,
              color: theme.palette.error.light,
            })}
          >
            <Typography
              component="span"
              aria-hidden
              sx={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}
            >
              !
            </Typography>
          </Box>

          <Typography component="h1" variant="heroTitle">
            Something went wrong
          </Typography>

          <Typography variant="lead">
            We couldn&apos;t load the meals right now. Please try again in a
            moment.
          </Typography>

          {process.env.NODE_ENV === "development" && error.message && (
            <Box
              sx={(theme) => ({
                width: "100%",
                p: 2,
                borderRadius: 2,
                textAlign: "left",
                backgroundColor: alpha(theme.palette.error.main, 0.08),
                border: `1px solid ${alpha(theme.palette.error.main, 0.25)}`,
              })}
            >
              <Typography variant="body2" color="error.light">
                {error.message}
              </Typography>
            </Box>
          )}

          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={reset}
            sx={{ mt: 1 }}
          >
            Try again
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
