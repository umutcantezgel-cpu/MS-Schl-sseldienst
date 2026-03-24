"use client";

import { useState, useEffect, useCallback } from "react";

interface NetworkStatus {
  /** Currently online */
  isOnline: boolean;
  /** Was offline at some point during this session */
  wasOffline: boolean;
}

/**
 * SSR-safe hook for detecting network connectivity changes.
 *
 * @example
 * const { isOnline, wasOffline } = useNetworkStatus();
 * if (!isOnline) showOfflineBanner();
 */
export function useNetworkStatus(): NetworkStatus {
  const [isOnline, setIsOnline] = useState(true); // SSR default: online
  const [wasOffline, setWasOffline] = useState(false);

  const handleOnline = useCallback(() => {
    setIsOnline(true);
  }, []);

  const handleOffline = useCallback(() => {
    setIsOnline(false);
    setWasOffline(true);
  }, []);

  useEffect(() => {
    // Hydrate with actual value
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOnline(navigator.onLine);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleOnline, handleOffline]);

  return { isOnline, wasOffline };
}
