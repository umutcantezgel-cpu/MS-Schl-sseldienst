import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

// -------------------------------------------------------------------------
// CARD ROOT
// -------------------------------------------------------------------------
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'horizontal' | 'testimonial' | 'stat' | 'pricing' | 'team' | 'icon'
  href?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', href, children, ...props }, ref) => {
    
    const isInteractive = !!href
    
    // Injected group and Phase 4 transition specifics
    const rootClasses = cn(
      "rounded-2xl border border-border-default bg-surface-elevated text-text-primary shadow-elevated-1 transition-all duration-slow ease-smooth flex flex-col overflow-hidden",
      isInteractive && "group cursor-pointer hover:-translate-y-1 hover:shadow-elevated-2 hover:border-border-strong",
      variant === 'horizontal' && "md:flex-row",
      className
    )

    if (href) {
      return (
        <Link href={href} className={cn("block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-primary rounded-2xl", className)}>
          <div ref={ref} className={rootClasses} {...props}>
            {children}
          </div>
        </Link>
      )
    }

    return (
      <div ref={ref} className={rootClasses} {...props}>
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

// -------------------------------------------------------------------------
// CARD IMAGE
// -------------------------------------------------------------------------
const CardImage = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { src?: string; alt?: string }>(
  ({ className, children, src, alt, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative w-full aspect-video overflow-hidden bg-surface-muted", className)}
      {...props}
    >
      {/* If child is provided (like next/image), render it. Else render standard img */}
      {children ? children : (
        src && <Image src={src} alt={alt || ""} fill className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-103" />
      )}
    </div>
  )
)
CardImage.displayName = "Card.Image"

// -------------------------------------------------------------------------
// CARD HEADER
// -------------------------------------------------------------------------
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-2 p-6 pb-2", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "Card.Header"

// -------------------------------------------------------------------------
// CARD TITLE
// -------------------------------------------------------------------------
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("typo-h4-card", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "Card.Title"

// -------------------------------------------------------------------------
// CARD BODY
// -------------------------------------------------------------------------
const CardBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0 flex-1 flex flex-col text-text-secondary leading-relaxed", className)} {...props} />
  )
)
CardBody.displayName = "Card.Body"

// -------------------------------------------------------------------------
// CARD FOOTER
// -------------------------------------------------------------------------
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0 mt-auto", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "Card.Footer"


export { Card, CardHeader, CardTitle, CardBody, CardFooter, CardImage }
