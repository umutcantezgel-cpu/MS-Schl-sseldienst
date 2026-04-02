import { createElement, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "narrow" | "default" | "wide" | "full";

export interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  as?: ElementType;
  className?: string;
  padding?: boolean;
}

export function Container({
  children,
  size = "default",
  as: Component = "div",
  className,
  padding = true,
}: ContainerProps) {
  const sizeClass = {
    narrow: "max-w-3xl",    // 768px -> 720px safe area
    default: "max-w-6xl",   // 1152px
    wide: "max-w-7xl",      // 1280px
    full: "w-full",         // 100% 
  }[size];

  return createElement(
    Component,
    {
      className: cn(
        "mx-auto",
        sizeClass,
        padding && "px-[var(--space-container)]",
        className
      ),
    },
    children
  );
}
