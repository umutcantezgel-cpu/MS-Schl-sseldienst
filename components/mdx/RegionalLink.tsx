import Link from "next/link";
import { ReactNode } from "react";
import { MapPin } from "lucide-react";

interface Props {
  region: string;
  children: ReactNode;
  icon?: boolean;
}

/**
 * Normalizes a region name to a URL slug
 * z.B. "Aßlar" -> "asslar", "Lahn-Dill-Kreis" -> "lahn-dill-kreis"
 */
function normalizeRegionSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function RegionalLink({ region, children, icon = true }: Props) {
  const url = `/einsatzgebiete/${normalizeRegionSlug(region)}`;
  
  return (
    <Link 
      href={url} 
      className="inline-flex items-center gap-1 text-[var(--color-red-600)] hover:text-[var(--color-red-700)] font-medium no-underline hover:underline underline-offset-4"
    >
      {icon && <MapPin className="w-3.5 h-3.5 inline text-[var(--color-red-500)]" />}
      {children}
    </Link>
  );
}
