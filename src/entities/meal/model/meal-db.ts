import "server-only";

import { getDb } from "@/src/shared/lib/db";
import type { Meal, MealDetails } from "./types";

const MEAL_LIST_COLUMNS = "slug, title, image, summary, creator";

// Remove after skeleton testing
const MEALS_LOAD_DELAY_MS = 2_000;

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, MEALS_LOAD_DELAY_MS));

  const db = getDb();

  return db
    .prepare(`SELECT ${MEAL_LIST_COLUMNS} FROM meals ORDER BY id`)
    .all() as Meal[];
}

export function getMealBySlug(slug: string): MealDetails | undefined {
  const db = getDb();

  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as MealDetails | undefined;
}
