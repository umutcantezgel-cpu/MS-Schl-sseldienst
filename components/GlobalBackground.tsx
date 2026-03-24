"use client";

import { useEffect, useState, useMemo } from "react";

function FloatingPaths({ position }: { position: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const paths = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 10 * position} -${189 + i * 12}C-${
          380 - i * 10 * position
        } -${189 + i * 12} -${312 - i * 10 * position} ${216 - i * 12} ${
          152 - i * 10 * position
        } ${343 - i * 12}C${616 - i * 10 * position} ${470 - i * 12} ${
          684 - i * 10 * position
        } ${875 - i * 12} ${684 - i * 10 * position} ${875 - i * 12}`,
        width: 0.4 + i * 0.025,
        duration: 22 + ((i * 7 + 3) % 12),
      })),
    [position]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Atmosphärische Wellen Wetzlar</title>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            style={
              isMounted
                ? {
                    stroke: "var(--color-blush-600)",
                    strokeWidth: path.width * 1.2,
                    strokeOpacity: 0.03 + path.id * 0.012,
                    strokeDasharray: "100%",
                    strokeDashoffset: "100%",
                    animation: `drawPath ${path.duration}s linear infinite`,
                  }
                : {
                    stroke: "var(--color-blush-600)",
                    strokeWidth: path.width * 1.2,
                    strokeOpacity: 0.25,
                    strokeDasharray: "100%",
                    strokeDashoffset: "70%",
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
