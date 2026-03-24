"use client";

import { useCallback, useRef, useEffect, type RefObject } from "react";

/**
 * Central focus management hook for accessible UI patterns.
 * Handles: focus-to-first, return-focus, error-focus, focus-trap.
 */
export function useFocusManagement() {
  const triggerRef = useRef<HTMLElement | null>(null);

  /** Save the currently focused element as return-focus target */
  const saveTrigger = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement;
  }, []);

  /** Move focus to the first focusable element inside a container */
  const focusFirst = useCallback((containerRef: RefObject<HTMLElement | null>) => {
    if (!containerRef.current) return;
    const focusable = containerRef.current.querySelector<HTMLElement>(
      'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();
  }, []);

  /** Return focus to the element that triggered the action (e.g. modal open) */
  const returnFocus = useCallback(() => {
    triggerRef.current?.focus();
    triggerRef.current = null;
  }, []);

  /** Focus the first invalid field in a form */
  const focusError = useCallback((formRef: RefObject<HTMLElement | null>) => {
    if (!formRef.current) return;

    // Try aria-invalid first
    const invalid = formRef.current.querySelector<HTMLElement>(
      '[aria-invalid="true"]'
    );
    if (invalid) {
      invalid.focus();
      return;
    }

    // Fallback: first field with :invalid pseudo-class (HTML validation)
    const nativeInvalid = formRef.current.querySelector<HTMLElement>(
      "input:invalid, select:invalid, textarea:invalid"
    );
    nativeInvalid?.focus();
  }, []);

  return {
    saveTrigger,
    focusFirst,
    returnFocus,
    focusError,
  };
}

/** Create a focus trap inside a container (for modals) */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  isActive: boolean
) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableSelector =
      'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusable = container.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [containerRef, isActive]);
}
