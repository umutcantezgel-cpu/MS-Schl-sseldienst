import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

export const ring3cLocations: LocationData[] = [
    {
        id: "braunfels-bonbaden",
        slug: "schluesseldienst-bonbaden",
        name: "Bonbaden",
        plz: "35619",
        coordinates: { latitude: 50.5200, longitude: 8.3900 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Bonbaden — 24/7 Türöffnung", metaDescription: "Schlüsseldienst Bonbaden bei Braunfels. In 14 Min. vor Ort, ab 99€ Festpreis. Jetzt Notdienst rufen: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Bonbaden? Unser Schlüsseldienst ist in ca. 14 Minuten bei Ihnen und zum transparenten Festpreis.",
            mainText: `<p>Bonbaden ist ein beschaulicher Ortsteil der Stadt Braunfels, gelegen in der sanften Hügellandschaft westlich von Wetzlar. Der Ort vereint ländliches Wohnen mit der Nähe zum historischen Braunfels und seinem bekannten Schloss. Als <strong>Schlüsseldienst Bonbaden</strong> bieten wir schnelle, professionelle Hilfe bei Schlüsselnotfällen aller Art.</p>
<p>Die Bebauung in Bonbaden besteht vorwiegend aus Einfamilienhäusern und älteren Wohngebäuden mit verschiedensten Schließsystemen. Unsere erfahrenen Techniker öffnen zugefallene Türen routiniert und zerstörungsfrei und mit bewährten Handwerkstechniken, die Rahmen und Zylinder unversehrt lassen.</p>
<p>Über die Verbindungsstraße nach Braunfels und weiter Richtung Wetzlar erreichen wir Bonbaden in rund 14 Minuten. Unser Festpreis ab 99 Euro gibt Ihnen Sicherheit und keine bösen Überraschungen auf der Rechnung.</p>`,
            serviceZerstörungsfrei: "In Bonbaden öffnen wir zugefallene Türen schonend und präzise und Ihr Schloss bleibt vollständig intakt.",
            serviceBohren: "Bei Schlossdefekten in Bonbaden bohren wir kontrolliert und tauschen den Zylinder sofort vor Ort aus.",
            service247: "Bonbaden: Unser 24/7-Notdienst ist Tag und Nacht erreichbar, auch an Feiertagen."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Bonbaden?", answer: "Wir erreichen Bonbaden in durchschnittlich 14 Minuten über die Route durch Braunfels." },
            { question: "Was kostet eine Türöffnung in Bonbaden?", answer: "Zugefallene Standardtüren öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." },
            { question: "Kommen Sie auch am Wochenende nach Bonbaden?", answer: "Ja, unser Notdienst ist 7 Tage die Woche, 24 Stunden am Tag für Bonbaden erreichbar." }
        ],
        neighbors: ["schluesseldienst-braunfels", "schluesseldienst-philippstein", "schluesseldienst-solms"]
    },
    {
        id: "braunfels-philippstein",
        slug: "schluesseldienst-philippstein",
        name: "Philippstein",
        plz: "35619",
        coordinates: { latitude: 50.5100, longitude: 8.3750 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Philippstein — Notdienst 24/7", metaDescription: "Schlüsseldienst Philippstein bei Braunfels. In 15 Min. da, Festpreis ab 99€. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Tür zugefallen in Philippstein? Unser Monteur ist in ca. 15 Minuten bei Ihnen und Festpreis ab 99€.",
            mainText: `<p>Philippstein gehört zur Stadt Braunfels und liegt südwestlich im Solms-Braunfelser Raum. Der Ortsteil mit seinem historischen Ortskern bietet eine Mischung aus renovierten Altbauten und neueren Wohnhäusern. Als <strong>Schlüsseldienst Philippstein</strong> kennen wir die typischen Schließsysteme der Region und sind schnell zur Stelle.</p>
<p>Unsere Techniker arbeiten bei zugefallenen Türen grundsätzlich zerstörungsfrei. Die in Philippstein üblichen Profilzylinder und Mehrfachverriegelungen entriegeln wir mit professionellen Picking-Tools, ohne den Mechanismus zu beschädigen.</p>
<p>Die Anfahrt dauert rund 15 Minuten. Unser Festpreis ab 99 Euro wird Ihnen vor der Anfahrt am Telefon mitgeteilt und transparent und verbindlich.</p>`,
            serviceZerstörungsfrei: "Zerstörungsfreie Öffnung in Philippstein: Wir entriegeln Ihre Tür schonend und hinterlassen keine Spuren.",
            serviceBohren: "Bei defekten Zylindern in Philippstein bohren wir präzise und verbauen sofort einen neuen Sicherheitszylinder.",
            service247: "Philippstein: Schlüsselnotdienst an 365 Tagen, rund um die Uhr erreichbar."
        },
        faqs: [
            { question: "Wie weit ist Philippstein von Wetzlar?", answer: "Philippstein liegt ca. 14 km westlich. Unsere Monteure sind in rund 15 Minuten bei Ihnen." },
            { question: "Gibt es versteckte Kosten bei Einsätzen in Philippstein?", answer: "Nein. Unser Festpreis ab 99 Euro ist verbindlich. Mögliche Anfahrtskosten werden vorab am Telefon genannt." },
            { question: "Kann ich nachts den Notdienst in Philippstein rufen?", answer: "Selbstverständlich. Unser 24-Stunden-Service ist auch für Philippstein jederzeit erreichbar." }
        ],
        neighbors: ["schluesseldienst-braunfels", "schluesseldienst-bonbaden", "schluesseldienst-leun"]
    },
    {
        id: "ehringshausen-katzenfurt",
        slug: "schluesseldienst-katzenfurt",
        name: "Katzenfurt",
        plz: "35630",
        coordinates: { latitude: 50.6100, longitude: 8.4200 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Katzenfurt — Schnelle Hilfe", metaDescription: "Schlüsseldienst Katzenfurt bei Ehringshausen. In 13 Min. vor Ort. Ab 99€ Festpreis. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Schlüssel vergessen in Katzenfurt? Wir sind in ca. 13 Minuten bei Ihnen und professionell und zum Festpreis.",
            mainText: `<p>Katzenfurt, ein lebhafter Ortsteil der Gemeinde Ehringshausen, liegt an der Dill und ist über die B277 hervorragend an das Straßennetz angebunden. Der Ort bietet eine Mischung aus älteren Wohnhäusern entlang der Dorfstraße und neueren Siedlungen am Ortsrand. Als <strong>Schlüsseldienst Katzenfurt</strong> sind wir Ihr regionaler Partner für schnelle Türöffnungen.</p>
<p>Die Katzenfurter Häuser weisen typische mittelhessische Bausubstanz auf und von massiven Holztüren im Altbestand bis zu modernen Sicherheitstüren. Unsere Monteure sind auf die gesamte Bandbreite vorbereitet und öffnen zugefallene Türen in nahezu allen Fällen zerstörungsfrei.</p>
<p>Mit 13 Minuten Anfahrtszeit sind wir schnell in Katzenfurt. Unser Festpreis ab 99 Euro gibt Ihnen finanzielle Sicherheit.</p>`,
            serviceZerstörungsfrei: "Schonende Türöffnung in Katzenfurt: Wir entriegeln Ihre zugefallene Tür ohne Schäden an Schloss oder Rahmen.",
            serviceBohren: "Defekter Zylinder in Katzenfurt? Wir bohren kontrolliert und setzen sofort einen neuen ein.",
            service247: "Unser Notdienst ist für Katzenfurt 24/7 erreichbar und auch nachts und feiertags."
        },
        faqs: [
            { question: "Wie schnell kommt der Schlüsseldienst nach Katzenfurt?", answer: "Über die B277 und Ehringshausen sind wir in rund 13 Minuten in Katzenfurt." },
            { question: "Was kostet der Schlüsseldienst in Katzenfurt?", answer: "Eine zugefallene Tür öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." },
            { question: "Öffnen Sie in Katzenfurt auch Kellertüren?", answer: "Ja, wir öffnen Haus-, Wohnungs-, Keller-, Garagen- und Zimmertüren in Katzenfurt." }
        ],
        neighbors: ["schluesseldienst-ehringshausen", "schluesseldienst-koelschhausen", "schluesseldienst-asslar"]
    },
    {
        id: "ehringshausen-koelschhausen",
        slug: "schluesseldienst-koelschhausen",
        name: "Kölschhausen",
        plz: "35630",
        coordinates: { latitude: 50.6200, longitude: 8.4350 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Kölschhausen — Notdienst 24/7", metaDescription: "Schlüsseldienst Kölschhausen bei Ehringshausen. 15 Min. Anfahrt, Festpreis ab 99€. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Kölschhausen? Unser Monteur ist in ca. 15 Minuten bei Ihnen und transparent und zum Festpreis.",
            mainText: `<p>Kölschhausen ist ein ruhiger Ortsteil der Gemeinde Ehringshausen im nördlichen Lahn-Dill-Kreis. Der Ort liegt oberhalb des Dilltals und bietet eine herrliche Aussicht über die mittelhessische Landschaft. Die überschaubare Größe und die dörfliche Gemeinschaft schaffen eine besondere Wohnqualität. Als <strong>Schlüsseldienst Kölschhausen</strong> stehen wir Ihnen bei Schlüsselnotfällen professionell zur Seite.</p>
<p>Unsere Techniker kennen die ländliche Bausubstanz von Kölschhausen und arbeiten bei zugefallenen Türen grundsätzlich zerstörungsfrei. Selbst bei älteren Schlössern finden wir schonende Lösungen.</p>
<p>Die Anfahrt dauert ca. 15 Minuten. Unser Festpreis ab 99 Euro ist Ihre finanzielle Planungssicherheit.</p>`,
            serviceZerstörungsfrei: "In Kölschhausen öffnen wir zugefallene Türen mit feinfühligen Techniken und ohne Kratzer, ohne Bohren.",
            serviceBohren: "Bei Schlossdefekten in Kölschhausen arbeiten wir mit Präzisionsbohrern und tauschen den Zylinder sofort aus.",
            service247: "Schlüsseldienst Kölschhausen: Tag und Nacht, 365 Tage im Jahr für Sie im Einsatz."
        },
        faqs: [
            { question: "Kommen Sie auch in kleinere Orte wie Kölschhausen?", answer: "Selbstverständlich. Kölschhausen gehört zu unserem regulären Einsatzgebiet." },
            { question: "Wie teuer ist der Notdienst in Kölschhausen?", answer: "Zugefallene Standardtüren öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." },
            { question: "Sind Sie ein lokaler Betrieb?", answer: "Ja, Schlüssel Schmiede Wetzlar ist ein regionaler Handwerksbetrieb und kein Callcenter, keine Vermittlung." }
        ],
        neighbors: ["schluesseldienst-ehringshausen", "schluesseldienst-katzenfurt", "schluesseldienst-herborn"]
    },
    {
        id: "schoeffengrund-laufdorf",
        slug: "schluesseldienst-laufdorf",
        name: "Laufdorf",
        plz: "35641",
        coordinates: { latitude: 50.5050, longitude: 8.4500 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Laufdorf — 24/7 Notdienst", metaDescription: "Schlüsseldienst Laufdorf bei Schöffengrund. In 14 Min. vor Ort. Festpreis ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Tür zu in Laufdorf? Wir kommen in ca. 14 Minuten und professionell, schnell und zum transparenten Festpreis.",
            mainText: `<p>Laufdorf ist ein Ortsteil der Gemeinde Schöffengrund und liegt im südwestlichen Bereich des Lahn-Dill-Kreises. Die ruhige Wohnlage auf einer Anhöhe und die Nähe zur Natur machen Laufdorf zu einem beliebten Wohnort. Als <strong>Schlüsseldienst Laufdorf</strong> bieten wir schnelle Hilfe, wenn Sie sich versehentlich ausgesperrt haben.</p>
<p>In Laufdorf finden sich überwiegend Einfamilienhäuser mit unterschiedlichen Schließsystemen. Unsere Monteure öffnen zugefallene Türen routiniert und zerstörungsfrei. Bei Schlüsselverlust tauschen wir den Zylinder direkt vor Ort aus.</p>
<p>Die Anfahrt nach Laufdorf dauert rund 14 Minuten. Unser Festpreis ab 99 Euro ist transparent und verbindlich.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Laufdorf öffnen wir schonend und ohne Beschädigungen und zuverlässig und professionell.",
            serviceBohren: "Bei defekten Schlössern in Laufdorf bohren wir den Kern kontrolliert heraus und verbauen einen neuen Markenzylinder.",
            service247: "Schlüsselnotdienst Laufdorf: 24 Stunden erreichbar, 7 Tage die Woche und auch an Feiertagen."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Laufdorf?", answer: "Wir erreichen Laufdorf in durchschnittlich 14 Minuten über die Verbindungsstraßen des Schöffengrunder Gemeindegebiets." },
            { question: "Entstehen Anfahrtskosten nach Laufdorf?", answer: "Mögliche Anfahrtskosten werden Ihnen transparent vor der Anfahrt am Telefon mitgeteilt." },
            { question: "Öffnen Sie in Laufdorf auch Tresore?", answer: "Ja, neben Haus- und Wohnungstüren öffnen wir auch Tresore, Briefkästen und Autotüren." }
        ],
        neighbors: ["schluesseldienst-schoeffengrund", "schluesseldienst-schwalbach", "schluesseldienst-huettenberg"]
    },
    {
        id: "schoeffengrund-schwalbach",
        slug: "schluesseldienst-schwalbach",
        name: "Schwalbach",
        plz: "35641",
        coordinates: { latitude: 50.4980, longitude: 8.4350 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Schwalbach — Festpreis ab 99€", metaDescription: "Schlüsseldienst Schwalbach bei Schöffengrund. In 13 Min. da. Ab 99€ Festpreis. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Schlüsselnotfall in Schwalbach? In ca. 13 Minuten sind wir bei Ihnen und mit Festpreisgarantie und professionellem Service.",
            mainText: `<p>Schwalbach gehört zur Gemeinde Schöffengrund und liegt im ländlichen Süden des Lahn-Dill-Kreises. Der Ortsteil ist durch seine ruhige Lage und die Nähe zu den Waldgebieten des Taunus-Vorlandes geprägt. Als <strong>Schlüsseldienst Schwalbach</strong> sind wir Ihr regionaler Ansprechpartner, wenn die Haustür plötzlich ins Schloss fällt.</p>
<p>Die typischen Einfamilienhäuser in Schwalbach haben verschiedenste Schließsysteme. Unsere geschulten Techniker öffnen zugefallene Türen in nahezu allen Fällen ohne jede Beschädigung und präzise und professionell.</p>
<p>Die Anfahrt nach Schwalbach dauert ca. 13 Minuten. Unser Festpreis ab 99 Euro ist Ihr verbindlicher Kostenrahmen.</p>`,
            serviceZerstörungsfrei: "Schonende Öffnungstechnik in Schwalbach: Ihre Tür wird geöffnet, ohne dem Schloss zu schaden.",
            serviceBohren: "Bei Schlossdefekten in Schwalbach verwenden wir Präzisionsbohrer und tauschen den Zylinder umgehend aus.",
            service247: "24/7-Notdienst für Schwalbach: Wir sind immer für Sie da, auch nachts und am Wochenende."
        },
        faqs: [
            { question: "Wie weit ist Schwalbach von Wetzlar?", answer: "Schwalbach liegt ca. 12 km südwestlich. Unsere Monteure brauchen rund 13 Minuten." },
            { question: "Was kostet die Türöffnung in Schwalbach?", answer: "Werktags tagsüber öffnen wir zugefallene Türen zum Festpreis ab 99 Euro." },
            { question: "Wechseln Sie in Schwalbach auch Schlösser aus?", answer: "Ja. Bei Schlüsselverlust oder defekten Zylindern tauschen wir das Schloss direkt vor Ort professionell aus." }
        ],
        neighbors: ["schluesseldienst-schoeffengrund", "schluesseldienst-laufdorf", "schluesseldienst-waldsolms"]
    },
    {
        id: "schoeffengrund-niederquembach-oberquembach",
        slug: "schluesseldienst-niederquembach-oberquembach",
        name: "Niederquembach & Oberquembach",
        plz: "35641",
        coordinates: { latitude: 50.4920, longitude: 8.4700 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Niederquembach & Oberquembach", metaDescription: "Schlüsseldienst Nieder- & Oberquembach. 15 Min. Anfahrt, Festpreis ab 99€. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Niederquembach oder Oberquembach? Wir sind in ca. 15 Minuten bei Ihnen und zum fairen Festpreis.",
            mainText: `<p>Niederquembach und Oberquembach sind zwei eng verbundene Ortsteile der Gemeinde Schöffengrund im Lahn-Dill-Kreis. Die beiden Dörfer liegen auf einer Anhöhe südlich von Wetzlar und bieten ländliche Idylle mit Blick über das Quembachtal. Als <strong>Schlüsseldienst Niederquembach und Oberquembach</strong> garantieren wir Ihnen schnelle Hilfe, auch in den kleinsten Ortsteilen unserer Region.</p>
<p>Die Häuser hier sind überwiegend Ein- und Zweifamilienhäuser mit klassischen Schließsystemen. Unsere Monteure öffnen Ihre zugefallene Tür zerstörungsfrei und professionell.</p>
<p>Über die Schöffengrunder Verbindungsstraßen sind wir in rund 15 Minuten bei Ihnen. Unser Festpreis ab 99 Euro gibt Ihnen Kostensicherheit.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Niederquembach und Oberquembach öffnen wir spurlos und ohne Bohren, ohne Fräsen.",
            serviceBohren: "Bei defekten Schlössern arbeiten wir mit kontrollierten Bohrungen und ersetzen den Zylinder sofort vor Ort.",
            service247: "24/7 für Niederquembach und Oberquembach: Unser Notdienst ist jederzeit erreichbar."
        },
        faqs: [
            { question: "Kommen Sie bis nach Niederquembach?", answer: "Ja, Niederquembach und Oberquembach gehören zu unserem Einsatzgebiet. Wir sind in 15 Minuten da." },
            { question: "Was kostet eine Türöffnung in Oberquembach?", answer: "Werktags tagsüber berechnen wir für zugefallene Türen einen Festpreis ab 99 Euro." },
            { question: "Bieten Sie auch Sicherheitsberatung an?", answer: "Ja, wir beraten Sie gerne zu Einbruchschutz und modernen Schließsystemen und direkt bei Ihnen vor Ort." }
        ],
        neighbors: ["schluesseldienst-schoeffengrund", "schluesseldienst-niederwetz-oberwetz", "schluesseldienst-laufdorf"]
    },
    {
        id: "schoeffengrund-niederwetz-oberwetz",
        slug: "schluesseldienst-niederwetz-oberwetz",
        name: "Niederwetz & Oberwetz",
        plz: "35641",
        coordinates: { latitude: 50.4850, longitude: 8.4550 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Niederwetz & Oberwetz — 24/7", metaDescription: "Schlüsseldienst Nieder- & Oberwetz bei Schöffengrund. In 16 Min. da. Festpreis ab 99€. Jetzt: 06441-8056279" },
        content: {
            heroIntro: "Tür zugefallen in Niederwetz oder Oberwetz? In ca. 16 Minuten ist unser Monteur bei Ihnen und zum Festpreis.",
            mainText: `<p>Niederwetz und Oberwetz sind idyllische Ortsteile der Gemeinde Schöffengrund, gelegen am südlichen Rand des Lahn-Dill-Kreises. Die ruhige, naturnahe Lage inmitten grüner Hügel macht die beiden Orte zu beliebten Wohnstandorten. Als <strong>Schlüsseldienst Niederwetz und Oberwetz</strong> stehen wir Ihnen bei Schlüsselnotfällen verlässlich zur Seite.</p>
<p>Unsere Techniker kennen die lokalen Gegebenheiten und die typischen Schließsysteme der ländlichen Bausubstanz. Zugefallene Türen öffnen wir zerstörungsfrei und professionell.</p>
<p>Die Anfahrt dauert rund 16 Minuten. Unser Festpreis ab 99 Euro wird Ihnen am Telefon genannt, bevor wir losfahren.</p>`,
            serviceZerstörungsfrei: "In Niederwetz und Oberwetz öffnen wir Ihre zugefallene Tür schonend und ohne Spuren am Schloss.",
            serviceBohren: "Bei defekten Schlössern bohren wir kontrolliert und ersetzen den Zylinder sofort vor Ort.",
            service247: "24/7 erreichbar für Niederwetz und Oberwetz: Unser Notdienst kennt keine Geschäftszeiten."
        },
        faqs: [
            { question: "Sind Niederwetz und Oberwetz im Einsatzgebiet?", answer: "Ja, beide Ortsteile gehören fest zu unserem Einsatzgebiet im Lahn-Dill-Kreis." },
            { question: "Wie lange dauert die Anfahrt?", answer: "Wir erreichen Niederwetz und Oberwetz in durchschnittlich 16 Minuten." },
            { question: "Was mache ich, wenn ich meinen Schlüssel verloren habe?", answer: "Rufen Sie uns an. Wir öffnen Ihre Tür und können vor Ort einen neuen Sicherheitszylinder einbauen." }
        ],
        neighbors: ["schluesseldienst-schoeffengrund", "schluesseldienst-niederquembach-oberquembach", "schluesseldienst-waldsolms"]
    },
    {
        id: "leun-biskirchen",
        slug: "schluesseldienst-biskirchen",
        name: "Biskirchen",
        plz: "35638",
        coordinates: { latitude: 50.5500, longitude: 8.3650 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Biskirchen — Notdienst 24/7", metaDescription: "Schlüsseldienst Biskirchen bei Leun. 13 Min. Anfahrt, ab 99€ Festpreis. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Ausgesperrt in Biskirchen? Wir kommen in ca. 13 Minuten und zum fairen Festpreis und mit professionellem Werkzeug.",
            mainText: `<p>Biskirchen ist ein Ortsteil der Stadt Leun und liegt malerisch an der Lahn westlich von Wetzlar. Der Ort ist bekannt für seine Mineralquellen und seine ruhige Wohnlage. Die B49 in der Nähe sorgt für eine gute Verkehrsanbindung. Als <strong>Schlüsseldienst Biskirchen</strong> stehen wir Ihnen bei Schlüsselnotfällen jeden Tag zur Verfügung.</p>
<p>Die Bebauung in Biskirchen umfasst ältere Wohnhäuser entlang der Lahnstraße und neuere Siedlungen am Ortsrand. Unsere Techniker öffnen alle gängigen Schließsysteme zerstörungsfrei und professionell.</p>
<p>Die Anfahrt nach Biskirchen dauert rund 13 Minuten. Unser Festpreis ab 99 Euro gibt Ihnen Planungssicherheit.</p>`,
            serviceZerstörungsfrei: "In Biskirchen öffnen wir zugefallene Türen mit professionellen Picking-Techniken und schnell und ohne Schäden.",
            serviceBohren: "Defektes Schloss in Biskirchen? Wir bohren kontrolliert und verbauen einen neuen Qualitätszylinder.",
            service247: "Biskirchen: Unser 24/7-Notdienst ist auch nachts und an Feiertagen für Sie erreichbar."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Biskirchen?", answer: "Wir erreichen Biskirchen über die B49 in durchschnittlich 13 Minuten." },
            { question: "Was kostet eine Notöffnung in Biskirchen?", answer: "Zugefallene Türen öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." },
            { question: "Sind Sie ein lokaler Schlüsseldienst?", answer: "Ja, wir sind Schlüssel Schmiede Wetzlar und ein regionaler Fachbetrieb, kein anonymes Callcenter." }
        ],
        neighbors: ["schluesseldienst-leun", "schluesseldienst-lahnbahnhof", "schluesseldienst-braunfels"]
    },
    {
        id: "leun-lahnbahnhof",
        slug: "schluesseldienst-lahnbahnhof",
        name: "Lahnbahnhof",
        plz: "35638",
        coordinates: { latitude: 50.5550, longitude: 8.3500 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Lahnbahnhof — 24/7 Türöffnung", metaDescription: "Schlüsseldienst für Lahnbahnhof bei Leun. 13 Min. Anfahrt, ab 99€ Festpreis. Notdienst: 06441-8056279" },
        content: {
            heroIntro: "Vor verschlossener Tür am Lahnbahnhof? Unser Monteur ist in ca. 13 Minuten da und zum transparenten Festpreis.",
            mainText: `<p>Der Ortsteil Lahnbahnhof gehört zur Stadt Leun und liegt direkt an der Lahnstrecke westlich von Wetzlar. Die verkehrsgünstige Lage mit Bahnanschluss und Nähe zur B49 macht den kleinen Ortsteil attraktiv. Als <strong>Schlüsseldienst Lahnbahnhof</strong> sind wir Ihr Ansprechpartner für Türöffnungen aller Art.</p>
<p>Unsere erfahrenen Techniker öffnen zugefallene Türen routiniert und zerstörungsfrei. Die gängigen Schließsysteme im Lahnbahnhof-Gebiet sind uns bestens vertraut.</p>
<p>Die Anfahrt dauert rund 13 Minuten. Unser Festpreis ab 99 Euro wird Ihnen am Telefon genannt.</p>`,
            serviceZerstörungsfrei: "Am Lahnbahnhof öffnen wir Ihre zugefallene Tür spurenlos und professionell und ohne Gewalt.",
            serviceBohren: "Bei Schlossdefekten am Lahnbahnhof setzen wir Präzisionsbohrer ein und tauschen den Zylinder sofort.",
            service247: "24/7-Schlüsselnotdienst am Lahnbahnhof: Erreichbar Tag und Nacht, ohne Ausnahme."
        },
        faqs: [
            { question: "Wie weit ist der Lahnbahnhof von Wetzlar?", answer: "Der Lahnbahnhof bei Leun liegt ca. 12 km westlich. Unsere Monteure brauchen rund 13 Minuten." },
            { question: "Was kostet der Schlüsseldienst am Lahnbahnhof?", answer: "Zugefallene Standardtüren öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." },
            { question: "Kann ich den Notdienst auch nachts rufen?", answer: "Ja, unser 24-Stunden-Notdienst ist jederzeit erreichbar. Für Nachteinsätze gelten transparente Zuschläge." }
        ],
        neighbors: ["schluesseldienst-leun", "schluesseldienst-biskirchen", "schluesseldienst-ehringshausen"]
    }
];
