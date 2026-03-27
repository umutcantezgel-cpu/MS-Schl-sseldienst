"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/**
 * Resets scroll position to top on every client-side route change.
 * Since html has overflow:hidden, body is the scroll container.
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset both window and body scroll for maximum compatibility
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    document.body.scrollTop = 0
  }, [pathname])

  return null
}
