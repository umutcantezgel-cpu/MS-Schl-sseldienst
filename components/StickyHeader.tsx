"use client";

import { Phone, Key, Menu, X, ChevronDown, Car, ShieldCheck, Lock, KeyRound, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leistungenLinks = [
  { name:"Türöffnung", href:"/leistungen/turoeffnung", icon: Key, desc:"Zerstörungsfreie Öffnung in 20-30 Min." },
  { name:"Autoöffnung", href:"/leistungen/autooeffnung", icon: Car, desc:"Schonende Öffnung ohne Lackschäden" },
  { name:"Schließanlagen", href:"/leistungen/schliessanlagen", icon: ShieldCheck, desc:"Planung & Einbau für Gebäude" },
  { name:"Sicherheitstechnik", href:"/leistungen/sicherheitstechnik", icon: Lock, desc:"Effektiver Einbruchschutz" },
  { name:"Schlüssel nachmachen", href:"/leistungen/schluessel-nachmachen", icon: KeyRound, desc:"Sofort-Service für Ersatzschlüssel" },
];

const navLinks = [
  { name:"Preise", href:"/preise" },
  { name:"Servicegebiet", href:"/servicegebiet" },
  { name:"Über uns", href:"/ueber-uns" },
  { name:"FAQ", href:"/faq" },
  { name:"Kontakt", href:"/kontakt" },
];

export default function StickyHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
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

  // Sperre Scrollen & füge Key-Listeners hinzu, wenn Mobile Menu offen ist
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      }
      document.addEventListener('keydown', handleEscape);
      return () => { 
        document.body.style.overflow = ""; 
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleOverlayKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const overlay = document.getElementById('mobile-menu-overlay');
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

  // 3-State Logic
  const isHomePage = pathname === "/";
  const isScrolled = scrollPosition > 100 || !isHomePage;
  const isMobileCompressed = scrollPosition > 500;

  // Header Zustand 1 (Transparent) vs Zustand 2 (Weiß/Schatten)
  const headerClasses = useMemo(() => cn(
    "fixed top-0 left-0 right-0 z-[var(--z-sticky)] w-full flex items-center transition-all duration-500 ease-out",
    !isScrolled
      ? "bg-transparent h-[72px] lg:h-[88px] text-[var(--text-on-dark)] border-b border-transparent"
      : "bg-white/85 backdrop-blur-xl backdrop-saturate-150 h-[64px] shadow-[var(--elevation-2)] text-[var(--text-primary)] border-b border-white/20",
    isMobileCompressed && "h-[56px] lg:h-[64px] shadow-[var(--shadow-md)] pt-[env(safe-area-inset-top)]"
  ), [isScrolled, isMobileCompressed]);

  const logoColor = useMemo(() => !isScrolled ? "text-white" : "text-[var(--color-red-500)]", [isScrolled]);
  
  const navLinkClasses = useMemo(() => cn(
    "transition-all duration-200 px-3 py-1.5 rounded-full flex items-center gap-1 nav-link-indicator",
    !isScrolled 
      ? "text-white/90 hover:bg-white/10 hover:text-white" 
      : "text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--color-red-500)]"
  ), [isScrolled]);

  return (
    <>
      <header role="banner" aria-label="Kopfbereich" className={headerClasses}>
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4 md:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold tracking-tight z-[var(--z-overlay)]"
            aria-label="Schlüsseldienst Wetzlar – Startseite"
          >
            <div className={cn("flex items-center justify-center transition-all", isMobileCompressed ?"h-6 w-6" :"h-8 w-8", logoColor)}>
              <Key className="w-full h-full" aria-hidden="true" />
            </div>
            <div className={cn(
              "flex flex-col justify-center overflow-hidden transition-all duration-500 ease-in-out", 
              isMobileCompressed ? "max-w-[90px] opacity-100" : "max-w-[250px] opacity-100"
            )}>
              <span className={cn(
                "tracking-tight transition-all duration-500 whitespace-nowrap", 
                isMobileCompressed ? "text-[16px] font-bold" : "text-[18px]",
                !isScrolled ? "text-white" : "text-[var(--text-primary)]"
              )}>
                <span className={cn("transition-all duration-500", isMobileCompressed ? "hidden" : "hidden sm:inline")}>Schlüsseldienst Wetzlar</span>
                <span className={cn("transition-all duration-500", isMobileCompressed ? "inline" : "sm:hidden")}>SD Wetzlar</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-2 font-[500] text-[15px] tracking-tight">
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsLeistungenOpen(true)}
              onMouseLeave={() => setIsLeistungenOpen(false)}
            >
              <button
                className={cn(navLinkClasses)}
                aria-expanded={isLeistungenOpen}
                aria-controls="desktop-leistungen-menu"
              >
                Leistungen <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isLeistungenOpen &&"-rotate-180")} aria-hidden="true" />
              </button>

              {/* Dropdown Menu */}
              {isLeistungenOpen && (
                <>
                  {/* Invisible hover bridge — fills gap between button and dropdown */}
                  <div className="absolute left-0 right-0 top-full h-3" />
                  <div id="desktop-leistungen-menu" role="menu" className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+4px)] w-[320px] rounded-2xl bg-white/95 backdrop-blur-2xl border-t-2 border-t-[var(--color-red-500)] border-l border-r border-b border-[var(--border-subtle)] shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)] p-2" style={{ animation: 'dropdownFadeIn 250ms cubic-bezier(0.16, 1, 0.3, 1) both' }}>
                    <ul className="flex flex-col gap-1">
                      {leistungenLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <li key={link.name} role="none">
                            <Link
                              role="menuitem"
                              href={link.href}
                              className="flex items-start gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-[var(--surface-secondary)] group/link hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                              onClick={() => setIsLeistungenOpen(false)}
                            >
                              <div className="flex bg-[var(--color-red-500)]/10 text-[var(--color-red-500)] rounded-xl p-2.5 group-hover/link:bg-[var(--color-red-500)] group-hover/link:text-white transition-all duration-300 group-hover/link:scale-105 group-hover/link:shadow-[0_0_12px_rgba(185,28,28,0.25)]">
                                <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                              </div>
                              <div className="flex flex-col gap-0.5 mt-0.5">
                                <span className="text-[15px] font-bold text-[var(--text-primary)]">{link.name}</span>
                                <span className="text-[13px] font-normal text-[var(--text-secondary)] line-clamp-1">{link.desc}</span>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] px-2 pb-1">
                      <a href="tel:+4964418056544" className="flex items-center justify-center w-full py-3 rounded-xl bg-[var(--color-red-500)]/5 text-[14px] font-bold text-[var(--color-red-600)] hover:bg-[var(--color-red-500)] hover:text-white transition-colors duration-300 gap-2">
                        <Phone className="w-3 h-3" />
                        Sofort-Hilfe: 06441 8056544
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    navLinkClasses,
                    isActive ? "active" : "",
                    isActive && !isScrolled && "bg-white/20 text-white font-bold",
                    isActive && isScrolled && "bg-[var(--surface-secondary)] text-[var(--color-red-500)] font-bold"
                  )}
                  {...(isActive ? { "aria-current": "page" as const } : {})}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 lg:gap-4 z-[var(--z-overlay)]">
            <div className="relative hidden sm:flex">
              {/* Micro-Badge "24/7 Notdienst" */}
              <div 
                className={cn(
                  "absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 whitespace-nowrap bg-[var(--color-success)] text-white text-[10px] sm:text-[11px] font-bold rounded-full shadow-sm transition-all duration-300 z-10 hidden lg:block", 
                  isMobileCompressed ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
                )}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  24/7 Notdienst
                </div>
              </div>
              <a
                href="tel:+4964418056544"
                className={cn(
                  buttonVariants({ variant: "default" }), 
                  "animate-heartbeat-cta min-h-[48px] px-6 text-[15px] font-bold shadow-[var(--shadow-cta)] hover:shadow-[var(--shadow-cta-hover)] hover:-translate-y-[1px] transition-all duration-300"
                )}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                06441 8056544
              </a>
            </div>
            <a
              href="tel:+4964418056544"
              className={cn("items-center justify-center min-h-[48px] min-w-[48px] sm:min-w-auto sm:px-4 rounded-full bg-[var(--color-red-500)] text-white shadow-[var(--shadow-cta)]",
                isMobileCompressed ?"flex lg:hidden" :"hidden sm:flex lg:hidden" // Zeige Call-Btn auf Tablet, oder auf Mobile wenn gescrolled
              )}
              aria-label="Jetzt anrufen"
            >
              <Phone className="h-5 w-5 sm:mr-2" />
              <span className="hidden sm:inline font-bold">06441 8056544</span>
            </a>

            {/* Hamburger */}
            <button
              className={cn("lg:hidden flex items-center justify-center min-w-[48px] min-h-[48px] transition-colors rounded-xl", !isScrolled ?"text-white bg-white/10" :"text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ?"Menü schließen" :"Menü öffnen"}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Overlay */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-overlay" className="fixed inset-0 z-[100] bg-[var(--surface-primary)] flex flex-col pt-safe overflow-hidden" style={{ animation: 'slideInRight 400ms cubic-bezier(0.16, 1, 0.3, 1) both' }} onKeyDown={handleOverlayKeyDown}>
          {/* Header Overlay */}
          <div className="flex justify-between items-center px-4 md:px-8 h-[72px] shrink-0 border-b border-[var(--border-subtle)]">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="flex items-center justify-center h-8 w-8 text-[var(--color-red-500)]">
                <Key className="w-full h-full" aria-hidden="true" />
              </div>
              <span className="text-[18px] font-bold text-[var(--text-primary)] tracking-tight">SD Wetzlar</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center min-w-[48px] min-h-[48px] rounded-xl bg-[var(--surface-secondary)] text-[var(--text-primary)] transition-transform active:scale-95"
              aria-label="Menü schließen"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8 pb-[140px]">
            
            {/* Leistungen Section */}
            <div className="flex flex-col gap-4">
              <div className="font-[700] text-[var(--color-red-500)] uppercase tracking-[0.1em] text-[13px]" id="mobile-nav-leistungen">Leistungen</div>
              <nav aria-labelledby="mobile-nav-leistungen" className="flex flex-col gap-2">
                {leistungenLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-4 py-3 rounded-xl transition-colors active:bg-[var(--surface-secondary)] group"
                    style={{ animation: `slideUpFade 400ms cubic-bezier(0.16, 1, 0.3, 1) ${100 + idx * 50}ms both` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex bg-[var(--surface-secondary)] text-[var(--text-secondary)] rounded-xl p-3 group-active:bg-[var(--color-red-500)] group-active:text-white transition-colors">
                      <link.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[18px] font-bold text-[var(--text-primary)]">{link.name}</span>
                      <span className="text-[13px] text-[var(--text-secondary)] leading-tight">{link.desc}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[var(--text-tertiary)] ml-auto" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Haupt-Pages Section */}
            <div className="flex flex-col gap-4">
              <div className="font-[700] text-[var(--text-tertiary)] uppercase tracking-[0.1em] text-[13px]" id="mobile-nav-info">Informationen</div>
              <nav aria-labelledby="mobile-nav-info" className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-[18px] font-bold text-[var(--text-primary)] bg-[var(--surface-secondary)] active:scale-[0.98] transition-all"
                    style={{ animation: `slideUpFade 400ms cubic-bezier(0.16, 1, 0.3, 1) ${300 + idx * 50}ms both` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight className="h-5 w-5 text-[var(--text-tertiary)]" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Fixed Bottom CTA Footer */}
          <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[var(--border-subtle)] p-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-8px_32px_rgba(0,0,0,0.08)]" style={{ animation: 'slideUpFade 500ms 400ms both' }}>
            <div className="flex justify-center gap-4 text-[12px] font-bold text-[var(--color-charcoal-700)] mb-3">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[var(--color-success)]" /> Festpreise ab 99€</span>
              <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5 text-[var(--color-success)]" /> In 20-30 Min. da</span>
            </div>
            <a
              href="tel:+4964418056544"
              className="flex items-center justify-center gap-3 w-full h-[60px] bg-[var(--color-red-500)] active:bg-[var(--color-red-600)] text-white text-[20px] font-bold rounded-2xl shadow-[var(--shadow-cta)] animate-heartbeat-cta"
            >
              <Phone className="h-6 w-6" />
              <span>06441 8056544</span>
            </a>
            <div className="flex items-center justify-center gap-6 text-[13px] text-[var(--text-tertiary)] mt-4 font-medium">
              <Link href="/datenschutz" onClick={() => setIsMobileMenuOpen(false)}>Datenschutz</Link>
              <Link href="/impressum" onClick={() => setIsMobileMenuOpen(false)}>Impressum</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
