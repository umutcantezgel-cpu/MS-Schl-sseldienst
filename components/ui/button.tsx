import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md,6px)] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-red-500)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-[var(--duration-fast,150ms)] ease-out",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-red-500)] text-white shadow-none hover:scale-[1.02] hover:-translate-y-px hover:shadow-[var(--elevation-2)] hover:bg-[var(--color-red-600)] active:scale-100 active:translate-y-px active:shadow-none",
        secondary:
          "border border-[var(--border-subtle)] bg-transparent text-[color:var(--text-primary)] shadow-none hover:scale-[1.02] hover:-translate-y-px hover:shadow-[var(--elevation-1)] hover:bg-[var(--color-charcoal-50)] hover:border-[var(--color-charcoal-200)] active:scale-100 active:translate-y-px active:shadow-none",
        ghost:
          "bg-transparent text-[color:var(--text-primary)] hover:bg-[var(--color-charcoal-50)] hover:text-[color:var(--color-red-600)] border border-transparent active:translate-y-px",
        destructive:
          "bg-[var(--color-status-error,var(--color-red-600))] text-white shadow-none hover:-translate-y-px hover:shadow-[var(--elevation-1)] hover:opacity-90 active:translate-y-px active:shadow-none",
      },
      size: {
        sm: "h-11 px-4 text-sm", // 44px height for AAA compliance
        md: "h-12 px-5 text-base", // 48px height
        lg: "h-14 px-6 text-base", // 56px height
        xl: "h-16 px-8 text-lg", // 64px height
        icon: "h-11 w-11", // strictly 44x44px
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      type = "button",
      loading = false,
      icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || loading

    return (
      <Comp
        type={asChild ? undefined : type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* If rendering asChild, we assume the child handles its own internal layout,
            otherwise we inject loading spinners and icons around children. */}
        {asChild ? (
          children
        ) : (
          <>
            {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />}
            {!loading && icon && iconPosition === "left" && (
              <span className="mr-2 inline-flex" aria-hidden="true">{icon}</span>
            )}
            {children}
            {!loading && icon && iconPosition === "right" && (
              <span className="ml-2 inline-flex" aria-hidden="true">{icon}</span>
            )}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
