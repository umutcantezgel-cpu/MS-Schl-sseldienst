import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-base font-bold transition-all duration-[var(--duration-normal)] var(--ease-spring) focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 active:scale-[0.98]",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--color-brand)] text-white shadow-[var(--shadow-cta)] hover:bg-[var(--color-brand-hover)] hover:-translate-y-0.5 hover:shadow-lg",
                secondary:
                    "border-2 border-[var(--color-brand)] bg-white text-[var(--color-brand)] elevation-1 hover:bg-[var(--color-brand)] hover:text-white hover:-translate-y-0.5 hover:elevation-2",
                outline:
                    "border border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-text-primary)]",
                ghost: "hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-text-primary)]",
                link: "text-[var(--color-brand)] underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 min-h-[48px] px-6 py-3",
                sm: "h-12 min-h-[48px] rounded-[var(--radius-sm)] px-4 text-sm",
                lg: "h-14 min-h-[48px] rounded-[var(--radius-lg)] px-8 text-lg",
                icon: "h-12 min-h-[48px] w-12 min-w-[48px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
