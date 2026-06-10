import { Suspense } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MealsGrid from "./MealsGrid";
import MealsGridSkeleton from "./MealsGridSkeleton";
import MealsPageHeader from "./MealsPageHeader";

export default function MealsPage() {
  return (
    <Box component="main">
      <Container maxWidth="lg" sx={{ pt: { xs: 6, md: 10 }, pb: 10 }}>
        <MealsPageHeader />

        <Suspense fallback={<MealsGridSkeleton />}>
          <MealsGrid />
        </Suspense>
      </Container>
    </Box>
  );
}
