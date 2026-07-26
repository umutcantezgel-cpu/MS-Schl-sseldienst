import { Clock, ShieldCheck, Check } from"lucide-react";

export interface TrustBadgeItem {
  icon?: any;
  text: string;
}

interface TrustBadgesProps {
  badges?: TrustBadgeItem[];
}

const defaultBadges: TrustBadgeItem[] = [
  { icon: Clock, text: "In 25 Min. bei Ihnen" },
  { icon: ShieldCheck, text: "Beschädigungsfreie Öffnung" },
  { icon: Check, text: "TÜV-geprüfte Tools" },
];

export default function TrustBadges({ badges = defaultBadges }: TrustBadgesProps) {
  return (
    <div role="list" aria-label="Vertrauensvorteile" className="flex flex-row flex-wrap items-center justify-center gap-x-[var(--space-4)] gap-y-[var(--space-2)] mt-[var(--space-6)]">
      {badges.map((badge, i) => {
        const IconComp = badge.icon || Check;
        return (
          <div key={i} role="listitem" className="flex items-center gap-[var(--space-1)] text-sm text-[color:var(--text-tertiary)]">
            <IconComp className="h-5 w-5 text-[var(--value-icon-color)]" aria-hidden="true" />
            <span>{badge.text}</span>
          </div>
        );
      })}
    </div>
  );
}
