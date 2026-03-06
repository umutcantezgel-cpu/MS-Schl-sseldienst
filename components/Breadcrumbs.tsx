import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { siteUrl } from '@/lib/schema';

export interface BreadcrumbItem {
    name: string;
    href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: item.name,
                item: `${siteUrl}${item.href}`
            }))
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav aria-label="Brotkrümelnavigation" className="flex items-center text-sm text-[var(--color-text-muted)] overflow-x-auto whitespace-nowrap px-4 py-3 sm:px-6 bg-[var(--color-surface-subtle)] border-b border-[var(--color-border-subtle)]">
                <ol className="max-w-7xl mx-auto w-full flex items-center">
                    <li className="flex items-center">
                        <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors flex items-center">
                            <Home className="h-4 w-4" aria-hidden="true" />
                            <span className="sr-only">Startseite</span>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={item.href} className="flex items-center">
                            <ChevronRight className="h-4 w-4 mx-2 text-[var(--color-stone-400)] flex-shrink-0" aria-hidden="true" />
                            <Link
                                href={item.href}
                                className={`transition-colors ${index === items.length - 1 ? 'text-[var(--color-text-primary)] font-medium pointer-events-none' : 'hover:text-[var(--color-text-primary)]'
                                    }`}
                                aria-current={index === items.length - 1 ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
