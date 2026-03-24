/**
 * DESIGN TOKENS — ANIMATIONS
 * Re-exports motion.config.ts values as a unified design-token object,
 * consistent with spacing.ts and typography.ts barrel patterns.
 */

export {
  springStandard,
  springSnappy,
  springEnergetic,
  springGentle,
  springBouncy,
  cssEasings,
  durations,
  staggers,
  revealSectionVariants,
  staggerGridContainer,
  staggerGridItem,
  featureCardStagger,
} from "../motion.config";

/** Consolidated animation token object for programmatic access */
export const animationTokens = {
  /** CSS Custom Property names for durations */
  cssDurations: {
    instant: "var(--duration-instant)",
    fast: "var(--duration-fast)",
    normal: "var(--duration-normal)",
    slow: "var(--duration-slow)",
    dramatic: "var(--duration-dramatic)",
    cinematic: "var(--duration-cinematic)",
  },
  /** CSS Custom Property names for easings */
  cssEasings: {
    out: "var(--ease-out)",
    in: "var(--ease-in)",
    inOut: "var(--ease-in-out)",
    spring: "var(--ease-spring)",
    bounce: "var(--ease-bounce)",
  },
  /** CSS Custom Property names for staggers */
  cssStaggers: {
    fast: "var(--stagger-fast)",
    normal: "var(--stagger-normal)",
    slow: "var(--stagger-slow)",
  },
} as const;

export type AnimationDuration = keyof typeof animationTokens.cssDurations;
export type AnimationEasing = keyof typeof animationTokens.cssEasings;
export type AnimationStagger = keyof typeof animationTokens.cssStaggers;
