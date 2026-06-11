"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import type { MealDetails } from "@/src/entities/meal";
import { BackLink } from "@/src/shared/ui/back-link";
import { PageSection } from "@/src/shared/ui/page-section";
import { PageShell } from "@/src/shared/ui/page-shell";

type MealDetailsPageProps = {
  meal: MealDetails;
};

export default function MealDetailsPage({ meal }: MealDetailsPageProps) {
  return (
    <PageShell>
      <BackLink href="/meals">← Back to all meals</BackLink>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          mb: { xs: 6, md: 8 },
          alignItems: "start",
        }}
      >
        <Box
          sx={(theme) => ({
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            borderRadius: 2,
            overflow: "hidden",
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.35)}`,
          })}
        >
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Stack spacing={3}>
          <Typography component="h1" variant="heroTitle">
            {meal.title}
          </Typography>

          <Typography variant="lead">{meal.summary}</Typography>

          <Box
            sx={(theme) => ({
              p: 3,
              borderRadius: 2,
              backgroundColor: alpha(theme.palette.background.paper, 0.6),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
            })}
          >
            <Typography variant="bodyMuted">
              Recipe by{" "}
              <MuiLink
                href={`mailto:${meal.creator_email}`}
                underline="hover"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "primary.main",
                }}
              >
                {meal.creator}
              </MuiLink>{" "}
              <MuiLink
                href={`mailto:${meal.creator_email}`}
                underline="hover"
                color="inherit"
              >
                {meal.creator_email}
              </MuiLink>
            </Typography>
          </Box>
        </Stack>
      </Box>

      <PageSection
        title="Instructions"
        titleId="meal-instructions-heading"
        headingSx={{ textAlign: "left", mb: 3 }}
      >
        <Box
          component="div"
          sx={{
            color: "text.secondary",
            lineHeight: 1.8,
            "& p": { m: 0, mb: 1.5 },
            "& p:last-child": { mb: 0 },
            "& ol, & ul": { pl: 3, my: 1.5 },
            "& li": { mb: 0.75 },
            "& h2, & h3": { mt: 2, mb: 1, color: "text.primary" },
            "& blockquote": {
              m: 0,
              pl: 2,
              borderLeft: "3px solid",
              borderColor: "divider",
            },
          }}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </PageSection>
    </PageShell>
  );
}
