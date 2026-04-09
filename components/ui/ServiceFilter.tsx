"use client";

import { useMemo, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Service } from "@/lib/types";
import { Key, Car, Shield, Wrench, ShieldCheck, Tag } from "lucide-react";
import { Grid } from "@/components/ui/Grid";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { setParam, getParam } from "@/lib/utils/url-params";

interface ServiceFilterProps {
  services: Service[];
}

export default function ServiceFilter({ services }: ServiceFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const activeCategory = getParam("category", searchParams) || "alle";

  const setActiveCategory = useCallback((cat: string) => {
    setParam("category", cat === "alle" ? null : cat, router, pathname, searchParams);
  }, [router, pathname, searchParams]);


  // Since we don't have explicit categories in ServiceArea, we will deduce them from IDs or tags,
  // or just provide hardcoded visual categories for demonstration based on the services we know.
  const categories = [
    { id: "alle", label: "Alle Leistungen", icon: null },
    { id: "tuer", label: "Tür & Haus", icon: Key },
    { id: "auto", label: "Auto", icon: Car },
    { id: "sicherheit", label: "Sicherheitstechnik", icon: Shield },
  ];

  const filteredServices = services.filter((service) => {
    if (activeCategory === "alle") return true;
    if (activeCategory === "tuer" && (service.id.includes("tuer") || service.id.includes("schliess"))) return true;
    if (activeCategory === "auto" && service.id.includes("auto")) return true;
    if (activeCategory === "sicherheit" && (service.id.includes("sicherheit") || service.id.includes("safe") || service.title.toLowerCase().includes("sicherheit"))) return true;
    return false;
  });

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 justify-center">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const Icon = cat.icon;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold
                transition-all duration-300 border
                ${isActive
                  ? "bg-[var(--color-red-500)] text-white border-[var(--color-red-500)] shadow-[var(--shadow-brand-1)]"
                  : "bg-white text-[color:var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--color-red-500)] hover:text-[var(--color-red-500)]"
                }
              `}
            >
              {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Filtered Services Grid */}
      <m.div layout className="relative">
        <AnimatePresence mode="popLayout">
          <Grid columns={3} gap="lg">
            {filteredServices.map((service, i) => (
              <m.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
                <ServiceCard service={service} />
              </m.div>
            ))}
          </Grid>
        </AnimatePresence>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 w-full col-span-full">
            <Tag className="w-12 h-12 text-[var(--color-charcoal-300)] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2">Keine Leistungen gefunden</h3>
            <p className="text-[color:var(--text-secondary)]">Versuchen Sie eine andere Kategorie.</p>
          </div>
        )}
      </m.div>
    </div>
  );
}
