import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

export const ring3LocationsB: LocationData[] = [
    // --- RING 3 (10-20 km) Teil 2 ---
    {
        id: "biebertal",
        slug: "schluesseldienst-biebertal",
        name: "Biebertal",
        plz: "35444",
        coordinates: { latitude: 50.6173, longitude: 8.6146 },
        logistics: {
            drivingTimeMinutes: "12-15",
            distanceFromHQ: 13,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Biebertal — Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Biebertal: Zerstörungsfreie Türöffnung ab 99€. In ca. 12-15 Min. in Rodheim-Bieber, Fellingshausen, Vetzberg & allen 6 Ortsteilen. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die L3047 am Fuße des Dünsbergs erreichen unsere Monteure alle sechs Biebertaler Ortsteile in zuverlässigen 12 bis 15 Minuten.",
        mainRoad: "L3047",
        distanceKm: 13,
        character: "Kelten, Kultur und Natur: Großgemeinde am Fuße des Dünsbergs mit keltischen Ringwallanlagen, historischen Parks und dem Gleiberger Land",
        populationApprox: "~10.000",
        landmark: "Dünsberg (497m) mit keltischen Ringwallanlagen & Burgruine Vetzberg",
        buildingTypes: "Vielfältige Mischung aus idyllischen Hofanlagen, Einfamilienhäusern, Fachwerkgebäuden und Mehrparteienhäusern. Historische Bausubstanz besonders in Vetzberg und Rodheim-Bieber.",
        parkingInfo: "In allen Biebertaler Ortsteilen parken unsere Einsatzfahrzeuge direkt vor dem Gebäude und die ländlich-suburban geprägte Gemeinde bietet überall ausreichend Platz.",
        heroVariant: "Schlüsseldienst für Biebertal und vom Keltenberg bis zum Gleiberger Land.",
        fareInfo: "Biebertal liegt im mittleren Ring unseres Einsatzgebiets. Die Anfahrt beträgt faire 15 Euro und identisch für alle sechs Ortsteile.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Tür im Eigenheim",
                description: "In Rodheim-Bieber oder Fellingshausen die Tür zugezogen? Das passiert im Biebertaler Alltag regelmäßig. Wir öffnen spurlos, schnell und zum garantierten Festpreis."
            },
            {
                icon: "shield-alert",
                title: "Schlüssel verloren auf dem Dünsberg",
                description: "Nach einer Wanderung auf dem Kelten- und Römerpfad oder am Celtic-Art-Weg den Schlüssel verloren? Wir öffnen Ihre Tür und sichern sie umgehend mit einem neuen Sicherheitszylinder."
            },
            {
                icon: "briefcase",
                title: "Historische Gebäude & Hofanlagen",
                description: "Problem mit dem Schloss an einer historischen Hofreite oder am alten Stall? Unsere Techniker kennen antike wie moderne Schließsysteme und arbeiten stets beschädigungsfrei."
            }
        ],

        aboutText: `
<p>Eingebettet in die reizvolle mittelhessische Landschaft am Fuße des <strong>Dünsbergs</strong> (497 m) liegt die Gemeinde <strong>Biebertal</strong> mit ihren rund 10.000 Einwohnern im Gleiberger Land. Sechs Ortsteile und <strong>Rodheim-Bieber, Fellingshausen, Krumbach, Königsberg, Frankenbach und Vetzberg</strong> und bilden eine Gemeinde, die durch ihre einzigartige Verbindung von Keltengeschichte, Naturerlebnis und ländlichem Wohnkomfort besticht. Wenn in dieser idyllischen Umgebung die Haustür ins Schloss fällt, ist unser <strong>Schlüsseldienst Biebertal</strong> schnell zur Stelle.</p>

<h3>12 bis 15 Minuten über die L3047</h3>
<p>Durch unsere zentrale Verortung im Nachbargebiet Wetzlar benötigen unsere Monteure über die <strong>L3047</strong> in der Regel lediglich <strong>12 bis 15 Minuten</strong> direkt an Ihre Tür. Ob im größten Ortsteil <strong>Rodheim-Bieber</strong> (ca. 5.150 Einwohner), in <strong>Fellingshausen</strong> am Dünsbergfuß, im beschaulichen <strong>Krumbach</strong> oder auf der Höhe von <strong>Königsberg</strong> und wir kennen jeden Weg und jede Abzweigung.</p>

<h3>Dünsberg, Keltenwelten & Gail'scher Park</h3>
<p>Biebertal ist ein kulturelles Juwel. Der <strong>Dünsberg</strong> mit seinen <strong>keltischen Ringwallanlagen</strong> und eine der letzten keltischen Siedlungsstätten nördlich des Mains und thront majestätisch über der Gemeinde. Der <strong>Dünsbergturm</strong> bietet spektakuläre Panoramablicke. Am Krumbacher Kreuz wurde ein <strong>Keltengehöft rekonstruiert</strong> mit Museum und Besucherinformationszentrum. Premium-Wanderwege wie der <strong>„Kelten- und Römerpfad"</strong> und der <strong>„Celtic-Art-Weg"</strong> locken Wanderer aus der gesamten Region. In <strong>Rodheim-Bieber</strong> begeistert der <strong>Gail'sche Park</strong> und ein englischer Landschaftspark mit über hundert Gehölzarten und und das <strong>Bauernhausmuseum Hof Haina</strong> gibt Einblicke in die bäuerliche Kultur Mittelhessens. Die malerische <strong>Burgruine Vetzberg</strong> rundet das kulturelle Angebot ab.</p>

<h3>6 Ortsteile, ein Versprechen</h3>
<p><strong>Rodheim-Bieber</strong> als größter Ortsteil und Verwaltungssitz bildet das Zentrum der Gemeinde mit dem <strong>Heimatmuseum</strong> im historischen Rathaus von 1892. <strong>Fellingshausen, Krumbach, Königsberg, Frankenbach</strong> und <strong>Vetzberg</strong> vervollständigen das weitläufige Gemeindegebiet. Für alle sechs Ortsteile gilt: identische Anfahrtskosten, identische Reaktionszeit, identische handwerkliche Qualität.</p>

<h3>24/7 Notdienst an 365 Tagen</h3>
<p>Ob nach einer Abendwanderung auf dem Dünsberg, am Sonntagmorgen in Frankenbach oder mitten in der Nacht in Vetzberg: Unser <strong>Schlüsselnotdienst Biebertal</strong> ist rund um die Uhr einsatzbereit. Wir lassen Sie niemals draußen stehen.</p>

<h3>Transparent wie das Gleiberger Land</h3>
<p>Für eine zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt nach Biebertal kostet <strong>15 Euro</strong> und pauschal für alle sechs Ortsteile. Sie erfahren den Gesamtpreis am Telefon, bevor unser Monteur losfährt. Ehrliches Handwerk für ehrliche Nachbarn im Gleiberger Land.</p>
`,

        localTestimonials: [
            {
                name: "Petra G.",
                quote: "In Rodheim-Bieber samstags ausgesperrt. Der Schlüsseldienst war in 13 Minuten da und hatte die Tür blitzschnell offen. Kein Kratzer, fairer Preis. Endlich ein seriöser Anbieter in der Region!",
                rating: 5
            },
            {
                name: "Hans-Jürgen M.",
                quote: "Altes Schloss in Vetzberg, Schlüssel abgebrochen. Der Techniker hat den Stumpf professionell extrahiert und einen neuen ABUS-Zylinder eingesetzt. Saubere Arbeit zu fairen Konditionen.",
                rating: 5
            },
            {
                name: "Monika K.",
                quote: "Nach einer Wanderung am Dünsberg den Schlüssel verloren. Der Notdienst hat in Fellingshausen schnell reagiert, Zylindertausch war nötig und wurde transparent kommuniziert und fair abgerechnet.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Türöffnung in Biebertal? Unsere regionalen Techniker öffnen in Rodheim-Bieber, Fellingshausen und allen 6 Ortsteilen und blitzschnell, spurlos, zu 100% transparenten Festpreisen.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Erreichen Sie auch höher gelegene Ortsteile wie Königsberg?",
                answer: "Selbstverständlich. Die 15 Euro Anfahrt gelten pauschal für alle sechs Biebertaler Ortsteile und von Rodheim-Bieber über Fellingshausen bis hinauf nach Königsberg. Keine Höhenzuschläge."
            },
            {
                question: "Können Sie historische Schlösser in den alten Hofanlagen öffnen?",
                answer: "Ja, unsere Techniker sind im Umgang mit antiken Kastenschlössern und historischen Beschlägen bestens geschult. Ob Fachwerktür oder moderne Sicherheitstür und wir arbeiten stets materialschonend."
            },
            {
                question: "Bieten Sie auch Einbruchschadensanierung in Biebertal an?",
                answer: "Ja, nach Einbruchsversuchen bauen wir beschädigte Schlösser aus und installieren aufbruchsichere Sicherheitszylinder und Schutzbeschläge und direkt aus unserem Einsatzfahrzeug."
            }
        ],
        neighbors: ["schluesseldienst-giessen", "schluesseldienst-lahnau", "schluesseldienst-hohenahr"]
    },
    {
        id: "leun",
        slug: "schluesseldienst-leun",
        name: "Leun",
        plz: "35638",
        coordinates: { latitude: 50.5540, longitude: 8.3546 },
        logistics: {
            drivingTimeMinutes: "12-15",
            distanceFromHQ: 14,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Leun — Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Leun: Zerstörungsfreie Türöffnung ab 99€. In ca. 12-15 Min. in Biskirchen, Stockhausen, Bissenberg & Kernstadt. Faire Preise. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die B49 parallel zur Lahn erreichen unsere Monteure Leun und seine vier Ortsteile schnell und zuverlässig. Die Lahntalbahn-Strecke begleitend, ist das gesamte Stadtgebiet in 12 bis 15 Minuten erreichbar.",
        mainRoad: "B49 (Lahntalstraße)",
        distanceKm: 14,
        character: "Charmante Fachwerkstadt im Lahntal mit historischem Ortskern und ländlichen Ausläufern",
        populationApprox: "~5.700",
        landmark: "Historisches Erkerhaus & Evangelische Kirche mit gotischem Westturm",
        buildingTypes: "Gut erhaltene Fachwerkhäuser aus dem 17. Jahrhundert in der Limburger Straße, solide Nachkriegs-Einfamilienhäuser in den Randlagen, ländliche Eigenheime in Stockhausen und Bissenberg sowie vereinzelte Gewerbebauten.",
        parkingInfo: "In allen vier Leuner Ortsteilen und im historischen Kern parken unsere Einsatzwagen problemlos und unmittelbar am Einsatzort und kurze Wege zum Werkzeugkoffer garantiert.",
        heroVariant: "Schlüsseldienst für Leun und von der Altstadt bis Biskirchen & Stockhausen.",
        fareInfo: "Leun liegt im mittleren Ring unseres Einsatzgebiets. Die Anfahrt beträgt faire 15 Euro und identisch für alle vier Ortsteile von Biskirchen bis Stockhausen.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Haustür in der Altstadt",
                description: "Die schwere Holztür Ihres Fachwerkhauses in der Limburger Straße ist ins Schloss gefallen? Unsere Spezialisten öffnen historische Kastenschlösser und moderne Profilzylinder gleichermaßen behutsam und ohne Kratzer am wertvollen Rahmen."
            },
            {
                icon: "shield-alert",
                title: "Schlüssel verloren beim Lahnradweg",
                description: "Nach einer Radtour auf dem Lahnradweg oder einer Wanderung zur Dianaburg den Schlüsselbund vermisst? Wir kommen schnell, öffnen Ihre Tür und tauschen bei Bedarf den Zylinder sofort und damit kein Unbefugter Zutritt hat."
            },
            {
                icon: "briefcase",
                title: "Bahnhof Stockhausen & Pendler",
                description: "Als Pendler am Bahnhof Stockhausen festgestellt, dass der Hausschlüssel fehlt? Kein Problem: Unser Techniker ist noch vor Ihrem nächsten Zug bei Ihnen und löst das Problem diskret und professionell."
            }
        ],

        aboutText: `
<p>An der historischen Lahntalbahn zwischen Wetzlar und Weilburg gelegen, verströmt die <strong>Stadt Leun</strong> mit ihren rund 5.700 Einwohnern den unverwechselbaren Charme einer hessischen Fachwerkkleinstadt. Vier eigenständige Stadtteile und <strong>Biskirchen, Bissenberg, Stockhausen</strong> und die <strong>Kernstadt Leun</strong> (inklusive Lahnbahnhof) und bilden zusammen ein Gemeinwesen, das durch seinen liebevoll erhaltenen historischen Ortskern, die unmittelbare Nähe zur Lahn und eine aktive Vereinslandschaft besticht. Wenn in einer solch Stille ausstrahlenden Gemeinde plötzlich die Haustür ins Schloss fällt oder ein veralteter Zylinder den Geist aufgibt, brauchen die Bewohner einen <strong>Schlüsseldienst Leun</strong>, der genauso zuverlässig und ehrlich ist wie die Stadt selbst.</p>

<h3>Durch das Lahntal in 12 Minuten bei Ihnen</h3>
<p>Die <strong>B49</strong>, die sich als Lebensader parallel zur Lahn durchs Tal schlängelt, ist für unsere Einsatzfahrten die perfekte Verbindung. Von unserer Wetzlarer Basis aus erreichen wir über diese Strecke sowohl die Leuner Kernstadt als auch die etwas abgelegeneren Ortsteile Stockhausen und Bissenberg in verlässlichen <strong>12 bis 15 Minuten</strong>. Diese Schnelligkeit ist kein leeres Versprechen, sondern tägliche Praxis: Wir kennen jeden Kreisverkehr, jede Ampelphase und jede Abkürzung im Lahntal. Wenn Sie frierend vor Ihrer verschlossenen Haustür stehen, zählt jede einzelne Minute.</p>

<h3>Fachwerk, Erkerhaus & historische Schlösser</h3>
<p>Was Leun architektonisch so besonders macht, ist der bemerkenswert gut erhaltene <strong>historische Stadtkern</strong>. Die <strong>Limburger Straße</strong> mit ihren malerischen Fachwerkhäusern aus dem 17. Jahrhundert, das stadtbekannte <strong>Erkerhaus</strong> als Wahrzeichen und das barocke Hofportal des ehemaligen Junkerhofs zeugen von jahrhundertelanger Bautradition. Für unsere Techniker bedeutet das: Wir treffen hier auf eine enorme Bandbreite an Schlössern und Türkonstruktionen und von antiken Kastenschlössern an schweren Eichenholztüren bis hin zu modernen Mehrfachverriegelungen in neueren Siedlungen am Stadtrand. Unser Versprechen bleibt dabei immer dasselbe: maximale Schonung, minimaler Eingriff. Bei zugefallenen Türen liegt unsere zerstörungsfreie Öffnungsrate bei über 99 Prozent.</p>

<h3>Biskirchen, Stockhausen & Bissenberg: Jeder Ortsteil gleich schnell</h3>
<p>In <strong>Biskirchen</strong>, dem zweitgrößten Stadtteil mit gut 1.500 Einwohnern, finden sich neben der sehenswerten Kirche auch zahlreiche gut erhaltene historische Höfe wie „Heebs Hof" mit typischem Fachwerk aus dem 19. Jahrhundert. <strong>Stockhausen</strong> ist durch den <strong>Bahnhof an der Lahntalbahn</strong> ein beliebter Ausgangspunkt für Wanderungen in den Hessischen Westerwald und und genau dort, wo Outdoor-Enthusiasten unterwegs sind, gehen gelegentlich Schlüssel verloren. Das ländliche <strong>Bissenberg</strong> mit seinen rund 730 Einwohnern zeichnet sich durch Eigenheime inmitten grüner Natur aus. Für alle vier Ortsteile gilt: identische Anfahrtskosten, identische Reaktionszeit, identische Qualität.</p>

<h3>Evangelische Kirche, Stadtmuseum & Dianaburg</h3>
<p>Die <strong>Evangelische Kirche</strong> mit ihrem gotischen Westturm aus dem 14. Jahrhundert, der wertvollen Bürgy-Orgel und dem mittelalterlichen Kirchenschiff ist das spirituelle Herz der Stadt. Das <strong>Stadtmuseum</strong> im ehemaligen Rathaus von 1818 bewahrt die lokale Geschichte, und die <strong>Dianaburg</strong> und ein ehemaliges Jagdschloss nahe dem Kesselberg und lockt Wanderer aus der gesamten Region. In einer Gemeinde, die ihre Geschichte so sorgfältig pflegt, passen wir als traditionsbewusster, ehrlicher Handwerksbetrieb perfekt hinein.</p>

<h3>24/7 Notdienst im gesamten Stadtgebiet</h3>
<p>Ob mitten in der Nacht im Fachwerkhaus der Altstadt, am frühen Morgen vor dem Pendlerzug in Stockhausen oder an einem Feiertag in Biskirchen: Unser <strong>Schlüsselnotdienst Leun</strong> operiert lückenlos an 365 Tagen im Jahr. Wir lassen Sie niemals im Stich und auch nicht bei Schneefall, Starkregen oder in den abgelegensten Ecken von Bissenberg.</p>

<h3>Transparente Preise für die gesamte Stadt</h3>
<p>Unsere Kalkulation ist so durchsichtig wie das Lahnwasser an einem Sommertag: Für eine einfache zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt nach Leun (alle Ortsteile eingeschlossen) kostet faire <strong>15 Euro</strong>. Das erfahren Sie am Telefon, bevor sich unser Monteur überhaupt auf den Weg macht. Keine versteckten Zuschläge, keine erfundenen Materialkosten, keine bösen Überraschungen auf der Rechnung.</p>
`,

        localTestimonials: [
            {
                name: "Jürgen H.",
                quote: "In der Leuner Altstadt ausgesperrt, direkt beim Erkerhaus. Der Monteur kam in 13 Minuten und hatte die uralte Holztür in 30 Sekunden offen und ohne einen einzigen Kratzer. 114 Euro insgesamt, alles sauber auf der Rechnung. Top!",
                rating: 5
            },
            {
                name: "Claudia R.",
                quote: "Wir wohnen in Biskirchen und hatten nachts einen Schlüsselnotfall. Der Techniker war extrem freundlich, ruhig und professionell. Hat den blockierten Zylinder ausgetauscht und alles erklärt. Preis war absolut fair.",
                rating: 5
            },
            {
                name: "Andreas P.",
                quote: "Nach einer Wanderung bei der Dianaburg den Autoschlüssel in Stockhausen verloren. Der Schlüsseldienst kam schnell und hat nicht nur die Haustür, sondern auch wertvolle Tipps zur Sicherheit gegeben. Sehr empfehlenswert für ganz Leun.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Von Biskirchen über Stockhausen bis zur historischen Altstadt: Unser regionaler Schlüsselnotdienst öffnet in ganz Leun jede Tür zu fairen Festpreisen. Rund um die Uhr, 365 Tage im Jahr.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gilt die Anfahrtspauschale von 15€ auch für entlegene Ortsteile wie Bissenberg?",
                answer: "Ja, absolut. Die 15 Euro Anfahrt gelten pauschal für das gesamte Stadtgebiet Leun und von der Kernstadt über Biskirchen und Stockhausen bis nach Bissenberg. Keine versteckten Aufschläge."
            },
            {
                question: "Können Sie auch antike Schlösser an Fachwerkhäusern in der Leuner Altstadt öffnen?",
                answer: "Definitiv. Unsere Techniker sind speziell im Umgang mit historischen Kastenschlössern, Buntbartschlüsseln und antiken Schließmechanismen geschult. Wir behandeln jede historische Tür mit der gebotenen Sorgfalt."
            },
            {
                question: "Bieten Sie Sicherheitsberatung nach einem Einbruchsversuch in Leun an?",
                answer: "Ja, nach jedem Einsatz beraten wir Sie gerne kostenlos zur Verbesserung Ihrer Türsicherheit. Wir empfehlen und installieren auf Wunsch Sicherheitszylinder, Schutzbeschläge und Zusatzschlösser namhafter Hersteller."
            }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-braunfels", "schluesseldienst-asslar"]
    },
    {
        id: "waldsolms",
        slug: "schluesseldienst-waldsolms",
        name: "Waldsolms",
        plz: "35647",
        coordinates: { latitude: 50.4481, longitude: 8.4474 },
        logistics: {
            drivingTimeMinutes: "15-18",
            distanceFromHQ: 15,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Waldsolms — Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Waldsolms: Türöffnung ab 99€ in Brandoberndorf, Griedelbach & allen 6 Ortsteilen. Lokaler Fachbetrieb, 15-18 Min. Anfahrt. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die L3054 Richtung Taunus erreichen unsere Monteure alle sechs Waldsolmser Ortsteile in zuverlässigen 15 bis 18 Minuten.",
        mainRoad: "L3054",
        distanceKm: 15,
        character: "Idyllische Taunusgemeinde mit 5-Sterne-Golfclub, Panoramawanderweg und Koptisch-Orthodoxem Zentrum und ländliche Ruhe auf höchstem Niveau",
        populationApprox: "~4.660",
        landmark: "Attighof Golf- und Countryclub, Freibad Taunusperle & St. Antonius-Kloster",
        buildingTypes: "Überwiegend Eigenheime und gedämmte Sicherheitstüren in Neubaugebieten. Ältere Hofanlagen in Griedelbach und Kröffelbach, historische Bausubstanz rund um den Brandoberndorfer Lindenplatz.",
        parkingInfo: "Die weitläufig verstreuten Ortsteile bieten überall großzügige Parkmöglichkeiten direkt vor den Grundstücken und ländlicher geht es kaum.",
        heroVariant: "Schlüsseldienst für Waldsolms und von der Taunusperle bis zum Golfclub Attighof.",
        fareInfo: "Waldsolms liegt im erweiterten Nahbereich. Die Anfahrt beträgt faire 15 Euro und identisch für alle sechs Ortsteile, egal wie versteckt.",

        scenarios: [
            {
                icon: "home",
                title: "Eigenheim-Tür zugefallen",
                description: "Die hochwertige Sicherheitstür Ihres Waldsolmser Eigenheims hat sich hinter Ihnen geschlossen? Wir öffnen sie spurlos und ohne Schäden an Rahmen, Lackierung oder Zylinder."
            },
            {
                icon: "shield-alert",
                title: "Schlüssel verloren am Panoramaweg",
                description: "Nach einer Runde auf dem 18,5 km langen Panoramaweg Waldsolms den Schlüssel verloren? Wir öffnen Ihre Tür und tauschen den Zylinder, damit Sie sofort wieder sicher sind."
            },
            {
                icon: "briefcase",
                title: "Historische Hofanlage in Griedelbach",
                description: "Problem mit dem Schloss an einer alten Hofreite oder der historischen Dorfkirche? Unsere Techniker kennen antike Schließmechanismen und arbeiten mit höchster Sorgfalt."
            }
        ],

        aboutText: `
<p>Malerisch im südlichen Lahn-Dill-Kreis am Rand des Taunus gelegen, verströmt die Gemeinde <strong>Waldsolms</strong> mit ihren rund 4.660 Einwohnern pure ländliche Idylle auf höchstem Niveau. Sechs eigenständige Ortsteile und <strong>Brandoberndorf</strong> (Verwaltungssitz, ca. 1.970 Einwohner), <strong>Griedelbach, Hasselborn, Kraftsolms, Kröffelbach und Weiperfelden</strong> und bilden eine Gemeinde im Naturpark Taunus, die sich durch ihre außergewöhnliche Kombination aus Natur, Sport und Kultur auszeichnet. Wenn in dieser stillen Umgebung die Haustür zufällt, ist unser <strong>Schlüsseldienst Waldsolms</strong> schnell zur Stelle.</p>

<h3>15 bis 18 Minuten über die L3054</h3>
<p>Unsere Monteure finden jeden der weitläufig verstreuten Ortsteile blind und erreichen Sie über die <strong>L3054</strong> in <strong>15 bis 18 Minuten</strong>. Ob am <strong>Lindenplatz in Brandoberndorf</strong> mit seiner evangelischen Kirche aus dem 17. Jahrhundert und dem historischen Schulhaus (heute Rathaus), im beschaulichen <strong>Griedelbach</strong> mit seiner Dorfkirche aus dem 15. Jahrhundert und der uralten Linde, oder im abgelegenen <strong>Weiperfelden</strong> und wir bringen städtische Professionalität in die ländliche Umgebung.</p>

<h3>Attighof Golfclub, Taunusperle & Panoramaweg</h3>
<p>Waldsolms überrascht mit erstklassiger Infrastruktur: Der <strong>Attighof Golf- und Countryclub</strong> und ein 5-Sterne-Golfclub mit 18-Loch-Platz auf 80 Hektar und lockt Golfer aus der ganzen Region. Das <strong>Freibad „Taunusperle"</strong> in Brandoberndorf ist im Sommer ein beliebter Treffpunkt für die gesamte Gemeinde. Der <strong>18,5 km lange „Panoramaweg Waldsolms"</strong> verbindet die Ortsteile auf einer Wanderstrecke mit atemberaubenden Taunuspanoramen. Und das <strong>Koptisch-Orthodoxe Zentrum mit dem St. Antonius-Kloster</strong> setzt einen besonderen kulturellen und spirituellen Akzent. Überall dort, wo Menschen aktiv sind und leben, gibt es gelegentlich Aussperrungen und und dafür gibt es uns.</p>

<h3>6 Ortsteile, ein Versprechen</h3>
<p><strong>Brandoberndorf</strong> als Verwaltungssitz mit Lindenplatz, neuestem Bike Park mit Pumptrack (eröffnet 2024) und dem Freibad bildet das Zentrum. <strong>Griedelbach</strong> (ca. 700 Einwohner) begeistert mit seiner historischen Dorfkirche und den keltischen Hügelgräbern in der Umgebung. <strong>Hasselborn, Kraftsolms, Kröffelbach</strong> und <strong>Weiperfelden</strong> vervollständigen das Gemeindegebiet. Für alle sechs gilt: identische Anfahrtskosten, identische Reaktionszeit, identische Qualität.</p>

<h3>Transparente Festpreise für die Taunusgemeinde</h3>
<p>Für eine zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt nach Waldsolms kostet <strong>15 Euro</strong> und pauschal für alle sechs Ortsteile. Ob Weiperfelden oder Brandoberndorf: Der Gesamtpreis steht, bevor unser Monteur losfährt.</p>
`,

        localTestimonials: [
            {
                name: "Bernd F.",
                quote: "In Brandoberndorf morgens beim Müllrausbringen die Tür zugezogen. Der Schlüsseldienst war in 16 Minuten da und hatte die Sicherheitstür in Sekunden offen. 114 Euro, kein Kratzer. Perfekt!",
                rating: 5
            },
            {
                name: "Gisela S.",
                quote: "Wir wohnen etwas abgelegen in Weiperfelden. Dass ein Schlüsseldienst so schnell hier sein kann, hat mich überrascht. Professionell, freundlich und transparent und genau wie am Telefon angekündigt.",
                rating: 5
            },
            {
                name: "Thomas L.",
                quote: "Nach einer Golfrunde am Attighof den Schlüssel verloren. Der Techniker kam nach Kröffelbach, tauschte den Zylinder und gab Sicherheitstipps. Alles fair und seriös. Empfehle ich jedem in Waldsolms.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgesperrt in Brandoberndorf, Griedelbach oder einem anderen Waldsolmser Ortsteil? Schnelle, zerstörungsfreie Türöffnung ab 99€ und garantiert fair, 24/7 erreichbar.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gilt die Anfahrtspauschale auch für abgelegene Ortsteile wie Weiperfelden?",
                answer: "Ja, die 15 Euro Anfahrt gelten pauschal für alle sechs Waldsolmser Ortsteile. Keine Aufschläge für entlegene Lagen, keine Höhenzuschläge."
            },
            {
                question: "Können Sie hochwertige Sicherheitstüren in den Neubaugebieten öffnen?",
                answer: "Selbstverständlich. Unsere Techniker sind auf moderne Mehrfachverriegelungen und gedämmte Sicherheitstüren spezialisiert. Bei zugefallenen Türen öffnen wir zu über 99% zerstörungsfrei."
            },
            {
                question: "Bieten Sie auch Zylindertausch nach Schlüsselverlust in Waldsolms an?",
                answer: "Ja, wir haben hochwertige Sicherheitszylinder namhafter Hersteller direkt im Einsatzfahrzeug. Nach einem Schlüsselverlust tauschen wir den Zylinder sofort vor Ort."
            }
        ],
        neighbors: ["schluesseldienst-schoeffengrund", "schluesseldienst-huettenberg", "schluesseldienst-braunfels"]
    },
    {
        id: "butzbach",
        slug: "schluesseldienst-butzbach",
        name: "Butzbach",
        plz: "35510",
        coordinates: { latitude: 50.4333, longitude: 8.6717 },
        logistics: {
            drivingTimeMinutes: "20-25",
            distanceFromHQ: 18,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Butzbach — Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Butzbach: Zerstörungsfreie Türöffnung ab 99€. In ca. 20-25 Min. in der Friedrich-Ludwig-Weidig-Stadt & allen 14 Ortsteilen. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die A5 (Abfahrt Gambacher Kreuz) oder die schnelle B3 erreichen unsere Monteure die Perle der Wetterau in zuverlässigen 20 bis 25 Minuten.",
        mainRoad: "A5 / B3",
        distanceKm: 18,
        character: "Friedrich-Ludwig-Weidig-Stadt und Perle der Wetterau: ~27.000 Einwohner, 14 Ortsteile, preisgekrönte Fachwerk-Altstadt an der Deutschen Fachwerkstraße",
        populationApprox: "~27.000",
        landmark: "Historischer Marktplatz, Solmser Schloss & Museum der Stadt Butzbach mit weltberühmter Miniaturschuh-Sammlung",
        buildingTypes: "Prächtige Fachwerk-Altstadt rund um den Marktplatz, mittelalterliche Stadtmauer, expandierende Neubaugebiete in Ostheim und Pohl-Göns, ländliche Eigenheime in den äußeren Ortsteilen.",
        parkingInfo: "In der Altstadt nutzen unsere Monteure kurzzeitige Haltemöglichkeiten, in den Randgebieten und Ortsteilen parken wir direkt vor dem Einsatzort.",
        heroVariant: "Schlüsseldienst für Butzbach und die Perle der Wetterau verdient ehrliches Handwerk.",
        fareInfo: "Butzbach liegt im erweiterten Ring. Die Anfahrt beträgt faire 15 Euro und identisch für alle 14 Ortsteile, vom Marktplatz bis nach Maibach.",

        scenarios: [
            {
                icon: "home",
                title: "Fachwerk-Altstadt: Antikes Schloss klemmt",
                description: "Ihr historisches Kastenschloss in einem Butzbacher Fachwerkhaus will nicht mehr? Unsere Spezialisten kennen diese jahrhundertealten Mechanismen und arbeiten behutsam, ohne die denkmalgeschützte Substanz zu berühren."
            },
            {
                icon: "shield-alert",
                title: "Neubaugebiet: Sicherheitstür zugefallen",
                description: "Die moderne Mehrfachverriegelung Ihrer Haustür in Ostheim oder Pohl-Göns hat sich verriegelt? Wir öffnen Hightech-Schlösser genauso souverän wie historische Mechaniken."
            },
            {
                icon: "briefcase",
                title: "14 Ortsteile: Kein Weg zu weit",
                description: "Ob Nieder-Weisel, Hoch-Weisel, Kirch-Göns oder Maibach und egal in welchem der 14 Butzbacher Ortsteile Sie ausgesperrt sind, wir kommen schnell, fair und zuverlässig."
            }
        ],

        aboutText: `
<p>Mit stolzen rund <strong>27.000 Einwohnern</strong> und <strong>14 eigenständigen Ortsteilen</strong> ist <strong>Butzbach</strong> die bedeutende Mittelstadt am Tor zwischen Wetterau und Taunus. Seit 2011 trägt sie den offiziellen Beinamen <strong>„Friedrich-Ludwig-Weidig-Stadt"</strong> und in Ehrung des Vormärz-Revolutionärs, der hier als Lehrer wirkte und als Vorkämpfer der deutschen Demokratiebewegung in die Geschichte einging. Die preisgekrönte <strong>Fachwerk-Altstadt</strong> rund um den historischen Marktplatz zählt zu den schönsten in ganz Hessen und liegt an der <strong>Deutschen Fachwerkstraße</strong>. Für unseren <strong>Schlüsseldienst Butzbach</strong> bedeutet diese Vielfalt: Jeder Einsatz ist einzigartig.</p>

<h3>20 bis 25 Minuten über A5 und B3</h3>
<p>Dank der fantastischen Verkehrsanbindung über die <strong>A5 (Abfahrt Gambacher Kreuz)</strong> und die <strong>B3</strong> rücken unsere ausgebildeten Techniker in <strong>20 bis 25 Minuten</strong> nach Butzbach aus. Das gilt für die Kernstadt ebenso wie für die äußersten Ortsteile <strong>Maibach, Münster, Bodenrod</strong> oder <strong>Hausen-Oes</strong>. Wenn Sie nach dem Telefonat auflegen, ist unser Monteur bereits auf dem direkten Weg zu Ihrer Postleitzahl.</p>

<h3>Solmser Schloss, Stadtmuseum & Miniaturschuh-Sammlung</h3>
<p>Butzbach ist ein kulturgeschichtliches Juwel: Das <strong>Solmser Schloss</strong> erhebt sich majestätisch über der Stadt, die <strong>Stadtmauer aus dem 14./15. Jahrhundert</strong> umschließt das historische Zentrum. Das <strong>Museum der Stadt Butzbach</strong> im ehemaligen Solms-Braunfelser Hof präsentiert 2.000 Jahre Lokalgeschichte und vom Römerlager bis zur Gegenwart und und beherbergt eine <strong>weltberühmte Sammlung von Miniaturschuhen</strong>. Der <strong>Römische Turm am Schrenzerberg</strong> erinnert an den Obergermanisch-Raetischen Limes. In <strong>Nieder-Weisel</strong> (ca. 3.400 Einwohner), dem größten Ortsteil, steht die historische <strong>Komturkirche</strong> und ein seltenes Zeugnis der Johanniter-Ordenstradition.</p>

<h3>14 Ortsteile und ein einheitlicher Festpreis</h3>
<p>Butzbach besteht aus <strong>Bodenrod, der Kernstadt, Ebersgöns, Fauerbach vor der Höhe, Griedel, Hausen-Oes, Hoch-Weisel, Kirch-Göns, Maibach, Münster, Nieder-Weisel, Ostheim, Pohl-Göns</strong> und <strong>Wiesental</strong>. Von der antiken Fachwerktür am Marktplatz bis zur modernen Sicherheitstür im Neubaugebiet Ostheim: Unsere Techniker bewältigen jede Herausforderung. Für alle 14 Ortsteile gilt: identische Anfahrtskosten, identische Reaktionszeit, identische Qualität.</p>

<h3>24/7 Notdienst für die Friedrich-Ludwig-Weidig-Stadt</h3>
<p>Butzbach lebt und pulsiert: Wochenmarkt, Kulturveranstaltungen im Solmser Schloss, Vereinsleben in den Ortsteilen. Wo Leben ist, passieren Aussperrungen. Unser <strong>Schlüsselnotdienst Butzbach</strong> ist deshalb rund um die Uhr einsatzbereit und an Feiertagen, bei Wetterau-Karneval und auch an einem nasskalten Februartag.</p>

<h3>Transparente Festpreise</h3>
<p>Für eine zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt nach Butzbach kostet <strong>15 Euro</strong> und pauschal für alle 14 Ortsteile. In einer Stadt, die den Kampf für Gerechtigkeit in ihrem Namen trägt, passen wir als ehrlicher und transparenter Fachbetrieb bestens hinein.</p>
`,

        localTestimonials: [
            {
                name: "Matthias W.",
                quote: "In der Butzbacher Altstadt ausgesperrt, Fachwerkhaus mit uraltem Schloss. Der Techniker war in 22 Minuten da und hat das historische Schloss meisterhaft geöffnet. Kein Kratzer, 114 Euro. Absolut empfehlenswert!",
                rating: 5
            },
            {
                name: "Sabine K.",
                quote: "Neubau in Ostheim, Mehrfachverriegelung zugefallen. Schnelle Ankunft, professionelle Öffnung in Sekunden, freundlicher Techniker. Preis exakt wie am Telefon. Endlich ein seriöser Schlüsseldienst für Butzbach!",
                rating: 5
            },
            {
                name: "Karl-Heinz B.",
                quote: "Sonntagabend in Nieder-Weisel ausgesperrt. Der Notdienst hat schnell reagiert, fairer Wochenendpreis, saubere Arbeit. Auch hier in der Wetterau gibt es zum Glück noch ehrliche Handwerker.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Hilfe in der Perle der Wetterau? Wir öffnen Türen in Butzbach und allen 14 Ortsteilen und von der Fachwerk-Altstadt bis zum Neubaugebiet. Fair, transparent, 24/7.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Übernehmen Sie auch Fahrten in äußere Ortsteile wie Maibach oder Münster?",
                answer: "Ja, die 15 Euro Anfahrt gelten pauschal für alle 14 Butzbacher Ortsteile und von der Kernstadt über Nieder-Weisel und Ostheim bis nach Maibach und Münster. Keine Extrazuschläge."
            },
            {
                question: "Können Sie antike Schlösser in der Butzbacher Fachwerk-Altstadt öffnen?",
                answer: "Definitiv. Unsere Techniker sind auf historische Schließmechanismen spezialisiert und arbeiten mit größter Sorgfalt an denkmalgeschützten Fachwerkhäusern. Kein Kratzer, keine Beschädigung."
            },
            {
                question: "Stimmt der Festpreis von 99 Euro wirklich für ganz Butzbach?",
                answer: "Ja, 99 Euro für die Öffnung einer zugefallenen Tür werktags tagsüber, plus 15 Euro pauschale Anfahrt. Sie erfahren den Gesamtpreis am Telefon, bevor der Monteur losfährt. Ohne Wenn und Aber."
            }
        ],
        neighbors: ["schluesseldienst-giessen", "schluesseldienst-huettenberg", "schluesseldienst-waldsolms"]
    }
];
