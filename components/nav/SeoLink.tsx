import Link, { LinkProps } from "next/link";
import React from "react";

export interface SeoLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  uniqueContext?: string; // Appends an sr-only text for Seobility uniqueness
  title?: string; // HTML title attribute for hover and SEO
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  "aria-label"?: string;
  target?: string;
  rel?: string;
}

/**
 * A wrapper around Next.js Link that strategically appends visually hidden text
 * to ensure that identical visual anchor texts pointing to different URLs
 * are seen as unique by Seobility and Google.
 */
export const SeoLink = React.forwardRef<HTMLAnchorElement, SeoLinkProps>(
  ({ children, className, uniqueContext, title, onClick, href, ...props }, ref) => {
    
    // Auto-generate a title fallback from href if uniqueContext isn't provided but we want strict uniqueness
    // (This helps Seobility distinguish links if they only read title attributes)
    let autoContext = uniqueContext;
    if (!autoContext && typeof href === "string" && href.length > 1) {
      // E.g. "/leistungen/turoeffnung" -> "leistungen turoeffnung"
      autoContext = href.replace(/[/|-]/g, " ").trim();
    }

    return (
      <Link 
        href={href} 
        className={className} 
        title={title} 
        onClick={onClick} 
        ref={ref}
        {...props}
      >
        {children}
        {uniqueContext && (
          <span className="sr-only"> : {uniqueContext}</span>
        )}
      </Link>
    );
  }
);

SeoLink.displayName = "SeoLink";
