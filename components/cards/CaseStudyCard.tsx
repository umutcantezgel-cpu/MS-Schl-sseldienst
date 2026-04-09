import { SeoLink } from "@/components/nav/SeoLink";
import { CaseStudy } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  // Take first 2 highlights or results
  const displayHighlights = caseStudy.results?.slice(0, 2) || [];

  return (
    <SeoLink 
      href={`/referenzen/${caseStudy.slug}`}
      className="group block h-full bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      uniqueContext={caseStudy.title}
    >
      <div className="bg-gradient-to-br from-[#0A1A2F] to-[#122A4E] text-white p-6 relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors" />
        
        <div className="relative z-10">
          <div className="flex gap-2 mb-4">
            <span className="inline-block bg-white/20 px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
              {caseStudy.industry}
            </span>
            {caseStudy.serviceSlug && (
              <span className="inline-block bg-[var(--color-red-500)] px-2.5 py-1 rounded-full text-xs font-semibold text-white">
                Service
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-blue-100 transition-colors">{caseStudy.title}</h3>
          <p className="text-blue-200 text-sm font-medium">{caseStudy.client}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-600 text-sm mb-6 line-clamp-3">
          {caseStudy.challenge || caseStudy.solution}
        </p>
        
        {displayHighlights.length > 0 && (
          <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
            {displayHighlights.map((result, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-slate-500">{result.metric}</span>
                <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-xs">{result.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center text-[var(--color-red-500)] font-semibold text-sm mt-auto group-hover:text-[var(--color-red-600)] transition-colors">
          <span>Projekt ansehen</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </SeoLink>
  );
}
