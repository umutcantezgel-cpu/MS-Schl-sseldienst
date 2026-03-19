import { LocationData } from "./locations";

export const ring4Locations: LocationData[] = [
    // --- RING 4 (20-30 km) ---
    {
        id: "herborn",
        slug: "schluesseldienst-herborn",
        name: "Herborn",
        plz: "35745",
        coordinates: { latitude: 50.6832, longitude: 8.3057 },
        logistics: {
            drivingTimeMinutes: "20-25",
            distanceFromHQ: 20,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 20,
            travelCostText: "+ 20€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Herborn — Festpreis ab 99€ | 24/7",
            metaDescription: "Schlüsseldienst Herborn: Spezialist für Fachwerkhäuser & Altstadt. Zerstörungsfreie Öffnung ab 99€. In ca. 20 Min. bei Ihnen vor Ort (A45). 06441-8056544",
        },
        content: {
            heroIntro: "Ausgesperrt in der historischen Fachwerk-Stadt Herborn? Wir eilen über die A45 direkt zu Ihnen! Garantiert beschädigungsfreie und faire Türöffnung ab 99€.",
            mainText: `
<p>Herborn ist zweifelsohne eine der reizvollsten Städte in weitem Umkreis. Die über acht Jahrhunderte alte, in unzähligen Reiseführern gepriesene historische Fachwerk-Altstadt rund um den berühmten Marktplatz, sowie die weiten Außenbereiche und Ortsteile wie Burg, Seelbach, Schönbach, Merkenbach und Uckersdorf, bieten Wohnen mit Historie und Charakter. Was aber tun, wenn die massiv hölzerne Altbautür mit den aufwendigen Ornamenten klappernd ins Schloss fällt – und der eigentliche Bewohner draußen im Regen der Fußgängerzone steht? Sie brauchen zwingend Experten an der Klinke – Sie brauchen unseren <strong>Schlüsseldienst Herborn</strong>.</p>

<p>Gerade diese denkmalgeschützten Eingangstüren in der Herborner Altstadt dürfen im Falle einer Sperrung nicht durch Laien angebohrt oder hemdsärmelig aufgehebelt werden! Die Reparaturkosten oder gar der unersetzbare historische Wertverluste gehen hier oft in die Tausende. Wir distanzieren uns extrem von rohen Werkzeugen und setzen ausschließlich modernste Lockpicking-, Zieh- und Fangmethoden ein. In fantastischen 99 % der alltäglichen Fälle, in denen in Herborn die Haustür bloß von außen zugefallen (nicht abgeschlossen) ist, entriegeln unsere Techniker diese Türen komplett materialschonend und unberührt.</p>

<p>Doch nicht nur in Herborn-Zentrum, sondern auch in den Eigenheimsiedlungen und Industriegebieten der expandierenden 20.000-Einwohner-Stadt passieren tagtäglich Türpannen oder Schlüsselverluste. Durch die hervorragende Direkt-Anbindung über die Sauerlandlinie (A45 Herborn Süd bzw. West) bewältigt unser Notdienst die rund 20 Kilometer Fahrweg von Wetzlar in einer respektablen Regeldauer von ca. 20 bis 25 Minuten. Sie rufen uns an und lehnen sich beruhigt zurück.</p>

<p>Klar und seriös: Für unsere Dienstleistung setzen wir im Basis-Werktagsturnus auf den transparenten Festpreis von 99 Euro. Sie zahlen als Zuschlag lediglich eine absolut maßvolle Autobahn-Anfahrtsstreckenpauschale in Höhe von 20 Euro. Kein unübersichtlicher Kostenvoranschlag im Nachhinein, keine künstlichen Stundenabrechnungen. Retten Sie Ihren Termin: Ordern Sie unseren Schlüsseldienst direkt in Herborn an.</p>`,
            serviceZerstörungsfrei: "Gerade im sensiblen Herborner Fachwerk-Umfeld verzichten wir konsequent auf Aufbohren, sofern die Altbautür nur ungewollt ins Schloss gedrückt wurde. Sauber, kratzerfrei.",
            serviceBohren: "Ist das Getriebeschloss defekt und die Tür im Neu-Viertel zweifach verriegelt? Mit millimeterpräzisen Fräsen öffnen wir in Herborn das Schließwerk und entsorgen den defekten Part sicher.",
            service247: "Wochenend-Spaziergang oder tief in der Nacht verlegt? Rufen Sie aus ganz Herborn sofort für Notdiensthilfe durch. Wir operieren 24 Stunden lückenlos an 365 Tagen.",
        },
        faqs: [
            {
                question: "Gelten die fairen Preise auch für hochliegende Gebiete in Herborn wie Schönbach oder Uckersdorf?",
                answer: "Aber sicher. Die transparente Fahrtpauschale greift identisch für alle angrenzenden Nachbardörfer im Verbundbezirk Herborn (von Burg über Amdorf bis Hirschberg)."
            },
            {
                question: "Wenn wir in der Innenstadt von Herborn wohnen, hat der Monteur Equipment für jahrzehntealte Doppeltüren?",
                answer: "Selbstverständlich! Unsere Meister-Spezialisten verfügen genau hierfür über hochsensible Spezialpicker und Türfalzentsperrer für Fachwerk und Denkmalbestand."
            },
            {
                question: "Bleibt es immer strikt beim 99 Euro Festpreis in Herborn?",
                answer: "Handelt es sich um eine zugefallene Haustür, an ganz alltäglichen Werktagen untertags, kostet Sie das reine Aufmachen pauschal 99 Euro. Die Fahrtkosten von ca. 20 Euro werden getrennt kommuniziert. Am Wochenende (und nachts) bestehen angemessene Nacht-Verrechnungssätze (ab 119€/149€/179€)."
            }
        ],
        neighbors: ["schluesseldienst-dillenburg", "schluesseldienst-ehringshausen", "schluesseldienst-asslar"]
    },
    {
        id: "dillenburg",
        slug: "schluesseldienst-dillenburg",
        name: "Dillenburg",
        plz: "35683",
        coordinates: { latitude: 50.7414, longitude: 8.2816 },
        logistics: {
            drivingTimeMinutes: "25-30",
            distanceFromHQ: 26,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 20,
            travelCostText: "+ 20€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Dillenburg — 24h Notdienst | Festpreis ab 99€",
            metaDescription: "Ihr Notdienst in der Oranierstadt Dillenburg (Oberscheld, Niederscheld, Donsbach). Anfahrt via A45 in ca. 25-30 Min. Fairness, Festpreise, Zerstörungsfrei.",
        },
        content: {
            heroIntro: "Schlüsseldienst in der Oranierstadt Dillenburg gesucht? Unser Service-Team fährt für Sie direkt los. Über die A45 in ca. 25-30 Minuten vor Ort – mit ehrlichem Festpreis-Versprechen.",
            mainText: `
<p>Rund um das weithin sichtbare historische Juwel – den Wilhelmsturm – erstreckt sich die bedeutende Oranierstadt Dillenburg. Als Verwaltungssitz im nördlichsten Zipfel der hiesigen Region und Zuhause von etwa 24.000 Einwohnern bietet Dillenburg eine starke Durchmischung aus prächtigem historischem Kern und aufstrebenden Ortsteilen (wie Oberscheld, Niederscheld, Donsbach, Nanzenbach, Eibach, Manderbach und Frohnhausen). Wer die Haustür hier hastig zuzieht und den Bund vergisst, der fühlt sich am nördlichen 30-km-Rand schnell von schnellen Hilfsdiensten abgeschnitten. Keine Sorge: Ihr <strong>Schlüsseldienst Dillenburg</strong> deckt dieses Areal verlässlich zu 100 % ab.</p>

<p>Durch die unmittelbare Streckenführung der Autobahn A45 befahren unsere Techniker die Distanz weitaus schneller als mancher Regionalbetrieb über Landsträßchen. So dringen wir zumeist von unserem Depot in gerade einmal sehr guten 25 bis 30 Minuten direkt bis vor Ihre verschlossene Türfüllung in Dillenburg oder seinen Ortsteilen vor. Keine ewigen Callcenter-Verzögerungen, sondern reibungslose Tourenplanung und exzellentes Routing durch Fachleute, die die A45 wie ihre Westentasche kennen.</p>

<p>Historisch wertvolle alte Türbeschläge an den Fachwerkstrukturen der Kernstadt (etwa rund um den Schlossberg und das Kassierer Tor) behandeln wir wie rohe Eier. Rohe Gewalt ist bei klassischen, nur zugefallenen Haus- und Wohneingängen in Dillenburg weder zielführend noch nötig: Unsere Erfolgschance auf spurlos und völlig abrissfreie Entriegelung liegt bei annähernd 100 %. Sie können den gestrigen Zustand nach der Aufsperrung vollständig wiedererlangen.</p>

<p>Transparenz am nördlichsten Einsatzrand: Auch für die Strecke nach Dillenburg erheben wir an Werktagen nur unseren absolut beständigen 99 Euro Fixbetrag für die Standardöffnung zuzüglich einer äußerst knapp kalkulierten Autobahn-Route (circa 20 Euro Anfahrtsaufwand). Sie umgehen gnadenlos jede Form von Kostenlügen. Beauftragen Sie unser Fachteam sofort – wir starten den Wagen für Ihre Rettung in Dillenburg noch am Telefonhörer.</p>`,
            serviceZerstörungsfrei: "Die Tür in Dillenburg ist fest verschlossen, war aber nicht zugesperrt? Mit Spezialschiebern öffnen wir das Objekt im Minutentakt völlig materialschonend ohne Splitter oder Kratzer.",
            serviceBohren: "Mehrfach zugesperrt, der Schlüssel ist geklaut oder verloren? Hier bohren wir in Dillenburg zentimetergenau und extrem vorsichtig den inneren Profilzylinder raus für absolute Entriegelung.",
            service247: "Notsituation im bitteren Spätjahr oder bei stürmischem Wochenend-Wetter? Verlassen Sie sich komplett auf unsere 24-stündige Erreichbarkeit über alle 365 Jahrestage auch tief im Norden von Dillenburg.",
        },
        faqs: [
            {
                question: "Sind Sie für Notfälle tief im Dillenburger Ortsteil Oberscheld oder Donsbach einsatzbereit?",
                answer: "Hundertprozentig. Die gesamte Gemarkung Dillenburg wird mitsamt aller Randbereiche (wie Nanzenbach, Frohnhausen oder Oberscheld) unter der identischen Festpreisbindung befahren."
            },
            {
                question: "Fallen für die recht lange Distanz horrende Spritkosten für Dillenburg an?",
                answer: "Nein, da wir über die A45 operieren, berechnen wir die Anfahrt für Dillenburg auf ein faires, stark limitiertes Maximum von ca. 20 Euro. Die Festpreise der Öffnung selbst (ab 99€ werktags) bleiben exakt gleich."
            },
            {
                question: "Öffnen Sie auch verrostete Garagentor-Schlösser an Dillenburger Objekten?",
                answer: "Definitiv. Inkludiert in unseren Leistungsumfang sind Gartentore, Kellertürschlösser, Garageabschlüsse und Tresore nebst regulären Haustüren. Wir packen in Dillenburg alles zielorientiert an."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-asslar", "schluesseldienst-ehringshausen"]
    }
];
