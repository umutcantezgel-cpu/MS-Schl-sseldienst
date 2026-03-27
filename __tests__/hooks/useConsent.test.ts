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

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useConsent } from '@/hooks/useConsent';

describe("useConsent hook", () => {
  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return null consent state when no cookie is present", () => {
    const { result } = renderHook(() => useConsent());
    expect(result.current.consent).toBeNull();
  });

  it("should update consent correctly", () => {
    const { result } = renderHook(() => useConsent());
    
    act(() => {
      result.current.updateConsent({ analytics: true, marketing: false });
    });

    expect(result.current.consent?.analytics).toBe(true);
    expect(result.current.consent?.marketing).toBe(false);
  });

  it("should parse existing valid cookie", () => {
    const consentState = JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    });
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: `consent_status=${encodeURIComponent(consentState)}`,
    });

    const { result } = renderHook(() => useConsent());
    expect(result.current.consent.analytics).toBe(true);
    expect(result.current.consent.marketing).toBe(true);
  });
});
