import { User2 } from "lucide-react";

interface AuthorBioProps {
  authorName: string;
}

export default function AuthorBio({ authorName }: AuthorBioProps) {
  // Simples Mapping für die verschiedenen Autoren (kann in Zukunft erweitert werden)
  const formatName = (name: string) => {
    switch(name) {
      case "mustafa-s": return "Mustafa (Leitender Monteur)";
      case "lukas-m": return "Lukas (Sicherheitstechniker)";
      case "julia-b": return "Julia (Redaktion Sicherheit)";
      case "ahmet-y": return "Ahmet (Auto-Öffnungsexperte)";
      case "sven-w": return "Sven (Smart Home Berater)";
      default: return name;
    }
  };

  return (
    <div className="mt-12 pt-10 border-t border-[var(--border-subtle)] flex items-start gap-5 bg-white p-6 rounded-[var(--radius-lg)]">
      <div className="w-16 h-16 rounded-full bg-[var(--color-off-white)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
        <User2 className="w-8 h-8 text-[color:var(--text-tertiary)]" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-[color:var(--text-primary)] mb-1">
          Geschrieben von {formatName(authorName)}
        </h3>
        <p className="text-[color:var(--text-secondary)] text-sm leading-relaxed mb-3">
          Dieser Beitrag wurde verfasst aus der täglichen Einsatz-Praxis von Schlüssel Schmiede Wetzlar. Alle Angaben entsprechen dem Stand modernster Sicherheitstechnik und jahrelanger Erfahrung im 24/7 Notdienst.
        </p>
      </div>
    </div>
  );
}
