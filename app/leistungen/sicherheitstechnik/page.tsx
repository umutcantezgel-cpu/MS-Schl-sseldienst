import { ShieldCheck, Lock, Bell, Video, Check } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import CertBadges from "@/components/trust/CertBadges";

export default function SicherheitstechnikPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans ">
      <Breadcrumb currentSlug="/leistungen/sicherheitstechnik" currentTitle="Sicherheitstechnik" />
      {/* Hero Section */}
      <section className="relative bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Ruhig schlafen, <span className="text-[var(--color-brand)]">sicher leben.</span> Maßgeschneiderter Einbruchschutz.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Schützen Sie das, was Ihnen am wichtigsten ist. Wir analysieren Schwachstellen und sichern Ihr Zuhause mit modernster Technik – für ein unerschütterliches Sicherheitsgefühl.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Unsere Leistungen im Überblick</h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Wir bieten maßgeschneiderte Lösungen für jeden Sicherheitsbedarf. Von einfachen mechanischen Sicherungen bis hin zu komplexen elektronischen Systemen.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Schließzylinder & Anlagen</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Hochsichere Profilzylinder mit Kopierschutz und komplexe Schließanlagen für Gebäude jeder Größe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Alarmanlagen</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Intelligente Einbruchmeldeanlagen, verkabelt oder als Funklösung für Bestandsbauten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Videoüberwachung</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Hochauflösende Kamerasysteme mit Fernzugriff und intelligenter Bewegungserkennung.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Fenster- & Türsicherung</h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Mechanischer Zusatzschutz zur effektiven Erschwerung von Aufbruchversuchen.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">Unser Beratungsprozess</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>1. Termin vereinbaren:</strong> Kontaktieren Sie uns für ein unverbindliches Erstgespräch.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>2. Kostenlose Begehung:</strong> Wir analysieren die Sicherheitslage direkt bei Ihnen vor Ort.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>3. Konzept & Angebot:</strong> Sie erhalten ein maßgeschneidertes Sicherheitskonzept.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]"><strong>4. Fachgerechte Installation:</strong> Unsere Experten montieren die Technik sauber und zuverlässig.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CertBadges />
      <RelatedServices currentServiceId="sicherheitstechnik" />
      <EmergencyCTA />
    </div>
  );
}
