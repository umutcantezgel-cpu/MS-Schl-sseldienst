import * as React from "react"
import { cn } from "@/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "circular" | "text" | "rectangular"
}

export function Skeleton({
  className,
  variant = "default",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-surface-muted",
        variant === "default" && "rounded-md",
        variant === "circular" && "rounded-full",
        variant === "text" && "h-4 w-full rounded-sm",
        variant === "rectangular" && "rounded-none",
        className
      )}
      {...props}
    />
  )
}
