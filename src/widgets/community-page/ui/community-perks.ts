import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import mealIcon from "@/assets/icons/meal.png";
import type { StaticImageData } from "next/image";

export type CommunityPerk = {
  image: StaticImageData;
  title: string;
  alt: string;
};

export const communityPerks: CommunityPerk[] = [
  {
    image: mealIcon,
    title: "Share & discover recipes",
    alt: "A delicious meal",
  },
  {
    image: communityIcon,
    title: "Find new friends & like-minded people",
    alt: "A crowd of people, cooking",
  },
  {
    image: eventsIcon,
    title: "Participate in exclusive events",
    alt: "A crowd of people at a cooking event",
  },
];
