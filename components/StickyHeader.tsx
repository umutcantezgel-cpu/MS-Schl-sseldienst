"use client";

import { Phone, Menu, X, ChevronDown, Car, ShieldCheck, Lock, KeyRound, ChevronRight, Hammer, MapPin } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const leistungenLinks = [
  { name: "Türöffnung", href: "/leistungen/turoeffnung", icon: Lock, desc: "Zerstörungsfreie Öffnung in 20-30 Min." },
  { name: "Autoöffnung", href: "/leistungen/autooeffnung", icon: Car, desc: "Schonende Öffnung ohne Lackschäden" },
  { name: "Schließanlagen", href: "/leistungen/schliessanlagen", icon: ShieldCheck, desc: "Planung & Einbau für Gebäude" },
  { name: "Sicherheitstechnik", href: "/leistungen/sicherheitstechnik", icon: Lock, desc: "Effektiver Einbruchschutz" },
  { name: "Schlüssel nachmachen", href: "/leistungen/schluessel-nachmachen", icon: KeyRound, desc: "Sofort-Service für Ersatzschlüssel" },
];

const navLinks = [
  { name: "Preise", href: "/preise" },
  { name: "Servicegebiet", href: "/servicegebiet" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function StickyHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileMenuOpen(false);
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
      return () => {};
    }
  }, [isMobileMenuOpen]);

  const handleOverlayKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const overlay = document.getElementById("mobile-menu-overlay");
      if (overlay) {
        const elements = overlay.querySelectorAll(focusableElements);
        const firstElement = elements[0] as HTMLElement;
        const lastElement = elements[elements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    }
  }, []);

  // Header 3-State Logic
  const isHomePage = pathname === "/";
  // OPAQUE SOLID ENFORCEMENT: Trigger solid white background early to prevent any text collisions
  const isScrolled = scrollPosition > 20 || !isHomePage;
  const isMobileCompressed = scrollPosition > 500;

  // Strict Solid-White Architecture — NO GLASSMORPHISM
  const headerClasses = useMemo(() => cn(
    "fixed top-0 left-0 right-0 z-50 w-full flex items-center transition-all duration-300 ease-out will-change-[background-color,height,box-shadow]",
    !isScrolled
      ? "bg-transparent h-[88px] border-b border-transparent text-gray-900"
      : "bg-white h-[72px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-gray-100 text-gray-900",
    isMobileCompressed && "h-[64px] pt-[env(safe-area-inset-top)]"
  ), [isScrolled, isMobileCompressed]);

  return (
    <>
      <header className={headerClasses}>
        <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-6 lg:px-8">

          {/* LOGO INJECTION ZONE */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-red-500)] focus-visible:ring-offset-2 rounded-xl"
            aria-label="Startseite – Logo Platzhalter"
          >
            <div className="w-[160px] sm:w-[200px] h-[48px] bg-slate-100/80 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-500 text-[11px] sm:text-[13px] font-mono font-bold tracking-widest uppercase shadow-inner">
              Logo Zone
            </div>
          </Link>

          {/* Desktop Hover-Pill Navigation */}
          <nav 
            aria-label="Hauptnavigation" 
            className="hidden lg:flex items-center relative rounded-full px-2 py-1.5"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* Leistungen Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => {
                setIsLeistungenOpen(true);
                setHoveredNav("Leistungen");
              }}
              onMouseLeave={() => setIsLeistungenOpen(false)}
            >
              <button
                className="relative z-10 px-4 py-2 rounded-full flex items-center gap-1.5 text-[15px] font-bold tracking-tight text-gray-800 transition-colors focus-visible:outline-none"
                aria-expanded={isLeistungenOpen}
                aria-controls="desktop-leistungen-menu"
              >
                {(hoveredNav === "Leistungen" || isLeistungenOpen) && (
                  <m.div
                    layoutId="desktop-hover-pill"
                    className="absolute inset-0 rounded-full bg-gray-100 z-0"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  Leistungen 
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isLeistungenOpen && "-rotate-180")} aria-hidden="true" />
                </span>
              </button>

              {/* Dropdown Menu (Solid Background) */}
              <AnimatePresence>
                {isLeistungenOpen && (
                  <m.div 
                    id="desktop-leistungen-menu" 
                    role="menu" 
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-[calc(100%+8px)] w-[380px] rounded-2xl bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-3 z-50"
                  >
                    <ul className="flex flex-col gap-1">
                      {leistungenLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <li key={link.name} role="none">
                            <Link
                              role="menuitem"
                              href={link.href}
                              className="flex items-start gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 group hover:shadow-sm"
                              onClick={() => setIsLeistungenOpen(false)}
                            >
                              <div className="flex bg-red-50 text-[var(--color-red-500)] rounded-xl p-2.5 group-hover:bg-[var(--color-red-500)] group-hover:text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                                <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                              </div>
                              <div className="flex flex-col gap-0.5 mt-0.5">
                                <span className="text-[15px] font-bold text-gray-900 group-hover:text-[var(--color-red-500)] transition-colors">{link.name}</span>
                                <span className="text-[13px] font-normal text-gray-500 line-clamp-1">{link.desc}</span>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-gray-100 px-2 pb-1">
                      <a href="tel:+4964418056544" className="flex items-center justify-center w-full py-3.5 rounded-xl bg-red-50 text-[14px] font-bold text-[var(--color-red-600)] hover:bg-[var(--color-red-500)] hover:text-white transition-all duration-300 gap-2 shadow-sm hover:shadow-md">
                        <Phone className="w-4 h-4" />
                        Sofort-Hilfe Notdienst anrufen
                      </a>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Premium USP: Schlüssel Schmiede */}
            <div className="mx-2 h-6 w-px bg-gray-200" />
            
            <Link
              href="/schluessel-schmiede"
              onMouseEnter={() => setHoveredNav("schmiede")}
              className="relative z-10 px-4 py-2 rounded-full flex items-center gap-2 text-[15px] font-bold tracking-tight transition-colors focus-visible:outline-none"
            >
              {(hoveredNav === "schmiede" || pathname === "/schluessel-schmiede") && (
                <m.div
                  layoutId="desktop-hover-pill"
                  className="absolute inset-0 rounded-full bg-amber-50 border border-amber-100/50 z-0"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              <Hammer className={cn("h-4 w-4 relative z-10 transition-colors", pathname === "/schluessel-schmiede" ? "text-amber-600" : "text-amber-500")} aria-hidden="true" />
              <span className={cn("relative z-10 transition-colors", pathname === "/schluessel-schmiede" ? "text-amber-700" : "text-amber-600")}>
                Schlüssel Schmiede
              </span>
            </Link>

            <div className="mx-2 h-6 w-px bg-gray-200" />

            {/* Standard Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredNav === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.name)}
                  className="relative z-10 px-4 py-2 rounded-full flex items-center justify-center text-[15px] font-bold tracking-tight transition-colors focus-visible:outline-none"
                  {...(isActive ? { "aria-current": "page" as const } : {})}
                >
                  {(isHovered || isActive) && (
                    <m.div
                      layoutId="desktop-hover-pill"
                      className="absolute inset-0 rounded-full bg-gray-100 z-0"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className={cn("relative z-10 transition-colors", isActive ? "text-[var(--color-red-500)]" : "text-gray-800")}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a
              href="tel:+4964418056544"
              className="hidden lg:flex items-center justify-center gap-2 min-h-[48px] px-6 bg-[var(--color-red-500)] text-white text-[15px] font-bold rounded-full shadow-[0_4px_14px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] hover:-translate-y-[1px] transition-all duration-300 animate-heartbeat-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-red-500)]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              06441 8056544
            </a>
            
            <a
              href="tel:+4964418056544"
              className="flex lg:hidden items-center justify-center min-h-[44px] px-4 rounded-full bg-[var(--color-red-500)] text-white shadow-md active:scale-95 transition-transform"
              aria-label="Jetzt anrufen"
            >
              <Phone className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline font-bold text-[14px]">Anrufen</span>
            </a>

            <button
              className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] bg-gray-50 hover:bg-gray-100 rounded-full transition-colors focus-visible:outline-none active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 text-gray-900" aria-hidden="true" /> : <Menu className="h-5 w-5 text-gray-900" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Perfection */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div 
            id="mobile-menu-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Hauptmenü"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col pt-safe overflow-hidden" 
            onKeyDown={handleOverlayKeyDown}
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center px-6 h-[88px] shrink-0 border-b border-gray-100 bg-white shadow-sm">
              <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="w-[140px] h-[40px] bg-slate-100/80 rounded border border-dashed border-slate-300 flex items-center justify-center text-slate-500 text-[10px] font-mono tracking-widest uppercase">
                  Logo Zone
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-gray-50 active:bg-gray-100 text-gray-900 transition-transform active:scale-95"
                aria-label="Menü schließen"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8 pb-[140px] bg-slate-50/30">

              {/* USP Card */}
              <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link
                  href="/schluessel-schmiede"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 active:scale-[0.98] transition-all group shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 transition-colors">
                    <Hammer className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[18px] font-extrabold text-amber-950 block">Schlüssel Schmiede</span>
                    <span className="text-[13px] text-amber-800/80 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3" /> Langgasse 70, Wetzlar
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-amber-500" />
                </Link>
              </m.div>
              
              {/* Leistungen */}
              <div className="flex flex-col gap-3">
                <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="font-black text-[var(--color-red-500)] uppercase tracking-widest text-[12px] pl-2">
                  Leistungen
                </m.div>
                <nav className="flex flex-col gap-2">
                  {leistungenLinks.map((link, idx) => (
                    <m.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + idx * 0.05 }}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-4 py-3.5 px-4 rounded-xl bg-white border border-gray-100 shadow-sm active:bg-gray-50 active:scale-[0.98] transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex bg-gray-50 text-gray-500 rounded-lg p-2.5">
                          <link.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[16px] font-bold text-gray-900">{link.name}</span>
                          <span className="text-[12px] text-gray-500 leading-tight">{link.desc}</span>
                        </div>
                      </Link>
                    </m.div>
                  ))}
                </nav>
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3">
                <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-black text-gray-400 uppercase tracking-widest text-[12px] pl-2">
                  Menü
                </m.div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, idx) => (
                    <m.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + idx * 0.05 }}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-4 px-4 rounded-xl text-[16px] font-bold text-gray-800 active:bg-gray-100 active:scale-[0.98] transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                        <ChevronRight className="h-4 w-4 text-gray-300" aria-hidden="true" />
                      </Link>
                    </m.div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Sticky Mobile Footer CTA */}
            <m.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 30 }}
              className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-[110]"
            >
              <div className="flex justify-center gap-5 text-[12px] font-bold text-gray-600 mb-3">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[var(--color-success)]" /> Festpreise</span>
                <span className="flex items-center gap-1.5"><Car className="w-4 h-4 text-[var(--color-success)]" /> 20-30 Min. da</span>
              </div>
              <a
                href="tel:+4964418056544"
                className="flex items-center justify-center gap-3 w-full h-[60px] bg-[var(--color-red-500)] active:bg-[var(--color-red-600)] text-white text-[18px] font-black rounded-2xl shadow-[0_4px_14px_rgba(220,38,38,0.3)] animate-heartbeat-cta active:scale-95 transition-all"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                06441 8056544
              </a>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
