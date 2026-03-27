import { LocationData } from "./locations";

/**
 * ══════════════════════════════════════════════════════════════
 * Ring 3e — Fehlende Ortsteile: Ehringshausen, Hüttenberg
 * 10-15 km Radius
 * ══════════════════════════════════════════════════════════════
 */
export const ring3eLocations: LocationData[] = [
    // ━━━━ EHRINGSHAUSEN — DAUBHAUSEN, DREISBACH, GREIFENTHAL ━━━━
    {
        id: "ehringshausen-daubhausen",
        slug: "schluesseldienst-daubhausen",
        name: "Daubhausen",
        plz: "35630",
        coordinates: { latitude: 50.6050, longitude: 8.3800 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 11 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Daubhausen — 24/7 Notdienst | Ab 99€", metaDescription: "Schlüsseldienst Daubhausen bei Ehringshausen. In 13 Min. da. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Daubhausen? Wir sind in ca. 13 Minuten bei Ihnen — professionell und zum Festpreis.",
            mainText: `<p><strong>Daubhausen</strong> ist ein ruhiger Ortsteil der Gemeinde Ehringshausen im Lahn-Dill-Kreis. Die ländliche Lage und die übersichtliche Dorfstruktur schaffen hohe Wohnqualität. Als <strong>Schlüsseldienst Daubhausen</strong> bieten wir schnelle Hilfe, wenn die Tür einmal ins Schloss fällt.</p>
<p>Die Bausubstanz umfasst überwiegend Einfamilienhäuser und ältere Wohngebäude. Unsere Techniker öffnen zugefallene Türen routiniert und zerstörungsfrei — zum Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "In Daubhausen öffnen wir Ihre Tür schonend — ohne Kratzer, ohne Bohren.",
            serviceBohren: "Defekte Zylinder in Daubhausen tauschen wir sofort vor Ort aus.",
            service247: "24/7-Notdienst für Daubhausen: Jederzeit erreichbar."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Daubhausen?", answer: "Über die Verbindungsstraßen von Ehringshausen sind wir in ca. 13 Minuten in Daubhausen." },
            { question: "Was kostet der Schlüsseldienst in Daubhausen?", answer: "Zugefallene Türen öffnen wir werktags tagsüber ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-ehringshausen", "schluesseldienst-katzenfurt", "schluesseldienst-dillheim"]
    },
    {
        id: "ehringshausen-dreisbach",
        slug: "schluesseldienst-dreisbach",
        name: "Dreisbach",
        plz: "35630",
        coordinates: { latitude: 50.6150, longitude: 8.4100 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 12 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Dreisbach — Notdienst 24/7 | Festpreis ab 99€", metaDescription: "Schlüsseldienst Dreisbach bei Ehringshausen. In 14 Min. da. Festpreis ab 99€. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Tür zu in Dreisbach? Unser Monteur ist in ca. 14 Minuten da — zuverlässig und zum Festpreis.",
            mainText: `<p><strong>Dreisbach</strong> gehört zur Gemeinde Ehringshausen und liegt im nördlichen Bereich des Lahn-Dill-Kreises. Das ländliche Dorf bietet ruhiges Wohnen in naturnaher Umgebung. Als <strong>Schlüsseldienst Dreisbach</strong> sind wir auch für diese kleineren Ortsteile zuverlässig und schnell erreichbar.</p>
<p>Unsere erfahrenen Techniker öffnen zugefallene Türen in Dreisbach zerstörungsfrei und zum transparenten Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "Dreisbach: Zugefallene Türen öffnen wir spurenlos und professionell.",
            serviceBohren: "Bei Schlossdefekten in Dreisbach verbauen wir sofort einen neuen Markenzylinder.",
            service247: "Notdienst Dreisbach: Rund um die Uhr erreichbar, auch nachts."
        },
        faqs: [
            { question: "Kommen Sie auch nach Dreisbach?", answer: "Ja, Dreisbach gehört fest zu unserem Einsatzgebiet. Wir sind in ca. 14 Minuten bei Ihnen." },
            { question: "Was kostet die Türöffnung in Dreisbach?", answer: "Werktags tagsüber ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-ehringshausen", "schluesseldienst-koelschhausen", "schluesseldienst-daubhausen"]
    },
    {
        id: "ehringshausen-greifenthal",
        slug: "schluesseldienst-greifenthal",
        name: "Greifenthal",
        plz: "35630",
        coordinates: { latitude: 50.5950, longitude: 8.3900 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 12 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Greifenthal — 24/7 Notdienst | Ab 99€", metaDescription: "Schlüsseldienst Greifenthal bei Ehringshausen. 14 Min. Anfahrt, Festpreis ab 99€. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Schlüsselnotfall in Greifenthal? In ca. 14 Minuten sind wir bei Ihnen — zum transparenten Festpreis.",
            mainText: `<p><strong>Greifenthal</strong> ist einer der kleinsten Ortsteile der Gemeinde Ehringshausen und liegt beschaulich in der Hügellandschaft des Lahn-Dill-Kreises. Trotz seiner geringen Größe gehört Greifenthal zu unserem festen Einsatzgebiet. Als <strong>Schlüsseldienst Greifenthal</strong> garantieren wir schnelle und professionelle Hilfe — auch in den kleinsten Dörfern unserer Region.</p>`,
            serviceZerstörungsfrei: "In Greifenthal öffnen wir zugefallene Türen zerstörungsfrei und professionell.",
            serviceBohren: "Defekte Schlösser in Greifenthal reparieren wir vor Ort — schnell und zuverlässig.",
            service247: "24/7-Notdienst: Auch Greifenthal ist jederzeit erreichbar."
        },
        faqs: [
            { question: "Fahren Sie auch in kleine Orte wie Greifenthal?", answer: "Ja! Greifenthal gehört zu unserem regulären Einsatzgebiet im Lahn-Dill-Kreis." },
            { question: "Was kostet der Notdienst in Greifenthal?", answer: "Ab 99 Euro Festpreis für zugefallene Türen — werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-ehringshausen", "schluesseldienst-daubhausen", "schluesseldienst-breitenbach"]
    },

    // ━━━━ HÜTTENBERG — HOCHELHEIM, HÖRNSHEIM, REISKIRCHEN, VOLLNKIRCHEN ━━━━
    {
        id: "huettenberg-hochelheim",
        slug: "schluesseldienst-hochelheim",
        name: "Hochelheim",
        plz: "35625",
        coordinates: { latitude: 50.5150, longitude: 8.5350 },
        logistics: { drivingTimeMinutes: "10", distanceFromHQ: 8 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Hochelheim — Festpreis ab 99€ | 24/7", metaDescription: "Schlüsseldienst Hochelheim bei Hüttenberg: In 10 Min. da. Ab 99€ Festpreis. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Hochelheim? Unser Monteur ist in ca. 10 Minuten da — zum fairen Festpreis.",
            mainText: `<p><strong>Hochelheim</strong> bildet zusammen mit Hörnsheim den Kernort der Gemeinde Hüttenberg und beherbergt die Gemeindeverwaltung. Die zentrale Lage im Hüttenberger Gemeindegebiet und die gute Anbindung über die L3020 machen Hochelheim zu einem wichtigen Wohnstandort zwischen Wetzlar und Gießen. Als <strong>Schlüsseldienst Hochelheim</strong> sind wir schnell und zuverlässig bei Ihnen.</p>
<p>Die Bebauung in Hochelheim umfasst den historischen Ortskern mit älteren Gebäuden sowie neuere Wohngebiete. Unsere Techniker öffnen alle gängigen Schließsysteme professionell und zerstörungsfrei.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Hochelheim öffnen wir schonend und ohne Beschädigungen.",
            serviceBohren: "Defekte Schlösser in Hochelheim reparieren wir direkt vor Ort.",
            service247: "24/7-Notdienst Hochelheim: Jederzeit erreichbar, 10 Minuten Anfahrt."
        },
        faqs: [
            { question: "Wie schnell ist der Monteur in Hochelheim?", answer: "Über die L3020 sind wir in ca. 10 Minuten in Hochelheim." },
            { question: "Was kostet die Türöffnung in Hochelheim?", answer: "Werktags tagsüber öffnen wir zugefallene Türen ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-huettenberg", "schluesseldienst-hoernsheim", "schluesseldienst-rechtenbach"]
    },
    {
        id: "huettenberg-hoernsheim",
        slug: "schluesseldienst-hoernsheim",
        name: "Hörnsheim",
        plz: "35625",
        coordinates: { latitude: 50.5120, longitude: 8.5400 },
        logistics: { drivingTimeMinutes: "11", distanceFromHQ: 9 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Hörnsheim — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Hörnsheim bei Hüttenberg: In 11 Min. da. Festpreis ab 99€. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Tür zu in Hörnsheim? Wir kommen in ca. 11 Minuten — schnell, professionell und zum Festpreis.",
            mainText: `<p><strong>Hörnsheim</strong> bildet zusammen mit Hochelheim den zusammengewachsenen Kernort der Gemeinde Hüttenberg. Der Ortsteil charakterisiert sich durch ruhige Wohnstraßen und eine gute Nahversorgung. Als <strong>Schlüsseldienst Hörnsheim</strong> bieten wir professionelle Türöffnungen zu transparenten Festpreisen.</p>`,
            serviceZerstörungsfrei: "In Hörnsheim öffnen wir zugefallene Türen routiniert und ohne Spuren.",
            serviceBohren: "Defekte Zylinder in Hörnsheim ersetzen wir sofort vor Ort.",
            service247: "Hörnsheim: 24/7-Notdienst, schnelle Anfahrt über Hüttenberg."
        },
        faqs: [
            { question: "Wie weit ist Hörnsheim?", answer: "Ca. 9 km — über Hüttenberg sind wir in rund 11 Minuten bei Ihnen." },
            { question: "Fallen Anfahrtskosten an?", answer: "Es fallen geringe Anfahrtskosten an, die wir vorab transparent am Telefon mitteilen." }
        ],
        neighbors: ["schluesseldienst-huettenberg", "schluesseldienst-hochelheim", "schluesseldienst-volpertshausen"]
    },
    {
        id: "huettenberg-reiskirchen",
        slug: "schluesseldienst-reiskirchen-huettenberg",
        name: "Reiskirchen (Hüttenberg)",
        plz: "35625",
        coordinates: { latitude: 50.5050, longitude: 8.5200 },
        logistics: { drivingTimeMinutes: "12", distanceFromHQ: 10 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Reiskirchen (Hüttenberg) — 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Reiskirchen bei Hüttenberg: In 12 Min. da. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Reiskirchen? Wir sind in ca. 12 Minuten bei Ihnen — zuverlässig und zum Festpreis.",
            mainText: `<p><strong>Reiskirchen</strong> ist ein Ortsteil der Gemeinde Hüttenberg im südlichen Lahn-Dill-Kreis. Der Ort bietet ländliches Wohnen mit guter Anbindung an die B49 Richtung Wetzlar und Gießen. Als <strong>Schlüsseldienst Reiskirchen</strong> stehen wir Ihnen bei Schlüsselnotfällen professionell zur Seite.</p>`,
            serviceZerstörungsfrei: "In Reiskirchen öffnen wir zugefallene Türen zerstörungsfrei und professionell.",
            serviceBohren: "Defekte Schlösser reparieren wir in Reiskirchen direkt vor Ort.",
            service247: "24/7-Notdienst für Reiskirchen: Jederzeit erreichbar."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Reiskirchen bei Hüttenberg?", answer: "In ca. 12 Minuten über die Hüttenberger Verbindungsstraßen." },
            { question: "Was kostet eine Türöffnung in Reiskirchen?", answer: "Ab 99 Euro Festpreis — werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-huettenberg", "schluesseldienst-hochelheim", "schluesseldienst-weidenhausen"]
    },
    {
        id: "huettenberg-vollnkirchen",
        slug: "schluesseldienst-vollnkirchen",
        name: "Vollnkirchen",
        plz: "35625",
        coordinates: { latitude: 50.5000, longitude: 8.5100 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 11 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Vollnkirchen — Festpreis ab 99€ | 24/7", metaDescription: "Schlüsseldienst Vollnkirchen bei Hüttenberg: In 13 Min. da. Festpreis ab 99€. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Schlüssel vergessen in Vollnkirchen? Wir sind in ca. 13 Minuten da — professionell und zum Festpreis.",
            mainText: `<p><strong>Vollnkirchen</strong> ist ein ländlich geprägter Ortsteil der Gemeinde Hüttenberg, gelegen an der B49 zwischen Wetzlar und Gießen. Die günstige Verkehrsanbindung und die ländliche Ruhe machen Vollnkirchen zu einem beliebten Wohnort. Als <strong>Schlüsseldienst Vollnkirchen</strong> sind wir Ihr schneller Partner bei Schlüsselproblemen.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Vollnkirchen öffnen wir schonend und ohne Beschädigungen.",
            serviceBohren: "Bei defekten Zylindern in Vollnkirchen verbauen wir sofort hochwertigen Ersatz.",
            service247: "Vollnkirchen: 24/7-Schlüsselnotdienst ohne Callcenter."
        },
        faqs: [
            { question: "Wie lange dauert die Anfahrt nach Vollnkirchen?", answer: "Über die B49 sind wir in ca. 13 Minuten in Vollnkirchen." },
            { question: "Was kostet der Schlüsseldienst?", answer: "Zugefallene Türen öffnen wir ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-huettenberg", "schluesseldienst-rechtenbach", "schluesseldienst-schoeffengrund"]
    }
];
