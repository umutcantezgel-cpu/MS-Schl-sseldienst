import { Lightbulb } from "lucide-react";
import { ReactNode } from "react";

export default function ProTip({ children, title = "Tipp vom Fachmann" }: { children: ReactNode, title?: string }) {
  return (
    <div className="my-8 rounded-[var(--radius-lg)] overflow-hidden bg-gradient-to-br from-[var(--color-slate-50)] to-white border border-[var(--border-subtle)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] not-prose">
      <div className="flex items-center gap-3 px-6 py-4 bg-[var(--color-slate-100)] border-b border-[var(--border-subtle)]">
        <Lightbulb className="w-5 h-5 text-[var(--color-emerald-500)]" />
        <span className="font-bold text-[color:var(--text-primary)]">{title}</span>
      </div>
      <div className="p-6 text-[color:var(--text-secondary)] prose-p:mb-0">
        {children}
      </div>
    </div>
  );
}
