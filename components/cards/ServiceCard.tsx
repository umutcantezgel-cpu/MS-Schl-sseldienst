import Link from "next/link";
import { Service } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/Icon";

export interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  return (
    <div className={`flex flex-col border border-gray-200 rounded-lg p-6 bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 group ${className}`}>
      
      {/* Icon Placeholder (Kann in der Zukunft aus dem Icon-Library dynamisch importiert werden) */}
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        <Icon size="md">
           {/* Fallback Icon (Schlüssel-Shape) */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>
        </Icon>
      </div>

      <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
        {service.title}
      </div>
      
      <p className="text-gray-600 mb-6 flex-grow">
        {service.shortDescription}
      </p>

      {service.pricing && (
        <div className="mb-6 pb-6 border-b border-gray-100 font-medium text-gray-900">
          Ab {service.pricing.amount} {service.pricing.currency === "EUR" ? "€" : "$"}
        </div>
      )}

      <div className="mt-auto">
        <Button asChild variant="secondary" className="w-full group-hover:bg-blue-50">
          <Link href={`/leistungen/${service.slug}`} title={`Details zur Leistung: ${service.title}`}>
            Zu {service.title}
          </Link>
        </Button>
      </div>
    </div>
  );
}
