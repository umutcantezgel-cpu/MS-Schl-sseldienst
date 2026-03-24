"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function RouteAnnouncer() {
  const pathname = usePathname();
  const [routeAnnouncement, setRouteAnnouncement] = useState("");

  useEffect(() => {
    // Kurze Verzögerung, um sicherzustellen, dass die Seite rendern konnte, bevor angekündigt wird
    const timeout = setTimeout(() => {
      const pageTitle = document.title || "Neue Seite geladen";
      setRouteAnnouncement(`Navigiert zu: ${pageTitle}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {routeAnnouncement}
    </div>
  );
}
