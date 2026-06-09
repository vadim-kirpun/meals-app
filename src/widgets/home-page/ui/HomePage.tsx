"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { ImageSlideshow } from "@/src/shared/ui/image-slideshow";
import { heroSlides } from "./hero-slides";

const howItWorksSteps = [
  {
    title: "Discover new dishes",
    description:
      "Browse a growing collection of meals shared by home cooks and food lovers from around the world.",
  },
  {
    title: "Share your creations",
    description:
      "Upload your favorite recipes, photos, and cooking tips — inspire others with what you love to make.",
  },
  {
    title: "Connect with foodies",
    description:
      "Join conversations, swap ideas, and build friendships with people who are just as passionate about food.",
  },
] as const;

export default function HomePage() {
  return (
    <Box component="main">
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 10 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{ mb: { xs: 8, md: 12 }, alignItems: "center" }}
        >
          <Box
            sx={{
              flex: { md: "0 0 42%" },
              width: "100%",
              maxWidth: { xs: 480, md: "none" },
            }}
          >
            <ImageSlideshow images={heroSlides} intervalMs={5000} />
          </Box>

          <Stack
            spacing={4}
            sx={{
              flex: 1,
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography component="h1" variant="heroTitle">
              Taste Something New Tonight
            </Typography>

            <Typography variant="lead" sx={{ maxWidth: 520 }}>
              A platform for discovering bold flavors, sharing your best dishes,
              and connecting with fellow food lovers.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ pt: 1 }}
            >
              <Button
                component={Link}
                href="/community"
                variant="text"
                color="primary"
                size="large"
              >
                Join the Community
              </Button>

              <Button
                component={Link}
                href="/meals"
                variant="contained"
                color="secondary"
                size="large"
              >
                Explore Meals
              </Button>
            </Stack>
          </Stack>
        </Stack>

        <Box component="section" aria-labelledby="how-it-works-heading">
          <Typography
            id="how-it-works-heading"
            component="h2"
            variant="sectionTitle"
            sx={{ textAlign: "center", mb: 1 }}
          >
            How It Works
          </Typography>

          <Typography
            component="p"
            variant="bodyMuted"
            sx={{ textAlign: "center", maxWidth: 640, mx: "auto", mb: 8 }}
          >
            NextLevel Food is a community-driven platform built for people who
            love to eat, cook, and share. Whether you are hunting for your next
            weeknight dinner or want to show off a family recipe, this is your
            place.
          </Typography>

          <Stack spacing={3}>
            {howItWorksSteps.map((step, index) => (
              <Box
                key={step.title}
                sx={(theme) => ({
                  display: "flex",
                  gap: 3,
                  alignItems: "flex-start",
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: alpha(theme.palette.background.paper, 0.6),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                })}
              >
                <Typography
                  aria-hidden
                  sx={(theme) => ({
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    backgroundImage: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                    color: theme.palette.background.default,
                  })}
                >
                  {index + 1}
                </Typography>

                <Box>
                  <Typography
                    component="h3"
                    variant="stepTitle"
                    sx={{ mb: 0.5 }}
                  >
                    {step.title}
                  </Typography>

                  <Typography variant="bodyMuted">
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
