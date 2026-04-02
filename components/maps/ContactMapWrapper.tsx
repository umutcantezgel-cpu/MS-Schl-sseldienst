"use client";

import dynamic from "next/dynamic";

const ContactPremiumMap = dynamic(
  () => import("@/components/maps/ContactPremiumMap"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] sm:h-[550px] lg:h-[600px] rounded-2xl bg-[var(--surface-secondary)] border border-[var(--color-charcoal-100)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--color-charcoal-200)] border-t-[var(--color-red-500)]" />
          <span className="text-sm font-medium text-[color:var(--text-tertiary)]">
            Interaktive Karte wird geladen...
          </span>
        </div>
      </div>
    ),
  }
);

export default function ContactMapWrapper() {
  return <ContactPremiumMap />;
}
