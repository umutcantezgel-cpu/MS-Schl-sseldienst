"use client";

import { Phone, Key, Menu, X, ChevronDown, Car, ShieldCheck, Lock, KeyRound, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const leistungenLinks = [
    { name: "Türöffnung", href: "/leistungen/turoeffnung", icon: Key, desc: "Zerstörungsfreie Öffnung in 20-30 Min." },
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
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Schließe Mobile Menu bei Routenwechsel
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Sperre Scrollen, wenn Mobile Menu offen ist
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    // 3-State Logic
    const isScrolled = scrollPosition > 100;
    const isMobileCompressed = scrollPosition > 500;

    // Header Zustand 1 (Transparent/Weiß) vs Zustand 2 (Weiß/Dunkel)
    const headerClasses = cn(
        "fixed top-0 left-0 right-0 z-[var(--z-sticky)] w-full flex items-center transition-all duration-[var(--duration-250)] ease-out",
        !isScrolled
            ? "bg-transparent h-[72px] lg:h-[80px] text-[var(--color-text-inverted)]"
            : "bg-[var(--color-surface-default)] h-[64px] shadow-[var(--shadow-sm)] text-[var(--color-text-primary)]",
        isMobileCompressed && "h-[48px] shadow-[var(--shadow-md)]"
    );

    const logoColor = !isScrolled ? "text-[var(--color-text-inverted)]" : "text-[var(--color-brand)]";
    const navTextColor = !isScrolled ? "text-[rgba(255,255,255,0.9)] hover:text-white" : "text-[var(--color-text-body)] hover:text-[var(--color-brand)]";

    return (
        <>
            <header role="banner" className={headerClasses}>
                <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-[var(--space-4)] md:px-[var(--space-8)]">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-[var(--space-2)] font-bold tracking-tight z-[var(--z-overlay)]"
                        aria-label="Schlüsseldienst Wetzlar – Startseite"
                    >
                        <div className={cn("flex items-center justify-center transition-all", isMobileCompressed ? "h-6 w-6" : "h-8 w-8", logoColor)}>
                            <Key className="w-full h-full" aria-hidden="true" />
                        </div>
                        {!isMobileCompressed && (
                            <span className={cn("text-[var(--typo-price-size)]", !isScrolled ? "text-white" : "text-[var(--color-text-primary)]")}>
                                <span className="hidden sm:inline">Schlüsseldienst Wetzlar</span>
                                <span className="sm:hidden">SD Wetzlar</span>
                            </span>
                        )}
                        {isMobileCompressed && (
                            <span className="text-[var(--typo-body-size)] font-bold">SD Wetzlar</span>
                        )}
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Hauptnavigation" className={cn("hidden lg:flex items-center gap-[var(--space-6)] font-[600] text-[var(--typo-body-size)]", isMobileCompressed && "lg:hidden")}>
                        <div
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setIsLeistungenOpen(true)}
                            onMouseLeave={() => setIsLeistungenOpen(false)}
                        >
                            <button
                                className={cn("flex items-center gap-[var(--space-1)] transition-colors py-[var(--space-2)]", navTextColor)}
                                aria-expanded={isLeistungenOpen}
                                aria-controls="desktop-leistungen-menu"
                            >
                                Leistungen <ChevronDown className="h-4 w-4" aria-hidden="true" />
                            </button>

                            {/* Dropdown Menu (Prompt 6.2) */}
                            {isLeistungenOpen && (
                                <div id="desktop-leistungen-menu" role="menu" className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[280px] rounded-[var(--radius-16)] bg-[var(--color-surface-default)] shadow-[var(--shadow-xl)] border border-[var(--color-border)] overflow-hidden origin-top animate-in fade-in slide-in-from-top-2 duration-[var(--duration-200)] ease-out">
                                    <ul className="py-[var(--space-2)]">
                                        {leistungenLinks.map((link) => {
                                            const Icon = link.icon;
                                            return (
                                                <li key={link.name} role="none">
                                                    <Link
                                                        role="menuitem"
                                                        href={link.href}
                                                        className="flex items-start gap-[var(--space-3)] px-[var(--space-4)] py-[var(--space-3)] transition-colors hover:bg-[var(--color-surface-muted)] group/link"
                                                        onClick={() => setIsLeistungenOpen(false)}
                                                    >
                                                        <div className="flex bg-[var(--color-brand-light)] text-[var(--color-brand)] rounded-[var(--radius-8)] p-2 group-hover/link:bg-[var(--color-brand)] group-hover/link:text-white transition-colors">
                                                            <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[var(--font-size-15)] font-semibold text-[var(--color-text-primary)]">{link.name}</span>
                                                            <span className="text-[var(--font-size-13)] font-normal text-[var(--color-text-muted)] line-clamp-1">{link.desc}</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="bg-[var(--color-surface-muted)] p-[var(--space-3)] border-t border-[var(--color-border)]">
                                        <a href="tel:+4964418056544" className="flex items-center justify-center w-full text-[var(--typo-micro-size)] font-bold text-[var(--color-brand)] hover:text-[var(--color-brand-dark)] gap-2">
                                            <Phone className="w-3 h-3" />
                                            Sofort-Hilfe: 06441 8056544
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn("transition-colors", navTextColor, pathname === link.href && "font-bold border-b-2 border-current")}
                                {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-[var(--space-3)] lg:gap-[var(--space-4)] z-[var(--z-overlay)]">
                        {!isMobileCompressed ? (
                            <a
                                href="tel:+4964418056544"
                                className={cn(buttonVariants({ variant: "default" }), "animate-heartbeat-cta !min-h-[48px] hover:!animate-none hidden sm:flex")}
                            >
                                <Phone className="h-5 w-5" aria-hidden="true" />
                                06441 8056544
                            </a>
                        ) : (
                            <a
                                href="tel:+4964418056544"
                                className="flex items-center justify-center h-10 w-10 sm:h-10 sm:w-auto sm:px-4 rounded-full bg-[var(--color-cta-background)] text-white shadow-sm"
                                aria-label="Jetzt anrufen"
                            >
                                <Phone className="h-4 w-4 sm:mr-2" />
                                <span className="hidden sm:inline font-bold">06441 8056544</span>
                            </a>
                        )}

                        <button
                            className={cn("lg:hidden flex items-center justify-center min-w-[48px] min-h-[48px] transition-colors rounded-[var(--radius-8)]", !isScrolled ? "text-white" : "text-[var(--color-text-primary)] hover:bg-[var(--color-surface-muted)]")}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                        >
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Full-Screen Mobile Overlay (Prompt 6.3) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[var(--z-modal)] bg-[var(--color-surface-default)] flex flex-col pt-4 overflow-y-auto animate-in slide-in-from-right-full duration-[var(--duration-300)] ease-out">
                    <div className="flex justify-between items-center px-[var(--space-4)] pb-[var(--space-4)] border-b border-[var(--color-border)]">
                        <span className="font-bold text-[var(--typo-price-size)] text-[var(--color-text-primary)]">Menü</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center min-w-[48px] min-h-[48px] rounded-[var(--radius-8)] bg-[var(--color-surface-muted)] text-[var(--color-text-primary)]"
                            aria-label="Menü schließen"
                        >
                            <X className="h-6 w-6 transition-transform hover:rotate-90 duration-[var(--duration-200)]" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="px-[var(--space-4)] py-[var(--space-6)] flex flex-col gap-[var(--space-6)]">
                        {/* Prominenter Anruf-Button Pfad */}
                        <div className="flex flex-col gap-[var(--space-3)]">
                            <span className="text-[var(--font-size-24)] font-bold text-[var(--color-text-primary)] text-center">06441 8056544</span>
                            <a
                                href="tel:+4964418056544"
                                className={cn(buttonVariants({ variant: "default" }), "w-full h-[56px] text-[var(--font-size-18)] shadow-[var(--shadow-brand-glow)] animate-heartbeat-cta")}
                            >
                                <Phone className="h-5 w-5" />
                                Jetzt Anrufen
                            </a>
                        </div>

                        <nav className="flex flex-col gap-[var(--space-4)] mt-[var(--space-4)]">
                            <div className="font-[700] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-caps)] text-[var(--font-size-12)]">Leistungen</div>
                            {leistungenLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-[var(--space-3)] py-[var(--space-2)] text-[var(--font-size-20)] font-semibold text-[var(--color-text-primary)] active:text-[var(--color-brand)] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <link.icon className="h-6 w-6 text-[var(--color-brand)]" />
                                    {link.name}
                                </Link>
                            ))}

                            <div className="w-full h-px bg-[var(--color-border)] my-[var(--space-2)]" />

                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center justify-between py-[var(--space-2)] text-[var(--font-size-20)] font-semibold text-[var(--color-text-primary)] active:text-[var(--color-brand)] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                    <ChevronRight className="h-5 w-5 text-[var(--color-text-muted)]" />
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto pt-[var(--space-8)] flex items-center justify-center gap-[var(--space-4)] text-[var(--font-size-14)] text-[var(--color-text-muted)]">
                            <Link href="/datenschutz" onClick={() => setIsMobileMenuOpen(false)}>Datenschutz</Link>
                            <span>|</span>
                            <Link href="/impressum" onClick={() => setIsMobileMenuOpen(false)}>Impressum</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
