"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import { alpha } from "@mui/material/styles";

const MEAL_SKELETON_COUNT = 6;

function MealItemSkeleton() {
  return (
    <Card
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: alpha(theme.palette.background.paper, 0.6),
        border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
        boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.25)}`,
      })}
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{ width: "100%", aspectRatio: "16 / 10" }}
      />

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          p: 3,
        }}
      >
        <Skeleton variant="text" animation="wave" sx={{ fontSize: "1.25rem" }} />
        <Skeleton
          variant="text"
          animation="wave"
          width="40%"
          sx={{ fontSize: "0.9rem" }}
        />
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" animation="wave" width="80%" />
        <Skeleton
          variant="rounded"
          animation="wave"
          width={110}
          height={32}
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
}

export default function MealsGridSkeleton() {
  return (
    <Box
      component="section"
      aria-busy="true"
      aria-label="Loading meals"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: { xs: 3, md: 4 },
      }}
    >
      {Array.from({ length: MEAL_SKELETON_COUNT }, (_, index) => (
        <MealItemSkeleton key={index} />
      ))}
    </Box>
  );
}
