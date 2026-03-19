"use client";

import { motion } from"framer-motion";
import { revealSectionVariants } from"@/lib/motion";
import { ReactNode } from"react";

export default function RevealSection({
  children,
  className ="",
  delay = 0
}: {
  children: ReactNode,
  className?: string,
  delay?: number
}) {
  return (
    <motion.div
      variants={{
        ...revealSectionVariants,
        visible: {
          ...revealSectionVariants.visible,
          transition: {
            ...revealSectionVariants.visible.transition,
            delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin:"-15%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
