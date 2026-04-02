"use client"
import React, { useState } from "react"
import { m, AnimatePresence } from "framer-motion"
import { Info } from "lucide-react"

export function HoverGlossary({
  explanation,
  children,
}: {
  explanation: string
  children: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      aria-description={explanation}
    >
      <span className="border-b border-dashed border-primary/50 font-medium text-gray-900 group-hover:text-primary transition-colors decoration-clone">
        {children}
      </span>
      <AnimatePresence>
        {isHovered && (
          <m.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 w-72 mb-2 p-3.5 bg-gray-950/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-800 pointer-events-none"
          >
            <div className="flex gap-2.5 items-start">
              <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-100 m-0 leading-relaxed font-sans font-normal text-left">
                {explanation}
              </p>
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-gray-950/95" />
          </m.div>
        )}
      </AnimatePresence>
    </span>
  )
}
