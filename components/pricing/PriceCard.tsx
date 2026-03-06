import { Check, Info } from "lucide-react";
import { GUARANTEES } from "./pricing.constants";

interface PriceCardProps {
    title: string;
    price: number;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export default function PriceCard({
    title,
    price,
    description,
    features,
    isPopular = false,
}: PriceCardProps) {
    return (
        <div
            className={`relative flex flex-col rounded-[var(--space-4)] bg-white p-[var(--space-7)] sm:p-[var(--space-8)] ring-1 hover-lift ${isPopular
                ? "ring-[var(--color-brand)] border-t-[3px] border-[var(--color-brand)] elevation-3"
                : "ring-[var(--color-border)] elevation-1"
                }`}
        >
            {isPopular && (
                <div
                    className="absolute -top-[var(--space-4)] left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-cta-bg)] px-[var(--space-4)] py-[var(--space-1)] font-[600] text-white uppercase elevation-2"
                    style={{ fontSize: 'var(--text-tiny)', letterSpacing: 'var(--tracking-caps)' }}
                >
                    Am häufigsten gewählt
                </div>
            )}

            <div className="mb-[var(--space-6)]">
                <h3
                    className="font-[600] text-[var(--color-text-primary)]"
                    style={{
                        fontSize: 'var(--text-h4)',
                        lineHeight: 'var(--leading-subh)',
                        letterSpacing: 'var(--tracking-heading)',
                    }}
                >
                    {title}
                </h3>
                <p
                    className="mt-[var(--space-2)] text-[var(--color-text-body)] font-[400]"
                    style={{
                        fontSize: 'var(--text-body)',
                        lineHeight: 'var(--leading-body)',
                    }}
                >
                    {description}
                </p>
            </div>

            <div className="mb-[var(--space-7)] flex items-baseline gap-[var(--space-1)]">
                <span
                    className="text-[var(--color-text-muted)] font-[400]"
                    style={{ fontSize: 'var(--text-small)' }}
                >
                    ab
                </span>
                <span
                    className="font-[800] text-[var(--color-brand)]"
                    style={{
                        fontSize: 'var(--text-h1)',
                        lineHeight: 'var(--leading-hero)',
                        letterSpacing: 'var(--tracking-tight)',
                    }}
                >
                    {price}
                </span>
                <span
                    className="font-[700] text-[var(--color-text-primary)]"
                    style={{
                        fontSize: 'var(--text-h4)',
                        lineHeight: 'var(--leading-h)',
                    }}
                >
                    €
                </span>
            </div>

            <ul role="list" className="mb-[var(--space-7)] space-y-[var(--space-4)] flex-1">
                {features.map((feature, index) => (
                    <li key={index} className="flex gap-[var(--space-3)]">
                        <Check className="h-5 w-5 shrink-0 text-[var(--color-brand)]" aria-hidden="true" />
                        <span
                            className="text-[var(--color-text-body)] font-[400]"
                            style={{
                                fontSize: 'var(--text-body)',
                                lineHeight: 'var(--leading-body)',
                            }}
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
