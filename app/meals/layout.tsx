export default function MealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Meals</h1>
      {children}
    </div>
  );
}