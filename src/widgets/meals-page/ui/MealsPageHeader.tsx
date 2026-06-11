"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import { PageHero } from "@/src/shared/ui/page-hero";

export default function MealsPageHeader() {
  return (
    <PageHero
      title="Browse Meals"
      description="Explore our collection of community-shared recipes, organized by meal type."
    >
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
    </PageHero>
  );
}
