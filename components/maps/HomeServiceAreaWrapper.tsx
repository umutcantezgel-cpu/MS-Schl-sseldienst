"use client";

import dynamic from "next/dynamic";

const HomeServiceAreaMap = dynamic(
  () => import("@/components/maps/HomeServiceAreaMap"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] sm:h-[400px] lg:h-[450px] rounded-2xl bg-[var(--surface-secondary)] border border-[var(--color-charcoal-100)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-charcoal-200)] border-t-[var(--color-red-500)]" />
          <span className="text-sm font-medium text-[color:var(--text-tertiary)]">
            Karte wird geladen...
          </span>
        </div>
      </div>
    ),
  }
);

export default function HomeServiceAreaWrapper() {
  return <HomeServiceAreaMap />;
}
