import { getAllCaseStudies } from "@/lib/data/case-studies";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

interface ClientLogosProps {
  className?: string;
}

export function ClientLogos({ className }: ClientLogosProps) {
  const caseStudies = getAllCaseStudies();
  const clients = caseStudies.map(c => c.client).slice(0, 6);

  // If we have fewer than 6, we can duplicate to fill the marquee
  const displayClients = [...clients, ...clients].slice(0, 6);

  if (displayClients.length === 0) return null;

  return (
    <section className={cn("py-16 bg-white border-y border-slate-100 overflow-hidden", className)}>
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
          Unseren Sicherheitsexperten vertrauen
        </h3>
        
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Logo Track */}
          <div className="flex items-center justify-between gap-8 overflow-x-auto snap-x hide-scrollbar scroll-smooth">
            {displayClients.map((client, idx) => (
              <div 
                key={idx} 
                className="flex-none snap-center flex items-center justify-center gap-3 py-6 px-8 bg-slate-50 border border-slate-100 rounded-2xl min-w-[200px] grayscale hover:grayscale-0 hover:bg-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-500 group cursor-default"
              >
                <Building2 className="w-6 h-6 text-slate-400 group-hover:text-[var(--color-red-500)] transition-colors" />
                <span className="font-bold text-slate-500 group-hover:text-[#0A1A2F] text-sm truncate max-w-[140px] transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
