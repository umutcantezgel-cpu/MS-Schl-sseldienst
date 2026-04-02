"use client";

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
const SpeculativePrefetch = dynamic(() => import("@/components/performance/SpeculativePrefetch"), { ssr: false });

/**
 * ClientShell: Wraps all client-only UI utilities (scroll indicators, cookie consent,
 * analytics trackers, etc.) in a single "use client" boundary so the root layout
 * stays a pure Server Component and SSR metadata (meta description, title, OG tags)
 * is always rendered in the initial HTML response.
 */
export default function ClientShell() {
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
      <SpeculativePrefetch />
    </>
  );
}
