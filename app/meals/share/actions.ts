"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createMeal } from "@/src/entities/meal/server";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png"]);

const shareMealSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please provide your name (at least 2 characters).")
    .max(60, "Name is too long (max 60 characters)."),
  email: z.preprocess(
    (value) => (typeof value === "string" ? value.trim() : value),
    z
      .email("Please provide a valid email address.")
      .max(254, "Email is too long.")
  ),
  title: z
    .string()
    .trim()
    .min(3, "Title must contain at least 3 characters.")
    .max(120, "Title is too long (max 120 characters)."),
  summary: z
    .string()
    .trim()
    .min(10, "Summary must contain at least 10 characters.")
    .max(300, "Summary is too long (max 300 characters)."),
  instructions: z
    .string()
    .trim()
    .min(30, "Instructions must contain at least 30 characters.")
    .max(5000, "Instructions are too long (max 5000 characters)."),
});

export type ShareMealFormState = {
  message?: string;
  fieldErrors: Partial<Record<"name" | "email" | "title" | "summary" | "instructions" | "image", string>>;
};

export async function shareMealAction(
  _prevState: ShareMealFormState,
  formData: FormData
): Promise<ShareMealFormState> {
  const parsedTextFields = shareMealSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
  });

  const image = formData.get("image");
  const fieldErrors: ShareMealFormState["fieldErrors"] = {};

  if (!parsedTextFields.success) {
    const flattenedErrors = z.flattenError(parsedTextFields.error).fieldErrors;
    fieldErrors.name = flattenedErrors.name?.[0];
    fieldErrors.email = flattenedErrors.email?.[0];
    fieldErrors.title = flattenedErrors.title?.[0];
    fieldErrors.summary = flattenedErrors.summary?.[0];
    fieldErrors.instructions = flattenedErrors.instructions?.[0];
  }

  if (!(image instanceof File) || image.size === 0) {
    fieldErrors.image = "Please upload a meal image.";
  } else if (!ALLOWED_IMAGE_TYPES.has(image.type)) {
    fieldErrors.image = "Only PNG and JPG images are supported.";
  } else if (image.size > MAX_IMAGE_SIZE) {
    fieldErrors.image = "Image size must be 5MB or less.";
  }

  const hasFieldErrors = Object.values(fieldErrors).some(Boolean);

  if (hasFieldErrors || !parsedTextFields.success || !(image instanceof File)) {
    return {
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const normalizedFields = parsedTextFields.data;

  const slug = await createMeal({
    title: normalizedFields.title,
    summary: normalizedFields.summary,
    instructions: normalizedFields.instructions,
    creator: normalizedFields.name,
    creatorEmail: normalizedFields.email.toLowerCase(),
    image,
  });

  revalidatePath("/meals");
  redirect(`/meals/${slug}`);
}
