/* eslint-disable react-hooks/static-components */
"use client"

import * as React from "react"
import { m, useInView, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface AnimateInProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
  threshold?: number
  staggerIndex?: number
}

export function AnimateIn({
  children,
  className,
  as = "div",
  delay = 0,
  duration = 0.6, // --duration-slower (Phase 5)
  direction = "up",
  distance = 24,
  once = true,
  threshold = 0.15,
  staggerIndex,
  ...props
}: AnimateInProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const prefersReducedMotion = useReducedMotion()

  const MotionComponent = React.useMemo(() => m(as as any), [as]);

  // Reduced Motion: Render sofort ohne Animation
  if (prefersReducedMotion) {
    const Component = as as any;
    return <Component className={className} ref={ref} {...props}>{children}</Component>
  }

  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { y: distance }
      case "down": return { y: -distance }
      case "left": return { x: distance }
      case "right": return { x: -distance }
      case "none": return {}
      default: return { y: distance }
    }
  }

  // Stagger-Delay: staggerIndex * stagger-normal (100ms)
  const totalDelay = delay + (staggerIndex !== undefined
    ? Math.min(staggerIndex, 12) * 0.1
    : 0)

  return (
    <MotionComponent
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...getInitialPosition() }}
      transition={{
        duration,
        delay: totalDelay,
        ease: [0.25, 0.46, 0.45, 0.94], // --ease-smooth (Phase 5)
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

