"use client";

import { useEffect } from "react";
import { errorLogger } from "@/lib/monitoring/error-logger";

/**
 * Phase 19 und Global Error Handlers
 * Captures unhandled errors and promise rejections.
 * Mount once in layout.tsx via dynamic import.
 */
export default function ErrorHandlers() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      errorLogger.capture(event.error || new Error(event.message), {
        category: "client",
        page: window.location.pathname,
      });
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      const error =
        event.reason instanceof Error
          ? event.reason
          : new Error(String(event.reason));
      errorLogger.capture(error, {
        category: "client",
        page: window.location.pathname,
      });
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}
