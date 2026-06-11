"use client";

import Button from "@mui/material/Button";
import { PageCenteredContent } from "@/src/shared/ui/page-centered-content";
import { PageHero } from "@/src/shared/ui/page-hero";
import { PageShell } from "@/src/shared/ui/page-shell";
import { StatusBadge } from "@/src/shared/ui/status-badge";

interface MealsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function MealsError({ error, reset }: MealsErrorProps) {
  if (process.env.NODE_ENV === "development") {
    throw error;
  }

  return (
    <PageShell>
      <PageCenteredContent>
        <StatusBadge color="error" fontSize="2.5rem">
          !
        </StatusBadge>

        <PageHero
          title="Something went wrong"
          description="We couldn't load the meals right now. Please try again in a moment."
          sx={{ mb: 0 }}
        />

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={reset}
          sx={{ mt: 1 }}
        >
          Try again
        </Button>
      </PageCenteredContent>
    </PageShell>
  );
}
