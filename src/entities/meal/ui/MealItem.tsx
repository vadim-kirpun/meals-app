"use client";

import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import type { Meal } from "../model/types";

type MealItemProps = {
  meal: Meal;
};

export default function MealItem({ meal }: MealItemProps) {
  return (
    <Card
      component="article"
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: alpha(theme.palette.background.paper, 0.6),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
        boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.25)}`,
        transition: theme.transitions.create(["border-color", "box-shadow"], {
          duration: theme.transitions.duration.short,
        }),
        "&:hover": {
          borderColor: alpha(theme.palette.primary.main, 0.35),
          boxShadow: `0 16px 48px ${alpha(theme.palette.common.black, 0.35)}`,
        },
      })}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
        }}
      >
        <Image
          src={meal.image}
          alt={meal.title}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          p: 3,
        }}
      >
        <Typography component="h2" variant="stepTitle">
          {meal.title}
        </Typography>

        <Typography variant="bodyMuted" sx={{ fontSize: "0.9rem" }}>
          by{" "}
          <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
            {meal.creator}
          </Box>
        </Typography>

        <Typography
          variant="bodyMuted"
          sx={{
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {meal.summary}
        </Typography>

        <Stack sx={{ pt: 1 }}>
          <Button
            component={Link}
            href={`/meals/${meal.slug}`}
            variant="outlined"
            color="primary"
            size="small"
          >
            View Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
