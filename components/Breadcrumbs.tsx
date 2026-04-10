import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { siteUrl } from '@/lib/schema';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items, light = false }: { items: BreadcrumbItem[], light?: boolean }) {
  const schema = {"@context":"https://schema.org","@type":"BreadcrumbList",
    itemListElement: [
      {"@type":"ListItem",
        position: 1,
        name:"Home",
        item: siteUrl
      },
      ...items.map((item, index) => ({"@type":"ListItem",
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
      <nav aria-label="Breadcrumb-Navigation" className={`flex items-center justify-center text-xs tracking-wide overflow-x-auto whitespace-nowrap py-1 ${light ? "text-white/50" : "text-[color:var(--text-tertiary)] opacity-60"}`}>
        <ol className="flex items-center gap-1">
          <li className="flex items-center">
            <Link href="/" className={`transition-colors flex items-center gap-1 ${light ? "hover:text-white/80" : "hover:text-[color:var(--text-secondary)]"}`}>
              <Home className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className={`h-3 w-3 mx-0.5 flex-shrink-0 ${light ? "text-white/30" : "text-[var(--color-charcoal-300)]"}`} aria-hidden="true" />
              <Link
                href={item.href}
                className={`transition-colors ${index === items.length - 1 ? (light ? 'text-white/70 font-medium pointer-events-none' : 'text-[color:var(--text-secondary)] font-medium pointer-events-none') : (light ? 'hover:text-white/80' : 'hover:text-[color:var(--text-primary)]')}`}
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
