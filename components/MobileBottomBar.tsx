"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { springStandard } from "@/lib/motion.config";
import { triggerHaptic } from "@/lib/haptics";

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");
    
    // Intersection Observer to show bar when hero-section is out of view
    if (heroSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { root: null, rootMargin: "-100px 0px 0px 0px", threshold: 0 }
      );
      observer.observe(heroSection);
      return () => observer.disconnect();
    } else {
      // Fallback: scroll based
      const handleScroll = () => setIsVisible(window.scrollY > 400);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%", transition: { duration: 0.2 } }}
          transition={springStandard}
          href="tel:+4964418056544"
          onClick={() => triggerHaptic('light')}
          className="fixed bottom-0 left-0 right-0 z-[var(--z-mobile-bar)] flex h-[60px] w-full items-center justify-center gap-[var(--space-2)] bg-[var(--color-red-500)] text-white pb-[env(safe-area-inset-bottom)] lg:hidden shadow-[var(--elevation-4)] active:bg-[var(--color-red-600)] transition-colors"
          aria-label="Jetzt anrufen: 06441 8056544"
        >
          <Phone className="h-5 w-5 animate-heartbeat-cta" aria-hidden="true" />
          <span className="text-[18px] font-bold">06441 8056544</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
