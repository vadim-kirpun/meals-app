import { Suspense } from "react";
import { PageShell } from "@/src/shared/ui/page-shell";
import MealsGrid from "./MealsGrid";
import MealsGridSkeleton from "./MealsGridSkeleton";
import MealsPageHeader from "./MealsPageHeader";

export default function MealsPage() {
  return (
    <PageShell>
      <MealsPageHeader />

      <Suspense fallback={<MealsGridSkeleton />}>
        <MealsGrid />
      </Suspense>
    </PageShell>
  );
}
