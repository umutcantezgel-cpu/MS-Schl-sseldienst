"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const GlobalBackground = dynamic(() => import("@/components/GlobalBackground"), { ssr: false });
const ScrollIndicator = dynamic(() => import("@/components/ui/ScrollIndicator"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), { ssr: false });
const ScrollDepthTracker = dynamic(() => import("@/components/analytics/ScrollDepthTracker"), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/ui/CookieConsent"), { ssr: false });
const RouteChangeIndicator = dynamic(() => import("@/components/ui/RouteChangeIndicator"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), { ssr: false });
const OfflineBanner = dynamic(() => import("@/components/ui/OfflineBanner"), { ssr: false });
const RouteAnnouncer = dynamic(() => import("@/components/ui/RouteAnnouncer").then(m => ({ default: m.RouteAnnouncer })), { ssr: false });
const ErrorHandlers = dynamic(() => import("@/components/monitoring/ErrorHandlers"), { ssr: false });
export default function ClientShell() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const trigger = () => setMounted(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(trigger, { timeout: 2500 });
      return () => (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id);
    } else {
      const timer = setTimeout(trigger, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <RouteAnnouncer />
      <RouteChangeIndicator />
      <ScrollToTop />
      <OfflineBanner />
      <GlobalBackground />
      <ScrollIndicator />
      <BackToTop />
      <ScrollDepthTracker />
      <CookieConsent />
      <ErrorHandlers />
    </>
  );
}
