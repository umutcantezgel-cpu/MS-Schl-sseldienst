"use client"

import React from "react"
import { m } from "framer-motion"

export function LegalSection({ children, id, className = "" }: { children: React.ReactNode, id?: string, className?: string }) {
    return (
        <m.section
            id={id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`scroll-mt-32 ${className}`}
        >
            {children}
        </m.section>
    )
}
