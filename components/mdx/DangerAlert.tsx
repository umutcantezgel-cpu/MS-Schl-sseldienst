import { AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

export default function DangerAlert({ children, title = "Achtung Warnung" }: { children: ReactNode, title?: string }) {
  return (
    <div className="my-8 rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-red-50)] border-l-4 border-l-[var(--color-red-500)] shadow-sm not-prose">
      <div className="flex items-center gap-3 px-6 py-4 bg-[var(--color-red-500)]/10 border-b border-[var(--color-red-500)]/20">
        <AlertTriangle className="w-5 h-5 text-[var(--color-red-600)]" />
        <span className="font-bold text-[var(--color-red-700)]">{title}</span>
      </div>
      <div className="p-6 text-[var(--color-red-900)] prose-p:mb-0">
        {children}
      </div>
    </div>
  );
}
