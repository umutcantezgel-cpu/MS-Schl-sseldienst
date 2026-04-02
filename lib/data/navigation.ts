import { getAllServices } from "./services";
import { allLocations } from "./allLocations";

export interface NavigationLink {
  href: string;
  label: string;
  activeMatch?: 'exact' | 'prefix';
  isExternal?: boolean;
  description?: string;
  icon?: string;
}

export interface NavigationGroup {
  label: string;
  items: NavigationLink[];
}

export interface NavigationConfig {
  main: NavigationLink[];
  services: NavigationGroup;
  locations: NavigationGroup;
  company: NavigationGroup;
  legal: NavigationLink[];
  social: NavigationLink[];
}

export function getNavigationConfig(): NavigationConfig {
  const services = getAllServices();
  
  // Nimm die Top 6 Locations für das Mega-Menu Dropdown
  const topLocations = allLocations.slice(0, 6);

  return {
    main: [
      { href: '/', label: 'Startseite', activeMatch: 'exact' },
      { href: '/leistungen', label: 'Unsere Leistungen', activeMatch: 'prefix' },
      { href: '/preise', label: 'Preise & Kosten', activeMatch: 'exact' },
      { href: '/blog', label: 'Ratgeber & Blog', activeMatch: 'prefix' },
      { href: '/kontakt', label: 'Kontakt & Notdienst', activeMatch: 'exact' },
    ],
    services: {
      label: 'Unsere Leistungen',
      items: services.map(s => ({
        href: `/leistungen/${s.slug}`,
        label: s.title,
        description: s.shortDescription,
        icon: s.icon,
        activeMatch: 'exact'
      }))
    },
    locations: {
      label: 'Einsatzgebiete',
      items: topLocations.map(l => ({
        href: `/${l.slug}`,
        label: l.name,
        description: `Ca. ${l.logistics.drivingTimeMinutes} Min. Anfahrt`,
        icon: "MapPin",
        activeMatch: 'exact'
      }))
    },
    company: {
      label: 'Unternehmen',
      items: [
        { href: '/ueber-uns', label: 'Über uns', activeMatch: 'exact' },
        { href: '/ueber-uns/team', label: 'Das Team', activeMatch: 'exact' },
        { href: '/referenzen', label: 'Referenzen', activeMatch: 'exact' },
      ]
    },
    legal: [
      { href: '/impressum', label: 'Impressum', activeMatch: 'exact' },
      { href: '/datenschutz', label: 'Datenschutz', activeMatch: 'exact' },
      { href: '/agb', label: 'AGB', activeMatch: 'exact' },
      { href: '/widerruf', label: 'Widerrufsbelehrung', activeMatch: 'exact' },
    ],
    social: []
  };
}

export function getAllNavigationLinks(): NavigationLink[] {
  const config = getNavigationConfig();
  return [
    ...config.main,
    ...config.services.items,
    ...config.locations.items,
    ...config.company.items,
    ...config.legal,
    ...config.social,
  ];
}

export function findNavigationLink(href: string): NavigationLink | undefined {
  return getAllNavigationLinks().find(
    link =>
      (link.activeMatch === 'exact' && link.href === href) ||
      (link.activeMatch === 'prefix' && href.startsWith(link.href) && href !== '/')
  );
}
