import { Clock, ShieldCheck, Check } from "lucide-react";

export default function TrustBadges() {
    return (
        <div role="list" aria-label="Vertrauensvorteile" className="flex flex-row flex-wrap items-center justify-center gap-x-[var(--space-4)] gap-y-[var(--space-2)] mt-[var(--space-6)]">
            <div role="listitem" className="flex items-center gap-[var(--space-1)] text-[13px] text-[var(--color-text-muted)]">
                <Clock className="h-5 w-5 text-[var(--color-brand)]" aria-hidden="true" />
                <span>In 25 Min. bei Ihnen</span>
            </div>
            <div role="listitem" className="flex items-center gap-[var(--space-1)] text-[13px] text-[var(--color-text-muted)]">
                <ShieldCheck className="h-5 w-5 text-[var(--color-brand)]" aria-hidden="true" />
                <span>Beschädigungsfreie Öffnung</span>
            </div>
            <div role="listitem" className="flex items-center gap-[var(--space-1)] text-[13px] text-[var(--color-text-muted)]">
                <Check className="h-5 w-5 text-[var(--color-brand)]" aria-hidden="true" />
                <span>TÜV-geprüfte Tools</span>
            </div>
        </div>
    );
}
