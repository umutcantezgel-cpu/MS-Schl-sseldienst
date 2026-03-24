"use client";

import { useEffect, useState } from "react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";
import { WifiOff, Wifi } from "lucide-react";

/**
 * Non-intrusive banner that appears when the user goes offline.
 * Shows "back online" confirmation for 3 seconds after reconnecting.
 */
export default function OfflineBanner() {
  const { isOnline, wasOffline } = useNetworkStatus();
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    if (isOnline && wasOffline) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isOnline, wasOffline]);

  if (isOnline && !showReconnected) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed top-0 left-0 right-0 z-[9998] flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors duration-300 ${
        isOnline
          ? "bg-status-success text-[color:var(--color-charcoal-50)]"
          : "bg-status-warning text-[color:var(--text-primary)]"
      }`}
    >
      {isOnline ? (
        <>
          <Wifi className="h-4 w-4" aria-hidden="true" />
          Sie sind wieder online.
        </>
      ) : (
        <>
          <WifiOff className="h-4 w-4" aria-hidden="true" />
          Sie sind offline. Einige Funktionen sind eingeschränkt.
        </>
      )}
    </div>
  );
}
