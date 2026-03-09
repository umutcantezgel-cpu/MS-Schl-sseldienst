import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-[var(--radius-badge)] px-[var(--space-3)] py-[var(--space-2)] text-[var(--typo-micro-size)] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--color-surface-default)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]",
                secondary:
                    "bg-[var(--color-surface-muted)] text-[var(--color-text-body)] hover:bg-[var(--color-gray-200)]",
                destructive:
                    "bg-[var(--color-red-50)] text-[var(--color-red-700)] hover:bg-[var(--color-red-100)]",
                outline:
                    "text-[var(--color-text-primary)] border border-[var(--color-border)]",
                hero:
                    "bg-[rgba(255,255,255,0.15)] text-[var(--color-text-inverted)] font-normal gap-[var(--space-2)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
