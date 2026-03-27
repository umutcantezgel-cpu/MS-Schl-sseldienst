import { LocationData } from "./locations";

/**
 * ══════════════════════════════════════════════════════════════
 * Wetzlar Nauborn (fehlender Stadtteil) + 8 Kernstadt-Bezirke
 * Ring 1 — 0-3 km, keine Anfahrtskosten
 * ══════════════════════════════════════════════════════════════
 */
export const wetzlarBezirkeLocations: LocationData[] = [
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // NAUBORN — Offizieller Stadtteil (KRITISCH)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "wetzlar-nauborn",
        slug: "schluesseldienst-wetzlar-nauborn",
        name: "Wetzlar-Nauborn",
        plz: "35580",
        coordinates: { latitude: 50.5300, longitude: 8.4914 },
        logistics: { drivingTimeMinutes: "5-8", distanceFromHQ: 4 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)" },
        seo: {
            metaTitle: "Schlüsseldienst Wetzlar-Nauborn — Türöffnung ab 99€ | 24/7",
            metaDescription: "Schlüsseldienst Wetzlar-Nauborn: In 5-8 Min. vor Ort im Wetzbachtal. Festpreis ab 99€, keine Anfahrtskosten. 24/7 Notdienst: 06441-8056544"
        },

        routeDescription: "Von unserem Standort in Wetzlar führt die Route über die Nauborner Straße (L3284) direkt ins Wetzbachtal. Über die Stoppelberger Hohl und die Karl-Kellner-Straße navigieren wir gezielt in jeden Winkel Nauborns.",
        mainRoad: "L3284",
        distanceKm: 4,
        character: "Zweitgrößter Stadtteil Wetzlars im idyllischen Wetzbachtal — ehemaliges Bergarbeiterdorf mit hoher Wohn- und Lebensqualität",
        populationApprox: "~4.000",
        landmark: "Evangelische Kirche Nauborn (romanische Hallenkirche, hessisches Kulturdenkmal)",
        buildingTypes: "Historische Fachwerkhäuser im alten Ortskern, Nachkriegs-Siedlungshäuser, moderne Neubaugebiete mit klimafreundlichen Wohngebäuden und Tiefgaragen.",
        parkingInfo: "In den engen Gassen des historischen Ortskerns nutzen wir kompakte Einsatzfahrzeuge. In den Neubaugebieten stehen ausreichend Parkflächen zur Verfügung.",
        heroVariant: "Ausgesperrt im Wetzbachtal? Ihr Schlüsseldienst für Nauborn ist sofort da.",
        fareInfo: "Nauborn ist ein offizieller Stadtteil von Wetzlar. Deshalb berechnen wir in ganz Nauborn — vom historischen Ortskern bis zu den Neubaugebieten — absolut keine Anfahrtskosten.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Tür im alten Ortskern",
                description: "Die schweren Holztüren der historischen Fachwerkhäuser im Nauborner Zentrum erfordern besonders schonende Öffnungstechniken. Mit feinfühligen Lockpicking-Methoden öffnen wir ohne den kleinsten Kratzer."
            },
            {
                icon: "building",
                title: "Neubau-Sicherheitstür klemmt",
                description: "In den modernen Wohngebieten Nauborns sind hochwertige Mehrfachverriegelungen Standard. Unsere Techniker kennen die Mechanik dieser Systeme und entriegeln sie professionell."
            },
            {
                icon: "shield-alert",
                title: "Schlüsselverlust nach Wanderung am Stoppelberg",
                description: "Nach einem Ausflug zum Stoppelberg (402 m) den Schlüssel verloren? Wir öffnen Ihre Haustür und tauschen den Zylinder direkt vor Ort aus — für Ihre Sicherheit."
            }
        ],

        aboutText: `
<p>Der Stadtteil <strong>Nauborn</strong> liegt südwestlich der Wetzlarer Innenstadt, eingebettet in das malerische <strong>Wetzbachtal</strong>, das historisch auch als „Siebenmühlental" bekannt ist — benannt nach den sieben Mühlen, die einst das Tal prägten. Von den ursprünglichen Mühlenbetrieben existieren noch zwei im Ort. Mit rund 4.000 Einwohnern ist Nauborn nach Niedergirmes der zweitgrößte Stadtteil Wetzlars und verbindet ländliche Idylle mit urbaner Anbindung.</p>

<h3>Vom Bergarbeiterdorf zum modernen Wohnort</h3>
<p>Ende des 19. Jahrhunderts war Nauborn ein typisches mittelhessisches Bergarbeiterdorf, geprägt durch Kleinlandwirtschaft und die bedeutenden Eisenerzbergwerke Uranus, Juno und Amanda in der Region. Heute hat sich Nauborn zu einem attraktiven Wohnstandort mit hoher Lebensqualität entwickelt. Die Infrastruktur umfasst Geschäfte, Ärzte, Apotheken und Banken — alles im Ort verfügbar, ohne in die Kernstadt fahren zu müssen.</p>

<h3>Keine Anfahrtskosten im gesamten Wetzbachtal</h3>
<p>Als offizieller Stadtteil von Wetzlar (PLZ 35580) liegt Nauborn vollständig in unserem kostenfreien Kern-Einsatzgebiet. Über die L3284, die kürzlich grundlegend saniert wurde, erreichen unsere Monteure jeden Winkel Nauborns in nur 5 bis 8 Minuten. Die Anfahrt ist für Sie komplett kostenfrei — Ihr Festpreis von 99 Euro ist genau das: ein Festpreis ohne versteckte Aufschläge.</p>

<h3>Schonende Öffnung für jede Nauborner Bausubstanz</h3>
<p>Nauborns Architektur ist vielfältig: Im historischen Ortskern dominieren liebevoll erhaltene Fachwerkhäuser und denkmalgeschützte Gebäude wie die romanische Evangelische Kirche und die Dickesmühle. Am Ortsrand entstehen moderne, klimafreundliche Neubauten mit Tiefgaragen und hochwertigen Sicherheitstüren. Unsere Techniker beherrschen das gesamte Spektrum — von der behutsamen Öffnung jahrhundertealter Holztüren bis zur professionellen Entriegelung modernster Mehrfachverriegelungen.</p>

<h3>Der höchste Punkt Wetzlars</h3>
<p>Mit dem Stoppelberg (402 Meter) liegt der höchste Punkt der gesamten Stadt Wetzlar in Nauborn. Der „Wilde Stein" bietet einen atemberaubenden Ausblick über den Stadtteil und das Wetzbachtal. Egal ob Sie von einer Wanderung zurückkehren und feststellen, dass der Schlüssel fehlt, oder ob abends plötzlich das Türschloss klemmt: Wir sind in wenigen Minuten bei Ihnen und lösen das Problem — professionell, fair und zum Festpreis.</p>
`,

        localTestimonials: [
            {
                name: "Familie Hoffmann",
                quote: "Sonntagabend in Nauborn ausgesperrt — der Monteur war in 7 Minuten da! Tür wurde ohne jeden Kratzer geöffnet, obwohl es eine alte Holztür ist. Und wirklich null Anfahrtskosten. Top-Service!",
                rating: 5
            },
            {
                name: "Tobias L.",
                quote: "Nach dem Joggen am Stoppelberg festgestellt: Schlüssel weg. Der Schlüsseldienst war super schnell da, hat die Tür geöffnet und gleich einen neuen Zylinder eingebaut. Alles zum vorher genannten Festpreis.",
                rating: 5
            },
            {
                name: "Ingrid M.",
                quote: "Im Neubaugebiet die Sicherheitstür zugezogen. Hatte Angst vor hohen Kosten. Aber 99 Euro werktags, keine Anfahrt — genau wie am Telefon gesagt. Sehr seriös!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgesperrt im idyllischen Wetzbachtal? Keine Sorge — als offizieller Stadtteil von Wetzlar sind wir in nur 5 bis 8 Minuten bei Ihnen in Nauborn. Ohne Anfahrtskosten, zum garantierten Festpreis.",
            mainText: "",
            serviceZerstörungsfrei: "In Wetzlar-Nauborn öffnen wir zugefallene Türen — vom Fachwerkhaus bis zum Neubau — in 99% der Fälle absolut zerstörungsfrei.",
            serviceBohren: "Bei abgebrochenen Schlüsseln oder defekten Zylindern in Nauborn verwenden wir Spezialwerkzeug und tauschen den Zylinder sofort vor Ort aus.",
            service247: "Unser 24/7-Notdienst steht Ihnen in Wetzlar-Nauborn an 365 Tagen im Jahr zur Verfügung — auch nachts und an Feiertagen."
        },
        faqs: [
            {
                question: "Ist Nauborn wirklich im kostenlosen Anfahrtsgebiet?",
                answer: "Ja! Nauborn ist ein offizieller Stadtteil von Wetzlar (PLZ 35580) und gehört zu unserem Kern-Einsatzgebiet. Die Anfahrt ist für Sie komplett kostenfrei."
            },
            {
                question: "Wie lange braucht der Monteur nach Nauborn?",
                answer: "Über die L3284 erreichen wir Nauborn in 5 bis 8 Minuten — sowohl den alten Ortskern als auch die Neubaugebiete."
            },
            {
                question: "Können Sie die historischen Türen im Nauborner Ortskern öffnen?",
                answer: "Absolut. Unsere Techniker sind auf die Mechanik älterer Beschläge und Fachwerktüren spezialisiert. Wir arbeiten mit maximaler Sorgfalt und hinterlassen keine Spuren."
            },
            {
                question: "Was kostet die Türöffnung in Nauborn am Wochenende?",
                answer: "An Wochenenden und Feiertagen beträgt unser Festpreis 179 Euro — ohne Anfahrtskosten, da Nauborn zum Wetzlarer Kerngebiet gehört."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-hermannstein", "schluesseldienst-schoeffengrund", "schluesseldienst-wetzlar-steindorf"]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // KERNSTADT-BEZIRKE (8 Pages)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "wetzlar-dalheim",
        slug: "schluesseldienst-wetzlar-dalheim",
        name: "Wetzlar-Dalheim",
        plz: "35578",
        coordinates: { latitude: 50.5450, longitude: 8.4950 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 2 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Wetzlar-Dalheim — In 5 Min. da | Ab 99€", metaDescription: "Schlüsseldienst für Wetzlar-Dalheim. 3-5 Min. Anfahrt, keine Anfahrtskosten. Festpreis ab 99€. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Dalheim? Als Ihr lokaler Schlüsseldienst sind wir in 3 bis 5 Minuten bei Ihnen — ohne Anfahrtskosten, zum Festpreis.",
            mainText: `<p>Dalheim ist ein Stadtbezirk der Wetzlarer Kernstadt mit rund 3.250 Einwohnern. Der Bezirk zeichnet sich durch parkähnliche Grünflächen aus — eine Besonderheit, die auf die schwierigen Baugrundverhältnisse durch den ehemaligen Bergbau zurückzuführen ist. Archäologische Funde belegen, dass Dalheim bereits vor über 7.000 Jahren besiedelt war. Als <strong>Schlüsseldienst Wetzlar-Dalheim</strong> sind wir Ihr direkter Nachbar und in wenigen Minuten bei Ihnen.</p>
<p>Die Bebauung in Dalheim umfasst sowohl Nachkriegs-Siedlungshäuser als auch modernere Wohngebäude. Unsere Techniker kennen die gängigen Schließsysteme und öffnen zugefallene Türen routiniert und zerstörungsfrei. Als Teil der Wetzlarer Kernstadt zahlen Sie in Dalheim keine Anfahrtskosten.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Dalheim öffnen wir schonend und professionell — ohne Schäden an Schloss oder Rahmen.",
            serviceBohren: "Bei defekten Zylindern in Dalheim bohren wir kontrolliert und verbauen sofort einen neuen Markenzylinder.",
            service247: "24/7-Notdienst für Dalheim: In wenigen Minuten Fahrzeit und immer erreichbar."
        },
        faqs: [
            { question: "Fallen in Dalheim Anfahrtskosten an?", answer: "Nein. Dalheim ist ein Kernstadt-Bezirk von Wetzlar. Die Anfahrt ist für Sie komplett kostenfrei." },
            { question: "Wie schnell ist der Monteur in Dalheim?", answer: "Dalheim liegt nur 2 km von unserem Standort entfernt. Wir sind in 3 bis 5 Minuten bei Ihnen." },
            { question: "Was kostet die Türöffnung in Dalheim?", answer: "Werktags tagsüber öffnen wir zugefallene Türen zum Festpreis von 99 Euro — ohne Aufschläge." }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-niedergirmes", "schluesseldienst-wetzlar-nauborn"]
    },
    {
        id: "wetzlar-altstadt",
        slug: "schluesseldienst-wetzlar-altstadt",
        name: "Wetzlar-Altstadt",
        plz: "35578",
        coordinates: { latitude: 50.5558, longitude: 8.5020 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 1 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Wetzlar-Altstadt — Schonende Öffnung | Ab 99€", metaDescription: "Schlüsseldienst für die Wetzlarer Altstadt. Spezialisiert auf denkmalgeschützte Türen. In 3 Min. da. Festpreis ab 99€. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in der historischen Wetzlarer Altstadt? Wir öffnen denkmalgeschützte Türen besonders schonend — in nur 3 Minuten bei Ihnen.",
            mainText: `<p>Die <strong>Wetzlarer Altstadt</strong> ist das historische Herz der Goethestadt. Restaurierte Fachwerkhäuser, enge Gassen und kleine Plätze wie der Fischmarkt, Eisenmarkt und Kornmarkt prägen das Bild. Das älteste Fachwerkhaus stammt aus dem Jahr 1356. Als <strong>Schlüsseldienst Wetzlar-Altstadt</strong> sind wir auf die behutsame Öffnung denkmalgeschützter Türen spezialisiert.</p>
<p>Die Altstadtbauten stellen besondere Anforderungen: Massive Holztüren mit historischen Beschlägen erfordern Fingerspitzengefühl statt roher Gewalt. Unsere Techniker nutzen ausschließlich materialschonende Spezialwerkzeuge. Die enge Gassenlage meistern wir mit kompakten Einsatzfahrzeugen.</p>`,
            serviceZerstörungsfrei: "In der Altstadt arbeiten wir mit höchster Sorgfalt — denkmalgeschützte Türen werden ohne jeden Kratzer geöffnet.",
            serviceBohren: "Bei defekten historischen Schlössern in der Altstadt finden wir stilechte Ersatzlösungen, die zum Gebäudecharakter passen.",
            service247: "Rund-um-die-Uhr-Notdienst in der Wetzlarer Altstadt — wir sind in 3 Minuten da."
        },
        faqs: [
            { question: "Können Sie historische Altstadttüren öffnen?", answer: "Ja, wir sind auf denkmalgeschützte Fachwerkhäuser und antike Beschläge spezialisiert. Wir arbeiten mit maximaler Sorgfalt." },
            { question: "Kommen Sie mit dem Fahrzeug in die engen Gassen?", answer: "Ja, wir nutzen kompakte Einsatzfahrzeuge und haben Sondergenehmigungen für die Fußgängerzone." },
            { question: "Was kostet die Öffnung in der Altstadt?", answer: "Unser Festpreis ab 99 Euro gilt auch für denkmalgeschützte Gebäude. Keine Aufpreise für historische Türen." }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-dalheim", "schluesseldienst-wetzlar-niedergirmes"]
    },
    {
        id: "wetzlar-neustadt",
        slug: "schluesseldienst-wetzlar-neustadt",
        name: "Wetzlar-Neustadt",
        plz: "35578",
        coordinates: { latitude: 50.5570, longitude: 8.5080 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 1 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Wetzlar-Neustadt — 24/7 Notdienst | Ab 99€", metaDescription: "Schlüsseldienst Wetzlar-Neustadt. In 3 Min. vor Ort, Festpreis ab 99€, keine Anfahrtskosten. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Tür zu in der Wetzlarer Neustadt? Wir sind in nur 3 Minuten bei Ihnen — professionell, schnell und zum Festpreis.",
            mainText: `<p>Die <strong>Neustadt</strong> grenzt unmittelbar an die historische Altstadt und ist ein zentraler Kernstadt-Bezirk Wetzlars. Die Mischung aus gründerzeitlicher Bebauung und modernisierte Wohnhäusern ist typisch für diesen Bezirk. Als <strong>Schlüsseldienst Wetzlar-Neustadt</strong> sind wir in wenigen Gehminuten von Ihnen entfernt.</p>
<p>Ob Gründerzeit-Altbau oder renovierte Stadtwohnung — unsere Techniker öffnen alle gängigen Schließsysteme zerstörungsfrei und zum transparenten Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in der Neustadt öffnen wir schonend — von Altbau-Türen bis zu modernen Sicherheitsschlössern.",
            serviceBohren: "Bei Schlüsselverlust in der Neustadt tauschen wir den Zylinder direkt vor Ort aus.",
            service247: "24/7-Notdienst für die Wetzlarer Neustadt — immer erreichbar, immer schnell."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in der Neustadt?", answer: "Die Neustadt liegt im absoluten Zentrum Wetzlars. Wir sind in etwa 3 Minuten bei Ihnen." },
            { question: "Fallen Anfahrtskosten an?", answer: "Nein, die Neustadt gehört zur Kernstadt. Die Anfahrt ist kostenfrei." }
        ],
        neighbors: ["schluesseldienst-wetzlar-altstadt", "schluesseldienst-wetzlar", "schluesseldienst-wetzlar-dalheim"]
    },
    {
        id: "wetzlar-bueblingshausen",
        slug: "schluesseldienst-wetzlar-bueblingshausen",
        name: "Wetzlar-Büblingshausen",
        plz: "35578",
        coordinates: { latitude: 50.5430, longitude: 8.5100 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 2 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Wetzlar-Büblingshausen — Festpreis ab 99€ | 24/7", metaDescription: "Schlüsseldienst Büblingshausen: In 5 Min. vor Ort. Festpreis ab 99€, keine Anfahrtskosten. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt in Büblingshausen? Unser Schlüsseldienst ist in 3 bis 5 Minuten bei Ihnen — zum garantierten Festpreis.",
            mainText: `<p><strong>Büblingshausen</strong> liegt im Süden Wetzlars und ist überwiegend durch Siedlungs- und Einfamilienhäuser geprägt. Auf dem Gelände der ehemaligen Spilburg-Kaserne entstanden neue Wohnquartiere. Als <strong>Schlüsseldienst Wetzlar-Büblingshausen</strong> sind wir schnell und zuverlässig bei Ihnen.</p>
<p>Die ruhigen Wohnstraßen in Büblingshausen bieten gute Parkmöglichkeiten für unsere Monteure. Ob zugefallene Eingangstür im Reihenhaus oder klemmende Sicherheitstür im Neubau — wir öffnen zum Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "In Büblingshausen öffnen wir zugefallene Türen routiniert und ohne jede Beschädigung.",
            serviceBohren: "Bei Schlossdefekten in Büblingshausen bohren wir kontrolliert und ersetzen den Zylinder sofort.",
            service247: "Büblingshausen: Unser Notdienst ist 24/7 erreichbar — ohne Callcenter-Warteschleifen."
        },
        faqs: [
            { question: "Kommen Anfahrtskosten in Büblingshausen hinzu?", answer: "Nein. Büblingshausen ist ein Bezirk der Wetzlarer Kernstadt. Die Anfahrt ist komplett kostenfrei." },
            { question: "Wie schnell sind Sie in Büblingshausen?", answer: "In 3 bis 5 Minuten — Büblingshausen liegt nur 2 km von unserem Standort entfernt." }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-dalheim", "schluesseldienst-wetzlar-hermannstein"]
    },
    {
        id: "wetzlar-sturzkopf",
        slug: "schluesseldienst-wetzlar-sturzkopf",
        name: "Wetzlar-Sturzkopf",
        plz: "35578",
        coordinates: { latitude: 50.5480, longitude: 8.4980 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 2 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Wetzlar-Sturzkopf — Notdienst 24/7 | Ab 99€", metaDescription: "Schlüsseldienst für Wetzlar-Sturzkopf. In 5 Min. da, Festpreis ab 99€, keine Anfahrtskosten. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Tür zugefallen am Sturzkopf? Unser Monteur ist in 3 bis 5 Minuten bei Ihnen — zum fairen Festpreis.",
            mainText: `<p>Der <strong>Sturzkopf</strong> ist ein Wohnbezirk der Wetzlarer Kernstadt, der nach dem Zweiten Weltkrieg oberhalb der Stoppelberger Hohl entstanden ist. Das Gebiet zeichnet sich durch ruhige Wohnstraßen und Einfamilienhäuser aus. Als <strong>Schlüsseldienst Wetzlar-Sturzkopf</strong> sind wir Ihr schneller, lokaler Partner bei Schlüsselnotfällen.</p>
<p>Die typische Nachkriegsbebauung am Sturzkopf weist solide Schließsysteme auf. Unsere geschulten Techniker öffnen zugefallene Türen zerstörungsfrei zum Festpreis ab 99 Euro — ohne versteckte Kosten.</p>`,
            serviceZerstörungsfrei: "Am Sturzkopf öffnen wir Ihre zugefallene Tür routiniert und ohne Beschädigungen.",
            serviceBohren: "Bei defekten Schlössern am Sturzkopf arbeiten wir mit Präzisionsbohrern und ersetzen den Zylinder sofort.",
            service247: "Schlüsselnotdienst am Sturzkopf: 24 Stunden erreichbar, 365 Tage im Jahr."
        },
        faqs: [
            { question: "Ist der Sturzkopf im kostenlosen Gebiet?", answer: "Ja, der Sturzkopf gehört zur Kernstadt Wetzlar. Keine Anfahrtskosten für Sie." },
            { question: "Wie lange brauchen Sie zum Sturzkopf?", answer: "Wir sind in 3 bis 5 Minuten bei Ihnen — der Sturzkopf liegt nur 2 km entfernt." }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-dalheim", "schluesseldienst-wetzlar-nauborn"]
    },
    {
        id: "wetzlar-stoppelberger-hohl",
        slug: "schluesseldienst-wetzlar-stoppelberger-hohl",
        name: "Wetzlar-Stoppelberger Hohl",
        plz: "35578",
        coordinates: { latitude: 50.5460, longitude: 8.4950 },
        logistics: { drivingTimeMinutes: "5", distanceFromHQ: 2 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Stoppelberger Hohl Wetzlar — Festpreis | 24/7", metaDescription: "Schlüsseldienst für die Stoppelberger Hohl in Wetzlar. In 5 Min. da, ab 99€ Festpreis. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Ausgesperrt an der Stoppelberger Hohl? Wir sind in etwa 5 Minuten da — mit Festpreisgarantie und ohne Anfahrtskosten.",
            mainText: `<p>Die <strong>Stoppelberger Hohl</strong> ist ein etablierter Wohnbezirk im südwestlichen Bereich der Wetzlarer Kernstadt. Die Lage am Hang bietet vielen Bewohnern einen schönen Blick über das Stadtgebiet. Als <strong>Schlüsseldienst Stoppelberger Hohl</strong> garantieren wir schnelle Hilfe bei Türöffnungen aller Art.</p>
<p>Die Wohnbebauung reicht von klassischen Einfamilienhäusern bis zu Reihenhaussiedlungen. Unsere Techniker öffnen alle gängigen Schließsysteme professionell und zerstörungsfrei.</p>`,
            serviceZerstörungsfrei: "An der Stoppelberger Hohl öffnen wir zugefallene Türen schonend und spurenlos.",
            serviceBohren: "Defekte Zylinder tauschen wir an der Stoppelberger Hohl sofort vor Ort aus.",
            service247: "24/7-Notdienst für die Stoppelberger Hohl — jederzeit erreichbar."
        },
        faqs: [
            { question: "Ist die Stoppelberger Hohl im kostenfreien Gebiet?", answer: "Ja, als Kernstadt-Bezirk zahlen Sie keine Anfahrtskosten." },
            { question: "Wie schnell kommen Sie zur Stoppelberger Hohl?", answer: "In etwa 5 Minuten — der Bezirk liegt direkt im Wetzlarer Stadtgebiet." }
        ],
        neighbors: ["schluesseldienst-wetzlar-sturzkopf", "schluesseldienst-wetzlar-nauborn", "schluesseldienst-wetzlar-dalheim"]
    },
    {
        id: "wetzlar-silhoefer-aue",
        slug: "schluesseldienst-wetzlar-silhoefer-aue",
        name: "Wetzlar-Silhöfer Aue/Westend",
        plz: "35578",
        coordinates: { latitude: 50.5580, longitude: 8.4920 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 1 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Silhöfer Aue Wetzlar — In 3 Min. da | 99€", metaDescription: "Schlüsseldienst für die Silhöfer Aue und das Westend in Wetzlar. In 3 Min. da, ab 99€ Festpreis. Jetzt: 06441-8056544" },
        content: {
            heroIntro: "Schlüsselnotfall in der Silhöfer Aue oder im Westend? Wir sind in nur 3 Minuten bei Ihnen — zum transparenten Festpreis.",
            mainText: `<p>Die <strong>Silhöfer Aue</strong> und das <strong>Westend</strong> liegen westlich der Wetzlarer Innenstadt, nahe der Lahn. Der Bezirk verbindet innenstadtnahes Wohnen mit Grünflächen entlang des Flusses. Als <strong>Schlüsseldienst Silhöfer Aue/Westend</strong> sind wir Ihr schnellster Partner bei Schlüsselnotfällen — in nur 3 Minuten bei Ihnen.</p>
<p>Die Bebauung umfasst Mietwohnungen, Mehrfamilienhäuser und vereinzelte Gewerbeobjekte. Unsere Techniker öffnen zugefallene Türen professionell und zerstörungsfrei zum Festpreis.</p>`,
            serviceZerstörungsfrei: "In der Silhöfer Aue öffnen wir Ihre zugefallene Tür spurenlos und professionell.",
            serviceBohren: "Bei Schlossdefekten im Westend verbauen wir sofort einen neuen Markenzylinder.",
            service247: "Notdienst Silhöfer Aue/Westend: 24/7 erreichbar, blitzschnelle Anfahrt."
        },
        faqs: [
            { question: "Wie schnell sind Sie in der Silhöfer Aue?", answer: "In nur 3 Minuten — der Bezirk liegt direkt neben unserem Einsatzgebiet im Zentrum." },
            { question: "Fallen Anfahrtskosten an?", answer: "Nein, die Silhöfer Aue ist Teil der Wetzlarer Kernstadt. Keine Anfahrtskosten." }
        ],
        neighbors: ["schluesseldienst-wetzlar-altstadt", "schluesseldienst-wetzlar", "schluesseldienst-wetzlar-neustadt"]
    },
    {
        id: "wetzlar-dillfeld",
        slug: "schluesseldienst-wetzlar-dillfeld",
        name: "Wetzlar-Dillfeld",
        plz: "35576",
        coordinates: { latitude: 50.5620, longitude: 8.5100 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 2 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Wetzlar-Dillfeld — 24/7 Notdienst | Festpreis", metaDescription: "Schlüsseldienst Wetzlar-Dillfeld. In 5 Min. vor Ort, Festpreis ab 99€, keine Anfahrtskosten. Notdienst: 06441-8056544" },
        content: {
            heroIntro: "Tür zu im Dillfeld? Unser Schlüsseldienst ist in 3 bis 5 Minuten vor Ort — zum transparenten Festpreis.",
            mainText: `<p>Das <strong>Dillfeld</strong> liegt im Norden der Wetzlarer Kernstadt, an der Mündung der Dill in die Lahn. Der Bezirk ist geprägt durch eine Mischung aus Wohn- und Gewerbebebauung und bietet gute Verkehrsanbindungen. Als <strong>Schlüsseldienst Wetzlar-Dillfeld</strong> sind wir schnell und zuverlässig bei Ihnen.</p>
<p>Die Gebäudestruktur im Dillfeld umfasst Mehrfamilienhäuser, Werkstätten und neuere Wohnkomplexe. Unsere Monteure sind auf die vielfältigen Schließsysteme bestens vorbereitet und öffnen zum Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "Im Dillfeld öffnen wir zugefallene Türen schonend und professionell — ohne Schäden.",
            serviceBohren: "Defekte Zylinder im Dillfeld tauschen wir sofort vor Ort gegen hochwertige Ersatzzylinder.",
            service247: "24/7-Notdienst für das Dillfeld: Jederzeit erreichbar, immer schnell."
        },
        faqs: [
            { question: "Ist das Dillfeld im kostenfreien Anfahrtsgebiet?", answer: "Ja, das Dillfeld gehört zur Wetzlarer Kernstadt. Keine Anfahrtskosten für Sie." },
            { question: "Wie schnell kommen Sie ins Dillfeld?", answer: "In 3 bis 5 Minuten — das Dillfeld liegt zentral im Wetzlarer Stadtgebiet." }
        ],
        neighbors: ["schluesseldienst-wetzlar-niedergirmes", "schluesseldienst-wetzlar", "schluesseldienst-wetzlar-naunheim"]
    }
];
