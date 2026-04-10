"use client";

import { useEffect, useState } from "react";
import { Phone, X, Calendar } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { springStandard } from "@/lib/motion.config";
import { triggerHaptic } from "@/lib/haptics";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
        (entries) => {
          const entry = entries[0];
          if (entry) setIsVisible(!entry.isIntersecting);
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
          className="fixed bottom-0 left-0 right-0 z-[var(--z-mobile-bar)] flex h-auto min-h-[56px] w-full items-center justify-center gap-[var(--space-2)] bg-[var(--color-red-500)] text-white py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden shadow-[var(--elevation-4)]"
        >
          <div className="flex w-full items-center justify-between pr-10">
            <a
              href="tel:+4964418056279"
              onClick={() => triggerHaptic('light')}
              className={`flex items-center justify-center gap-2 flex-[1.2] h-full min-h-[56px] active:bg-[var(--color-red-600)] transition-colors border-r border-white/20 ${
                pathname.includes("/notdienst") || pathname.includes("/turoeffnung")
                  ? "bg-[var(--color-red-600)]"
                  : ""
              }`}
              aria-label="Jetzt anrufen: 06441 8056279"
            >
              <Phone className="h-4 w-4 animate-heartbeat-cta" aria-hidden="true" />
              <span className="text-sm font-bold">Anrufen</span>
            </a>
            <Link
              href="/termin-buchen"
              onClick={() => triggerHaptic('light')}
              className={`flex items-center justify-center gap-2 flex-1 h-full min-h-[56px] active:bg-[var(--color-red-600)] transition-colors pl-2 ${
                pathname === "/termin-buchen"
                  ? "bg-[var(--color-red-600)]"
                  : ""
              }`}
              aria-label="Beratung buchen"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-bold">Termin</span>
            </Link>
          </div>
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

