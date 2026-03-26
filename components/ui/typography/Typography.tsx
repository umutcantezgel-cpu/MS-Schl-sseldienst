import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  // Base styles applied to all typography elements
  "m-0",
  {
    variants: {
      variant: {
        display: "text-display font-bold text-balance",
        h1: "text-h1 font-bold text-balance",
        h2: "text-h2 font-bold text-balance",
        h3: "text-h3 font-bold text-balance",
        h4: "text-h4 font-bold text-balance",
        body: "text-body font-normal text-pretty",
        lead: "text-lead font-normal text-pretty",
        small: "text-small font-normal",
        tiny: "text-tiny font-normal",
      },
      color: {
        primary: "text-text-primary",
        secondary: "text-text-secondary",
        tertiary: "text-text-tertiary",
        accent: "text-text-accent",
        onPrimary: "text-text-on-dark",
        onAccent: "text-text-on-accent",
        error: "text-status-error",
        success: "text-status-success",
        inherit: "text-inherit",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      weight: {
        regular: "font-normal",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },
    },
    defaultVariants: {
      variant: "body",
      color: "primary",
      align: "left",
    },
  }
)

/** Per-variant default max-width (optimal line lengths for readability) */
const variantMaxWidthMap: Partial<Record<NonNullable<VariantProps<typeof typographyVariants>["variant"]>, string>> = {
  display: "20ch",
  body: "65ch",
  lead: "75ch",
}

interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
  asChild?: boolean
  /** Max line width. Defaults per variant (display=20ch, body=65ch, lead=75ch). Set to 'none' to disable. */
  maxWidth?: string | "none"
}

const variantElementMap: Record<NonNullable<VariantProps<typeof typographyVariants>["variant"]>, React.ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  lead: "p",
  small: "span",
  tiny: "span",
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "body", color, align, weight, as, asChild, maxWidth, style, ...props }, ref) => {
    // If 'as' is provided, use it. Otherwise, infer from 'variant'. Fallback to 'p'.
    const Comp = as || (variant ? variantElementMap[variant] : "p")
    
    // Asymmetric spacing (4:1 ratio) applied automatically if the element is a heading (display, h1-h4)
    // and no explicit margin is passed in className.
    const isHeading = variant && ["display", "h1", "h2", "h3", "h4"].includes(variant)
    const defaultHeadingMargins = isHeading ? "mt-[2em] mb-[0.5em] first:mt-0" : ""

    // Resolve max-width: explicit prop > per-variant default > none
    const resolvedMaxWidth = maxWidth === "none"
      ? undefined
      : maxWidth ?? (variant ? variantMaxWidthMap[variant] : undefined)

    return (
      <Comp
        ref={ref as any}
        className={cn(defaultHeadingMargins, typographyVariants({ variant, color, align, weight, className }))}
        style={{
          ...style,
          maxWidth: resolvedMaxWidth,
        }}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }

