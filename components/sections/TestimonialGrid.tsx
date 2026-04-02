"use client";

import { useState } from "react";
import { Testimonial } from "@/lib/types";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { cn } from "@/lib/utils";

interface TestimonialGridProps {
  testimonials: Testimonial[];
  className?: string;
  showFilters?: boolean;
}

export function TestimonialGrid({ 
  testimonials, 
  className,
  showFilters = false
}: TestimonialGridProps) {
  const [selectedService, setSelectedService] = useState<string>("all");

  const uniqueServices = testimonials.reduce((acc, current) => {
    if (current.serviceSlug && !acc.includes(current.serviceSlug)) {
      acc.push(current.serviceSlug);
    }
    return acc;
  }, [] as string[]);

  const filteredTestimonials = selectedService === "all" 
    ? testimonials 
    : testimonials.filter(t => t.serviceSlug === selectedService);

  return (
    <div className={cn("w-full", className)}>
      {showFilters && uniqueServices.length > 0 && (
        <div className="flex flex-wrap gap-3 items-center justify-center mb-12">
          <button
            onClick={() => setSelectedService("all")}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-semibold transition-all border",
              selectedService === "all"
                ? "bg-[#0A1A2F] text-white border-[#0A1A2F] shadow-md"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            )}
          >
            Alle Kundenstimmen
          </button>
          
          {uniqueServices.map(service => {
            // Format slug to readable name (e.g. tur-offnung -> Türöffnung)
            // A simple Capitalize works for slugs like 'tresoroeffnung'
            const formattedName = service
              .replace(/-/g, ' ')
              .replace(/\b\w/g, l => l.toUpperCase())
              .replace('oe', 'ö')
              .replace('ae', 'ä')
              .replace('ue', 'ü');

            return (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all border",
                  selectedService === service
                    ? "bg-[#0A1A2F] text-white border-[#0A1A2F] shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {formattedName}
              </button>
            )
          })}
        </div>
      )}

      {filteredTestimonials.length === 0 ? (
        <div className="text-center py-12 text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
          Keine Kundenstimmen für diesen Bereich gefunden.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map(testimonial => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard testimonial={testimonial} variant="kompakt" className="h-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
