"use client";

import {
  createContext,
  useContext,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

interface AnnouncerContextType {
  announce: (message: string, priority?: "polite" | "assertive") => void;
}

const AnnouncerCtx = createContext<AnnouncerContextType>({
  announce: () => {},
});

/**
 * Provides a programmatic way to announce messages to screen readers.
 * Place in root layout. Use `useAnnounce()` in child components.
 */
export function AnnouncerProvider({ children }: { children: ReactNode }) {
  const politeRef = useRef<HTMLDivElement>(null);
  const assertiveRef = useRef<HTMLDivElement>(null);

  const announce = useCallback(
    (message: string, priority: "polite" | "assertive" = "polite") => {
      const ref = priority === "assertive" ? assertiveRef : politeRef;
      if (ref.current) {
        // Clear first to re-trigger announcement for same text
        ref.current.textContent = "";
        requestAnimationFrame(() => {
          if (ref.current) ref.current.textContent = message;
        });
      }
    },
    []
  );

  return (
    <AnnouncerCtx.Provider value={{ announce }}>
      {children}

      {/* Visually hidden live regions */}
      <div
        ref={politeRef}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
      <div
        ref={assertiveRef}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      />
    </AnnouncerCtx.Provider>
  );
}

/** Announce a message to screen readers */
export function useAnnounce() {
  return useContext(AnnouncerCtx).announce;
}
