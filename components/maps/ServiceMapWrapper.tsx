"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useInView } from "framer-motion";

const InteractiveServiceMap = dynamic(
  () => import("@/components/maps/InteractiveServiceMap"),
  {
    ssr: false,
    loading: () => <MapFallback />,
  }
);

function MapFallback() {
  return (
    <div className="h-[400px] w-full sm:h-[500px] lg:h-[550px] rounded-[var(--space-4)] bg-[var(--surface-secondary)] ring-1 ring-[var(--border-subtle)] elevation-2 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-3">
         <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--border-subtle)] border-t-[var(--color-red-500)]" />
         <span className="text-sm font-medium text-[color:var(--text-tertiary)]">Karte wird geladen...</span>
      </div>
    </div>
  );
}

export default function ServiceMapWrapper() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className="h-full w-full">
      {isInView ? <InteractiveServiceMap /> : <MapFallback />}
    </div>
  );
}
