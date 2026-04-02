import { ReactNode } from "react";

interface Step {
  title: string;
  description: ReactNode;
}

export default function StepByStep({ steps }: { steps: Step[] | string }) {
  let parsedSteps: Step[] = [];
  if (Array.isArray(steps)) parsedSteps = steps;
  else if (typeof steps === 'string') {
    try { parsedSteps = JSON.parse(steps); } catch (e) { console.error('Failed to parse steps prop', e); }
  }

  if (!parsedSteps || parsedSteps.length === 0) return null;

  return (
    <div className="my-10 space-y-6 not-prose">
      {parsedSteps.map((step, idx) => (
        <div key={idx} className="flex gap-4 lg:gap-6 bg-white p-6 rounded-[var(--radius-xl)] border border-[var(--border-subtle)] shadow-sm">
          <div className="flex-shrink-0 relative">
            <div className="w-12 h-12 rounded-full bg-[var(--color-red-500)] text-white flex items-center justify-center font-black text-xl shadow-[0_4px_14px_rgba(220,38,38,0.3)] border-2 border-white">
              {idx + 1}
            </div>
            {/* Connection line */}
            {idx < steps.length - 1 && (
              <div className="absolute top-12 bottom-[-24px] left-1/2 -ml-0.5 w-1 bg-gradient-to-b from-[var(--color-red-500)]/20 to-transparent rounded-full" />
            )}
          </div>
          <div className="flex-1 pt-2">
            <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-2 leading-tight">
              {step.title}
            </h3>
            <div className="text-[color:var(--text-secondary)] leading-relaxed">
              {step.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
