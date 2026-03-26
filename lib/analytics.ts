/**
 * ══════════════════════════════════════════════════════════════
 * Phase 5 — Analytics & Conversion-Tracking
 * ══════════════════════════════════════════════════════════════
 * Provider-agnostisches Event-System.
 * Feuert Events NUR wenn Cookie-Consent erteilt wurde.
 * ══════════════════════════════════════════════════════════════
 */

// ─── Conversion-Events ───
type ConversionEvent =
  // CTA Clicks
  | "hero_cta_click"
  | "sticky_cta_click"
  | "final_cta_click"
  | "phone_click"
  | "email_click"
  // Contact Form Funnel
  | "contact_form_view"
  | "contact_form_start"
  | "contact_form_progress"
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"
  // Scroll Depth
  | "scroll_depth_25"
  | "scroll_depth_50"
  | "scroll_depth_75"
  | "scroll_depth_100"
  // Content Engagement
  | "service_detail_click"
  | "testimonial_view"
  | "faq_open"
  | "pricing_calculator_use"
  // Exit Intent
  | "exit_intent_shown"
  | "exit_intent_dismissed"
  | "exit_intent_cta_click"
  | "web_vital"
  // Phase 18 — Growth & Personalization
  | "segment_identified"
  | "personalization_view"
  | "time_engagement_cta"
  | "return_visitor_banner"
  | "estimator_start"
  | "estimator_result"
  | "estimator_cta_click"
  | "related_service_click";

// ─── Type-safe properties ───
interface EventProperties {
  page?: string;
  label?: string;
  value?: number;
  category?: string;
  [key: string]: unknown;
}

// ─── Consent check (Phase 16 — DSGVO-konform) ───
// Importiert aus dem zentralen Consent-System. Default: false (kein Tracking ohne Einwilligung).
import { hasConsent } from "@/hooks/useConsent";

function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return hasConsent("analytics");
}

// ─── Core tracking function ───
export function trackEvent(
  name: ConversionEvent,
  properties?: EventProperties
): void {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  const payload = {
    event: name,
    timestamp: Date.now(),
    page: window.location.pathname,
    ...properties,
  };

  // ─── GA4 (gtag.js) ───
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as Record<string, unknown> & { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      name,
      properties
    );
  }

  // ─── Meta Pixel ───
  if (typeof window !== "undefined" && "fbq" in window) {
    (window as Record<string, unknown> & { fbq: (...args: unknown[]) => void }).fbq(
      "trackCustom",
      name,
      properties
    );
  }

  // ─── Development logging ───
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", payload);
  }
}

// ─── Convenience helpers ───
function trackPhoneClick(location: string): void {
  trackEvent("phone_click", { label: location });
}

function trackCTAClick(
  ctaType: "hero" | "sticky" | "final" | "inline",
  label?: string
): void {
  const eventMap: Record<string, ConversionEvent> = {
    hero: "hero_cta_click",
    sticky: "sticky_cta_click",
    final: "final_cta_click",
    inline: "hero_cta_click",
  };
  trackEvent(eventMap[ctaType] || "hero_cta_click", { label });
}

export function trackFormFunnel(
  step: "view" | "start" | "progress" | "submit" | "success" | "error",
  meta?: EventProperties
): void {
  trackEvent(`contact_form_${step}` as ConversionEvent, meta);
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100): void {
  trackEvent(`scroll_depth_${depth}` as ConversionEvent, {
    page: typeof window !== "undefined" ? window.location.pathname : "",
  });
}
