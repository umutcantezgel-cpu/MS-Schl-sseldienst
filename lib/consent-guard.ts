/**
 * ══════════════════════════════════════════════════════════════
 * Consent Guard — Script-Blocking Utility (DSGVO/TTDSG)
 * ══════════════════════════════════════════════════════════════
 * Prevents any third-party script (e.g., GA4, GTM, Hotjar)
 * from loading before explicit user consent is given.
 *
 * Usage:
 *   loadScriptAfterConsent("analytics", "https://www.googletagmanager.com/gtag/js?id=G-XXXXXX");
 *
 * The script tag is only injected into the DOM after the user
 * has given consent for the specified category. If consent is
 * later revoked, the script is NOT removed (browser limitation),
 * but no new data will be sent if the analytics library checks
 * consent status via hasConsent().
 * ══════════════════════════════════════════════════════════════
 */

import { hasConsent } from "@/hooks/useConsent";
import type { ConsentCategory } from "@/lib/cookie-inventory";

/**
 * Injects a <script> tag into the document head only after
 * consent for the given category has been granted.
 *
 * @param category - The consent category required ("analytics" | "marketing")
 * @param scriptUrl - The URL of the script to load
 * @param attrs - Optional additional attributes for the script tag
 * @returns A cleanup function that removes the event listener
 */
export function loadScriptAfterConsent(
  category: Exclude<ConsentCategory, "essential">,
  scriptUrl: string,
  attrs?: Record<string, string>
): () => void {
  if (typeof window === "undefined") return () => {};

  const scriptId = `consent-script-${category}-${btoa(scriptUrl).slice(0, 12)}`;

  // Don't inject twice
  if (document.getElementById(scriptId)) return () => {};

  const inject = () => {
    // Double-check consent at injection time
    if (!hasConsent(category)) return;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = scriptUrl;
    script.async = true;

    // Apply optional attributes
    if (attrs) {
      for (const [key, value] of Object.entries(attrs)) {
        script.setAttribute(key, value);
      }
    }

    document.head.appendChild(script);
  };

  // Check immediately — consent might already be given
  if (hasConsent(category)) {
    inject();
    return () => {};
  }

  // Listen for future consent updates
  const handler = (event: Event) => {
    const detail = (event as CustomEvent).detail;
    if (detail?.[category] === true) {
      inject();
    }
  };

  window.addEventListener("cookie_consent_updated", handler);

  return () => {
    window.removeEventListener("cookie_consent_updated", handler);
  };
}
