import Link from "next/link";
import { ArrowRight, Key } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 text-center text-[var(--color-text-primary)]">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-surface-divider)] text-[var(--color-text-muted)]" aria-hidden="true">
        <Key className="h-8 w-8" />
      </div>
      <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 text-lg text-[var(--color-text-body)]">
        Entschuldigung, die gesuchte Seite existiert nicht oder wurde
        verschoben.
      </p>

      <nav aria-label="Hilfreiche Seiten" className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Zurück zur Startseite
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
        <Link
          href="/leistungen/turoeffnung"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Unsere Leistungen
        </Link>
        <Link
          href="/kontakt"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Kontakt
        </Link>
      </nav>
    </div>
  );
}
