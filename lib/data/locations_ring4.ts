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
            metaTitle: "Schlüsseldienst Herborn — Fachbetrieb vor Ort | Festpreis ab 99€",
            metaDescription: "Schlüsseldienst Herborn: Spezialist für Fachwerkhäuser & Altstadt. Zerstörungsfreie Öffnung ab 99€. In ca. 20 Min. über die A45 bei Ihnen. 06441-8056279",
        },
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Direkte und schnelle Anfahrt von Wetzlar über die A45 (Sauerlandlinie). Meist nutzen wir die Ausfahrt Herborn-Süd (27) oder Herborn-West (26), um die Altstadt oder die umliegenden Ortsteile ohne Verzögerung zu erreichen.",
        mainRoad: "A45",
        distanceKm: 20,
        character: "Historische Fachwerkstadt an der Dill",
        populationApprox: "~20.500",
        landmark: "Schloss Herborn & Marktplatz",
        buildingTypes: "Sensible, denkmalgeschützte Fachwerkhäuser im Zentrum, moderne Einfamilienhäuser und Mehrparteien-Wohnanlagen in den Vororten.",
        parkingInfo: "In der engen historischen Altstadt (z.B. rund um den Kornmarkt oder den Leonhardsturm) parken wir unsere Einsatz-Fahrzeuge rücksichtsvoll und nutzen unser mobiles Spezialwerkzeug.",
        heroVariant: "Ausgesperrt in Herborn? Ihr lokaler Fachbetrieb hilft.",
        fareInfo: "Die Anfahrtspauschale beträgt für ganz Herborn und alle dazugehörigen Ortsteile (wie Burg, Seelbach oder Schönbach) faire und fest kalkulierte 20 Euro. Keine versteckten Kilometerpauschalen.",
        
        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Altbautür",
                description: "Besonders bei schweren Eichen- oder historischen Kassettentüren in der Fußgängerzone ist absolute Vorsicht geboten. Wir öffnen zu 99% beschädigungsfrei mit Spezialschiebern."
            },
            {
                icon: "key",
                title: "Schlüssel im Schloss abgebrochen",
                description: "Oft Materialermüdung bei älteren Schließzylindern. Unser Techniker extrahiert das abgebrochene Stück vor Ort in Herborn, ohne zwingend das ganze Schloss bohren zu müssen."
            },
            {
                icon: "car",
                title: "Autoöffnung am Wochenende",
                description: "Den Schlüssel nach dem Einkauf im Hinckel-Areal im Kofferraum vergessen? Wir öffnen alle gängigen Fahrzeugmarken kratzerfrei und direkt vor Ort."
            }
        ],

        aboutText: `
<p>Die Bärenstadt <strong>Herborn</strong> gehört mit ihrer über 800 Jahre alten Geschichte und der malerischen, in unzähligen Reiseführern gepriesenen, historischen Fachwerk-Altstadt zweifelsohne zu den reizvollsten Orten im gesamten Lahn-Dill-Kreis. Rund um den berühmten Kornmarkt, das Rathaus mit den Herborner Wappen und die historische Hohe Schule pulsiert das Leben zwischen denkmalgeschützten Mauern. Doch diese architektonische Idylle bringt bei einer verschlossenen Tür eine ganz besondere Verantwortung mit sich: Wer sich in der Herborner Altstadt aussperrt, braucht keinen x-beliebigen Vermittlungsdienst mit schwerem Gerät, sondern filigrane Meisterarbeit.</p>

<h3>Historisches Erbe bewahren: Spezialwerkzeug für Herborner Fachwerkhäuser</h3>
<p>Wenn die massive, womöglich handgeschnitzte Haustür eines Fachwerkhauses unglücklich ins Schloss fällt – und der Bewohner draußen im strömenden Regen steht – dürfen keine Laien mit Gewalt ans Werk. Die Reparaturkosten oder gar der unersetzbare historische Wertverlust an jahrhundertealtem Holz gehen hier schnell in die Tausende. Als langjähriger Partner in der Region distanzieren wir uns extrem von groben Bohr- und Hebelmethoden. Wir setzen auf modernste Lockpicking-, Zieh- und Fangmethoden. In fantastischen 99 % der alltäglichen Fälle, in denen in Herborn eine Haustür bloß von außen zugefallen (nicht zweifach verschlossen) ist, entriegeln unsere Techniker diese Türen völlig materialschonend, kratzerfrei und unberührt.</p>

<h3>Schnelle Hilfe über die Sauerlandlinie (A45)</h3>
<p>Wenn der Notfall eintritt, zählt jede Minute. Durch unsere erstklassige logistische Anbindung über die A45 (Ausfahrten Herborn-Süd und Herborn-West) müssen Sie nicht lange in der Kälte warten. Die rund 20 Kilometer von unserem Hauptstandort bewältigen unsere Einsatzfahrzeuge in einer erstklassigen Regeldauer von etwa 20 bis 25 Minuten. Diese Verlässlichkeit schätzen insbesondere Geschäftsbetreiber rund um den Leonhardsturm und Anwohner in der Mühlgasse gleichermaßen.</p>

<h3>Flächendeckender Service: Auch in den Herborner Ortsteilen im Einsatz</h3>
<p>Herborn ist jedoch weit mehr als "nur" seine weltbekannte Altstadt. Neben dem Stadtzentrum betreuen wir selbstverständlich auch sämtliche expandierende Vororte und besinnliche Randgebiete. Egal, ob Sie in den Eigenheimsiedlungen von <strong>Seelbach</strong> und <strong>Burg</strong>, in den ländlicheren Gebieten von <strong>Schönbach</strong> und <strong>Sinn</strong> (angrenzend), oder drüben in <strong>Merkenbach</strong> und <strong>Uckersdorf</strong> schnelle Hilfe benötigen – unser Schlüsseldienst garantiert für das gesamte Stadtgebiet von Herborn denselben Festpreis. Ohne Ausnahme.</p>

<h3>Transparenz & Ehrlichkeit statt Kostenfallen</h3>
<p>Für unsere Dienstleistung setzen wir im Basis-Werktagsturnus auf den transparenten Festpreis von exakt 99 Euro. Sie zahlen zusätzlich lediglich eine absolut maßvolle und strikt limitierte Anfahrtspauschale in Höhe von 20 Euro. Kein unübersichtlicher Kostenvoranschlag im Nachhinein, keine künstlich gestreckten Stundenabrechnungen. Retten Sie Ihren Termin, schützen Sie Ihre Wertsachen und ordern Sie unseren seriösen, ortskundigen Schlüsseldienst direkt für Herborn.</p>
`,
        
        localTestimonials: [
            {
                name: "Michael Schneider",
                quote: "Schlüssel im Schloss abgebrochen. Der Monteur war nach knapp 20 Minuten direkt am Kornmarkt in Herborn vor Ort. Absolut professionell, das alte Holz der Tür blieb völlig unberührt. Preis am Telefon entsprach exakt der Rechnung.",
                rating: 5
            },
            {
                name: "Julia R.",
                quote: "Nach dem Feiern in der Herborner Altstadt den Schlüssel verloren. Nachts um 3 Uhr angerufen, 25 Minuten später war die Tür offen. Sehr freundlich, Nachtzuschlag war fair kommuniziert.",
                rating: 5
            },
            {
                name: "Familie Hoffmann",
                quote: "Wir wohnen in Herborn-Burg und das Schloss klemmte plötzlich. Der Techniker hatte direkt einen hochsicheren Ersatz-Zylinder (BKS) dabei und diesen in 10 Minuten verbaut.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgesperrt in der Fachwerk-Stadt Herborn? Wir eilen über die A45 zu Ihnen! Garantiert beschädigungsfreie Türöffnung ab 99€.",
            mainText: "", // Ersetzt durch aboutText im 10x Layout
            serviceZerstörungsfrei: "", // Ersetzt durch scenarios im 10x Layout
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gelten die fairen Preise auch für hochliegende Gebiete in Herborn wie Schönbach oder Uckersdorf?",
                answer: "Aber sicher. Die transparente Fahrtpauschale greift identisch für alle angrenzenden Nachbardörfer im Verbundbezirk Herborn (von Burg über Guntersdorf bis Hirschberg)."
            },
            {
                question: "Wenn wir in der Innenstadt von Herborn wohnen, hat der Monteur Equipment für jahrzehntealte Doppeltüren?",
                answer: "Selbstverständlich! Unsere Meister-Spezialisten verfügen genau hierfür über hochsensible Spezialpicker und Türfalzentsperrer, speziell angefertigt für Fachwerktüren und empfindlichen Denkmalbestand."
            },
            {
                question: "Bleibt es immer strikt beim 99 Euro Festpreis in Herborn?",
                answer: "Handelt es sich um eine ungeklinkt zugefallene Haustür an ganz alltäglichen Werktagen untertags, kostet Sie das reine Aufmachen pauschal 99 Euro. Die Fahrtkosten von ca. 20 Euro über die A45 werden getrennt berechnet. Am Wochenende (und nachts) bestehen tarifliche Nacht-Zuschläge (ab 119€/149€/179€)."
            }
        ],
        neighbors: ["schluesseldienst-dillenburg", "schluesseldienst-sinn", "schluesseldienst-mittenaar"]
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
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Über die direkte Anbindung an die A45 (Ausfahrten Dillenburg / Haiger) erreichen unsere Monteure sowohl das Stadtzentrum unterhalb des Schlossbergs als auch die verwinkelten Ortsteile in kürzester Zeit.",
        mainRoad: "A45",
        distanceKm: 26,
        character: "Historische Oranierstadt und Industriestandort",
        populationApprox: "~23.500",
        landmark: "Wilhelmsturm & historische Kasematten",
        buildingTypes: "Prächtiges Fachwerk in der Altstadt, robuste Industriebauten und weitläufige Eigenheimsiedlungen in den Hanglagen.",
        parkingInfo: "Rund um den Wilhelmsturm und in der verwinkelten Altstadt operieren wir mit mobilen Spezial-Ausrüstungscaddys direkt bis vor Ihre Haustür.",
        heroVariant: "Schlüsseldienst für Dillenburg. 24/7 Service ohne Abzocke.",
        fareInfo: "Die Anfahrt in den äußersten Winkel der Kernstadt sowie in alle Dillenburger Ortsteile (z.B. Donsbach, Frohnhausen) berechnen wir stets fair mit unserem gedeckelten A45-Pauschalsatz von 20 Euro.",
        
        scenarios: [
            {
                icon: "home",
                title: "Haustür zugefallen in Hanglage",
                description: "Viel Wind an den Oberschelder Hängen? Eine zugefallene Haustür öffnen wir in fast 100% der Fälle völlig ohne Beschädigung an Rahmen oder Zylinder."
            },
            {
                icon: "shield-check",
                title: "Einbruchschutz für Gewerbe",
                description: "Für Industrie & Gewerbe im Dillenburger Gewerbegebiet bieten wir Sofort-Schlosswechsel nach Einbrüchen oder Mitarbeiter-Schlüsselverlusten an."
            },
            {
                icon: "car",
                title: "Fahrzeug in Dillenburg öffnen",
                description: "Ausgesperrt auf dem Pendlerparkplatz an der B277? Wir entsperren alle gängigen KFZ-Marken schnell, routiniert und absolut kratzerfrei."
            }
        ],

        aboutText: `
<p>Die stolze <strong>Oranierstadt Dillenburg</strong> erstreckt sich malerisch rund um das weithin sichtbare historische Juwel der Region – den majestätischen Wilhelmsturm. Als zentraler Verwaltungssitz im nördlichen Lahn-Dill-Kreis und Zuhause von etwa 23.500 Einwohnern bietet Dillenburg eine reizvolle, aber auch architektonisch anspruchsvolle Mischung: Ein prächtiger historischer Kern trifft hier auf aufstrebende, moderne Ortsteile wie <strong>Oberscheld, Niederscheld, Donsbach, Nanzenbach, Eibach, Manderbach und Frohnhausen</strong>. Genau diese Vielfalt an Türtypen und Sicherheitssystemen erfordert einen Schlüsseldienst, der nicht nur schnell, sondern mit größter handwerklicher Präzision arbeitet.</p>

<h3>Zerstörungsfreie Öffnung in der Dillenburger Altstadt</h3>
<p>Wenn die jahrhundertealte Holztür eines Fachwerkhauses am Fuße des Schlossberges oder nahe dem Kassierer Tor ungewollt ins Schloss fällt, zählen zwei Dinge: Ruhen bewahren und Profis rufen. Historisch wertvolle Türbeschläge und massive Holzstrukturen behandeln unsere erfahrenen Monteure wie rohe Eier. Rohe Gewalt, schwere Bohrmaschinen oder gar das Aufhebeln mit dem Brecheisen sind bei uns absolut tabu. Durch den Einsatz extrem filigraner Spezialwerkzeuge (Lockpicking, Luftkissen, Fallengleiter) liegt unsere Erfolgschance auf spurlos und völlig abrissfreie Entriegelung einer lediglich zugefallenen Tür bei beeindruckenden 99 %. Sie sparen sich ruinierte Türblätter und extrem teure Tischlerreparaturen.</p>

<h3>A45-Express: Schnelle Reaktionszeit für ganz Dillenburg</h3>
<p>Wer seine Tür am nördlichen 30-km-Rand des Kreises hastig zuzieht, fühlt sich oft von schnellen städtischen Hilfsdiensten abgeschnitten. Doch keine Sorge: Durch die unschlagbar direkte Streckenführung der Autobahn A45 (Sauerlandlinie) befahren unsere Techniker die Distanz zwischen Wetzlar und Dillenburg weitaus rasanter als mancher lokale Regionalbetrieb. Zumeist dringen wir von unserer Alarmzentrale in hervorragenden <strong>25 bis 30 Minuten</strong> direkt bis vor Ihre Haustür vor. Keine Callcenter-Warteschleifen, sondern reibungslose Tourenplanung von Fachleuten.</p>

<h3>Sicherheit für Dillenburger Industrie und Gewerbe</h3>
<p>Dillenburg ist nicht nur Wohnort, sondern starker Industriestandort. Zahlreiche Betriebe und Werkshallen entlang der Dill und im Gewerbegebiet vertrauen auf unsere B2B-Sicherheitsexpertise. Wir tauschen defekte Schließanlagen, reparieren aufgebrochene Bürotüren und helfen bei Serverraum-Sperrungen direkt vor Ort – 24 Stunden am Tag. Die Absicherung Ihrer geschäftlichen Infrastruktur liegt uns am Herzen.</p>

<h3>Garantierte Festpreise statt böser Überraschungen</h3>
<p>Ehrliche Handwerksarbeit muss transparent sein. Transparenz bedeutet bei uns am nördlichsten Einsatzrand: Für die klassische Standardöffnung einer zugefallenen Tür erheben wir an ganz normalen Werktagen unseren strikten <strong>99 Euro Fixbetrag</strong>. Hinzu kommt eine äußerst knapp kalkulierte und vorher klar kommunizierte Autobahn-Routenpauschale von 20 Euro. Kein unübersichtlicher Kostenvoranschlag im Nachhinein, keine künstlichen Stundenabrechnungen. Wenn Sie die 06441-Nummer wählen, starten wir den Wagen nach Dillenburg noch, während wir telefonieren.</p>
`,
        
        localTestimonials: [
            {
                name: "Thomas W.",
                quote: "Nach dem Wandern am Wilhelmsturm den Schlüssel verloren. Der Schlüsseldienst war in echten 25 Minuten in Dillenburg. Tür wurde ohne jeden Bohrer aufgemacht, 99€ wie am Telefon besprochen. Einfach top.",
                rating: 5
            },
            {
                name: "Sabrina M.",
                quote: "Wir wohnen in Oberscheld, weit oben am Hang. Trotzdem war der Techniker mitten in der Nacht superschnell da. Extrem ruhig und professionell. Das neue Schloss fühlt sich viel sicherer an als das alte.",
                rating: 5
            },
            {
                name: "Gewerbekunde Dillenburg",
                quote: "Als unser Master-Schlüssel im Betrieb abbrach, war die schnelle Reaktionszeit Gold wert. Kein langes Gerede, sofortige Problemlösung. Wir haben MS Schlüsseldienst nun fest in unseren Notfallnummern.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Schlüsseldienst in der Oranierstadt Dillenburg gesucht? Unser Service-Team fährt für Sie direkt los. Über die A45 in ca. 25-30 Minuten vor Ort – mit ehrlichem Festpreis-Versprechen.",
            mainText: "", // Ersetzt durch aboutText
            serviceZerstörungsfrei: "", // Ersetzt durch scenarios
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Sind Sie für Notfälle tief im Dillenburger Ortsteil Oberscheld oder Donsbach einsatzbereit?",
                answer: "Hundertprozentig. Die gesamte Gemarkung Dillenburg wird mitsamt aller Randbereiche (wie Nanzenbach, Frohnhausen oder Oberscheld) unter der identischen 20-Euro-Anfahrtspauschale befahren."
            },
            {
                question: "Fallen für die recht lange Distanz von Wetzlar horrende Spritkosten für Dillenburg an?",
                answer: "Nein, da wir über die Bundesautobahn A45 operieren, berechnen wir die Anfahrt für Dillenburg auf ein extrem faires, stark limitiertes Fixum von 20 Euro. Die Festpreise der Öffnung selbst (ab 99€ werktags) bleiben exakt gleich wie im Wetzlarer Zentrum."
            },
            {
                question: "Öffnen Sie auch verrostete Garagentor-Schlösser an Dillenburger Hang-Objekten?",
                answer: "Definitiv. Inkludiert in unseren Leistungsumfang sind Gartentore, Kellertürschlösser, Garagenabschlüsse, Briefkästen und Tresore nebst regulären Haustüren. Wir packen in Dillenburg alles zielorientiert an."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-asslar", "schluesseldienst-ehringshausen"]
    },
    {
        id: "weilburg",
        slug: "schluesseldienst-weilburg",
        name: "Weilburg",
        plz: "35781",
        coordinates: { latitude: 50.4842, longitude: 8.2612 },
        logistics: {
            drivingTimeMinutes: "20-25",
            distanceFromHQ: 22,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 20,
            travelCostText: "+ 20€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Weilburg — Express-Notdienst | Festpreis ab 99€",
            metaDescription: "Schlüsseldienst für Weilburg & Ortsteile (Odersbach, Kubach). Beschädigungsfreie Öffnung, ca. 20-25 Min. Ankunft über B49. 24/7 faire Preise ab 99€.",
        },
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Über die vierspurig ausgebaute Bundesstraße 49 fahren wir von Wetzlar aus direkt an die Lahn-Schleife nach Weilburg – oft schneller als Betriebe aus Limburg.",
        mainRoad: "B49",
        distanceKm: 22,
        character: "Majestätische Residenzstadt an der Lahn",
        populationApprox: "~13.000",
        landmark: "Schloss Weilburg & Lahn-Schifffahrtstunnel",
        buildingTypes: "Barocke Bürgerhäuser in der Altstadt, historische Höfe sowie weitreichende Wohnbebauung in Kubach und Odersbach.",
        parkingInfo: "Trotz der winkligen Schlossmauer-Bereiche operieren wir mit kompakten Werkzeug-Koffern völlig problemlos direkt im Stadtkern.",
        heroVariant: "Ausgesperrt in der Residenzstadt Weilburg? Wir entriegeln sofort.",
        fareInfo: "Die B49-Anfahrt nach Weilburg inkl. aller Stadtteile rechnen wir extrem spitz kalkuliert mit genau 20 Euro Fix-Zuschlag ab.",
        
        scenarios: [
            {
                icon: "key",
                title: "Schlüssel abgebrochen im Altbau",
                description: "Zylinderblockade am historischen Gebäude? Mit hochfeinen Extraktor-Nadeln holen wir das abgerochene Stück schonend aus dem Schloss."
            },
            {
                icon: "shield-alert",
                title: "Notfall nach Lahn-Tour",
                description: "Schlüssel bei der Kanufahrt auf der Lahn ins Wasser gefallen? Wir öffnen Ihre Weilburger Immobilie 24/7 über unsere Sofort-Hotline."
            },
            {
                icon: "briefcase",
                title: "Gewerbliche Hilfe in Kubach",
                description: "Ausgesperrt im Gewerbegebiet Kubach? Wir helfen Handwerkern und Firmen bei defekten Toren oder Bürotüren noch am selben Vormittag."
            }
        ],

        aboutText: `
<p>Die <strong>Residenzstadt Weilburg</strong> thront malerisch auf einem schroffen Felssporn hoch über der Lahn. Wer hier durch die Gassen rund um das Renaissance- und Barockschloss Weilburg oder den einzigartigen Lahn-Schifffahrtstunnel wandelt, spürt die jahrhundertealte Geschichte an jeder Ecke. Für die rund 13.000 Einwohner (verteilt auf die Kernstadt und Ortsteile wie <strong>Kubach, Odersbach, Hirschhausen und Waldhausen</strong>) verbindet Weilburg enorme landschaftliche Lebensqualität mit historischen Wurzeln. Wenn sich hier jedoch die schöne alte Holztür am Marktplatz unerwartet verschließt und der Schlüssel von innen steckt, wird schnelle und behutsame Hilfe benötigt. Der <strong>Schlüsseldienst Weilburg</strong> unseres Teams vereint genau diese Qualitäten.</p>

<h3>Schonende Öffnungsverfahren für historische Türen in Weilburg</h3>
<p>Nirgendwo in der Region finden sich noch so viele massive, teilweise barocke Handwerks-Türen wie im Bereich der alten Stadtmauern Weilburgs. Wo Laien und aggressive Callcenter-Notdienste schnell zur verheerenden Fräsmaschine oder zur rohen Brechstange greifen, arbeiten wir wie echte Restauratoren der Sicherheitstechnik. Unser zertifiziertes Personal setzt extrem feinmotorische Lockpicking-Sets, beschichtete Ziehspachtel und materialschonende Luftkissen ein. Handelt es sich in Weilburg "nur" um eine komplett ins Schloss gefallene, aber nicht doppelt abgeschlossene Tür, beläuft sich unsere zerstörungsfreie Erfolgsquote auf fabelhafte 99 %. Eine Beschädigung des teuren Echtholzes oder Türrahmens schließen wir mit dieser Meisterschaft praktisch aus.</p>

<h3>B49-Express: Schneller am Schloss Weilburg als gedacht</h3>
<p>Wer nach einem Schlüsseldienst in Weilburg googelt, befürchtet oft extreme Anfahrtswege aus Limburg, Gießen oder Frankfurt. Hier trumpfen wir auf: Durch unsere direkte Nähe zu Wetzlar und die durchgängig famos ausgebaute B49 (Verlauf Richtung Limburg) steuern wir Weilburg absolut direkt an. Nach nur rund <strong>20 bis 25 rasanten Minuten</strong> rollen wir über die Steinbrücke. Das bedeutet für Sie: Spätestens eine halbe Stunde, nachdem Sie uns in der Notsituation angerufen haben, beginnt die technische Öffnung vor Ihrer eigenen Tür in Weilburg.</p>

<h3>Modernes Know-how für Kubach & Hirschhausen</h3>
<p>Natürlich öffnet unser Notfallteam nicht bloß antike Objekte der Kernstadt. Die modernen Neubausiedlungen und weitläufigen Industriebereiche in <strong>Kubach</strong> (nahe der Kristallhöhle) oder die ländlichen Anwesen in <strong>Kirschhofen und Odersbach</strong> decken wir ebenso mit Hightech-Sensibilität ab. Ob schwere Dreifachverriegelung, elektronische Zylinder-Komponenten an gewerblichen Bauten oder streikende Garagenantriebe – unsere rollende Werkstatt führt das exakte Ersatzmaterial in modernster DIN-Norm direkt mit sich.</p>

<h3>Transparente Festpreise – ohne Wenn und Aber für Weilburg</h3>
<p>Unser Ruf eilt uns im Lahntal voraus, denn wir spielen niemals mit der Angst der Menschen. Unsere Preise sind gemeißelt: Für ein standardmäßiges Entriegeln am Werktag zahlen Sie fest verankerte <strong>99 Euro für die reine Arbeitsleistung</strong>, auf den Cent genau. Die längere Fahrt über die Bundesstraße 49 nach Weilburg schlägt mit einem fest fixierten, äußerst human kalkulierten Anteil von marginalen 20 Euro zu Buche. Sie riskieren bei uns keinerlei überraschende Stundenlöhne oder undurchsichtige "Spezial-Zuschläge". Wir stehen in Weilburg für Handwerksehre pur.</p>
`,
        
        localTestimonials: [
            {
                name: "Dieter F.",
                quote: "Direkt in der Altstadt in Weilburg passiert. Der alte Schlüssel brach eiskalt im Originalschloss ab. Der Monteur war via B49 extrem schnell oben, zog das Fragment mit einer winzigen Nadel raus. Großartig!",
                rating: 5
            },
            {
                name: "Michaela K.",
                quote: "Wir kamen aus Kubach vom Einkaufen und die Wohnungstür war im Windflügel zugefallen. Es hat nicht einmal 30 Minuten gedauert, bis der Techniker hier ankam. Preis exakt wie auf der Internet-Seite.",
                rating: 5
            },
            {
                name: "Familie Özcan",
                quote: "Mitten in der Nacht in Odersbach die Haustür zugeknallt. Der Telefonkontakt war der erste extrem beruhigende Moment. Top Service, Tür ging butterweich auf, kein Kratzer an der nagelneuen Haustür.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Türöffnung in der Residenzstadt Weilburg gesucht? Unser Service-Team fährt für Sie über die B49 direkt los. In ca. 20-25 Minuten vor Ort – mit ehrlichem Festpreis-Versprechen.",
            mainText: "", // Ersetzt durch aboutText im 10x-System
            serviceZerstörungsfrei: "", // Ersetzt durch scenarios
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gilt der Anfahrtspreis auch für entlegene Weilburger Ortsteile wie Hasselbach oder Bermbach?",
                answer: "Aber sicher. Die transparente Fahrtpauschale von 20 Euro greift identisch für alle angrenzenden Stadtteile im Stadtgebiet Weilburg."
            },
            {
                question: "Mir ist der Schlüssel beim Spaziergang am Weilburger Schifffahrtstunnel ins Wasser gefallen. Haben Sie neue Zylinder dabei?",
                answer: "Ja! Unsere Transporter sind voll ausgestattet. Wir fräsen bei Komplettverlust den alten Block aus und verbauen sofort einen neuen BKS- oder Abus-Sicherheitszylinder samt neuer Schlüssel."
            },
            {
                question: "Gibt es verdeckte Kosten für die Mehrwertsteuer in Weilburg?",
                answer: "Alle von uns im Privatkunden-Bereich (B2C) kommunizierten Öffnungspreise – wie unser 99 Euro Festpreis an Werktagen – verstehen sich immer als faire, transparente Bruttopreise inklusive der 19 % Mehrwertsteuer."
            }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-braunfels", "schluesseldienst-leun"]
    }
];
