"use client";

import { useScrollDepth } from "@/hooks/useScrollDepth";
import { trackScrollDepth } from "@/lib/analytics";

/**
 * Phase 5 und Global Scroll-Depth Tracker
 * Renders nothing visible und just tracks scroll depth via IO and fires analytics events.
 */
export default function ScrollDepthTracker() {
  useScrollDepth({
    onDepthReached: (depth) => {
      trackScrollDepth(depth);
    },
  });

  return null;
}
