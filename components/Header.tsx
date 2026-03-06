"use client";

import { Phone, Key, Menu, X, ChevronDown, Shield, Check, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-[var(--z-sticky)] w-full bg-[var(--color-surface-primary)] text-[var(--color-text-primary)] elevation-1 border-b border-[var(--color-border-subtle)]">
      {/* Top Bar (Reptilian Brain: Safety & Contact) */}
      <div className="bg-[var(--color-stone-900)] text-white/90 text-[13px] py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-[var(--color-brand)]" /> IHK-geprüfter Fachbetrieb</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[var(--color-brand)]" /> 100% Festpreis-Garantie</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@schluesseldienst-wetzlar.de" className="flex items-center gap-1.5 hover:text-white transition-colors"><Mail className="w-4 h-4" /> info@schluesseldienst-wetzlar.de</a>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Lokaler Service in Wetzlar</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Key className="h-5 w-5 text-[var(--color-brand)]" />
          <span className="hidden sm:inline-block">
            Schlüsseldienst Wetzlar
          </span>
          <span className="sm:hidden">SD Wetzlar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <div
            className="relative group"
            onMouseEnter={() => setIsLeistungenOpen(true)}
            onMouseLeave={() => setIsLeistungenOpen(false)}
          >
            <button className="flex items-center gap-1 transition-colors hover:text-[var(--color-brand)] text-[var(--color-text-body)] py-2">
              Leistungen <ChevronDown className="h-5 w-5" />
            </button>

            {isLeistungenOpen && (
              <div className="absolute left-0 top-full w-56 rounded-xl bg-[var(--color-surface-primary)] py-2 elevation-3 ring-1 ring-[var(--color-border-subtle)]">
                {leistungenLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 text-sm transition-colors hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-brand)] ${pathname === link.href ? "text-[var(--color-brand)] font-bold bg-[var(--color-surface-subtle)]" : "text-[var(--color-text-body)]"}`}
                    onClick={() => setIsLeistungenOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-[var(--color-brand)] ${pathname === link.href ? "text-[var(--color-brand)]" : "text-[var(--color-text-body)]"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:06441123456"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full flex px-3 sm:px-4")}
            aria-label="Notruf anrufen"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline-block ml-1">06441 123 456</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center justify-center min-h-[48px] min-w-[48px] text-[var(--color-text-body)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Menü umschalten"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-primary)] max-h-[calc(100vh-4rem)] overflow-y-auto elevation-3">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-bold text-[var(--color-text-muted)] uppercase tracking-wider">Leistungen</div>
              <div className="flex flex-col space-y-3 pl-4 border-l border-[var(--color-border)]">
                {leistungenLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center min-h-[48px] text-base font-medium transition-colors hover:text-[var(--color-brand)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-brand)] rounded-md px-2 ${pathname === link.href ? "text-[var(--color-brand)]" : "text-[var(--color-text-body)]"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--color-border-subtle)] pt-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-base font-medium transition-colors hover:text-[var(--color-brand)] ${pathname === link.href ? "text-[var(--color-brand)]" : "text-[var(--color-text-body)]"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
