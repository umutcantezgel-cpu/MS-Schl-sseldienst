"use client"

import * as React from "react"
import { m, useInView, useSpring, useMotionValue } from "framer-motion"
import { Typography } from "./Typography"
import { cn } from "@/lib/utils"

export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  suffix?: string
  prefix?: string
  label?: string
  duration?: number
}

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ className, value, suffix = "", prefix = "", label, duration = 2, ...props }, ref) => {
    // Falls React.forwardRef verwendet wird, verknüpfe den ref idealerweise mit dem Container
    const inViewRef = React.useRef<HTMLDivElement>(null)
    const isInView = useInView(inViewRef, { once: true, margin: "-100px 0px" })
    
    // Für prefers-reduced-motion check 
    const isClient = typeof window !== "undefined"
    const prefersReducedMotion = isClient ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
      duration: duration * 1000,
      bounce: 0,
      restDelta: 0.5,
    })

    const [displayValue, setDisplayValue] = React.useState("0")

    React.useEffect(() => {
      if (prefersReducedMotion) {
        setDisplayValue(Intl.NumberFormat("de-DE").format(value))
      } else if (isInView) {
        motionValue.set(value)
      }
    }, [isInView, value, motionValue, prefersReducedMotion])

    React.useEffect(() => {
      if (prefersReducedMotion) return

      return springValue.on("change", (latest) => {
        setDisplayValue(Intl.NumberFormat("de-DE").format(Math.round(latest)))
      })
    }, [springValue, prefersReducedMotion])

    return (
      <div 
        ref={(node) => {
          // Merge forwardRef + internal useRef
          (inViewRef as React.MutableRefObject<HTMLDivElement | null>).current = node
          if (typeof ref === "function") ref(node)
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }}
        className={cn("flex flex-col items-center justify-center text-center", className)} 
        {...props}
      >
        <Typography 
          variant="h1" // usually counters are large and prominent 
          color="accent" 
          weight="bold" 
          className="tabular-nums flex items-baseline m-0 !mb-1"
        >
          {prefix && <span className="mr-1">{prefix}</span>}
          <m.span>{displayValue}</m.span>
          {suffix && <span className="ml-0.5">{suffix}</span>}
        </Typography>

        {label && (
          <Typography variant="small" color="secondary" weight="semibold" className="uppercase tracking-widest text-balance mt-0">
            {label}
          </Typography>
        )}
      </div>
    )
  }
)

Counter.displayName = "Counter"

export { Counter }
