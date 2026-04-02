"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, label, onClick, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`
        text-sm font-semibold transition-colors duration-200 py-2
        ${isActive 
          ? "text-blue-600 border-b-2 border-blue-600" 
          : "text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-gray-200 border-b-2 border-transparent"}
        ${className}
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
