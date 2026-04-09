"use client";

import Image from "next/image";
import type { ImageAsset } from "@/lib/data/imageAssets";

/**
 * SeoHeroImage und Above-the-Fold LCP-optimiertes Bild
 *
 * Wird NIEMALS lazy-loaded. Erhält:
 * - priority={true} → Next.js setzt fetchpriority="high" + preload
 * - loading="eager" + decoding="sync" für sofortige Darstellung
 * - Feste width/height → CLS = 0
 */
interface SeoHeroImageProps {
  image: ImageAsset;
  /** Optionaler Override für Alt-Text (z.B. mit Stadtnamen) */
  altOverride?: string;
  className?: string;
  /** Responsive sizes hint für optimal Bildgröße */
  sizes?: string;
}

export function SeoHeroImage({
  image,
  altOverride,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
}: SeoHeroImageProps) {
  return (
    <Image
      src={image.src}
      alt={altOverride || image.alt}
      title={image.title}
      width={image.width}
      height={image.height}
      priority={true}
      loading="eager"
      decoding="sync"
      sizes={sizes}
      className={`object-cover ${className}`}
      quality={85}
    />
  );
}

/**
 * SeoContentImage und Below-the-Fold ressourcen-schonendes Bild
 *
 * Wird strikt lazy-loaded. Erhält:
 * - loading="lazy" + decoding="async"
 * - Feste width/height → CLS = 0
 * - Optional: dynamischer Alt-Text mit Stadtname für Local SEO
 */
interface SeoContentImageProps {
  image: ImageAsset;
  /** Stadtname für dynamische Alt-Text-Injektion */
  cityName?: string;
  /** Optionaler Override für Alt-Text */
  altOverride?: string;
  className?: string;
  sizes?: string;
}

export function SeoContentImage({
  image,
  cityName,
  altOverride,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
}: SeoContentImageProps) {
  // Dynamische Alt-Text-Generierung für Local SEO (115+ Städte)
  const dynamicAlt = altOverride
    ? altOverride
    : cityName
      ? image.alt.replace(/Wetzlar/g, cityName).replace(/wetzlar/g, cityName.toLowerCase())
      : image.alt;

  return (
    <Image
      src={image.src}
      alt={dynamicAlt}
      title={image.title}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      sizes={sizes}
      className={`object-cover ${className}`}
      quality={80}
    />
  );
}
