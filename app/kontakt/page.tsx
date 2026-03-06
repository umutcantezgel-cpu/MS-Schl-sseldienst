import { Phone, Mail, MapPin, Clock } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";

import { buttonVariants } from "@/components/ui/button";
import ContactForm from "@/components/contact/ContactForm";
import { cn } from "@/lib/utils";
import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Kontakt — 24/7 Notruf & Kontaktformular",
  description: "Kontaktieren Sie Schlüsseldienst Wetzlar: 24/7 Notruf unter 06441 123 456 oder per Kontaktformular. Schnelle Hilfe bei Notfällen, faire Beratung für Sicherheitstechnik.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section aria-label="Kontaktübersicht" className="relative bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            <span className="text-[var(--color-brand)]">Kontakt</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Wir sind für Sie da. Rufen Sie uns im Notfall direkt an oder
            schreiben Sie uns eine Nachricht für allgemeine Anfragen.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section aria-label="Kontaktmöglichkeiten" className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                So erreichen Sie uns
              </h2>
              <p className="mt-4 text-lg text-[var(--color-text-body)]">
                Im Notfall (zugefallene Tür) empfehlen wir immer den
                telefonischen Kontakt. Wir sind 24/7 für Sie erreichbar.
              </p>

              <address className="not-italic mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                      Notruf (24/7)
                    </h3>
                    <p className="mt-2 text-[var(--color-text-body)]">
                      <a
                        href="tel:06441123456"
                        className="font-semibold text-[var(--color-brand)] hover:underline"
                      >
                        06441 / 123 456
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface-divider)] text-[var(--color-text-body)]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">E-Mail</h3>
                    <p className="mt-2 text-[var(--color-text-body)]">
                      <a
                        href="mailto:info@schluesseldienst-wetzlar.de"
                        className="hover:underline"
                      >
                        info@schluesseldienst-wetzlar.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface-divider)] text-[var(--color-text-body)]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                      Standort
                    </h3>
                    <p className="mt-2 text-[var(--color-text-body)]">
                      Schlüsseldienst Wetzlar
                      <br />
                      Musterstraße 123
                      <br />
                      35578 Wetzlar
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface-divider)] text-[var(--color-text-body)]">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                      Servicezeiten
                    </h3>
                    <p className="mt-2 text-[var(--color-text-body)]">
                      Notdienst: 24 Stunden, 7 Tage die Woche
                      <br />
                      Bürozeiten: Mo-Fr, 08:00 - 18:00 Uhr
                    </p>
                  </div>
                </div>
              </address>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <aside aria-label="Notfall-Kontakt">
        <EmergencyCTA />
      </aside>
    </>
  );
}
