"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseTimeEngagementOptions {
  /** Seconds of active engagement before trigger. Default: 45 */
  thresholdSeconds?: number;
  /** Fire only once per session? Default: true */
  once?: boolean;
}

/**
 * Phase 18 — Time-Based Engagement Trigger
 * Fires after N seconds of ACTIVE usage (tab must be visible).
 * Uses Page Visibility API to pause when tab is hidden.
 * SessionStorage prevents multi-trigger.
 */
export function useTimeEngagement({
  thresholdSeconds = 45,
  once = true,
}: UseTimeEngagementOptions = {}) {
  const [triggered, setTriggered] = useState(false);
  const elapsedRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const dismiss = useCallback(() => {
    setTriggered(false);
    if (once) {
      try {
        sessionStorage.setItem("time_engagement_fired", "1");
      } catch {
        // Private mode
      }
    }
  }, [once]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if already fired this session
    if (once) {
      try {
        if (sessionStorage.getItem("time_engagement_fired") === "1") return;
      } catch {
        // Private mode
      }
    }

    const tick = () => {
      if (document.visibilityState !== "visible") return;
      elapsedRef.current += 1;
      if (elapsedRef.current >= thresholdSeconds) {
        setTriggered(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    };

    intervalRef.current = setInterval(tick, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [thresholdSeconds, once]);

  return { triggered, dismiss };
}
