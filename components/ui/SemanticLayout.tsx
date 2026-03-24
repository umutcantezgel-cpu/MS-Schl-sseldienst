"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";
import { HeadingLevelProvider, useHeadingLevel } from "./HeadingContext";

/** =========================================================
 *  ARTICLE
 *  Für in sich geschlossene, syndizierbare Inhalte (Blog, Review, Produkt)
 *  ========================================================= */
interface ArticleProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  titleClassName?: string;
}

export function Article({ title, titleClassName, children, className, "aria-labelledby": ariaLabelledBy, ...props }: ArticleProps) {
  const headingId = useId();
  const level = useHeadingLevel();
  const HeadingTag = `h${level}` as React.ElementType;
  const finalAriaLabelledBy = title ? headingId : ariaLabelledBy;

  return (
    <article aria-labelledby={finalAriaLabelledBy} className={cn("", className)} {...props}>
      <HeadingLevelProvider>
        {title && (
          <HeadingTag id={headingId} className={titleClassName}>
            {title}
          </HeadingTag>
        )}
        {children}
      </HeadingLevelProvider>
    </article>
  );
}

/** =========================================================
 *  ASIDE
 *  Für Inhalte, die mit dem Hauptinhalt verbunden sind,
 *  aber separat stehen können (Sidebars, ergänzende Boxen)
 *  ========================================================= */
interface AsideProps extends React.HTMLAttributes<HTMLElement> {
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export function Aside({ children, className, ...props }: AsideProps) {
  if (process.env.NODE_ENV === "development" && !props["aria-label"] && !props["aria-labelledby"]) {
    console.warn("A11y Warning: <Aside> should ideally have an aria-label or aria-labelledby.");
  }
  
  return (
    <aside className={cn("", className)} {...props}>
      {children}
    </aside>
  );
}

/** =========================================================
 *  FIGURE & FIGCAPTION
 *  Für eigenständige Inhalte, meist Bilder, Diagramme, Code
 *  ========================================================= */
interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  caption?: React.ReactNode;
  captionClassName?: string;
  captionPosition?: "top" | "bottom";
}

export function Figure({ caption, captionClassName, captionPosition = "bottom", children, className, ...props }: FigureProps) {
  const captionId = useId();
  
  return (
    <figure 
      aria-labelledby={caption ? captionId : undefined}
      className={cn("m-0 p-0", className)} 
      {...props}
    >
      {caption && captionPosition === "top" && (
        <figcaption id={captionId} className={cn("text-sm text-[color:var(--text-secondary)] mb-2", captionClassName)}>
          {caption}
        </figcaption>
      )}
      
      {children}
      
      {caption && captionPosition === "bottom" && (
        <figcaption id={captionId} className={cn("text-sm text-[color:var(--text-secondary)] mt-2", captionClassName)}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
