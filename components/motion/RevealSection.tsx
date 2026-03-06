"use client";

import { motion } from "framer-motion";
import { revealVariants } from "@/lib/motion";
import { ReactNode } from "react";

export default function RevealSection({
    children,
    className = "",
    delay = 0
}: {
    children: ReactNode,
    className?: string,
    delay?: number
}) {
    return (
        <motion.div
            variants={{
                ...revealVariants,
                visible: {
                    ...revealVariants.visible,
                    transition: {
                        ...revealVariants.visible.transition,
                        delay
                    }
                }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
