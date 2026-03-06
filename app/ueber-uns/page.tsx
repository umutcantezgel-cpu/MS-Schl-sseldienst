import { ShieldCheck, MapPin, Heart, Clock, Star } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";

export default function UeberUnsPage() {
  return (
    <div className="bg-white text-[var(--color-text-primary)] font-sans">
      {/* Hero Section */}
      <section className="relative bg-[var(--color-stone-900)] px-[var(--section-px)] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative mx-auto max-w-4xl text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 text-[var(--color-brand)]" />
            Aus Wetzlar. Für Wetzlar.
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 shadow-sm">
            Nicht einfach ein Schlüsseldienst. <br />
            <span className="text-[var(--color-brand)]">Ihre Rettung in der Not.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
            Mehr als 15 Jahre Erfahrung, über 50 gerettete Situationen jeden Monat. Wir sind der Handwerksbetrieb von nebenan, dem Sie blind vertrauen können.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-[var(--section-px)] py-[var(--section-py)]">
        <div className="mx-auto max-w-3xl">

          {/* Act 1 & 2: The Hook & The Problem */}
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-[var(--color-brand)]" />
              Warum wir den Ruf unserer Branche reparieren
            </h2>
            <p className="lead text-xl text-[var(--color-text-body)] font-medium">
              Jeder kennt die Schauergeschichten aus dem Fernsehen: Wenn die Tür ins Schloss fällt, beginnt oft nicht nur der Stress, sondern auch die Angst vor der Rechnung.
            </p>
            <p className="text-[var(--color-text-body)]">
              Sogenannte "Schwarze Schafe" und Abzock-Zentralen aus dem Internet nutzen die pure Notlage der Menschen gnadenlos aus. Versteckte Anfahrtskosten, zerstörte Schlösser und Rechnungen jenseits der 300-Euro-Marke sind leider keine Seltenheit.
            </p>
            <p className="text-[var(--color-text-body)] font-bold">
              Genau deshalb haben wir Schlüsseldienst Wetzlar gegründet. Wir wollten beweisen: Echtes Handwerk geht immer ehrlich.
            </p>

            {/* Quote Insert */}
            <blockquote className="my-10 border-l-4 border-[var(--color-brand)] bg-[var(--color-surface-subtle)] p-6 rounded-r-2xl italic text-[var(--color-text-primary)]">
              "Wir möchten, dass Sie aufatmen können, sobald Sie unser Auto in Ihrer Straße sehen. Keine bösen Überraschungen, sondern nur schnelle, kompetente Hilfe von Nachbarn."
            </blockquote>
          </div>

          {/* Act 3: The Solution / The Values */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="bg-[var(--color-surface-subtle)] p-8 rounded-3xl ring-1 ring-[var(--color-border)] hover:ring-[var(--color-brand)] transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white mb-6 shadow-lg shadow-[var(--color-brand)]/20">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Unsere Philosophie</h3>
              <p className="text-[var(--color-text-body)]">
                Wir behandeln jede Tür so vorsichtig, als wäre es unsere eigene. Zu 99% öffnen wir zerstörungsfrei. Darum vertrauen uns private Haushalte genauso wie lokale Unternehmen und Behörden in der Region.
              </p>
            </div>

            <div className="bg-[var(--color-surface-subtle)] p-8 rounded-3xl ring-1 ring-[var(--color-border)] hover:ring-[var(--color-brand)] transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white mb-6 shadow-lg shadow-[var(--color-brand)]/20">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Zeit ist Empathie</h3>
              <p className="text-[var(--color-text-body)]">
                Wir wissen: Wer vor verschlossener Tür steht (vielleicht noch im Regen oder bei Kälte), braucht keine Warteschleifen. Als echtes lokales Team garantieren wir in Wetzlar und direkter Umgebung eine Anfahrt von unter 25 Minuten.
              </p>
            </div>
          </div>

          {/* Act 4 & 5: The Proof & Invitation */}
          <div className="prose prose-lg prose-slate mx-auto mt-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
              Vom Fernseh-Experten ausgebildet
            </h2>
            <p className="text-[var(--color-text-body)]">
              Unser Chef-Techniker wurde von Uwe Sarfeld, einem der bekanntesten und fähigsten Schlüsseldienst-Experten Deutschlands (regelmäßig im TV zu sehen), ausgebildet. Wir bringen also nicht nur das richtige Werkzeug mit, sondern das absolute Meister-Know-how.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-[var(--color-border-subtle)] pt-12">
              <div className="flex items-center gap-1 text-[var(--color-brand)] mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
              </div>
              <p className="text-[var(--color-text-primary)] font-bold text-xl">
                Lassen Sie sich überzeugen, wenn Sie uns am meisten brauchen.
              </p>
              <p className="text-[var(--color-text-muted)] text-base">
                Speichern Sie unsere Nummer am besten gleich in Ihrem Handy ein.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </div>
  );
}
