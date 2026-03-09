import { ShieldCheck, MapPin, Heart, Clock, Star, Wrench, ThumbsUp, Medal, Users } from "lucide-react";
import EmergencyCTA from "@/components/EmergencyCTA";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

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

          {/* Statistics Bar (Prompt 5.3) */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-[var(--space-6)] text-center divide-x divide-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)] p-[var(--space-8)] rounded-3xl ring-1 ring-[var(--color-border)]">
            <div className="flex flex-col gap-2 relative">
              <div className="text-4xl font-extrabold text-[var(--color-brand)]">
                <AnimatedCounter end={15} suffix="+" duration={1500} />
              </div>
              <div className="text-sm font-bold text-[var(--color-text-body)] uppercase tracking-wider">Jahre Erfahrung</div>
              <Medal className="absolute -top-4 -right-2 text-[var(--color-brand)]/10 w-16 h-16" />
            </div>
            <div className="flex flex-col gap-2 relative">
              <div className="text-4xl font-extrabold text-[var(--color-brand)]">
                <AnimatedCounter end={50} suffix="+" duration={2000} />
              </div>
              <div className="text-sm font-bold text-[var(--color-text-body)] uppercase tracking-wider">Notöffnungen/Monat</div>
              <Users className="absolute -top-4 -right-2 text-[var(--color-brand)]/10 w-16 h-16" />
            </div>
            <div className="flex flex-col gap-2 relative border-t md:border-t-0 border-[var(--color-border-subtle)] pt-6 md:pt-0">
              <div className="text-4xl font-extrabold text-[var(--color-brand)]">
                <AnimatedCounter end={99} suffix="%" duration={2000} />
              </div>
              <div className="text-sm font-bold text-[var(--color-text-body)] uppercase tracking-wider">Zerstörungsfrei</div>
              <ThumbsUp className="absolute -top-4 -right-2 text-[var(--color-brand)]/10 w-16 h-16" />
            </div>
            <div className="flex flex-col gap-2 relative border-t md:border-t-0 border-[var(--color-border-subtle)] pt-6 md:pt-0">
              <div className="text-4xl font-extrabold text-[var(--color-brand)]">
                <AnimatedCounter end={25} suffix=" Min" duration={1200} />
              </div>
              <div className="text-sm font-bold text-[var(--color-text-body)] uppercase tracking-wider">Mittel. Anfahrtszeit</div>
              <Clock className="absolute -top-4 -right-2 text-[var(--color-brand)]/10 w-16 h-16" />
            </div>
          </div>

          {/* Act 3: The Solution / The Values (Prompt 5.1) */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[var(--color-surface-subtle)] p-8 rounded-3xl ring-1 ring-[var(--color-border)] hover:ring-[var(--color-brand)] transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white mb-6 shadow-lg shadow-[var(--color-brand)]/20">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Maximale Sorgfalt</h3>
              <p className="text-[var(--color-text-body)]">
                Wir behandeln jede Tür so vorsichtig, als wäre es unsere eigene. Zu 99% öffnen wir zerstörungsfrei. Darum vertrauen uns seit Jahren zahllose private Haushalte.
              </p>
            </div>

            <div className="bg-[var(--color-surface-subtle)] p-8 rounded-3xl ring-1 ring-[var(--color-border)] hover:ring-[var(--color-brand)] transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white mb-6 shadow-lg shadow-[var(--color-brand)]/20">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Zeit ist Empathie</h3>
              <p className="text-[var(--color-text-body)]">
                Wer vor verschlossener Tür steht, oft bei Regen oder Kälte, braucht keine Warteschleifen. Wir garantieren in und um Wetzlar eine Anfahrt von unter 25 Minuten.
              </p>
            </div>

            <div className="bg-[var(--color-surface-subtle)] p-8 rounded-3xl ring-1 ring-[var(--color-border)] hover:ring-[var(--color-brand)] transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white mb-6 shadow-lg shadow-[var(--color-brand)]/20">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Meisterliche Expertise</h3>
              <p className="text-[var(--color-text-body)]">
                Echtes Handwerk: Wir sind mit Spezialwerkzeug ausgestattet, mit dem selbst moderne Hochsicherheitsschlösser professionell und nachhaltig bearbeitet werden können.
              </p>
            </div>
          </div>

          {/* Act 4 & 5: The Proof & Invitation */}
          <div className="mx-auto mt-16 max-w-3xl">

            {/* Uwe-Sarfeld Ausbildungs-Badge (Prompt 2.5) */}
            <div className="bg-[var(--color-stone-900)] text-white p-[var(--space-8)] rounded-[var(--radius-16)] border border-white/10 shadow-[var(--shadow-lg)] relative overflow-hidden flex flex-col md:flex-row items-center text-center md:text-left gap-[var(--space-6)]">
              {/* Subtle Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand)]/10 rounded-full blur-[60px] pointer-events-none"></div>

              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-stone-800)] border border-[var(--color-stone-700)] shrink-0 text-[var(--font-size-24)] font-bold text-[var(--color-stone-300)] shadow-inner">
                US
              </div>

              <div className="flex flex-col z-10">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-brand)]" />
                  <span className="text-[var(--font-size-13)] font-bold tracking-widest uppercase text-[var(--color-brand)]">Meisterhaftes Handwerk</span>
                </div>
                <h2 className="text-[var(--font-size-24)] font-bold tracking-tight mb-2">
                  Zertifiziert durch Uwe Sarfeld
                </h2>
                <p className="text-[var(--color-stone-300)] text-[var(--font-size-16)] leading-relaxed font-medium">
                  Unser Chef-Techniker wurde von Uwe Sarfeld, einem der bekanntesten Schlüsseldienst-Experten Deutschlands (TV-Experte bei Kabel 1 & WDR), ausgebildet.
                  Wir bringen nicht nur das richtige Werkzeug mit, sondern absolutes Meister-Know-how.
                </p>
                <a href="https://youtu.be/BeispielLinkDoku" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center md:justify-start gap-2 mt-4 text-[var(--font-size-14)] font-bold text-white hover:text-[var(--color-brand-muted)] transition-colors group w-fit">
                  <span>Doku auf YouTube ansehen</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>

          <div className="prose prose-lg prose-slate mx-auto mt-16 text-center">

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
