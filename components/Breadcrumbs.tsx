import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { siteUrl } from '@/lib/schema';

export interface BreadcrumbItem {
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
      <nav aria-label="Breadcrumb-Navigation" className={`flex items-center text-sm overflow-x-auto whitespace-nowrap px-4 py-3 sm:px-6 border-b ${light ?"text-white/60 bg-transparent border-white/10" :"text-[color:var(--text-tertiary)] bg-[var(--surface-secondary)] border-[var(--border-subtle)]"}`}>
        <ol className="max-w-7xl mx-auto w-full flex items-center">
          <li className="flex items-center">
            <Link href="/" className={`transition-colors flex items-center ${light ?"hover:text-white" :"hover:text-[color:var(--text-primary)]"}`}>
              <Home className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Startseite</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className={`h-4 w-4 mx-2 flex-shrink-0 ${light ?"text-white/40" :"text-[var(--color-charcoal-400)]"}`} aria-hidden="true" />
              <Link
                href={item.href}
                className={`transition-colors ${index === items.length - 1 ? (light ? 'text-white font-medium pointer-events-none' : 'text-[color:var(--text-primary)] font-medium pointer-events-none') : (light ? 'hover:text-white' : 'hover:text-[color:var(--text-primary)]')
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
