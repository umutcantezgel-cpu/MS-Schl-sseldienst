"use client";

import React, { useId } from "react";
import { HeadingLevelProvider, useHeadingLevel } from "./HeadingContext";
import { cn } from "@/lib/utils";
import { Container } from "./layout/Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section muss zwingend entweder aria-label oder einen Title haben, 
   * durch title wird auto aria-labelledby generiert. */
  title?: string;
  titleClassName?: string;
  children: React.ReactNode;
  
  // Design Token Props
  background?: "default" | "muted" | "primary" | "dark";
  paddingY?: "none" | "sm" | "md" | "lg" | "xl" | "fluid";
  container?: "narrow" | "medium" | "wide" | "ultrawide" | "full" | "none";
}

const backgroundClasses = {
  default: "bg-surface-primary text-text-primary",
  muted: "bg-surface-secondary text-text-primary",
  primary: "bg-brand-primary text-text-on-primary",
  dark: "bg-surface-dark text-text-on-dark",
};

const paddingYClasses = {
  none: "py-0",
  sm: "py-[var(--spacing-9)]",   // 48px
  md: "py-[var(--spacing-10)]",  // 64px
  lg: "py-[var(--spacing-11)]",  // 80px
  xl: "py-[var(--spacing-12)]",  // 96px
  fluid: "py-[var(--spacing-section)]", // clamp() fluid padding
};

/**
 * Semantische <section> mit garantiertem HeadingLevel (automatische Kaskade) 
 * und strikter `aria-labelledby` Bindung nach W3C APG.
 * Nutzt das Design-Token-System für konsistentes Spacing und Rendering.
 */
export function Section({
  title,
  titleClassName,
  children,
  className,
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel,
  background = "default",
  paddingY = "fluid",
  container = "wide",
  ...props
}: SectionProps) {
  const headingId = useId();
  const level = useHeadingLevel();
  const HeadingTag = `h${level}` as React.ElementType;

  // Wenn ein Title existiert, zwinge aria-labelledby, ansonsten lasse explizite Props zu
  const finalAriaLabelledBy = title ? headingId : ariaLabelledBy;

  // Fallback Warnung im Dev-Mode
  if (process.env.NODE_ENV === "development" && !title && !finalAriaLabelledBy && !ariaLabel) {
    console.warn("A11y Warning: <Section> without `title`, `aria-labelledby` or `aria-label` found.");
  }

  const content = (
    <HeadingLevelProvider>
      {title && (
        <HeadingTag id={headingId} className={titleClassName}>
          {title}
        </HeadingTag>
      )}
      {children}
    </HeadingLevelProvider>
  );

  return (
    <section
      aria-labelledby={finalAriaLabelledBy}
      aria-label={ariaLabel}
      className={cn(
        "relative",
        background && backgroundClasses[background],
        paddingY && paddingYClasses[paddingY],
        className
      )}
      {...props}
    >
      {container === "none" ? (
        content
      ) : (
        <Container size={container as "narrow" | "medium" | "wide" | "ultrawide" | "full"}>
          {content}
        </Container>
      )}
    </section>
  );
}
