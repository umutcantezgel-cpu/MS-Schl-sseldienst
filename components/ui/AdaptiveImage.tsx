"use client";

import Image, { type ImageProps } from "next/image";
import { useDevice } from "@/components/providers/DeviceProvider";

interface AdaptiveImageProps extends Omit<ImageProps, "quality"> {
  /** Quality for fast connections (default 80) */
  highQuality?: number;
  /** Quality for slow connections (default 55) */
  lowQuality?: number;
}

/**
 * Extends next/image with connection-quality-aware quality and loading behavior.
 * - Fast connection: high quality, blur placeholder
 * - Slow connection / Save-Data: lower quality, eager lazy-loading
 */
export default function AdaptiveImage({
  highQuality = 80,
  lowQuality = 55,
  loading,
  priority,
  alt,
  ...props
}: AdaptiveImageProps) {
  const { connectionType, isReducedData } = useDevice();

  const isSlowConnection =
    connectionType === "slow-2g" ||
    connectionType === "2g" ||
    connectionType === "3g" ||
    isReducedData;

  const quality = isSlowConnection ? lowQuality : highQuality;

  // On slow connections, never eager-load unless explicitly priority
  const resolvedLoading = priority
    ? undefined
    : isSlowConnection
      ? "lazy"
      : loading;

  return (
    <Image
      quality={quality}
      loading={resolvedLoading}
      priority={priority}
      alt={alt || ""}
      {...props}
    />
  );
}
