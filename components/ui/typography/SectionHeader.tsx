import * as React from "react"
import { cn } from "@/lib/utils"
import { Typography } from "./Typography"

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "id"> {
  /** Forwarded to the container div */
  kicker?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  /** Forwarded as `id` on the heading element for aria-labelledby binding */
  headingId?: string
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, kicker, title, description, align = "center", headingId, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col mb-12 sm:mb-16",
          align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
          className
        )}
        {...props}
      >
        {kicker && (
          <Typography
            variant="tiny"
            color="accent"
            weight="bold"
            className="uppercase tracking-[0.1em] mb-2"
          >
            {kicker}
          </Typography>
        )}
        
        <Typography
          variant="h2"
          align={align}
          id={headingId}
          className={cn(
            "mb-4", 
            !kicker && "mt-0"
          )}
        >
          {title}
        </Typography>

        <div className={cn(
          "h-[4px] w-[64px] rounded-full bg-[var(--color-red-500)] mb-6",
          align === "center" ? "mx-auto" : "ml-0"
        )} />

        {description && (
          <Typography
            variant="lead"
            color="secondary"
            align={align}
            // Max width 55ch for lead paragraphs as per spec
            className="max-w-[55ch] mb-0"
          >
            {description}
          </Typography>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader }
