import Link from "next/link";

export default function Meals() {
  return (
    <div>
      <h1>Meals</h1>

      <Link href="/meals/breakfast">Breakfast</Link>
      <Link href="/meals/lunch">Lunch</Link>
      <Link href="/meals/dinner">Dinner</Link>
      <Link href="/meals/snack">Snack</Link>
      <Link href="/meals/drink">Drink</Link>
      <Link href="/meals/dessert">Dessert</Link>
      <Link href="/meals/other">Other</Link>
    </div>
  );
}