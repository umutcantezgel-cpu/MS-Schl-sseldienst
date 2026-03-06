import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[120px] w-full rounded-[var(--radius-md)] border-0 bg-[var(--color-surface-primary)] px-4 py-3 text-base text-[var(--color-text-primary)] elevation-1 ring-1 ring-inset ring-[var(--color-border)] transition-colors placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-brand)] disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }
