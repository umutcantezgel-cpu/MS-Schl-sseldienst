import React from "react";
import { cn } from "@/lib/utils";
import type { SpacingStringToken } from "@/lib/design-tokens/spacing";

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  gap?: SpacingStringToken;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  as?: React.ElementType;
  children: React.ReactNode;
}

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

/**
 * <Stack>
 * Ein vertikales Layout-Primitive (flex-direction: column).
 * Ersetzt manuelle Margin-Bottom-Ketten durch typsicheres Token-basierendes Gap.
 */
export const Stack = React.forwardRef<HTMLElement, StackProps>(
  ({ gap = 4, align = "stretch", justify = "start", as: Component = "div", className, children, style, ...props }, ref) => {
    // We map the token dynamically to the custom property via inline style 
    // because Tailwind v4 dynamic arbitrary variables in classNames like `gap-[var(--spacing-${gap})]` 
    // are robustly passed this way or by strictly whitelisting them.
    // For universal safety, a dynamic style mapping is highly reliable here.
    return (
      <Component
        ref={ref}
        className={cn(
          "flex flex-col",
          alignClasses[align],
          justifyClasses[justify],
          className
        )}
        style={{
          ...style,
          gap: gap ? `var(--spacing-${gap})` : undefined,
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = "Stack";
