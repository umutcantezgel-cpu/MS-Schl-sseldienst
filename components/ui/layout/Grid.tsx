import React from "react";
import { cn } from "@/lib/utils";
import type { SpacingStringToken } from "@/lib/design-tokens/spacing";

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  gap?: SpacingStringToken;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  // minChildWidth converts to grid-template-columns: repeat(auto-fit, minmax(minChildWidth, 1fr))
  minChildWidth?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12",
};

/**
 * <Grid>
 * Raster-basiertes Layout-Primitive für Card-Grids, Features etc.
 * Unterstützt exakte Spaltenangaben (responsive von Haus aus via Tailwind)
 * oder Fluid `minChildWidth` (auto-fit).
 */
export const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ gap = 6, columns, minChildWidth, as: Component = "div", className, children, style, ...props }, ref) => {
    
    // Auto-fit Grid logic when minChildWidth is provided
    const gridTemplateColumns = minChildWidth
      ? `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`
      : undefined;

    return (
      <Component
        ref={ref}
        className={cn(
          "grid",
          // Apply tailwind columns if specified AND no minChildWidth is provided
          !minChildWidth && columns ? columnClasses[columns] : "",
          className
        )}
        style={{
          ...style,
          gap: gap ? `var(--spacing-${gap})` : undefined,
          gridTemplateColumns: gridTemplateColumns,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = "Grid";
