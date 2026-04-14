import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

export const ring2Locations: LocationData[] = [
    // --- RING 2 (3-10 km) ---
    {
        id: "asslar",
        slug: "schluesseldienst-asslar",
        name: "Aßlar",
        plz: "35614",
        coordinates: { latitude: 50.5924, longitude: 8.4681 },
        logistics: {
            drivingTimeMinutes: "5-10",
            distanceFromHQ: 6,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 10,
            travelCostText: "+ 10€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Aßlar Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Aßlar: Zerstörungsfreie Türöffnung ab 99€. In ca. 5-10 Min. an der Laguna, Werdorf, Berghausen & Kernstadt. Faire Preise. 06441-8056279",
        },
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Durch die direkte Nachbarschaft zu Wetzlar und die optimale Anbindung via B277 (oder über Klein-Altenstädten) erreichen unsere Techniker weite Teile Aßlars oftmals in unter 10 Minuten.",
        mainRoad: "B277 / B277a",
        distanceKm: 6,
        character: "Lebendige Stadt am Rande des Westerwaldes mit starker Industrie und dörflichen Ausläufern",
        populationApprox: "~14.000",
        landmark: "Thermalbad Laguna Aßlar & Schloss Werdorf",
        buildingTypes: "Gewerbliche Komplexe in der Kernstadt, dichte Mehrfamilienhäuser sowie hochgelegene, ländliche Einfamilienhaussiedlungen (z.B. in Berghausen oder Bermoll).",
        parkingInfo: "Dank der typisch ländlich-urbanen Bebauung Aßlars parken unsere mobilen Einsatzfahrzeuge stets unmittelbar vor Ihrem Gebäude, was schnellen Werkzeug-Zugriff ermöglicht.",
        heroVariant: "Schlüsseldienst für Aßlar und Ortsteile. Notöffnung in Rekordzeit.",
        fareInfo: "Die direkte Nähe unserer Wetzlarer Leitstelle macht Aßlar quasi zum Heimspiel. Die Anfahrt wird mit sensationell günstigen 10 Euro berechnet.",
        
        scenarios: [
            {
                icon: "home",
                title: "Wohnungstür zu in der Kernstadt",
                description: "Vom Wind in einem der Aßlarer Mehrfamilienhäuser zugeschlagen? Wir manipulieren die Falle schonend von außen, Sie sind in Sekunden wieder drin und nahezu immer spurlos."
            },
            {
                icon: "shield-alert",
                title: "Hausverwaltung & Gewerbe",
                description: "Ausgesperrt im Bürokomplex oder defekte Schließanlage im Einzelhandel? Wir ersetzen blockierte Profilzylinder und BKS-Systeme noch am selben Tag."
            },
            {
                icon: "briefcase",
                title: "Freizeit & Thermalbad (Laguna)",
                description: "Nach dem Familienausflug in der Laguna stehen Sie vor dem verschlossenen Auto oder Wohnmobil? Unsere Techniker garantieren auch hier absolut kratzfreie KFZ-Öffnungen."
            }
        ],

        aboutText: `
<p>Direkt nordwestlich an den Wetzlarer Kernbereich anschließend, erstreckt sich die lebendige Stadt <strong>Aßlar</strong>. Als Einfallstor in das Dilltal vereint Aßlar mit seinen rund 14.000 Einwohnern modernste industrielle Zentren in der Kernstadt mit tief ländlicher, bewaldeter Ausstrahlung in den hochgelegenen Ortsteilen <strong>Werdorf, Berghausen, Kölschhausen, Bechlingen, Oberlemp und Bermoll</strong>. Ob der Haustürschlüssel beim Schwimmbadbesuch in der "Laguna Aßlar" abhandenkam oder die schwere Holztür Ihres Einfamilienhauses in Bermoll vom starken Westerwald-Wind unwiderruflich ins Schloss gepresst wurde: Das Horrorszenario der verschlossenen Tür löst unser ansässiger, top-qualifizierter <strong>Schlüsseldienst Aßlar</strong> im Handumdrehen.</p>

<h3>Blitzschnelle Hilfe über die B277: Rekordzeit für Aßlar</h3>
<p>Da unsere Einsatzbasis unmittelbar angrenzt, ist Aßlar für uns kein Fremdgebiet, sondern tägliches Einsatzterrain. Über den autobahnähnlich ausgebauten Zubringer (B277) oder den kurzen Landstrich via Klein-Altenstädten navigieren unsere Handwerker staufrei und rasant zu Ihnen. Die versprochene Anfahrtszeit beläuft sich in der Kernstadt und Werdorf auf gerade mal <strong>5 bis 10 Minuten</strong>. Wer in strömendem Regen frierend vor der eigenen Haustür an der Dill ausharren muss, weiß solche echten Reaktionszeiten ohne Fernvermittlung zu schätzen.</p>

<h3>Kompetenz von Schloss Werdorf bis zur Neubaussiedlung</h3>
<p>Die bauliche Differenz innerhalb der Stadtgrenzen erfordert massives Fachwissen. Während in der Kernstadt häufig modernste Mehrfachverriegelungen oder Sicherheitszylinder in sanierten Mietkomplexen verbaut sind, finden sich rund um das Schloss Werdorf oder in Oberlemp teils stark gealterte Schließanlagen. Durch ständiges Training mit feinsten Hobb’schen Haken, Fallengleitern und Elektro-Picks wendet unser Personal nie plump rohe Gewalt (wie Brecheisen) an. Wenn Sie Ihre Tür nur hinter sich ins Schloss gezogen haben, ist unsere Devise unumstößlich: Zu nahezu alle öffnen wir Ihre Wohnung in Aßlar gänzlich ohne Zylinderbohrung oder Lackkratzer am Rahmen. Der Schließmechanismus funktioniert sofort uneingeschränkt weiter.</p>

<h3>24/7 Notdienst an 365 Tagen im Jahr</h3>
<p>Sonntagnacht nach einer Feier in Kölschhausen den Schlüssel nicht mehr wiedergefunden? Oder das Schloss des Firmengebäudes klemmt an einem frühen Feiertagmorgen? Wir lassen Sie in Aßlar niemals allein im Dunkeln stehen. Unser verifizierter Schlüsselnotdienst operiert lückenlos 24 Stunden, an jedem Tag des Jahres, auch an Heiligabend oder Silvester.</p>

<h3>Feste, faire Preise für gute Nachbarschaft</h3>
<p>Als regionaler Dienstleister (kein Vermittlungs-Callcenter) setzen wir dem teils kriminellen Ruf der Branche knüppelharte Ehrlichkeit entgegen. Unsere Kalkulation ist in sich durchsichtig und glasklar: Für die eigentliche Arbeitsleistung bei einer Standard-Zugefallen-Situation berechnen wir werktags am Tag <strong>fix 99 Euro</strong>. Da Aßlar direkt neben uns liegt, drosseln wir unsere Anfahrtskosten auf extrem schmale 10 Euro. Diese Konditionen klären wir absolut transparent und fair mit Ihnen schon am Beginn des Anrufs ab. Keine Wuchertarife, sondern solide, rechtschaffene Handwerkskunst aus der direkten Nachbarschaft.</p>
`,
        
        localTestimonials: [
            {
                name: "Karsten W.",
                quote: "Morgens in der Hektik die Tür im Wohngebiet hinter der Laguna Aßlar zugezogen, Schlüssel drinnen. Notdienst angerufen, Mitarbeiter stand nach unglaublichen 7 Minuten im Treppenhaus. Die Öffnung mit so einem Plastik-Schieber dauerte 15 Sekunden. Keinerlei Abzocke, genau 99 Euro plus 10 Anfahrt.",
                rating: 5
            },
            {
                name: "Sven F.",
                quote: "Wir leben oben in Bermoll. Der Zylinder an der alten Seitentür war gebrochen. Der Monteur war zügig da, bohrte das alte Schloss professionell auf und hat direkt ein tolles BKS-Markenschloss eingebaut. Super nett, top Preis.",
                rating: 5
            },
            {
                name: "Renate S.",
                quote: "Habe den Schlüsseldienst nachts für Werdorf gebraucht. Sehr beruhigend am Telefon. Der Monteur kam prompt und war absolut rücksichtsvoll, da das halbe Haus schlief. Top Service für Aßlar!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgesperrt in Aßlar oder den Ortsteilen? Unser lokaler Schlüsseldienst ist schnell für Sie im Einsatz. Transparente Festpreise und beschädigungsfreie Türöffnungen und 24 Stunden am Tag.",
            mainText: "", // Erweitert durch aboutText
            serviceZerstörungsfrei: "", // Ersetzt durch scenarios
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Wenn ich aus einem Aßlarer Höhendorf (z. B. Oberlemp oder Bermoll) anrufe, steigen dann die Fahrkosten?",
                answer: "Nein. Wir schlagen für Bergstrecken oder entlegene Ausläufer keine versteckten Gebühren auf. Für ganz Aßlar bis zur Gemeindegrenze gilt unsere günstige, pauschale 10-Euro-Anfahrt."
            },
            {
                question: "Meine Tür in Berghausen ist mehrfach fest abgeschlossen. Bohren Sie sofort alles kaputt?",
                answer: "Auf keinen Fall 'alles kaputt'. Ein verschlossener Riegel erfordert oft das Abfräsen / feine Aufbohren des Zylinders. Wir nutzen jedoch hochmoderne Präzisionsfräsen, sodass Rosette, Schutzbeschlag und das teure Türblatt absolut unbeschädigt bleiben. Sie benötigen danach lediglich einen neuen Zylinder, den wir direkt dabeihaben."
            },
            {
                question: "Gibt es für Stammkunden oder Hausverwaltungen in Aßlar Rabatte?",
                answer: "Absolut. Hausmeister-Services, Gewerbebetriebe rund um Aßlar oder Wohnungsbaugesellschaften im Lahn-Dill-Kreis betreuen wir sehr gern zu attraktiven, langfristigen B2B-Serviceverträgen."
            }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-ehringshausen", "schluesseldienst-wetzlar-hermannstein"]
    },
    {
        id: "solms",
        slug: "schluesseldienst-solms",
        name: "Solms",
        plz: "35606",
        coordinates: { latitude: 50.5365, longitude: 8.4041 },
        logistics: {
            drivingTimeMinutes: "8-12",
            distanceFromHQ: 8,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 10,
            travelCostText: "+ 10€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Solms Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Solms: Türöffnung ab 99€. In 8-12 Min. in Burgsolms, Oberbiel & Albshausen. Faire Festpreise. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die B49 durchs malerische Lahntal oder die L3020 erreichen unsere Techniker sämtliche fünf Solmser Stadtteile in kürzester Zeit und typischerweise innerhalb von 8 bis 12 Minuten.",
        mainRoad: "B49 / L3020",
        distanceKm: 8,
        character: "Historische Lahn-Stadt mit Bergbautradition, Klosterkultur und fünf eigenständigen Ortsteilen",
        populationApprox: "~13.500",
        landmark: "Besucherbergwerk Grube Fortuna & Kloster Altenberg",
        buildingTypes: "Breiter Mix aus historischen Fachwerkhäusern in Burgsolms, soliden Nachkriegs-Reihenhäusern in Oberbiel/Niederbiel, moderneren Einfamilienhaussiedlungen in Albshausen und vereinzelten Gewerbebauten entlang der Lahntalstraße.",
        parkingInfo: "Die überwiegend kleinstädtische bis dörfliche Bebauung in allen fünf Solmser Ortsteilen bietet reichlich Parkmöglichkeiten direkt vor dem Einsatzort und unser Werkzeugkoffer ist stets in Griffweite.",
        heroVariant: "Schlüsseldienst für Solms und alle 5 Ortsteile. Von der Grube Fortuna bis Kloster Altenberg.",
        fareInfo: "Solms liegt als direkter Nachbar von Wetzlar im absolut günstigen Nahbereich. Die Anfahrt wird mit nur 10 Euro berechnet und für alle fünf Ortsteile identisch.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Tür in Burgsolms",
                description: "In der Hektik des Alltags die Haustür im größten Ortsteil Burgsolms zugezogen? Unsere Techniker nutzen feinste Fallengleiter und öffnen Ihre Standardtür in Sekunden und ohne jede Beschädigung am Schloss."
            },
            {
                icon: "shield-alert",
                title: "Schlüsselverlust nach Wanderung",
                description: "Nach einer Wanderung entlang des Lahnuferwegs oder einem Besuch im Kloster Altenberg den Schlüssel verloren? Wir öffnen Ihre Tür und tauschen bei Bedarf den Zylinder sofort aus und für Ihre Sicherheit."
            },
            {
                icon: "briefcase",
                title: "Gewerbe & Industriegebiet",
                description: "Defekter Schließzylinder im Gewerbebetrieb oder blockierte Bürotür? Wir reagieren auch außerhalb der Geschäftszeiten blitzschnell und installieren auf Wunsch hochwertige Ersatzschließanlagen."
            }
        ],

        aboutText: `
<p>Eingebettet ins idyllische Lahntal, westlich von Wetzlar, erstreckt sich die geschichtsträchtige <strong>Stadt Solms</strong> mit ihren rund 13.500 Einwohnern über fünf eigenständige, charakterstarke Ortsteile: <strong>Burgsolms, Oberbiel, Niederbiel, Oberndorf und Albshausen</strong>. Was Solms von vielen Nachbargemeinden abhebt, ist die faszinierende Verbindung aus lebendigem Bergbauerbe und verkörpert durch das deutschlandweit bekannte <strong>Besucherbergwerk Grube Fortuna</strong> in Oberbiel und und klösterlicher Kulturlandschaft rund um das ehrwürdige <strong>Kloster Altenberg</strong> auf dem Michelsberg. Wenn in einer solch facettenreichen Gemeinde der Haustürschlüssel abhanden kommt oder ein Schloss seinen Dienst versagt, brauchen die Bewohner einen <strong>Schlüsseldienst Solms</strong>, der die Besonderheiten jedes einzelnen Ortsteils kennt.</p>

<h3>Direkte Lahntal-Route: In Minuten bei Ihnen</h3>
<p>Die verkehrstechnische Anbindung von Solms ist für unseren Einsatzdienst nahezu ideal. Über die <strong>B49</strong>, die sich als Hauptschlagader durchs Lahntal zieht, sowie die <strong>L3020</strong> erreichen unsere Monteure sowohl die höher gelegenen Siedlungen in Oberndorf als auch die ufernahen Wohngebiete in Niederbiel und Oberbiel zuverlässig in <strong>8 bis 12 Minuten</strong>. Diese Verlässlichkeit verdanken wir nicht nur der kurzen Distanz von etwa 8 Kilometern, sondern auch unserer intimen Kenntnis der lokalen Verkehrsführung und wo in der Rushhour Stau entsteht, welche Nebenstraße schneller führt und wo Baustellen den Weg versperren könnten.</p>

<h3>Von Fachwerk bis Neubau: Handwerk für jedes Schloss</h3>
<p>Die bauliche Vielfalt in Solms ist bemerkenswert. In <strong>Burgsolms</strong>, dem mit rund 4.500 Einwohnern größten Stadtteil und historischem Stammsitz der Grafen zu Solms, finden sich zahlreiche ältere Fachwerkhäuser mit teilweise jahrhundertealten, massiven Holztüren und komplizierten Kastenschlössern. In <strong>Oberbiel</strong> und <strong>Niederbiel</strong> dominieren solide Nachkriegs-Reihenhäuser und Mehrfamilienhäuser mit klassischen Profilzylindern. <strong>Albshausen</strong> wiederum bietet modernere Einfamilienhaussiedlungen mit aktuellen Mehrfachverriegelungen und Sicherheitsbeschlägen. Unsere Fachkräfte beherrschen all diese Varianten gleichermaßen souverän und vom behutsamen Öffnen einer antiken Langkammklinke bis zur Manipulation modernster elektronischer Zugangssysteme.</p>

<h3>Grube Fortuna, Kloster Altenberg & Sternwarte</h3>
<p>Solms ist keine gesichtslose Schlafstadt, sondern ein lebendiger Ort mit kulturellem Selbstbewusstsein. Das Besucherbergwerk <strong>Grube Fortuna</strong> zieht Familien und Geschichtsinteressierte aus der gesamten Region an. Das malerisch auf dem Michelsberg gelegene <strong>Kloster Altenberg</strong> bietet nicht nur einen atemberaubenden Blick über die Lahn, sondern beherbergt auch Konzerte und Veranstaltungen. In Burgsolms lädt die <strong>Sternwarte</strong> zu faszinierenden Himmelsbeobachtungen ein. Am Lahnufer erinnert in Niederbiel das <strong>Schweitzer-Kreuz</strong> und ein neugotisches gusseisernes Denkmal und an ein tragisches Fährunglück von 1881. Wer hier lebt, lebt bewusst und schätzt Qualität und auch bei der Wahl des Schlüsseldienstes.</p>

<h3>24/7 Notdienst und Auch nachts am Lahnufer</h3>
<p>Ein Schlüsselnotfall kennt keine Uhrzeit. Ob Sie nach einem späten Spaziergang entlang des Lahnuferwegs feststellen, dass Ihr Schlüssel fehlt, oder ob nachts im Gewerbegebiet ein Schloss blockiert: Unser <strong>Schlüsselnotdienst Solms</strong> ist 24 Stunden am Tag erreichbar, an 365 Tagen im Jahr. Wir kommen auch an Feiertagen, bei Schneefall oder in den frühen Morgenstunden und zuverlässig, diskret und ohne Wucherpreise.</p>

<h3>Festpreise ohne Wenn und Aber</h3>
<p>Für eine einfache zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Dazu kommt lediglich eine symbolische Anfahrtspauschale von 10 Euro, die für ganz Solms gilt und egal ob Burgsolms im Zentrum oder Oberndorf am Rand. Diese Transparenz garantieren wir Ihnen bereits am Telefon, bevor sich unser Techniker überhaupt auf den Weg macht. Keine überraschenden Aufschläge, keine erfundenen Materialkosten, keine Tricks. Solide Handwerkerleistung zum ehrlichen Preis.</p>
`,

        localTestimonials: [
            {
                name: "Thomas B.",
                quote: "In Burgsolms die Tür zugefallen, während das Abendessen auf dem Herd stand. Nach dem Anruf war der Monteur in genau 9 Minuten da. Tür auf, ohne einen einzigen Kratzer. 109 Euro gesamt, genau wie am Telefon gesagt. So muss das sein!",
                rating: 5
            },
            {
                name: "Ingrid M.",
                quote: "Habe den Schlüsseldienst für meine betagte Mutter in Oberbiel gerufen. Der junge Mann war so geduldig und freundlich, hat alles erklärt und einen neuen Sicherheitszylinder eingebaut. Perfekter Service.",
                rating: 5
            },
            {
                name: "Markus K.",
                quote: "Sonntagnacht in Albshausen ausgesperrt. Hatte Schlimmstes befürchtet bei den Preisen. Aber nein: Wochenendtarif transparent genannt, Monteur kam schnell, Tür innerhalb von einer Minute offen. Absolut fair. Kann ich jedem in Solms empfehlen.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Suchen Sie einen ehrlichen Schlüsseldienst in Solms? Wir helfen sofort in Burgsolms, Oberbiel, Niederbiel, Oberndorf & Albshausen und schonend, schnell und zum garantierten Festpreis. 24/7 erreichbar.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gilt der gleiche Preis für alle fünf Solmser Ortsteile?",
                answer: "Ja, absolut. Ob Burgsolms, Oberbiel, Niederbiel, Oberndorf oder Albshausen und die Anfahrtspauschale beträgt pauschal 10 Euro für ganz Solms. Keinerlei Aufschläge für entlegenere Ortsteile."
            },
            {
                question: "Ich habe eine alte, massive Holztür in Burgsolms. Können Sie die öffnen, ohne sie zu beschädigen?",
                answer: "Gerade bei historischen Türen legen wir allergrößten Wert auf Schonung. Unsere Techniker verfügen über Spezialtechnik für Kastenschlösser und ältere Schließmechanismen. In den allermeisten Fällen öffnen wir auch antike Türen komplett zerstörungsfrei."
            },
            {
                question: "Bieten Sie auch Schließanlagen-Beratung für Hausverwaltungen in Solms an?",
                answer: "Selbstverständlich. Wir beraten und installieren komplette Schließanlagen-Systeme für Mehrfamilienhäuser, Gewerbeobjekte und öffentliche Einrichtungen in Solms und inklusive Generalschlüssel-Konzepten und modernster Sicherheitstechnik."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-hermannstein", "schluesseldienst-braunfels", "schluesseldienst-asslar"]
    },
    {
        id: "lahnau",
        slug: "schluesseldienst-lahnau",
        name: "Lahnau",
        plz: "35633",
        coordinates: { latitude: 50.5786, longitude: 8.5731 },
        logistics: {
            drivingTimeMinutes: "5-10",
            distanceFromHQ: 7,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 10,
            travelCostText: "+ 10€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Lahnau Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Lahnau: Zerstörungsfreie Türöffnung ab 99€. In ca. 5-10 Min. in Waldgirmes, Dorlar & Atzbach. Faire Preise, 24/7 Notdienst. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Zwischen Wetzlar und Gießen ideal gelegen, erreichen unsere Techniker alle drei Lahnauer Ortsteile über die B49/Lahntalstrecke in sensationellen 5 bis 10 Minuten.",
        mainRoad: "B49 / L3020",
        distanceKm: 7,
        character: "Geschichtsträchtige Lahngemeinde zwischen Wetzlar und Gießen mit römischem Erbe und Naturschutzgebieten",
        populationApprox: "~8.300",
        landmark: "Römisches Forum Waldgirmes (Augustus-Ära) & Klosterkirche Dorlar",
        buildingTypes: "Überwiegend Einfamilienhäuser und Doppelhaushälften mit modernen Sicherheitszylindern, ergänzt durch ältere Siedlungshäuser und vereinzelte Mehrfamilienhäuser in den Ortskernen.",
        parkingInfo: "In allen drei Lahnauer Ortsteilen parken unsere Einsatzfahrzeuge direkt vor dem Gebäude und die suburban-ländliche Bebauung bietet stets ausreichend Platz.",
        heroVariant: "Schlüsseldienst für Lahnau und Waldgirmes, Dorlar & Atzbach in Rekordzeit.",
        fareInfo: "Lahnau ist quasi ein Heimspiel: Die Anfahrt beträgt minimalste 10 Euro und für alle drei Ortsteile Waldgirmes, Dorlar und Atzbach identisch.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Tür im Eigenheim",
                description: "In Lahnaus dichten Wohnsiedlungen passiert es täglich: Tür fällt zu, Schlüssel liegt drinnen. Unsere Techniker öffnen Ihre Haustür mit Präzisionswerkzeug in Sekunden und absolut spurlos und ohne Folgeschäden."
            },
            {
                icon: "shield-alert",
                title: "Schlüssel verloren beim Lahnradweg",
                description: "Nach einer Radtour auf dem Lahnradweg oder einem Spaziergang im Naturschutzgebiet Lahnauen den Schlüssel verloren? Wir öffnen und sichern Ihre Tür umgehend mit einem neuen Sicherheitszylinder."
            },
            {
                icon: "briefcase",
                title: "Pendler-Notfall zwischen Wetzlar & Gießen",
                description: "Als Pendler morgens in Hektik die Tür zugezogen? Wir sind in 5-10 Minuten da und lösen das Problem, bevor Sie den nächsten Bus oder Zug verpassen."
            }
        ],

        aboutText: `
<p>Eingebettet ins Lahntal zwischen den Oberzentren Wetzlar und Gießen, ist die Gemeinde <strong>Lahnau</strong> mit ihren rund 8.300 Einwohnern ein äußerst beliebter Wohnstandort. Die drei Ortsteile <strong>Waldgirmes, Dorlar und Atzbach</strong> verbinden ländliche Lebensqualität mit perfekter Verkehrsanbindung. Was Lahnau jedoch weit über die Region hinaus bekannt macht, ist eine archäologische Sensation: Das <strong>Römische Forum in Waldgirmes</strong> und der früheste Beleg für steinerne Stadtarchitektur in der Germania Magna aus der Zeit Kaiser Augustus', inklusive des spektakulären Fundes eines lebensgroßen bronzenen Pferdekopfes. Wenn in einer so geschichtsreichen Gemeinde die Haustür ins Schloss fällt, ist unser <strong>Schlüsseldienst Lahnau</strong> in Rekordzeit zur Stelle.</p>

<h3>5 bis 10 Minuten: Schneller geht es kaum</h3>
<p>Durch die optimale Lage direkt an der <strong>B49</strong> und die geringe Distanz von nur 7 Kilometern zu unserer Wetzlarer Basis gehört Lahnau zu unseren schnellsten Einsatzgebieten. In <strong>5 bis 10 Minuten</strong> stehen unsere Monteure vor Ihrer Tür und ob in Waldgirmes am Ortsrand, im historischen Kern von Dorlar oder in den Wohnstraßen von Atzbach. Diese Blitzreaktion ist besonders wertvoll, wenn Kinder allein im Haus sind, Essen auf dem Herd steht oder Sie im strömenden Regen draußen ausharren müssen.</p>

<h3>Römisches Forum, Klosterkirche & Lahnauen</h3>
<p>Lahnau ist kulturell und naturkundlich ein Juwel. In <strong>Waldgirmes</strong> dokumentiert das <strong>Römische Forum</strong> eine einzigartige Siedlung aus der Zeit um 4 v. Chr., die als frühester Beweis für römische Stadtplanung östlich des Rheins gilt. Das <strong>Heimatmuseum Waldgirmes</strong> im ehemaligen Schulhaus von 1840 ergänzt dieses Erbe mit Einblicken in regionale Handwerkskunst. In <strong>Dorlar</strong> zeugt die <strong>frühgotische Klosterkirche</strong> und errichtet nach 1218 als Teil des Prämonstratenserinnen-Klosters und von mittelalterlicher Baukunst. Und in <strong>Atzbach</strong> erstreckt sich das <strong>Naturschutzgebiet Lahnauen</strong> mit seinem berühmten Storchennest als wichtiges Rast- und Durchzugsgebiet für Wasservögel.</p>

<h3>Drei Ortsteile, ein Versprechen: Spurlos offen</h3>
<p>Die Bebauung in Lahnau ist typisch für eine suburbanisierte Lahntalgemeinde: <strong>Waldgirmes</strong> (ca. 3.300 Einwohner) und <strong>Atzbach</strong> (ca. 3.200 Einwohner) bieten vornehmlich Einfamilienhäuser und Doppelhaushälften mit modernen Schließsystemen. <strong>Dorlar</strong> (ca. 1.850 Einwohner) hat einen etwas älteren Gebäudebestand mit vereinzelten historischen Türen im Ortskern. Unser Versprechen gilt überall gleichermaßen: Bei zugefallenen Türen liegt unsere zerstörungsfreie Öffnungsrate bei nahezu allen. Kein Kratzer, kein beschädigter Zylinder, keine Folgekosten.</p>

<h3>24/7 Notdienst an 365 Tagen</h3>
<p>Die Pendlergemeinde Lahnau lebt im Takt von Wetzlar und Gießen. Viele Bewohner kommen erst spätabends nach Hause und und genau dann passieren die meisten Aussperrungen. Unser <strong>Schlüsselnotdienst Lahnau</strong> ist deshalb rund um die Uhr einsatzbereit, auch an Sonn- und Feiertagen, bei Hitze und Frost. Verlassen Sie sich auf uns.</p>

<h3>Festpreise für gute Nachbarschaft</h3>
<p>Für eine einfache zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt nach Lahnau kostet nur <strong>10 Euro</strong> und für alle drei Ortsteile identisch. Diese Preise nennen wir Ihnen am Telefon, bevor unser Monteur losfährt. Keine Tricks, keine versteckten Kosten. Ehrliches Handwerk aus der direkten Nachbarschaft.</p>
`,

        localTestimonials: [
            {
                name: "Sabine W.",
                quote: "In Waldgirmes morgens die Tür zugezogen, Kind war allein drinnen. Der Schlüsseldienst war in 6 Minuten da und hatte die Tür in Sekunden offen. Keine Beschädigung, 109 Euro gesamt. Ich war so erleichtert!",
                rating: 5
            },
            {
                name: "Michael T.",
                quote: "Alte Haustür in Dorlar, Schlüssel abgebrochen im Schloss. Der Monteur hat den Stumpf professionell extrahiert und einen neuen ABUS-Zylinder eingebaut. Super Arbeit, fairer Preis.",
                rating: 5
            },
            {
                name: "Karin H.",
                quote: "In Atzbach am Sonntagabend ausgesperrt. Schnelle Hilfe, freundlicher Techniker, saubere Arbeit. Der Wochenendtarif wurde vorab am Telefon transparent kommuniziert. Sehr empfehlenswert!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Schlüsseldienst für Lahnau gesucht? Wir öffnen in Waldgirmes, Dorlar und Atzbach fachgerecht, in 5-10 Minuten und zu garantierten Festpreisen. 24/7 erreichbar.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Warum sind Sie in Lahnau so schnell?",
                answer: "Mit nur 7 Kilometern Entfernung und direkter B49-Anbindung ist Lahnau eines unserer schnellsten Einsatzgebiete. In 5 bis 10 Minuten sind wir vor Ihrer Tür und egal ob Waldgirmes, Dorlar oder Atzbach."
            },
            {
                question: "Können Sie auch eine Haustür am historischen Ortskern von Dorlar öffnen?",
                answer: "Selbstverständlich. Unsere Techniker sind im Umgang mit älteren Türkonstruktionen und historischen Schlössern bestens geschult. Wir behandeln jede Tür mit größter Sorgfalt."
            },
            {
                question: "Gibt es einen Aufpreis für Einsätze nachts oder am Wochenende in Lahnau?",
                answer: "Ja, nachts und am Wochenende gelten angepasste Tarife (Nacht ab 119€, Wochenende ab 179€), die wir Ihnen selbstverständlich vorab am Telefon transparent mitteilen."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-dutenhofen", "schluesseldienst-giessen", "schluesseldienst-huettenberg"]
    },
    {
        id: "huettenberg",
        slug: "schluesseldienst-huettenberg",
        name: "Hüttenberg",
        plz: "35625",
        coordinates: { latitude: 50.4963, longitude: 8.5601 },
        logistics: {
            drivingTimeMinutes: "10-15",
            distanceFromHQ: 10,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Hüttenberg Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Hüttenberg: Türöffnung ab 99€. In 10-15 Min. in Rechtenbach, Hochelheim & allen Ortsteilen. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die L3360 südlich von Wetzlar erreichen unsere Monteure alle sechs Hüttenberger Ortsteile routiniert und zuverlässig in 10 bis 15 Minuten.",
        mainRoad: "L3360 / B49",
        distanceKm: 10,
        character: "Hessens Handkäse-Hauptstadt: Ländlich-idyllische Siedlungsgemeinde mit überraschend reicher Kulturgeschichte und dichter Wohnbesiedlung",
        populationApprox: "~10.500",
        landmark: "Goethehaus Volpertshausen (Heimatmuseum) & Gottfrieds Haus in Rechtenbach (1807)",
        buildingTypes: "Stark von Eigenheimen und gewachsenen Dorfgemeinschaften geprägt. Ältere Fachwerkhäuser in den Ortskernen, moderne Einfamilienhäuser in den Randlagen, vereinzelt Gewerbeobjekte entlang der Kleebach-Niederung.",
        parkingInfo: "In allen sechs Hüttenberger Ortsteilen bieten die ländlichen Straßen und Grundstücke ideale Parkmöglichkeiten direkt vor dem Einsatzort.",
        heroVariant: "Schlüsseldienst für Hüttenberg und die Handkäse-Gemeinde verdient ehrliches Handwerk.",
        fareInfo: "Hüttenberg liegt im mittleren Ring unseres Einsatzgebiets. Die Anfahrt beträgt faire 15 Euro und identisch für alle sechs Ortsteile.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Tür im Eigenheim",
                description: "In Hüttenbergs dichten Siedlungen mit ihren zahlreichen Einfamilienhäusern passiert es regelmäßig: Kurz zum Briefkasten, Tür fällt ins Schloss. Wir öffnen schnell und spurlos und Ihr Schloss bleibt intakt."
            },
            {
                icon: "shield-alert",
                title: "Schlüssel verloren bei Wanderung",
                description: "Nach einem Spaziergang zu den 2.500 Jahre alten Hügelgräbern bei Rechtenbach oder entlang des Kleebachs den Schlüssel verloren? Wir öffnen und sichern Ihre Tür mit neuem Zylinder."
            },
            {
                icon: "briefcase",
                title: "Gewerbe & Handwerksbetriebe",
                description: "Blockierte Bürotür oder defekte Schließanlage in einem der Hüttenberger Handwerksbetriebe oder Käsereien? Wir reagieren schnell und diskret und auch außerhalb der Geschäftszeiten."
            }
        ],

        aboutText: `
<p>Südlich von Wetzlar gelegen, ist die Gemeinde <strong>Hüttenberg</strong> mit ihren rund 10.500 Einwohnern weit über die Region hinaus als <strong>Hessens Handkäse-Hauptstadt</strong> bekannt und vier der landesweit sechs Handkäse-Produzenten haben hier ihren Sitz, darunter die berühmte Käserei Birkenstock mit 28 Sorten. Doch Hüttenberg ist weit mehr als Kulinarik: Sechs gewachsene Ortsteile und <strong>Hochelheim/Hörnsheim (Kernort), Rechtenbach, Weidenhausen, Volpertshausen, Reiskirchen und Vollnkirchen</strong> und bieten eine einzigartige Mischung aus ländlicher Idylle, historischen Schätzen und dichter Wohnbesiedlung. Wenn in dieser vertrauten Atmosphäre die Haustür ins Schloss fällt, ist unser <strong>Schlüsseldienst Hüttenberg</strong> in wenigen Minuten zur Stelle.</p>

<h3>L3360 direkt ins Herz von Hüttenberg</h3>
<p>Die <strong>L3360</strong> ist für unsere Einsatzfahrten nach Hüttenberg eine absolute Hausstrecke. Von der Wetzlarer Basis aus sind wir in <strong>10 bis 15 Minuten</strong> vor Ihrer Tür und ob im Verwaltungssitz Rechtenbach, in Hochelheim, im ländlichen Reiskirchen oder im kleinen Vollnkirchen. Diese Zuverlässigkeit ist für uns tägliche Routine: Wir kennen jede Abzweigung, jede Engstelle und jeden Schleichweg in der Gemeinde.</p>

<h3>Goethehaus, Gottfrieds Haus & uralte Hügelgräber</h3>
<p>Hüttenberg überrascht mit einer kulturellen Tiefe, die weit über den Handkäse hinausgeht. In <strong>Volpertshausen</strong> dient das <strong>Goethehaus</strong> als Heimatmuseum und erinnert an den berühmten Besuch des Dichters. <strong>Rechtenbach</strong> begeistert mit <strong>„Gottfrieds Haus"</strong>, einem sorgfältig renovierten Fachwerkhaus von 1807, das den typischen „Hessenmann" der regionalen Fachwerkbaukunst zeigt. In der Umgebung finden sich <strong>zweieinhalbtausend Jahre alte Hügelgräber</strong>, die von keltischer Besiedlung zeugen. In <strong>Hochelheim</strong> mahlen die historische Kunstmühle und Dorfmühle seit Generationen. Für unsere Techniker bedeutet diese architektonische Vielfalt: Wir treffen auf alles und von antiken Kastenschlössern an Fachwerktüren bis zu modernen Mehrfachverriegelungen in Neubauten.</p>

<h3>6 Ortsteile, eine Qualität</h3>
<p>Der <strong>Kernort Hüttenberg</strong> (Hochelheim/Hörnsheim) bildet das Zentrum mit seiner dichten Mischung aus Einfamilienhäusern und älteren Siedlungsbauten. <strong>Rechtenbach</strong>, wo auch die Gemeindeverwaltung ihren Sitz hat, ist der bevölkerungsreichste Ortsteil. <strong>Weidenhausen</strong> mit seiner alten evangelischen Kirche, das kulturell bedeutsame <strong>Volpertshausen</strong>, das beschauliche <strong>Reiskirchen</strong> und das ländliche <strong>Vollnkirchen</strong> komplettieren das Gemeindegebiet. Für alle sechs Ortsteile gilt: identische Anfahrtskosten, identische Reaktionszeit, identische handwerkliche Qualität.</p>

<h3>24/7 Notdienst an 365 Tagen</h3>
<p>Ob mitten in der Nacht in Rechtenbach, am frühen Sonntagmorgen in Hochelheim oder an einem Feiertag in Vollnkirchen: Unser <strong>Schlüsselnotdienst Hüttenberg</strong> operiert lückenlos, das ganze Jahr über. Wir lassen Sie niemals im Stich.</p>

<h3>Transparenz wie beim Handkäse: Was draufsteht, ist drin</h3>
<p>So wie der Hüttenberger Handkäse für Ehrlichkeit und handwerkliche Tradition steht, stehen wir für transparente Preise: Für eine zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt nach Hüttenberg kostet <strong>15 Euro</strong>. Das erfahren Sie am Telefon, bevor unser Monteur losfährt. Keine versteckten Kosten, keine Tricks, keine Wucherpreise.</p>
`,

        localTestimonials: [
            {
                name: "Thomas B.",
                quote: "In Rechtenbach abends ausgesperrt. Der Techniker war in 12 Minuten da und hatte die Tür in Sekunden offen und kein Kratzer, kein Schaden. 114 Euro total, genau wie am Telefon gesagt. So muss ein Schlüsseldienst sein!",
                rating: 5
            },
            {
                name: "Renate M.",
                quote: "Volpertshausen, Sonntagmorgen, Schlüssel vergessen. Der Notdienst war freundlich, schnell und hat ehrliche Preise gemacht. Hat sogar noch den klemmenden Zylinder getauscht. Absolute Empfehlung für ganz Hüttenberg.",
                rating: 5
            },
            {
                name: "Frank S.",
                quote: "In Hochelheim altes Einsteckschloss kaputtgegangen. Der Monteur hat professionell einen neuen BKS-Zylinder eingebaut und alles sauber hinterlassen. Fairer Preis, super Arbeit.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Türöffnung in Hüttenberg? Ihr seriöser Schlüsselnotdienst für alle 6 Ortsteile und von Rechtenbach bis Vollnkirchen. Garantiert schnelle Hilfe, 24/7 erreichbar, Festpreise.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Erreichen Sie auch die kleinen Ortsteile wie Reiskirchen oder Vollnkirchen?",
                answer: "Selbstverständlich. Die 15 Euro Anfahrt gelten pauschal für alle sechs Hüttenberger Ortsteile und von Rechtenbach über Hochelheim bis ins ländliche Vollnkirchen. Keine Sonderzuschläge."
            },
            {
                question: "Mein Schloss ist sehr alt und können Sie das öffnen ohne es zu zerstören?",
                answer: "Ja, unsere Techniker sind speziell im Umgang mit älteren Schließmechanismen geschult. Ob Kastenschloss, Buntbartschlüssel oder historischer Beschlag und wir behandeln jedes Schloss mit der gebotenen Sorgfalt."
            },
            {
                question: "Bieten Sie auch Sicherheitsberatung nach einem Einbruch in Hüttenberg?",
                answer: "Ja, nach jedem Einsatz beraten wir kostenlos zur Verbesserung Ihrer Türsicherheit. Wir installieren auf Wunsch Sicherheitszylinder (ABUS, BKS, DOM), Schutzbeschläge und Zusatzschlösser direkt vor Ort."
            }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-schoeffengrund", "schluesseldienst-giessen"]
    },
    {
        id: "hohenahr",
        slug: "schluesseldienst-hohenahr",
        name: "Hohenahr",
        plz: "35644",
        coordinates: { latitude: 50.6356, longitude: 8.5194 },
        logistics: {
            drivingTimeMinutes: "8-12",
            distanceFromHQ: 10,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Hohenahr Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Hohenahr: Zerstörungsfreie Türöffnung ab 99€. In ca. 8-12 Min. in Erda, Hohensolms, Mudersbach & allen 6 Ortsteilen. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die L3053 durch das bewaldete Gladenbacher Bergland erreichen unsere Monteure alle sechs Ortsteile von Hohenahr in 8 bis 12 Minuten und trotz der hügeligen Topografie.",
        mainRoad: "L3053",
        distanceKm: 10,
        character: "Ländliche Berggemeinde im Gladenbacher Bergland mit mittelalterlichen Burgruinen, Aussichtstürmen und dem Aartalsee als Naherholungsgebiet",
        populationApprox: "~4.900",
        landmark: "Burg Hohensolms (um 1350) & Altenberg-Aussichtsturm (442m)",
        buildingTypes: "Überwiegend Eigenheime und ländliche Hofreiten in den Dorfkernen, ergänzt durch neuere Einfamilienhausbebauung in den Randlagen. Vereinzelt historische Fachwerkhäuser und landwirtschaftliche Gebäude.",
        parkingInfo: "In der ländlichen Gemeinde Hohenahr finden unsere Einsatzwagen überall direkte Parkmöglichkeiten und sogar in den kleinsten Ortsteilen wie Ahrdt.",
        heroVariant: "Schlüsseldienst für Hohenahr und von Burg Hohensolms bis zum Aartalsee.",
        fareInfo: "Hohenahr liegt im mittleren Ring unseres Einsatzgebiets. Die Anfahrt beträgt faire 15 Euro und identisch für alle sechs Ortsteile von Erda bis Ahrdt.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Tür im Eigenheim",
                description: "In den ruhigen Wohnsiedlungen von Erda oder Altenkirchen die Tür zugezogen? Kein Problem: Unsere Techniker öffnen Ihr Schloss spurlos und professionell und auch in den abgelegensten Ortsteilen."
            },
            {
                icon: "shield-alert",
                title: "Schlüssel verloren bei Wanderung",
                description: "Nach einer Wanderung auf der Zweiburgentour, am Aartalsee oder auf dem Altenberg den Schlüssel verloren? Wir öffnen Ihre Tür und sichern sie umgehend mit einem neuen Sicherheitszylinder."
            },
            {
                icon: "briefcase",
                title: "Wintersport am Schlossberg",
                description: "Nach einem Tag am Ski- und Rodellift am Schlossberg festgestellt, dass der Hausschlüssel fehlt? Unser Notdienst ist auch bei Schnee und Eis schnell zur Stelle."
            }
        ],

        aboutText: `
<p>Im Herzen des <strong>Gladenbacher Berglands</strong>, auf Höhen zwischen 260 und 442 Metern, erstreckt sich die Gemeinde <strong>Hohenahr</strong> mit ihren rund 4.900 Einwohnern über eine waldreiche Landschaft, die zu 42 Prozent aus Mischwald besteht. Sechs eigenständige Ortsteile und <strong>Erda, Hohensolms, Altenkirchen, Mudersbach, Groß-Altenstädten und Ahrdt</strong> und bilden ein weitläufiges Gemeindegebiet im <strong>Naturpark Lahn-Dill-Bergland</strong>. Die Abgeschiedenheit und Naturverbundenheit dieser Gemeinde macht sie zum idealen Wohnort für Ruhesuchende und doch wenn der Schlüssel verloren geht oder die Tür ins Schloss fällt, braucht man einen <strong>Schlüsseldienst Hohenahr</strong>, der schnell und zuverlässig kommt.</p>

<h3>8 bis 12 Minuten trotz Bergland</h3>
<p>Trotz der hügeligen Topografie erreichen unsere Monteure über die <strong>L3053</strong> alle Hohenahrer Ortsteile in verlässlichen <strong>8 bis 12 Minuten</strong>. Unsere Disponenten kennen die Strecke durch das Bergland so gut, dass wir auch bei Schneeglätte oder Nebel zuverlässig vor Ihrer Tür stehen. <strong>Erda</strong>, der Verwaltungssitz und größte Ortsteil mit rund 2.050 Einwohnern, ist besonders schnell erreichbar.</p>

<h3>Burg Hohensolms & Altenberg-Aussichtsturm</h3>
<p>Geschichte ist in Hohenahr allgegenwärtig. Die <strong>Burg Hohensolms</strong> (Neu-Hohensolms), eine um 1350 erbaute Höhenburg auf dem Ramsberg in 435 Metern Höhe, thront majestätisch über dem gleichnamigen Ortsteil. Sie ersetzte die 1349 zerstörte Burg Alt-Hohensolms und wurde im 16. Jahrhundert zu Wohnzwecken ausgebaut. Auf dem <strong>Altenberg</strong> (442,2 m), dem höchsten Punkt der Gemeinde, bietet ein Aussichtsturm spektakuläre Panoramablicke über die Wetterau, den Hochtaunus, das Gießener Becken und den Hessischen Westerwald. In <strong>Erda</strong> ist die mittelalterliche <strong>Wehrkirche</strong>, dem Heiligen Nikolaus geweiht, ein architektonisches Zeugnis der Vergangenheit. <strong>Altenkirchen</strong> war historisch ein bedeutender Gerichtsort mit „Centgericht". Für unsere Techniker bedeutet diese Vielfalt: Wir treffen auf historische Schlösser an Burgmauern ebenso wie auf moderne Sicherheitstüren in Neubauten.</p>

<h3>Aartalsee & Naturparadies</h3>
<p>Der <strong>Aartalsee</strong>, der direkt an <strong>Mudersbach</strong> grenzt, ist eines der beliebtesten Naherholungsgebiete der Region und ideal zum Wandern, Radfahren und Verweilen. Die <strong>Zweiburgentour</strong> ab Hohensolms führt Wanderer durch die malerische Landschaft. Der gesamte Naturpark Lahn-Dill-Bergland mit seinen markierten Wanderwegen, der Minigolfanlage, dem Freischwimmbad und sogar einem <strong>Ski- und Rodellift am Schlossberg</strong> macht Hohenahr zum Ganzjahres-Freizeitziel.</p>

<h3>6 Ortsteile und vom Verwaltungssitz bis zum 238-Einwohner-Dorf</h3>
<p>Die Bandbreite der Ortsteile ist bemerkenswert: <strong>Erda</strong> mit ca. 2.050 und <strong>Altenkirchen</strong> mit ca. 775 Einwohnern sind die größten Zentren. <strong>Hohensolms</strong> (760 Einwohner) besticht durch seine Burganlage. <strong>Groß-Altenstädten</strong> (ca. 555), <strong>Mudersbach</strong> (ca. 515) und das winzige <strong>Ahrdt</strong> (ca. 240 Einwohner) vervollständigen das Gemeindegebiet. Für alle gilt: gleiche Anfahrtskosten, gleiche Qualität, gleiche Zuverlässigkeit.</p>

<h3>24/7 Notdienst an 365 Tagen</h3>
<p>Gerade in einer so ländlichen Gemeinde ist die Erreichbarkeit eines zuverlässigen Notdienstes Gold wert. Unser <strong>Schlüsselnotdienst Hohenahr</strong> steht Ihnen rund um die Uhr zur Verfügung und auch nachts um 2 Uhr im verschneiten Ahrdt, am Sonntagmorgen in Mudersbach oder an einem Feiertag in Erda.</p>

<h3>Ehrliche Preise für ehrliche Bergland-Nachbarn</h3>
<p>Für eine einfache zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt nach Hohenahr kostet <strong>15 Euro</strong> und pauschal für alle sechs Ortsteile. Sie erfahren den Gesamtpreis am Telefon, bevor unser Monteur losfährt. In einer Gemeinschaft, die auf Vertrauen und Nachbarschaftshilfe setzt, sind wir der Schlüsseldienst, der dieses Vertrauen verdient.</p>
`,

        localTestimonials: [
            {
                name: "Wolfgang K.",
                quote: "In Erda abends die Tür zugezogen. Der Monteur war nach 9 Minuten da und hatte die Tür blitzschnell offen und kein einziger Kratzer. 114 Euro für alles, wie am Telefon gesagt. Super Service hier oben im Bergland!",
                rating: 5
            },
            {
                name: "Ingrid M.",
                quote: "Hohensolms, Sonntagabend, Schlüssel im Auto vergessen, Haustür zu. Der Techniker war trotz der Bergstrecke erstaunlich schnell und hat beides gelöst. Sehr professionell und faire Preise.",
                rating: 5
            },
            {
                name: "Bernd F.",
                quote: "Nach einer Wanderung am Aartalsee den Haustürschlüssel in Mudersbach verloren. Zylindertausch war nötig und wurde sauber durchgeführt. ABUS-Qualität zum vernünftigen Preis. Klare Empfehlung!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Schlüsseldienst für die Berggemeinde Hohenahr: Von Erda über Hohensolms bis Mudersbach und schnelle Hilfe, faire Preise, 24/7 Notdienst. Vertrauen Sie dem Fachbetrieb Ihrer Region.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Kommen Sie auch nach Ahrdt, dem kleinsten Ortsteil von Hohenahr?",
                answer: "Selbstverständlich. Die 15 Euro Anfahrt gelten pauschal für alle sechs Hohenahrer Ortsteile und von Erda über Hohensolms bis ins kleine Ahrdt. Keine Bergzuschläge, keine versteckten Kosten."
            },
            {
                question: "Können Sie auch historische Schlösser an älteren Gebäuden in Hohensolms öffnen?",
                answer: "Ja, unsere Techniker sind im Umgang mit historischen Schlössern und Beschlägen bestens geschult. Ob antikes Kastenschloss oder moderner Profilzylinder und wir behandeln jedes Schloss mit maximaler Sorgfalt."
            },
            {
                question: "Schaffen Sie die Anfahrt auch bei Schnee und Eis im Winter?",
                answer: "Absolut. Unsere Einsatzfahrzeuge sind ganzjährig mit Winterreifen ausgestattet und unsere Monteure kennen die Bergstraßen rund um Hohenahr bei jeder Witterung. Wir kommen zuverlässig, auch bei Schneefall."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-naunheim", "schluesseldienst-wetzlar-muenchholzhausen", "schluesseldienst-asslar"]
    }
];
