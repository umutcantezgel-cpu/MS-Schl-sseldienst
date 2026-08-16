"use client";

import { useEffect, useState, useMemo } from "react";
import { m, useScroll, useTransform } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    if (window.innerWidth < 768) {
      setIsDesktop(false);
    }
  }, []);

  const paths = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
        duration: 20 + ((i * 7 + 3) % 10),
      })),
    [position]
  );

  if (!isMounted || !isDesktop) return null;

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <m.path
            key={path.id}
            d={path.d}
            style={{ stroke: "var(--color-blush-600)" }}
            strokeWidth={path.width * 1.5}
            strokeOpacity={0.05 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={
              isMounted
                ? {
                   pathLength: 1,
                   opacity: [0.2, 0.6, 0.2],
                   pathOffset: [0, 1, 0],
                 }
                : undefined
            }
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease:"linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function HeroParallax() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    if (window.innerWidth < 768) {
      setIsDesktop(false);
    }
  }, []);

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], ["0%","25%"]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);

  if (!isMounted || !isDesktop) return null;

  return (
    <m.div 
      className="absolute inset-0 z-0 pointer-events-none hidden md:block"
      style={{ y: backgroundY, opacity: opacityFade }}
    >
      <FloatingPaths position={1} />
    </m.div>
  );
}
