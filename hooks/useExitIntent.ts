"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface UseExitIntentOptions {
  /** Only fire once per session? Default: true */
  once?: boolean;
  /** Delay before enabling detection (ms). Default: 5000 */
  delay?: number;
  /** Disable on touch devices? Default: true */
  disableOnTouch?: boolean;
}

/**
 * Phase 5 — Exit-Intent Detection (Desktop-only)
 * Detects when mouse leaves viewport toward top (browser tabs/address bar).
 * Fires max once per session via sessionStorage flag.
 */
export function useExitIntent({
  once = true,
  delay = 5000,
  disableOnTouch = true,
}: UseExitIntentOptions = {}) {
  const [triggered, setTriggered] = useState(false);
  const enabledRef = useRef(false);
  const firedRef = useRef(false);

  const dismiss = useCallback(() => {
    setTriggered(false);
    if (once) {
      try {
        sessionStorage.setItem("exit_intent_fired", "1");
      } catch {
        // Silent fail (private mode)
      }
    }
  }, [once]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip on touch devices
    if (disableOnTouch && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      return;
    }

    // Check if already fired this session
    if (once) {
      try {
        if (sessionStorage.getItem("exit_intent_fired") === "1") {
          return;
        }
      } catch {
        // Silent fail
      }
    }

    // Delay enabling to avoid false positives on page load
    const timer = setTimeout(() => {
      enabledRef.current = true;
    }, delay);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!enabledRef.current || firedRef.current) return;
      // Only fire when mouse exits toward the top (address bar direction)
      if (e.clientY < 10) {
        firedRef.current = true;
        setTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [once, delay, disableOnTouch]);

  return { triggered, dismiss };
}
