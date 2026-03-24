"use client";

import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { springStandard } from "@/lib/motion.config";
import { triggerHaptic } from "@/lib/haptics";
import { usePathname } from "next/navigation";

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();

  // Don't show on /kontakt (user is already there)
  const hideOnPage = pathname === "/kontakt";

  // Check sessionStorage for previous dismissal
  useEffect(() => {
    try {
      if (sessionStorage.getItem("sticky_cta_dismissed") === "1") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDismissed(true);
      }
    } catch {
      // Private mode
    }
  }, []);

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

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    try {
      sessionStorage.setItem("sticky_cta_dismissed", "1");
    } catch {
      // Private mode
    }
  };

  const shouldShow = isVisible && !dismissed && !hideOnPage;

  return (
    <AnimatePresence>
      {shouldShow && (
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%", transition: { duration: 0.2 } }}
          transition={springStandard}
          className="fixed bottom-0 left-0 right-0 z-[var(--z-mobile-bar)] flex h-[60px] w-full items-center justify-center gap-[var(--space-2)] bg-[var(--color-red-500)] text-white pb-[env(safe-area-inset-bottom)] lg:hidden shadow-[var(--elevation-4)]"
        >
          <a
            href="tel:+4964418056544"
            onClick={() => triggerHaptic('light')}
            className="flex items-center justify-center gap-[var(--space-2)] flex-1 h-full active:bg-[var(--color-red-600)] transition-colors"
            aria-label="Jetzt anrufen: 06441 8056544"
          >
            <Phone className="h-5 w-5 animate-heartbeat-cta" aria-hidden="true" />
            <span className="text-[18px] font-bold">06441 8056544</span>
          </a>
          <button
            onClick={handleDismiss}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
}

