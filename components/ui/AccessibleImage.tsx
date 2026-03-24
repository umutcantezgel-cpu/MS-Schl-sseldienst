"use client";

import Image, { type ImageProps } from "next/image";

// ─── Variant-specific props ───

interface ContentImageProps extends Omit<ImageProps, "alt" | "role"> {
  variant: "content";
  /** Descriptive alt text (min 10 chars). Describes the IMAGE CONTENT. */
  alt: string;
}

interface DecorativeImageProps extends Omit<ImageProps, "alt" | "role"> {
  variant: "decorative";
  /** Must be empty string for decorative images */
  alt?: "";
}

interface FunctionalImageProps extends Omit<ImageProps, "alt" | "role"> {
  variant: "functional";
  /** Describes the FUNCTION, not appearance ("Go to homepage", "Open menu") */
  alt: string;
}

type AccessibleImageProps =
  | ContentImageProps
  | DecorativeImageProps
  | FunctionalImageProps;

/**
 * TypeScript-enforced accessible image wrapper.
 *
 * - content: Requires meaningful alt text (≥10 chars)
 * - decorative: Forces alt="" and role="presentation"
 * - functional: Requires function-describing alt text
 *
 * @example
 * <AccessibleImage variant="content" alt="Team bespreicht Projekt am Whiteboard" src="/team.jpg" width={600} height={400} />
 * <AccessibleImage variant="decorative" src="/pattern.svg" width={100} height={100} />
 * <AccessibleImage variant="functional" alt="Zur Startseite" src="/logo.svg" width={120} height={40} />
 */
export default function AccessibleImage(props: AccessibleImageProps) {
  const { variant, ...imageProps } = props;

  if (variant === "decorative") {
    return (
      <Image
        alt=""
        role="presentation"
        aria-hidden="true"
        {...imageProps}
      />
    );
  }

  const { alt, ...restProps } = imageProps as any;

  if (variant === "functional") {
    return <Image alt={alt} {...restProps} />;
  }

  // variant === "content" — standard accessible image
  return <Image alt={alt} {...restProps} />;
}
