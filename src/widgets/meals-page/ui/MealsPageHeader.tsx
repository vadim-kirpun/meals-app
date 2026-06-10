"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function MealsPageHeader() {
  return (
    <Stack
      spacing={2}
      sx={{
        mb: { xs: 8, md: 10 },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography component="h1" variant="heroTitle">
        Browse Meals
      </Typography>

      <Typography variant="lead" sx={{ maxWidth: 520 }}>
        Explore our collection of community-shared recipes, organized by meal
        type.
      </Typography>

      <Button
        component={Link}
        href="/meals/share"
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mt: 1 }}
      >
        Share a Meal
      </Button>
    </Stack>
  );
}
