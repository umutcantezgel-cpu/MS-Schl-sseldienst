export const spacingTokens = {
  0: "var(--space-0)",
  1: "var(--space-1)", // 4px (Mikro: Icon-zu-Text)
  2: "var(--space-2)", // 8px (Fein: Label-zu-Input)
  3: "var(--space-3)", // 12px (Klein: Button-Padding)
  4: "var(--space-4)", // 16px (Basis: Card-Padding, Standard-Gap)
  5: "var(--space-5)", // 20px
  6: "var(--space-6)", // 24px (Komposition: Card-Element-Gap)
  7: "var(--space-7)", // 32px (Gruppen)
  8: "var(--space-8)", // 40px (Abschnitt)
  9: "var(--space-9)", // 48px (Sektion-Klein)
  10: "var(--space-10)", // 64px (Sektion-Mittel)
  11: "var(--space-11)", // 80px (Sektion-Groß)
  12: "var(--space-12)", // 96px (Zwischen Major-Sektionen)
  13: "var(--space-13)", // 128px (Maximum)
  
  // Fluid Spacing
  section: "var(--space-section)",     // clamp(48px, 8vw, 96px)
  container: "var(--space-container)", // clamp(16px, 4vw, 48px)
  gap: "var(--space-gap)",             // clamp(16px, 2vw, 24px)
} as const;

export type SpacingToken = keyof typeof spacingTokens;
