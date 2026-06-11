"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import { PageCenteredContent } from "@/src/shared/ui/page-centered-content";
import { PageHero } from "@/src/shared/ui/page-hero";
import { PageShell } from "@/src/shared/ui/page-shell";
import { StatusBadge } from "@/src/shared/ui/status-badge";

export default function MealNotFound() {
  return (
    <PageShell>
      <PageCenteredContent>
        <StatusBadge>404</StatusBadge>

        <PageHero
          title="Meal not found"
          description="This recipe doesn't exist or may have been removed from our collection."
          sx={{ mb: 0 }}
        />

        <Button
          component={Link}
          href="/meals"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 1 }}
        >
          Back to all meals
        </Button>
      </PageCenteredContent>
    </PageShell>
  );
}
