import { getCompanyInfo } from "@/lib/data/company";
import { cn } from "@/lib/utils";
import { CheckCircle2, History, Briefcase, Users } from "lucide-react";

interface StatsSectionProps {
  className?: string;
}

export function StatsSection({ className }: StatsSectionProps) {
  const companyInfo = getCompanyInfo();
  
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - (companyInfo.foundedYear || 2012);
  
  const stats = [
    {
      id: "experience",
      value: `${yearsExperience}+`,
      label: "Jahre Erfahrung",
      icon: <History className="w-8 h-8 text-[var(--color-red-500)]" />
    },
    {
      id: "projects",
      value: `${(companyInfo.totalProjects || 15000).toLocaleString('de-DE')}+`,
      label: "Erfolgreiche Einsätze",
      icon: <Briefcase className="w-8 h-8 text-[var(--color-red-500)]" />
    },
    {
      id: "satisfaction",
      value: `${companyInfo.customerSatisfaction || 99}%`,
      label: "Kundenzufriedenheit",
      icon: <CheckCircle2 className="w-8 h-8 text-[var(--color-red-500)]" />
    },
    {
      id: "team",
      value: `${companyInfo.employeeCount || 8}`,
      label: "Experten im Team",
      icon: <Users className="w-8 h-8 text-[var(--color-red-500)]" />
    }
  ];

  return (
    <section className={cn("py-20 bg-white border-y border-slate-200 relative overflow-hidden", className)}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[var(--color-red-500)]/5 rounded-[100%] blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div 
              key={stat.id} 
              className={cn(
                "bg-slate-50 border border-slate-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300",
                i === 0 ? "lg:rounded-l-3xl" : "",
                i === stats.length - 1 ? "lg:rounded-r-3xl" : ""
              )}
            >
              <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm mb-6 border border-slate-100">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#0A1A2F] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
