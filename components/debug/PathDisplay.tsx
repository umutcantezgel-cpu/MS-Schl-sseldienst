"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * PathDisplay — Tiny debug widget for the 404 page.
 * Renders the actual window.location.pathname + search so that customer
 * screenshots reveal whether they really hit "/" or a dead link.
 *
 * Uses useSyncExternalStore to safely read window.location (SSR-safe).
 * Console logging happens inside the subscribe callback (effect-like).
 */

function getPathSnapshot(): string {
 try {
  return window.location.pathname + window.location.search;
 } catch {
  return "";
 }
}

function getServerSnapshot(): string {
 return "";
}

export default function PathDisplay() {
 const subscribe = useCallback(() => {
  // Log debug info when component subscribes (mount-time, not render-time)
  try {
   console.info("[404-DEBUG] window.location:", {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    host: window.location.host,
    href: window.location.href,
   });
  } catch {
   // Silently fail in restrictive environments
  }
  // No-op cleanup — location doesn't change
  return () => {};
 }, []);

 const fullPath = useSyncExternalStore(subscribe, getPathSnapshot, getServerSnapshot);

 if (!fullPath) return null;

 return (
  <p
   className="mt-6 text-[10px] text-[color:var(--text-tertiary)] opacity-50 font-mono select-all break-all"
   aria-hidden="true"
   suppressHydrationWarning
  >
   Aufgerufener Pfad: {fullPath}
  </p>
 );
}
