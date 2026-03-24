import * as React from"react"
import { cn } from"@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  hint?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, hint, id, "aria-describedby": ariaDescribed, ...props }, ref) => {
    
    const internalId = React.useId()
    const textareaId = id || internalId
    const errorId = error ? `${textareaId}-error` : undefined
    const hintId = hint ? `${textareaId}-hint` : undefined
    const describedBy = [errorId, hintId, ariaDescribed].filter(Boolean).join(" ") || undefined

    return (
      <div className="flex flex-col w-full gap-2 relative">
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[120px] w-full resize-y rounded-[var(--radius-md,6px)] border border-border-default bg-surface-primary px-4 py-3 text-base text-text-primary ring-offset-surface-primary transition-all duration-150 ease-out placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:border-brand-primary hover:border-border-strong disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-50",
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
Textarea.displayName = "Textarea"

export { Textarea }
