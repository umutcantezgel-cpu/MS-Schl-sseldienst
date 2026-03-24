"use client";

import { useDevice } from "@/components/providers/DeviceProvider";

type AnimationLevel = "full" | "reduced" | "none";

interface AdaptiveAnimationConfig {
  /** full | reduced | none */
  level: AnimationLevel;
  /** Whether to use opacity-only fades (no transforms) */
  fadeOnly: boolean;
  /** Whether parallax/scroll-linked animations are allowed */
  allowParallax: boolean;
  /** Whether stagger animations are allowed */
  allowStagger: boolean;
  /** Duration multiplier (1 = normal, 0 = instant) */
  durationMultiplier: number;
}

/**
 * Determines the appropriate animation level based on device capabilities,
 * user preferences, and network conditions.
 */
export function useAdaptiveAnimation(): AdaptiveAnimationConfig {
  const {
    isReducedMotion,
    isLowEndDevice,
    connectionType,
    isReducedData,
  } = useDevice();

  // Level 1: User explicitly requested no motion
  if (isReducedMotion) {
    return {
      level: "none",
      fadeOnly: true,
      allowParallax: false,
      allowStagger: false,
      durationMultiplier: 0,
    };
  }

  // Level 2: Weak device or slow network → reduced animations
  const isSlowNetwork =
    connectionType === "slow-2g" ||
    connectionType === "2g" ||
    connectionType === "3g";

  if (isLowEndDevice || isSlowNetwork || isReducedData) {
    return {
      level: "reduced",
      fadeOnly: true,
      allowParallax: false,
      allowStagger: false,
      durationMultiplier: 0.5,
    };
  }

  // Level 3: Full animations
  return {
    level: "full",
    fadeOnly: false,
    allowParallax: true,
    allowStagger: true,
    durationMultiplier: 1,
  };
}
