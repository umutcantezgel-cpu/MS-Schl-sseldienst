"use client";

import { Phone, Key, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function StickyHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolled(!entry.isIntersecting);
            },
            { root: null, threshold: 0 }
        );

        const hero = document.getElementById("hero-section");
        if (hero) {
            observer.observe(hero);
        }

        return () => observer.disconnect();
    }, [pathname]);

    const leistungenLinks = [
        { name: "Türöffnung", href: "/leistungen/turoeffnung" },
        { name: "Autoöffnung", href: "/leistungen/autooeffnung" },
        { name: "Schließanlagen", href: "/leistungen/schliessanlagen" },
        { name: "Sicherheitstechnik", href: "/leistungen/sicherheitstechnik" },
        { name: "Schlüssel nachmachen", href: "/leistungen/schluessel-nachmachen" },
    ];

    const navLinks = [
        { name: "Preise", href: "/preise" },
        { name: "Servicegebiet", href: "/servicegebiet" },
        { name: "Bewertungen", href: "/bewertungen" },
        { name: "FAQ", href: "/faq" },
        { name: "Über uns", href: "/ueber-uns" },
        { name: "Kontakt", href: "/kontakt" },
    ];

    return (
        <header
            role="banner"
            className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center transition-all duration-300
                ${isScrolled
                    ? "h-[56px] glass border-b border-[var(--color-border)] elevation-2"
                    : "h-[64px] lg:h-[72px] bg-[var(--color-nav-bg)] backdrop-blur-[16px] backdrop-saturate-[1.2] border-b border-[var(--color-border-subtle)]"
                } text-[var(--color-text-primary)]`}
        >
            <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-7)]">
                <Link
                    href="/"
                    className="flex items-center gap-[var(--space-2)] font-bold tracking-tight order-1 mr-auto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Schlüsseldienst Wetzlar – Startseite"
                >
                    <Key className="h-5 w-5 text-[var(--color-brand)]" aria-hidden="true" />
                    <span className="hidden sm:inline-block">Schlüsseldienst Wetzlar</span>
                    <span className="sm:hidden">SD Wetzlar</span>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-[var(--space-6)] font-[600] order-2 mx-auto" style={{ fontSize: 'var(--text-body)' }}>
                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setIsLeistungenOpen(true)}
                        onMouseLeave={() => setIsLeistungenOpen(false)}
                    >
                        <button
                            className="flex items-center gap-[var(--space-1)] transition-colors hover:text-[var(--color-brand)] py-[var(--space-2)] text-[var(--color-text-body)]"
                            aria-expanded={isLeistungenOpen}
                            aria-controls="desktop-leistungen-menu"
                        >
                            Leistungen <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {isLeistungenOpen && (
                            <ul id="desktop-leistungen-menu" role="menu" className="absolute left-0 top-[100%] w-56 rounded-xl bg-white py-[var(--space-2)] elevation-3 ring-1 ring-[var(--color-border-subtle)]">
                                {leistungenLinks.map((link) => (
                                    <li key={link.name} role="none">
                                        <Link
                                            role="menuitem"
                                            href={link.href}
                                            className={`block px-[var(--space-4)]py-[var(--space-2)]text-[16px] transition-colors hover: bg-[var(--color-brand-light)]hover: text-[var(--color-brand)] ${pathname === link.href ? "text-[var(--color-brand)] font-[700] bg-[var(--color-brand-light)]" : "text-[var(--color-text-body)] font-[600]"
                                                } `}
                                            onClick={() => setIsLeistungenOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors hover: text-[var(--color-brand)] ${pathname === link.href
                                    ? "text-[var(--color-brand)]"
                                    : "text-[var(--color-text-body)]"
                                } `}
                            {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-[var(--space-4)] h-full order-3 sm:order-last ml-auto">
                    <a
                        href="tel:+496441123456"
                        className={cn(buttonVariants({ size: "sm" }), "absolute top-0 right-0 sm:relative w-[56px] sm:w-auto h-[56px] sm:h-[40px] rounded-none sm:rounded-full px-0 sm:px-[var(--space-4)] hover:-translate-y-0.5")}
                        style={{ fontSize: 'var(--text-h4)', letterSpacing: 'var(--tracking-cta)' }}
                        aria-label="Jetzt anrufen: 06441 123 456"
                    >
                        <Phone className="h-5 w-5 sm:h-5 sm:w-5 animate-pulse" aria-hidden="true" />
                        <span className="hidden sm:inline-block">06441 123 456</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden flex items-center justify-center min-w-[48px] text-[var(--color-text-primary)] mr-[56px] sm:mr-0"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav id="mobile-nav-menu" aria-label="Mobile Navigation" className="lg:hidden absolute top-[56px] left-0 w-full border-t border-[var(--color-border-subtle)] bg-white max-h-[calc(100vh-56px)] overflow-y-auto elevation-3 text-[var(--color-text-primary)]">
                    <ul className="flex flex-col px-[var(--space-4)] py-[var(--space-4)] space-y-[var(--space-4)]">
                        <li className="space-y-[var(--space-2)]">
                            <div className="font-[700] text-[var(--color-text-muted)] uppercase" style={{ fontSize: 'var(--text-tiny)', letterSpacing: 'var(--tracking-caps)' }}>Leistungen</div>
                            <ul className="flex flex-col space-y-[var(--space-3)] pl-[var(--space-4)] border-l-3 border-[var(--color-brand)]">
                                {leistungenLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`block font-[600] transition-colors hover: text-[var(--color-brand)] ${pathname === link.href ? "text-[var(--color-brand)]" : "text-[var(--color-text-body)]"
                                                } `}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="border-t border-[var(--color-border-subtle)] pt-[var(--space-4)]">
                            <ul className="space-y-[var(--space-4)]">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`block text-[18px] font-[600] transition-colors hover: text-[var(--color-brand)] ${pathname === link.href ? "text-[var(--color-brand)]" : "text-[var(--color-text-body)]"
                                                } `}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
