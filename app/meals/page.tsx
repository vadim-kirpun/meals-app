import type { Metadata } from "next";
import { MealsPage } from "@/src/widgets/meals-page";

export const metadata: Metadata = {
  title: "Browse Meals | NextLevel Food",
  description:
    "Explore community-shared recipes organized by meal type — from breakfast to dessert.",
};

export const dynamic = "force-dynamic";

export default function Meals() {
  return <MealsPage />;
}
