import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  size?: "narrow" | "medium" | "wide" | "ultrawide" | "full";
  as?: React.ElementType;
  children: React.ReactNode;
}

const sizeClasses = {
  narrow: "max-w-[680px]", // Fließtext / Blog
  medium: "max-w-[960px]", // Cards / Kontakt
  wide: "max-w-[1240px]",  // Hero / Galerie
  ultrawide: "max-w-[1440px]", // Sehr breite Bereiche
  full: "max-w-full",      // Keine harte Begrenzung, nur Viewport
};

/**
 * <Container>
 * Horizontale Breiten-Begrenzung für ein konsistentes Grid.
 * Zentriert Inhalte und reguliert die maximale Breite (Max-Width).
 * Wendet automatisch das Fluid-Spacing für lineares Padding (links/rechts) an.
 */
export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ size = "wide", as: Component = "div", className, children, style, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto",
          sizeClasses[size],
          className
        )}
        style={{
          ...style,
          // Fluid Padding links/rechts anwenden
          paddingLeft: "var(--spacing-container)",
          paddingRight: "var(--spacing-container)",
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
