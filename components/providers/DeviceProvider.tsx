"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  type ReactNode,
} from "react";

// ─── Types ───
export type ConnectionType = "slow-2g" | "2g" | "3g" | "4g" | "unknown";

export interface DeviceContext {
  // Viewport classification
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  // Input capabilities
  isTouchDevice: boolean;

  // User preferences
  isReducedMotion: boolean;
  isDarkMode: boolean;
  isHighContrast: boolean;
  isReducedData: boolean;
  isReducedTransparency: boolean;

  // Network
  connectionType: ConnectionType;

  // Viewport metrics
  viewportWidth: number;
  viewportHeight: number;
  pixelRatio: number;

  // Device capabilities
  hardwareConcurrency: number;
  isLowEndDevice: boolean;
}

// ─── SSR-safe defaults ───
const SSR_DEFAULTS: DeviceContext = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isTouchDevice: false,
  isReducedMotion: false,
  isDarkMode: false,
  isHighContrast: false,
  isReducedData: false,
  isReducedTransparency: false,
  connectionType: "4g",
  viewportWidth: 1280,
  viewportHeight: 800,
  pixelRatio: 1,
  hardwareConcurrency: 8,
  isLowEndDevice: false,
};

// ─── Helper: read matchMedia safely ───
function getMediaMatch(query: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia(query).matches;
  } catch {
    return false;
  }
}

// ─── Helper: get connection info ───
function getConnectionType(): ConnectionType {
  if (typeof navigator === "undefined") return "unknown";
  const conn = (navigator as unknown as Record<string, unknown>).connection as
    | { effectiveType?: string; saveData?: boolean }
    | undefined;
  if (!conn?.effectiveType) return "unknown";
  const type = conn.effectiveType as string;
  if (["slow-2g", "2g", "3g", "4g"].includes(type))
    return type as ConnectionType;
  return "unknown";
}

function isSaveData(): boolean {
  if (typeof navigator === "undefined") return false;
  const conn = (navigator as unknown as Record<string, unknown>).connection as
    | { saveData?: boolean }
    | undefined;
  return conn?.saveData === true;
}

// ─── Core hook ───
export function useDeviceContext(): DeviceContext {
  const [ctx, setCtx] = useState<DeviceContext>(SSR_DEFAULTS);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cores = navigator.hardwareConcurrency ?? 4;

      setCtx({
        isMobile: w < 768,
        isTablet: w >= 768 && w <= 1024,
        isDesktop: w > 1024,
        isTouchDevice: getMediaMatch("(pointer: coarse)"),
        isReducedMotion: getMediaMatch("(prefers-reduced-motion: reduce)"),
        isDarkMode: getMediaMatch("(prefers-color-scheme: dark)"),
        isHighContrast: getMediaMatch("(prefers-contrast: more)"),
        isReducedData:
          isSaveData() || getMediaMatch("(prefers-reduced-data: reduce)"),
        isReducedTransparency: getMediaMatch(
          "(prefers-reduced-transparency: reduce)"
        ),
        connectionType: getConnectionType(),
        viewportWidth: w,
        viewportHeight: h,
        pixelRatio: window.devicePixelRatio ?? 1,
        hardwareConcurrency: cores,
        isLowEndDevice: cores < 4,
      });
    }

    // Initial read
    update();

    // Listeners
    const resizeHandler = () => update();
    window.addEventListener("resize", resizeHandler, { passive: true });

    // matchMedia listeners for preference changes
    const queries = [
      "(prefers-reduced-motion: reduce)",
      "(prefers-color-scheme: dark)",
      "(prefers-contrast: more)",
      "(prefers-reduced-transparency: reduce)",
    ];
    const mqlCleanups: (() => void)[] = [];
    for (const q of queries) {
      try {
        const mql = window.matchMedia(q);
        const handler = () => update();
        mql.addEventListener("change", handler);
        mqlCleanups.push(() => mql.removeEventListener("change", handler));
      } catch {
        // Unsupported query, skip
      }
    }

    return () => {
      window.removeEventListener("resize", resizeHandler);
      mqlCleanups.forEach((fn) => fn());
    };
  }, []);

  return ctx;
}

// ─── Context ───
const DeviceCtx = createContext<DeviceContext>(SSR_DEFAULTS);

export function DeviceProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const device = useDeviceContext();
  const value = useMemo(() => device, [device]);
  
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  // Safe-Mount-Pattern: Rendere erst nach Hydration den echten Context, davor SSR_DEFAULTS
  if (!mounted) {
    return <DeviceCtx.Provider value={SSR_DEFAULTS}>{children}</DeviceCtx.Provider>;
  }

  return <DeviceCtx.Provider value={value}>{children}</DeviceCtx.Provider>;
}

/** Consumer hook — use this in components */
export function useDevice(): DeviceContext {
  return useContext(DeviceCtx);
}
