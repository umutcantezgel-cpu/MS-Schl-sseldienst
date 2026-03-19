import * as React from"react"
import { cn } from"@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn("flex min-h-[120px] w-full rounded-[var(--radius-md)] border-0 bg-[var(--surface-primary)] px-4 py-3 text-base text-[var(--text-primary)] elevation-1 ring-1 ring-inset ring-[var(--border-subtle)] transition-colors placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-red-500)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName ="Textarea"

export { Textarea }
