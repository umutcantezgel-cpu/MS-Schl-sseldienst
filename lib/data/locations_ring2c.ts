import { LocationData } from "./locations";

/**
 * ══════════════════════════════════════════════════════════════
 * Ring 2c — Fehlende Ortsteile: Aßlar, Solms, Lahnau
 * 5-11 km Radius
 * ══════════════════════════════════════════════════════════════
 */
export const ring2cLocations: LocationData[] = [
    // ━━━━ AßLAR — BERMOLL ━━━━
    {
        id: "asslar-bermoll",
        slug: "schluesseldienst-bermoll",
        name: "Bermoll",
        plz: "35614",
        coordinates: { latitude: 50.5750, longitude: 8.4350 },
        logistics: { drivingTimeMinutes: "10", distanceFromHQ: 8 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Bermoll bei Aßlar — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Bermoll (Aßlar): In 10 Min. vor Ort. Festpreis ab 99€. 24/7 Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Bermoll? Unser Schlüsseldienst ist in ca. 10 Minuten bei Ihnen — zum transparenten Festpreis.",
            mainText: `<p><strong>Bermoll</strong> ist der kleinste Stadtteil von Aßlar mit rund 230 Einwohnern und liegt eingebettet in die Hügellandschaft westlich von Wetzlar. Die dörfliche Ruhe und die malerische Lage machen Bermoll zu einem idyllischen Wohn- und Lebensort. Als <strong>Schlüsseldienst Bermoll</strong> sind wir auch für die kleinsten Gemeinden unserer Region zuverlässig erreichbar.</p>
<p>Die überwiegend ländliche Bausubstanz mit Einfamilienhäusern und älteren Hofreiten stellt uns vor keine Herausforderung. Unsere erfahrenen Techniker öffnen zugefallene Türen routiniert und zerstörungsfrei — mit Werkzeugen, die jede Art von Schließsystem problemlos entriegeln.</p>
<p>Über die Verbindungsstraßen von Aßlar erreichen wir Bermoll in rund 10 Minuten. Unser Festpreis ab 99 Euro ist transparent und verbindlich.</p>`,
            serviceZerstörungsfrei: "In Bermoll öffnen wir zugefallene Türen schonend — von der alten Hoftür bis zur modernen Haustür.",
            serviceBohren: "Bei defekten Zylindern in Bermoll arbeiten wir präzise und ersetzen das Schloss sofort.",
            service247: "Unser 24/7-Notdienst ist auch für Bermoll jederzeit erreichbar — ländliche Lage ist kein Hindernis."
        },
        faqs: [
            { question: "Kommen Sie auch in so kleine Orte wie Bermoll?", answer: "Selbstverständlich. Bermoll gehört fest zu unserem Einsatzgebiet — egal wie klein der Ort." },
            { question: "Wie schnell sind Sie in Bermoll?", answer: "Über die Verbindungsstraßen von Aßlar sind wir in ca. 10 Minuten bei Ihnen." },
            { question: "Was kostet der Schlüsseldienst in Bermoll?", answer: "Zugefallene Türen öffnen wir werktags tagsüber ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-asslar", "schluesseldienst-werdorf", "schluesseldienst-berghausen"]
    },

    // ━━━━ SOLMS — BURGSOLMS, OBERBIEL, OBERNDORF ━━━━
    {
        id: "solms-burgsolms",
        slug: "schluesseldienst-burgsolms",
        name: "Burgsolms",
        plz: "35606",
        coordinates: { latitude: 50.5350, longitude: 8.4050 },
        logistics: { drivingTimeMinutes: "9", distanceFromHQ: 7 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Burgsolms — 24/7 Türöffnung | Ab 99€", metaDescription: "Schlüsseldienst Burgsolms: In 9 Min. vor Ort. Festpreis ab 99€. Notdienst 24/7: 06441-8056544" },
        content: {
            heroIntro: "Schlüssel vergessen in Burgsolms? Unser Monteur ist in ca. 9 Minuten da — professionell und zum Festpreis.",
            mainText: `<p><strong>Burgsolms</strong> ist der Hauptort der Stadt Solms und beherbergt das historische Rathaus sowie die zentrale Verwaltung. Der Name verweist auf die Burg der Grafen von Solms, die den Ort über Jahrhunderte geprägt hat. Als <strong>Schlüsseldienst Burgsolms</strong> kennen wir die lokale Bausubstanz — von der Altbau-Zeile im Ortskern bis zu den Neubaugebieten am Rand.</p>
<p>Die gemischte Bebauung aus Fachwerkhäusern, Reihenhäusern und neueren Einfamilienhäusern bietet unterschiedlichste Schließsysteme. Unsere Techniker öffnen alle gängigen Türen zerstörungsfrei und zum transparenten Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "In Burgsolms öffnen wir Ihre zugefallene Tür schonend und professionell — ohne Kratzer, ohne Bohren.",
            serviceBohren: "Bei Schlossdefekten in Burgsolms verbauen wir sofort einen neuen Markenzylinder.",
            service247: "Burgsolms: 24/7-Notdienst, schnelle Anfahrt über die B49."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Burgsolms?", answer: "Über die B49 sind wir in ca. 9 Minuten in Burgsolms." },
            { question: "Was kostet die Türöffnung in Burgsolms?", answer: "Werktags tagsüber öffnen wir zugefallene Türen ab 99 Euro Festpreis." },
            { question: "Ist Burgsolms im Einsatzgebiet?", answer: "Ja, Burgsolms gehört als Hauptort von Solms fest zu unserem regulären Einsatzgebiet." }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-niederbiel", "schluesseldienst-albshausen"]
    },
    {
        id: "solms-oberbiel",
        slug: "schluesseldienst-oberbiel",
        name: "Oberbiel",
        plz: "35606",
        coordinates: { latitude: 50.5400, longitude: 8.4200 },
        logistics: { drivingTimeMinutes: "10", distanceFromHQ: 8 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Oberbiel — Sofortige Türöffnung | Ab 99€", metaDescription: "Schlüsseldienst Oberbiel bei Solms: 10 Min. Anfahrt, ab 99€ Festpreis. Notdienst 24/7: 06441-8056544" },
        content: {
            heroIntro: "Tür zugefallen in Oberbiel? Wir kommen in ca. 10 Minuten — zum garantierten Festpreis.",
            mainText: `<p><strong>Oberbiel</strong> ist ein Stadtteil von Solms, der sich oberhalb der Lahn erstreckt. Die ruhige Wohnlage und die gute Anbindung an die B49 machen Oberbiel zu einem beliebten Wohnort. Als <strong>Schlüsseldienst Oberbiel</strong> bieten wir schnelle Hilfe, wenn Sie vor verschlossener Tür stehen.</p>
<p>Die typische Einfamilienhaus-Bebauung weist Standard-Schließsysteme auf, die wir routiniert und zerstörungsfrei öffnen. Unser Festpreis ab 99 Euro wird Ihnen am Telefon verbindlich mitgeteilt.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Oberbiel öffnen wir schonend und ohne Beschädigungen.",
            serviceBohren: "Bei defekten Schlössern in Oberbiel tauschen wir den Zylinder sofort vor Ort aus.",
            service247: "Notdienst Oberbiel: 24/7 erreichbar, auch nachts und an Feiertagen."
        },
        faqs: [
            { question: "Wie weit ist Oberbiel von Wetzlar?", answer: "Oberbiel liegt ca. 8 km westlich. Wir sind in rund 10 Minuten vor Ort." },
            { question: "Was kostet die Türöffnung in Oberbiel?", answer: "Werktags tagsüber ab 99 Euro Festpreis — verbindlich und transparent." }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-burgsolms", "schluesseldienst-niederbiel"]
    },
    {
        id: "solms-oberndorf",
        slug: "schluesseldienst-oberndorf",
        name: "Oberndorf",
        plz: "35606",
        coordinates: { latitude: 50.5250, longitude: 8.3950 },
        logistics: { drivingTimeMinutes: "11", distanceFromHQ: 9 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Oberndorf — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Oberndorf bei Solms: In 11 Min. vor Ort. Ab 99€ Festpreis. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Oberndorf? Unser Schlüsseldienst ist in ca. 11 Minuten bei Ihnen — zuverlässig und zum Festpreis.",
            mainText: `<p><strong>Oberndorf</strong> ist ein ländlich geprägter Stadtteil von Solms, südlich von Burgsolms gelegen. Die ruhige Wohnlage inmitten grüner Hügel bietet hohe Lebensqualität. Als <strong>Schlüsseldienst Oberndorf</strong> sind wir auch für diesen Ortsteil schnell erreichbar.</p>
<p>Die Bausubstanz in Oberndorf umfasst überwiegend Einfamilienhäuser und renovierte ältere Gebäude. Unsere Techniker öffnen alle Schließsysteme zerstörungsfrei und professionell.</p>`,
            serviceZerstörungsfrei: "In Oberndorf öffnen wir Ihre zugefallene Tür ohne jede Beschädigung — professionell und schnell.",
            serviceBohren: "Defekte Schlösser in Oberndorf reparieren wir sofort vor Ort mit hochwertigem Ersatz.",
            service247: "24/7-Notdienst für Oberndorf: Jederzeit erreichbar, auch nachts."
        },
        faqs: [
            { question: "Wie lange brauchen Sie nach Oberndorf?", answer: "Über die Solmser Verbindungsstraßen sind wir in ca. 11 Minuten in Oberndorf." },
            { question: "Was kostet eine Türöffnung in Oberndorf?", answer: "Zugefallene Türen öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-burgsolms", "schluesseldienst-bonbaden"]
    },

    // ━━━━ LAHNAU — ATZBACH, DORLAR, WALDGIRMES ━━━━
    {
        id: "lahnau-atzbach",
        slug: "schluesseldienst-atzbach",
        name: "Atzbach",
        plz: "35633",
        coordinates: { latitude: 50.5700, longitude: 8.5550 },
        logistics: { drivingTimeMinutes: "8", distanceFromHQ: 6 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Atzbach (Lahnau) — 24/7 Notdienst | Ab 99€", metaDescription: "Schlüsseldienst Atzbach bei Lahnau: In 8 Min. da. Festpreis ab 99€. 24/7 Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Atzbach? Wir sind in nur 8 Minuten bei Ihnen — professionell, schnell und zum Festpreis.",
            mainText: `<p><strong>Atzbach</strong> ist ein Ortsteil der Gemeinde Lahnau und liegt direkt an der Lahn, östlich von Wetzlar. Durch den Bahnhof Atzbach ist der Ort hervorragend an das regionale Schienennetz angebunden. Die Lage zwischen Wetzlar und Gießen macht Atzbach zu einem attraktiven Pendelort. Als <strong>Schlüsseldienst Atzbach</strong> bieten wir schnelle Hilfe bei allen Arten von Schlüsselnotfällen.</p>
<p>Die Bebauung in Atzbach umfasst ältere Ortskernhäuser, Nachkriegs-Siedlungen und moderne Neubaugebiete. Unsere Techniker sind auf jede Bausubstanz vorbereitet und öffnen zugefallene Türen in nahezu allen Fällen zerstörungsfrei. Über die B49 sind wir in nur 8 Minuten vor Ort.</p>`,
            serviceZerstörungsfrei: "In Atzbach öffnen wir Ihre zugefallene Tür schonend und professionell — ohne Spuren.",
            serviceBohren: "Bei Schlossdefekten in Atzbach bohren wir kontrolliert und verbauen sofort einen neuen Zylinder.",
            service247: "Notdienst Atzbach: 24/7 erreichbar über die kurze B49-Anfahrt."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Atzbach?", answer: "Über die B49 Richtung Gießen sind wir in nur 8 Minuten in Atzbach." },
            { question: "Was kostet die Türöffnung in Atzbach?", answer: "Werktags tagsüber ab 99 Euro Festpreis — transparent und verbindlich." },
            { question: "Ist Atzbach gut erreichbar?", answer: "Ja, Atzbach liegt direkt an der B49 und ist mit dem Auto schnell zu erreichen." }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-dorlar", "schluesseldienst-wetzlar-naunheim"]
    },
    {
        id: "lahnau-dorlar",
        slug: "schluesseldienst-dorlar",
        name: "Dorlar",
        plz: "35633",
        coordinates: { latitude: 50.5650, longitude: 8.5700 },
        logistics: { drivingTimeMinutes: "9", distanceFromHQ: 7 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Dorlar (Lahnau) — Festpreis ab 99€ | 24/7", metaDescription: "Schlüsseldienst Dorlar bei Lahnau: In 9 Min. vor Ort. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Tür zu in Dorlar? Unser Schlüsseldienst ist in ca. 9 Minuten bei Ihnen — kompetent und zum Festpreis.",
            mainText: `<p><strong>Dorlar</strong> ist ein Ortsteil der Gemeinde Lahnau zwischen Wetzlar und Gießen. Der Ort bietet eine Mischung aus ländlichem Charme und guter Infrastruktur. Neue Wohnbaugebiete machen Dorlar besonders bei jungen Familien beliebt. Als <strong>Schlüsseldienst Dorlar</strong> sind wir Ihr schneller, regionaler Partner bei Schlüsselproblemen aller Art.</p>
<p>Ob zugefallene Tür im Neubaugebiet oder klemmender Zylinder im Altbestand — wir öffnen professionell und zerstörungsfrei. Unser Festpreis ab 99 Euro wird Ihnen vorab am Telefon genannt.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Dorlar öffnen wir schonend — Ihr Schloss bleibt intakt.",
            serviceBohren: "Defekte Zylinder in Dorlar tauschen wir direkt vor Ort gegen hochwertige Ersatzteile.",
            service247: "Dorlar: Unser Notdienst ist 24 Stunden am Tag, 7 Tage die Woche erreichbar."
        },
        faqs: [
            { question: "Wie lange braucht der Monteur nach Dorlar?", answer: "Über die Lahnau-Verbindungsstraße sind wir in ca. 9 Minuten in Dorlar." },
            { question: "Was kostet der Schlüsseldienst in Dorlar?", answer: "Zugefallene Türen öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-atzbach", "schluesseldienst-waldgirmes"]
    },
    {
        id: "lahnau-waldgirmes",
        slug: "schluesseldienst-waldgirmes",
        name: "Waldgirmes",
        plz: "35633",
        coordinates: { latitude: 50.5600, longitude: 8.5500 },
        logistics: { drivingTimeMinutes: "9", distanceFromHQ: 7 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Waldgirmes — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Waldgirmes bei Lahnau: In 9 Min. vor Ort. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Waldgirmes? Unser Notdienst ist in ca. 9 Minuten bei Ihnen — zum fairen Festpreis.",
            mainText: `<p><strong>Waldgirmes</strong> ist ein überregional bekannter Ortsteil der Gemeinde Lahnau — und das aus gutem Grund: Hier befindet sich das <strong>Römische Forum Waldgirmes</strong>, die älteste bekannte römische Stadtgründung östlich des Rheins. Ein vergoldeter Bronze-Pferdekopf einer Augustus-Statue gehört zu den spektakulärsten Funden der deutschen Archäologie.</p>
<p>Neben seiner historischen Bedeutung ist Waldgirmes ein lebendiger Wohnort mit guter Infrastruktur. Die Bebauung reicht von historischen Häusern nahe dem Ortskern bis zu modernen Siedlungen. Als <strong>Schlüsseldienst Waldgirmes</strong> öffnen wir alle gängigen Schließsysteme zerstörungsfrei und zum Festpreis ab 99 Euro.</p>
<p>Der Weg nach Waldgirmes führt über die L3451 — in nur 9 Minuten sind wir bei Ihnen. Bei Schlüsselverlust tauschen wir Ihren Zylinder direkt vor Ort aus.</p>`,
            serviceZerstörungsfrei: "In Waldgirmes öffnen wir Ihre zugefallene Tür professionell und ohne jede Beschädigung.",
            serviceBohren: "Defekte Schlösser in Waldgirmes reparieren wir vor Ort — schnell und zuverlässig.",
            service247: "24/7-Notdienst für Waldgirmes: Jederzeit erreichbar, 9 Minuten Anfahrt."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Waldgirmes?", answer: "Über die L3451 sind wir in ca. 9 Minuten in Waldgirmes vor Ort." },
            { question: "Was kostet eine Türöffnung in Waldgirmes?", answer: "Werktags tagsüber ab 99 Euro Festpreis — zuverlässig und transparent." },
            { question: "Bieten Sie auch Schlüsselkopien in Waldgirmes an?", answer: "Ja, Schlüssel nachmachen können Sie in unserer Schlüssel Schmiede in Wetzlar. Wir beraten Sie gerne." }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-dorlar", "schluesseldienst-atzbach"]
    }
];
