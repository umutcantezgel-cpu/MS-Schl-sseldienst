import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

export const ring1bLocations: LocationData[] = [
    // --- RING 1 ERGÄNZUNGEN (Wetzlarer Stadtteile) ---
    {
        id: "wetzlar-blasbach",
        slug: "schluesseldienst-wetzlar-blasbach",
        name: "Wetzlar-Blasbach",
        plz: "35586",
        coordinates: { latitude: 50.5212, longitude: 8.4680 },
        logistics: {
            drivingTimeMinutes: "7",
            distanceFromHQ: 5,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Blasbach — Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Blasbach: Lokaler Notdienst ohne Anfahrtskosten. In ca. 7 Min. vor Ort. Festpreis ab 99€. Jetzt anrufen: 06441-8056279!",
        },
        content: {
            heroIntro: "Ausgesperrt in Wetzlar-Blasbach? Unser lokaler Schlüsseldienst ist in etwa 7 Minuten bei Ihnen und zum garantierten Festpreis und ohne Anfahrtskosten.",
            mainText: `
<p>Wetzlar-Blasbach liegt malerisch am südwestlichen Stadtrand von Wetzlar, eingebettet zwischen sanften Hügeln und grünen Wiesen des Lahntals. Der Ortsteil verbindet ländlichen Charme mit der Nähe zur Wetzlarer Kernstadt und ist über die L3451 hervorragend angebunden. Gerade diese ruhige, dörfliche Atmosphäre macht Blasbach zu einem beliebten Wohnort für Familien und und genau hier sind wir als Ihr <strong>Schlüsseldienst Wetzlar-Blasbach</strong> für Sie da, wenn es darauf ankommt.</p>

<p>Die Bebauung in Blasbach besteht überwiegend aus Einfamilienhäusern und kleineren Mehrfamilienhäusern, oft mit soliden Holz- oder Kunststofftüren und modernen Schließzylindern. Unsere Techniker kennen diese Gebäudetypen bestens und bringen das passende Spezialwerkzeug mit, um zugefallene Türen in nahezu allen Fällen vollständig beschädigungsfrei zu öffnen. Kein Bohren, kein Fräsen und nur präzise Handwerkskunst.</p>

<p>Als Stadtteil von Wetzlar fällt Blasbach in unser direktes Kerngebiet. Das bedeutet für Sie: null Anfahrtskosten und ein transparenter Festpreis ab 99 Euro. Über die Solmser Straße und die Verbindung nach Hermannstein erreichen unsere Monteure Blasbach in durchschnittlich 7 Minuten. Tag und Nacht, an 365 Tagen im Jahr.</p>

<p>Ob nach dem Spaziergang an der Lahn der Schlüssel in der Jacke im Flur liegt oder das Türschloss nach Jahren seinen Dienst verweigert und rufen Sie uns an. Unser Schlüsseldienst Wetzlar-Blasbach garantiert Ihnen schnelle Hilfe, ehrliche Preise und echtes Handwerk aus der Region.</p>`,
            serviceZerstörungsfrei: "In Wetzlar-Blasbach öffnen wir zugefallene Türen mit speziellen Öffnungstechniken in 99% der Fälle vollständig beschädigungsfrei und Rahmen und Zylinder bleiben intakt.",
            serviceBohren: "Bei defekten oder abgebrochenen Schlüsseln in Blasbach setzen wir präzise Spezialwerkzeuge ein und tauschen bei Bedarf den Schließzylinder direkt vor Ort aus.",
            service247: "Auch spätabends oder am Wochenende stehen wir für Blasbach bereit. Unser 24/7-Notdienst kennt keine Feiertage und keine Öffnungszeiten.",
        },
        faqs: [
            {
                question: "Zahle ich in Blasbach Anfahrtskosten?",
                answer: "Nein. Blasbach gehört als Stadtteil von Wetzlar zu unserem kostenfreien Kerngebiet. Die Anfahrt ist für Sie komplett kostenfrei."
            },
            {
                question: "Wie schnell ist der Schlüsseldienst in Blasbach?",
                answer: "Dank der direkten Anbindung über die Solmser Straße sind unsere Monteure in durchschnittlich 7 Minuten bei Ihnen in Blasbach vor Ort."
            },
            {
                question: "Kann der Monteur in Blasbach auch einen neuen Zylinder einbauen?",
                answer: "Ja, unsere Techniker führen hochwertige Ersatzzylinder verschiedener Fabrikate mit und können diese direkt vor Ort in Blasbach fachgerecht einbauen."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-hermannstein", "schluesseldienst-solms", "schluesseldienst-wetzlar-niedergirmes"]
    },
    {
        id: "wetzlar-garbenheim",
        slug: "schluesseldienst-wetzlar-garbenheim",
        name: "Wetzlar-Garbenheim",
        plz: "35580",
        coordinates: { latitude: 50.5680, longitude: 8.4750 },
        logistics: {
            drivingTimeMinutes: "5",
            distanceFromHQ: 3,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Garbenheim — 5 Min. Anfahrt",
            metaDescription: "Lokaler Schlüsseldienst für Wetzlar-Garbenheim. Ohne Anfahrtskosten, Festpreis ab 99€, in 5 Minuten vor Ort. 24/7 Notdienst: 06441-8056279",
        },
        content: {
            heroIntro: "Schlüssel vergessen in Garbenheim? Kein Problem. Unser regionaler Schlüsseldienst ist in nur 5 Minuten bei Ihnen und mit Festpreisgarantie und kostenloser Anfahrt.",
            mainText: `
<p>Wetzlar-Garbenheim, westlich der Kernstadt gelegen, ist ein beschaulicher Stadtteil mit gewachsener Dorfstruktur und viel Grün. Die Nähe zur Altstadt und die ruhige Wohnlage machen Garbenheim besonders für Familien attraktiv. Zwischen renovierten Fachwerkhäusern im alten Ortskern und modernen Einfamilienhäusern am Ortsrand bietet der Stadtteil eine architektonische Vielfalt, die auch unterschiedliche Schließsysteme mit sich bringt. Als Ihr <strong>Schlüsseldienst Wetzlar-Garbenheim</strong> sind wir auf all diese Systeme bestens vorbereitet.</p>

<p>Ob eine ins Schloss gefallene Haustür am Dorfplatz oder ein klemmender Zylinder in einem der Neubauten und unsere erfahrenen Techniker arbeiten stets mit dem Ziel, Ihre Tür schonend und ohne Beschädigungen zu öffnen. Die kurze Distanz zum Wetzlarer Zentrum garantiert Ihnen extrem schnelle Reaktionszeiten von lediglich 5 Minuten.</p>

<p>Garbenheim ist selbstverständlich Teil unseres kostenfreien Kerngebiets. Anfahrtskosten fallen für Sie nicht an. Unser transparenter Festpreis ab 99 Euro gilt ohne Wenn und Aber und auch nachts, am Wochenende und an Feiertagen. Hier gibt es keine bösen Überraschungen auf der Rechnung, denn wir sind Handwerker, keine Abzocker.</p>

<p>Vertrauen Sie auf Ihren lokalen Partner in Garbenheim. Wir kennen den Ortsteil, die Straßen und die typischen Türsysteme vor Ort. Ein Anruf genügt und wir sind auf dem Weg zu Ihnen.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Garbenheim öffnen wir routiniert mit feinfühligen Öffnungstechniken und Ihr Türblatt, Beschlag und Zylinder bleiben unbeschädigt.",
            serviceBohren: "Bei verlorenen Schlüsseln oder Defekten am Schloss in Garbenheim fräsen wir den Kern präzise heraus und verbauen sofort einen neuen, hochwertigen Zylinder.",
            service247: "Rund um die Uhr, 365 Tage im Jahr: Unser Notdienst für Wetzlar-Garbenheim kennt keine Pausenzeiten. Rufen Sie uns an, wann immer Sie uns brauchen.",
        },
        faqs: [
            {
                question: "Ist die Anfahrt nach Garbenheim wirklich kostenlos?",
                answer: "Ja. Als Stadtteil von Wetzlar liegt Garbenheim in unserem Kerngebiet und die Anfahrt ist für Sie vollständig kostenfrei."
            },
            {
                question: "Wie lange braucht der Monteur nach Garbenheim?",
                answer: "Unsere Techniker erreichen Garbenheim dank der kurzen Distanz zur Kernstadt in der Regel innerhalb von 5 Minuten."
            },
            {
                question: "Öffnen Sie in Garbenheim auch ältere Fachwerktüren?",
                answer: "Selbstverständlich. Unsere Experten kennen sich mit historischen Beschlägen und älteren Schließsystemen bestens aus und arbeiten mit größter Sorgfalt."
            },
            {
                question: "Wie hoch sind die Kosten für eine Türöffnung in Garbenheim?",
                answer: "Eine nur zugefallene Standardtür öffnen wir werktags zwischen 06:00 und 19:59 Uhr für den Festpreis von 99 Euro und ohne Anfahrtskosten."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-niedergirmes", "schluesseldienst-braunfels", "schluesseldienst-wetzlar-naunheim"]
    },
    {
        id: "wetzlar-steindorf",
        slug: "schluesseldienst-wetzlar-steindorf",
        name: "Wetzlar-Steindorf",
        plz: "35586",
        coordinates: { latitude: 50.5380, longitude: 8.4600 },
        logistics: {
            drivingTimeMinutes: "6",
            distanceFromHQ: 4,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Steindorf — 24/7 Notdienst ab 99€",
            metaDescription: "Schlüsseldienst Steindorf bei Wetzlar. In 6 Min. vor Ort, Festpreis ab 99€, keine Anfahrtskosten. Tag & Nacht erreichbar: 06441-8056279",
        },
        content: {
            heroIntro: "Türschloss klemmt in Steindorf? Wir kommen sofort! Als lokaler Schlüsseldienst sind wir in ca. 6 Minuten bei Ihnen und ohne Anfahrtskosten und zum festen Preis.",
            mainText: `
<p>Wetzlar-Steindorf liegt südlich der Kernstadt, umgeben von Feldern und Wiesen, und besticht durch seine ruhige, ländliche Lage. Der kleine Stadtteil ist über die Verbindungsstraße nach Hermannstein und Blasbach gut an das Wetzlarer Straßennetz angebunden. Die überschaubare Größe und das dörfliche Miteinander schaffen eine besondere Lebensqualität und doch auch hier kann ein zugefallenes Schloss den Alltag abrupt unterbrechen. Als Ihr <strong>Schlüsseldienst Wetzlar-Steindorf</strong> sind wir genau dann zur Stelle.</p>

<p>Steindorf zeichnet sich durch vorwiegend freistehende Wohnhäuser und landwirtschaftlich geprägte Anwesen aus. Unsere Monteure sind mit den hier verbreiteten Schließsystemen bestens vertraut und ob robuste Altbau-Schlösser oder moderne Sicherheitszylinder in renovierten Gebäuden. Bei zugefallenen Türen greifen wir auf schonende Öffnungstechniken zurück, die Rahmen, Beschlag und Zylinder unversehrt lassen.</p>

<p>Die gute Erreichbarkeit über die Verbindungsstraßen im Wetzlarer Süden ermöglicht uns eine Anfahrtszeit von nur etwa 6 Minuten. Und da Steindorf zum Kerngebiet von Wetzlar gehört, zahlen Sie bei uns keine Anfahrtskosten. Es gilt unser transparenter Festpreis ab 99 Euro und klar kommuniziert, bevor wir losfahren.</p>

<p>Verlassen Sie sich nicht auf anonyme Callcenter-Dienste. Rufen Sie Ihren lokalen Partner an und lassen Sie sich von echtem Handwerk im Herzen des Lahntals überzeugen.</p>`,
            serviceZerstörungsfrei: "In Steindorf öffnen wir zugefallene Haustüren mit bewährten, schonenden Techniken und spurlos und ohne Folgekosten für neue Beschläge.",
            serviceBohren: "Wenn der Schlüssel im Schloss abgebrochen ist, extrahieren wir den Rest in Steindorf mit Spezialwerkzeug und tauschen bei Bedarf den Zylinder sofort.",
            service247: "Steindorf ist für uns immer erreichbar: Unser 24/7-Schlüsselnotdienst kommt auch nachts, am Wochenende und an Feiertagen.",
        },
        faqs: [
            {
                question: "Wie teuer ist eine Türöffnung in Steindorf?",
                answer: "Werktags zwischen 06:00 und 19:59 Uhr öffnen wir zugefallene Standardtüren in Steindorf zum Festpreis von 99 Euro und ohne jegliche Anfahrtskosten."
            },
            {
                question: "Kann ich in Steindorf auch nachts den Notdienst rufen?",
                answer: "Selbstverständlich. Unser 24-Stunden-Notdienst ist auch für Steindorf rund um die Uhr und an allen Feiertagen erreichbar."
            },
            {
                question: "Ist Steindorf im kostenfreien Anfahrtsgebiet?",
                answer: "Ja. Wetzlar-Steindorf gehört zu unserem Kerngebiet, daher entstehen für die Anfahrt keinerlei Kosten."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-blasbach", "schluesseldienst-wetzlar-hermannstein", "schluesseldienst-solms"]
    }
];
