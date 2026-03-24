import React from "react";
import { cn } from "@/lib/utils";
import type { SpacingStringToken } from "@/lib/design-tokens/spacing";

export interface ClusterProps extends React.HTMLAttributes<HTMLElement> {
  // Use Spacing Token strictly for gap
  gap?: SpacingStringToken;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
}

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
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
 * <Cluster>
 * Ein horizontales, umfließendes Layout-Primitive.
 * Ideal für Button-Gruppen, Tag-Listen, Icon-Reihen oder Flex-Header.
 */
export const Cluster = React.forwardRef<HTMLElement, ClusterProps>(
  (
    {
      gap = 4,
      align = "center",
      justify = "start",
      wrap = true,
      as: Component = "div",
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "flex flex-row",
          wrap ? "flex-wrap" : "flex-nowrap",
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

Cluster.displayName = "Cluster";
