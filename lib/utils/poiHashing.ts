/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 2: Deterministic POI Hashing (Combinatorial Uniqueness)
 * ══════════════════════════════════════════════════════════════════
 * Uses SHA-256 to generate a deterministic seed from each poiSlug.
 * This seed drives:
 *   (A) Layout section order rotation
 *   (B) Design token rotation (background colors)
 *   (C) Hero image rotation
 *
 * WHY: Google Vision API + Doorway Page Penalty detection relies on
 * visual/structural similarity between pages. By making every POI
 * page structurally unique via crypto-deterministic permutation,
 * we bypass this algorithmically while maintaining SEO consistency.
 *
 * INVARIANT: Same slug → always same layout (SSR-safe, no randomness).
 * ══════════════════════════════════════════════════════════════════
 */

import { createHash } from "crypto";

/**
 * Generates a deterministic numeric seed from a POI slug using SHA-256.
 * Returns a 32-bit unsigned integer derived from the hash.
 */
export function hashPoiSlug(slug: string): number {
  const hash = createHash("sha256").update(slug).digest();
  // Read first 4 bytes as unsigned 32-bit integer (big-endian)
  return hash.readUInt32BE(0);
}

/** Available section layout patterns for POI pages */
type SectionId = "hero" | "eta" | "pricing" | "scenario" | "trust" | "services" | "faq" | "cta";

const BASE_SECTION_ORDER: SectionId[] = [
  "hero", "eta", "pricing", "scenario", "trust", "services", "faq", "cta",
];

/**
 * (A) Deterministic section order for a POI page.
 * "hero" always stays first, "cta" always stays last.
 * The middle sections are Fisher-Yates shuffled with the hash seed.
 */
export function getSectionOrder(slug: string): SectionId[] {
  const seed = hashPoiSlug(slug);
  // Clone middle sections (exclude hero at 0, cta at end)
  const middle = BASE_SECTION_ORDER.slice(1, -1);

  // Seeded Fisher-Yates shuffle (deterministic)
  let s = seed;
  for (let i = middle.length - 1; i > 0; i--) {
    // LCG pseudorandom: next = (a * s + c) mod m
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [middle[i], middle[j]] = [middle[j]!, middle[i]!];
  }

  return ["hero", ...middle, "cta"];
}

/** Design token palette for section backgrounds */
const BG_TOKENS = [
  "bg-white",
  "bg-gray-50",
  "bg-slate-50",
  "bg-zinc-50",
  "bg-stone-50",
  "bg-neutral-50",
] as const;

/**
 * (B) Deterministic background color for a given section index.
 */
export function getSectionBg(slug: string, sectionIndex: number): string {
  const seed = hashPoiSlug(slug);
  return BG_TOKENS[(seed + sectionIndex) % BG_TOKENS.length]!;
}

/** Hero image pool for rotation */
const HERO_IMAGES = [
  "/images/mina-saad-arbeitseinsatz-tueroeffnung-wetzlar.jpeg",
  "/images/tueroeffnung-prozess-zerstoerungsfrei-wetzlar.jpeg",
  "/images/schluesseldienst-wetzlar-werkzeug-einsatzfahrzeug.jpeg",
  "/images/mina-saad-schluesseldienst-wetzlar-einsatzfahrzeug.jpeg",
  "/images/tueroeffnung-arbeit-obertuerband-schluesseldienst.jpeg",
  "/images/mina-saad-schluesseldienst-wetzlar-outdoor-portrait.jpeg",
  "/images/lockpicking-tueroeffnung-schluesseldienst-wetzlar.webp",
] as const;

/**
 * (C) Deterministic hero image for a POI page.
 */
export function getPoiHeroImage(slug: string): string {
  const seed = hashPoiSlug(slug);
  return HERO_IMAGES[seed % HERO_IMAGES.length]!;
}
