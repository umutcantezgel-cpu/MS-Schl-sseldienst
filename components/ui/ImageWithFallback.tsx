"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useCallback } from "react";

interface ImageWithFallbackProps extends ImageProps {
  /** Fallback image src when primary fails */
  fallbackSrc?: string;
  /** Fallback background color when no fallback image */
  fallbackColor?: string;
}

/**
 * next/image wrapper that handles load errors gracefully.
 * Shows a fallback image or colored placeholder instead of a broken image icon.
 *
 * @example
 * <ImageWithFallback
 *   src="/hero.jpg"
 *   fallbackSrc="/fallback.jpg"
 *   fallbackColor="#F5F3F0"
 *   alt="Hero image"
 *   width={800}
 *   height={400}
 * />
 */
export default function ImageWithFallback({
  src,
  fallbackSrc,
  fallbackColor = "var(--color-charcoal-50, #F7F7F8)",
  alt,
  style,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(() => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  }, [fallbackSrc, imgSrc]);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: fallbackColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "inherit",
          ...style,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.3 }}
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={handleError}
      style={style}
      {...props}
    />
  );
}
