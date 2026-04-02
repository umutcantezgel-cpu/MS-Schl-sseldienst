"use client";

import { useEffect, useState } from "react";

export function SkipNav() {
  const [mounted, setMounted] = useState(false);

  // Verhindert Hydration Mismatch, falls es minimal client-seitige Skripte gäbe, 
  // aber SkipNav sollte idealerweise Server-Rendered bleiben. Da es statisches HTML ist,
  // können wir es simpel zurückgeben:
  
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-[var(--color-red-500)] focus:px-4 focus:py-3 focus:font-bold focus:text-white focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[var(--color-red-500)]/50 transition-transform duration-200"
    >
      Zum Hauptinhalt springen
    </a>
  );
}
