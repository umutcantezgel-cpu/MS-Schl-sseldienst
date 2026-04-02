import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-[var(--radius-md,6px)] border border-border-default bg-surface-primary px-4 text-base text-text-primary ring-offset-surface-primary transition-all duration-fast ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:border-brand-primary disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-50 hover:border-border-strong",
  {
    variants: {
      inputSize: {
        md: "h-10 py-2",
        lg: "h-12 py-3",
      },
    },
    defaultVariants: {
      inputSize: "md",
    },
  }
)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  error?: string;
  hint?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputSize, error, hint, id, "aria-describedby": ariaDescribed, ...props }, ref) => {
    
    const internalId = React.useId()
    const inputId = id || internalId
    const errorId = error ? `${inputId}-error` : undefined
    const hintId = hint ? `${inputId}-hint` : undefined
    
    const describedBy = [errorId, hintId, ariaDescribed].filter(Boolean).join(" ") || undefined

    return (
      <div className="flex flex-col w-full gap-2 relative">
        <input
          id={inputId}
          type={type}
          className={cn(
            inputVariants({ inputSize }),
            error && "border-status-error focus-visible:ring-status-error focus-visible:border-status-error hover:border-status-error",
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...props}
        />
        {(error || hint) && (
          <div className="text-sm px-1">
            {error ? (
              <p id={errorId} className="text-status-error font-medium" role="alert" aria-live="polite">
                {error}
              </p>
            ) : hint ? (
              <p id={hintId} className="text-text-tertiary">
                {hint}
              </p>
            ) : null}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
