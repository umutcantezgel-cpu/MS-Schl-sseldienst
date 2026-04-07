import { LocationData } from "./locations";

export const ring3dLocations: LocationData[] = [
    {
        id: "waldsolms-brandoberndorf",
        slug: "schluesseldienst-brandoberndorf",
        name: "Brandoberndorf",
        plz: "35647",
        coordinates: { latitude: 50.4600, longitude: 8.4800 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Brandoberndorf — 24/7 Notdienst | Festpreis", metaDescription: "Schlüsseldienst Brandoberndorf bei Waldsolms. 16 Min. Anfahrt, ab 99€ Festpreis. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Brandoberndorf? Unser Schlüsseldienst ist in ca. 16 Minuten bei Ihnen — zum transparenten Festpreis.",
            mainText: `<p>Brandoberndorf ist der größte Ortsteil der Gemeinde Waldsolms und liegt südlich von Wetzlar an der Grenze zum Hochtaunuskreis. Der Ort verfügt über eine eigene Bahnstation an der Taunusbahn und bietet eine attraktive Wohnlage mit guter Infrastruktur. Als <strong>Schlüsseldienst Brandoberndorf</strong> sind wir Ihr zuverlässiger Partner bei Schlüsselnotfällen.</p>
<p>Die Mischung aus Altbauten im Ortskern und neueren Wohngebieten in Brandoberndorf bringt verschiedene Schließsysteme mit sich. Unsere Monteure sind auf die gesamte Bandbreite vorbereitet und öffnen zugefallene Türen in nahezu allen Fällen zerstörungsfrei.</p>
<p>Die Anfahrt dauert rund 16 Minuten. Unser Festpreis ab 99 Euro wird Ihnen vor der Anfahrt transparent mitgeteilt.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Brandoberndorf öffnen wir schonend und professionell — ohne Schäden am Schloss.",
            serviceBohren: "Bei defekten Zylindern in Brandoberndorf arbeiten wir mit Präzisionsbohrern und ersetzen den Zylinder sofort.",
            service247: "24/7-Notdienst für Brandoberndorf: Erreichbar rund um die Uhr, an 365 Tagen im Jahr."
        },
        faqs: [
            { question: "Wie schnell kommt der Schlüsseldienst nach Brandoberndorf?", answer: "Wir erreichen Brandoberndorf in durchschnittlich 16 Minuten." },
            { question: "Was kostet eine Türöffnung in Brandoberndorf?", answer: "Zugefallene Standardtüren öffnen wir werktags tagsüber ab 99 Euro Festpreis." },
            { question: "Gibt es Anfahrtskosten nach Brandoberndorf?", answer: "Mögliche Anfahrtskosten werden Ihnen am Telefon transparent genannt, bevor wir losfahren." }
        ],
        neighbors: ["schluesseldienst-waldsolms", "schluesseldienst-kroeffelbach", "schluesseldienst-griedelbach"]
    },
    {
        id: "waldsolms-griedelbach",
        slug: "schluesseldienst-griedelbach",
        name: "Griedelbach",
        plz: "35647",
        coordinates: { latitude: 50.4700, longitude: 8.4650 },
        logistics: { drivingTimeMinutes: "17", distanceFromHQ: 16 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Griedelbach — Notdienst 24/7 | Festpreis ab 99€", metaDescription: "Schlüsseldienst Griedelbach bei Waldsolms. In 17 Min. da. Festpreis ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Tür zu in Griedelbach? In ca. 17 Minuten ist unser Monteur da — professionell und zum garantierten Festpreis.",
            mainText: `<p>Griedelbach ist ein kleiner Ortsteil der Gemeinde Waldsolms, südlich von Wetzlar im Lahn-Dill-Kreis gelegen. Der dörfliche Charakter und die Nähe zur Natur machen Griedelbach zu einem ruhigen Wohnort. Als <strong>Schlüsseldienst Griedelbach</strong> stehen wir Ihnen auch in den kleineren Ortsteilen zuverlässig zur Seite.</p>
<p>Unsere erfahrenen Techniker öffnen zugefallene Türen in Griedelbach routiniert und zerstörungsfrei. Die typischen Schließsysteme der ländlichen Bausubstanz sind uns bestens vertraut.</p>
<p>Anfahrtszeit: ca. 17 Minuten. Festpreis ab 99 Euro — transparent und verbindlich.</p>`,
            serviceZerstörungsfrei: "Schonende Türöffnung in Griedelbach: Wir öffnen Ihre Tür ohne Beschädigungen am Schloss oder Rahmen.",
            serviceBohren: "Bei Schlossdefekten in Griedelbach bohren wir kontrolliert und ersetzen den Zylinder direkt vor Ort.",
            service247: "Unser Notdienst ist für Griedelbach rund um die Uhr erreichbar — auch an Sonn- und Feiertagen."
        },
        faqs: [
            { question: "Kommen Sie bis nach Griedelbach?", answer: "Ja, Griedelbach gehört zu unserem Einsatzgebiet. Wir sind in ca. 17 Minuten da." },
            { question: "Was kostet die Türöffnung?", answer: "Zugefallene Standardtüren ab 99 Euro Festpreis, werktags tagsüber." },
            { question: "Können Sie auch einen neuen Zylinder einbauen?", answer: "Ja, wir führen Ersatzzylinder mit und bauen diese vor Ort fachgerecht ein." }
        ],
        neighbors: ["schluesseldienst-waldsolms", "schluesseldienst-brandoberndorf", "schluesseldienst-hasselborn"]
    },
    {
        id: "waldsolms-hasselborn",
        slug: "schluesseldienst-hasselborn",
        name: "Hasselborn",
        plz: "35647",
        coordinates: { latitude: 50.4550, longitude: 8.4500 },
        logistics: { drivingTimeMinutes: "18", distanceFromHQ: 17 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Hasselborn — Türöffnung ab 99€ | 24/7", metaDescription: "Schlüsseldienst Hasselborn bei Waldsolms. 18 Min. Anfahrt, Festpreis ab 99€. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Schlüssel vergessen in Hasselborn? Wir kommen in ca. 18 Minuten — mit professionellem Werkzeug und zum Festpreis.",
            mainText: `<p>Hasselborn liegt im südlichen Teil der Gemeinde Waldsolms und zeichnet sich durch seine idyllische Lage und den ländlichen Charakter aus. Als <strong>Schlüsseldienst Hasselborn</strong> bringen wir unsere Expertise auch in die ruhigeren Ecken des Lahn-Dill-Kreises.</p>
<p>Zugefallene Türen öffnen wir in Hasselborn zerstörungsfrei. Bei Schlüsselverlust tauschen wir den Zylinder direkt vor Ort aus.</p>
<p>Anfahrtszeit: ca. 18 Minuten. Festpreis ab 99 Euro — klar und transparent.</p>`,
            serviceZerstörungsfrei: "In Hasselborn öffnen wir Ihre zugefallene Tür spurenlos — ohne Bohren oder Fräsen.",
            serviceBohren: "Defektes Schloss in Hasselborn? Wir bohren präzise und setzen einen neuen Zylinder ein.",
            service247: "Hasselborn: Unser 24/7-Notdienst ist jederzeit für Sie erreichbar."
        },
        faqs: [
            { question: "Wie weit ist Hasselborn?", answer: "Hasselborn liegt ca. 17 km südlich von Wetzlar. Wir brauchen rund 18 Minuten." },
            { question: "Was kostet der Schlüsseldienst in Hasselborn?", answer: "Festpreis ab 99 Euro für zugefallene Standardtüren, werktags tagsüber." },
            { question: "Kommen Sie auch nachts?", answer: "Ja, unser 24-Stunden-Notdienst gilt auch für Hasselborn." }
        ],
        neighbors: ["schluesseldienst-waldsolms", "schluesseldienst-griedelbach", "schluesseldienst-weiperfelden"]
    },
    {
        id: "waldsolms-kroeffelbach",
        slug: "schluesseldienst-kroeffelbach",
        name: "Kröffelbach",
        plz: "35647",
        coordinates: { latitude: 50.4750, longitude: 8.4900 },
        logistics: { drivingTimeMinutes: "17", distanceFromHQ: 16 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Kröffelbach — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst Kröffelbach bei Waldsolms. 17 Min. Anfahrt. Festpreis ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Kröffelbach? In ca. 17 Minuten ist unser Monteur bei Ihnen — zum festen Preis ab 99€.",
            mainText: `<p>Kröffelbach ist ein ruhiger Ortsteil der Gemeinde Waldsolms im südlichen Lahn-Dill-Kreis. Die ländliche Umgebung und die Nähe zum Taunus-Vorland machen den Ort zu einem beschaulichen Wohnstandort. Als <strong>Schlüsseldienst Kröffelbach</strong> sorgen wir dafür, dass Tür-Notfälle auch hier schnell und professionell gelöst werden.</p>
<p>Unsere Monteure öffnen zugefallene Türen in Kröffelbach routiniert und zerstörungsfrei. Die gängigen Schließsysteme der Region sind uns vertraut.</p>
<p>Anfahrtszeit: ca. 17 Minuten. Festpreis ab 99 Euro — verlässlich und transparent.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Kröffelbach öffnen wir schonend — ohne den Zylinder auszutauschen zu müssen.",
            serviceBohren: "Bei defekten Schlössern in Kröffelbach setzen wir kontrollierte Bohrungen ein und ersetzen den Zylinder sofort.",
            service247: "24/7 für Kröffelbach: Unser Notdienst kennt keine Geschäftszeiten — auch nachts und feiertags."
        },
        faqs: [
            { question: "Ist Kröffelbach im Einsatzgebiet?", answer: "Ja, Kröffelbach gehört fest zu unserem Einsatzgebiet im Lahn-Dill-Kreis." },
            { question: "Was kostet eine Notöffnung in Kröffelbach?", answer: "Festpreis ab 99 Euro für zugefallene Türen, werktags tagsüber." },
            { question: "Wie schnell sind Sie in Kröffelbach?", answer: "Wir erreichen Kröffelbach in durchschnittlich 17 Minuten." }
        ],
        neighbors: ["schluesseldienst-waldsolms", "schluesseldienst-brandoberndorf", "schluesseldienst-kraftsolms"]
    },
    {
        id: "waldsolms-weiperfelden",
        slug: "schluesseldienst-weiperfelden",
        name: "Weiperfelden",
        plz: "35647",
        coordinates: { latitude: 50.4500, longitude: 8.4600 },
        logistics: { drivingTimeMinutes: "18", distanceFromHQ: 17 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Weiperfelden — 24/7 Türöffnung | Festpreis", metaDescription: "Schlüsseldienst Weiperfelden bei Waldsolms. In 18 Min. da. Ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Tür zu in Weiperfelden? Wir kommen in ca. 18 Minuten — professionell und zum garantierten Festpreis.",
            mainText: `<p>Weiperfelden gehört zur Gemeinde Waldsolms und liegt im südlichen Lahn-Dill-Kreis, umgeben von Wald und Wiesen. Der kleine Ortsteil bietet ländliche Ruhe und eine überschaubare Nachbarschaft. Als <strong>Schlüsseldienst Weiperfelden</strong> bringen wir professionelle Hilfe auch in die entlegeneren Ecken unseres Einsatzgebiets.</p>
<p>Zugefallene Türen in Weiperfelden öffnen wir mit bewährten Handwerkstechniken — zerstörungsfrei und professionell.</p>
<p>Anfahrtszeit: ca. 18 Minuten. Festpreis ab 99 Euro — Ihr verbindlicher Kostenrahmen.</p>`,
            serviceZerstörungsfrei: "In Weiperfelden öffnen wir Ihre Tür schonend und ohne Spuren — Ihr Schloss bleibt intakt.",
            serviceBohren: "Bei Schlossdefekten in Weiperfelden bohren wir kontrolliert und verbauen sofort einen neuen Zylinder.",
            service247: "Weiperfelden: Unser 24/7-Notdienst ist an 365 Tagen erreichbar."
        },
        faqs: [
            { question: "Kommen Sie auch nach Weiperfelden?", answer: "Ja, Weiperfelden ist Teil unseres Einsatzgebiets. Wir sind in ca. 18 Minuten bei Ihnen." },
            { question: "Was kostet die Türöffnung?", answer: "Zugefallene Standardtüren ab 99 Euro Festpreis, werktags tagsüber." },
            { question: "Bieten Sie Notdienst auch am Wochenende?", answer: "Ja, unser 24/7-Notdienst ist auch samstags und sonntags für Weiperfelden erreichbar." }
        ],
        neighbors: ["schluesseldienst-waldsolms", "schluesseldienst-hasselborn", "schluesseldienst-griedelbach"]
    },
    {
        id: "waldsolms-kraftsolms",
        slug: "schluesseldienst-kraftsolms",
        name: "Kraftsolms",
        plz: "35647",
        coordinates: { latitude: 50.4800, longitude: 8.4400 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Kraftsolms — 24/7 Notdienst | Festpreis ab 99€", metaDescription: "Schlüsseldienst Kraftsolms bei Waldsolms. 15 Min. Anfahrt, Festpreis ab 99€. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Kraftsolms? Unser Monteur ist in ca. 15 Minuten bei Ihnen — zum fairen Festpreis.",
            mainText: `<p>Kraftsolms gehört zur Gemeinde Waldsolms und liegt im südlichen Lahn-Dill-Kreis. Als namensgebender Ortsteil der Gemeinde bietet Kraftsolms eine gute Mischung aus ländlicher Ruhe und verkehrstechnischer Anbindung. Als <strong>Schlüsseldienst Kraftsolms</strong> sind wir Ihr verlässlicher Helfer bei jedem Schlüsselnotfall.</p>
<p>Die in Kraftsolms üblichen Schließsysteme sind unseren Monteure bestens bekannt. Zugefallene Türen öffnen wir zerstörungsfrei — bei Schlüsselverlust tauschen wir den Zylinder direkt vor Ort aus.</p>
<p>Anfahrtszeit: ca. 15 Minuten. Festpreis ab 99 Euro — verbindlich und transparent.</p>`,
            serviceZerstörungsfrei: "Zerstörungsfreie Öffnung in Kraftsolms: Ihre Tür wird geöffnet, ohne dass Nacharbeiten nötig sind.",
            serviceBohren: "Bei defekten Zylindern in Kraftsolms bohren wir kontrolliert und setzen sofort einen neuen ein.",
            service247: "24/7 Schlüsselnotdienst für Kraftsolms: Immer erreichbar, immer professionell."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Kraftsolms?", answer: "Wir erreichen Kraftsolms in ca. 15 Minuten über die Verbindungsstraßen." },
            { question: "Was kostet die Notöffnung?", answer: "Ab 99 Euro Festpreis für zugefallene Standardtüren, werktags tagsüber." },
            { question: "Sind Sie ein regionaler Betrieb?", answer: "Ja, Schlüssel Schmiede Wetzlar ist ein lokaler Handwerksbetrieb — direkt und ohne Umwege." }
        ],
        neighbors: ["schluesseldienst-waldsolms", "schluesseldienst-kroeffelbach", "schluesseldienst-schoeffengrund"]
    },
    {
        id: "bischoffen",
        slug: "schluesseldienst-bischoffen",
        name: "Bischoffen",
        plz: "35649",
        coordinates: { latitude: 50.6350, longitude: 8.5100 },
        logistics: { drivingTimeMinutes: "18", distanceFromHQ: 16 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Bischoffen — Notdienst 24/7 | Festpreis ab 99€", metaDescription: "Ihr Schlüsseldienst für Bischoffen im Lahn-Dill-Kreis. 18 Min. Anfahrt, Festpreis ab 99€. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Bischoffen? Unser Schlüsseldienst ist in ca. 18 Minuten bei Ihnen — zum transparenten Festpreis.",
            mainText: `<p>Die Gemeinde Bischoffen liegt nördlich von Wetzlar im Lahn-Dill-Kreis, eingebettet in die waldreiche Mittelgebirgslandschaft. Mit ihren mehreren Ortsteilen bietet Bischoffen ländliches Wohnen mit guter Anbindung an die Kreisstadt. Als <strong>Schlüsseldienst Bischoffen</strong> sind wir Ihr regionaler Partner für schnelle Türöffnungen in der gesamten Gemeinde.</p>
<p>Die typische Bausubstanz in Bischoffen umfasst Einfamilienhäuser, renovierte Fachwerkhäuser und vereinzelt Mehrfamilienhäuser. Unsere Monteure kennen die gängigen Schließsysteme der Region und öffnen zugefallene Türen routiniert und zerstörungsfrei.</p>
<p>Über die Landesstraßen durch das Aartal erreichen wir Bischoffen in ca. 18 Minuten. Unser Festpreis ab 99 Euro bietet Ihnen finanzielle Sicherheit.</p>`,
            serviceZerstörungsfrei: "In Bischoffen öffnen wir zugefallene Türen schonend — ohne Kratzer, ohne Bohren, ohne Folgekosten.",
            serviceBohren: "Bei Schlossdefekten in Bischoffen arbeiten wir mit Präzisionswerkzeug und tauschen den Zylinder sofort vor Ort.",
            service247: "Bischoffen: Schlüsselnotdienst rund um die Uhr — auch nachts, am Wochenende und an Feiertagen."
        },
        faqs: [
            { question: "Wie lange dauert die Anfahrt nach Bischoffen?", answer: "Wir erreichen Bischoffen in durchschnittlich 18 Minuten über die Route durch das Aartal." },
            { question: "Was kostet der Schlüsseldienst in Bischoffen?", answer: "Eine zugefallene Standardtür öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." },
            { question: "Decken Sie die gesamte Gemeinde Bischoffen ab?", answer: "Ja, wir kommen in alle Ortsteile der Gemeinde Bischoffen — schnell und zuverlässig." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-ehringshausen", "schluesseldienst-mittenaar"]
    },
    {
        id: "wettenberg",
        slug: "schluesseldienst-wettenberg",
        name: "Wettenberg",
        plz: "35435",
        coordinates: { latitude: 50.6000, longitude: 8.6350 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Wettenberg — 24/7 Türöffnung zum Festpreis", metaDescription: "Schlüsseldienst Wettenberg bei Gießen. In 15 Min. da. Festpreis ab 99€. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Vor verschlossener Tür in Wettenberg? Unser Schlüsseldienst ist in ca. 15 Minuten bei Ihnen — zum fairen Festpreis.",
            mainText: `<p>Wettenberg liegt nördlich von Gießen an der Grenze zum Lahn-Dill-Kreis und ist mit seinen drei Ortsteilen Krofdorf-Gleiberg, Launsbach und Wißmar ein beliebter Wohnstandort. Die hervorragende Verkehrsanbindung und die Nähe zur Universitätsstadt machen Wettenberg besonders attraktiv. Als <strong>Schlüsseldienst Wettenberg</strong> bieten wir schnelle und professionelle Hilfe bei Türnotfällen in der gesamten Gemeinde.</p>
<p>Die Vielfalt der Wettenberger Bausubstanz — von historischen Fachwerkhäusern in Krofdorf-Gleiberg bis zu modernen Siedlungen — erfordert vielseitige Öffnungstechnik. Unsere Monteure sind auf alle Schließsysteme vorbereitet und arbeiten grundsätzlich zerstörungsfrei.</p>
<p>Anfahrtszeit: ca. 15 Minuten. Festpreis ab 99 Euro — transparent und verbindlich.</p>`,
            serviceZerstörungsfrei: "In Wettenberg öffnen wir zugefallene Türen mit professionellen Picking-Tools — schnell, leise und ohne Schäden.",
            serviceBohren: "Bei Schlossdefekten in Wettenberg bohren wir kontrolliert und tauschen den Zylinder direkt vor Ort aus.",
            service247: "Schlüsseldienst Wettenberg: 24 Stunden erreichbar, 365 Tage im Jahr."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Wettenberg?", answer: "Wir erreichen Wettenberg in durchschnittlich 15 Minuten — sowohl den Ortskern als auch die Außengebiete." },
            { question: "Decken Sie alle Ortsteile von Wettenberg ab?", answer: "Ja, Krofdorf-Gleiberg, Launsbach und Wißmar — wir kommen in die gesamte Gemeinde." },
            { question: "Was kostet eine Türöffnung in Wettenberg?", answer: "Zugefallene Standardtüren öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." }
        ],
        neighbors: ["schluesseldienst-krofdorf-gleiberg", "schluesseldienst-launsbach", "schluesseldienst-wissmar", "schluesseldienst-giessen"]
    },
    {
        id: "linden",
        slug: "schluesseldienst-linden",
        name: "Linden",
        plz: "35440",
        coordinates: { latitude: 50.5400, longitude: 8.6500 },
        logistics: { drivingTimeMinutes: "18", distanceFromHQ: 17 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Linden — 24/7 Notdienst | Festpreis ab 99€", metaDescription: "Schlüsseldienst Linden bei Gießen. 18 Min. Anfahrt, ab 99€ Festpreis. Jetzt Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Linden? Unser Schlüsseldienst erreicht Sie in ca. 18 Minuten — mit Festpreisgarantie und professionellem Service.",
            mainText: `<p>Die Stadt Linden liegt südöstlich von Gießen und grenzt an den Lahn-Dill-Kreis. Mit ihren drei Stadtteilen Großen-Linden, Leihgestern und Oberkleen ist Linden ein attraktiver Wohnstandort in der Region Mittelhessen. Als <strong>Schlüsseldienst Linden</strong> sind wir Ihr regionaler Ansprechpartner für Türöffnungen aller Art.</p>
<p>Die Bausubstanz in Linden reicht von historischen Ortskernen über gewachsene Wohngebiete bis zu modernen Neubausiedlungen. Unsere Monteure meistern jedes Schließsystem und öffnen zugefallene Türen zerstörungsfrei.</p>
<p>Anfahrtszeit: ca. 18 Minuten. Festpreis ab 99 Euro — Ihr verlässlicher Kostenrahmen.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Linden öffnen wir routiniert und schonend — ohne Schäden am Schloss.",
            serviceBohren: "Bei defekten Zylindern in Linden arbeiten wir mit Präzisionsbohrern und ersetzen den Zylinder sofort.",
            service247: "24/7-Notdienst für Linden: Jederzeit erreichbar, auch nachts und am Wochenende."
        },
        faqs: [
            { question: "Wie schnell kommt der Schlüsseldienst nach Linden?", answer: "Wir erreichen Linden in ca. 18 Minuten über die Gießener Route." },
            { question: "Was kostet die Türöffnung in Linden?", answer: "Festpreis ab 99 Euro für zugefallene Türen, werktags tagsüber." },
            { question: "Kommen Sie in alle Stadtteile von Linden?", answer: "Ja, wir kommen nach Großen-Linden, Leihgestern und Oberkleen." }
        ],
        neighbors: ["schluesseldienst-giessen", "schluesseldienst-huettenberg", "schluesseldienst-leihgestern"]
    },
    {
        id: "krofdorf-gleiberg",
        slug: "schluesseldienst-krofdorf-gleiberg",
        name: "Krofdorf-Gleiberg",
        plz: "35435",
        coordinates: { latitude: 50.6100, longitude: 8.6150 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Krofdorf-Gleiberg — Festpreis ab 99€ | 24/7", metaDescription: "Schlüsseldienst Krofdorf-Gleiberg. In 14 Min. vor Ort. Festpreis ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Vor verschlossener Tür in Krofdorf-Gleiberg? Unser Monteur ist in ca. 14 Minuten da — zum transparenten Festpreis.",
            mainText: `<p>Krofdorf-Gleiberg ist ein Ortsteil der Gemeinde Wettenberg und überragt mit der imposanten Burg Gleiberg die Landschaft. Der Ort verbindet historischen Charme mit modernem Wohnen und ist über die Landesstraßen gut an Gießen und Wetzlar angebunden. Als <strong>Schlüsseldienst Krofdorf-Gleiberg</strong> sind wir Ihr Partner für schnelle Türöffnungen am Fuß der historischen Burg.</p>
<p>Die Mischung aus alten Fachwerkhäusern und modernen Wohngebieten erfordert vielseitige Öffnungstechnik. Unsere Monteure öffnen zugefallene Türen zerstörungsfrei und professionell.</p>
<p>Anfahrtszeit: ca. 14 Minuten. Festpreis ab 99 Euro — transparent und verbindlich.</p>`,
            serviceZerstörungsfrei: "Schonende Türöffnung in Krofdorf-Gleiberg: Historische und moderne Türen öffnen wir gleichermaßen spurenlos.",
            serviceBohren: "Bei defekten Schlössern in Krofdorf-Gleiberg setzen wir Präzisionsbohrer ein und ersetzen den Zylinder sofort.",
            service247: "Krofdorf-Gleiberg: Schlüsselnotdienst rund um die Uhr — auch nachts und an Feiertagen."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Krofdorf-Gleiberg?", answer: "Wir erreichen Krofdorf-Gleiberg in ca. 14 Minuten." },
            { question: "Öffnen Sie auch Türen an älteren Gebäuden?", answer: "Ja, wir haben Erfahrung mit historischen Schlössern und Beschlägen und arbeiten mit größter Sorgfalt." },
            { question: "Wie teuer ist die Türöffnung?", answer: "Zugefallene Standardtüren ab 99 Euro Festpreis, werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-wettenberg", "schluesseldienst-launsbach", "schluesseldienst-giessen"]
    },
    {
        id: "launsbach",
        slug: "schluesseldienst-launsbach",
        name: "Launsbach",
        plz: "35435",
        coordinates: { latitude: 50.5900, longitude: 8.6100 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Launsbach — 24/7 Notdienst | Festpreis ab 99€", metaDescription: "Schlüsseldienst Launsbach bei Wettenberg. 15 Min. Anfahrt, ab 99€ Festpreis. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Schlüssel vergessen in Launsbach? Wir kommen in ca. 15 Minuten — professionell und zum Festpreis.",
            mainText: `<p>Launsbach ist ein Ortsteil der Gemeinde Wettenberg, gelegen zwischen Gießen und Wetzlar. Der Ort bietet ruhiges Wohnen mit guter Infrastruktur. Als <strong>Schlüsseldienst Launsbach</strong> sind wir Ihr lokaler Ansprechpartner bei Türnotfällen.</p>
<p>Unsere Monteure öffnen die in Launsbach typischen Schließsysteme routiniert und zerstörungsfrei.</p>
<p>Anfahrtszeit: ca. 15 Minuten. Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Launsbach öffnen wir schonend und professionell — ohne Schäden am Schloss.",
            serviceBohren: "Bei Schlossdefekten in Launsbach bohren wir kontrolliert und tauschen den Zylinder sofort aus.",
            service247: "Launsbach: Unser 24/7-Notdienst ist jederzeit für Sie erreichbar."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Launsbach?", answer: "Wir sind in ca. 15 Minuten in Launsbach." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis für zugefallene Standardtüren." },
            { question: "Kommen Sie auch nachts nach Launsbach?", answer: "Ja, unser 24-Stunden-Notdienst gilt auch für Launsbach." }
        ],
        neighbors: ["schluesseldienst-wettenberg", "schluesseldienst-krofdorf-gleiberg", "schluesseldienst-lahnau"]
    },
    {
        id: "leihgestern",
        slug: "schluesseldienst-leihgestern",
        name: "Leihgestern",
        plz: "35440",
        coordinates: { latitude: 50.5500, longitude: 8.6400 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Leihgestern — Festpreis ab 99€ | 24/7 Notdienst", metaDescription: "Schlüsseldienst Leihgestern bei Linden. 16 Min. Anfahrt, Festpreis ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Tür zu in Leihgestern? In ca. 16 Minuten ist unser Monteur da — professionell und zum Festpreis.",
            mainText: `<p>Leihgestern ist ein Stadtteil von Linden, südöstlich von Gießen gelegen. Der Ort bietet eine gute Mischung aus Wohn- und Geschäftsgebieten. Als <strong>Schlüsseldienst Leihgestern</strong> sorgen wir dafür, dass Schlüsselnotfälle schnell und professionell gelöst werden.</p>
<p>Unsere Techniker öffnen zugefallene Türen in Leihgestern routiniert und ohne Beschädigungen.</p>
<p>Anfahrtszeit: ca. 16 Minuten. Festpreis ab 99 Euro — transparent und verlässlich.</p>`,
            serviceZerstörungsfrei: "Schonende Türöffnung in Leihgestern: Wir entriegeln Ihre Tür ohne Spuren am Schloss.",
            serviceBohren: "Bei defekten Schlössern in Leihgestern setzen wir Präzisionsbohrer ein und wechseln den Zylinder sofort.",
            service247: "24/7 Notdienst für Leihgestern: Immer erreichbar, immer professionell."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Leihgestern?", answer: "Wir erreichen Leihgestern in ca. 16 Minuten." },
            { question: "Was kostet die Notöffnung?", answer: "Festpreis ab 99 Euro für zugefallene Türen, werktags tagsüber." },
            { question: "Sind Sie ein regionaler Betrieb?", answer: "Ja, Schlüssel Schmiede Wetzlar — ein lokaler Handwerksbetrieb aus der Region." }
        ],
        neighbors: ["schluesseldienst-linden", "schluesseldienst-huettenberg", "schluesseldienst-giessen"]
    },
    {
        id: "sinn",
        slug: "schluesseldienst-sinn",
        name: "Sinn",
        plz: "35764",
        coordinates: { latitude: 50.6500, longitude: 8.3350 },
        logistics: { drivingTimeMinutes: "22", distanceFromHQ: 20 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Sinn — 24/7 Türöffnung | Festpreis ab 99€", metaDescription: "Schlüsseldienst Sinn im Lahn-Dill-Kreis. In 22 Min. da. Festpreis ab 99€. Jetzt anrufen: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Sinn? Unser Schlüsseldienst erreicht Sie in ca. 22 Minuten — zum transparenten Festpreis.",
            mainText: `<p>Die Gemeinde Sinn liegt im nördlichen Lahn-Dill-Kreis an der Dill und ist über die B277 gut an das regionale Straßennetz angebunden. Mit einer lebendigen Gemeindestruktur und mehreren Ortsteilen bietet Sinn attraktives Wohnen im Dilltal. Als <strong>Schlüsseldienst Sinn</strong> sind wir Ihr zuverlässiger Partner bei Schlüsselnotfällen in der gesamten Gemeinde.</p>
<p>Die typische Bebauung in Sinn umfasst Einfamilienhäuser, Reihenhäuser und einige Mehrfamilienhäuser. Unsere erfahrenen Monteure sind mit den gängigen Schließsystemen der Region bestens vertraut und öffnen zugefallene Türen in nahezu allen Fällen zerstörungsfrei.</p>
<p>Über die B277 erreichen wir Sinn in ca. 22 Minuten. Unser Festpreis ab 99 Euro gibt Ihnen finanzielle Planungssicherheit — mögliche Anfahrtskosten werden Ihnen vorab am Telefon transparent mitgeteilt.</p>`,
            serviceZerstörungsfrei: "In Sinn öffnen wir zugefallene Türen mit professionellen Picking-Techniken — schnell, sauber und beschädigungsfrei.",
            serviceBohren: "Defektes Schloss in Sinn? Wir bohren kontrolliert und verbauen einen neuen Sicherheitszylinder direkt vor Ort.",
            service247: "24/7-Notdienst für Sinn: Wir sind rund um die Uhr erreichbar — auch nachts und an Feiertagen."
        },
        faqs: [
            { question: "Wie weit ist Sinn von Wetzlar?", answer: "Sinn liegt ca. 20 km nördlich von Wetzlar. Unsere Monteure brauchen rund 22 Minuten." },
            { question: "Decken Sie die gesamte Gemeinde Sinn ab?", answer: "Ja, wir kommen in alle Ortsteile der Gemeinde Sinn — schnell und zuverlässig." },
            { question: "Was kostet die Türöffnung in Sinn?", answer: "Festpreis ab 99 Euro für zugefallene Türen. Mögliche Anfahrtskosten nennen wir am Telefon." }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-ehringshausen", "schluesseldienst-amdorf"]
    },
    {
        id: "sinn-amdorf",
        slug: "schluesseldienst-amdorf",
        name: "Amdorf",
        plz: "35764",
        coordinates: { latitude: 50.6400, longitude: 8.3500 },
        logistics: { drivingTimeMinutes: "23", distanceFromHQ: 21 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Amdorf — 24/7 Notdienst | Festpreis ab 99€", metaDescription: "Schlüsseldienst Amdorf bei Sinn. 23 Min. Anfahrt, Festpreis ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Schlüssel vergessen in Amdorf? Wir kommen in ca. 23 Minuten — professionell und zum Festpreis.",
            mainText: `<p>Amdorf ist ein kleiner Ortsteil der Gemeinde Sinn im nördlichen Dilltal. Der ruhige Ort bietet ländliches Wohnen mit kurzen Wegen in die umliegenden Zentren. Als <strong>Schlüsseldienst Amdorf</strong> stehen wir Ihnen auch in den kleineren Ortsteilen des Lahn-Dill-Kreises professionell zur Seite.</p>
<p>Zugefallene Türen öffnen wir in Amdorf routiniert und zerstörungsfrei. Bei Schlüsselverlust tauschen wir den Zylinder direkt vor Ort aus.</p>
<p>Anfahrtszeit: ca. 23 Minuten. Festpreis ab 99 Euro — verbindlich und transparent.</p>`,
            serviceZerstörungsfrei: "In Amdorf öffnen wir Ihre zugefallene Tür schonend — ohne den Zylinder beschädigen zu müssen.",
            serviceBohren: "Bei Schlossdefekten in Amdorf bohren wir kontrolliert und setzen sofort einen neuen Zylinder ein.",
            service247: "Amdorf: Unser 24/7-Notdienst ist jederzeit erreichbar."
        },
        faqs: [
            { question: "Kommen Sie bis nach Amdorf?", answer: "Ja, Amdorf gehört zu unserem Einsatzgebiet. Wir sind in ca. 23 Minuten da." },
            { question: "Was kostet die Türöffnung?", answer: "Festpreis ab 99 Euro für zugefallene Standardtüren." },
            { question: "Bieten Sie auch Notdienst am Wochenende?", answer: "Ja, unser 24/7-Dienst gilt auch samstags, sonntags und an Feiertagen." }
        ],
        neighbors: ["schluesseldienst-sinn", "schluesseldienst-herborn", "schluesseldienst-ehringshausen"]
    },
    {
        id: "greifenstein-bissenberg",
        slug: "schluesseldienst-bissenberg",
        name: "Bissenberg",
        plz: "35753",
        coordinates: { latitude: 50.5800, longitude: 8.3200 },
        logistics: { drivingTimeMinutes: "20", distanceFromHQ: 18 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Bissenberg — 24/7 | Festpreis ab 99€", metaDescription: "Schlüsseldienst Bissenberg bei Greifenstein. 20 Min. Anfahrt, Festpreis ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Bissenberg? In ca. 20 Minuten ist unser Monteur bei Ihnen — zum fairen Festpreis.",
            mainText: `<p>Bissenberg gehört zur Gemeinde Greifenstein im westlichen Lahn-Dill-Kreis. Die ländliche Lage auf den Höhen des Westerwaldes bietet Ruhe und Natur pur. Als <strong>Schlüsseldienst Bissenberg</strong> bringen wir professionelle Hilfe auch in diese Region.</p>
<p>Unsere Techniker öffnen zugefallene Türen in Bissenberg zerstörungsfrei und professionell.</p>
<p>Anfahrtszeit: ca. 20 Minuten. Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "Schonende Türöffnung in Bissenberg: Ihr Schloss bleibt beim Öffnen vollständig intakt.",
            serviceBohren: "Bei defekten Schlössern in Bissenberg arbeiten wir mit Präzisionswerkzeug und ersetzen den Zylinder sofort.",
            service247: "Bissenberg: Schlüsselnotdienst rund um die Uhr — auch nachts und feiertags."
        },
        faqs: [
            { question: "Wie weit ist Bissenberg?", answer: "Ca. 18 km westlich von Wetzlar. Wir brauchen rund 20 Minuten." },
            { question: "Was kostet der Notdienst?", answer: "Festpreis ab 99 Euro, Anfahrtskosten werden vorab am Telefon genannt." },
            { question: "Sind Sie ein regionaler Betrieb?", answer: "Ja, Schlüssel Schmiede Wetzlar — lokal und ohne Vermittlung." }
        ],
        neighbors: ["schluesseldienst-greifenstein", "schluesseldienst-breitenbach", "schluesseldienst-leun"]
    },
    {
        id: "greifenstein-breitenbach",
        slug: "schluesseldienst-breitenbach",
        name: "Breitenbach",
        plz: "35753",
        coordinates: { latitude: 50.5900, longitude: 8.3100 },
        logistics: { drivingTimeMinutes: "22", distanceFromHQ: 20 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Breitenbach — 24/7 Notdienst | Ab 99€", metaDescription: "Schlüsseldienst Breitenbach bei Greifenstein. 22 Min. Anfahrt, Festpreis ab 99€. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Tür zu in Breitenbach? In ca. 22 Minuten ist unser Monteur da — professionell und zum Festpreis.",
            mainText: `<p>Breitenbach ist ein Ortsteil der Gemeinde Greifenstein im westlichen Lahn-Dill-Kreis. Die ruhige Lage inmitten der mittelhessischen Landschaft macht den Ort zum idealen Rückzugsort. Als <strong>Schlüsseldienst Breitenbach</strong> stehen wir Ihnen auch hier schnell zur Seite.</p>
<p>Zugefallene Türen öffnen wir zerstörungsfrei. Bei Schlüsselverlust haben wir Ersatzzylinder direkt im Einsatzfahrzeug.</p>
<p>Anfahrtszeit: ca. 22 Minuten. Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "In Breitenbach öffnen wir Ihre Tür ohne Beschädigungen — schonend und zuverlässig.",
            serviceBohren: "Bei Schlossdefekten in Breitenbach bohren wir kontrolliert und tauschen den Zylinder sofort.",
            service247: "Breitenbach: 24/7-Notdienst — jederzeit erreichbar."
        },
        faqs: [
            { question: "Kommen Sie nach Breitenbach?", answer: "Ja, Breitenbach gehört zu unserem Einsatzgebiet. Wir sind in ca. 22 Minuten da." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis, Anfahrtskosten vorab am Telefon." },
            { question: "Können Sie auch einen Tresor öffnen?", answer: "Ja, wir öffnen neben Haus- und Wohnungstüren auch Tresore, Briefkästen und Autotüren." }
        ],
        neighbors: ["schluesseldienst-greifenstein", "schluesseldienst-bissenberg", "schluesseldienst-ehringshausen"]
    }
];
