import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export interface BreadcrumbItemProps {
  label: string;
  href?: string;
  active?: boolean;
  isLast?: boolean;
}

export function BreadcrumbItem({ label, href, active, isLast }: BreadcrumbItemProps) {
  return (
    <li className="flex items-center">
      {href ? (
        <Link 
          href={href}
          className={`text-sm ${active ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-blue-600 transition-colors'}`}
          aria-current={active ? "page" : undefined}
        >
          {label}
        </Link>
      ) : (
        <span 
          className={`text-sm ${active ? 'text-gray-900 font-medium' : 'text-gray-500'}`}
          aria-current={active ? "page" : undefined}
        >
          {label}
        </span>
      )}
      
      {!isLast && (
        <Icon size="sm" className="text-gray-400 mx-2">
          <svg fill="currentColor" viewBox="0 0 20 20">
             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Icon>
      )}
    </li>
  );
}

export interface BreadcrumbsProps {
  items: Array<{label: string, href?: string}>;
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex items-center flex-wrap">
        {items.map((item, index) => (
          <BreadcrumbItem 
            key={index}
            label={item.label}
            href={item.href}
            isLast={index === items.length - 1}
            active={index === items.length - 1}
          />
        ))}
      </ol>
    </nav>
  );
}
