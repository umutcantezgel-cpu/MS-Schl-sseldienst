/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 3: Panic-Mode — Stripped Layout (No Header/Footer)
 * ══════════════════════════════════════════════════════════════════
 * This layout removes ALL navigation chrome for the emergency page.
 * Hick's Law: Zero decisions = maximum conversion.
 * The user sees ONLY the emergency CTA. Nothing else.
 * ══════════════════════════════════════════════════════════════════
 */

export default function PanicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
