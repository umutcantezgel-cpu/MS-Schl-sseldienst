import * as React from"react"
import { cva, type VariantProps } from"class-variance-authority"
import { cn } from"@/lib/utils"

const buttonVariants = cva("inline-flex items-center justify-center gap-[var(--space-2)] whitespace-nowrap rounded-[var(--radius-button)] text-[var(--typo-body-size)] font-bold transition-all duration-[var(--duration-250)] ease-out focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[var(--color-red-500)] focus-visible:ring-offset-2 active:scale-[0.98] min-h-[48px] min-w-[48px]",
  {
    variants: {
      variant: {
        default:"bg-[var(--color-red-500)] text-[var(--text-on-dark)] shadow-[var(--shadow-cta)] hover:bg-[var(--color-red-600)] hover:-translate-y-1 hover:shadow-[var(--shadow-cta-hover)]",
        secondary:"border-2 border-[var(--color-red-500)] bg-[var(--surface-primary)] text-[var(--color-red-500)] shadow-[var(--elevation-1)] hover:bg-[var(--color-red-500)] hover:text-[var(--text-on-dark)] hover:-translate-y-1 hover:shadow-[var(--shadow-cta-hover)]",
        outline:"border-2 border-[var(--border-subtle)] bg-transparent text-[var(--text-primary)] hover:border-[var(--color-red-500)] hover:text-[var(--color-red-500)] hover:bg-[var(--surface-secondary)]",
        ghost:"bg-transparent border-2 border-[rgba(255,255,255,0.2)] text-[var(--text-on-dark)] hover:bg-[rgba(255,255,255,0.1)] hover:border-white",
        link:"text-[var(--color-red-500)] underline-offset-4 hover:underline !min-h-0",
      },
      size: {
        default:"h-12 px-[var(--space-6)] py-[var(--space-3)]",
        sm:"h-10 px-[var(--space-4)] text-[var(--typo-micro-size)] rounded-[var(--radius-4)]",
        lg:"h-14 px-[var(--space-8)] text-[var(--typo-price-size)]",
        icon:"h-12 w-12",
      },
    },
    defaultVariants: {
      variant:"default",
      size:"default",
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
Button.displayName ="Button"

export { Button, buttonVariants }
