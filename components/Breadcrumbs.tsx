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
      <nav
        aria-label="Breadcrumb-Navigation"
        className={`flex items-center justify-center text-xs tracking-wide overflow-x-auto scrollbar-hide whitespace-nowrap py-2 px-1 -mx-1 snap-x snap-mandatory scroll-smooth ${
          light
            ? "text-white/50"
            : "text-[color:var(--text-tertiary)] opacity-60"
        }`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <ol className="flex items-center gap-1">
          <li className="flex items-center snap-start">
            <Link
              href="/"
              className={`transition-colors flex items-center gap-1 py-1 px-1.5 rounded-md min-h-[32px] min-w-[32px] justify-center ${
                light
                  ? "hover:text-white/80 active:bg-white/10"
                  : "hover:text-[color:var(--text-secondary)] active:bg-black/5"
              }`}
            >
              <Home className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center snap-start">
              <ChevronRight
                className={`h-3 w-3 mx-0.5 flex-shrink-0 ${
                  light ? "text-white/30" : "text-[var(--color-charcoal-300)]"
                }`}
                aria-hidden="true"
              />
              <Link
                href={item.href}
                className={`transition-colors py-1 px-1.5 rounded-md min-h-[32px] flex items-center ${
                  index === items.length - 1
                    ? light
                      ? "text-white/70 font-medium pointer-events-none"
                      : "text-[color:var(--text-secondary)] font-medium pointer-events-none"
                    : light
                      ? "hover:text-white/80 active:bg-white/10"
                      : "hover:text-[color:var(--text-primary)] active:bg-black/5"
                }`}
                aria-current={index === items.length - 1 ? "page" : undefined}
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
