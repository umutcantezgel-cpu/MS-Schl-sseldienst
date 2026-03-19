import * as React from"react"
import { cn } from"@/lib/utils"

const Card = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn("rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-primary)] text-[var(--text-primary)] elevation-1 transition-all duration-[var(--duration-normal)]",
      className
    )}
    {...props}
  />
))
Card.displayName ="Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-[var(--space-6)]", className)}
    {...props}
  />
))
CardHeader.displayName ="CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight text-[var(--text-primary)]",
      className
    )}
    {...props}
  />
))
CardTitle.displayName ="CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[var(--text-tertiary)]", className)}
    {...props}
  />
))
CardDescription.displayName ="CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-[var(--space-6)] pt-0", className)} {...props} />
))
CardContent.displayName ="CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-[var(--space-6)] pt-0", className)}
    {...props}
  />
))
CardFooter.displayName ="CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
