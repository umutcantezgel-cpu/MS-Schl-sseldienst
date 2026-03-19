import { ReactNode } from "react";

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Logistics {
    drivingTimeMinutes: string;
    distanceFromHQ: number; // roughly in km
}

export interface Pricing {
    basePrice: number; // e.g., 99
    basePriceNight?: number; // e.g. 119/149
    basePriceWeekend?: number; // e.g. 179
    travelCost: number | null; // null means 'nach Absprache'
    travelCostText: string; // "Keine Anfahrtskosten", "Geringe Anfahrtskosten", "Anfahrtskosten nach Absprache"
}

export interface LocalFAQ {
    question: string;
    answer: string;
}

export interface LocationData {
    id: string;
    slug: string;
    name: string;
    plz: string;
    coordinates: Coordinates;
    logistics: Logistics;
    pricing: Pricing;
    seo: {
        metaTitle: string;
        metaDescription: string;
    };
    content: {
        heroIntro: string; // 2-3 sentences max
        mainText: string; // HTML string, 200-400 words unique
        serviceZerstörungsfrei: string;
        serviceBohren: string;
        service247: string;
    };
    faqs: LocalFAQ[];
    neighbors: string[]; // Slugs of 3-5 neighbors
}

export const locations: LocationData[] = [
    // --- RING 1 (0-5 km, keine Anfahrtskosten) ---
    {
        id: "wetzlar-niedergirmes",
        slug: "schluesseldienst-wetzlar-niedergirmes",
        name: "Wetzlar-Niedergirmes",
        plz: "35576",
        coordinates: { latitude: 50.5520, longitude: 8.5050 },
        logistics: {
            drivingTimeMinutes: "3-5",
            distanceFromHQ: 2,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Wetzlarer Kernstadt/Bezirk)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Wetzlar-Niedergirmes — Türöffnung ab 99€ | 24/7",
            metaDescription: "Schlüsseldienst Wetzlar-Niedergirmes: Lokaler Notdienst ohne Anfahrtskosten. In 3-5 Min. vor Ort. Festpreis ab 99€. Rufen Sie 06441-8056544 an!",
        },
        content: {
            heroIntro: "Sie stehen in Wetzlar-Niedergirmes vor verschlossener Tür? Wir sind Ihr direkter, lokaler Schlüsseldienst. Ohne lange Wartezeiten und ohne versteckte Kosten öffnen wir Ihre Tür schnell und professionell.",
            mainText: `
<p>Als größter Stadtbezirk von Wetzlar mit über 6.000 Einwohnern ist Wetzlar-Niedergirmes ein pulsierender Teil unserer Heimatstadt, geprägt durch die Nähe zur Lahn, historische Industriewurzeln (wie die ehemaligen Buderus-Flächen) und eine dichte Mischung aus Wohn- und Arbeitsquartieren. Genau hier, nördlich der Lahn und optimal angebunden über die L3285, sind wir als lokaler <strong>Schlüsseldienst Wetzlar-Niedergirmes</strong> tagtäglich für Sie im Einsatz.</p>

<p>Die Architektur in Niedergirmes reicht von modernen Mehrfamilienhäusern über gewerbliche Bauten bis hin zu charakteristischen Altbauten. Diese Vielfalt bedeutet, dass wir es mit unterschiedlichsten Schließsystemen zu tun haben – von der einfachen, ins Schloss gefallenen Haustür im Reihenhaus bis hin zur defekten Mehrfachverriegelung einer Gewerbeimmobilie. Unsere Techniker sind genau auf dieses Spektrum geschult und verfügen über das modernste Spezialwerkzeug, um jede Situation schonend und professionell zu lösen.</p>

<p>Da Niedergirmes Teil des direkten Kerngebiets von Wetzlar ist, profitieren Sie bei uns von einem unschlagbaren Heimvorteil: Wir garantieren Ihnen nicht nur eine extrem schnelle Anfahrtszeit von meist nur 3 bis 5 Minuten, sondern erlassen Ihnen auch jegliche Anfahrtskosten. Unser verbindlicher Festpreis ab 99 Euro gilt hier ohne Wenn und Aber. Keine Callcenter-Warteschleifen, keine Vermittlungsgebühren, sondern direkte, ehrliche Handwerksarbeit vor Ort.</p>

<p>Egal, ob Sie nach dem Verlassen Ihrer Wohnung an der Naunheimer Straße feststellen, dass der Schlüssel noch innen auf der Kommode liegt, oder ob abends das Türschloss in der Nähe der Werner-von-Siemens-Schule klemmt: Wenn Sie aus Wetzlar-Niedergirmes anrufen, machen wir uns sofort auf den Weg. Verlassen Sie sich auf einen vertrauensvollen Nachbarschafts-Service, der Ihnen die Sicherheit und das gute Gefühl schnellstmöglich zurückgibt.</p>`,
            serviceZerstörungsfrei: "In Wetzlar-Niedergirmes öffnen wir zugefallene Haus- und Wohnungstüren dank spezieller Handwerkstechniken in 99% der Fälle absolut beschädigungsfrei.",
            serviceBohren: "Auch schwere Sicherheitsverriegelungen, wie sie in den Neubaugebieten von Niedergirmes oft vorkommen, überwinden wir mit Präzisionswerkzeug souverän.",
            service247: "Unsere regionalen Experten sind für Sie in Wetzlar-Niedergirmes an 365 Tagen im Jahr, auch nachts und an allen Feiertagen, sofort einsatzbereit.",
        },
        faqs: [
            {
                question: "Zahle ich in Niedergirmes Anfahrtskosten?",
                answer: "Nein. Wetzlar-Niedergirmes gehört zu unserem direkten Kerngebiet. Deshalb berechnen wir hier absolut keine Anfahrtskosten für unseren Service."
            },
            {
                question: "Wie lange muss ich in Wetzlar-Niedergirmes auf den Schlüsseldienst warten?",
                answer: "Aufgrund der direkten Nähe sind unsere Monteure meist schon innerhalb von 3 bis 5 Minuten bei Ihnen vor Ort in Niedergirmes."
            },
            {
                question: "Öffnen Sie auch Briefkästen in Mehrfamilienhäusern in Niedergirmes?",
                answer: "Ja, wir öffnen Haus-, Wohnungs- und Zimmertüren, aber auch Briefkästen, Tresore und sogar Autotüren zuverlässig und zu Festpreisen."
            },
            {
                question: "Was kostet die Türöffnung in Niedergirmes konkret?",
                answer: "Eine normale, nur zugefallene Tür öffnen wir werktags von 06:00 bis 19:59 Uhr zum transparenten Festpreis von 99 Euro – inklusive der Anfahrt nach Niedergirmes."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-dutenhofen", "schluesseldienst-wetzlar-naunheim", "schluesseldienst-wetzlar-hermannstein"]
    },
    {
        id: "wetzlar-dutenhofen",
        slug: "schluesseldienst-wetzlar-dutenhofen",
        name: "Wetzlar-Dutenhofen",
        plz: "35582",
        coordinates: { latitude: 50.5850, longitude: 8.5420 },
        logistics: {
            drivingTimeMinutes: "5",
            distanceFromHQ: 5,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Wetzlar-Dutenhofen — In 5 Min. vor Ort | Festpreis",
            metaDescription: "Ihr Schlüsseldienst für Wetzlar-Dutenhofen! Transparenter Festpreis ab 99€, kostenlose Anfahrt, 24/7 Notdienst. Jetzt anrufen: 06441-8056544",
        },
        content: {
            heroIntro: "Ausgesperrt in Wetzlar-Dutenhofen? Geraten Sie nicht in Panik. Unser lokaler Schlüsselnotdienst ist in ca. 5 Minuten bei Ihnen – mit Festpreisgarantie und ohne versteckte Anfahrtskosten.",
            mainText: `
<p>Als östlicher Stadtteil Wetzlars und dank der exponierten Lage direkt an der A45, ist Wetzlar-Dutenhofen nicht nur ein wichtiger Verkehrsknotenpunkt, sondern vor allem ein familienfreundliches Wohngebiet. Wenn Sie hier – vielleicht kurz vor der Fahrt mit der Dillstrecke ab dem Bahnhaltepunkt Dutenhofen – feststellen, dass der Schlüssel von innen steckt, ist schnelle, professionelle Hilfe gefragt. Unser <strong>Schlüsseldienst Wetzlar-Dutenhofen</strong> ist genau für diese Situationen Ihr verlässlicher Ansprechpartner.</p>

<p>Dutenhofen zeichnet sich durch seine ruhigen Straßen und viele großzügige Einfamilienhäuser aus. Häufig sind diese Eigenheime mit modernen, teils doppelgefalzten Sicherheitstüren und hochwertigen Schließzylindern ausgestattet. Unser spezialisiertes Team bringt das notwendige Know-how und Fingerspitzengefühl mit, um selbst komplexe Verriegelungen schonend zu öffnen. Wir setzen konsequent auf Zerstörungsfreiheit: Wenn die Tür nur ins Schloss gefallen ist, kriegen wir sie in beinahe jedem Fall auf, ohne den Zylinder oder den Beschlag zu beschädigen.</p>

<p>Dadurch, dass Dutenhofen als Stadtteil von Wetzlar in unser unmittelbares Service-Kerngebiet fällt, entstehen Ihnen für die Anfahrt keinerlei Zusatzkosten. Unsere kalkulierbaren Festpreise ab 99 Euro bieten Ihnen absolute Kostensicherheit, direkt am Telefon und bevor wir bei Ihnen eintreffen. Die unmittelbare Nachbarschaft zu Lahnau und Münchholzhausen sowie die erstklassige Erreichbarkeit sorgen zudem dafür, dass unsere Monteure meist in handgestoppten 5 Minuten bei Ihnen vor der Tür stehen.</p>

<p>Ob am späten Abend nach dem Sporttreiben, am Wochenende oder an Feiertagen – wir lassen niemanden im Regen stehen. Rufen Sie uns an und erleben Sie einen Schlüsseldienst für Wetzlar-Dutenhofen, der ehrliches Handwerk mit Fairness und blitzschneller Reaktionszeit verbindet.</p>`,
            serviceZerstörungsfrei: "Zugefallene Haustüren in Wetzlar-Dutenhofen öffnen wir routiniert und in nahezu allen Fällen ohne die Notwendigkeit schwerer Eingriffe.",
            serviceBohren: "Sollte ein Schlossdefekt vorliegen, verwenden wir in Dutenhofen professionelles Spezialwerkzeug (z.B. Ziehglocken), um das Türblatt zu schonen.",
            service247: "Wir garantieren Ihnen schnelle Hilfe in Wetzlar-Dutenhofen zu jeder Uhrzeit. Unser Notdienst ist rund um die Uhr erreichbar.",
        },
        faqs: [
            {
                question: "Zahle ich für Einsätze in Wetzlar-Dutenhofen Anfahrtsgebühren?",
                answer: "Nein, Dutenhofen ist ein Stadtteil von Wetzlar. Daher ist die Anfahrt unseres Schlüsselnotdienstes für Sie komplett kostenfrei."
            },
            {
                question: "Wie schnell ist der Monteur in Dutenhofen?",
                answer: "Die Anfahrtszeit in Wetzlar-Dutenhofen, insbesondere dank der guten Lage, beträgt in den allermeisten Fällen lediglich 5 Minuten."
            },
            {
                question: "Sind Sie ein richtiger Betrieb aus der Region Wetzlar?",
                answer: "Ja, wir sind kein Vermittlungsportal, sondern echte, regional tätige Monteure aus der Umgebung, die Sie direkt kontaktieren."
            },
            {
                question: "Wechseln Sie in Dutenhofen auch Zylinder aus?",
                answer: "Natürlich. Sollten Sie Ihren Schlüssel verloren haben oder der Schließzylinder defekt sein, haben wir passende, hochwertige Ersatz-Zylinder zur Hand, die wir sofort fachgerecht einbauen."
            }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-wetzlar-muenchholzhausen", "schluesseldienst-wetzlar-niedergirmes"]
    },
    {
        id: "wetzlar-muenchholzhausen",
        slug: "schluesseldienst-wetzlar-muenchholzhausen",
        name: "Wetzlar-Münchholzhausen",
        plz: "35584",
        coordinates: { latitude: 50.5992, longitude: 8.5572 },
        logistics: {
            drivingTimeMinutes: "5",
            distanceFromHQ: 6,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)",
        },
        seo: {
            metaTitle: "Türöffnung Wetzlar-Münchholzhausen — 24/7 Schlüsseldienst | Ab 99€",
            metaDescription: "Schlüsseldienst für Wetzlar-Münchholzhausen. Wir öffnen Türen beschädigungsfrei zum echten Festpreis ab 99€. In ca. 5 Minuten bei Ihnen. Ohne Anfahrtskosten!",
        },
        content: {
            heroIntro: "Schlüsseldienst Notfall in Wetzlar-Münchholzhausen? Wir helfen sofort, lokal und transparent. Vertrauen Sie auf faire Festpreise ohne fiese Anfahrtsgebühren.",
            mainText: `
<p>Im beschaulichen Nordosten der Stadt liegt Wetzlar-Münchholzhausen, ein Stadtteil, der ruhiges, ländlich-suburbanes Wohnen mit einer hervorragenden Infrastruktur verbindet. Die eigene A45-Anschlussstelle und die charmante Kombination aus altem Ortskern und neu erschlossenen Wohngebieten machen es zu einem beliebten Lebensmittelpunkt. Doch auch hier passiert der Klassiker: Die Haustür fällt ins Schloss und der Schlüssel liegt noch auf dem Küchentisch. Genau hier kommt unser regionaler <strong>Schlüsseldienst Wetzlar-Münchholzhausen</strong> ins Spiel.</p>

<p>Wir haben in Münchholzhausen schon unzählige Türen geöffnet – von den robusten Holztüren am alten Ortskern bis hin zu den stark gesicherten, wärmegedämmten Sicherheitstüren der Neubaugebiete. Da unsere Monteure tief in der Handwerkstechnik verwurzelt sind (Ausgebildet von Uwe Sarfeld), kennen wir die exakten Schließmechanismen moderner und alter Fabrikate. Für Sie bedeutet das: höchste Professionalität, minimale Wartezeiten und eine in über 99 % der Fälle gänzlich zerstörungsfreie Türöffnung bei zugefallenen Türen.</p>

<p>Als Wetzlarer Betrieb ist es für uns eine Selbstverständlichkeit, dass die Anfahrt nach Wetzlar-Münchholzhausen für Sie kostenlos ist. Unser Festpreis von ab 99 Euro ist genau das: ein Festpreis ohne verdeckte Überraschungen auf der Endrechnung. Durch die direkte Nähe zu unserer Basis und die reibungslose Verkehrsanbindung können wir Ihnen eine Ankunftszeit von lediglich rund 5 Minuten garantieren. In Notsituationen, etwa wenn das Essen auf dem Herd steht oder Kleinkinder in der Wohnung geblieben sind, ist diese Schnelligkeit Gold wert.</p>

<p>Lassen Sie den Tag nach einem Missgeschick mit der Tür nicht ruiniert sein. Rufen Sie unseren 24-Stunden-Service an. Wir sind pünktlich in Wetzlar-Münchholzhausen zur Stelle, öffnen Ihre Tür behutsam und sorgen dafür, dass Sie schnell und günstig wieder in Ihr Zuhause können.</p>`,
            serviceZerstörungsfrei: "Spezielle Öffnungstechniken erlauben es uns, Ihre zugefallene Tür in Münchholzhausen ohne mechanische Beschädigungen an Rahmen oder Zylinder zu öffnen.",
            serviceBohren: "Verlorene Schlüssel oder abgebrochene Bärte? In Münchholzhausen fräsen und bohren wir – wenn nötig – extrem präzise und tauschen Zylinder sofort aus.",
            service247: "Ein Notfall kennt keine Feierabende. Wir sind Ihr Schlüsseldienst für Wetzlar-Münchholzhausen – erreichbar morgens, mittags, nachts und sonntags.",
        },
        faqs: [
            {
                question: "Sind die angegebenen 99 Euro Festpreise wirklich transparent?",
                answer: "Definitiv. Bei nur zugefallenen, unverschlossenen Standardtüren berechnen wir werktags (06:00 bis 19:59 Uhr) pauschal 99 Euro. Hinzu kommen in Wetzlar-Münchholzhausen keine Anfahrtskosten."
            },
            {
                question: "Helfen Sie in Münchholzhausen auch, wenn der Schlüssel im Schloss abgebrochen ist?",
                answer: "Ja, abgebrochene Schlüssel können wir in den allermeisten Fällen mit Extraktoren entfernen. Falls das Schloss beschädigt ist, können wir direkt vor Ort in Münchholzhausen einen neuen Schließzylinder verbauen."
            },
            {
                question: "Wie schnell können Sie an der Anschlussstelle Münchholzhausen eintreffen?",
                answer: "Unsere Reaktionszeit ist enorm kurz. Ob im alten Ortskern oder im Neubaugebiet, Sie können mit einer Ankunft innerhalb von etwa 5 Minuten rechnen."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-dutenhofen", "schluesseldienst-hohenahr", "schluesseldienst-lahnau"]
    },
    {
        id: "wetzlar-naunheim",
        slug: "schluesseldienst-wetzlar-naunheim",
        name: "Wetzlar-Naunheim",
        plz: "35584",
        coordinates: { latitude: 50.5777, longitude: 8.5300 },
        logistics: {
            drivingTimeMinutes: "3-5",
            distanceFromHQ: 4,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Wetzlar-Naunheim — In ca. 5 Min. bei Ihnen",
            metaDescription: "Ihr Notdienst für Wetzlar-Naunheim. Wir garantieren beschädigungsfreie Türöffnungen (bei zugefallener Tür) ohne Anfahrtskosten. Festpreise ab 99€. Jetzt anrufen!",
        },
        content: {
            heroIntro: "Sie suchen einen fairen Schlüsseldienst in Wetzlar-Naunheim? Rufen Sie uns an! Wir sind in 3 bis 5 Minuten blitzschnell an Ihrer Haustür und öffnen ohne Schäden zum Festpreis.",
            mainText: `
<p>Gelegen im nördlichen Teil der Kernstadt und hervorragend angebunden an die B49 ist Wetzlar-Naunheim ein äußerst beliebtes, gewachsenes und dichtes Wohngebiet. Ob in den ruhigen Seitenstraßen am Lahnufer, in der Nähe der Naunheimer Mühle oder tief im Ortskern: Ein kurzer Moment der Unachtsamkeit, ein Windstoß – und die Tür fällt unwiderruflich ins Schloss. Für genau diesen Ernstfall sind wir Ihr verlässlicher <strong>Schlüsseldienst Wetzlar-Naunheim</strong>.</p>

<p>Naunheim charakterisiert sich durch seine vielfältige Architektur, von charmanten Fachwerkhäusern bis hin zu stark frequentierten Mehrfamiliengebäuden. Unsere tiefgehende Expertise und stetige handwerkliche Ausbildung ermöglichen es uns, in Naunheim auf jede noch so spezielle Schließmechanik vorbereitet zu sein. Wir bringen die notwendige Ruhe und Geduld mit, um Ihre Wohnungs- oder Haustür schonend zu entriegeln. Werktags öffnen wir zu über 99 % aller nur zugefallenen Türen absolut zerstörungsfrei, sodass Ihnen teure Folgekosten für neue Zylinder oder Beschläge erspart bleiben.</p>

<p>Ein fairer, ehrlicher Umgangston gehört zu unserer Firmenphilosophie. Für Wetzlar-Naunheim, als direkter Stadtteil, streichen wir die Anfahrtskosten vollständig von der Rechnung. Unser Festpreissystem bietet absolute Transparenz, beginnend ab 99 Euro. Sie wissen exakt, woran Sie sind, bevor wir auch nur einen Handgriff machen.</p>

<p>Eingeklemmte Schlüssel, defekte Schlösser oder abgebrochene Bärte? In Naunheim garantieren wir Einsatzzeiten von häufig unter 5 Minuten. Verlassen Sie sich nicht auf intransparente Callcenter, sondern auf Ihren echten Nachbarschafts-Ansprechpartner. Wir garantieren Ihnen schnelles Eintreffen, saubere Handwerks-Qualität und absolute Service-Sicherheit mitten in Wetzlar-Naunheim.</p>`,
            serviceZerstörungsfrei: "Unsere schonenden Öffnungstechniken garantieren in Naunheim, dass Ihre ins Schloss gefallene Tür schnell und spurlos wieder geöffnet ist.",
            serviceBohren: "Wenn Ihre Tür in Naunheim mehrfach verschlossen ist, fräsen wir den Kern so präzise auf, dass Türblatt und Beschlag sicher geschont bleiben.",
            service247: "Wir sind Ihr Garant für Sicherheit in Wetzlar-Naunheim – egal ob die Not am Wochenende oder mitten in der Nacht eintritt.",
        },
        faqs: [
            {
                question: "Kommen in Wetzlar-Naunheim noch Anfahrtsgebühren hinzu?",
                answer: "Nein, Naunheim liegt vollumfänglich in unserem kostenfreien Wetzlarer Kern-Einsatzgebiet. Die Anfahrt geht also auf unsere Kappe."
            },
            {
                question: "Bieten Sie auch am Wochenende Notdienst in Naunheim an?",
                answer: "Selbstverständlich. Sie erreichen uns in Naunheim an allen Samstagen, Sonntagen und gesetzlichen Feiertagen rund um die Uhr."
            },
            {
                question: "Die Tür in Naunheim ist nur zugefallen – wie lange dauert die Öffnung?",
                answer: "Eine nur ins Schloss gefallene, nicht abgesperrte Tür öffnen unsere Fachkräfte in Naunheim oft schon innerhalb weniger Sekunden – völlig beschädigungsfrei."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-muenchholzhausen", "schluesseldienst-wetzlar-niedergirmes", "schluesseldienst-hohenahr"]
    },
    {
        id: "wetzlar-hermannstein",
        slug: "schluesseldienst-wetzlar-hermannstein",
        name: "Wetzlar-Hermannstein",
        plz: "35586",
        coordinates: { latitude: 50.5350, longitude: 8.4850 },
        logistics: {
            drivingTimeMinutes: "5",
            distanceFromHQ: 3,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 0,
            travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)",
        },
        seo: {
            metaTitle: "Schlüsseldienst Wetzlar-Hermannstein — Türöffnung zum Festpreis",
            metaDescription: "Ihr Schlüsseldienst für Wetzlar-Hermannstein. Wir garantieren 24/7 Notdienst, schonende Öffnungen und Festpreise ohne versteckte Anfahrtskosten.",
        },
        content: {
            heroIntro: "Schnelle Hilfe in Wetzlar-Hermannstein benötigt? Ihr Schlüssel liegt drin und Sie stehen draußen? Rufen Sie uns an: Wir öffnen zum garantierten Festpreis und ohne Anfahrtskosten in Windeseile.",
            mainText: `
<p>Wetzlar-Hermannstein liegt idyllisch im Südwesten unserer Stadt, direkt an den historischen Ufern der Lahn. Wer hier durch den historischen Ortskern mit seiner markanten Burg wandert oder in den angrenzenden Wohngebieten lebt, genießt eine wunderbare Wohnqualität. Doch auch in der schönsten Umgebung kann ein winziges Detail Stress verursachen – eine zugefallene oder klemmende Haustür. Unser regional ausgerichteter <strong>Schlüsseldienst Wetzlar-Hermannstein</strong> beendet den Stress in dem Moment, in dem wir den Anruf entgegennehmen.</p>

<p>Gerade die älteren, oft liebevoll restaurierten Gebäude und Türen im Hermannsteiner Zentrum verlangen beim Notöffnen ein hohes Maß an Fingerspitzengefühl. Brachiale Gewalt ist dabei ein No-Go! Mit ausgebildetem Know-how, modernsten Spezialpickern und Ziehwerkzeugen garantieren wir für Hermannstein, dass wir Ihre Türen bei bloßem Zufallen ohne jegliche Schäden wieder zugänglich machen. Ob massive Landhaus-Türen oder die Sicherheitstüren modernerer Mehrfamilienhäuser an den Ausfahrtsstraßen Richtung Solms oder Braunfels – wir haben das passende Equipment.</p>

<p>Aufgrund unserer geografischen Nähe und der direkten Route über die Hermannsteiner Straße bzw. Solmser Straße, schaffen es unsere Monteure im Regelfall innerhalb von 5 rasanten Minuten zu Ihnen. Ein weiterer fantastischer Vorteil für Hermannsteiner: Da der Vorort zur Wetzlarer Kernstadt zählt, berechnen wir Ihnen nicht einen Cent Anfahrtskosten. Es gilt unser glasklares Festpreissystem ab 99 Euro.</p>

<p>Ehrliche Preise, echtes regionales Handwerk und absolute Verlässlichkeit. Vermeiden Sie überteuerte Vermittlungszentralen. Rufen Sie unseren Schlüsseldienst Wetzlar-Hermannstein rund um die Uhr an und lassen Sie uns Ihre Tür sicher, blitzschnell und zum vereinbarten Festpreis öffnen.</p>`,
            serviceZerstörungsfrei: "In Wetzlar-Hermannstein wenden wir schonende Profi-Techniken an, um Ihre Tür unversehrt zu öffnen. Rahmen und Zylinder bleiben makellos.",
            serviceBohren: "Liegt ein Riegelbruch vor, nutzen wir in Hermannstein Spezialfräser. Ein Tausch des defekten Zylinders wird von uns sofort vor Ort erledigt.",
            service247: "Auch spät in der Nacht oder feiertags erreichbar: Vor verschlossener Tür in Hermannstein wartet niemand gern. Wir helfen 24/7 souverän weiter.",
        },
        faqs: [
            {
                question: "Bleibt es in Wetzlar-Hermannstein wirklich bei 99 Euro Festpreis?",
                answer: "Ja, der Grundpreis für die einfache Öffnung (nicht abgeschlossen, Standardtür) liegt werktags zwischen 06:00 und 19:59 Uhr bei genau 99 Euro. Sie zahlen keinen Aufpreis für die Anfahrt."
            },
            {
                question: "Öffnen Sie in Hermannstein auch historische, ältere Türen unbeschädigt?",
                answer: "Absolut. Unsere geschulten Experten kennen sich hervorragend mit der Mechanik von älteren Beschlägen aus und agieren mit allerhöchster Vorsicht."
            },
            {
                question: "Wie lange warte ich in Hermannstein im Durchschnitt auf Hilfe?",
                answer: "Da Hermannstein extrem schnell über die Hauptstraßen angebunden ist, sind unsere Techniker im Normalfall in 5 Minuten bei Ihnen."
            }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-braunfels", "schluesseldienst-wetzlar"]
    }
];
