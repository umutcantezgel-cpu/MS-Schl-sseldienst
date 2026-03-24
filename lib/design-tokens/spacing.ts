/**
 * DESIGN TOKENS — SPACING
 * Single Source of Truth für alle Abstände (Padding, Margin, Gap).
 * Basiseinheit: 4px.
 */

export const spacingTokens = {
  // 14-stufige feste Skala
  0: "0px",
  1: "4px",   // Mikro: Icon-zu-Text in Buttons, Badge-Padding
  2: "8px",   // Fein: Label-zu-Input, Icon-zu-Text
  3: "12px",  // Klein: Button-Padding innen, Chip-Padding
  4: "16px",  // Basis: Card-Padding, Standard-Gap
  5: "20px",  // Zwischen: Mittlere Container-Padding
  6: "24px",  // Komposition: Card-Element-Gap, Formular-Gruppen
  7: "32px",  // Gruppen: Zusammengehörige Sektionsteile
  8: "40px",  // Abschnitt: Untergruppen innerhalb einer Sektion
  9: "48px",  // Sektion-Klein: Kompakte Sektions-Padding
  10: "64px", // Sektion-Mittel: Standard Desktop-Sektions-Padding
  11: "80px", // Sektion-Groß: Großzügiges Sektions-Padding
  12: "96px", // Raum: Zwischen Major-Sektionen
  13: "128px",// Maximum: Maximaler Abstand, besondere Dramatik

  // Fluid Spacing (Responsive über Clamp)
  section: "clamp(48px, 8vw, 96px)", // Sektions-Padding
  container: "clamp(16px, 4vw, 48px)", // Container-Padding links/rechts
  gap: "clamp(16px, 2vw, 24px)", // Grid-Gap
} as const;

export type SpacingStringToken = keyof typeof spacingTokens;
export type SpacingToken = SpacingStringToken | number; // Support for numeric token inputs representing the keys
