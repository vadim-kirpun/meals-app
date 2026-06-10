import Box from "@mui/material/Box";
import { MealItem } from "@/src/entities/meal";
import { getMeals } from "@/src/entities/meal/server";

export default async function MealsGrid() {
  const meals = await getMeals();

  return (
    <Box
      component="section"
      aria-label="Meals"
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
      {meals.map((meal) => (
        <MealItem key={meal.slug} meal={meal} />
      ))}
    </Box>
  );
}
