import Link from"next/link";
import { ArrowRight, Key, Phone } from"lucide-react";
import { buttonVariants } from"@/components/ui/button";
import { cn } from"@/lib/utils";

export default function NotFound() {
 return (
  <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 text-center text-[var(--text-primary)]">
   <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--border-subtle)] text-[var(--text-tertiary)]" aria-hidden="true">
    <Key className="h-8 w-8" />
   </div>
   <h1 className="mt-8 typo-h2 text-[var(--text-primary)]">
    Seite nicht gefunden
   </h1>
   <p className="mt-4 text-lg text-[var(--text-secondary)]">
    Entschuldigung, die gesuchte Seite existiert nicht oder wurde
    verschoben.
   </p>

   <nav aria-label="Hilfreiche Seiten" className="mt-10 flex flex-col sm:flex-row gap-4">
    <Link
     href="/"
     className={cn(buttonVariants({ variant:"default" }))}
    >
     Zurück zur Startseite
     <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </Link>
    <Link
     href="/leistungen/turoeffnung"
     className={cn(buttonVariants({ variant:"outline" }))}
    >
     Unsere Leistungen
    </Link>
    <Link
     href="/kontakt"
     className={cn(buttonVariants({ variant:"outline" }))}
    >
     Kontakt
    </Link>
   </nav>

   <div className="mt-12 flex flex-col items-center gap-4">
    <h2 className="typo-lead text-[var(--text-primary)] font-bold">Dringender Notfall?</h2>
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
