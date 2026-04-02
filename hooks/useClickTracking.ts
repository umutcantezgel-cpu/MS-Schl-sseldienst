"use client";

import { useCallback } from "react";
import { trackCTAClick, trackPhoneClick, trackEvent } from "@/lib/analytics";

type CTAContext = "hero" | "sticky" | "final" | "inline";

export function useClickTracking() {
  const handleCtaClick = useCallback((context: CTAContext, label?: string) => {
    trackCTAClick(context, label);
  }, []);

  const handlePhoneClick = useCallback((location: string) => {
    trackPhoneClick(location);
  }, []);

  const handleCustomEvent = useCallback((eventName: Parameters<typeof trackEvent>[0], props?: Parameters<typeof trackEvent>[1]) => {
    trackEvent(eventName, props);
  }, []);

  return {
    handleCtaClick,
    handlePhoneClick,
    handleCustomEvent,
  };
}
