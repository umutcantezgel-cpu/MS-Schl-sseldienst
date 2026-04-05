import Link from "next/link";
import Image from "next/image";
import { Service } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/Icon";

export interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <div className={`flex flex-col border border-[var(--border-subtle)] rounded-2xl bg-white hover:shadow-xl hover:shadow-[var(--color-red-500)]/5 hover:border-[var(--color-red-200)] transition-all duration-500 group overflow-hidden ${className}`}>
      
      {/* High-End Image Cover */}
      {service.image ? (
        <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[var(--color-charcoal-900)]">
          <Image 
            src={service.image}
            alt={service.imageAlt || service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ) : (
        <div className="w-12 h-12 bg-gray-50 text-gray-500 rounded-lg flex items-center justify-center m-6 mb-0 group-hover:bg-[var(--color-red-500)] group-hover:text-white transition-colors duration-300">
          <Icon size="md">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>
          </Icon>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xl font-bold text-[color:var(--text-primary)] mb-3 group-hover:text-[var(--color-red-600)] transition-colors duration-300">
          {service.title}
        </div>
        
        <p className="text-[color:var(--text-secondary)] text-[15px] leading-relaxed mb-6 flex-grow line-clamp-3 sm:line-clamp-none">
          {service.shortDescription}
        </p>

        {service.pricing && (
          <div className="mb-6 pb-6 border-b border-[var(--border-subtle)] font-semibold text-[color:var(--text-primary)]">
            Ab {service.pricing.amount} {service.pricing.currency === "EUR" ? "€" : "$"}
          </div>
        )}

        <div className="mt-auto">
          <Button asChild variant="secondary" className="w-full text-[color:var(--text-primary)] font-semibold border border-[var(--border-subtle)] bg-[var(--color-off-white)] group-hover:bg-[var(--color-red-500)] group-hover:text-white group-hover:border-[var(--color-red-600)] group-hover:shadow-[var(--shadow-cta-hover)] transition-all duration-300">
            <Link href={`/leistungen/${service.slug}`} title={`Details zur Leistung: ${service.title}`}>
              Mehr erfahren
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
