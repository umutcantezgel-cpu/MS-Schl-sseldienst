import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

export const ring4cLocations: LocationData[] = [
    // --- 1. HEUCHELHEIM AN DER LAHN ---
    {
        id: "heuchelheim",
        slug: "schluesseldienst-heuchelheim",
        name: "Heuchelheim an der Lahn",
        plz: "35452",
        coordinates: { latitude: 50.5847, longitude: 8.6306 },
        logistics: {
            drivingTimeMinutes: "10-15",
            distanceFromHQ: 11,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Heuchelheim Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Heuchelheim an der Lahn: 24h Notdienst ab 99€ Festpreis. Zerstörungsfreie Türöffnung, in 10-15 Min. vor Ort. Jetzt anrufen: 06441-8056279",
        },
        routeDescription: "Von unserer Wetzlarer Zentrale über die B49 oder direkt entlang der L3020 über Dorlar und Atzbach in ca. 10 bis 15 Minuten direkt nach Heuchelheim und Kinzenbach.",
        mainRoad: "B49 / L3020",
        distanceKm: 11,
        character: "Lebendige Lahntalgemeinde mit ~8.000 Einwohnern, bestehend aus Heuchelheim und Kinzenbach, geprägt von Gewerbe, Wohngebieten und Seenlandschaften.",
        populationApprox: "~8.000",
        landmark: "Heuchelheimer Silbersee & Heimatmuseum",
        buildingTypes: "Mischung aus historischen Dorfkernen, gepflegten Einfamilienhaussiedlungen, modernen Mehrfamilienhäusern und Gewerbearealen.",
        parkingInfo: "Gute Parksituation in Wohn- und Gewerbegebieten, unsere Monteure parken direkt vor der Tür.",
        heroVariant: "Schlüsseldienst für Heuchelheim & Kinzenbach. 24/7 Notdienst zum Festpreis.",
        fareInfo: "Heuchelheim liegt im direkten Nachbarbereich von Wetzlar. Faire 15 Euro Anfahrtspauschale für ganz Heuchelheim und Kinzenbach.",

        scenarios: [
            {
                icon: "home",
                title: "Wohnhaus Heuchelheim: Tür zugefallen",
                description: "Beim Gang zur Mülltonne oder Gartenarbeit ist die Haustür ins Schloss gefallen? Wir öffnen Ihre Tür schnell, schonend und zu 100% zerstörungsfrei."
            },
            {
                icon: "shield-alert",
                title: "Schlüsselverlust am Silbersee",
                description: "Beim Spaziergang oder Baden am Heuchelheimer See den Schlüsselbund verloren? Unser Notdienst fertigt vor Ort neue Zylinder und sichert Ihr Zuhause."
            },
            {
                icon: "briefcase",
                title: "Gewerbegebiet Heuchelheim / Kinzenbach",
                description: "Bürotür klemmt oder Lagerschloss defekt? Wir helfen Gewerbetreibenden zügig und ohne Betriebsunterbrechung."
            }
        ],

        aboutText: `
<p><span class="font-bold text-[color:var(--text-primary)]">Heuchelheim an der Lahn</span> mit seinem Ortsteil <span class="font-bold text-[color:var(--text-primary)]">Kinzenbach</span> ist eine florierende Gemeinde mit rund 8.000 Einwohnern, die sich harmonisch zwischen Wetzlar und Gießen ins Lahntal einbettet. Die Nähe zu den Naherholungsgebieten rund um den <span class="font-bold text-[color:var(--text-primary)]">Heuchelheimer Silbersee</span>, gepflegte Wohnviertel und eine lebendige Vereinskultur machen Heuchelheim zu einem beliebten Wohn- und Wirtschaftsstandort. Für unseren <span class="font-bold text-[color:var(--text-primary)]">Schlüsseldienst Heuchelheim</span> bedeutet die direkte Nachbarschaft zu Wetzlar: Wir sind in Rekordzeit bei Ihnen vor Ort.</p>

<h3>10 bis 15 Minuten Anfahrt nach Heuchelheim</h3>
<p>Dank der schnellen Verbindung über die <span class="font-bold text-[color:var(--text-primary)]">B49</span> sowie die Landstraße über Lahnau erreichen unsere Servicetechniker jedes Ziel in Heuchelheim und Kinzenbach in der Regel in nur <span class="font-bold text-[color:var(--text-primary)]">10 bis 15 Minuten</span>. Sie müssen bei einer Aussperrung nicht lange in Kälte oder Regen ausharren.</p>

<h3>Zerstörungsfreie Türöffnungen als oberstes Gebot</h3>
<p>In Heuchelheim treffen wir auf eine gesunde Mischung aus modernen Mehrfachverriegelungen in Neubauten und soliden Holztüren in den älteren Ortskernen. Unsere Monteure sind mit modernstem Spezialwerkzeug ausgestattet: Zugefallene Türen öffnen wir in über 99% der Fälle absolut beschädigungsfrei – ohne Bohren, ohne Kratzer am Beschlag und ohne Folgeschäden.</p>

<h3>Faire Festpreise ohne versteckte Kosten</h3>
<p>Transparenz ist unser Markenzeichen: Wir nennen Ihnen bereits am Telefon den verbindlichen Gesamtpreis inklusive Anfahrt. Keine unkalkulierbaren Zuschläge, keine bösen Überraschungen bei der Abrechnung.</p>
`,

        localTestimonials: [
            {
                name: "Tobias M.",
                quote: "Tür in Heuchelheim beim Müllraustragen zugefallen. Nach 12 Minuten war der Techniker da und nach 2 weiteren Minuten war die Tür auf. Absolut erstklassiger Service zum fairen Preis!",
                rating: 5
            },
            {
                name: "Martina S.",
                quote: "Schlüssel in Kinzenbach im Schloss abgebrochen. Der Notdienst hat das Schloss fachmännisch getauscht und neue Schlüssel übergeben. Sehr freundlich und kompetent.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgesperrt in Heuchelheim an der Lahn oder Kinzenbach? Unser 24h Notdienst ist in ca. 10-15 Minuten vor Ort. Festpreisgarantie ab 99€.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Wie schnell ist der Schlüsseldienst in Heuchelheim?",
                answer: "Durch unsere Nähe in Wetzlar erreichen wir Heuchelheim und Kinzenbach in ca. 10 bis 15 Minuten über die B49 oder L3020."
            },
            {
                question: "Was kostet eine Notöffnung in Heuchelheim?",
                answer: "Eine zugefallene Tür öffnen wir tagsüber zum Festpreis von 99€ zuzüglich 15€ transparenter Anfahrtspauschale."
            }
        ],
        neighbors: ["schluesseldienst-giessen", "schluesseldienst-lahnau", "schluesseldienst-wettenberg", "schluesseldienst-biebertal"]
    },

    // --- 2. LICH ---
    {
        id: "lich",
        slug: "schluesseldienst-lich",
        name: "Lich",
        plz: "35423",
        coordinates: { latitude: 50.5217, longitude: 8.8197 },
        logistics: {
            drivingTimeMinutes: "20-25",
            distanceFromHQ: 24,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 20,
            travelCostText: "+ 20€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Lich 24h Notdienst ab 99€",
            metaDescription: "Schlüsseldienst Lich: Schnelle Notfallhilfe ab 99€ Festpreis. Schlossstadt Lich & Ortsteile zerstörungsfrei geöffnet. 24/7 erreichbar: 06441-8056279",
        },
        routeDescription: "Über die B49 und die A485 bis zur Abfahrt Lich / B457 erreichen wir die historische Schlossstadt Lich und alle Stadtteile in 20 bis 25 Minuten.",
        mainRoad: "B49 / A485 / B457",
        distanceKm: 24,
        character: "Malerische Schloss- und Bierstadt an der Wetter mit ~14.000 Einwohnern, bekannt für ihr Schloss der Fürsten zu Solms-Hohensolms-Lich und die Licher Brauerei.",
        populationApprox: "~14.000",
        landmark: "Schloss Lich, Schlosspark & Licher Brauerei",
        buildingTypes: "Prachtvolles Fachwerk in der Altstadt, historische Schlossbauten, Einfamilienhaussiedlungen in Bettenhausen, Birklar, Eberstadt, Muschenheim und Ober-Bessingen.",
        parkingInfo: "In der Altstadt am Schloss halten wir flexibel, in Wohngebieten direkt an der Adresse.",
        heroVariant: "Schlüsseldienst für die historische Schlossstadt Lich & Ortsteile.",
        fareInfo: "Lich wird mit einer fairen 20 Euro Anfahrtspauschale für alle Stadtteile zuverlässig abgedeckt.",

        scenarios: [
            {
                icon: "home",
                title: "Altbauwohnung in der Licher Altstadt",
                description: "Historische Fachwerktür zugefallen? Unsere Monteure öffnen antike und moderne Schlösser gleichermaßen behutsam und ohne Schäden."
            },
            {
                icon: "shield-alert",
                title: "Schlossdefekt nach Feierabend",
                description: "Zylinder dreht durch oder klemmt? Wir tauschen defekte Schließzylinder vor Ort direkt gegen zertifizierte Sicherheitszylinder aus."
            },
            {
                icon: "briefcase",
                title: "Gewerbe- & Praxen-Notdienst Lich",
                description: "Schnelle Türöffnung und Schlossservice für Arztpraxen, Kanzleien und Ladenlokale im gesamten Stadtgebiet Lich."
            }
        ],

        aboutText: `
<p>Die historische Stadt <span class="font-bold text-[color:var(--text-primary)]">Lich</span> im Landkreis Gießen begeistert durch ihren gut erhaltenen Altstadtkern, das imposante <span class="font-bold text-[color:var(--text-primary)]">Schloss Lich</span> mit seinem weitläufigen Schlosspark und die traditionsreiche Brautradition. Mit ihren Ortsteilen <span class="font-bold text-[color:var(--text-primary)]">Bettenhausen, Birklar, Eberstadt, Muschenheim, Nieder-Bessingen, Ober-Bessingen und Langsdorf</span> zählt die Stadt rund 14.000 Einwohner. Unser <span class="font-bold text-[color:var(--text-primary)]">Schlüsseldienst Lich</span> steht Bürgerinnen und Bürgern bei allen Schlossproblemen rund um die Uhr zur Seite.</p>

<h3>20 bis 25 Minuten: Zuverlässig in Lich und Ortsteilen</h3>
<p>Über die direkte Achse der <span class="font-bold text-[color:var(--text-primary)]">B49 / A485</span> sind unsere Einsatzfahrzeuge in etwa <span class="font-bold text-[color:var(--text-primary)]">20 bis 25 Minuten</span> vor Ort in Lich. Ob im Altstadtkern rund um den Kirchplatz oder in den Außenstadtteilen wie Eberstadt oder Muschenheim: Wir helfen schnell und verlässlich.</p>

<h3>Schonende Öffnungstechniken für historische & moderne Türen</h3>
<p>Vom denkmalgeschützten Fachwerkgebäude bis zum modernen Neubau: Wir beherrschen professionelle Öffnungstechniken mit Spezialwerkzeugen. Das Aufsperren erfolgt zerstörungsfrei und ohne unnötige Zerstörung des Schlosszylinders.</p>

<h3>Transparente Festpreisgarantie</h3>
<p>Bei uns gibt es keine überhöhten Anfahrtsgebühren oder Zuschlagsfallen. Alle Preise werden vorab am Telefon verbindlich vereinbart.</p>
`,

        localTestimonials: [
            {
                name: "Christian B.",
                quote: "Habe mich am Sonntagmittag in Lich ausgesperrt. Der Monteur war pünktlich nach 22 Minuten da, die Tür war in 2 Minuten ohne Kratzer auf. Absolut empfehlenswert!",
                rating: 5
            },
            {
                name: "Anke H.",
                quote: "Sehr sympathischer und kompetenter Techniker in Nieder-Bessingen. Schlosswechsel ging reibungslos. Fester Preis wie am Telefon genannt.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Schlüsseldienst für Lich gesucht? Wir öffnen Wohnungs-, Haus- und Gewerbetüren im gesamten Stadtgebiet Lich schnell, schonend und zum Festpreis.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Fährt der Schlüsseldienst auch in die Licher Ortsteile?",
                answer: "Ja, wir bedienen die Kernstadt Lich sowie alle Ortsteile wie Eberstadt, Birklar, Muschenheim, Bettenhausen und Langsdorf."
            },
            {
                question: "Was kostet eine Türöffnung in Lich?",
                answer: "Einfache Türöffnungen bei zugefallener Tür beginnen bei 99€ Festpreis zzgl. 20€ Anfahrtspauschale."
            }
        ],
        neighbors: ["schluesseldienst-pohlheim", "schluesseldienst-giessen", "schluesseldienst-butzbach", "schluesseldienst-reiskirchen"]
    },

    // --- 3. LOLLAR ---
    {
        id: "lollar",
        slug: "schluesseldienst-lollar",
        name: "Lollar",
        plz: "35457",
        coordinates: { latitude: 50.6483, longitude: 8.7058 },
        logistics: {
            drivingTimeMinutes: "18-22",
            distanceFromHQ: 20,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Lollar Notdienst ab 99€",
            metaDescription: "Schlüsseldienst Lollar: Ihr 24h Aufsperrdienst für Lollar, Odenhausen, Ruttershausen & Salzböden. Schnell vor Ort ab 99€ Festpreis. 06441-8056279",
        },
        routeDescription: "Über die B49 und die B3 Richtung Marburg / Lollar erreichen unsere Monteure das Stadtgebiet Lollar in ca. 18 bis 22 Minuten.",
        mainRoad: "B49 / B3",
        distanceKm: 20,
        character: "Wirtschaftsstarke Industriestadt an der Lahn mit ~10.500 Einwohnern, traditionsreichem Heiztechnik-Standort und waldreichen Ortsteilen.",
        populationApprox: "~10.500",
        landmark: "Heimatmuseum Lollar & Kirchberg",
        buildingTypes: "Industrie- und Gewerbebauten, Ein- und Mehrfamilienhäuser, historische Ortskerne in Odenhausen und Salzböden.",
        parkingInfo: "Problemlose Parkmöglichkeiten direkt vor Ort.",
        heroVariant: "Schlüsseldienst Lollar: Ihr 24h Meisterbetrieb für Lollar & Umgebung.",
        fareInfo: "Lollar profitiert von der direkten Schnellstraßenanbindung. Faire 15 Euro Anfahrtspauschale für das gesamte Stadtgebiet.",

        scenarios: [
            {
                icon: "home",
                title: "Zugezogene Tür in Lollar",
                description: "Aus Versehen die Wohnungstür zugeschlagen? Unser Notdienst öffnet Ihre Tür in Sekunden und völlig zerstörungsfrei."
            },
            {
                icon: "shield-alert",
                title: "Einbruchschutz & Sicherheitsberatung",
                description: "Modernste Sicherheitsbeschläge und Schließzylinder mit Sicherungskarte für Eigenheime und Mietobjekte in Lollar."
            },
            {
                icon: "briefcase",
                title: "Werks- & Gewerbeschlösser",
                description: "Industrieschließanlagen und Notöffnungen für Gewerbekunden im Industriegebiet Lollar."
            }
        ],

        aboutText: `
<p><span class="font-bold text-[color:var(--text-primary)]">Lollar</span> liegt strategisch günstig im Lahntal zwischen Gießen und Marburg. Mit seinen rund 10.500 Einwohnern und den Stadtteilen <span class="font-bold text-[color:var(--text-primary)]">Odenhausen (Lahn), Ruttershausen und Salzböden</span> ist Lollar sowohl als Wohnort als auch als Industriestandort von regionaler Bedeutung. Unser <span class="font-bold text-[color:var(--text-primary)]">Schlüsseldienst Lollar</span> bietet schnelle, ehrliche und fachgerechte Handwerksleistungen rund um Schloss und Riegel.</p>

<h3>In ca. 20 Minuten direkt in Lollar</h3>
<p>Dank der direkten Verbindung über die <span class="font-bold text-[color:var(--text-primary)]">B3</span> erreichen unsere Techniker Lollar und alle Ortsteile zügig in durchschnittlich <span class="font-bold text-[color:var(--text-primary)]">18 bis 22 Minuten</span>. Das sorgt für minimale Wartezeiten bei Notfällen.</p>

<h3>Feste Preise – Ehrlich kalkuliert</h3>
<p>Wir distanzieren uns klar von unseriösen Vermittlungsplattformen: Bei uns erhalten Sie echte Handwerksqualität zu transparenten Festpreisen. Eine zugefallene Tür öffnen wir ab 99 Euro Festpreis.</p>
`,

        localTestimonials: [
            {
                name: "Stefan W.",
                quote: "Schlüssel in Lollar von innen stecken lassen. Monteur war nach 18 Minuten da, Tür sofort ohne Schaden geöffnet. Sehr zu empfehlen!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Schlüsseldienst für Lollar und Ortsteile: 24/7 Notdienst, schnelle Anfahrt, zerstörungsfreie Türöffnung ab 99€ Festpreis.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Wie lange dauert die Anfahrt nach Lollar?",
                answer: "Über die B3 sind wir in der Regel in ca. 18-22 Minuten bei Ihnen in Lollar vor Ort."
            },
            {
                question: "Werden Beschläge beim Öffnen beschädigt?",
                answer: "Nein, zugefallene Türen öffnen wir zu über 99% komplett beschädigungsfrei ohne Spuren an Tür oder Zarge."
            }
        ],
        neighbors: ["schluesseldienst-wettenberg", "schluesseldienst-giessen", "schluesseldienst-staufenberg", "schluesseldienst-buseck"]
    },

    // --- 4. MARBURG ---
    {
        id: "marburg",
        slug: "schluesseldienst-marburg",
        name: "Marburg",
        plz: "35037",
        coordinates: { latitude: 50.8022, longitude: 8.7667 },
        logistics: {
            drivingTimeMinutes: "25-30",
            distanceFromHQ: 38,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 25,
            travelCostText: "+ 25€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Marburg 24h Notdienst ab 99€",
            metaDescription: "Schlüsseldienst Marburg: Zuverlässige Türöffnung ab 99€ Festpreis für Oberstadt, Campus, Richtsberg & ganz Marburg. 24/7 Notruf: 06441-8056279",
        },
        routeDescription: "Über die B49 und die ausgebaute B3-Schnellstraße erreichen wir Marburg an der Lahn in 25 bis 30 Minuten bis in die Oberstadt und auf die Lahnberge.",
        mainRoad: "B49 / B3",
        distanceKm: 38,
        character: "Berühmte historische Universitätsstadt mit ~78.000 Einwohnern, geprägt vom Marburger Landgrafenschloss, der Elisabethkirche und der Philipps-Universität.",
        populationApprox: "~78.000",
        landmark: "Marburger Landgrafenschloss, Elisabethkirche & Oberstadt",
        buildingTypes: "Mittelalterliche Fachwerkhäuser in der steilen Oberstadt, Gründerzeit-Villen im Südviertel, Studentenwohnheime, moderne Wohnkomplexe am Richtsberg.",
        parkingInfo: "In der Oberstadt nutzen unsere Monteure Nahhaltemöglichkeiten, im Südviertel und Außenbezirken direkte Zufahrt.",
        heroVariant: "Schlüsseldienst Marburg: Echte Handwerksqualität für die Universitätsstadt.",
        fareInfo: "Marburg wird über die B3-Direktachse mit einer transparenten 25 Euro Anfahrtspauschale vollständig bedient.",

        scenarios: [
            {
                icon: "home",
                title: "Ausgesperrt in der Marburger Oberstadt",
                description: "Steile Gassen, alte Holztüren: Wir öffnen historische Türen in der Oberstadt mit höchstem Fingerspitzengefühl und Spezialwerkzeug."
            },
            {
                icon: "shield-alert",
                title: "Studenten-Notfall am Campus / Wohnheim",
                description: "Tür zugezogen vor der Vorlesung? Schnelle Hilfe zum fairen, transparenten Festpreis ohne Kautionsrisiko."
            },
            {
                icon: "briefcase",
                title: "Universitätsklinikum Marburg (UKGM)",
                description: "Schlüsselverlust auf den Lahnbergen nach einer langen Schicht? Unser 24/7 Notdienst hilft sofort."
            }
        ],

        aboutText: `
<p><span class="font-bold text-[color:var(--text-primary)]">Marburg an der Lahn</span> ist mit rund 78.000 Einwohnern und über 20.000 Studierenden das wissenschaftliche und kulturelle Zentrum im Norden Mittelhessens. Die weltberühmte <span class="font-bold text-[color:var(--text-primary)]">Elisabethkirche</span>, das über der Stadt thronende <span class="font-bold text-[color:var(--text-primary)]">Landgrafenschloss</span>, die malerische <span class="font-bold text-[color:var(--text-primary)]">Marburger Oberstadt</span> mit ihren steilen Treppen sowie das lebendige <span class="font-bold text-[color:var(--text-primary)]">Südviertel</span> prägen das Stadtbild. Unser <span class="font-bold text-[color:var(--text-primary)]">Schlüsseldienst Marburg</span> ist als zuverlässiger regionaler Partner bei allen Schlossnotfällen für Sie im Einsatz.</p>

<h3>25 bis 30 Minuten über die B3 nach Marburg</h3>
<p>Dank der durchgehenden vierspurigen <span class="font-bold text-[color:var(--text-primary)]">B3-Schnellstraße</span> erreichen unsere Servicefahrzeuge Marburg zügig in <span class="font-bold text-[color:var(--text-primary)]">25 bis 30 Minuten</span>. Wir bedienen alle Stadtteile: von Cappel, Ockershausen und Wehrda bis hinauf auf die Lahnberge und den Richtsberg.</p>

<h3>Spezialist für historische Schlösser & moderne Sicherheitstechnik</h3>
<p>Die Marburger Oberstadt erfordert besondere Fachkenntnisse: An alten Fachwerk- und Kastenschlössern darf nicht mit Gewalt gearbeitet werden. Wir öffnen behutsam und zerstörungsfrei. Gleichzeitig rüsten wir moderne Wohnungen und Institute mit modernen Schließanlagen und Einbruchschutzsystemen aus.</p>

<h3>Transparente Festpreise für Studierende & Familien</h3>
<p>Wir garantieren Ihnen Festpreise ab 99 Euro ohne versteckte Kosten. Sie wissen stets vorab genau, was der Einsatz kostet.</p>
`,

        localTestimonials: [
            {
                name: "Felix T.",
                quote: "Im Südviertel nachts um 1 Uhr den Schlüssel verloren. Der Schlüsseldienst war in 28 Minuten vor Ort. Fairer Preis, professionelle Arbeit!",
                rating: 5
            },
            {
                name: "Carolin E.",
                quote: "Oberstadt Marburg, alte Haustür zugefallen. Der Techniker hat die Tür völlig beschädigungsfrei geöffnet. Großes Lob!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Schlüsseldienst für Marburg an der Lahn: 24/7 Notdienst für Oberstadt, Südviertel, Richtsberg & Campus. Festpreis ab 99€.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Fährt der Schlüsseldienst auch in die Marburger Oberstadt?",
                answer: "Ja, wir bedienen die gesamte Marburger Oberstadt sowie alle Stadtteile von Cappel bis Wehrda."
            },
            {
                question: "Wie hoch sind die Kosten für eine Türöffnung in Marburg?",
                answer: "Für eine zugefallene Tür berechnen wir werktags 99€ Festpreis zzgl. 25€ Anfahrtspauschale nach Marburg."
            }
        ],
        neighbors: ["schluesseldienst-lollar", "schluesseldienst-giessen", "schluesseldienst-gladenbach", "schluesseldienst-lahnau"]
    },

    // --- 5. POHLHEIM ---
    {
        id: "pohlheim",
        slug: "schluesseldienst-pohlheim",
        name: "Pohlheim",
        plz: "35415",
        coordinates: { latitude: 50.5278, longitude: 8.7231 },
        logistics: {
            drivingTimeMinutes: "15-20",
            distanceFromHQ: 18,
        },
        pricing: {
            basePrice: companyInfo.financial.startingPriceValue,
            basePriceNight: 149,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Pohlheim Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Pohlheim: 24h Notdienst für Watzenborn-Steinberg, Garbenteich, Holzheim & Umgebung. Schnell vor Ort ab 99€ Festpreis. 06441-8056279",
        },
        routeDescription: "Über die B49 und die A485 (Abfahrt Schiffenberger Tal / Pohlheim) sind wir in 15 bis 20 Minuten in allen Pohlheimer Ortsteilen.",
        mainRoad: "B49 / A485",
        distanceKm: 18,
        character: "Attraktive Stadt südlich von Gießen mit ~18.000 Einwohnern, geprägt von den sechs Stadtteilen Watzenborn-Steinberg, Dorf-Güll, Garbenteich, Grüningen, Hausen und Holzheim.",
        populationApprox: "~18.000",
        landmark: "Limes-Wachturm & Burg Grüningen",
        buildingTypes: "Familienfreundliche Neubaugebiete, traditionelle Dorflagen mit Fachwerkhäusern und moderne Gewerbezentren.",
        parkingInfo: "Beste Parksituation direkt am Einsatzort.",
        heroVariant: "Schlüsseldienst Pohlheim: Schneller 24h Vor-Ort-Service zum Festpreis.",
        fareInfo: "Günstige 15 Euro Anfahrtspauschale für alle sechs Stadtteile von Pohlheim.",

        scenarios: [
            {
                icon: "home",
                title: "Türöffnung in Watzenborn-Steinberg",
                description: "Zugefallene Haus- oder Wohnungstür? Wir öffnen in wenigen Minuten schonend und ohne Kratzer."
            },
            {
                icon: "shield-alert",
                title: "Einbruchsicherung & Schlossaustausch",
                description: "Fachmännische Absicherung von Eigenheimen in Holzheim, Garbenteich und Hausen."
            },
            {
                icon: "briefcase",
                title: "Gewerbliche Schließsysteme",
                description: "Betreuung von Gewerbe- und Praxenobjekten in den Pohlheimer Gewerbegebieten."
            }
        ],

        aboutText: `
<p><span class="font-bold text-[color:var(--text-primary)]">Pohlheim</span> ist mit rund 18.000 Einwohnern die drittgrößte Stadt im Landkreis Gießen. Die sechs Ortsteile <span class="font-bold text-[color:var(--text-primary)]">Watzenborn-Steinberg, Garbenteich, Hausen, Holzheim, Grüningen und Dorf-Güll</span> bieten eine lebendige Mischung aus familienfreundlichem Wohnen und prosperierender Wirtschaft. Entlang des historischen Obergermanisch-Rätischen Limes gelegen, verbindet Pohlheim Geschichte mit moderner Infrastruktur. Unser <span class="font-bold text-[color:var(--text-primary)]">Schlüsseldienst Pohlheim</span> garantiert Ihnen erstklassigen Handwerksservice rund um die Uhr.</p>

<h3>15 bis 20 Minuten: Schnell in allen Pohlheimer Stadtteilen</h3>
<p>Über den <span class="font-bold text-[color:var(--text-primary)]">Gießener Ring (A485)</span> und die Zubringerstraßen erreichen unsere Monteure Watzenborn-Steinberg, Garbenteich, Dorf-Güll und alle weiteren Ortsteile in nur <span class="font-bold text-[color:var(--text-primary)]">15 bis 20 Minuten</span>.</p>

<h3>Zerstörungsfreie Öffnung & faire Festpreise</h3>
<p>Wir öffnen Ihre Tür zu über 99% beschädigungsfrei zum transparenten Festpreis ab 99 Euro zzgl. 15 Euro Anfahrt. Keine versteckten Gebühren.</p>
`,

        localTestimonials: [
            {
                name: "Kerstin L.",
                quote: "In Watzenborn-Steinberg den Schlüssel innen stecken lassen. Der Notdienst war nach 15 Minuten da und hat die Tür in einer Minute geöffnet. Super Service!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Schlüsseldienst für Pohlheim gesucht? Wir öffnen Haus- und Wohnungstüren in Watzenborn-Steinberg, Garbenteich, Holzheim & Umgebung schnell und zum Festpreis.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Wie schnell ist der Schlüsseldienst in Pohlheim?",
                answer: "Unsere durchschnittliche Anfahrtszeit nach Pohlheim beträgt über die A485 ca. 15 bis 20 Minuten."
            },
            {
                question: "Welche Ortsteile von Pohlheim werden bedient?",
                answer: "Wir fahren alle sechs Ortsteile an: Watzenborn-Steinberg, Garbenteich, Hausen, Holzheim, Grüningen und Dorf-Güll."
            }
        ],
        neighbors: ["schluesseldienst-giessen", "schluesseldienst-linden", "schluesseldienst-huettenberg", "schluesseldienst-lich"]
    }
];
