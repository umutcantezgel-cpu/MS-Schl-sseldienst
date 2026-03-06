import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function EmergencyCTA() {
  return (
    <section className="bg-[var(--color-cta-bg)] px-[var(--section-px)] py-[var(--section-py)]">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="font-[700] text-white mb-[var(--space-4)]"
          style={{
            fontSize: 'var(--text-h2)',
            lineHeight: 'var(--leading-h)',
            letterSpacing: 'var(--tracking-heading)',
          }}
        >
          Ausgesperrt? Wir sind sofort für Sie da!
        </h2>
        <p
          className="mt-[var(--space-6)] text-[var(--color-red-50)] font-[400] mb-[var(--space-7)]"
          style={{
            fontSize: 'var(--text-lead)',
            lineHeight: 'var(--leading-lead)',
          }}
        >
          Rund um die Uhr erreichbar – 365 Tage im Jahr.
        </p>
        <div className="mt-[var(--space-8)] flex justify-center">
          <a
            href="tel:06441123456"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "min-h-[48px] min-w-[48px]")}
          >
            <Phone className="h-5 w-5 text-[var(--color-brand)]" aria-hidden="true" />
            <div className="flex flex-col items-start">
              <span
                className="font-[700] text-[var(--color-brand)] leading-none mb-[var(--space-1)]"
                style={{ fontSize: 'var(--text-lead)', letterSpacing: 'var(--tracking-cta)' }}
              >
                Jetzt anrufen
              </span>
              <span
                className="font-[600] text-[var(--color-brand)] leading-none"
                style={{ fontSize: 'var(--text-body)', letterSpacing: 'var(--tracking-cta)' }}
              >
                06441 123 456
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
