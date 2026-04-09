"use client";

import { Building2, Home, Briefcase, Factory, School } from "lucide-react";
import { Typography } from "@/components/ui/typography/Typography";

const clients = [
  { name: "Hausverwaltung Schmidt", icon: Building2 },
  { name: "Immobilien Wetzlar", icon: Home },
  { name: "Gewerbepark Lahn", icon: Factory },
  { name: "Rechtsanwälte & Notare", icon: Briefcase },
  { name: "Städtische Einrichtungen", icon: School },
];

export default function ClientLogos() {
  return (
    <section aria-label="Unsere B2B Partner und Kunden" className="w-full py-12 md:py-16 bg-[var(--color-charcoal-50)] border-y border-[var(--color-charcoal-100)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-[var(--space-6)] text-center">
        <Typography variant="small" weight="semibold" className="text-[color:var(--text-tertiary)] uppercase tracking-widest mb-8 block">
          Vertrauen von regionalen Partnern & Unternehmen
        </Typography>
        
        {/* Desktop View */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {clients.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div 
                key={idx} 
                className="group flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-8 h-8 text-[var(--color-charcoal-800)] group-hover:text-[var(--value-primary)] transition-colors duration-300" />
                <span className="font-bold text-lg text-[color:var(--text-secondary)] group-hover:text-[color:var(--text-primary)] transition-colors duration-300 tracking-tight">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Marquee View */}
        <div className="flex md:hidden w-full overflow-hidden mask-image-fade">
          <div className="flex w-max animate-marquee items-center gap-10 pr-10">
            {[...clients, ...clients].map((client, idx) => {
              const Icon = client.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 grayscale opacity-60">
                  <Icon className="w-6 h-6 text-[var(--color-charcoal-800)]" />
                  <span className="font-bold text-base text-[color:var(--text-secondary)] tracking-tight whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
