import { companyInfo } from "@/lib/data/company";
import { TrustAvatar } from "@/components/ui/TrustAvatar";
import { Phone, Shield, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";

/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 3: Panic-Mode Emergency Page (Crisis UX)
 * ══════════════════════════════════════════════════════════════════
 * BEHAVIORAL SIGNAL MANIPULATION:
 * - Served via silent NextResponse.rewrite() from middleware.ts
 * - URL stays as wetzlar-schlüsseldienst.de (no visible redirect)
 * - Targets: Mobile users between 22:00-06:00 Europe/Berlin
 *
 * DESIGN PRINCIPLES:
 * - Hick's Law: ZERO decisions. One action: CALL.
 * - DOM Stripping: No nav, no footer, no prose, no links.
 * - High-Contrast Dark Mode: Signal-Red CTA on pure black.
 * - Trust injection: Owner face (TrustAvatar) + night price.
 * - Bounce Rate → 0%: User either calls or... calls.
 * ══════════════════════════════════════════════════════════════════
 */

export const metadata: Metadata = {
  title: `Notdienst JETZT | ${companyInfo.localStore.name}`,
  description: `24h Schlüsselnotdienst ${companyInfo.localStore.city}. Jetzt anrufen: ${companyInfo.phone.formatted}. In 15-30 Min vor Ort. Festpreis.`,
  robots: { index: false, follow: false },
};

export default function EmergencyPage() {
  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center px-6 min-h-[100dvh] overflow-hidden select-none">
      {/* Ambient glow behind CTA */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Trust cluster: Avatar + Name + Badge */}
      <div className="relative z-10 flex flex-col items-center mb-8">
        <TrustAvatar size={80} showPulse={true} />
        <h1 className="mt-4 text-xl font-black tracking-tight text-center">
          {companyInfo.localStore.name}
        </h1>
        <div className="flex items-center gap-2 mt-2 text-green-400 text-sm font-bold">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Jetzt erreichbar
        </div>
      </div>

      {/* MEGA CTA — The only action on screen */}
      <a
        href={`tel:${companyInfo.phone.link}`}
        className="relative z-10 group flex items-center justify-center gap-4 w-full max-w-sm h-[80px] bg-[var(--color-red-500)] hover:bg-[var(--color-red-600)] text-white font-black text-2xl rounded-3xl shadow-[0_0_60px_rgba(220,38,38,0.5)] animate-pulse-slow transition-all duration-300 active:scale-95 ring-2 ring-red-400/30"
        aria-label={`Sofort anrufen: ${companyInfo.phone.formatted}`}
      >
        <Phone className="w-8 h-8" />
        <span>{companyInfo.phone.formatted}</span>
      </a>

      {/* Trust pills — minimal, high-density info */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-8 text-xs text-gray-400">
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
          <Clock className="w-3 h-3 text-green-400" />
          <span>15-30 Min</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
          <Shield className="w-3 h-3 text-blue-400" />
          <span>Festpreis 149€</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
          <MapPin className="w-3 h-3 text-amber-400" />
          <span>Lokaler Betrieb</span>
        </div>
      </div>

      {/* Legal micro-text */}
      <p className="relative z-10 mt-6 text-[10px] text-gray-600 text-center max-w-xs leading-relaxed">
        Nachttarif (20:00-06:00): Türöffnung zugefallen ab 149€ Festpreis.
        {companyInfo.financial.pricingTexts?.legalNote ?? ""}{" "}
        {companyInfo.localStore.street}, {companyInfo.localStore.postalCode} {companyInfo.localStore.city}.
      </p>

      {/* Inject custom animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pulse-slow {
              0%, 100% { box-shadow: 0 0 30px rgba(220,38,38,0.4); }
              50% { box-shadow: 0 0 60px rgba(220,38,38,0.7); }
            }
            .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
          `,
        }}
      />
    </div>
  );
}
