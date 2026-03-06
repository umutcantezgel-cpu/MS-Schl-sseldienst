import { DoorOpen, Check, Clock, ShieldCheck, Phone, HelpCircle } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import Link from "next/link";
import RelatedServices from "@/components/RelatedServices";
import Breadcrumb from "@/components/Breadcrumb";
import ProcessSteps from "@/components/trust/ProcessSteps";
import CertBadges from "@/components/trust/CertBadges";
import { generateHowToSchema } from "@/lib/schema";
import { getFAQSchema } from "@/lib/faqSchema";

export default function TuroeffnungPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema(
            "Türöffnung in Wetzlar — So funktioniert der Ablauf",
            "Schlüsseldienst Wetzlar öffnet zugefallene und abgesperrte Türen in Wetzlar und Umgebung zum Festpreis — zerstörungsfrei in 99% der Fälle, innerhalb von 15–30 Minuten."
          )),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema([
            { question: "Was kostet eine Türöffnung in Wetzlar?", answer: "Schlüsseldienst Wetzlar öffnet zugefallene Türen ab 50 Euro und abgesperrte Türen ab 80 Euro zum Festpreis — ohne versteckte Kosten und ohne Anfahrtsgebühren." },
            { question: "Wie schnell ist der Schlüsseldienst bei einer Türöffnung vor Ort?", answer: "Schlüsseldienst Wetzlar ist in 15–30 Minuten bei Ihnen — 24/7, auch nachts, an Wochenenden und Feiertagen." },
            { question: "Wird die Tür bei der Öffnung beschädigt?", answer: "In 99% der Fälle öffnet Schlüsseldienst Wetzlar Ihre Tür zerstörungsfrei mit Spezialwerkzeug." },
          ])),
        }}
      />
      <Breadcrumb currentSlug="/leistungen/turoeffnung" currentTitle="Türöffnung" />
      {/* Hero Section */}
      <section className="relative bg-[var(--color-surface-subtle)] px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            Schnell wieder <span className="text-[var(--color-brand)]">im Warmen.</span> Türöffnung in Wetzlar.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-body)] sm:text-xl">
            Wir bringen Sie sicher und beschädigungsfrei zurück in Ihr Zuhause. Ehrliche Festpreise ab 50 €, versteckte Kosten gibt es bei uns nicht.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Ausgesperrt? Keine Panik!
            </h2>
            <p className="mt-4 text-[var(--color-text-body)]">
              Es passiert schneller, als man denkt: Ein kurzer Moment der
              Unachtsamkeit, ein Windstoß, und die Tür fällt ins Schloss. Der
              Schlüssel steckt von innen oder liegt noch auf dem Küchentisch. In
              solchen Momenten brauchen Sie einen zuverlässigen Partner, der
              schnell vor Ort ist und das Problem professionell löst.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <DoorOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                    Zugefallene Türen
                  </h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Eine nur ins Schloss gefallene Tür öffnen wir mit
                    Spezialwerkzeug in der Regel innerhalb weniger Minuten und
                    zu 99% ohne jegliche Beschädigung an Schloss oder Zylinder.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                    Verschlossene Türen
                  </h3>
                  <p className="mt-2 text-[var(--color-text-body)]">
                    Auch wenn die Tür abgeschlossen ist oder der Schlüssel
                    abgebrochen ist, helfen wir kompetent. Hierbei muss der
                    Zylinder oft aufgebohrt werden, wir haben jedoch immer
                    passenden Ersatz dabei.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-16 text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Unser Versprechen
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]">
                  <strong>Transparente Festpreise:</strong> Sie wissen vorher,
                  was es kostet. Keine versteckten Gebühren.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]">
                  <strong>Schnelle Hilfe:</strong> In Wetzlar und direkter
                  Umgebung sind wir meist in 15-30 Minuten bei Ihnen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--color-brand)]" />
                <span className="text-[var(--color-text-body)]">
                  <strong>Fachgerechte Arbeit:</strong> Wir arbeiten mit
                  modernstem Spezialwerkzeug und größter Sorgfalt.
                </span>
              </li>
            </ul>

            <div className="mt-12 rounded-2xl bg-[var(--color-surface-subtle)] p-8 ring-1 ring-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                Was tun, wenn die Tür zu ist?
              </h3>
              <ol className="mt-4 list-decimal pl-5 space-y-2 text-[var(--color-text-body)]">
                <li>
                  Bewahren Sie Ruhe. Versuchen Sie nicht, die Tür gewaltsam zu
                  öffnen.
                </li>
                <li>
                  Prüfen Sie, ob ein Fenster offen steht oder ein Zweitschlüssel
                  bei Nachbarn hinterlegt ist.
                </li>
                <li>
                  Rufen Sie uns an:{" "}
                  <a
                    href="tel:06441123456"
                    className="font-semibold text-[var(--color-brand)] hover:underline"
                  >
                    06441 / 123 456
                  </a>
                </li>
                <li>
                  Wir nennen Ihnen einen verbindlichen Festpreis und machen uns
                  sofort auf den Weg.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CertBadges />
      <RelatedServices currentServiceId="turoeffnung" />
      <EmergencyCTA />
    </div>
  );
}
