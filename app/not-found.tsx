import Link from"next/link";
import { ArrowRight, Key, Phone } from"lucide-react";
import { buttonVariants } from"@/components/ui/button";
import { cn } from"@/lib/utils";
import { generateSharedMetadata } from"@/lib/metadata";

export const metadata = generateSharedMetadata({
 title: "Seite nicht gefunden",
 description: "Die gesuchte Seite existiert nicht. Nutzen Sie unsere Navigation oder kontaktieren Sie uns direkt.",
 path: "/not-found",
 noindex: true,
});

export default function NotFound() {
 return (
  <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 text-center text-[color:var(--text-primary)]">
   <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--border-subtle)] text-[color:var(--text-tertiary)]" aria-hidden="true">
    <Key className="h-8 w-8" />
   </div>
   <h1 className="mt-8 typo-h2 text-[color:var(--text-primary)]">
    Seite nicht gefunden
   </h1>
   <p className="mt-4 text-lg text-[color:var(--text-secondary)] max-w-md">
    Diese Seite existiert nicht — aber wir können Ihnen trotzdem helfen.
   </p>

   {/* Popular Pages */}
   <div className="mt-8 text-sm text-[color:var(--text-tertiary)]">Beliebte Seiten:</div>
   <nav aria-label="Beliebte Seiten" className="mt-3 flex flex-wrap justify-center gap-2">
    {[
     { label: "Startseite", href: "/" },
     { label: "Türöffnung", href: "/leistungen/turoeffnung" },
     { label: "Preise", href: "/preise" },
     { label: "FAQ", href: "/faq" },
     { label: "Servicegebiet", href: "/servicegebiet" },
     { label: "Kontakt", href: "/kontakt" },
    ].map((link) => (
     <Link
      key={link.href}
      href={link.href}
      className="rounded-lg border border-[var(--border-subtle)] px-3 py-1.5 text-sm text-[color:var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
     >
      {link.label}
     </Link>
    ))}
   </nav>

   <nav aria-label="Hauptaktionen" className="mt-8 flex flex-col sm:flex-row gap-4">
    <Link
     href="/"
     className={cn(buttonVariants({ variant:"primary" }))}
    >
     Zurück zur Startseite
     <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </Link>
    <Link
     href="/kontakt"
     className={cn(buttonVariants({ variant:"secondary" }))}
    >
     Kontakt
    </Link>
   </nav>

   <div className="mt-12 flex flex-col items-center gap-4">
    <h2 className="typo-lead text-[color:var(--text-primary)] font-bold">Dringender Notfall?</h2>
    <a
     href="tel:+4964418056544"
     className={cn(buttonVariants({ size:"lg" }),"animate-heartbeat-cta shadow-[var(--shadow-cta)] font-bold")}
    >
     <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
     06441 8056544 anrufen
    </a>
   </div>
  </div>
 );
}

