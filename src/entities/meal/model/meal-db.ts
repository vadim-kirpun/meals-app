import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import slugify from "slugify";
import { getDb } from "@/src/shared/lib/db";
import { sanitizeInstructions } from "@/src/shared/lib/sanitize-instructions";
import type { Meal, MealDetails } from "./types";

const MEAL_LIST_COLUMNS = "slug, title, image, summary, creator";

export async function getMeals(): Promise<Meal[]> {
  const db = getDb();

  return db
    .prepare(`SELECT ${MEAL_LIST_COLUMNS} FROM meals ORDER BY id`)
    .all() as Meal[];
}

export function getMealBySlug(slug: string): MealDetails | undefined {
  const db = getDb();

  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as
    | MealDetails
    | undefined;
}

type CreateMealInput = {
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creatorEmail: string;
  image: File;
};

async function saveImage(image: File) {
  const bytes = Buffer.from(await image.arrayBuffer());
  const extension = image.type === "image/png" ? "png" : "jpg";
  const fileName = `${randomUUID()}.${extension}`;
  const imagesDir = path.join(process.cwd(), "public", "images");
  const fullPath = path.join(imagesDir, fileName);

  await fs.mkdir(imagesDir, { recursive: true });
  await fs.writeFile(fullPath, bytes);

  return `/images/${fileName}`;
}

export async function createMeal(input: CreateMealInput) {
  const db = getDb({ readonly: false });
  const baseSlug = slugify(input.title, { lower: true, strict: true }) || randomUUID();
  let slug = baseSlug;
  let suffix = 1;

  while (db.prepare("SELECT 1 FROM meals WHERE slug = ?").get(slug)) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  const imagePath = await saveImage(input.image);

  db.prepare(
    `INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
     VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`
  ).run({
    slug,
    title: input.title,
    image: imagePath,
    summary: input.summary,
    instructions: sanitizeInstructions(input.instructions),
    creator: input.creator,
    creator_email: input.creatorEmail,
  });

  return slug;
}
