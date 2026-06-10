export type Meal = {
  slug: string;
  title: string;
  creator: string;
  summary: string;
  image: string;
};

export type MealDetails = Meal & {
  id: number;
  instructions: string;
  creator_email: string;
};
