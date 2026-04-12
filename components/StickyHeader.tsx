"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Car,
  ShieldCheck,
  Lock,
  KeyRound,
  ChevronRight,
  Hammer,
  MapPin,
  DoorOpen,
  Copy,
  Siren,
  Clock,
  BookOpen,
  Banknote,
  Mail,
  Home,
  Calendar,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getNavigationConfig } from "@/lib/data/navigation";
import { useFocusTrap } from "@/hooks/useFocusTrap";

// --- Data Layer ---
const navConfig = getNavigationConfig();
// Wir filtern 'Home', 'Preise', 'Ratgeber', 'Kontakt' direkt aus navConfig.main
const mainLinks = navConfig.main.filter(l => !['Startseite', 'Unsere Leistungen'].includes(l.label));
const leistungenLinks = navConfig.services.items;
const locationsLinks = navConfig.locations?.items || [];

const iconMap: Record<string, LucideIcon> = {
  "DoorOpen": DoorOpen,
  "Car": Car,
  "Shield": ShieldCheck,
  "Key": KeyRound,
  "Copy": Copy,
  "Siren": Siren,
  "Safe": Lock,
  "Clock": Clock,
  "default": ShieldCheck,
};

export default function StickyHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"leistungen" | "servicegebiet" | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const pathname = usePathname();
  const trapRef = useFocusTrap(isMobileMenuOpen);

  // Scroll Behavior
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

  // Lock body on mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Styling logic
  const isHomePage = pathname === "/";
  const isScrolled = scrollPosition > 20 || !isHomePage;

  const headerClasses = useMemo(() => 
    `fixed top-0 left-0 right-0 z-[100] w-full flex items-center transition-all duration-500 ease-out will-change-[background-color,border,box-shadow,height] ${
      isScrolled
        ? "bg-white/85 backdrop-blur-2xl saturate-150 h-[68px] lg:h-[76px] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] border-b border-gray-200/50"
        : "bg-white/60 backdrop-blur-2xl saturate-150 h-[80px] lg:h-[96px] border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
    }`
  , [isScrolled]);


  return (
    <>
      <header className={headerClasses}>
        <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-4 lg:px-8">
          
          {/* 1. LOGO */}
          {/* [SEO: Resolved "No Text" via sr-only und crawler needs DOM text, not just aria-label] */}
          <Link
            href="/"
            className="flex-shrink-0 relative flex items-center cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-red-500)] rounded-xl"
            aria-label="Startseite und Schlüssel Schmiede Wetzlar"
          >
            <span className="sr-only">Schlüssel Schmiede Wetzlar Startseite</span>
            {/* [PERF] Use native <img> with fetchPriority="high" for SVG to accelerate LCP */}
            <img
              src="/images/logo-brand.svg"
              alt="Schlüssel Schmiede Wetzlar Logo"
              width={100}
              height={100}
              fetchPriority="high"
              decoding="async"
              className={`object-contain transition-[width,height] duration-300 max-w-[92px] max-h-[92px] ${
                isScrolled
                  ? "w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] lg:w-[60px] lg:h-[60px] xl:w-[66px] xl:h-[66px]"
                  : "w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] lg:w-[86px] lg:h-[86px] xl:w-[92px] xl:h-[92px]"
              }`}
              style={{ background: 'transparent' }}
            />
          </Link>

          {/* [SEO ULTRATHINK]: SEO Crawler Fallback Navigation (Zero-JS)
              Da das Megamenü an JS & FramerMotion gekoppelt ist, injecten wir hier
              den vollen internen Link-Stammbaum für Googlebot. Dies garantiert 100% Indexierung. */}
          <nav className="sr-only" aria-label="SEO Crawler Navigation" aria-hidden="true">
            <Link href="/" tabIndex={-1}>Startseite</Link>
            <Link href="/schluessel-schmiede" tabIndex={-1}>Schlüssel Schmiede</Link>
            <Link href="/servicegebiet" tabIndex={-1}>Einsatzgebiete im Überblick</Link>
            {mainLinks.map((l) => <Link key={l.href} href={l.href} tabIndex={-1}>{l.label}</Link>)}
            {leistungenLinks.map((l) => <Link key={l.href} href={l.href} tabIndex={-1}>{l.label}</Link>)}
            {locationsLinks.map((l) => <Link key={l.href} href={l.href} tabIndex={-1}>{l.label}</Link>)}
          </nav>

          {/* 2. DESKTOP NAVIGATION (Unified) */}
          <nav 
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 absolute left-[50%] -translate-x-[50%]"
            onMouseLeave={() => {
              setActiveMenu(null);
              setHoveredLink(null);
            }}
          >
            {/* Leistungen Dropdown */}
            <div 
              className="relative py-4"
              onMouseEnter={() => { setActiveMenu("leistungen"); setHoveredLink("leistungen"); }}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link 
                href="/leistungen"
                className={`relative z-10 flex items-center gap-1 px-2.5 py-2 font-bold text-[13px] xl:text-sm rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeMenu === "leistungen" || pathname.startsWith("/leistungen")
                    ? "text-[var(--color-red-500)]"
                    : "text-gray-800 hover:text-gray-950"
                }`}
              >
                {hoveredLink === "leistungen" && (
                  <m.div layoutId="nav-hover" className="absolute inset-0 bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] backdrop-blur-3xl rounded-full -z-10" transition={{ type: "spring", stiffness: 450, damping: 35 }} />
                )}
                Unsere Leistungen
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === "leistungen" ? "-rotate-180" : ""}`} />
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === "leistungen" && (
                  <m.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-[50%] -translate-x-[50%] pt-2 w-[850px] cursor-default"
                  >
                    <div className="bg-white rounded-3xl p-6 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col focus:outline-none">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {leistungenLinks.map((link) => {
                          const Icon = (iconMap[link.icon || "default"] || iconMap.default) as LucideIcon;
                          return (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="group flex gap-5 p-4 rounded-2xl bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-[var(--color-red-500)] group-hover:text-white group-hover:shadow-[0_4px_20px_-4px_rgba(220,38,38,0.4)] transition-all duration-300 transform group-hover:scale-105">
                                <Icon className="w-6 h-6" />
                              </div>
                              <div className="flex flex-col justify-center">
                                <span className="font-extrabold text-base text-gray-900 group-hover:text-[var(--color-red-600)] transition-colors tracking-tight">{link.label}</span>
                                <span className="text-[13.5px] text-gray-500 leading-snug mt-1 line-clamp-2 pr-2">{link.description}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      
                      {/* Split Footer: Schlüssel Schmiede + Phone CTA */}
                      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between px-4 bg-slate-50 rounded-2xl py-4">
                         <Link
                           href="/schluessel-schmiede"
                           onClick={() => setActiveMenu(null)}
                           className="group flex items-center gap-4 hover:opacity-90 transition-opacity"
                         >
                           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-200 transition-colors">
                             <Hammer className="w-6 h-6" />
                           </div>
                           <div className="flex flex-col">
                             <span className="font-extrabold text-gray-900 text-base group-hover:text-amber-700 transition-colors">Schlüssel Schmiede</span>
                             <span className="text-gray-500 text-[13.5px]">24 Stunden Notdienst · Langgasse 70, Wetzlar</span>
                           </div>
                         </Link>
                         <a href="tel:+4964418056279" className="flex items-center gap-2.5 px-6 py-3 bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] transition-all text-sm group hover:-translate-y-0.5">
                           <Phone className="w-4 h-4 group-hover:animate-pulse" />
                           06441 - 8056279
                         </a>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Servicegebiet Dropdown */}
            <div 
              className="relative py-4"
              onMouseEnter={() => { setActiveMenu("servicegebiet"); setHoveredLink("servicegebiet"); }}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link 
                href="/servicegebiet"
                className={`relative z-10 flex items-center gap-1 px-2.5 py-2 font-semibold text-[13px] xl:text-sm tracking-tight rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeMenu === "servicegebiet" || pathname === "/servicegebiet"
                    ? "text-[var(--color-red-600)]"
                    : "text-gray-700 hover:text-gray-950"
                }`}
              >
                {hoveredLink === "servicegebiet" && (
                  <m.div layoutId="nav-hover" className="absolute inset-0 bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] backdrop-blur-3xl rounded-full -z-10" transition={{ type: "spring", stiffness: 450, damping: 35 }} />
                )}
                Einsatzgebiete
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === "servicegebiet" ? "-rotate-180" : ""}`} />
              </Link>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === "servicegebiet" && (
                  <m.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-[50%] -translate-x-[50%] pt-2 w-[850px] cursor-default"
                  >
                    <div className="bg-white rounded-3xl p-6 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] border border-gray-100 flex flex-col focus:outline-none">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {locationsLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group flex gap-5 p-4 rounded-2xl bg-transparent hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
                            onClick={() => setActiveMenu(null)}
                          >
                            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-[var(--color-blue-600)] group-hover:text-white group-hover:shadow-[0_4px_20px_-4px_rgba(37,99,235,0.4)] transition-all duration-300 transform group-hover:scale-105">
                              <MapPin className="w-6 h-6 group-hover:animate-bounce-subtle" />
                            </div>
                            <div className="flex flex-col justify-center">
                              <span className="font-extrabold text-base text-gray-900 group-hover:text-[var(--color-blue-700)] transition-colors tracking-tight">{link.label}</span>
                              <span className="text-[13.5px] text-gray-500 leading-snug mt-1 max-w-[200px]">{link.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Premium Footer for Servicegebiet */}
                      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between px-4 bg-slate-50 rounded-2xl py-4">
                         <div className="flex items-center gap-4">
                           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100/50 text-blue-600">
                             <Home className="w-6 h-6" />
                           </div>
                           <div className="flex flex-col">
                             <span className="font-extrabold text-gray-900 text-base">Dein Ort fehlt in der Liste?</span>
                             <span className="text-gray-500 text-[13.5px]">Kein Problem. Wir fahren im Umkreis von +50km</span>
                           </div>
                         </div>
                         <Link href="/servicegebiet" onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 px-6 py-3 bg-[var(--color-blue-600)] hover:bg-[var(--color-blue-700)] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all text-sm group hover:-translate-y-0.5">
                           Übersicht aller Einsatzgebiete
                           <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                         </Link>
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>



            {/* Schlüssel Schmiede und Priority Link */}
            <Link
              href="/schluessel-schmiede"
              onMouseEnter={() => { setActiveMenu(null); setHoveredLink("schmiede"); }}
              className={`relative px-2.5 py-2 font-bold text-[13px] xl:text-sm rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-1 ${
                pathname === "/schluessel-schmiede" ? "text-amber-600" : "text-gray-800 hover:text-gray-950"
              }`}
            >
              {hoveredLink === "schmiede" && (
                <m.div layoutId="nav-hover" className="absolute inset-0 bg-gray-100/80 rounded-full -z-10" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <Hammer className="w-4 h-4 opacity-60" />
              Schlüssel Schmiede
            </Link>

            {/* Standard Links: Preise, Ratgeber, Kontakt und with icons for key items */}
            {mainLinks.map((link) => {
              const isActive = (link.activeMatch === 'exact' && pathname === link.href) || 
                               (link.activeMatch === 'prefix' && pathname.startsWith(link.href) && link.href !== '/');
              const displayLabel = 
                link.label === "Kontakt & Notdienst" ? "Kontakt" :
                link.label === "Ratgeber & Blog" ? "Ratgeber" :
                link.label === "Preise & Kosten" ? "Preise" :
                link.label;
              const LinkIcon = 
                link.label === "Ratgeber & Blog" ? BookOpen :
                link.label === "Kontakt & Notdienst" ? Mail :
                null;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => { setActiveMenu(null); setHoveredLink(link.href); }}
                  className={`relative px-2.5 py-2 font-semibold text-[13px] xl:text-sm tracking-tight rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-1 ${
                    isActive ? "text-[var(--color-red-600)]" : "text-gray-700 hover:text-gray-950"
                  }`}
                >
                  {hoveredLink === link.href && (
                    <m.div layoutId="nav-hover" className="absolute inset-0 bg-white/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03] backdrop-blur-3xl rounded-full -z-10" transition={{ type: "spring", stiffness: 450, damping: 35 }} />
                  )}
                  {LinkIcon && <LinkIcon className="w-4 h-4 opacity-60" />}
                  {displayLabel}
                </Link>
              );
            })}
          </nav>

          {/* 3. CTA & MOBILE MENÜ TOGGLE */}
          <div className="flex items-center gap-3 z-50">


            <a
              href="tel:+4964418056279"
              className="hidden sm:flex items-center justify-center gap-2 px-5 xl:px-7 h-[44px] lg:h-[48px] bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white text-sm xl:text-[15px] font-extrabold tracking-wide rounded-full shadow-[0_4px_20px_-4px_rgba(220,38,38,0.45)] hover:shadow-[0_8px_30px_-5px_rgba(220,38,38,0.55)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 ring-1 ring-inset ring-white/20 group whitespace-nowrap"
              aria-label="Jetzt anrufen: 06441 8056279"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <span>06441 - 8056279</span>
            </a>
            
            {/* Mobile Call CTA (Icon Only) */}
            <a
              href="tel:+4964418056279"
              className="flex sm:hidden items-center justify-center w-12 h-12 bg-[var(--color-red-500)] text-white rounded-full shadow-[0_4px_14px_rgba(220,38,38,0.3)] active:scale-95 transition-transform"
              aria-label="Sofort Anrufen"
            >
              <Phone className="w-5 h-5 animate-pulse" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-12 h-12 bg-white/70 backdrop-blur-md border border-gray-200/60 hover:bg-white text-gray-900 rounded-full shadow-sm transition-all active:scale-95"
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 4. MOBILE DRAWER (Redesigned with Swipe-to-Close) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div 
            ref={trapRef}
            aria-modal="true"
            role="dialog"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.5 }}
            onDragEnd={(_e, info) => {
              if (info.offset.x > 100 || info.velocity.x > 500) {
                setIsMobileMenuOpen(false);
              }
            }}
            className="fixed inset-0 z-[110] bg-white flex flex-col overflow-hidden will-change-transform"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center px-4 sm:px-5 h-[80px] shrink-0 border-b border-gray-100/80 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] pt-[env(safe-area-inset-top)] z-10 relative">
              <Link href="/" className="flex items-center bg-white rounded-xl overflow-hidden" style={{ isolation: 'isolate' }} onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/images/logo-brand.svg"
                  alt="Schlüssel Schmiede Wetzlar"
                  width={48}
                  height={48}
                  className="w-[44px] h-[44px] max-w-[44px] max-h-[44px] object-contain"
                  unoptimized
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-100/80 hover:bg-gray-200 text-gray-700 active:scale-95 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-6 sm:py-8 pb-32 flex flex-col gap-6 sm:gap-8 bg-slate-50/50">

              {/* ★ Schlüssel Schmiede Premium Hero Card */}
              <Link
                href="/schluessel-schmiede"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group block w-full rounded-2xl active:scale-[0.98] transition-all bg-gradient-to-br from-red-700 to-red-900 border border-red-600/40 shadow-[0_8px_30px_-5px_rgba(220,38,38,0.4)] p-3 sm:p-5"
              >
                {/* Row 1: Icon + Badge */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/15 border border-white/20">
                    <Hammer className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white/80 bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10">Ladengeschäft</span>
                </div>
                
                {/* Row 2: Title + Address */}
                <div className="mb-3 sm:mb-4">
                  <p className="text-[17px] sm:text-[22px] font-black text-white leading-tight tracking-tight mb-1 sm:mb-1.5 break-words">Schlüssel Schmiede</p>
                  <div className="flex items-start sm:items-center gap-1.5 sm:gap-2">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-200 shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-[11px] sm:text-[13px] text-red-100/90 font-medium leading-snug break-words">Langgasse 70, 35576 Wetzlar</span>
                  </div>
                </div>

                {/* Row 3: CTA bar */}
                <div className="flex items-center justify-between bg-black/20 rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-white/10">
                  <span className="text-[12px] sm:text-[14px] font-bold text-white">Jetzt besuchen</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-active:translate-x-1 transition-transform shrink-0" />
                </div>
              </Link>
              
              {/* Leistungen Section */}
              <div className="flex flex-col gap-3">
                <span className="font-black text-gray-400 uppercase tracking-widest text-xs pl-2">Unsere Leistungen</span>
                <div className="grid grid-cols-1 gap-2">
                  {leistungenLinks.map((link) => {
                    const Icon = (iconMap[link.icon || "default"] || iconMap.default) as LucideIcon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-gray-100/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] active:scale-[0.98] transition-all hover:border-[var(--color-red-200)]"
                      >
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 text-[var(--color-red-600)] rounded-xl border border-red-100/50 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[15px] sm:text-base text-gray-900">{link.label}</span>
                          <span className="text-[13px] sm:text-sm text-gray-500 line-clamp-2">{link.description}</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
              
              {/* Einsatzgebiete Section */}
              <div className="flex flex-col gap-3">
                <span className="font-black text-gray-400 uppercase tracking-widest text-xs pl-2">Unsere Einsatzgebiete</span>
                <div className="grid grid-cols-2 gap-2">
                  {locationsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-white border border-gray-100/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] active:scale-[0.98] transition-all hover:border-[var(--color-blue-200)]"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 flex shrink-0 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 text-[var(--color-blue-600)] rounded-xl border border-blue-100/50 shadow-sm">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="font-bold text-[13px] sm:text-sm text-gray-900 leading-tight">{link.label}</span>
                        <span className="text-[11px] sm:text-xs text-gray-500 leading-tight mt-0.5 line-clamp-1">{link.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/servicegebiet" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 mt-2 py-3.5 px-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-gray-900/20 active:scale-[0.98] transition-all">
                  Alle 50+ Gebiete anzeigen <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Other Links */}
              <div className="flex flex-col gap-3">
                <span className="font-black text-gray-400 uppercase tracking-widest text-xs pl-2">Weitere Informationen</span>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
                  {mainLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
                      <span className="font-bold text-base text-gray-800 flex items-center gap-3">
                        {link.label === "Preise & Kosten" && <div className="p-2 bg-gray-50 rounded-lg text-gray-500"><Banknote className="w-5 h-5" /></div>}
                        {link.label === "Ratgeber & Blog" && <div className="p-2 bg-gray-50 rounded-lg text-gray-500"><BookOpen className="w-5 h-5" /></div>}
                        {link.label === "Kontakt & Notdienst" && <div className="p-2 bg-gray-50 rounded-lg text-gray-500"><Mail className="w-5 h-5" /></div>}
                        {link.label}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Mobile CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 border-t border-gray-100/80 bg-white/95 backdrop-blur-md pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-10 flex gap-2.5 sm:gap-3">
              <a
                href="tel:+4964418056279"
                className="relative overflow-hidden flex-1 flex items-center justify-center gap-2 h-[52px] sm:h-[60px] bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-black text-[15px] sm:text-base rounded-2xl shadow-[0_8px_25px_-5px_rgba(220,38,38,0.4)] active:scale-[0.98] transition-all animate-heartbeat-cta"
              >
                <Phone className="w-5 h-5" />
                Notdienst
              </a>
              <Link
                href="/termin-buchen"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-[0.8] flex items-center justify-center gap-2 h-[52px] sm:h-[60px] bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[15px] sm:text-base rounded-2xl active:scale-[0.98] transition-all"
              >
                <Calendar className="w-5 h-5" />
                Termin
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
