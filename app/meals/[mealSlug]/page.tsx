import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMealBySlug } from "@/src/entities/meal/server";
import { MealDetailsPage } from "@/src/widgets/meal-details-page";

type MealDetailsRouteProps = {
  params: Promise<{ mealSlug: string }>;
};

export async function generateMetadata({
  params,
}: MealDetailsRouteProps): Promise<Metadata> {
  const { mealSlug } = await params;
  const meal = getMealBySlug(mealSlug);

  if (!meal) {
    return { title: "Meal Not Found | NextLevel Food" };
  }

  return {
    title: `${meal.title} | NextLevel Food`,
    description: meal.summary,
  };
}

export const dynamic = "force-dynamic";

export default async function MealDetailsRoute({
  params,
}: MealDetailsRouteProps) {
  const { mealSlug } = await params;
  const meal = getMealBySlug(mealSlug);

  if (!meal) {
    notFound();
  }

  return <MealDetailsPage meal={meal} />;
}
