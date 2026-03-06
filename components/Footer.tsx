import { Key, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[var(--color-stone-900)] text-white">
      <div className="mx-auto max-w-7xl px-[var(--section-px)] py-[var(--section-py)]">
        <div className="grid gap-[var(--space-9)] sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-[var(--space-2)] font-[700]" style={{ fontSize: 'var(--text-lead)' }}>
              <Key className="h-5 w-5 text-[var(--color-brand-muted)]" aria-hidden="true" />
              Schlüsseldienst Wetzlar
            </Link>
            <p
              className="mt-[var(--space-4)] text-[var(--color-stone-400)] font-[400]"
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--leading-body)',
              }}
            >
              Ihr zuverlässiger Partner für alle Schloss- und Sicherheitsfragen
              in Wetzlar und Umgebung. 24/7 erreichbar.
            </p>
          </div>

          {/* Contact */}
          <nav aria-label="Kontakt">
            <h3
              className="font-[700] uppercase text-[var(--color-stone-400)]"
              style={{ fontSize: 'var(--text-tiny)', letterSpacing: 'var(--tracking-caps)' }}
            >
              Kontakt
            </h3>
            <address
              className="not-italic mt-[var(--space-4)] space-y-[var(--space-3)] text-[var(--color-stone-300)]"
              style={{ fontSize: 'var(--text-small)', lineHeight: 'var(--leading-small)' }}
            >
              <div className="flex items-center gap-[var(--space-2)]">
                <Phone className="h-5 w-5 text-[var(--color-brand-muted)]" aria-hidden="true" />
                <a href="tel:06441123456" className="hover:text-white transition-colors font-[400]">06441 123 456</a>
              </div>
              <div className="flex items-center gap-[var(--space-2)]">
                <Mail className="h-5 w-5 text-[var(--color-brand-muted)]" aria-hidden="true" />
                <a href="mailto:info@sd-wetzlar.de" className="hover:text-white transition-colors font-[400]">info@sd-wetzlar.de</a>
              </div>
              <div className="flex items-center gap-[var(--space-2)]">
                <MapPin className="h-5 w-5 text-[var(--color-brand-muted)]" aria-hidden="true" />
                <span className="font-[400]">Wetzlarer Str. 1, 35578 Wetzlar</span>
              </div>
              <div className="flex items-center gap-[var(--space-2)]">
                <Clock className="h-5 w-5 text-[var(--color-brand-muted)]" aria-hidden="true" />
                <span className="font-[400]">24/7 Notdienst</span>
              </div>
            </address>
          </nav>

          {/* Service areas */}
          <nav aria-label="Einsatzgebiete">
            <h3
              className="font-[700] uppercase text-[var(--color-stone-400)]"
              style={{ fontSize: 'var(--text-tiny)', letterSpacing: 'var(--tracking-caps)' }}
            >
              Einsatzgebiete
            </h3>
            <ul
              className="mt-[var(--space-4)] space-y-[var(--space-2)] text-[var(--color-stone-300)]"
              style={{ fontSize: 'var(--text-small)' }}
            >
              {["Wetzlar", "Gießen", "Marburg", "Aßlar", "Solms"].map((city) => (
                <li key={city}>
                  <Link href={`/${city.toLowerCase().replace("ß", "ss")}`} className="hover:text-white transition-colors link-underline font-[400]">
                    Schlüsseldienst {city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicegebiet" className="text-[var(--color-brand-muted)] hover:text-white transition-colors font-[600]">
                  Alle Gebiete →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Rechtliches">
            <h3
              className="font-[700] uppercase text-[var(--color-stone-400)]"
              style={{ fontSize: 'var(--text-tiny)', letterSpacing: 'var(--tracking-caps)' }}
            >
              Rechtliches
            </h3>
            <ul
              className="mt-[var(--space-4)] space-y-[var(--space-2)] text-[var(--color-stone-300)]"
              style={{ fontSize: 'var(--text-small)' }}
            >
              <li><Link href="/impressum" className="hover:text-white transition-colors link-underline font-[400]">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors link-underline font-[400]">Datenschutz</Link></li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-[var(--space-9)] border-t border-[var(--color-stone-700)] pt-[var(--space-7)] text-center text-[var(--color-stone-400)] font-[400]"
          style={{ fontSize: 'var(--text-tiny)', letterSpacing: 'var(--tracking-loose)' }}
        >
          © {new Date().getFullYear()} Schlüsseldienst Wetzlar. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
