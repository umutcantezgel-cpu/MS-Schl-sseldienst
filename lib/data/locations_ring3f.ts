import { LocationData } from "./locations";

/**
 * ══════════════════════════════════════════════════════════════
 * Ring 3f — Fehlende Ortsteile: Biebertal, Hohenahr, Leun
 * 12-18 km Radius
 * ══════════════════════════════════════════════════════════════
 */
export const ring3fLocations: LocationData[] = [
    // ━━━━ BIEBERTAL — 6 ORTSTEILE ━━━━
    {
        id: "biebertal-fellingshausen",
        slug: "schluesseldienst-fellingshausen",
        name: "Fellingshausen",
        plz: "35444",
        coordinates: { latitude: 50.5900, longitude: 8.5750 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Fellingshausen — 24/7 Notdienst | Ab 99€", metaDescription: "Schlüsseldienst Fellingshausen (Biebertal): In 14 Min. da. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Fellingshausen? Wir sind in ca. 14 Minuten bei Ihnen — zum transparenten Festpreis.",
            mainText: `<p><strong>Fellingshausen</strong> ist ein Ortsteil der Gemeinde Biebertal im Landkreis Gießen, nördlich von Gießen gelegen. Die waldreiche Umgebung und die ruhige Wohnlage machen Fellingshausen zu einem beliebten Wohnort. Als <strong>Schlüsseldienst Fellingshausen</strong> bieten wir professionelle Türöffnungen zum Festpreis.</p>`,
            serviceZerstörungsfrei: "In Fellingshausen öffnen wir zugefallene Türen schonend und ohne Beschädigungen.",
            serviceBohren: "Defekte Schlösser in Fellingshausen reparieren wir direkt vor Ort.",
            service247: "24/7-Notdienst für Fellingshausen: Jederzeit erreichbar."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Fellingshausen?", answer: "In ca. 14 Minuten über die Verbindungsstraßen von Wetzlar." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis — werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-frankenbach", "schluesseldienst-krofdorf-gleiberg"]
    },
    {
        id: "biebertal-frankenbach",
        slug: "schluesseldienst-frankenbach",
        name: "Frankenbach",
        plz: "35444",
        coordinates: { latitude: 50.5950, longitude: 8.5650 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Frankenbach — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Frankenbach (Biebertal): In 15 Min. da. Ab 99€ Festpreis. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Tür zu in Frankenbach? Unser Monteur ist in ca. 15 Minuten bei Ihnen — zuverlässig und zum Festpreis.",
            mainText: `<p><strong>Frankenbach</strong> ist ein ruhiger Ortsteil der Gemeinde Biebertal. Inmitten der hessischen Hügellandschaft bietet der Ort ländliche Idylle mit familienfreundlicher Wohnlage. Als <strong>Schlüsseldienst Frankenbach</strong> sind wir Ihr regionaler Partner für Türöffnungen aller Art.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Frankenbach öffnen wir spurenlos und professionell.",
            serviceBohren: "Defekte Zylinder in Frankenbach ersetzen wir sofort vor Ort.",
            service247: "Notdienst Frankenbach: Rund um die Uhr, 365 Tage im Jahr."
        },
        faqs: [
            { question: "Wie weit ist Frankenbach?", answer: "Ca. 14 km — über Biebertal sind wir in rund 15 Minuten bei Ihnen." },
            { question: "Was kostet der Notdienst?", answer: "Zugefallene Türen ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-fellingshausen", "schluesseldienst-koenigsberg"]
    },
    {
        id: "biebertal-koenigsberg",
        slug: "schluesseldienst-koenigsberg",
        name: "Königsberg",
        plz: "35444",
        coordinates: { latitude: 50.6050, longitude: 8.5700 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Königsberg — 24/7 Türöffnung | Ab 99€", metaDescription: "Schlüsseldienst Königsberg (Biebertal): 16 Min. Anfahrt. Ab 99€ Festpreis. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Königsberg? Wir sind in ca. 16 Minuten bei Ihnen — professionell und zum Festpreis.",
            mainText: `<p><strong>Königsberg</strong> liegt in Höhenlage innerhalb der Gemeinde Biebertal, umgeben von ausgedehnten Waldgebieten. Die erhöhte Lage bietet herrliche Ausblicke über das Biebertler Gemeindegebiet. Als <strong>Schlüsseldienst Königsberg</strong> kennen wir die Anfahrtswege genau und sind schnell vor Ort.</p>`,
            serviceZerstörungsfrei: "In Königsberg öffnen wir Ihre zugefallene Tür ohne Beschädigungen.",
            serviceBohren: "Defekte Schlösser in Königsberg reparieren wir sofort vor Ort.",
            service247: "24/7-Notdienst: Auch die Höhenlage Königsberg ist schnell erreichbar."
        },
        faqs: [
            { question: "Kommen Sie auch hoch nach Königsberg?", answer: "Selbstverständlich. Wir sind in ca. 16 Minuten in Königsberg." },
            { question: "Was kostet eine Türöffnung?", answer: "Ab 99 Euro Festpreis — transparent und verbindlich." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-frankenbach", "schluesseldienst-krumbach"]
    },
    {
        id: "biebertal-krumbach",
        slug: "schluesseldienst-krumbach",
        name: "Krumbach",
        plz: "35444",
        coordinates: { latitude: 50.6100, longitude: 8.5800 },
        logistics: { drivingTimeMinutes: "17", distanceFromHQ: 16 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Krumbach — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Krumbach (Biebertal): In 17 Min. da. Festpreis ab 99€. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Schlüsselnotfall in Krumbach? Wir sind in ca. 17 Minuten bei Ihnen — zum fairen Festpreis.",
            mainText: `<p><strong>Krumbach</strong> ist der kleinste Ortsteil der Gemeinde Biebertal, eingebettet in die grüne mittelhessische Hügellandschaft. Trotz seiner Abgeschiedenheit gehört Krumbach fest zu unserem Einsatzgebiet. Als <strong>Schlüsseldienst Krumbach</strong> garantieren wir schnelle Hilfe.</p>`,
            serviceZerstörungsfrei: "In Krumbach öffnen wir Ihre Tür spurenlos und professionell.",
            serviceBohren: "Defekte Zylinder in Krumbach tauschen wir direkt vor Ort.",
            service247: "Krumbach: 24/7-Notdienst — auch für die kleinsten Dörfer."
        },
        faqs: [
            { question: "Fahren Sie auch ins kleine Krumbach?", answer: "Ja! Krumbach gehört zu unserem Einsatzgebiet. Wir sind in ca. 17 Minuten da." },
            { question: "Was kostet es?", answer: "Ab 99 Euro Festpreis für zugefallene Türen." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-koenigsberg", "schluesseldienst-frankenbach"]
    },
    {
        id: "biebertal-rodheim-bieber",
        slug: "schluesseldienst-rodheim-bieber",
        name: "Rodheim-Bieber",
        plz: "35444",
        coordinates: { latitude: 50.5800, longitude: 8.5700 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Rodheim-Bieber — 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Rodheim-Bieber: Hauptort von Biebertal. 13 Min. Anfahrt. Ab 99€ Festpreis: 06441-8056544" },
        content: {
            heroIntro: "Tür zugefallen in Rodheim-Bieber? Wir kommen in ca. 13 Minuten — zum transparenten Festpreis.",
            mainText: `<p><strong>Rodheim-Bieber</strong> ist der Hauptort der Gemeinde Biebertal und bietet die beste Infrastruktur im Gemeindegebiet, darunter Einkaufsmöglichkeiten, Schulen und ärztliche Versorgung. Die Lage zwischen Wetzlar und Gießen macht Rodheim-Bieber zu einem gefragten Wohnstandort. Als <strong>Schlüsseldienst Rodheim-Bieber</strong> sind wir schnell via Wettenberg erreichbar.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Rodheim-Bieber öffnen wir routiniert und zerstörungsfrei.",
            serviceBohren: "Defekte Schlösser in Rodheim-Bieber reparieren wir sofort vor Ort.",
            service247: "Rodheim-Bieber: 24/7-Notdienst mit 13 Minuten Anfahrt."
        },
        faqs: [
            { question: "Wie schnell sind Sie in Rodheim-Bieber?", answer: "Über Wettenberg sind wir in ca. 13 Minuten in Rodheim-Bieber." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis — werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-fellingshausen", "schluesseldienst-vetzberg"]
    },
    {
        id: "biebertal-vetzberg",
        slug: "schluesseldienst-vetzberg",
        name: "Vetzberg",
        plz: "35444",
        coordinates: { latitude: 50.5750, longitude: 8.5600 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Vetzberg — Notdienst 24/7 | Festpreis", metaDescription: "Schlüsseldienst Vetzberg (Biebertal): In 14 Min. da. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Vetzberg? Unser Monteur ist in ca. 14 Minuten bei Ihnen — professionell und zum Festpreis.",
            mainText: `<p><strong>Vetzberg</strong> ist ein malerischer Ortsteil der Gemeinde Biebertal, bekannt für die historische <strong>Burg Vetzberg</strong>. Die markante Burgruine thront auf einer Anhöhe und ist ein beliebtes Ausflugs- und Wanderziel. Der Ortsteil verbindet ländlichen Charme mit historischem Flair. Als <strong>Schlüsseldienst Vetzberg</strong> sind wir auch für dieses besondere Dorf schnell erreichbar.</p>`,
            serviceZerstörungsfrei: "In Vetzberg öffnen wir zugefallene Türen schonend — auch historische Schmiedetüren.",
            serviceBohren: "Defekte Zylinder in Vetzberg ersetzen wir sofort vor Ort mit Markenprodukten.",
            service247: "Vetzberg: 24/7-Notdienst — schnelle Hilfe am Fuße der Burg."
        },
        faqs: [
            { question: "Kommen Sie auch nach Vetzberg?", answer: "Ja, Vetzberg gehört zu unserem Einsatzgebiet. Wir sind in ca. 14 Minuten da." },
            { question: "Was kostet der Schlüsseldienst in Vetzberg?", answer: "Zugefallene Türen ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-rodheim-bieber", "schluesseldienst-krofdorf-gleiberg"]
    },

    // ━━━━ HOHENAHR — 5 ORTSTEILE ━━━━
    {
        id: "hohenahr-ahrdt",
        slug: "schluesseldienst-ahrdt",
        name: "Ahrdt",
        plz: "35644",
        coordinates: { latitude: 50.6300, longitude: 8.4500 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Ahrdt — 24/7 Notdienst | Ab 99€", metaDescription: "Schlüsseldienst Ahrdt (Hohenahr): In 16 Min. da. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Ahrdt? Unser Schlüsseldienst ist in ca. 16 Minuten bei Ihnen — zum fairen Festpreis.",
            mainText: `<p><strong>Ahrdt</strong> ist ein ländlicher Ortsteil der Gemeinde Hohenahr im nördlichen Lahn-Dill-Kreis. Der kleine Ort bietet ruhiges Wohnen in naturnaher Umgebung. Als <strong>Schlüsseldienst Ahrdt</strong> sind wir Ihr Ansprechpartner bei Schlüsselnotfällen — schnell und professionell.</p>`,
            serviceZerstörungsfrei: "In Ahrdt öffnen wir zugefallene Türen spurenlos und professionell.",
            serviceBohren: "Defekte Schlösser in Ahrdt reparieren wir sofort vor Ort.",
            service247: "24/7-Notdienst für Ahrdt: Jederzeit erreichbar."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Ahrdt?", answer: "In ca. 16 Minuten über die Hohenahr-Verbindungsstraßen." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis — werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-erda", "schluesseldienst-ehringshausen"]
    },
    {
        id: "hohenahr-erda",
        slug: "schluesseldienst-erda",
        name: "Erda",
        plz: "35644",
        coordinates: { latitude: 50.6200, longitude: 8.4700 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Erda — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Erda (Hohenahr): In 15 Min. da. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Tür zu in Erda? Wir sind in ca. 15 Minuten bei Ihnen — kompetent und zum Festpreis.",
            mainText: `<p><strong>Erda</strong> ist ein Ortsteil der Gemeinde Hohenahr, der über ein Gewerbegebiet und gute Infrastruktur verfügt. Die Lage nördlich von Wetzlar bietet eine Mischung aus ländlichem Wohnen und gewerblicher Anbindung. Als <strong>Schlüsseldienst Erda</strong> öffnen wir Türen in Wohn- und Gewerbegebäuden professionell.</p>`,
            serviceZerstörungsfrei: "In Erda öffnen wir Ihre Tür zerstörungsfrei — Wohnhaus und Gewerbe.",
            serviceBohren: "Defekte Zylinder in Erda ersetzen wir vor Ort mit Markenprodukten.",
            service247: "Erda: 24/7-Notdienst für Wohn- und Gewerbeobjekte."
        },
        faqs: [
            { question: "Öffnen Sie in Erda auch Gewerberäume?", answer: "Ja, wir öffnen Wohnungs-, Haus-, Büro- und Gewerbe-Türen in Erda." },
            { question: "Was kostet der Schlüsseldienst?", answer: "Ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-ahrdt", "schluesseldienst-grossaltenstaedten"]
    },
    {
        id: "hohenahr-grossaltenstaedten",
        slug: "schluesseldienst-grossaltenstaedten",
        name: "Großaltenstädten",
        plz: "35644",
        coordinates: { latitude: 50.6150, longitude: 8.4550 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Großaltenstädten — 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Großaltenstädten (Hohenahr). 14 Min. Anfahrt. Ab 99€ Festpreis. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Großaltenstädten? Unser Monteur ist in ca. 14 Minuten da — zum transparenten Festpreis.",
            mainText: `<p><strong>Großaltenstädten</strong> ist ein Ortsteil der Gemeinde Hohenahr mit typisch mittelhessischem Charakter. Der Ort bietet ruhiges Einfamilienhaus-Wohnen in ländlicher Umgebung. Als <strong>Schlüsseldienst Großaltenstädten</strong> stehen wir Ihnen professionell zur Seite.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Großaltenstädten öffnen wir schonend und ohne Spuren.",
            serviceBohren: "Defekte Schlösser reparieren wir in Großaltenstädten direkt vor Ort.",
            service247: "24/7-Notdienst: Auch Großaltenstädten ist jederzeit erreichbar."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Großaltenstädten?", answer: "In ca. 14 Minuten über die Hohenahr-Verbindungsstraßen." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis — zuverlässig und transparent." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-erda", "schluesseldienst-klein-altenstaedten"]
    },
    {
        id: "hohenahr-hohensolms",
        slug: "schluesseldienst-hohensolms",
        name: "Hohensolms",
        plz: "35644",
        coordinates: { latitude: 50.6100, longitude: 8.4400 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Hohensolms — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Hohensolms (Hohenahr): In 15 Min. da. Festpreis ab 99€. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Schlüsselnotfall in Hohensolms? In ca. 15 Minuten sind wir bei Ihnen — zum fairen Festpreis.",
            mainText: `<p><strong>Hohensolms</strong> ist ein historisch bedeutender Ortsteil der Gemeinde Hohenahr, bekannt für das <strong>Schloss Hohensolms</strong>, das über dem Ort thront und von der Geschichte der Grafen von Solms zeugt. Der Ortsteil verbindet historisches Flair mit ländlicher Wohnlage. Als <strong>Schlüsseldienst Hohensolms</strong> öffnen wir Ihre Tür professionell und schonend — auch historische Türen.</p>`,
            serviceZerstörungsfrei: "In Hohensolms öffnen wir Türen besonders behutsam — auch historische Gebäude.",
            serviceBohren: "Defekte Schlösser in Hohensolms ersetzen wir vor Ort mit Qualitätszylindern.",
            service247: "24/7-Notdienst für Hohensolms: Schnelle Hilfe am Fuße des Schlosses."
        },
        faqs: [
            { question: "Kommen Sie auch nach Hohensolms?", answer: "Ja, Hohensolms gehört zu unserem Einsatzgebiet. Wir sind in ca. 15 Minuten da." },
            { question: "Können Sie historische Türen öffnen?", answer: "Ja, wir sind auf alle Türarten spezialisiert, auch antike Beschläge und historische Schlösser." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-grossaltenstaedten", "schluesseldienst-kraftsolms"]
    },
    {
        id: "hohenahr-mudersbach",
        slug: "schluesseldienst-mudersbach",
        name: "Mudersbach",
        plz: "35644",
        coordinates: { latitude: 50.6250, longitude: 8.4600 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Mudersbach — 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Mudersbach (Hohenahr): In 16 Min. da. Ab 99€ Festpreis. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Tür zu in Mudersbach? Unser Schlüsseldienst ist in ca. 16 Minuten da — professionell und zum Festpreis.",
            mainText: `<p><strong>Mudersbach</strong> ist ein waldnaher Ortsteil der Gemeinde Hohenahr im nördlichen Lahn-Dill-Kreis. Die ruhige, naturnahe Lage bietet hohe Wohnqualität. Als <strong>Schlüsseldienst Mudersbach</strong> sind wir auch für abgelegenere Dörfer schnell und zuverlässig zur Stelle.</p>`,
            serviceZerstörungsfrei: "In Mudersbach öffnen wir zugefallene Türen professionell und ohne Beschädigungen.",
            serviceBohren: "Defekte Schlösser in Mudersbach reparieren wir sofort vor Ort.",
            service247: "Mudersbach: 24/7-Notdienst — auch in ländlicher Lage."
        },
        faqs: [
            { question: "Kommen Sie bis nach Mudersbach?", answer: "Ja, Mudersbach gehört zu unserem regulären Einsatzgebiet. Anfahrt ca. 16 Minuten." },
            { question: "Was kostet eine Türöffnung?", answer: "Ab 99 Euro Festpreis — werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-erda", "schluesseldienst-ahrdt"]
    },

    // ━━━━ LEUN — STOCKHAUSEN ━━━━
    {
        id: "leun-stockhausen",
        slug: "schluesseldienst-stockhausen",
        name: "Stockhausen",
        plz: "35638",
        coordinates: { latitude: 50.5600, longitude: 8.3700 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Stockhausen — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Stockhausen bei Leun: In 14 Min. da. Festpreis ab 99€. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Stockhausen? In ca. 14 Minuten ist unser Monteur bei Ihnen — zum transparenten Festpreis.",
            mainText: `<p><strong>Stockhausen</strong> ist ein Stadtteil der Stadt Leun westlich von Wetzlar. Der Ort liegt in der Hügellandschaft des Lahn-Dill-Kreises und bietet ländliches Wohnen mit guter Anbindung an die B49. Als <strong>Schlüsseldienst Stockhausen</strong> bieten wir professionelle Türöffnungen zum Festpreis.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Stockhausen öffnen wir schonend und zerstörungsfrei.",
            serviceBohren: "Defekte Zylinder in Stockhausen tauschen wir sofort vor Ort aus.",
            service247: "24/7-Notdienst für Stockhausen: Jederzeit erreichbar über die B49."
        },
        faqs: [
            { question: "Wie weit ist Stockhausen?", answer: "Ca. 13 km — über die B49 sind wir in rund 14 Minuten in Stockhausen." },
            { question: "Was kostet der Schlüsseldienst?", answer: "Zugefallene Türen öffnen wir ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-leun", "schluesseldienst-biskirchen", "schluesseldienst-bissenberg"]
    }
];
