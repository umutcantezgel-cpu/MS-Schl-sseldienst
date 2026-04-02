"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Zurück nach oben"
      className={cn(
        "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-red-500)] text-white shadow-[0_4px_14px_rgba(220,38,38,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] focus:outline-none focus:ring-2 focus:ring-[var(--color-red-500)] focus:ring-offset-2",
        showButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"
      )}
    >
      <ChevronUp className="h-6 w-6 transition-transform hover:-translate-y-1" />
    </button>
  );
}
