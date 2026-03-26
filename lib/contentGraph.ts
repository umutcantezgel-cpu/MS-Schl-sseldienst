interface ContentNode {
    slug: string;
    title: string;
    type: 'service' | 'area' | 'blog' | 'info' | 'legal';
    keywords: string[];
    relatedSlugs: string[];
    parentSlug?: string;
}

export const CONTENT_GRAPH: ContentNode[] = [
    {
        slug: '/',
        title: 'Schlüsseldienst Wetzlar',
        type: 'info',
        keywords: ['schlüsseldienst', 'wetzlar', 'notdienst'],
        relatedSlugs: ['/preise', '/leistungen/turoeffnung', '/leistungen/sicherheitstechnik']
    },
    {
        slug: '/leistungen/turoeffnung',
        title: 'Türöffnung Wetzlar',
        type: 'service',
        keywords: ['türöffnung', 'ausgesperrt', 'tür öffnen'],
        relatedSlugs: ['/preise', '/leistungen/sicherheitstechnik', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/autooeffnung',
        title: 'Autoöffnung Wetzlar',
        type: 'service',
        keywords: ['autoöffnung', 'ausgesperrt', 'auto öffnen'],
        relatedSlugs: ['/preise', '/leistungen/turoeffnung', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/schliessanlagen',
        title: 'Schließanlagen Wetzlar',
        type: 'service',
        keywords: ['schließanlage', 'schließzylinder', 'sicherheitstechnik'],
        relatedSlugs: ['/leistungen/sicherheitstechnik', '/leistungen/schluessel-nachmachen'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/schluessel-nachmachen',
        title: 'Schlüssel nachmachen Wetzlar',
        type: 'service',
        keywords: ['schlüssel nachmachen', 'ersatzschlüssel', 'schlüssel kopieren'],
        relatedSlugs: ['/leistungen/schliessanlagen', '/leistungen/turoeffnung'],
        parentSlug: '/'
    },
    {
        slug: '/leistungen/sicherheitstechnik',
        title: 'Sicherheitstechnik Wetzlar',
        type: 'service',
        keywords: ['sicherheitstechnik', 'einbruchschutz', 'alarmanlage'],
        relatedSlugs: ['/leistungen/schliessanlagen', '/faq'],
        parentSlug: '/'
    },
    {
        slug: '/preise',
        title: 'Preise & Kosten',
        type: 'info',
        keywords: ['preise', 'kosten', 'festpreis'],
        relatedSlugs: ['/leistungen/turoeffnung', '/faq']
    },
    {
        slug: '/faq',
        title: 'FAQ',
        type: 'info',
        keywords: ['faq', 'fragen', 'antworten'],
        relatedSlugs: ['/preise', '/kontakt']
    },
    {
        slug: '/kontakt',
        title: 'Kontakt',
        type: 'info',
        keywords: ['kontakt', 'anrufen', 'notdienst'],
        relatedSlugs: ['/faq', '/preise']
    },
    {
        slug: '/servicegebiet',
        title: 'Einsatzgebiete',
        type: 'info',
        keywords: ['einsatzgebiet', 'region', 'wetzlar'],
        relatedSlugs: ['/wetzlar-altstadt', '/giessen', '/asslar']
    },
    // Dynamic areas removed: handled via lib/localData.ts
    {
        slug: '/ueber-uns',
        title: 'Über uns',
        type: 'info',
        keywords: ['über uns', 'firma', 'team'],
        relatedSlugs: ['/kontakt', '/bewertungen']
    },
    {
        slug: '/bewertungen',
        title: 'Bewertungen',
        type: 'info',
        keywords: ['bewertungen', 'erfahrungen', 'google'],
        relatedSlugs: ['/leistungen/turoeffnung', '/kontakt']
    },
    {
        slug: '/datenschutz',
        title: 'Datenschutz',
        type: 'legal',
        keywords: ['datenschutz', 'privacy', 'dsgvo'],
        relatedSlugs: ['/impressum']
    },
    {
        slug: '/impressum',
        title: 'Impressum',
        type: 'legal',
        keywords: ['impressum', 'legal', 'anbieterkennzeichnung'],
        relatedSlugs: ['/datenschutz']
    },
    {
        slug: '/schluessel-schmiede',
        title: 'Schlüssel Schmiede Wetzlar',
        type: 'info',
        keywords: ['schlüssel schmiede', 'ladengeschäft', 'werkstatt', 'schlüssel nachmachen', 'gravur', 'kfz schlüssel'],
        relatedSlugs: ['/leistungen/schluessel-nachmachen', '/kontakt', '/ueber-uns', '/leistungen/autooeffnung']
    }
];
