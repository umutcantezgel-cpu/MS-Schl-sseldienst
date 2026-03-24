import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * Prose Wrapper for rich-text content (blog posts, legal text, long paragraphs).
 * Automatically applies 65ch max-width limit, appropriate Lobotomized-Owl spacing,
 * and text-rendering optimizations for contained elements.
 */
const Prose = React.forwardRef<HTMLDivElement, ProseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base constraints
          "max-w-[65ch] text-pretty mx-auto",
          
          // Typography scale mapping for generic HTML elements inside
          // This ensures standard markdown output uses the design system securely
          "prose prose-brand",
          "prose-headings:font-bold prose-headings:text-balance prose-headings:mt-[2em] prose-headings:mb-[0.5em]",
          "prose-h2:text-h2",
          "prose-h3:text-h3",
          "prose-h4:text-h4",
          "prose-p:text-body prose-p:leading-[1.6] prose-p:mb-[1.5em]",
          "prose-a:text-text-accent prose-a:underline prose-a:underline-offset-4 prose-a:decoration-1 hover:prose-a:decoration-2",
          "prose-strong:font-semibold",
          "prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-[1.5em]",
          "prose-ol:list-decimal prose-ol:tabular-nums prose-ol:pl-6 prose-ol:mb-[1.5em]",
          "prose-li:mb-[0.5em]",
          "prose-blockquote:border-l-4 prose-blockquote:border-text-accent prose-blockquote:pl-6 prose-blockquote:text-lead prose-blockquote:italic prose-blockquote:text-text-secondary",
          "prose-code:font-mono prose-code:bg-surface-secondary prose-code:text-[0.9em] prose-code:py-0.5 prose-code:px-1.5 prose-code:rounded-md",
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Prose.displayName = "Prose"

export { Prose }
