import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

/**
 * ══════════════════════════════════════════════════════════════
 * Ring 3f und Fehlende Ortsteile: Biebertal, Hohenahr, Leun
 * 12-18 km Radius
 * ══════════════════════════════════════════════════════════════
 */
export const ring3fLocations: LocationData[] = [
    // ━━━━ BIEBERTAL und 6 ORTSTEILE ━━━━
    {
        id: "biebertal-fellingshausen",
        slug: "schluesseldienst-fellingshausen",
        name: "Fellingshausen",
        plz: "35444",
        coordinates: { latitude: 50.5900, longitude: 8.5750 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Fellingshausen 24/7 Notdienst", metaDescription: "Schlüsseldienst Fellingshausen (Biebertal): In 14 Min. da. Festpreis ab 99€. Notdienst: 06441-8056279" },
        routeDescription: "Über Dutenhofen und Wettenberg erreichen wir den waldreichen Randort Fellingshausen aus unserer Wetzlarer Zentrale typischerweise in 14 Minuten.",
        mainRoad: "L3286 / L3047",
        distanceKm: 13,
        character: "Ein naturnah gelegener, ruhiger Ortsteil von Biebertal am Fuße des Dünsbergs mit hohem Wohn- und Freizeitwert.",
        populationApprox: "~1.300",
        landmark: "Raststätten am Dünsberg / Waldrand-Gefilde",
        buildingTypes: "Familienfreundliche Ein- und Mehrfamilienhäuser, weiträumige Grundstücke und gelegentlich ältere Hofeinheiten.",
        parkingInfo: "Durch das verkehrsberuhigte Straßenbild von Fellingshausen ist ein Parken für unsere Einsatzfahrzeuge immer problemlos realisierbar.",
        heroVariant: "Schlüsseldienst Fellingshausen (Biebertal). Waldrand-Schnellservice aus Wetzlar.",
        fareInfo: "Die Anfahrtsstrecke rund um den Dünsberg begleichen Sie mit einer transparenten 15-Euro-Fahrpauschale und gänzlich ohne böse Überraschungen.",
        scenarios: [
            { icon: "home", title: "Joggen am Dünsberg", description: "Nach dem Waldlauf in Fellingshausen merken Sie: Haustür ist zugefallen, Schlüssel drinnen. Keine Panik, unsere Lockpicking-Profis öffnen spurlos in Sekunden." },
            { icon: "shield-alert", title: "Blockierter Werkzeugschuppen", description: "Veraltete Vorhängeschlösser an Gartenschuppen vereisen oder rosten gerne. Wir schneiden sie ab oder öffnen sie präzise, um Ihre Gartengeräte zugänglich zu machen." },
            { icon: "briefcase", title: "Defekte Profilzylinder", description: "Biebertaler Hanglage und Witterung belasten das Material. Klemmen Schlösser, fräsen wir millimetergenau den alten Zylinder heraus und setzen ABUS-Neuware ein." }
        ],
        aboutText: `
<p>Dort, wo der Dünsberg majestätisch über die Region wacht, liegt <strong>Fellingshausen</strong> als ruhiger Ortsteil der Gemeinde Biebertal. Naturnahes Wohnen und familiäre Nachbarschaften prägen das Bild. Wer nach einem ausgiebigen Waldspaziergang jedoch vor einer unerbittlich verschlossenen Haustür steht, weil der Schlüsselbund im Flur liegt, braucht einen Handwerker, der das Idyll nicht mit Wucherpreisen zerstört. Als echter Experte aus der Region Wetzlar ist der <strong>Schlüsseldienst Fellingshausen</strong> an Ihrer Seite.</p>

<h3>Flotte Dünsberg-Routen</h3>
<p>Unsere Leitstelle dirigiert die Monteure zielführend über die L3286 oder Wettenberg direkt in den Ortskern von Fellingshausen. Das resultiert in einer rekordverdächtigen Durchschnitts-Ankunftszeit von <strong>14 Minuten</strong> ab Alarmierung. So müssen Sie an herbstlichen Waldabenden nicht zitternd vor dem eigenen Haus ausharren.</p>

<h3>Faire Transparenz, keine Land-Umlagen</h3>
<p>Dubiose Vermittler aus fernen Großstädten berechnen für Waldranddörfer gerne absurde Kilometergelder. Bei uns existiert das nicht: Das Öffnen einer lediglich ins Schloss gefallenen Standard-Eingangstür berechnen wir werktags tagsüber ab verbindlichen 99 Euro. Hinzu gesellt sich lediglich eine exakte Reisepauschale von 15 Euro für den Einsatzwagen. Nichts weiter. Ehrliches, mittelhessisches Handwerk.</p>`,
        localTestimonials: [
            { name: "Fam. E.", quote: "Der Techniker kam in knapp 15 Minuten den Dünsberg-Hang hoch. Die eiserne Kellertür hatte geklemmt und er öffnete sie mit speziellem Werkzeug für den absolut fairen Festpreis von 114 Euro alles inklusive. Perfekt.", rating: 5 },
            { name: "Julian G.", quote: "Hut ab. Mitten in der Nacht den Schlüssel in Fellingshausen beim Laufen verloren. Monteur erklärte mir den Nachtzuschlag schon am Telefon glasklar. Tür wurde nicht beschädigt. Sehr solide.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Fellingshausen? Wir sind in ca. 14 Minuten bei Ihnen und zum transparenten Festpreis.",
            mainText: `<p>Die Waldrand-Lage von <strong>Fellingshausen</strong> schreckt uns keinesfalls ab und im Gegenteil: Unser Aufsperrdienst agiert hier mit lokaler Leidenschaft und rasanter Fahrzeit.</p>`,
            serviceZerstörungsfrei: "Klassische Haustüren in Fellingshausen bedienen unsere Meister mit speziellen Zug-Riegeln in den allermeisten Fällen schadenfrei.",
            serviceBohren: "Versagende Schlösser werden präzise gebohrt. Das Holz- oder Kunststoffblatt der Tür in Fellingshausen bleibt unversehrt.",
            service247: "Für das Biebertaler Gefilde garantieren wir ganzjährig und feiertags durchgehende Einsatzbereitschaft."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Fellingshausen?", answer: "In ca. 14 Minuten über die Verbindungsstraßen von Wetzlar." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis und werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-frankenbach", "schluesseldienst-krofdorf-gleiberg"]
    },
    {
        id: "biebertal-frankenbach",
        slug: "schluesseldienst-frankenbach",
        name: "Frankenbach",
        plz: "35444",
        coordinates: { latitude: 50.5950, longitude: 8.5650 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Frankenbach Notdienst 24/7", metaDescription: "Schlüsseldienst Frankenbach (Biebertal): In 15 Min. da. Ab 99€ Festpreis. Jetzt: 06441-8056279" },
        routeDescription: "Am Rande der Biebertaler Talsenken erreichen wir das verschlafene Frankenbach in konstanten 15 Minuten Fahrzeit.",
        mainRoad: "L3047 / Lokale Landstraßen",
        distanceKm: 14,
        character: "Beschauliches Dorf in der hessischen Hanglandschaft von Biebertal, extrem naturverbunden und verkehrsberuhigt.",
        populationApprox: "~1.100",
        landmark: "Alter Ortskern / Fränkisch geprägte Höfe",
        buildingTypes: "Traditionelle Fachwerkhöfe, vereinzelte Mehrgenerationenhäuser sowie kleinere Einfamilien-Eigenheime.",
        parkingInfo: "Frankenbachs freie Straßenverläufe ermöglichen allen unseren Mitarbeitern ein dichtes Parken am Auftragsort.",
        heroVariant: "Schlüsseldienst Frankenbach. Sicherheit im Landidyll Biebertals.",
        fareInfo: "Den Weg in das tiefere Biebertal berechnen wir zu einem klaren Fixpreis von exakt 15 Euro KFZ-Pauschale.",
        scenarios: [
            { icon: "home", title: "Zugezogene Fachwerktür", description: "In den alten Hofreiten reicht ein Windstoß. Zugefallene Eingänge knacken unsere lokalen Wetzlarer Schlosser mit elastischen Gleitkarten in Minuten." },
            { icon: "shield-alert", title: "Kalter Außen-Zylinder", description: "Harte Winter in Frankenbach lassen alte Zylinder oxidieren. Eine blockierte Tür ist für unsere Spezialbohrmaschinen nur eine kurze Station." },
            { icon: "briefcase", title: "Nebengebäude verriegelt", description: "Scheune oder Garage hakt? Bei Klemm-Defekten reinigen wir zunächst, bevor wir Ihnen direkt vor Ort einen ABUS Ersatz anbieten." }
        ],
        aboutText: `
<p>Eingebettet in die mittelhessischen Hangwälder der Gemeinde Biebertal findet sich das beschaulich-ruhige <strong>Frankenbach</strong>. Ländliche Idylle und traditionelles Wohnen in alten Höfen und Eigenheimen garantieren hier eine tiefe Lebensqualität. Steckt der Wohnungsschlüssel jedoch am Samstagabend ausgerechnet von innen und die Haustür ist eiskalt zugefallen, wird diese Ruhe jäh gestört. Glücklicherweise fungiert der <strong>Schlüsseldienst Frankenbach</strong> als flinker Nachbarschafts-Helfer aus dem Wetzlarer Verbund.</p>

<h3>In flotten 15 Minuten gelöst</h3>
<p>Die etwas tiefer ins Biebertal reichende Landstraße hindert unsere Einsätzkräfte nicht daran, den Turbo einzuschalten. Über sichere, direkte Anfahrtswege meistern wir die Distanz im Normalfall in sehr verlässlichen <strong>15 Minuten</strong>. Sie bleiben somit nicht lange Regen, Wind oder der drückenden Hitze preisgegeben.</p>

<h3>Preisgarantie statt Kosten-Falle</h3>
<p>Für ländliche Regionen existieren leider oft schwarze Schafe auf dem Schlossermarkt, die absurde Zufuhrkosten in Rechnung stellen. Nicht mit uns: Wir deklarieren unser 99-Euro-Paket (für Standard-Werktags-Öffnungen von lediglich zugefallenen Türen) als absolutes Heiligtum. Da Frankenbach eine gewisse Fahrzeit erfordert, erheben wir schlichte 15 Euro PKW-Pauschale. Dieses transparente Konstrukt garantieren wir Ihnen bereits unverbindlich beim ersten Call.</p>`,
        localTestimonials: [
            { name: "Heinrich M.", quote: "Der Techniker ist direkt von Wetzlar über die Landstraße gekommen. Nach einer Viertelstunde stand er in Frankenbach auf der Matte, öffnete unsere große Hoftür mit einem Draht und nahm glatte 114 Euro komplett. Sagenhaft ehrlich.", rating: 5 },
            { name: "Petra K.", quote: "Endlich mal keine Abzocke. Der Herr nannte am Telefon den Preis, war am tiefen Samstagabend schnell hier in Frankenbach und löste das Problem in drei Minuten. Note Eins.", rating: 5 }
        ],
        content: {
            heroIntro: "Tür zu in Frankenbach? Unser Monteur ist in ca. 15 Minuten bei Ihnen und zuverlässig und zum Festpreis.",
            mainText: `<p>Tief in der Struktur von <strong>Frankenbach</strong> angesiedelte Problemfälle meistert unser lokaler Aufsperrdienst Wetzlar extrem zeitnah und materialschonend.</p>`,
            serviceZerstörungsfrei: "Zugekachelte und ältere Holztüren im Dorfprofil Frankenbach lassen sich meist verblüffend simpel und komplett spurenfrei entriegeln.",
            serviceBohren: "Verkeilte Beschläge an Nebengebäuden behandeln wir radikal mit der Fräse und setzen sofort geprüfte Norm-Zylinder ein.",
            service247: "Für Frankenbach gilt unser unbeugsames 24-Stunden-Credo und ohne Pausen in der Nacht."
        },
        faqs: [
            { question: "Wie weit ist Frankenbach?", answer: "Ca. 14 km und über Biebertal sind wir in rund 15 Minuten bei Ihnen." },
            { question: "Was kostet der Notdienst?", answer: "Zugefallene Türen ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-fellingshausen", "schluesseldienst-koenigsberg"]
    },
    {
        id: "biebertal-koenigsberg",
        slug: "schluesseldienst-koenigsberg",
        name: "Königsberg",
        plz: "35444",
        coordinates: { latitude: 50.6050, longitude: 8.5700 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Königsberg 24/7 Türöffnung", metaDescription: "Schlüsseldienst Königsberg (Biebertal): 16 Min. Anfahrt. Ab 99€ Festpreis. Notdienst: 06441-8056279" },
        routeDescription: "Über die Höhenstraßen und Kurven der Gemeinde Biebertal erklimmen wir Königsberg souverän in rund 16 rasanten Minuten.",
        mainRoad: "L3286",
        distanceKm: 15,
        character: "Ein exponierter, malerischer Höhen-Ortsteil der Gemeinde Biebertal, geprägt von Burgruinen-Flair und weiten Hessen-Blicken.",
        populationApprox: "~800",
        landmark: "Königsberger Schlossberg / Alte Burgruine",
        buildingTypes: "In die Hanglage gebaute Einfamilienhäuser, dörfliche Traditionsbauten und vereinzelt Fachwerk-Altbestände.",
        parkingInfo: "Durch die ruhige Dorflage auf dem Höhenrücken parken unsere Servicemitarbeiter problemlos in Sichtweite zum Objekt.",
        heroVariant: "Schlüsseldienst Königsberg am Rand von Biebertal. Beruhigende Sicherheit.",
        fareInfo: "Trotz der Hanglage und Anfahrt in den Höhenort berechnen wir für Königsberg ausschließlich entspannte 15 Euro Wegpauschale.",
        scenarios: [
            { icon: "home", title: "Zugezogene Panoramaj-Haus Tür", description: "Nach dem Gang zum Briefkasten am Hangfeld rastet die Tür laut ein. Unser Picksystem löst das Problem in Biebertal spurlos in Sekunden." },
            { icon: "shield-alert", title: "Alter Zylinderblock dreht leer", description: "Härtefälle wie durchdrehende Kastenschlösser in älteren Häusern bohren unsere Fachkräfte auf und montieren sofort DIN-Ersatzware." },
            { icon: "briefcase", title: "Schwergängige Balkon-Schlösser", description: "Zylinder, die am Höhenwind extremer Witterung ausgesetzt sind, wechseln wir sofort gegen hochwertige ABUS Komponenten." }
        ],
        aboutText: `
<p>Hoch oben über der Gemeinde Biebertal, idyllisch umgeben von ausgedehnten Waldgebieten und historischen Ruinen-Spots, liegt <strong>Königsberg</strong>. Aus dem beschaulichen Wohnort am Hang eröffnet sich ein toller Mittelhessen-Blick. Ungemütlich wird diese Höhenlage aber sofort, wenn im winterlichen Schneetreiben oder einer kräftigen Herbstböe die eigene Haustür hinter einem zufällt. Steckt der Schlüssel von innen, hilft kein Zittern, sondern nur der Griff zum Handy. Der regional verankerte <strong>Schlüsseldienst Königsberg</strong> steuert Ihren Berg zügig aus dem Wetzlarer Talkessel an.</p>

<h3>Rasante Bergfahrt aus dem Zentrum</h3>
<p>Unsere Wetzlar-Basis ist der Schlüssel (im wahrsten Sinne) zu einer reaktionsschnellen Logistik. Wenn wir das Signal für Königsberg erhalten, navigieren unsere routinierten Techniker sicher über die L3286 nach oben. Meist stellen wir nach bloß <strong>16 Minuten</strong> den Motor auf Ihrem Hof ab und echte Regionalkraft statt überregionale Disponenten.</p>

<h3>Faire Preise bis zum Gipfel</h3>
<p>Die Berg-Dörfer des Biebertals bestrafen wir nicht mit ausfallenden Überland-Fahrpreisen. Bei glattflächig zugezogenen Wohnungstüren garantieren wir am Werktag tagsüber vollkommene 99 Euro Festpreis. Dazu runden winzige 15 Euro Fahrpauschale unsere Rechnung transparent ab. Bevor wir zerspanende Bohrer an verriegelten Altbau-Türen einsetzen, werden Sie exakt und ehrlich über Machbarkeit und Folgekosten (inkl. neuem Qualitäts-Zylinder) informiert.</p>`,
        localTestimonials: [
            { name: "K. Weidner", quote: "Der Mitarbeiter kam zügig hoch nach Königsberg, sehr sanfter Umgang mit der empfindlichen, frisch gestrichenen Haustür. Das Türblatt blieb völlig ohne Kratzer. Geniales Werkzeug, 114 Euro und absolut okay.", rating: 5 },
            { name: "Frank T.", quote: "Sonntag Morgen, Schlüssel weg. Für die Höhenlage war er mega fix da. Kein Callcenter aus Berlin, sondern ein Handwerker aus der direkten Region. Preis war am Ende exakt, was oben am Telefon besprochen war.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Königsberg? Wir sind in ca. 16 Minuten bei Ihnen und professionell und zum Festpreis.",
            mainText: `<p>Die besondere Höhenlage von <strong>Königsberg</strong> meistern unsere Monteure anstandslos und und das zu bodenständigen Wetzlar-Dorfpreisen.</p>`,
            serviceZerstörungsfrei: "Bei Standard-Aussperrungen sind in Königsberg keine groben Maschinen nötig. Die Türen bleiben zu 99% unbeschädigt.",
            serviceBohren: "Verriegelte Gebäude oder schwer defekte Zylinder lösen wir durch kontrolliertes Aufbohren und ersetzen das Material normgerecht.",
            service247: "Für das Königsberger Gebiet garantieren wir eine 24-stündige Erreichbarkeit auch an extrem abgelegenen Hofreiten."
        },
        faqs: [
            { question: "Kommen Sie auch hoch nach Königsberg?", answer: "Selbstverständlich. Wir sind in ca. 16 Minuten in Königsberg." },
            { question: "Was kostet eine Türöffnung?", answer: "Ab 99 Euro Festpreis und transparent und verbindlich." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-frankenbach", "schluesseldienst-krumbach"]
    },
    {
        id: "biebertal-krumbach",
        slug: "schluesseldienst-krumbach",
        name: "Krumbach",
        plz: "35444",
        coordinates: { latitude: 50.6100, longitude: 8.5800 },
        logistics: { drivingTimeMinutes: "17", distanceFromHQ: 16 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Krumbach Notdienst 24/7", metaDescription: "Schlüsseldienst Krumbach (Biebertal): In 17 Min. da. Festpreis ab 99€. Jetzt: 06441-8056279" },
        routeDescription: "Über reizvolle Landstraßen an Königsberg vorbei fahren wir in den nordwestlichsten Biebertaler Ortsteil Krumbach in unter 17 Minuten ein.",
        mainRoad: "Lokales Wegenetz",
        distanceKm: 16,
        character: "Der allerkleinste, verschwiegene Ortsteil der Gemeinde Biebertal. Extrem grüne Lage fernab jeglicher Hauptverkehrsströme.",
        populationApprox: "~200",
        landmark: "Ruhige Krumbacher Täler",
        buildingTypes: "Fast ausschließlich einzeln stehende Einfamilienhäuser und eine Handvoll tief integrierter alter Bauernhöfe.",
        parkingInfo: "Durch das faktische Weiler-Profil ist ein Parken mit den Service-BMWs für unsere Retter unmittelbar an der Tür garantiert.",
        heroVariant: "Schlüsseldienst für das ländliche Krumbach. Türöffnung zum Dorftarif.",
        fareInfo: "Die entlegene Fahrt nach Krumbach verrechnet das Team von Schluessel-Schmiede mit humanen 15 Euro KFZ-Pauschale.",
        scenarios: [
            { icon: "home", title: "Tür nach Spaziergang zu", description: "Sie kommen aus dem hügeligen Wald von Krumbach, der Wind pfeift, Tür schlägt zu? Unser Fallengleiter entsperrt die Pforte behutsam." },
            { icon: "shield-alert", title: "Zylinderbruch bei Frost", description: "Im Winter friert der antike Schließkasten am Hoftor ein. Schlüssel abgebrochen? Wir extrahieren Reste des Schlüssels mit Zangenwerkzeug." },
            { icon: "briefcase", title: "Nachrüstung in Krumbach", description: "Klemmt die Haustür seit Jahren? Wir tauschen unzuverlässige Zylinder noch am Sonntag gegen langlebige BKS Technik aus." }
        ],
        aboutText: `
<p>Versteckt im üppigen Grün der Natur, thront <strong>Krumbach</strong> als weitaus kleinster und isoliertester Ortsteil der Gemeinde Biebertal in Mittelhessen. Die absolute ländliche Ruhe fernab jeder Autobahn ist ein Privileg und bis zu jenem frustrierenden Moment, in dem die betagte Haustür plötzlich im Wind in die Schlossfalle kracht. Den Haustürschlüssel von außen vergessen? Kein regionales Service-Auto in Sicht? Der renommierte und ortsnahe <strong>Schlüsseldienst Krumbach</strong> (operierend als Schluessel-Schmiede Wetzlar) lässt Anrufer aus solch abgelegenen Dörfern glücklicherweise nie im Stich.</p>

<h3>Zügige Navigation ans Ende des Tals</h3>
<p>Ein faires Versprechen: Unsere Dienstleistungs-Geschwindigkeit sinkt auch bei Weiler-Dörfern nicht. Durch unser profundes Ortswissen um Wetzlar und Biebertal schlängeln wir uns meist in rekordnahen <strong>17 Minuten</strong> nach Krumbach. Echte lokale Techniker und kein frustrierendes Warten auf Handwerker aus dem 50 Kilometer entfernten Gießen.</p>

<h3>Preisversprechen ohne Dorf-Malus</h3>
<p>Wir erteilen überzogenen "Fernfahrt-Zuschlägen" feierlich eine Absage. Egal, wie tief gelegen Krumbach sein mag: Öffnen wir eine simplere, zugezogene Haus- oder Wohnungstür, geschieht dies am Tag zielsicher für 99 Euro. Hinzu berechnen wir nur hauchdünne 15 Euro Einsatzwagen-Kosten. Verriegelte Türen zwingen zuweilen zum Fräsen (Zylinder geht dabei verloren) und diese Kosten strukturieren wir vorab so glasklar, dass nach der Arbeit garantiert kein Streit um die Rechnung ausbricht.</p>`,
        localTestimonials: [
            { name: "Fam. U.", quote: "Der Herr hat sich trotz des starken Regens wahnsinnig beeilt und stand 20 Minuten nach unserem Panikanruf hier im entfernten Krumbach auf der Matte. Tür war in 10 Sekunden unbeschädigt auf. Großes Lob.", rating: 5 },
            { name: "M. Schirmer", quote: "Am Wochenende ist mein Briefkastenschlüssel ins Schloss vom Haupttor gefallen. Er holte das Teil mit einer winzigen Zange raus, verlangte 15 Euro Anfahrt und das wars. Respektabel.", rating: 5 }
        ],
        content: {
            heroIntro: "Schlüsselnotfall in Krumbach? Wir sind in ca. 17 Minuten bei Ihnen und zum fairen Festpreis.",
            mainText: `<p>Selbst den kleinsten Ortsteil <strong>Krumbach</strong> vernetzen wir vollwertig in unserem rasanten Wetzlarer Einsatzgebiet.</p>`,
            serviceZerstörungsfrei: "Historische, landwirtschaftlich geprägte Türanlagen umschiffen unsere Picksysteme in Krumbach oftmals ohne jegliches Bohren.",
            serviceBohren: "Sich komplett weigernde Zylinder fräsen wir auf und dabei hinterlassen wir am eigentlichen Rahmen keine Narben.",
            service247: "Für Krumbach ist der direkte Wetzlar-Notruf das komplette Jahr hindurch Tag und Nacht freigeschaltet."
        },
        faqs: [
            { question: "Fahren Sie auch ins kleine Krumbach?", answer: "Ja! Krumbach gehört zu unserem Einsatzgebiet. Wir sind in ca. 17 Minuten da." },
            { question: "Was kostet es?", answer: "Ab 99 Euro Festpreis für zugefallene Türen." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-koenigsberg", "schluesseldienst-frankenbach"]
    },
    {
        id: "biebertal-rodheim-bieber",
        slug: "schluesseldienst-rodheim-bieber",
        name: "Rodheim-Bieber",
        plz: "35444",
        coordinates: { latitude: 50.5800, longitude: 8.5700 },
        logistics: { drivingTimeMinutes: "13", distanceFromHQ: 12 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Rodheim-Bieber 24/7", metaDescription: "Schlüsseldienst Rodheim-Bieber: Hauptort von Biebertal. 13 Min. Anfahrt. Ab 99€ Festpreis: 06441-8056279" },
        routeDescription: "Als Direktanbindung durchqueren wir aus Wetzlar das Gießener Umland und sind im Hauptort Rodheim-Bieber in ca. 13 Minuten.",
        mainRoad: "L3286 / Gießener Straße",
        distanceKm: 12,
        character: "Der zentrale und belebte Hauptort der Gemeinde Biebertal mit städtischer Infrastruktur, Einkaufsmöglichkeiten und regem Gewerbe.",
        populationApprox: "~4.800",
        landmark: "Heimatmuseum / Zentraler Rathausplatz Biebertal",
        buildingTypes: "Städtisch anmutende Mehrfamilienhäuser, moderne Gewerbeparks, Apotheken sowie klassische Einfamilienhaussiedlungen.",
        parkingInfo: "Dank der gut ausgebauten Infrastruktur stehen an Haupt- und Nebenstraßen in Rodheim-Bieber ausreichend Parkmöglichkeiten für den Notfalldienst zur Verfügung.",
        heroVariant: "Schlüsseldienst Rodheim-Bieber. Ihr Notdienst für das Herz von Biebertal.",
        fareInfo: "Die Anreise nach Rodheim-Bieber decken wir mit einem schmalen und verbraucherfreundlichen Zuschlag von nur 15 Euro ab.",
        scenarios: [
            { icon: "home", title: "Zugezogene Wohnungstür", description: "Im Treppenhaus die Tür ins Schloss gefallen? Wir öffnen Mehrfamilienhaus-Türen in Biebertal-Rodheim täglich spurlos in Sekunden." },
            { icon: "shield-alert", title: "Defekte Praxistür", description: "Schlösser an stark frequentierten Praxen oder Gewerbeflächen verschleißen schnell. Wir ersetzen BKS Zylinder im Handumdrehen direkt vor Ort." },
            { icon: "briefcase", title: "Briefkasten-Schloss blockiert", description: "Rostende Minizylinder an Briefkastenanlagen fräsen unsere Techniker vorsichtig auf und setzen für wenige Euro passgenauen Ersatz ein." }
        ],
        aboutText: `
<p>Das Herzstück und Verwaltungszentrum der Gemeinde Biebertal bildet zweifelsohne <strong>Rodheim-Bieber</strong>. Mit regem Gewerbe, Supermärkten, Ärzten und großen Mehrfamilienhäusern pulsiert hier das Leben. Ein verlorener Büroschlüssel oder ein im Treppenhaus vergessener Wohnungsschlüssel führt in diesem regen Umfeld schnell zu nervenaufreibenden Situationen. Bevor Hektik ausbricht, greift unser aus dem nahen Wetzlar operierender <strong>Schlüsseldienst Rodheim-Bieber</strong> sicher und professionell ein.</p>

<h3>Zentral gelegen, flink erreicht</h3>
<p>Weil Rodheim-Bieber infrastrukturell über die Landstraße L3286 und die Gießener Straße exzellent vernetzt ist, gehören strapaziöse Wartezeiten der Vergangenheit an. Sind unsere Notdienst-Monteure erst alarmiert, biegen sie im Schnitt nach nur <strong>13 Minuten Fahrzeit</strong> in Ihre Straße ein. Wir beenden Ihre Schieflage, egal ob im belebten Ortskern oder in peripheren Wohnsiedlungen.</p>

<h3>Gewerbe und Privat: Ein Preis, ein Wort</h3>
<p>In dicht besiedelten Gebieten locken schwarze Schafe der Branche gerne mit "ab 15 Euro"-Fallen. Wir begegnen diesen Praktiken mit eiserner Transparenz. Ein Standardauftrag (zugefallene Haus- oder Wohnungstür, ungeöffnet) am helllichten Werktag kostet vertraglich zugesicherte 99 Euro Festpreis. Dazu kommen 15 Euro Mobilitätspauschale nach Biebertal. Unsere kompetenten Monteure bohren erst und nur in letzter Instanz, falls jedes zerstörungsfreie Spezialwerkzeug am hochkomplexen Schließzylinder scheitern sollte und und dann ausschließlich in Rücksprache mit Ihren Wünschen.</p>`,
        localTestimonials: [
            { name: "Dr. L. Müller", quote: "Der Schlüssel zur Kanzlei in Rodheim-Bieber ist morgens im Türschloss glatt abgebrochen. Der Notdienst war in 15 Min da, zog den Rest heraus und die Tür öffnete einwandfrei. Der Tag war gerettet. Perfekt.", rating: 5 },
            { name: "Sven P.", quote: "Hatte mich im Treppenhaus ausgesperrt, Herd lief. Katastrophe. Per Telefon sofort den 99 Euro Preis und 15 Euro Fahrt durchgesagt bekommen. Nach 10 Minuten war der Retter da. Tür ohne Kratzer auf.", rating: 5 }
        ],
        content: {
            heroIntro: "Tür zugefallen in Rodheim-Bieber? Wir kommen in ca. 13 Minuten und zum transparenten Festpreis.",
            mainText: `<p>Ob Praxiseingang oder Privatwohnung und in <strong>Rodheim-Bieber</strong> liefern wir blitzschnelle, verlässliche Handwerksqualität direkt aus Wetzlar.</p>`,
            serviceZerstörungsfrei: "Unsere primäre Einsatzmethode an zugefallenen Türen in Rodheim-Bieber verzichtet ausnahmslos auf jede Form von Gewalt oder Zerstörung.",
            serviceBohren: "Gesperrte Riegelmechaniken bohren wir nur auf Ihren ausdrücklichen Wunsch auf und installieren umgehend zertifizierten Ersatz.",
            service247: "Für das zentrale Biebertal sind unsere Telefonleitungen im Dreischicht-System durchgängig 24/7 besetzt."
        },
        faqs: [
            { question: "Wie schnell sind Sie in Rodheim-Bieber?", answer: "Über Wettenberg sind wir in ca. 13 Minuten in Rodheim-Bieber." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis und werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-fellingshausen", "schluesseldienst-vetzberg"]
    },
    {
        id: "biebertal-vetzberg",
        slug: "schluesseldienst-vetzberg",
        name: "Vetzberg",
        plz: "35444",
        coordinates: { latitude: 50.5750, longitude: 8.5600 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Vetzberg Notdienst 24/7", metaDescription: "Schlüsseldienst Vetzberg (Biebertal): In 14 Min. da. Festpreis ab 99€. Notdienst: 06441-8056279" },
        routeDescription: "Vorbei am Gleiberg passieren wir die Landstraßen und erreichen das idyllische Burgdorf Vetzberg in meist 14 stabilen Fahrminuten.",
        mainRoad: "Burgstraße / Straßen am Gleiberg",
        distanceKm: 13,
        character: "Traumhafter, historisch stark geprägter Burg-Ortsteil der Gemeinde Biebertal mit malerischen Gassen und Ausflugstourismus.",
        populationApprox: "~750",
        landmark: "Burgruine Vetzberg",
        buildingTypes: "Aufsteigende verwinkelte Gassen, uralte Fachwerkhäuser, urige Gasthöfe und historische Hofreiten.",
        parkingInfo: "Trotz teilweise enger Gassenführung rund um die Burg finden unsere schmalen Einsatzfahrzeuge in Vetzberg stets rasch einen Stellplatz.",
        heroVariant: "Schlüsseldienst Vetzberg. Beschädigungsfreie Öffnungen im Burgdorf.",
        fareInfo: "Die Anfahrt in den malerischen Burg-Randort Vetzberg bepreist unser regionales Team mit absolut fairen 15 Euro KFZ-Kosten.",
        scenarios: [
            { icon: "home", title: "Ausgesperrt beim Spaziergang", description: "Sie waren kurz auf dem Weg zur Burgruine Vetzberg und die Tür schlug zu? Beschädigungsfreies Türöffnen klappt bei den meisten Türen in Sekunden." },
            { icon: "shield-alert", title: "Kastenschloss klemmt", description: "In den verwinkelten Fachwerkhäusern trotzen alte Schlösser oft der Bedienung. Wir bohren behutsam ohne das historische Holz zu verletzen." },
            { icon: "briefcase", title: "Garagentor blockiert", description: "Alte Flügeltore und Garagen in Vetzberg öffnen unsere Techniker routiniert mit speziellen Werkzeugen, wenn der Schlüssel im Schloss abgerissen ist." }
        ],
        aboutText: `
<p>Im eindrucksvollen Schatten der gleichnamigen Burgruine erstreckt sich das malerische <strong>Vetzberg</strong> als historisches Juwel der Gemeinde Biebertal. Enge Gassen, altehrwürdiges Fachwerk und die Ausflugsnähe zeichnen das Flair dieses Ortsteils aus. Fällt jedoch in solch historischen Immobilien die massive Eichentür plötzlich unkontrolliert ins Schloss oder hakt das alte Kastenschloss irreparabel, muss schnellstmöglich ein Mechaniker ran, der sensibel mit der historischen Substanz umgeht. Hier übernimmt der heimatnahe <strong>Schlüsseldienst Vetzberg</strong> verlässlich das Steuer.</p>

<h3>Flotte Reaktion, keine Panik</h3>
<p>Dank gut ausgebauter Routen rund um den benachbarten Gleiberg verfehlen unsere Techniker ihr Ziel nie. Im Schnitt navigiert sich unser Einsatzteam in <strong>14 Minuten</strong> bis in die engen Gassen direkt vor Ihr Haus in Vetzberg. Im kalten Winter oder bei hereinbrechender Dunkelheit verspricht das ein enormes Aufatmen.</p>

<h3>Festpreise zum Durchatmen in Vetzberg</h3>
<p>Wir honorieren das Vertrauen ländlicher Dörfer mit eisenharter Preis-Integrität. Am normalen Werktag tagsüber öffnen wir eine schlicht zugezogene Tür absolut beschädigungsfrei für einen Fixbetrag ab 99 Euro. Um die Fahrtkosten für den Sprinter abzugelten, berechnen wir stufenlose 15 Euro Zufuhr. Erstklassige handwerkliche Notöffnung darf und muss kalkulierbar sein und auch rund um die Burg Vetzberg.</p>`,
        localTestimonials: [
            { name: "Fam. R.", quote: "Windstoß, alte schwere Haustür zu. Wir standen am Hanghaus im Nieselregen. Der Handwerker war in null Komma nichts aus Wetzlar hochgekommen, schob eine Karte in den Schlitz und die Tür war komplett kratzerfrei wieder offen. 114 Euro und Wahnsinnig gut.", rating: 5 },
            { name: "Bettina H.", quote: "Der Schlüssel brach in einer völlig veralteten Balkontür ab. Am Samstag angerufen, Herr kam sofort, hat es rausgefischt ohne das Holz drum herum zu ruinieren. Top Service.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Vetzberg? Unser Monteur ist in ca. 14 Minuten bei Ihnen und professionell und zum Festpreis.",
            mainText: `<p>In den traditionsreichen Gassen von <strong>Vetzberg</strong> öffnen unsere sensiblen Techniker Türen mit extremem Fingerspitzengefühl und Respekt vor der Bausubstanz.</p>`,
            serviceZerstörungsfrei: "Selbst bei uralten massiven Holztüren triumphieren unsere sanften Entriegelungsmethoden in Vetzberg meist nahtlos.",
            serviceBohren: "Rostige Schließkasten knacken wir in Ausnahmefällen gezielt per Bohrung und die Rahmenstruktur leidet dabei nie.",
            service247: "Für Vetzberg und Nachbargemeinden steht unser Notruf das ganze Jahr und ob an Weihnachten oder Sonntagnacht und still verfügbar bereit."
        },
        faqs: [
            { question: "Kommen Sie auch nach Vetzberg?", answer: "Ja, Vetzberg gehört zu unserem Einsatzgebiet. Wir sind in ca. 14 Minuten da." },
            { question: "Was kostet der Schlüsseldienst in Vetzberg?", answer: "Zugefallene Türen ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-biebertal", "schluesseldienst-rodheim-bieber", "schluesseldienst-krofdorf-gleiberg"]
    },

    // ━━━━ HOHENAHR und 5 ORTSTEILE ━━━━
    {
        id: "hohenahr-ahrdt",
        slug: "schluesseldienst-ahrdt",
        name: "Ahrdt",
        plz: "35644",
        coordinates: { latitude: 50.6300, longitude: 8.4500 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Ahrdt 24/7 Notdienst", metaDescription: "Schlüsseldienst Ahrdt (Hohenahr): In 16 Min. da. Festpreis ab 99€. Notdienst: 06441-8056279" },
        routeDescription: "In den nördlichsten Zipfel der Gemeinde Hohenahr gelangen unsere Wetzlarer Teams über weitläufige Landstraßen in etwa 16 Minuten.",
        mainRoad: "L3053 / Lokale Landstraßen",
        distanceKm: 15,
        character: "Verschwenderische Natur, tiefe Wälder und übersichtliche familiäre Dorfgemeinschaften prägen diesen Hohenahrer Ortsteil.",
        populationApprox: "~400",
        landmark: "Geografisches Dreiländereck der Kreisgrenzen in der Nähe",
        buildingTypes: "Freistehende Landwohnhäuser, vereinzelte historische Bauernhöfe und ländliche Stall-Anbauten.",
        parkingInfo: "Durch das faktische Dorfprofil und den nicht existierenden Verkehrstrubel parken unsere Monteure immer zielgenau auf dem Hof in Ahrdt.",
        heroVariant: "Schlüsseldienst Ahrdt (Hohenahr). Zerstörungsfreier Service im Waldidyll.",
        fareInfo: "Die Strecke in das naturreiche Ahrdt honorieren wir mit einem fairen Festaufschlag für unseren Service-Pkw von gerade einmal 15 Euro.",
        scenarios: [
            { icon: "home", title: "Tür fällt durch Durchzug zu", description: "Im ländlichen Ahrdt weht ein frischer Wind. Schlägt die Haustür unbeabsichtigt zu, zieht unser Spezialist sie binnen weniger Handgriffe wieder auf." },
            { icon: "shield-alert", title: "Briefkasten-Schlüssel weg", description: "Das kleine Briefkasten-Riegelchen hakt oder der Schlüssel ist verloren? Bevor Sie den Kasten aufbiegen, tauschen wir den kleinen Zylinder günstig aus." },
            { icon: "briefcase", title: "Verwettertes Garagenschloss", description: "Abseitsstehende Garagen erleiden im Hohenahrer Winter oft Korrosion am Schloss. Wir öffnen die Garage schonend und tauschen den Halbzylinder neu aus." }
        ],
        aboutText: `
<p>Weitläufig von schillernden Wäldern und Wiesen umschlossen, ruht das beschauliche <strong>Ahrdt</strong> im nördlichen Teil der Großgemeinde Hohenahr. In diesem äußerst familiären und naturbezogenen Refugium steht die Zeit oft ein kleines bisschen stiller als in den umliegenden Städten. Eine plötzlich verriegelte Haustür oder ein abgebrochener Schlüssel reißen diese Wohlfühlatmosphäre rasant ein. Genau an diesem Punkt tritt der in Wetzlar beheimatete <strong>Schlüsseldienst Ahrdt</strong> auf den Plan, um die ländliche Isolation mit blitzschnellem Service zu durchtrennen.</p>

<h3>Flotter Ritt auf der K-Straße</h3>
<p>Ländliche Gebiete sind für uns nie lästige Peripherie. Dank ausgeklügeltem Navi-Routing und motivierten Monteuren schieben wir uns über die umliegenden Landstraßen zügig nach vorn. Im Optimalfall dauert die Anreise in das tiefe Ahrdt lediglich knappe <strong>16 Minuten</strong>. Sie durchleben bei eiskaltem Regen also keine stundenlange Ungewissheit auf dem kalten Fußabtreter.</p>

<h3>Ahrdt profitiert vom Null-Wucher-Festpreis</h3>
<p>Gerade in kleinen Ortsteilen schlagen dubiose Fern-Dienste eiskalt mit erfundenen Fahrtenschlager-Gebühren zu. Unsere Firmen-Philosophie bricht damit rigoros: Liegt am Werktag eine unkompliziert zugefallene Tür an, rufen wir dafür unsere berühmten 99 Euro Festkosten auf. On top kommt nach Ahrdt nur die 15-Euro Fuhrparkpauschale, und das absolut deckelnd. Niemand fräst ohne Not und Einverständnis teure Edelstahlschlösser kaputt und wir setzen auf nachhaltiges Lockpicking.</p>`,
        localTestimonials: [
            { name: "Fam. Z.", quote: "Der Techniker hat unsere schwere alte Holztür am Bauernhof in Ahrdt mit absolut sanften Hilfsmitteln wieder geöffnet, nachdem ein Windzug diese zugeschlagen hatte. Top Festpreis für die weite Anfahrt.", rating: 5 },
            { name: "S. Neumann", quote: "Sonntagmorgen den Wohnungsschlüssel drinnen vergessen... super schnelle Reaktionszeit. Preis war trotz Sonntagsaufschlag transparent vorher kommuniziert. Kein böses Erwachen in Ahrdt.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Ahrdt? Unser Schlüsseldienst ist in ca. 16 Minuten bei Ihnen und zum fairen Festpreis.",
            mainText: `<p>In der entspannten Ruhe von <strong>Ahrdt</strong> fungiert unser Wetzlarer Einsatzleiter als Ihr rettendes Sicherheitsnetz bei jeder Schlosspanik.</p>`,
            serviceZerstörungsfrei: "Bei Standardaussperrungen sind wir meisterhaft im spurlosen Manipulieren von Klinken und Riegeln.",
            serviceBohren: "Verweigerte Sicherheitsschlösser zerspant unsere Fräsanlage punktgenau. Beschädigungen am edlen Holz von Türrahmen sind absolut Tabu.",
            service247: "Für den äußersten Norden in Ahrdt und ganz Hohenahr leisten wir 24 Stunden lückenlosen Telefonsupport."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Ahrdt?", answer: "In ca. 16 Minuten über die Hohenahr-Verbindungsstraßen." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis und werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-erda", "schluesseldienst-ehringshausen"]
    },
    {
        id: "hohenahr-erda",
        slug: "schluesseldienst-erda",
        name: "Erda",
        plz: "35644",
        coordinates: { latitude: 50.6200, longitude: 8.4700 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Erda Notdienst 24/7", metaDescription: "Schlüsseldienst Erda (Hohenahr): In 15 Min. da. Festpreis ab 99€. Notdienst: 06441-8056279" },
        routeDescription: "Den bevölkerungsreichsten Ortsteil der Gemeinde passieren wir auf direkten Landwegen von Wetzlar aus häufig schon nach staufreien 15 Minuten.",
        mainRoad: "L3053 / Gewerbegebiet Erda",
        distanceKm: 14,
        character: "Ein lebendiger Ortsteil und administratives Zentrum von Hohenahr mit starken gewerblichen Ausrichtungen sowie gepflegten Familiengebieten.",
        populationApprox: "~2.000",
        landmark: "Rathaus Hohenahr in Erda / Dünsberg-Nähe",
        buildingTypes: "Solide Ein- und Zweifamilienhaus-Reihen, Verwaltungsbauten, moderne Gewerbehallen und Einkaufsmärkte.",
        parkingInfo: "Durch das urbane, aber großzügige Layout im Erdaer Gewerbe- und Wohnmischgebiet gibt es für den Notdienst keinerlei Parkraumsorgen.",
        heroVariant: "Schlüsseldienst Erda (Hohenahr). Transparenz direkt vor Ort.",
        fareInfo: "Die Strecke hinauf nach Erda verknüpfen wir mit dem vollkommen durchsichtigen Transportkosten-Anteil von glatt 15 Euro.",
        scenarios: [
            { icon: "home", title: "Aussperrung in Siedlung", description: "Sie verlassen Ihr Eigenheim in Erda nur auf Socken und die Tür schnappt ins Schloss? Sanfte Kunststoff-Gleitkarten öffnen die Tür spurenfrei in Sekunden." },
            { icon: "shield-alert", title: "Verklemmte Rathaus-Nebentüren", description: "Veraltete Riegel an Verwaltungstrakten oder Gewerbe-Einheiten reparieren unsere Techniker kompetent, notfalls via Zylinder-Auffräsung." },
            { icon: "briefcase", title: "Mehrfachverriegelung defekt", description: "Wenn das Sicherheitsschloss im Wohngebiet blockiert: Wir kennen die komplexe ABUS, BKS und Kessel-Mechanik im Effeff." }
        ],
        aboutText: `
<p>Als pulsierender Hauptort und Sitz der Gemeindeverwaltung von Hohenahr verschmilzt <strong>Erda</strong> ländliche Gelassenheit mit wichtiger lokaler Gewerbe- und Einzelhandelsstruktur. Doch auch in diesem belebten Mix schlägt der Teufel oft im Detail zu: Ein verlorener Schlüsselbund beim Einkaufen oder eine vor der Nase zuschlagende Haustür lassen den Tag panisch entgleisen. Gut, dass das bestens vernetzte Team vom Wetzlarer <strong>Schlüsseldienst Erda</strong> für jede Schließanlagen-Anomalie direkt ansprechbar ist.</p>

<h3>Schnurgerade ins Zentrum</h3>
<p>Wenn das Telefon klingelt, sitzen unsere Monteure blitzschnell im Fahrzeug. Die Strecke hoch nach Erda wird über die L3053 zügig und abseits der großen Verkehrsknoten abgefahren. So stempeln wir unsere Ankunftszeit vor Ort durchschnittlich nach bemerkenswerten <strong>15 Minuten</strong>. Gerade vor Praxen, bei Büros oder an frostigen Tagen zählt jede Sekunde.</p>

<h3>Preise am helllichten Tag und bei tiefster Nacht</h3>
<p>Erda wird auf unserer Tarif-Karte als vollumfänglicher Standardort bedient. Bei schlicht geschlossenen (nicht mechanisch versperrten) Hausportalen liegt dieser Betrag für Sie kalkulierbar bei 99 Euro Festpreis tagsüber. Zuzüglich fordern wir ehrliche 15 Euro Zufuhrpauschale, um den KFZ-Betrieb zu finanzieren. Auch wenn unser Techniker gezwungen ist, an einer gewerblichen Sicherheitstür zu zerspanen, hören Sie von uns exakt den Folgepreis, ehe das Bohrwerk läuft. Vertrauen durch Ehrlichkeit.</p>`,
        localTestimonials: [
            { name: "Verwaltung H.", quote: "Der Kollege kam direkt nach Erda und half uns am Seiteneingang des Betriebsgeländes. Das Kastenschloss hing fest. Konnte zerstörungsfrei gepickt werden, extrem kompetent und vor allem mit ordentlicher Rechnung abgewickelt.", rating: 5 },
            { name: "K. Braun", quote: "Meine Tochter hatte sich im Neubau-Gebiet in Erda aus dem Haus gesperrt. Ich rief diesen Dienst an. 99 Euro Festpreis plus 15 Euro Fahrt hieß es am Handy, genau das stand per EC-Terminal auf der Quittung. Die Tür hatte keinen Macken.", rating: 5 }
        ],
        content: {
            heroIntro: "Tür zu in Erda? Wir sind in ca. 15 Minuten bei Ihnen und kompetent und zum Festpreis.",
            mainText: `<p>In <strong>Erda</strong>, dem lebendigen Herzstück von Hohenahr, leisten wir Aufsperrhilfe der Spitzenklasse und verlässlich ohne jegliche Knebelverträge.</p>`,
            serviceZerstörungsfrei: "In rund 99 Prozent der simplen Tür-Zufälle entriegeln unsere Meister das Türblatt in Erda absolut spurenlos.",
            serviceBohren: "Verriegelte Gebäude oder schwer defekte Zylinder lösen wir durch kontrolliertes Aufbohren und ersetzen das Material normgerecht durch DIN EN-Ware.",
            service247: "Für Erda und dem Sitz der Gemeinde Hohenahr und garantieren wir 24/7 ununterbrochene Dienst-Bereitschaft."
        },
        faqs: [
            { question: "Öffnen Sie in Erda auch Gewerberäume?", answer: "Ja, wir öffnen Wohnungs-, Haus-, Büro- und Gewerbe-Türen in Erda." },
            { question: "Was kostet der Schlüsseldienst?", answer: "Ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-ahrdt", "schluesseldienst-grossaltenstaedten"]
    },
    {
        id: "hohenahr-grossaltenstaedten",
        slug: "schluesseldienst-grossaltenstaedten",
        name: "Großaltenstädten",
        plz: "35644",
        coordinates: { latitude: 50.6150, longitude: 8.4550 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Großaltenstädten 24/7", metaDescription: "Schlüsseldienst Großaltenstädten (Hohenahr). 14 Min. Anfahrt. Ab 99€ Festpreis. Jetzt: 06441-8056279" },
        routeDescription: "Über die Höhenzüge und Erda fahren wir Großaltenstädten im Durchschnitt nach nur 16 Minuten verlässlich von Wetzlar aus an.",
        mainRoad: "L3053 / Bergstraße",
        distanceKm: 15,
        character: "Ländlich geprägter, von weitläufiger Landwirtschaft und Wäldern umgebener Ortsteil von Hohenahr mit traditionellem Dorfkern.",
        populationApprox: "~750",
        landmark: "Historische Backhäuser im Dorfkern / Naturpark Lahn-Dill-Bergland Variante",
        buildingTypes: "Uralte Fachwerkbauten, klassische ländliche Hofreiten und gelegentlich modernisierte Mehrgenerationen-Häuser.",
        parkingInfo: "Dank der lockeren Bebauung und großzügiger Hofeinfahrten parken wir in Großaltenstädten direkt am Ort des Geschehens.",
        heroVariant: "Schlüsseldienst Großaltenstädten. Türöffnungen ohne ländliche Extra-Kosten.",
        fareInfo: "Die Anreise auf die Hohenahrer Höhen nach Großaltenstädten deckeln wir auf einen bescheidenen KFZ-Obolus von 15 Euro.",
        scenarios: [
            { icon: "home", title: "Defektes Haustürschloss", description: "In den alten Fachwerkhäusern klemmen oft jahrzehntealte Anlagen. Wir warten oder tauschen alte Zylinder günstig gegen sichere DIN-Neuware aus." },
            { icon: "shield-alert", title: "Scheunentor verriegelt", description: "Rostige Hangschlösser an alten Hof- und Scheunentoren trennen unsere Wetzlarer Schlosser mit Akku-Werkzeug zügig und günstig auf." },
            { icon: "briefcase", title: "Schlüssel bei Gartenarbeit weg", description: "Gartenarbeit rund ums Haus, Tür weht zu? Kein Problem, mit einer sanften Kunststoff-Türkarte hebeln wir klassische Türen schonend wieder auf." }
        ],
        aboutText: `
<p>Umhüllt vom Lahn-Dill-Bergland bietet <strong>Großaltenstädten</strong> als Teil von Hohenahr urigen Dorfcharakter, ländliche Gemeinschaft und eine traumhafte Naturkulisse. Fachwerk und alte Höfe zeugen von großer landwirtschaftlicher Tradition. Eine durch Zugluft zugefallene, schwere Eichentür oder ein abgerissener Schlüssel an den alten Schlössern raubt Betroffenen oft den Nerv und besonders wenn eisiger Wind über die Höhen pfeift. Ein Anruf in Wetzlar genügt und der <strong>Schlüsseldienst Großaltenstädten</strong> ist in kürzester Zeit mit warmem Licht und ruhiger Hand zur Stelle.</p>

<h3>Flotte Reaktion, keine Landflucht</h3>
<p>Obwohl Großaltenstädten weit abseits der Lahn-Metropolen liegt, behandeln wir diesen Ortsteil mit höchster Alarmierungs-Priorität. Durch unser zentrales Routing aus Wetzlar über Erda erreichen unsere Mechaniker in ca. <strong>16 Minuten</strong> den idyllischen Ortskern. Keine ewige Wartezeit, kein nervöses Auf-und-Ab-Gehen vor der Tür.</p>

<h3>Unsere eiserne Festpreis-Garantie</h3>
<p>Dorfbewohner tappen oft in die Kostenfalle von weit entfernten Vermittler-Zentralen. Unsere Wetzlarer Strategie lautet: 99 Euro für die zugezogene Wohnungs- oder Haustür auf glatter Tagesbasis. Zu dieser transparent kalkulierten Fix-Leistung gesellt sich nach Großaltenstädten ausschließlich eine geringe, statische Auto-Pauschale in Höhe von 15 Euro. Nichts ist versteckt, jede Eventualität offengelegt. Wir öffnen lieber spurlos, reparieren fair und montieren bei Bedarf hochwertigen Schloss-Ersatz direkt aus unserem Transporter.</p>`,
        localTestimonials: [
            { name: "S. K.", quote: "Mein Schlüssel klemmte derart in der alten Hoftür, dass er abbrach. Der Mechaniker aus Wetzlar entfernte den Rest, hat das Schloss mit Spezialöl gerettet und nahm exakt die 114 Euro. Absolut ehrenhaft für Großaltenstädten.", rating: 5 },
            { name: "Fam. Gerlach", quote: "Aufgrund von Durchzug knallte die Tür an einem Sonntag zu. Wir standen nur mit T-Shirt draußen. Er brauchte knapp 20 Minuten bis Großaltenstädten und öffnete absolut sanft mit einem Draht in Sekunden. Spitzen Handwerker.", rating: 5 }
        ],
        content: {
            heroIntro: "Schlüsselverlust in Großaltenstädten? Wir sind in ca. 16 Minuten bei Ihnen und absolut transparent.",
            mainText: `<p>In der beschaulichen Stille von <strong>Großaltenstädten</strong> operieren unsere Servicetechniker als Fels in der Brandung und hochprofessionell, regional und zu humanen Dorf-Preisen.</p>`,
            serviceZerstörungsfrei: "Unser Equipment verarztet zugefallene, historische Haus-Eingänge bei rund 99% aller Einsätze ganzheitlich ohne den kleinsten Makel.",
            serviceBohren: "Verkeilte Schlossanlagen werden exakt gefräst, das teure Holz Ihrer antiken Holztür bleibt gänzlich intakt, als wäre nie etwas gewesen.",
            service247: "Für das Hohenahrer Umland und Großaltenstädten greift unser 100%iges Versprechen auf 24-stündige Präsenz, ganzjährig."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Großaltenstädten?", answer: "In ca. 14 Minuten über die Hohenahr-Verbindungsstraßen." },
            { question: "Was kostet die Türöffnung?", answer: "Ab 99 Euro Festpreis und zuverlässig und transparent." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-erda", "schluesseldienst-klein-altenstaedten"]
    },
    {
        id: "hohenahr-hohensolms",
        slug: "schluesseldienst-hohensolms",
        name: "Hohensolms",
        plz: "35644",
        coordinates: { latitude: 50.6100, longitude: 8.4400 },
        logistics: { drivingTimeMinutes: "15", distanceFromHQ: 14 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Hohensolms Notdienst 24/7", metaDescription: "Schlüsseldienst Hohensolms (Hohenahr): In 15 Min. da. Festpreis ab 99€. Jetzt: 06441-8056279" },
        routeDescription: "Über teils kurvige Aufstiege am Dünsberg-Massiv navigieren wir nach Hohensolms in konstanten 17 Minuten.",
        mainRoad: "L3053 / Höhenwege",
        distanceKm: 16,
        character: "Ein wunderschöner, hoch über dem Tal liegender historischer Ort, dominiert von der Burg Hohensolms und geprägt von dörflicher Idylle.",
        populationApprox: "~650",
        landmark: "Burg Hohensolms / Christuskirche",
        buildingTypes: "Sehr alte Fachwerkstruktur um die Burg herum, klassische Landhäuser und einzelne moderne Neubauten am Hang.",
        parkingInfo: "Trotz der historischen Straßen in Burgnähe rangieren wir clever und finden für unseren Werkzeugwagen auf der Höhe in Hohensolms immer eine Lücke.",
        heroVariant: "Schlüsseldienst Hohensolms. Unbeschädigte Türöffnung in Burgnähe.",
        fareInfo: "Die Auffahrt nach Hohensolms stellen wir lediglich mit unserer statischen 15-Euro-Kfz-Reisepauschale in Rechnung.",
        scenarios: [
            { icon: "home", title: "Zugefallene Eichentür", description: "Im Wind auf dem Berg weht die schöne historische Haustür zu. Wir agieren absolut holzschonend: Mit professionellem Sperrzeug ziehen wir die Falle auf." },
            { icon: "shield-alert", title: "Verwitterter Burg-Zylinder", description: "Schlösser an exponierter Höhenlage vereisen und korrodieren im Winter drastisch. Defekte Anlagen tauschen wir umgehend gegen neue BKS Zylinder." },
            { icon: "briefcase", title: "Gefahr im Treppenhaus", description: "Kind in der Wohnung, Herd an, Tür zu? Wir nutzen Sondersignale, fahren im Not-Tempo auf den Berg und sind in weit unter 20 Min in Hohensolms." }
        ],
        aboutText: `
<p>Majestätisch thront <strong>Hohensolms</strong> als höchstgelegener und historisch markantester Ortsteil der Gemeinde Hohenahr. Umgeben von der weithin sichtbaren Burg Hohensolms pflegt dieser Ort eine tiefe Traditionsverbundenheit. Weht jedoch der raue Herbstwind kräftig über die Bergrücken und drückt das eigene Haustürblatt ins Schloss, offenbart die Idylle ihre Kehrseite. Ein abgebrochener Schlüssel bei Minusgraden erfordert keine Verzweiflung, sondern das rasche Einschreiten vom ortsnahen Wetzlarer <strong>Schlüsseldienst Hohensolms</strong>.</p>

<h3>Bergfahrt in Rekordzeit</h3>
<p>Unsere Leitstelle dirigiert die Servicekräfte für Hohensolms so, dass die Anstiege effizient gebündelt werden. Resultat: In rund <strong>17 Minuten</strong> parken unsere Einsatzwagen vor Ort in Ihrer Einfahrt oder am Burgfuß. Das Warten im eiskalten Burgwind minimieren wir auf den absoluten Bruchteil des branchenüblichen Durchschnitts.</p>

<h3>Klare Tarife statt unverschämter Höhen-Aufschläge</h3>
<p>Es existiert kein "Höhenmeter-Zuschlag". Transparenz ist das einzige, was zählt. Wenn die Falle (ohne aktives Verriegeln) ins geschlossene Schließblech gerutscht ist, rufen wir werktags tagsüber bescheidene 99 Euro Festpreis auf. Die Sprit-Pauschale nach Hohensolms macht magere 15 Euro aus. Wir verzichten radikal auf das stumpfe Aufbohren, solange das Material keinen tiefgreifenden, irreversiblen Defekt aufweist. In diesen extrem seltenen Fallen kommunizieren wir alle weiteren Schritte und Preise absolut haargenau voraus.</p>`,
        localTestimonials: [
            { name: "S. Hoffmann", quote: "Direkt oben an der Burg wohnhaft. Haustür (massives Holz) abends zugezogen. Der Schlüsseldienst kam sehr flink, hantierte mit so einer Gummi-Gleitkarte und die Tür war sofort auf, ohne jede Macke. 114 Euro. Besser gehts nicht.", rating: 5 },
            { name: "Fam. L.", quote: "Der Techniker erklärte den defekten Schließzylinder, bot mir Alternativen an und bohrte extrem vorsichtig aus. Ich bin handwerklich selbst fit und konnte sehen, dass der Mann 100% profi ist. Fair und schnell.", rating: 5 }
        ],
        content: {
            heroIntro: "Schlüssel verloren in Hohensolms? Wir kommen in ca. 17 Minuten und zum transparenten Festpreis.",
            mainText: `<p>In den historischen Gefilden von <strong>Hohensolms</strong> greift unser seriöses Wetzlarer Team auf feinfühlige Handwerksmethoden zurück und exklusiv und verlässlich.</p>`,
            serviceZerstörungsfrei: "Bei einfachen Aussperrungen siegt fast immer unser Fingerspitzengefühl. Ihre historische oder moderne Hausfront in Hohensolms bleibt unangetastet.",
            serviceBohren: "Verklemmen stark mechanische Riegelschlösser bohren wir bedacht. Holz, Rahmen und Beschläge leiden nicht.",
            service247: "Auf unsere Rufnummer aus Wetzlar ist für alle Anwohner in Hohensolms 24/7 kompromisslos Verlass."
        },
        faqs: [
            { question: "Kommen Sie auch nach Hohensolms?", answer: "Ja, Hohensolms gehört zu unserem Einsatzgebiet. Wir sind in ca. 15 Minuten da." },
            { question: "Können Sie historische Türen öffnen?", answer: "Ja, wir sind auf alle Türarten spezialisiert, auch antike Beschläge und historische Schlösser." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-grossaltenstaedten", "schluesseldienst-kraftsolms"]
    },
    {
        id: "hohenahr-mudersbach",
        slug: "schluesseldienst-mudersbach",
        name: "Mudersbach",
        plz: "35644",
        coordinates: { latitude: 50.6250, longitude: 8.4600 },
        logistics: { drivingTimeMinutes: "16", distanceFromHQ: 15 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Mudersbach 24/7", metaDescription: "Schlüsseldienst Mudersbach (Hohenahr): In 16 Min. da. Ab 99€ Festpreis. Jetzt: 06441-8056279" },
        routeDescription: "Auf direkten Forst- und Landstraßenbahnen erreichen wir den tief in der Natur gelegenen Ort Mudersbach in kalkulierten 18 Minuten.",
        mainRoad: "Ortsstraße Mudersbach",
        distanceKm: 17,
        character: "Ruhiger, tiefer Wald-Ortsteil von Hohenahr mit starken dörflichen Bindungen und absoluter Nähe zur Natur.",
        populationApprox: "~500",
        landmark: "Aartalsee-Richtung / Dörflicher Dorfplatz Mudersbach",
        buildingTypes: "Landwirtschaftliche Altbestände, kleinere Einfamilienhäuser und großzügige Waldrand-Grundstücke.",
        parkingInfo: "Durch das kaum vorhandene Verkehrsaufkommen und ländliche Hof-Strukturen ist das Parken am Schadensort stets unkompliziert möglich.",
        heroVariant: "Schlüsseldienst Mudersbach. Verlässliche Hilfe mitten im Dorf.",
        fareInfo: "Den Weg von Wetzlar in das naturverbundene Mudersbach kompensieren wir mit fairen und glatten 15 Euro KFZ-Pauschale.",
        scenarios: [
            { icon: "home", title: "Haustür nach Waldspaziergang zu", description: "Sie kommen vom Hundespaziergang am Wald, merken der Schlüssel fehlt und die Tür ist verriegelt? Unser Pick-Arsenal knipst die Falle ohne Zerstörung auf." },
            { icon: "shield-alert", title: "Kalte Nebengebäude klemmen", description: "Feuchtigkeit aus dem nahen Forst lässt Beschläge an Garagen blockieren. Wir öffnen die Garage schonend und wechseln auf wetterdichte Markenware." },
            { icon: "briefcase", title: "Verklemmte Schiebetüren", description: "Frost in Mudersbach macht Holzhaustüren stur. Sollte der Schlüssel in der Mechanik abbrechen, extrahieren wir ihn sanft mit filigranen Ausziehaken." }
        ],
        aboutText: `
<p>Verborgen inmitten der mittelhessischen Höhenzüge von Hohenahr, bildet der Ortsteil <strong>Mudersbach</strong> eine absolute Oase der Natur- und Waldverbundenheit. Hier leben Familien, die den dörflichen Rückzug schätzen. Abgeschnitten darf man sich deshalb aber im Notfall nicht fühlen: Wer sich vor seinem Bauernhof oder seinem Eigenheim ausgesperrt wiederfindet und während der Kamin drinnen noch brennt und benötigt Soforthilfe. Der bestens vernetzte <strong>Schlüsseldienst Mudersbach</strong>, als direkter Ableger der Wetzlarer Zentrale, löst derartige blockierte Türen rasch, präzise und zu ehrlichen Landtarifen.</p>

<h3>Pünktlich am Rande der Gemeinde</h3>
<p>Ländliche Abgeschiedenheit erfordert starke Routing-Kompetenz. Unsere Fahrzeuge kennen jede Nebenstraße und benötigen von Wetzlar aus maximal etwa <strong>18 Minuten</strong> in das Herz von Mudersbach. So sind stundenlanges Frösteln im Freien und nervenzehrendes Warten auf auswärtige Monteure hier niemals ein Thema.</p>

<h3>Wir deckeln alle Fahrtkosten radikal auf 15 Euro</h3>
<p>Böse Überraschungen oder fiktive "Anfahrtsgebiete" (Tarif-Zonen) existieren bei uns bewusst nicht. Eine klassische Tag-Öffnung für lediglich ins Schloss gefallene Portale fakturieren wir zu humanen 99 Euro. Darauf packen wir vollkommen transparent exakt 15 Euro für unseren gelisteten KFZ-Anfahrtsweg. Versagende Bauteile (Schließkasten verklemmt) fräsen wir nach genauer Rücksprache fair und exakt aus. Mudersbach kann sich auf unsere regionalen Handwerkerwerte komplett verlassen.</p>`,
        localTestimonials: [
            { name: "Julian F.", quote: "Der Techniker war extrem motiviert und in weniger als 20 Minuten nach unserem Anruf in Mudersbach. Das Türschloss an der Gartentür klemmte total. Er öffnete es schonend und die Rechnung stimmte aufs Wort überein.", rating: 5 },
            { name: "Fam. Göbel", quote: "Sonntags-Tarif vorab telefonisch durchgegeben. Keine verdeckten Kilometer-Pauschalen. Sehr gute Werkzeuge und sympathischer Handwerker am Werk.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Mudersbach? Unser Schlüsseldienst ist in ca. 18 Minuten bei Ihnen und absolut fair.",
            mainText: `<p>In den grünen Winkeln von <strong>Mudersbach</strong> rücken unsere fachmännischen Monteure ohne Verzug aus, um Ihnen Stress und Beschädigungen zu ersparen.</p>`,
            serviceZerstörungsfrei: "Fast jede glatt zugezogene Eingangsfront in Mudersbach deblockieren wir unter Anwendung von reinem Fingerspitzengefühl und Plastikkarten beschädigungsfrei.",
            serviceBohren: "Verriegeltes Material am Schlosskörper zerspanen wir erst dann, wenn physikalisch keine andere Möglichkeit mehr offen steht. Sie werden informiert.",
            service247: "Für das beschauliche Mudersbach im Kreisgebiet gelten die vollen 24-stündigen Rufbereitschaften unserer Zentrale ohne Pausen."
        },
        faqs: [
            { question: "Kommen Sie bis nach Mudersbach?", answer: "Ja, Mudersbach gehört zu unserem regulären Einsatzgebiet. Anfahrt ca. 16 Minuten." },
            { question: "Was kostet eine Türöffnung?", answer: "Ab 99 Euro Festpreis und werktags tagsüber." }
        ],
        neighbors: ["schluesseldienst-hohenahr", "schluesseldienst-erda", "schluesseldienst-ahrdt"]
    },

    // ━━━━ LEUN und STOCKHAUSEN ━━━━
    {
        id: "leun-stockhausen",
        slug: "schluesseldienst-stockhausen",
        name: "Stockhausen",
        plz: "35638",
        coordinates: { latitude: 50.5600, longitude: 8.3700 },
        logistics: { drivingTimeMinutes: "14", distanceFromHQ: 13 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Stockhausen Lokal 24/7 Notdienst", metaDescription: "Schlüsseldienst Stockhausen bei Leun: In 14 Min. da. Festpreis ab 99€. Jetzt: 06441-8056279" },
        routeDescription: "Über die Bundesstraße B49 steuern wir aus Wetzlar den Lahn-Ort Stockhausen blitzschnell an und oft unter 14 Minuten.",
        mainRoad: "B49 / Lahnstraße",
        distanceKm: 13,
        character: "Direkt an der Lahn gelegener Ortsteil von Leun. Perfekte Verkehrsanbindung an die Bundesstraße mit typischem Lahn-Charme.",
        populationApprox: "~1.100",
        landmark: "Lahnufer Stockhausen / Stockhäuser Bahnhof",
        buildingTypes: "Solide Ein- und Mehrfamilienhausbebauung, vereinzelte Mehrfamilienwohnblöcke und typische Lahn-Gehöfte.",
        parkingInfo: "Durch breite Seitenstraßen und gute urbane Planung parken unsere Monteure in Stockhausen immer nur wenige Meter entfernt.",
        heroVariant: "Schlüsseldienst Stockhausen (Leun). Blitzhilfe direkt an der Lahn.",
        fareInfo: "Die schnelle Anfahrt über die B49 berechnen wir vollkommen pauschal und fair mit genau 15 Euro KFZ-Anteilen.",
        scenarios: [
            { icon: "home", title: "Lahntal-Aussperrungen", description: "Sie kommen von einer Lahn-Radtour zurück und der Wohnungsschlüssel in der Packtasche fehlt? Zugezogene Türen poppen wir in Sekunden ohne Bohrspäne auf." },
            { icon: "shield-alert", title: "Klemmschloss im Einfamilienhaus", description: "Defekte Profilzylinder fräsen unsere Wetzlarer Techniker auch sonntags professionell aus dem Rahmenblatt und montieren hochsicheren BKS-Ersatz in Minuten." },
            { icon: "briefcase", title: "Verlorener Balkonschlüssel", description: "Den Schlüssel zum Terrasseneingang verloren? Wir rücken an, entsperren den alten Schließkasten und rüsten ein moderne Sicherheitsschloss nach." }
        ],
        aboutText: `
<p>Malerisch ans Lahnufer geschmiegt, punktet der Leuner Ortsteil <strong>Stockhausen</strong> mit viel Natur direkt vor der Haustür, kombiniert mit einer unglaublich verkehrsgünstigen Lage neben der B49. Fahrradfahren, Spaziergänge oder schnelle Pendlertouren nach Wetzlar prägen den Rhythmus. Doch wehe, die schwere Haustür fällt durch einen plötzlichen Luftzug unkontrolliert zu und bleibt verriegelt. Anstatt in Stress zu verfallen, sollten Anwohner aus Stockhausen direkt die Telefonnummer vom regionalen <strong>Schlüsseldienst Stockhausen</strong> (Schluessel-Schmiede) wählen.</p>

<h3>Die B49 als Fast-Track zu Ihnen</h3>
<p>Dank der überragenden Verkehrsstruktur der B49 gibt es bei Einsätzen in Stockhausen praktisch kaum Verzögerungen. Rufen Sie unsere Wetzlarer Zentrale an, sitzt wenige Sekunden später ein erfahrener Fachmonteur im Transporter und legt die Strecke meist problemlos in rekordverdächtigen <strong>14 Minuten</strong> zurück. Keine ewigen Wartezeiten und Sie stehen garantiert nicht lange auf der Schwelle.</p>

<h3>Wir kappen die Preise bei 15 Euro Anfahrt</h3>
<p>Schlüsseldienste sind Vertrauenssache. Damit keine Abzock-Summen entstehen, operieren wir mit unverfälschten Werten. Ist die Haus- oder Wohnungstür in Stockhausen schlichtweg unbeabsichtigt zugefallen, deblockieren wir die Falle werktags (tagsüber) zu humanen 99 Euro. Auf den schnellen Weg über die Bundesstraße entfallen lediglich starre 15 Euro Fahrpauschale. Unsere Techniker greifen erst dann zum Stahl-Bohrer, wenn tiefere Mechanikschäden es unabwendbar fordern und und immer in enger Kommunikation mit Ihnen.</p>`,
        localTestimonials: [
            { name: "Fam. Z.", quote: "Es ging über die Bundesstraße grandios schnell. Nach knapp einer Viertelstunde stand der gute Mann hier in Stockhausen auf dem Gehweg. Keine Beschädigung an der Tür, Rechnung lag bei 114 Euro. Alles glatt und seriös.", rating: 5 },
            { name: "Lukas B.", quote: "Der Techniker hat mir an einem Freitagabend in Stockhausen das klemmende Haustürschloss zügig zerlegt, das alte Material entsorgt und ein einwandfreies, neues montiert. Die Preise waren, wie vorher am Telefon ausgemacht.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Stockhausen? Unser Fachmonteur ist in ca. 14 Minuten bei Ihnen und absolut seriös.",
            mainText: `<p>Direkt an der Lahn operierend, garantiert unser <strong>Stockhausener</strong> Einsatzdienst handwerkliche Bravour ohne Schmierereien oder undurchsichtige Rechnungen.</p>`,
            serviceZerstörungsfrei: "Bei Standardaussperrungen sind zerstörungsfreie und rahmenschonende Handgriffe unsere absolut oberste Direktive.",
            serviceBohren: "Verkeilte Hebel und Schlösser bohren wir zentimetergenau, tauschen das Material auf DIN-Werte auf und erhalten das Türblatt im Originalzustand.",
            service247: "Für den gesamten Raum Leun-Stockhausen laufen die Wetzlar-Drähte das ganze Jahr rund um die Uhr völlig offen in der Notdienst-Schaltung."
        },
        faqs: [
            { question: "Wie weit ist Stockhausen?", answer: "Ca. 13 km und über die B49 sind wir in rund 14 Minuten in Stockhausen." },
            { question: "Was kostet der Schlüsseldienst?", answer: "Zugefallene Türen öffnen wir ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-leun", "schluesseldienst-biskirchen", "schluesseldienst-bissenberg"]
    }
];
