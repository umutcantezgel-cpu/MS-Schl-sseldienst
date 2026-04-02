import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-transparent font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-surface-muted text-text-primary hover:opacity-80",
        primary: "bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20",
        success: "bg-status-success/10 text-status-success hover:bg-status-success/20",
        warning: "bg-status-warning/10 text-status-warning hover:bg-status-warning/20",
        error: "bg-status-error/10 text-status-error hover:bg-status-error/20",
        // Legacy/Restored for Zero-Breakage
        secondary: "bg-surface-secondary text-text-primary hover:bg-surface-elevated",
        outline: "text-text-primary border-border-default",
        info: "bg-status-info/10 text-status-info hover:bg-status-info/20",
        brand: "bg-brand-accent text-white shadow-sm hover:opacity-90",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
