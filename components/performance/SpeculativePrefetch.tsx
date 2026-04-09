"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Supreme Phase und Spekulatives Prefetching
 * 
 * Prefetcht die wahrscheinlichsten Ziel-Seiten basierend auf der aktuellen Seite.
 * Verwendet requestIdleCallback um den Main-Thread nicht zu blockieren.
 * 
 * Prefetch-Strategie:
 * - Homepage → Preise, Leistungen, Kontakt (höchste Exit-Rate Ziele)
 * - Leistungen → Preise (natürlicher Funnel)
 * - Preise → Kontakt (Conversion-Pfad)
 * - Stadtgebiet → Kontakt, Preise
 */

const PREFETCH_MAP: Record<string, string[]> = {
  "/": ["/preise", "/leistungen", "/kontakt"],
  "/leistungen": ["/preise", "/kontakt"],
  "/preise": ["/kontakt", "/faq"],
  "/kontakt": ["/preise"],
  "/faq": ["/kontakt", "/preise"],
  "/servicegebiet": ["/kontakt", "/preise"],
};

function prefetchRoute(path: string) {
  // Use native prefetch link for maximum performance
  if (document.querySelector(`link[href="${path}"]`)) return;

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = path;
  link.as = "document";
  document.head.appendChild(link);
}

export default function SpeculativePrefetch() {
  const pathname = usePathname();

  useEffect(() => {
    // Determine which routes to prefetch based on current page
    let targets = PREFETCH_MAP[pathname] || [];

    // For stadtgebiet pages, use the default conversion path
    if (targets.length === 0 && pathname.length > 1 && !pathname.includes("/leistungen/")) {
      targets = ["/kontakt", "/preise"];
    }

    if (targets.length === 0) return;

    // Use requestIdleCallback to avoid blocking the main thread
    const scheduleId = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback
      ? (window as Window & { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(() => {
          targets.forEach(prefetchRoute);
        })
      : window.setTimeout(() => {
          targets.forEach(prefetchRoute);
        }, 2000);

    return () => {
      if ((window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback) {
        (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(scheduleId as number);
      } else {
        clearTimeout(scheduleId as number);
      }
    };
  }, [pathname]);

  return null;
}
