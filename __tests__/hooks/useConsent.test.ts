import { hasConsent } from "@/hooks/useConsent";
import { CONSENT_VERSION } from "@/lib/cookie-inventory";

// Mock document.cookie for consent checks
describe("hasConsent (standalone)", () => {
  it("returns true for essential category always", () => {
    expect(hasConsent("essential")).toBe(true);
  });

  it("returns false when no consent cookie exists", () => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
    expect(hasConsent("analytics")).toBe(false);
    expect(hasConsent("marketing")).toBe(false);
  });

  it("returns true when analytics consent is granted", () => {
    const consentState = JSON.stringify({
      essential: true,
      analytics: true,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    });
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: `consent_status=${encodeURIComponent(consentState)}`,
    });
    expect(hasConsent("analytics")).toBe(true);
    expect(hasConsent("marketing")).toBe(false);
  });
});
