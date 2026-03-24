/**
 * DESIGN TOKENS — TYPOGRAPHY
 * Single Source of Truth für die 9-stufige typografische Skala.
 * Werte abgeleitet aus globals.css @theme Block (Major-Third-Skala, Faktor 1.250).
 */

export interface TypographyToken {
  /** CSS font-size value (clamp or fixed) */
  fontSize: string;
  /** CSS line-height value (unitless) */
  lineHeight: number;
  /** CSS letter-spacing value */
  letterSpacing: string;
  /** CSS font-weight value */
  fontWeight: number;
  /** Default HTML element for this scale level */
  htmlElement: keyof HTMLElementTagNameMap;
  /** Maximum line width in ch units */
  maxWidth: string | null;
}

export const typographyTokens = {
  display: {
    fontSize: "clamp(2rem, 5vw + 0.75rem, 4rem)",
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    fontWeight: 700,
    htmlElement: "h1",
    maxWidth: "20ch",
  },
  h1: {
    fontSize: "clamp(1.5rem, 3vw + 0.75rem, 3rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.025em",
    fontWeight: 700,
    htmlElement: "h1",
    maxWidth: null,
  },
  h2: {
    fontSize: "clamp(1.25rem, 2.5vw + 0.625rem, 2.25rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.015em",
    fontWeight: 700,
    htmlElement: "h2",
    maxWidth: null,
  },
  h3: {
    fontSize: "clamp(1.125rem, 2vw + 0.5rem, 1.75rem)",
    lineHeight: 1.25,
    letterSpacing: "-0.015em",
    fontWeight: 700,
    htmlElement: "h3",
    maxWidth: null,
  },
  h4: {
    fontSize: "clamp(1rem, 1.5vw + 0.5rem, 1.25rem)",
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    fontWeight: 600,
    htmlElement: "h4",
    maxWidth: null,
  },
  body: {
    fontSize: "1rem",
    lineHeight: 1.6,
    letterSpacing: "0em",
    fontWeight: 400,
    htmlElement: "p",
    maxWidth: "65ch",
  },
  lead: {
    fontSize: "1.125rem",
    lineHeight: 1.7,
    letterSpacing: "0em",
    fontWeight: 400,
    htmlElement: "p",
    maxWidth: "75ch",
  },
  small: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: "0.01em",
    fontWeight: 400,
    htmlElement: "span",
    maxWidth: null,
  },
  tiny: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
    letterSpacing: "0.01em",
    fontWeight: 400,
    htmlElement: "span",
    maxWidth: null,
  },
} as const satisfies Record<string, TypographyToken>;

export type TypographyVariant = keyof typeof typographyTokens;
