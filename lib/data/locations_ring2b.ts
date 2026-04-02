import { LocationData } from "./locations";

export const ring2bLocations: LocationData[] = [
    // --- RING 2 ERGÄNZUNGEN (Ortsteile der Ring-2 Gemeinden) ---
    {
        id: "solms-albshausen",
        slug: "schluesseldienst-albshausen",
        name: "Albshausen",
        plz: "35606",
        coordinates: { latitude: 50.5410, longitude: 8.4150 },
        logistics: {
            drivingTimeMinutes: "10",
            distanceFromHQ: 9,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Solms)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Albshausen — Schnelle Türöffnung | 24/7 Notdienst",
            metaDescription: "Schlüsseldienst Albshausen bei Solms. In 10 Min. vor Ort, Festpreis ab 99€, keine Anfahrtskosten. Jetzt anrufen: 06441-8056279!",
        },
        content: {
            heroIntro: "Ausgesperrt in Albshausen? Unser Schlüsseldienst ist in ca. 10 Minuten bei Ihnen. Festpreis ab 99€ — ohne versteckte Anfahrtskosten.",
            mainText: `
<p>Albshausen ist ein idyllischer Ortsteil von Solms im Lahn-Dill-Kreis, gelegen am westlichen Rand des Solmser Gemeindegebiets. Mit seinen ruhigen Wohnstraßen und dem dörflichen Charakter bietet Albshausen eine hohe Wohnqualität. Doch auch in dieser beschaulichen Umgebung kann ein zugefallenes Schloss schnell zur Stresssituation werden. Als Ihr <strong>Schlüsseldienst Albshausen</strong> sind wir in solchen Momenten Ihr verlässlicher Partner.</p>

<p>Die Bebauung in Albshausen besteht größtenteils aus Einfamilienhäusern und landwirtschaftlich genutzten Gebäuden. Unsere Techniker kennen die typischen Schließsysteme der Region und arbeiten stets mit dem Ziel, Ihre Tür zerstörungsfrei zu öffnen. Bei nur zugefallenen Türen gelingt uns das in über 99 Prozent aller Fälle.</p>

<p>Die direkte Anbindung über die Verbindungsstraßen von Solms nach Wetzlar ermöglicht uns eine zuverlässige Anfahrtszeit von rund 10 Minuten. In Albshausen fallen für Sie keine Anfahrtskosten an — unser Festpreis ab 99 Euro ist Ihre volle Kostensicherheit.</p>`,
            serviceZerstörungsfrei: "Zugefallene Haustüren in Albshausen öffnen wir mit feinfühligen Spezialtechniken — ohne Kratzer, ohne Bohren, ohne Folgekosten.",
            serviceBohren: "Bei defekten Zylindern oder abgebrochenen Schlüsseln in Albshausen tauschen wir das Schloss professionell direkt vor Ort aus.",
            service247: "Unser Notdienst für Albshausen ist rund um die Uhr erreichbar — auch nachts, am Wochenende und an Feiertagen.",
        },
        faqs: [
            { question: "Wie schnell kommt der Schlüsseldienst nach Albshausen?", answer: "Unsere Monteure erreichen Albshausen über die direkte Route von Wetzlar in ca. 10 Minuten." },
            { question: "Fallen in Albshausen Anfahrtskosten an?", answer: "Nein, Albshausen liegt in unserem erweiterten Kerngebiet. Die Anfahrt ist kostenfrei." },
            { question: "Was kostet eine Türöffnung in Albshausen?", answer: "Werktags tagsüber öffnen wir eine zugefallene Standardtür zum Festpreis von 99 Euro — ohne weitere Zusatzkosten." }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-niederbiel", "schluesseldienst-wetzlar-hermannstein"]
    },
    {
        id: "solms-niederbiel",
        slug: "schluesseldienst-niederbiel",
        name: "Niederbiel",
        plz: "35606",
        coordinates: { latitude: 50.5480, longitude: 8.4250 },
        logistics: {
            drivingTimeMinutes: "9",
            distanceFromHQ: 8,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Solms)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Niederbiel — Türöffnung ab 99€ Festpreis",
            metaDescription: "Ihr Schlüsseldienst für Niederbiel bei Solms. In 9 Min. vor Ort. Festpreis ab 99€, ohne Anfahrtskosten. 24/7 Notdienst: 06441-8056279",
        },
        content: {
            heroIntro: "Tür zugefallen in Niederbiel? Kein Grund zur Panik. Unser lokaler Schlüsseldienst ist in ca. 9 Minuten bei Ihnen — zum Festpreis und ohne versteckte Kosten.",
            mainText: `
<p>Niederbiel, ein gemütlicher Ortsteil der Gemeinde Solms, liegt nordwestlich von Wetzlar direkt an der Lahn. Der Ort verbindet die Vorzüge ländlichen Wohnens mit der Nähe zur Kreisstadt und ist über die B49 schnell erreichbar. In den ruhigen Seitenstraßen und entlang der Lahnufer finden sich vorwiegend Einfamilienhäuser und ältere Gebäudebestände — typisch für die Region und uns bestens vertraut.</p>

<p>Als <strong>Schlüsseldienst Niederbiel</strong> wissen wir genau, welche Schließsysteme in den Häusern der Umgebung verbaut sind. Von klassischen Profilzylindern bis zu modernen Mehrfachverriegelungen — wir bringen das passende Werkzeug mit und öffnen Ihre Tür in den allermeisten Fällen vollständig zerstörungsfrei.</p>

<p>Die Anfahrt von unserer Wetzlarer Basis dauert über die B49 nur rund 9 Minuten. Anfahrtskosten fallen für Niederbiel nicht an. Sie zahlen unseren transparenten Festpreis ab 99 Euro und wissen vorher genau, was auf der Rechnung steht.</p>`,
            serviceZerstörungsfrei: "In Niederbiel öffnen wir ins Schloss gefallene Türen mit bewährten Handwerkstechniken — Ihr Schloss bleibt dabei vollständig intakt.",
            serviceBohren: "Sollte ein Bohröffnung in Niederbiel nötig sein, arbeiten wir mit höchster Präzision und verbauen anschließend einen neuen Qualitätszylinder.",
            service247: "Schlüsselnotdienst Niederbiel: Erreichbar 24 Stunden am Tag, 365 Tage im Jahr. Kein Anrufbeantworter, sondern ein echter Mensch.",
        },
        faqs: [
            { question: "Ist Niederbiel im kostenfreien Anfahrtsgebiet?", answer: "Ja, Niederbiel gehört zu unserem erweiterten Nahgebiet. Anfahrtskosten fallen für Sie nicht an." },
            { question: "Wie teuer ist eine Notöffnung in Niederbiel?", answer: "Eine zugefallene Standardtür öffnen wir werktags tagsüber für den Festpreis von 99 Euro inkl. kostenloser Anfahrt." },
            { question: "Kann der Monteur auch am Wochenende nach Niederbiel kommen?", answer: "Selbstverständlich. Unser 24/7-Notdienst ist auch samstags, sonntags und feiertags für Niederbiel sofort einsatzbereit." }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-albshausen", "schluesseldienst-braunfels"]
    },
    {
        id: "asslar-bechlingen",
        slug: "schluesseldienst-bechlingen",
        name: "Bechlingen",
        plz: "35614",
        coordinates: { latitude: 50.5950, longitude: 8.4620 },
        logistics: {
            drivingTimeMinutes: "9",
            distanceFromHQ: 8,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Aßlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Bechlingen — Festpreis ab 99€ | Lokaler Notdienst",
            metaDescription: "Schlüsseldienst Bechlingen bei Aßlar. In 9 Min. da, Festpreis ab 99€, ohne Anfahrtskosten. Jetzt Notdienst rufen: 06441-8056279",
        },
        content: {
            heroIntro: "Vor verschlossener Tür in Bechlingen? Wir helfen sofort! In ca. 9 Minuten sind unsere Monteure bei Ihnen — zum festen Preis ab 99€.",
            mainText: `
<p>Bechlingen ist ein kleiner, ruhiger Ortsteil der Stadt Aßlar im Lahn-Dill-Kreis. Die dörfliche Struktur mit überwiegend freistehenden Einfamilienhäusern prägt das Ortsbild. Über die Landesstraße ist Bechlingen gut an Aßlar und damit an das Wetzlarer Stadtgebiet angebunden. Als <strong>Schlüsseldienst Bechlingen</strong> bieten wir Ihnen schnelle, professionelle Hilfe direkt vor Ihrer Haustür.</p>

<p>Die in Bechlingen üblichen Schließsysteme — von bewährten Profilzylindern bis zu modernen Sicherheitsschlössern — sind unserem Team aus der täglichen Arbeit bestens bekannt. Bei zugefallenen Türen setzen wir auf zerstörungsfreie Öffnungstechnik, die Ihren Türrahmen und Zylinder schont. Bei Schlüsselverlust oder abgebrochenen Schlüsseln haben wir Ersatzzylinder verschiedener Qualitätsstufen direkt im Fahrzeug.</p>

<p>Die Anfahrt nach Bechlingen dauert für uns rund 9 Minuten. Anfahrtskosten berechnen wir nicht — es gilt unser Festpreissystem ab 99 Euro, das Ihnen vor der Anfahrt transparent mitgeteilt wird.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Bechlingen öffnen wir in über 99% der Fälle spurlos — ohne den Zylinder auszutauschen.",
            serviceBohren: "Wenn das Schloss in Bechlingen defekt ist, bohren wir kontrolliert und wechseln den Zylinder fachgerecht vor Ort.",
            service247: "Bechlingen bei Aßlar: Unser Notdienst ist 24/7 erreichbar. Nachts wie tags, bei Regen wie bei Sonnenschein.",
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Bechlingen?", answer: "Unsere Monteure sind durchschnittlich in 9 Minuten in Bechlingen — dank der direkten Anbindung über Aßlar." },
            { question: "Gibt es versteckte Kosten in Bechlingen?", answer: "Nein. Unser Festpreis ab 99 Euro ist verbindlich. Anfahrtskosten fallen für Bechlingen nicht an." },
            { question: "Kommen Sie auch nachts nach Bechlingen?", answer: "Ja, unser 24-Stunden-Service gilt auch für Bechlingen. Für Nachteinsätze gilt ein transparenter Zuschlag." }
        ],
        neighbors: ["schluesseldienst-asslar", "schluesseldienst-berghausen", "schluesseldienst-werdorf"]
    },
    {
        id: "asslar-berghausen",
        slug: "schluesseldienst-berghausen",
        name: "Berghausen",
        plz: "35614",
        coordinates: { latitude: 50.6020, longitude: 8.4750 },
        logistics: {
            drivingTimeMinutes: "10",
            distanceFromHQ: 9,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Aßlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Berghausen bei Aßlar — 24/7 Türöffnung",
            metaDescription: "Türöffnung in Berghausen bei Aßlar: In 10 Min. vor Ort, Festpreis ab 99€, ohne versteckte Kosten. Notdienst: 06441-8056279",
        },
        content: {
            heroIntro: "Schlüssel vergessen in Berghausen? Unser Schlüsseldienst erreicht Sie in ca. 10 Minuten. Festpreis ab 99€, keine Anfahrtskosten.",
            mainText: `
<p>Berghausen, ein Ortsteil der Stadt Aßlar, liegt nördlich im Lahn-Dill-Kreis und ist von weitläufigen Feldern und Waldgebieten umgeben. Die ruhige Ortslage und die Nähe zur Natur machen Berghausen zu einem attraktiven Wohnort. Gleichzeitig ist der Ort über das Straßennetz in Richtung Aßlar und Wetzlar gut erreichbar — ein Vorteil, den wir als <strong>Schlüsseldienst Berghausen</strong> für Sie nutzen.</p>

<p>In Berghausen dominieren freistehende Wohnhäuser mit einer Mischung aus klassischen und modernen Schlössern. Ob die alte Haustür am Dorfplatz oder die Sicherheitstür einer Neubau-Doppelhaushälfte — unser erfahrenes Team öffnet behutsam und zerstörungsfrei, wann immer das möglich ist.</p>

<p>Die Anfahrt nach Berghausen dauert für unsere Techniker rund 10 Minuten. Im gesamten Nahgebiet von Aßlar erheben wir keine Anfahrtskosten. Unser transparenter Festpreis ab 99 Euro wird Ihnen vor der Anfahrt am Telefon mitgeteilt.</p>`,
            serviceZerstörungsfrei: "Zerstörungsfreie Türöffnung in Berghausen: Wir öffnen Ihre zugefallene Tür, ohne Spuren am Rahmen oder Zylinder zu hinterlassen.",
            serviceBohren: "Defektes Schloss in Berghausen? Wir bohren den Kern kontrolliert auf und verbauen sofort einen neuen Sicherheitszylinder.",
            service247: "Schlüsseldienst Berghausen: 24/7 erreichbar für jeden Notfall — schnell, professionell und zu fairen Preisen.",
        },
        faqs: [
            { question: "Wie weit ist Berghausen von Wetzlar entfernt?", answer: "Berghausen liegt ca. 9 km von unserer Basis in Wetzlar entfernt. Wir sind in rund 10 Minuten bei Ihnen." },
            { question: "Muss ich in Berghausen für die Anfahrt bezahlen?", answer: "Nein. Berghausen gehört zu unserem kostenfreien Einsatzgebiet rund um Aßlar." },
            { question: "Welche Türen können Sie in Berghausen öffnen?", answer: "Wir öffnen Haus-, Wohnungs-, Zimmer-, Keller- und Garagentüren sowie Briefkästen und Tresore." }
        ],
        neighbors: ["schluesseldienst-asslar", "schluesseldienst-bechlingen", "schluesseldienst-wetzlar-muenchholzhausen"]
    },
    {
        id: "asslar-werdorf",
        slug: "schluesseldienst-werdorf",
        name: "Werdorf",
        plz: "35614",
        coordinates: { latitude: 50.5830, longitude: 8.4480 },
        logistics: {
            drivingTimeMinutes: "8",
            distanceFromHQ: 7,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Aßlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Werdorf — Sofort-Hilfe zum Festpreis | 24/7",
            metaDescription: "Schlüsseldienst Werdorf bei Aßlar. In 8 Min. vor Ort, Festpreis ab 99€. Keine versteckten Kosten. Notdienst: 06441-8056279",
        },
        content: {
            heroIntro: "Tür zu in Werdorf? Wir kommen blitzschnell! In ca. 8 Minuten ist unser Monteur bei Ihnen — ohne Anfahrtskosten, mit Festpreisgarantie.",
            mainText: `
<p>Werdorf ist der größte Stadtteil von Aßlar und liegt zentral im Lahntal, direkt an der B49. Diese strategische Lage macht Werdorf für uns als <strong>Schlüsseldienst Werdorf</strong> besonders gut erreichbar — in nur rund 8 Minuten sind wir bei Ihnen. Der Ortsteil bietet eine lebendige Mischung aus Wohn- und Gewerbegebieten, altem Ortskern und neueren Siedlungen.</p>

<p>Die Vielfalt der Gebäude in Werdorf — von den Fachwerkhäusern im historischen Zentrum über moderne Reihenhäuser bis hin zu Gewerbeimmobilien — stellt unterschiedliche Anforderungen an unsere Öffnungstechnik. Genau dafür sind unsere Monteure ausgebildet. Wir arbeiten mit spezialisierten Picking-Tools und Öffnungsnadeln, die selbst komplexe Schließzylinder schonend entriegeln, ohne den Mechanismus zu beschädigen.</p>

<p>Werdorf profitiert als Aßlarer Stadtteil von unserem kostenfreien Anfahrtsgebiet. Unser Festpreis ab 99 Euro ist klar kalkuliert und wird Ihnen direkt am Telefon genannt — bevor wir uns auf den Weg machen.</p>`,
            serviceZerstörungsfrei: "In Werdorf öffnen wir zugefallene Türen mit professionellen Picking-Techniken — schnell, leise und vollständig beschädigungsfrei.",
            serviceBohren: "Wenn der Zylinder in Werdorf defekt ist, bohren wir ihn mit Präzision heraus und setzen sofort einen neuen hochwertigen Zylinder ein.",
            service247: "Schlüsseldienst Werdorf: Tag und Nacht für Sie da. Unser 24/7-Service kennt keine Geschäftszeiten.",
        },
        faqs: [
            { question: "Wie schnell kommt der Schlüsseldienst nach Werdorf?", answer: "Dank der direkten B49-Anbindung sind unsere Monteure in durchschnittlich 8 Minuten in Werdorf." },
            { question: "Werden in Werdorf Anfahrtskosten berechnet?", answer: "Nein. Werdorf liegt als größter Aßlarer Stadtteil in unserem kostenfreien Einsatzgebiet." },
            { question: "Öffnen Sie in Werdorf auch Gewerbe-Objekte?", answer: "Ja, wir öffnen auch Büros, Praxen, Lager und andere Gewerbetüren in Werdorf — professionell und diskret." }
        ],
        neighbors: ["schluesseldienst-asslar", "schluesseldienst-lahnau", "schluesseldienst-bechlingen", "schluesseldienst-ehringshausen"]
    },
    {
        id: "huettenberg-rechtenbach",
        slug: "schluesseldienst-rechtenbach",
        name: "Rechtenbach",
        plz: "35625",
        coordinates: { latitude: 50.5100, longitude: 8.5650 },
        logistics: {
            drivingTimeMinutes: "11",
            distanceFromHQ: 10,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Hüttenberg)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Rechtenbach — Notdienst 24/7 | Festpreis ab 99€",
            metaDescription: "Schlüsseldienst für Rechtenbach bei Hüttenberg. In 11 Min. vor Ort. Festpreis ab 99€, keine versteckten Kosten. Jetzt: 06441-8056279",
        },
        content: {
            heroIntro: "Ausgesperrt in Rechtenbach? Rufen Sie uns an! In ca. 11 Minuten sind wir bei Ihnen — fair, transparent und ohne Anfahrtskosten.",
            mainText: `
<p>Rechtenbach ist ein beschaulicher Ortsteil der Gemeinde Hüttenberg im südlichen Lahn-Dill-Kreis. Der Ort liegt in einem grünen Tal und bietet seinen Bewohnern eine ruhige, naturnahe Wohnlage. Über die Landesstraßen ist Rechtenbach gut an Hüttenberg und die Wetzlarer Südroute angebunden — eine Strecke, die unsere Monteure bestens kennen.</p>

<p>Als <strong>Schlüsseldienst Rechtenbach</strong> haben wir umfassende Erfahrung mit den typischen Schließsystemen der Gegend. Die vorwiegend ländliche Bebauung mit Einfamilienhäusern und älteren Gebäuden erfordert oft Fingerspitzengefühl beim Öffnen — und genau das bringen unsere Techniker mit. Zugefallene Türen entriegeln wir schonend und spurenlos.</p>

<p>Die Anfahrt nach Rechtenbach dauert ca. 11 Minuten. Im gesamten Hüttenberger Gemeindegebiet erheben wir keine Anfahrtskosten. Unser Festpreis ab 99 Euro ist Ihr finanzieller Rahmen — ohne böse Überraschungen.</p>`,
            serviceZerstörungsfrei: "In Rechtenbach öffnen wir zugefallene Türen mit feinfühligen Picking-Methoden — ohne auch nur einen Kratzer zu hinterlassen.",
            serviceBohren: "Bei notwendigen Bohrungen in Rechtenbach arbeiten wir hochpräzise und wechseln den Zylinder sofort vor Ort aus.",
            service247: "Auch um 3 Uhr nachts oder am Feiertagsmorgen: Unser Schlüsseldienst für Rechtenbach ist immer erreichbar.",
        },
        faqs: [
            { question: "Wie weit ist Rechtenbach von Wetzlar?", answer: "Rechtenbach liegt ca. 10 km südlich von Wetzlar. Unsere Monteure brauchen rund 11 Minuten." },
            { question: "Entstehen Anfahrtskosten nach Rechtenbach?", answer: "Nein. Als Teil des Hüttenberger Gemeindegebiets ist Rechtenbach in unserem kostenfreien Einsatzradius." },
            { question: "Was passiert, wenn der Schlüssel in Rechtenbach verloren ging?", answer: "Wir öffnen Ihre Tür und können bei Bedarf direkt vor Ort einen neuen Sicherheitszylinder einbauen, damit Sie wieder sicher sind." }
        ],
        neighbors: ["schluesseldienst-huettenberg", "schluesseldienst-volpertshausen", "schluesseldienst-weidenhausen"]
    },
    {
        id: "huettenberg-volpertshausen",
        slug: "schluesseldienst-volpertshausen",
        name: "Volpertshausen",
        plz: "35625",
        coordinates: { latitude: 50.5180, longitude: 8.5420 },
        logistics: {
            drivingTimeMinutes: "12",
            distanceFromHQ: 10,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Hüttenberg)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Volpertshausen — Türöffnung zum Festpreis",
            metaDescription: "Schlüsseldienst Volpertshausen bei Hüttenberg. 12 Min. Anfahrt, Festpreis ab 99€. Keine versteckten Kosten. 24/7: 06441-8056279",
        },
        content: {
            heroIntro: "Schlüsselnotfall in Volpertshausen? Wir sind in ca. 12 Minuten bei Ihnen — mit Festpreisgarantie und ohne Anfahrtskosten.",
            mainText: `
<p>Volpertshausen gehört zur Gemeinde Hüttenberg und liegt eingebettet in die hügelige Landschaft südlich von Wetzlar. Der Ortsteil ist geprägt durch eine lockere Wohnbebauung mit viel Grün und ländlichem Flair. Als <strong>Schlüsseldienst Volpertshausen</strong> sind wir Ihr regionaler Ansprechpartner für schnelle und professionelle Türöffnungen.</p>

<p>Die Häuser in Volpertshausen sind überwiegend Einfamilienhäuser mit unterschiedlichen Schließsystemen. Ob ein simpler Profilzylinder oder eine aufwändigere Mehrfachverriegelung — unsere geschulten Techniker meistern jede Herausforderung. Bei zugefallenen Türen arbeiten wir grundsätzlich zerstörungsfrei und schonend.</p>

<p>Über die Verbindungsstraßen im Hüttenberger Gemeindegebiet erreichen unsere Monteure Volpertshausen in rund 12 Minuten. Anfahrtskosten berechnen wir nicht. Es gilt unser bewährter Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Volpertshausen öffnen wir routiniert und ohne Spuren — Ihr Schloss bleibt intakt.",
            serviceBohren: "Bei Schlossdefekten in Volpertshausen fräsen wir den Kern präzise auf und verbauen einen neuen Markenzylinder.",
            service247: "Rund um die Uhr für Volpertshausen im Einsatz: Unser Notdienst ist immer nur einen Anruf entfernt.",
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Volpertshausen?", answer: "Die Anfahrt dauert über die Route durch Hüttenberg ca. 12 Minuten." },
            { question: "Ist die Anfahrt nach Volpertshausen kostenfrei?", answer: "Ja, im gesamten Hüttenberger Gemeindegebiet fallen keine Anfahrtskosten für Sie an." },
            { question: "Können Sie in Volpertshausen auch Schließanlagen beraten?", answer: "Selbstverständlich. Wir beraten Sie gerne zu Sicherheitstechnik und modernen Schließanlagen — direkt vor Ort in Volpertshausen." }
        ],
        neighbors: ["schluesseldienst-huettenberg", "schluesseldienst-rechtenbach", "schluesseldienst-weidenhausen"]
    },
    {
        id: "huettenberg-weidenhausen",
        slug: "schluesseldienst-weidenhausen",
        name: "Weidenhausen",
        plz: "35625",
        coordinates: { latitude: 50.5050, longitude: 8.5320 },
        logistics: {
            drivingTimeMinutes: "13",
            distanceFromHQ: 11,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Geringe Anfahrtskosten (Randgebiet Hüttenberg)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Weidenhausen — 24/7 Notdienst bei Hüttenberg",
            metaDescription: "Schlüsseldienst für Weidenhausen bei Hüttenberg. In 13 Min. da, Festpreis ab 99€. Jetzt Hilfe rufen: 06441-8056279",
        },
        content: {
            heroIntro: "Ausgesperrt in Weidenhausen? Kein Problem. Unser Schlüsseldienst ist in rund 13 Minuten bei Ihnen — zum transparenten Festpreis.",
            mainText: `
<p>Weidenhausen ist ein ruhiger Ortsteil der Gemeinde Hüttenberg, gelegen am südlichen Rand des Lahn-Dill-Kreises. Die dörfliche Atmosphäre und die Nähe zur Natur machen Weidenhausen zu einem beliebten Wohnort für Menschen, die Ruhe schätzen. Doch wenn die Haustür plötzlich ins Schloss fällt, wird aus der Idylle schnell eine Stresssituation. Als <strong>Schlüsseldienst Weidenhausen</strong> beenden wir diesen Stress in kürzester Zeit.</p>

<p>Unsere Monteure kennen die ländliche Bebauung Weidenhausens mit ihren robusten Haustüren und älteren Schließsystemen genau. Mit bewährtem Spezialwerkzeug öffnen wir Ihre zugefallene Tür sachkundig und ohne Beschädigungen. Sollte doch ein neuer Zylinder nötig sein, haben wir diesen direkt im Einsatzfahrzeug parat.</p>

<p>Die Anfahrt nach Weidenhausen dauert rund 13 Minuten. Unser Festpreissystem bietet Ihnen volle Kostentransparenz ab 99 Euro — der Preis wird Ihnen am Telefon genannt, bevor wir losfahren.</p>`,
            serviceZerstörungsfrei: "Zerstörungsfreie Türöffnung in Weidenhausen: Wir arbeiten leise, sauber und ohne mechanische Gewalt an Ihrer Haustür.",
            serviceBohren: "Bei verklemmten oder defekten Schlössern in Weidenhausen setzen wir präzise Bohrwerkzeuge ein und ersetzen den Zylinder sofort.",
            service247: "Auch nachts und an Feiertagen: Unser Schlüsselnotdienst für Weidenhausen ist rund um die Uhr einsatzbereit.",
        },
        faqs: [
            { question: "Wie lange dauert die Anfahrt nach Weidenhausen?", answer: "Wir erreichen Weidenhausen in durchschnittlich 13 Minuten über die Verbindungsstraßen des Hüttenberger Gemeindegebiets." },
            { question: "Ist die Anfahrt nach Weidenhausen kostenlos?", answer: "Im unmittelbaren Hüttenberger Gemeindegebiet fallen geringe bis keine Anfahrtskosten an. Den exakten Preis nennen wir Ihnen am Telefon." },
            { question: "Was kostet eine Türöffnung nachts in Weidenhausen?", answer: "Nachts und am Wochenende gilt ein transparenter Zuschlag. Der genaue Festpreis wird Ihnen immer vor der Anfahrt genannt." }
        ],
        neighbors: ["schluesseldienst-huettenberg", "schluesseldienst-rechtenbach", "schluesseldienst-volpertshausen"]
    },
    {
        id: "hohenahr-altenkirchen",
        slug: "schluesseldienst-altenkirchen",
        name: "Altenkirchen",
        plz: "35644",
        coordinates: { latitude: 50.6100, longitude: 8.5100 },
        logistics: {
            drivingTimeMinutes: "12",
            distanceFromHQ: 10,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Hohenahr)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Altenkirchen — Notdienst 24/7 | Festpreis ab 99€",
            metaDescription: "Schlüsseldienst Altenkirchen bei Hohenahr. In 12 Min. vor Ort. Festpreis ab 99€, ohne Anfahrtskosten. Notdienst: 06441-8056279",
        },
        content: {
            heroIntro: "Zugefallene Tür in Altenkirchen? Unser regionaler Schlüsseldienst kommt in rund 12 Minuten — mit garantiertem Festpreis und ohne Anfahrtskosten.",
            mainText: `
<p>Altenkirchen ist ein gemütlicher Ortsteil der Gemeinde Hohenahr, nördlich von Wetzlar im Lahn-Dill-Kreis gelegen. Der Ort besticht durch seine ländliche Ruhe, die Nähe zum Aartal und die überschaubare Dorfgröße. Doch auch im beschaulichsten Dorf kann sich der Schlüsselnotfall ereignen. Als <strong>Schlüsseldienst Altenkirchen</strong> stehen wir Ihnen genau dann professionell zur Seite.</p>

<p>Die typische Bebauung in Altenkirchen umfasst Einfamilienhäuser, ältere Bauernhäuser und gelegentlich kleinere Mehrfamilienhäuser. Unsere Techniker sind mit den hier verbreiteten Schließmechanismen vertraut und öffnen zugefallene Türen in nahezu allen Fällen zerstörungsfrei. Bei Schlüsselverlust oder abgebrochenen Schlüsseln tauschen wir den Zylinder direkt vor Ort aus.</p>

<p>Über die Route durch Hohenahr und die Anbindung an die B49 erreichen wir Altenkirchen in ca. 12 Minuten. Anfahrtskosten entfallen — es gilt unser Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "Schonende Türöffnung in Altenkirchen: Wir öffnen Ihre zugefallene Tür, ohne dem Schloss oder dem Rahmen zu schaden.",
            serviceBohren: "Defekter Zylinder in Altenkirchen? Wir bohren präzise und setzen umgehend einen neuen Marken-Schließzylinder ein.",
            service247: "Unser Notdienst ist für Altenkirchen rund um die Uhr erreichbar — 365 Tage, ohne Ausnahme.",
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Altenkirchen?", answer: "Wir sind in durchschnittlich 12 Minuten in Altenkirchen vor Ort — über die direkte Route durch Hohenahr." },
            { question: "Fallen in Altenkirchen Anfahrtskosten an?", answer: "Nein. Altenkirchen liegt im erweiterten Nahgebiet und ist für uns anfahrtskostenfrei erreichbar." },
            { question: "Kann der Monteur in Altenkirchen auch neue Schlüssel anfertigen?", answer: "Vor Ort tauschen wir Zylinder aus und stellen neue Schlüssel bereit. Für Spezialanfertigungen besuchen Sie unser Ladenlokal in Wetzlar." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-klein-altenstaedten", "schluesseldienst-bischoffen"]
    },
    {
        id: "hohenahr-klein-altenstaedten",
        slug: "schluesseldienst-klein-altenstaedten",
        name: "Klein-Altenstädten",
        plz: "35644",
        coordinates: { latitude: 50.6050, longitude: 8.5250 },
        logistics: {
            drivingTimeMinutes: "13",
            distanceFromHQ: 11,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Hohenahr)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Klein-Altenstädten — Sofort-Hilfe 24/7",
            metaDescription: "Lokaler Schlüsseldienst für Klein-Altenstädten. In 13 Min. vor Ort, ab 99€ Festpreis. Anrufen: 06441-8056279",
        },
        content: {
            heroIntro: "Ausgesperrt in Klein-Altenstädten? Unsere Monteure sind in ca. 13 Minuten vor Ort — Festpreis ab 99€, keine Anfahrtskosten.",
            mainText: `
<p>Klein-Altenstädten ist ein kleiner Ortsteil der Gemeinde Hohenahr, eingebettet in die sanfte Hügellandschaft des Lahn-Dill-Kreises. Mit seiner ruhigen, dörflichen Struktur und den wenigen Dutzend Wohnhäusern ist der Ort ein Beispiel für ländliches Wohnen mit kurzen Wegen in die größeren Zentren. Als <strong>Schlüsseldienst Klein-Altenstädten</strong> sorgen wir dafür, dass Sie auch hier nie lange vor verschlossener Tür stehen.</p>

<p>In Klein-Altenstädten überwiegen einfache, solide Wohnhäuser mit klassischen Schließsystemen. Unsere erfahrenen Techniker kennen diese Systeme und öffnen zugefallene Türen routiniert und beschädigungsfrei. Selbst bei kniffligeren Schlössern behalten wir die Ruhe und finden die richtige Lösung.</p>

<p>Die Anfahrt dauert rund 13 Minuten über Hohenahr. Anfahrtskosten erheben wir in diesem Gebiet nicht. Unser Festpreis ab 99 Euro gibt Ihnen Planungssicherheit.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Klein-Altenstädten öffnet unser Team schonend und zuverlässig — ohne den Zylinder zu beschädigen.",
            serviceBohren: "Sollte in Klein-Altenstädten eine Bohröffnung nötig sein, arbeiten wir mit kontrollierten Präzisionsbohrern und tauschen den Zylinder sofort.",
            service247: "Schlüsseldienst Klein-Altenstädten: 24 Stunden am Tag, 7 Tage die Woche für Sie erreichbar.",
        },
        faqs: [
            { question: "Kommen Sie wirklich bis nach Klein-Altenstädten?", answer: "Selbstverständlich. Klein-Altenstädten liegt in unserem regulären Einsatzgebiet. Wir sind in ca. 13 Minuten bei Ihnen." },
            { question: "Was kostet der Schlüsseldienst in Klein-Altenstädten?", answer: "Zugefallene Türen öffnen wir werktags tagsüber zum Festpreis ab 99 Euro — ohne Anfahrtskosten." },
            { question: "Kann ich auch abends anrufen?", answer: "Ja, unser Notdienst ist rund um die Uhr erreichbar. Für Abend- und Nachteinsätze gelten transparente Zuschläge." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-altenkirchen", "schluesseldienst-wetzlar-muenchholzhausen"]
    },
    {
        id: "wissmar",
        slug: "schluesseldienst-wissmar",
        name: "Wißmar",
        plz: "35396",
        coordinates: { latitude: 50.5650, longitude: 8.5900 },
        logistics: {
            drivingTimeMinutes: "12",
            distanceFromHQ: 10,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Wißmar — 24/7 Türöffnung zum Festpreis",
            metaDescription: "Ihr Schlüsseldienst für Wißmar bei Gießen. In 12 Min. da, ab 99€ Festpreis, keine versteckten Kosten. Jetzt anrufen: 06441-8056279",
        },
        content: {
            heroIntro: "Ausgesperrt in Wißmar? Unser Schlüsseldienst erreicht Sie in rund 12 Minuten — mit garantiertem Festpreis und ohne versteckte Anfahrtskosten.",
            mainText: `
<p>Wißmar liegt östlich von Wetzlar an der Grenze zum Landkreis Gießen. Der Ort gehört zur Gemeinde Wettenberg und ist über die Landesstraßen bestens an das Straßennetz angebunden. Mit seinen gepflegten Wohngebieten und der Nähe zu Gießen ist Wißmar ein lebendiger Wohnort. Als <strong>Schlüsseldienst Wißmar</strong> sind wir Ihr lokaler Ansprechpartner für Schlüsselnotfälle aller Art.</p>

<p>Die Mischung aus Einfamilienhäusern, Doppelhaushälften und kleinen Mehrfamilienhäusern in Wißmar bringt unterschiedliche Schließsysteme mit sich. Unsere Techniker sind auf die gesamte Bandbreite vorbereitet — von einfachen Profilzylindern bis zu modernen Sicherheitsschlössern. Zugefallene Türen öffnen wir in den allermeisten Fällen vollständig zerstörungsfrei.</p>

<p>Über die Route durch Lahnau und die östlichen Verbindungsstraßen erreichen wir Wißmar in ca. 12 Minuten. Anfahrtskosten fallen nicht an. Unser Festpreis ab 99 Euro gilt transparent und verbindlich.</p>`,
            serviceZerstörungsfrei: "Schonende Öffnungstechnik in Wißmar: Ihre zugefallene Tür wird ohne Spuren am Rahmen oder Zylinder geöffnet.",
            serviceBohren: "Defektes Schloss in Wißmar? Wir bohren kontrolliert und verbauen einen neuen Qualitätszylinder direkt vor Ort.",
            service247: "Unser Schlüsselnotdienst ist für Wißmar an 365 Tagen im Jahr erreichbar — auch nachts und am Wochenende.",
        },
        faqs: [
            { question: "Liegt Wißmar noch im Einsatzgebiet?", answer: "Ja, Wißmar gehört fest zu unserem regulären Einsatzgebiet. Die Anfahrt dauert ca. 12 Minuten und ist kostenfrei." },
            { question: "Wer steht hinter dem Schlüsseldienst Wißmar?", answer: "Wir sind MS Schlüsseldienst Wetzlar — ein regionaler Handwerksbetrieb mit Sitz in Wetzlar, kein anonymes Callcenter." },
            { question: "Was kostet die Türöffnung in Wißmar?", answer: "Zugefallene Standardtüren öffnen wir werktags tagsüber zum Festpreis von 99 Euro — ohne Zusatzkosten für die Anfahrt." }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-wettenberg", "schluesseldienst-wetzlar-dutenhofen"]
    },
    {
        id: "niederlemp-oberlemp",
        slug: "schluesseldienst-niederlemp-oberlemp",
        name: "Niederlemp & Oberlemp",
        plz: "35644",
        coordinates: { latitude: 50.6150, longitude: 8.4900 },
        logistics: {
            drivingTimeMinutes: "12",
            distanceFromHQ: 10,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Nahgebiet Hohenahr)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Niederlemp & Oberlemp — Türöffnung 24/7",
            metaDescription: "Schlüsseldienst für Niederlemp und Oberlemp. 12 Min. Anfahrt, ab 99€ Festpreis. Ohne versteckte Kosten. Notdienst: 06441-8056279",
        },
        content: {
            heroIntro: "Tür zu in Niederlemp oder Oberlemp? Wir sind in ca. 12 Minuten da — mit Festpreisgarantie und ohne Anfahrtskosten.",
            mainText: `
<p>Niederlemp und Oberlemp sind zwei eng verbundene Ortsteile der Gemeinde Hohenahr, gelegen im nördlichen Lahn-Dill-Kreis. Zusammen bilden sie eine kleine, überschaubare Siedlung inmitten der mittelhessischen Hügellandschaft. Die ruhige Wohnlage und die Verbindung ins Aartal machen die beiden Ortsteile zu beliebten Wohnorten. Als <strong>Schlüsseldienst Niederlemp und Oberlemp</strong> sind wir Ihr direkter Ansprechpartner bei Schlüsselnotfällen.</p>

<p>Die Häuser in Niederlemp und Oberlemp sind überwiegend Einfamilienhäuser und ältere, gewachsene Ortskerngebäude. Unsere erfahrenen Monteure sind mit diesen Gebäudetypen und ihren Schließmechanismen bestens vertraut. Zugefallene Türen öffnen wir schonend und zerstörungsfrei — Ihr Zylinder bleibt intakt, Ihr Rahmen unbeschädigt.</p>

<p>Die Anfahrt über Hohenahr dauert rund 12 Minuten. Im gesamten Hohenahrer Gemeindegebiet berechnen wir keine Anfahrtskosten. Sie zahlen nur unseren transparenten Festpreis ab 99 Euro.</p>`,
            serviceZerstörungsfrei: "In Niederlemp und Oberlemp öffnen wir zugefallene Haustüren mit professionellen Picking-Techniken — zuverlässig und ohne Schäden.",
            serviceBohren: "Defektes Schloss? Wir bohren den Zylinder in Niederlemp oder Oberlemp präzise auf und setzen sofort einen neuen ein.",
            service247: "Für Niederlemp und Oberlemp sind wir rund um die Uhr erreichbar — auch an Sonn- und Feiertagen.",
        },
        faqs: [
            { question: "Kommen Sie auch in die kleinen Ortsteile wie Niederlemp?", answer: "Selbstverständlich. Niederlemp und Oberlemp gehören zu unserem regulären Einsatzgebiet. Wir sind in ca. 12 Minuten da." },
            { question: "Was kostet die Anfahrt nach Niederlemp/Oberlemp?", answer: "Die Anfahrt ist im gesamten Hohenahrer Gemeindegebiet kostenfrei. Es gilt unser Festpreis ab 99 Euro." },
            { question: "Bieten Sie in Oberlemp auch Beratung zu Schließanlagen?", answer: "Ja. Nach der Türöffnung beraten wir Sie gerne zu modernen Sicherheitslösungen und Schließanlagen — unverbindlich und vor Ort." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-altenkirchen", "schluesseldienst-ehringshausen"]
    }
];
