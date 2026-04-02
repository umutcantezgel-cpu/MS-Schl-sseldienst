"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// ─── Segment Types ───
export type VisitorSegment =
  | "high-intent"
  | "service-interested"
  | "returning"
  | "new-visitor";

/**
 * Phase 18 — Visitor Segment Hook
 * Reads the visitor_segment cookie set by middleware and
 * re-evaluates based on current pathname for SPA navigation.
 * Priority: high-intent > service-interested > returning > new-visitor
 */
export function useVisitorSegment(): VisitorSegment {
  const [segment, setSegment] = useState<VisitorSegment>("new-visitor");
  const pathname = usePathname();

  useEffect(() => {
    // Read visitor_type from cookie
    const visitorTypeCookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("visitor_type="));
    const visitorType = visitorTypeCookie?.split("=")[1] || "new";

    // Determine segment based on current path + visitor type
    let detected: VisitorSegment = "new-visitor";

    if (pathname === "/kontakt" || pathname === "/preise") {
      detected = "high-intent";
    } else if (pathname.startsWith("/leistungen/")) {
      detected = "service-interested";
    } else if (visitorType === "returning") {
      detected = "returning";
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSegment(detected);
  }, [pathname]);

  return segment;
}
