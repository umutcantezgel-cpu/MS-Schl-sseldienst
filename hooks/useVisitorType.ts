"use client";

import { useEffect, useState } from "react";

type VisitorType = "new" | "returning";

/**
 * Reads the visitor_type cookie set by middleware.
 * Server Components can read cookies directly via `cookies()`.
 */
export function useVisitorType(): VisitorType {
  const [type, setType] = useState<VisitorType>("new");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("visitor_type="));
    if (cookie) {
      const val = cookie.split("=")[1];
      if (val === "returning") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setType("returning");
      }
    }
  }, []);

  return type;
}
