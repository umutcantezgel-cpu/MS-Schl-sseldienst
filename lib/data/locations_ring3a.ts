import { LocationData } from "./locations";

export const ring3LocationsA: LocationData[] = [
    // --- RING 3 (10-20 km) Teil 1 ---
    {
        id: "giessen",
        slug: "schluesseldienst-giessen",
        name: "Gießen",
        plz: "35390",
        coordinates: { latitude: 50.5841, longitude: 8.6784 },
        logistics: {
            drivingTimeMinutes: "15-20",
            distanceFromHQ: 12,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Gießen und Türöffnung ab 99€ | 24/7 Notdienst",
            metaDescription: "Schlüsseldienst Gießen: Türöffnung ab 99€ für Studenten-WGs, Altstadt & Neubauten. Lokaler Meisterbetrieb, zerstörungsfrei, 24/7. In 15-20 Min. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die B49 und A480 erreichen unsere Monteure das gesamte Gießener Stadtgebiet in 15 bis 20 Minuten und von Wieseck bis in die engste Altstadtgasse.",
        mainRoad: "B49 / A480",
        distanceKm: 12,
        character: "Pulsierende Universitätsstadt mit ~90.000 Einwohnern, hohem Studentenanteil, ausgeprägter Kneipenkultur und enormer Architekturvielfalt",
        populationApprox: "~90.000",
        landmark: "Justus-Liebig-Universität, Mathematikum & Botanischer Garten",
        buildingTypes: "Extrem vielfältig: Gründerzeit-Altbauten im Selzerweg-Viertel, moderne Studentenwohnheime, großflächige Neubauten am Stadtrand, Gewerbeimmobilien an der Westanlage, historische Fachwerkhäuser in der Altstadt.",
        parkingInfo: "In der Innenstadt nutzen unsere Monteure bewohnernahe Haltemöglichkeiten, in den Außenbezirken und Wohnvierteln parken wir direkt vor dem Einsatzort.",
        heroVariant: "Schlüsseldienst für Gießen und die Universitätsstadt verdient ehrliches Handwerk.",
        fareInfo: "Gießen liegt im erweiterten Nahbereich. Die Anfahrt beträgt faire 15 Euro und für alle Stadtteile von der Altstadt bis Wieseck identisch.",

        scenarios: [
            {
                icon: "home",
                title: "Studenten-WG: Tür zu, Schlüssel drin",
                description: "Zwischen Vorlesung und Mensa die Tür zugezogen? Das klassische WG-Drama. Wir öffnen Studenten schnell, günstig und ohne Beschädigung und damit die Kaution sicher bleibt."
            },
            {
                icon: "shield-alert",
                title: "Altbau-Tür im Selzerweg-Viertel",
                description: "Die schwere Altbau-Tür Ihrer Gießener Gründerzeitwohnung hat sich verklemmt? Unsere Spezialisten kennen historische Schlösser und Beschläge und arbeiten behutsam und spurlos."
            },
            {
                icon: "briefcase",
                title: "Kneipentour & Nachteinsatz",
                description: "Nach einer langen Nacht in der Gießener Kneipenszene den Schlüssel verloren? Unser 24/7-Notdienst ist auch um 4 Uhr morgens schnell und diskret zur Stelle."
            }
        ],

        aboutText: `
<p>Mit der <strong>Justus-Liebig-Universität</strong>, der <strong>Technischen Hochschule Mittelhessen (THM)</strong> und knapp 90.000 Einwohnern ist <strong>Gießen</strong> die pulsierende Universitätsstadt Mittelhessens und das Oberzentrum der Region. Tausende Studentenzimmer, weitläufige Altbau-Viertel im Bereich <strong>Selzerweg und Ludwigsplatz</strong>, moderne Neubauten am Stadtrand und historische Fachwerkhäuser in der Altstadt bilden ein architektonisches Mosaik, das seinesgleichen sucht. Für unseren <strong>Schlüsseldienst Gießen</strong> bedeutet das: Wir treffen auf eine enorme Bandbreite an Schlössern, von einfachen WG-Türen bis zu High-End-Sicherheitssystemen in Gewerbeimmobilien.</p>

<h3>15 bis 20 Minuten: Schnell in der Lahnstadt</h3>
<p>Dank optimaler Verkehrsanbindungen über die <strong>B49</strong> und <strong>A480</strong> stehen unsere Monteure in aller Regel in <strong>15 bis maximal 20 Minuten</strong> überall in Gießen und ob am Berliner Platz, in der Weststadt, in Wieseck oder im Philosophenwald. Wir kennen den Gießener Stadtverkehr wie unsere Westentasche und wählen stets die schnellste Route.</p>

<h3>Studenten, Altbauten & Gründerzeit</h3>
<p>Gießen hat den höchsten Studentenanteil aller deutschen Städte vergleichbarer Größe. Das bedeutet: Tausende WG-Zimmer, häufige Mieterwechsel und entsprechend viele Aussperrungen. Wir bieten <strong>studentenfreundliche Festpreise</strong> und öffnen WG-Türen, ohne dass die Kaution gefährdet wird. Die prächtigen <strong>Gründerzeit-Altbauten</strong> im Selzerweg-Viertel und rund um den Ludwigsplatz stellen mit ihren historischen Schlössern und schweren Holztüren besondere Anforderungen und die unsere Techniker mit Spezialausrüstung und Fingerspitzengefühl meistern.</p>

<h3>Mathematikum, Botanischer Garten & Schiffenberg</h3>
<p>Gießen ist kulturell lebendig: Das <strong>Mathematikum</strong> als erstes mathematisches Mitmach-Museum der Welt, der <strong>Botanische Garten</strong> (einer der ältesten in Deutschland, gegründet 1609), die <strong>Klosterruine Schiffenberg</strong> und das <strong>Oberhessische Museum</strong> locken Besucher aus der gesamten Region. Auch die lebendige Kneipenszene und das rege kulturelle Leben machen die Stadt zu einem Anziehungspunkt und und überall dort, wo Menschen unterwegs sind, passieren Aussperrungen.</p>

<h3>24/7 Notdienst für die Universitätsstadt</h3>
<p>Gießen schläft nie: Vorlesungen bis spät in den Abend, Bibliotheksbesuche bis Mitternacht, Kneipentour am Wochenende. Unser <strong>Schlüsselnotdienst Gießen</strong> ist deshalb rund um die Uhr einsatzbereit und auch nach einer langen Nacht, an Feiertagen, bei Gewitter und Schnee. Wir lassen keinen Gießener im Regen stehen.</p>

<h3>Transparente Preise gegen Callcenter-Betrug</h3>
<p>Gerade in der Universitätsstadt haben dubiose Callcenter-Schlüsseldienste traurige Berühmtheit erlangt. Wir sind das Gegenteil: Ein <strong>regionaler Meisterbetrieb</strong> mit transparenten Festpreisen. Für eine zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt nach Gießen kostet <strong>15 Euro</strong>. Sie erfahren den Gesamtpreis am Telefon, bevor sich unser Monteur auf den Weg macht.</p>
`,

        localTestimonials: [
            {
                name: "Lisa K.",
                quote: "WG-Tür in der Weststadt zugezogen, kurz vor der Klausur. Der Schlüsseldienst war in 17 Minuten da und hatte die Tür in Sekunden offen. 114 Euro, absolut fair für Studenten. Kann ich jedem empfehlen!",
                rating: 5
            },
            {
                name: "Dr. Markus R.",
                quote: "Altbau-Wohnung am Selzerweg, historisches Schloss. Der Techniker hat das mit beeindruckender Sachkenntnis geöffnet und keine Kratzer, kein Schaden. Endlich ein seriöser Schlüsseldienst in Gießen.",
                rating: 5
            },
            {
                name: "Sandra P.",
                quote: "Samstagabend um 23 Uhr in Wieseck ausgesperrt. Schnelle Hilfe, transparent kommunizierter Nachtpreis, saubere Arbeit. Viel besser als die Callcenter-Nummern aus dem Internet!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Vor der Studentenbude oder im Gießener Altbau-Viertel ausgesperrt? Wir sind als 24/7 Notdienst für das gesamte Stadtgebiet zuverlässig und fair im Einsatz. Festpreise, keine Tricks.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Bieten Sie studentenfreundliche Preise in Gießen?",
                answer: "Unsere Festpreise sind für alle Gießener gleich günstig: 99 Euro für die zugefallene Tür werktags, plus 15 Euro Anfahrt. Keine Sonderpreise nötig, weil unsere Standardpreise bereits fair sind."
            },
            {
                question: "Wie schütze ich mich vor Abzocke durch unseriöse Schlüsseldienste in Gießen?",
                answer: "Rufen Sie uns unter unserer lokalen Festnetznummer 06441-8056279 an. Wir nennen Ihnen den Festpreis vorab. Misstrauen Sie Anbietern, die keine konkreten Preise nennen oder aus entfernten Callcentern operieren."
            },
            {
                question: "Können Sie auch gewerbliche Schließanlagen in Gießen servicen?",
                answer: "Ja, wir betreuen neben Privathaushalten auch Büros, Praxen und Gewerbeobjekte. Zylindertausch, Schließanlagen-Erweiterung und Sicherheitsberatung gehören zu unserem Leistungsspektrum."
            }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-huettenberg", "schluesseldienst-biebertal"]
    },
    {
        id: "braunfels",
        slug: "schluesseldienst-braunfels",
        name: "Braunfels",
        plz: "35619",
        coordinates: { latitude: 50.5148, longitude: 8.3881 },
        logistics: {
            drivingTimeMinutes: "10-15",
            distanceFromHQ: 12,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Braunfels und Zerstörungsfreie Öffnung | Ab 99€",
            metaDescription: "Schlüsseldienst Braunfels: Rasanter 24 Std Notdienst. In ca. 10-15 Min. an der Haustür. Festpreise, Spezialisten für Altbau / Fachwerkhäuser. 06441-8056279",
        },
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Von unserer Wetzlarer Zentrale aus nutzen wir die B49 (Abfahrt Solms) und fahren über die malerische L3020 in Rekordzeit direkt hinauf in die Schlossstadt Braunfels.",
        mainRoad: "L3020",
        distanceKm: 12,
        character: "Historischer Luftkurort mit märchenhafter Schlossanlage",
        populationApprox: "~11.000",
        landmark: "Schloss Braunfels & historischer Marktplatz",
        buildingTypes: "Sensibles, jahrhundertealtes Fachwerk am Marktplatz, Reha-Kliniken im Kurviertel und moderne Wohngebiete in Bonbaden oder Neukirchen.",
        parkingInfo: "Durch unsere mobilen Roll-Caddys erreichen wir auch Fußgängerzonen am Marktplatz und verwinkelte Altstadtgassen unterhalb des Schlosses völlig problemlos.",
        heroVariant: "Schlüsseldienst für die Schlossstadt Braunfels. 24/7 zur Stelle.",
        fareInfo: "Die Anfahrt in den historischen Kurort decken wir und egal ob Marktplatz oder abgelegener Ortsteil wie Altenkirchen und mit unserer fairen 15-Euro-Pauschale transparent ab.",
        
        scenarios: [
            {
                icon: "home",
                title: "Zugezogene Altbautür am Kurpark",
                description: "Holztüren in historischen Gebäuden verziehen sich oft. Wir öffnen diese Härtefälle durch minimalinvasive Spachteltechniken absolut ohne Lackkratzer."
            },
            {
                icon: "shield-alert",
                title: "Zylinderbruch im Kurgebiet",
                description: "Sollte der Schlüssel in der Klinken-Not in den Neu- und Reha-Bauten abbrechen, extrahieren wir die Fragmente oder fräsen millimetergenau."
            },
            {
                icon: "briefcase",
                title: "Gastronomie & Hotels in Braunfels",
                description: "Ausgesperrt im Hotel am Herrengarten? Wir reparieren defekte Schließanlagen und Gastronomie-Türen diskret im laufenden Betrieb."
            }
        ],

        aboutText: `
<p>Wenn es einen Ort im Lahn-Dill-Kreis gibt, der pure mittelhessische Romantik versprüht, dann ist es der idyllische Luftkurort <strong>Braunfels</strong>. Überthront vom altehrwürdigen Schloss Braunfels und oft als das "hessische Märchenschloss" bezeichnet und prägen weitreichende Fachwerkhäuser, verwinkelte Gässchen in der Altstadt, mehrere Reha-Kliniken sowie naturnahe Ortsteile wie <strong>Tiefenbach, Philippstein, Altenkirchen, Neukirchen und Bonbaden</strong> das Bild. Doch auch im romantischsten Setting schlägt die Realität zu: Fällt die schwere, alte Eicheholztür am Marktplatz im kalten Herbstwind ungewollt ins Schloss und der Schlüssel liegt im Flur, ist die Panik groß. Genau für dieses Szenario steht unser hochspezialisierter <strong>Schlüsseldienst Braunfels</strong> Tag und Nacht an Ihrer Seite.</p>

<h3>Fachkompetenz für historisches Fachwerk und edle Türen</h3>
<p>Mit denkmalgeschützten Altbauten, historischen Beschlagssystemen und teils aufwendigen Doppelfalz-Türen darf in Braunfels unter keinen Umständen ungeschultes Personal mit Brecheisen oder schweren Bohrern ans Werk gehen! Wer hier rohe Gewalt anwendet, verursacht an antiken Türen massive, teils irreversible und extrem kostspielige Holz- und Rahmenschäden. Vermeiden Sie dieses Horrorszenario kategorisch. Unser Team ist handwerklich meisterhaft auf sensible Restaurationsobjekte geschult. Sofern Ihre Braunfelser Eingangstür lediglich zugefallen und nicht mehrfach verriegelt ist, setzen wir hochentwickelte, lackschonende Gleitwerkzeuge ein. Das Resultat: Über 99 % dieser Türen öffnen wir komplett spurlos und ohne Kratzer, ohne Bohren, ohne Zylinder-Neukauf. Der Originalschlüssel sperrt danach exakt wie am Tag zuvor.</p>

<h3>Extreme Schnelligkeit über die B49 und L3020</h3>
<p>Viele Kur-Patienten oder zugezogene Anwohner in Braunfels befürchten bei Notdiensten stundenlanges Warten auf einen Monteur aus Frankfurt oder dem fernen Ruhrgebiet. Nicht mit uns! Als vertrauensvoller, regional agierender Meisterbetrieb befahren wir von Wetzlar aus die direkte Route über die B49 (Abfahrt Solms) und die L3020. So erreichen wir Braunfels und seine ausgedehnten, waldreichen Ortsteile in der Regel bequem in bemerkenswerten <strong>10 bis 15 Minuten</strong>. Sie legen auf und und unser Servicefahrzeug biegt oft schon in Ihre Straße ein.</p>

<h3>24/7 Service für Kliniken und den privaten Sektor</h3>
<p>Als Gesundheits- und Tourismusstandort pulsiert das Leben in Kliniken, Gaststätten am Herrengarten und Hotels auch nachts. Klemmt das Schloss zum Lieferanteneingang, streikt das Garagentor oder funktioniert der Schließzylinder einer Reha-Einrichtung nicht mehr? Wir bieten diskrete, blitzschnelle Gewerbe-Öffnungen im laufenden Betrieb. Auch für den privaten Sektor gilt unsere 365-Tage-Rufbereitschaft rund um die Uhr und auch am Wochenende oder an Feiertagen.</p>

<h3>Absolute Kostenklarheit ohne Kur-Aufschlag</h3>
<p>Preisliche Transparenz ist unsere stärkste Waffe gegen die schwarzen Schafe der Branche. Ohne Wenn und Aber eröffnen wir werktags (tagsüber) Ihre Standard-Zugefallen-Situation ab einem knallhart kalkulierten Festpreis von <strong>99 Euro für die reine Arbeitsleistung</strong>. Die Anfahrt in den Kurort und egal ob direkt an die Schlossmauer oder weit hinaus nach Philippstein und wird mit einer absolut geringen, fixen Pauschale von ca. 15 Euro berechnet. Keine versteckten Gebühren, keine Fantasie-Stundenlöhne. Setzen Sie auf echte Fachkompetenz und ehrliche Handwerksarbeit direkt aus der Region!</p>
`,
        
        localTestimonials: [
            {
                name: "Heinz P.",
                quote: "Wohne am Markt direkt unterhalb vom Schloss Braunfels. Die dicke alte Holztür war zugefallen. Der Techniker war unfassbar vorsichtig, hat mit einer kleinen Nadel im Türfalz gearbeitet. Nach 2 Minuten war die Tür offen und 0,0 Kratzer! Wahre Künstler.",
                rating: 5
            },
            {
                name: "Sabine (Klinikpersonal)",
                quote: "Haben uns beim Rauchen am Nebeneingang einer Klinik in Braunfels ausgesperrt. Der Notdienst war in fantastischen 12 Minuten da und hat uns ohne großes Aufheben sofort reingelassen. Lebensretter!",
                rating: 5
            },
            {
                name: "Familie K.",
                quote: "Wir leben draußen in Tiefenbach. Mitten am Sonntagmittag brach uns der uralte Schlüssel ab. Telefonisch super erreicht, nach 15 Minuten stand der Wagen da. Festpreis war transparent, sehr nette Mitarbeiter.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Schlüsseldienst für die historische Schlossstadt Braunfels gesucht? Unser verlässlicher Meisterbetrieb steht Tag und Nacht zur Verfügung, um Ihnen zum Festpreis die Tür zu öffnen.",
            mainText: "", // Ersetzt durch aboutText im 10x-System
            serviceZerstörungsfrei: "", // Ersetzt durch scenarios
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Erweist sich die verwinkelte Altstadt in Braunfels am Schloss als Aufpreisgrund?",
                answer: "Nein, weder enge Gassen noch beschwerliche Zugänge zur Haustür (z.B. Treppen am historischen Marktplatz) führen bei unserem Festpreisservice in Braunfels zu sonderbaren Wucher-Zuschlägen."
            },
            {
                question: "Fallen für die entlegenen Ortsteile wie Altenkirchen, Bonbaden oder Philippstein Extra-Kosten an?",
                answer: "Absolut nicht. Unsere knapp kalkulierte 15-Euro-Anfahrtspauschale gilt als Deckel für die komplette Gemarkung Braunfels. Wer in Tiefenbach den Schlüssel verliert, zahlt keinen Cent mehr Fahrtkosten als ein Einwohner der Kernstadt."
            },
            {
                question: "Muss bei einer massiven Kassettentür im Altbau zwingend gebohrt werden?",
                answer: "Ganz klares Nein. In über 99 % der Routinefälle und wenn die Tür nur ins Schloss geknallt ist und bleibt der Zylinder intakt und nutzbar. Wir öffnen in Braunfels schonend über den Türfalz."
            }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-leun", "schluesseldienst-wetzlar-hermannstein"]
    },
    {
        id: "ehringshausen",
        slug: "schluesseldienst-ehringshausen",
        name: "Ehringshausen",
        plz: "35630",
        coordinates: { latitude: 50.6178, longitude: 8.3859 },
        logistics: {
            drivingTimeMinutes: "10-15",
            distanceFromHQ: 12,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Ehringshausen und Türöffnung ab 99€ | 24/7 Notdienst",
            metaDescription: "Schlüsseldienst Ehringshausen: Zerstörungsfreie Türöffnung ab 99€. In ca. 10-15 Min. in Katzenfurt, Kölschhausen, Daubhausen & allen 9 Ortsteilen. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die B277 entlang der Dill und die hervorragende Anbindung via A45 (Anschluss Ehringshausen) erreichen unsere Techniker alle neun Ortsteile in rasanten 10 bis 15 Minuten.",
        mainRoad: "B277 / A45 (Anschluss Ehringshausen)",
        distanceKm: 12,
        character: "Dynamische Dillgemeinde mit 9 Ortsteilen, starkem Pendlerverkehr und einer Mischung aus Industrie, Wohngebieten und ländlicher Idylle",
        populationApprox: "~9.400",
        landmark: "Spätgotische Wehrkirche auf Olivin-Diabas & Georg-Stollen (1880)",
        buildingTypes: "Dichte Mischung aus älteren Reihenhäusern und Mehrfamilienhäusern im Kernort, Neubaugebieten mit modernen Sicherheitstüren, ländlichen Eigenheimen in Daubhausen/Greifenthal und Gewerbeobjekten entlang der Dillstrecke.",
        parkingInfo: "Ob in der Kernstadt Ehringshausen oder in den ländlichen Ausläufern wie Greifenthal und Breitenbach und unsere Einsatzwagen finden stets direkte Parkmöglichkeiten vor dem Einsatzort.",
        heroVariant: "Schlüsseldienst für Ehringshausen und alle 9 Ortsteile an der Dill.",
        fareInfo: "Ehringshausen liegt im günstigen Nahbereich unserer Wetzlarer Basis. Die Anfahrt beträgt faire 15 Euro und identisch für alle neun Ortsteile, von Katzenfurt bis Greifenthal.",

        scenarios: [
            {
                icon: "home",
                title: "Morgens ausgesperrt und Pendler-Stress",
                description: "Im Pendler-Hotspot Ehringshausen passiert es besonders häufig: Hektischer Aufbruch, Tür fällt zu, Schlüssel liegt drinnen. Wir sind in 10-15 Minuten da und öffnen Ihre Tür zerstörungsfrei, bevor Sie den nächsten Zug verpassen."
            },
            {
                icon: "shield-alert",
                title: "Einbruchsspuren in Katzenfurt",
                description: "Aufbruchspuren an Ihrer Haustür in Katzenfurt entdeckt? Wir sichern beschädigte Schlösser sofort, tauschen Zylinder aus und beraten Sie zu Sicherheitsupgrades und auch nachts und am Wochenende."
            },
            {
                icon: "briefcase",
                title: "Gewerbe & Industriegebiet Dill",
                description: "Blockierte Bürotür oder defekte Schließanlage im Gewerbegebiet? Wir reagieren blitzschnell und installieren bei Bedarf komplette Ersatzschließsysteme für Ihren Betrieb."
            }
        ],

        aboutText: `
<p>Zentral zwischen Wetzlar und Herborn an der <strong>Dill</strong> gelegen, ist die Gemeinde <strong>Ehringshausen</strong> mit ihren rund 9.400 Einwohnern eines der dynamischsten Gemeinwesen im Lahn-Dill-Kreis. Neun eigenständige Ortsteile und <strong>Ehringshausen (Kernort), Katzenfurt, Daubhausen, Kölschhausen, Dillheim, Dreisbach, Breitenbach, Greifenthal und Niederlemp</strong> und vereinen sich zu einer Gemeinde, die durch ihre hervorragende Verkehrsanbindung, ihre aktive Vereinslandschaft und ihre überraschend reiche Geschichte besticht. Wenn in einer so weitläufigen Gemeinde der Schlüssel verloren geht oder ein Schloss blockiert, brauchen die Bewohner einen <strong>Schlüsseldienst Ehringshausen</strong>, der jeden einzelnen Ortsteil kennt und in Minuten vor Ort ist.</p>

<h3>A45 und B277: Blitzschnell an der Dill</h3>
<p>Die Gemeinde Ehringshausen profitiert von einer doppelten Verkehrsanbindung, die auch unserem Notdienst zugutekommt: Die <strong>B277</strong> verläuft parallel zur Dill durchs Tal, während der <strong>Autobahnanschluss Ehringshausen an der A45</strong> (Sauerlandlinie) die Region an das überregionale Straßennetz anschließt. Von unserer Wetzlarer Basis aus nutzen unsere Monteure je nach Ortsteil die optimale Route und sind verlässlich in <strong>10 bis 15 Minuten</strong> bei Ihnen und egal ob im Kernort Ehringshausen, im geschäftigen Katzenfurt oder im abgelegenen Greifenthal.</p>

<h3>Wehrkirche, Georg-Stollen & Hugenottenmuseum</h3>
<p>Ehringshausen überrascht mit einer kulturellen Tiefe, die man in einer Pendlergemeinde nicht unbedingt erwartet. Die <strong>spätgotische Wehrkirche</strong> im Kernort, die majestätisch auf einem Olivin-Diabas-Felsen thront, ist ein architektonisches Juwel. Am östlichen Ortsrand öffnet sich der Eingang zum <strong>Georg-Stollen</strong>, einem historischen Bergwerkstunnel von 1880, der von der einst bedeutenden Erzabbautradition der Region zeugt. In <strong>Daubhausen</strong> beherbergt die „Alte Schule" das <strong>Dorf- und Hugenottenmuseum</strong>, das an die hugenottische Besiedlung des Ortsteils erinnert. <strong>Kölschhausen</strong> lockt mit „Köhler's" <strong>Heimat- und Feuerwehrmuseum</strong>, und in <strong>Breitenbach</strong> dokumentiert ein liebevoll gestaltetes Heimatmuseum das Dorfleben um 1900.</p>

<h3>9 Ortsteile und 9 verschiedene Türtypen</h3>
<p>Die bauliche Vielfalt über neun Ortsteile hinweg ist enorm. Im <strong>Kernort Ehringshausen</strong> (ca. 4.200 Einwohner) finden sich sowohl moderne Neubauzeilen mit Mehrfachverriegelungen als auch ältere Mehrfamilienhäuser mit Standard-Profilzylindern. <strong>Katzenfurt</strong>, der zweitgrößte Ortsteil mit rund 1.900 Einwohnern, bietet eine ähnlich dichte Bebauung. Die kleineren Ortsteile wie <strong>Daubhausen</strong> (ca. 460 Einwohner), <strong>Dreisbach</strong> (ca. 280) und <strong>Greifenthal</strong> (ca. 250) sind dagegen von ländlichen Eigenheimen mit teils älteren, massiven Holztüren geprägt. Unsere Techniker bringen für jede dieser Varianten das passende Spezialwerkzeug mit und vom filigranen Fallengleiter bis zum Präzisionsfräser für festsitzende Zylinder.</p>

<h3>24/7 Notdienst an 365 Tagen</h3>
<p>Die Gemeinde Ehringshausen ist ein echter Pendler-Hotspot: Viele Bewohner arbeiten in Wetzlar, Gießen oder im Rhein-Main-Gebiet und kommen erst spätabends nach Hause. Genau dann, in der Dunkelheit und Kälte, passieren die meisten Aussperrungen. Unser <strong>Schlüsselnotdienst Ehringshausen</strong> ist deshalb rund um die Uhr einsatzbereit und auch nachts um 2 Uhr, an Sonn- und Feiertagen, bei Gewitter und Schneefall. Wir lassen Sie in keinem der neun Ortsteile im Stich.</p>

<h3>Ehrliche Preise, null Tricks</h3>
<p>Für eine einfache zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt in die Gemeinde Ehringshausen (alle neun Ortsteile eingeschlossen) kostet faire <strong>15 Euro</strong>. Punkt. Keine Zuschläge für Berghöhe, keine Fantasie-Materialkosten, keine Überraschungen auf der Rechnung. Sie erfahren den Gesamtpreis am Telefon, bevor sich unser Techniker auf den Weg macht. Wir sind das Gegenteil der dubiosen Callcenter-Schlüsseldienste, vor denen die Verbraucherzentrale Hessen zu Recht warnt.</p>
`,

        localTestimonials: [
            {
                name: "Stefan L.",
                quote: "Morgens um 6:30 in der Kernstadt Ehringshausen ausgesperrt, musste dringend zur Arbeit. Der Techniker war nach 11 Minuten da, Tür in Sekunden offen, Schloss völlig unbeschädigt. 114 Euro, alles wie am Telefon besprochen. Absolut seriös!",
                rating: 5
            },
            {
                name: "Petra G.",
                quote: "In Katzenfurt nachts den Schlüssel im Auto eingeschlossen und die Haustür auch noch zu. Der Monteur hat beides geöffnet, war super freundlich und hat faire Nachtpreise berechnet. Kann ich jedem in Ehringshausen wärmstens empfehlen.",
                rating: 5
            },
            {
                name: "Helmut D.",
                quote: "Wir leben in Daubhausen und hatten einen Zylinderschaden. Der Techniker hat den alten Zylinder sauber ausgebaut und einen hochwertigen ABUS-Zylinder eingesetzt. Top Qualität zum fairen Preis und endlich ein ehrlicher Schlüsseldienst!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgesperrt in Ehringshausen? Vertrauen Sie den kompetenten, ehrlichen Profis an der Dill und in allen 9 Ortsteilen von Katzenfurt bis Greifenthal. Festpreise, 24/7 Notdienst, zerstörungsfrei.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gilt der gleiche Preis für alle neun Ehringshäuser Ortsteile?",
                answer: "Ja, absolut. Die 15 Euro Anfahrtspauschale gilt pauschal für die gesamte Gemeinde Ehringshausen und von Katzenfurt über Kölschhausen und Daubhausen bis zum kleinsten Ortsteil Greifenthal. Keine versteckten Höhenzuschläge."
            },
            {
                question: "Mein Schlüssel steckt von innen im Schloss. Können Sie das in Ehringshausen lösen?",
                answer: "Das ist ein absoluter Standardfall für uns. Über spezielle Manipulationstechniken können wir den steckenden Schlüssel von außen überwinden oder entfernen und ohne jede Beschädigung am Schloss oder an der Tür."
            },
            {
                question: "Empfehlen Sie nach einem Einbruchsversuch einen Sicherheits-Upgrade?",
                answer: "Unbedingt. Nach einem Aufbruchversuch beraten wir Sie kostenlos und installieren auf Wunsch Sicherheitszylinder (z.B. ABUS, BKS), Schutzbeschläge mit Ziehschutz und Zusatzschlösser und direkt vor Ort im gesamten Gemeindegebiet."
            }
        ],
        neighbors: ["schluesseldienst-asslar", "schluesseldienst-leun", "schluesseldienst-hohenahr"]
    },
    {
        id: "schoeffengrund",
        slug: "schluesseldienst-schoeffengrund",
        name: "Schöffengrund",
        plz: "35641",
        coordinates: { latitude: 50.4711, longitude: 8.4884 },
        logistics: {
            drivingTimeMinutes: "12-15",
            distanceFromHQ: 12,
        },
        pricing: {
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Schöffengrund und Türöffnung ab 99€ | 24/7",
            metaDescription: "Schlüsseldienst Schöffengrund: Zerstörungsfreie Türöffnung ab 99€. In ca. 12-15 Min. in Schwalbach, Laufdorf, Oberwetz & allen 6 Ortsteilen. 06441-8056279",
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die Landesstraßen südwestlich von Wetzlar erreichen unsere Monteure alle sechs Schöffengrunder Ortsteile in zuverlässigen 12 bis 15 Minuten.",
        mainRoad: "L3451 / L3020",
        distanceKm: 12,
        character: "Ländliche Taunusrandgemeinde mit denkmalgeschütztem Ortskern in Oberwetz, gut erhaltenen Fachwerkhäusern und einem einzigartigen Motorradmuseum",
        populationApprox: "~6.500",
        landmark: "Denkmalgeschützter Ortskern Oberwetz & Vincent-Motorradmuseum Niederwetz",
        buildingTypes: "Überwiegend Eigenheime und ländliche Wohnbebauung. Historische Fachwerkhäuser im denkmalgeschützten Ortskern Oberwetz und in Laufdorf, moderne Einfamilienhausbebauung in den Randlagen aller Ortsteile.",
        parkingInfo: "In allen sechs Schöffengrunder Ortsteilen bieten die ländlichen Straßen und großzügigen Grundstücke ideale Parkmöglichkeiten direkt vor dem Einsatzort.",
        heroVariant: "Schlüsseldienst für Schöffengrund und von Schwalbach bis zum denkmalgeschützten Oberwetz.",
        fareInfo: "Schöffengrund liegt im mittleren Ring unseres Einsatzgebiets. Die Anfahrt beträgt faire 15 Euro und identisch für alle sechs Ortsteile.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Tür im Eigenheim",
                description: "In den ruhigen Wohnsiedlungen von Schwalbach oder Laufdorf die Tür zugezogen? Unsere Spezialisten öffnen sie in Sekunden und absolut spurlos und ohne Folgeschäden am Schloss."
            },
            {
                icon: "shield-alert",
                title: "Historische Tür im Fachwerkhaus",
                description: "Antikes Schloss im denkmalgeschützten Ortskern von Oberwetz blockiert? Unsere Techniker arbeiten mit größter Sorgfalt an historischen Schlössern und Beschlägen und kein Kratzer, keine Beschädigung."
            },
            {
                icon: "briefcase",
                title: "Abgelegene Ortsteile & Landwirtschaft",
                description: "Schlüssel im Stall vergessen und die Haustür ist zu? Auch in den ländlichsten Ecken von Niederquembach oder Oberquembach sind wir schnell und zuverlässig zur Stelle."
            }
        ],

        aboutText: `
<p>Am südwestlichen Rand des Lahn-Dill-Kreises, dort wo die sanften Hügel des Taunusvorlandes beginnen, liegt die Gemeinde <strong>Schöffengrund</strong> mit ihren rund 6.500 Einwohnern. Sechs eigenständige Ortsteile und <strong>Schwalbach, Laufdorf, Niederwetz, Oberwetz, Niederquembach und Oberquembach</strong> und bilden ein ländliches Gemeinwesen, das durch seine malerischen Fachwerkhäuser, den <strong>denkmalgeschützten Ortskern von Oberwetz</strong> und eine überraschend lebendige Museumslandschaft besticht. Wenn in dieser idyllischen Umgebung die Haustür ins Schloss fällt, ist unser <strong>Schlüsseldienst Schöffengrund</strong> schnell zur Stelle.</p>

<h3>12 bis 15 Minuten in jeden Ortsteil</h3>
<p>Die teils höhergelegenen und versteckten Ortsteile des Schöffengrundes stellen viele überregionale Schlüsseldienste vor Navigationsherausforderungen. Nicht uns! Durch unsere lokale Präsenz und Ortskenntnis navigieren wir staufrei und sind in <strong>12 bis 15 Minuten</strong> direkt an Ihrer Tür und ob im zentral gelegenen Verwaltungssitz <strong>Schwalbach</strong> (ca. 1.900 Einwohner) oder im abgelegenen Oberwetz.</p>

<h3>Oberwetz unter Denkmalschutz & Motorradmuseum</h3>
<p>Was Schöffengrund kulturell besonders macht, ist die bemerkenswerte Erhaltung seiner historischen Substanz. Der gesamte <strong>Ortskern von Oberwetz</strong> steht als Gesamtanlage unter Denkmalschutz und ein seltenes Zeugnis dörflicher Baukultur im südlichen Kreisgebiet. <strong>Laufdorf</strong> begeistert mit gut erhaltenen Fachwerkhäusern aus dem 17. bis 19. Jahrhundert, einem historischen Backhaus und der berühmten Laufdorfer Linde. In <strong>Niederwetz</strong> überrascht das <strong>Vincent-Motorradmuseum</strong> und eine liebevoll kuratierte Sammlung historischer Motorräder, die Technikbegeisterte aus der ganzen Region anzieht. Die barocke <strong>Evangelische Kirche Schwalbach</strong> (1763-1767) mit ihrer charakteristischen Zwiebelhaube rundet das kulturelle Angebot ab.</p>

<h3>6 Ortsteile, ein Versprechen</h3>
<p><strong>Schwalbach</strong> als größter Ortsteil ist das administrative Herz der Gemeinde. <strong>Laufdorf</strong> (ca. 1.600 Einwohner) folgt als zweitgrößter Ort. <strong>Niederwetz</strong> (ca. 1.050 Einwohner) und <strong>Oberwetz</strong> (ca. 640 Einwohner) liegen etwas höher am Taunusrand. <strong>Niederquembach und Oberquembach</strong> vervollständigen als kleinere Ortsteile das Gemeindegebiet. Für alle sechs gilt: identische Anfahrtskosten, identische Reaktionszeit, identische Qualität.</p>

<h3>24/7 Notdienst an 365 Tagen</h3>
<p>In einer so ländlichen Gemeinde ist die Erreichbarkeit eines zuverlässigen Notdienstes besonders wichtig. Unser <strong>Schlüsselnotdienst Schöffengrund</strong> steht Ihnen rund um die Uhr zur Verfügung und auch bei Schneeglätte auf der Zufahrt nach Oberwetz, an einem Feiertag in Laufdorf oder mitten in der Nacht in Niederquembach.</p>

<h3>Ehrliche Festpreise für ehrliche Nachbarn</h3>
<p>Für eine einfache zugefallene Tür berechnen wir werktags tagsüber <strong>fix 99 Euro</strong>. Die Anfahrt in den Schöffengrund kostet <strong>15 Euro</strong> und pauschal für alle sechs Ortsteile. Den Gesamtpreis erfahren Sie am Telefon, bevor unser Monteur losfährt. Keine versteckten Zuschläge, auch nicht für die höher gelegenen Ortsteile.</p>
`,

        localTestimonials: [
            {
                name: "Dietmar W.",
                quote: "In Schwalbach morgens die Tür zugezogen. Der Monteur war in 13 Minuten da, Tür in Sekunden offen, kein Kratzer. 114 Euro gesamt. Ehrlich, schnell, professionell und endlich ein Schlüsseldienst, dem man vertrauen kann.",
                rating: 5
            },
            {
                name: "Hannelore B.",
                quote: "Wir wohnen in Oberwetz im alten Fachwerkhaus. Der Techniker hat das historische Schloss mit beeindruckender Vorsicht geöffnet. Absolut keine Beschädigung. Äußerst empfehlenswert!",
                rating: 5
            },
            {
                name: "Ralf P.",
                quote: "Sonntagabend in Laufdorf ausgesperrt. Schneller Notdienst, fairer Wochenendpreis, saubere Arbeit. Der Techniker hat sogar noch Sicherheitstipps gegeben. Top Service im Schöffengrund!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Mitten im Schöffengrund ausgesperrt? Von Schwalbach über Laufdorf bis nach Oberwetz und schnelle Hilfe, transparente Festpreise und zerstörungsfreie Öffnung. 24/7 Notdienst.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gilt die gleiche Anfahrtspauschale auch für Oberwetz und Oberquembach?",
                answer: "Ja, absolut. Die 15 Euro Anfahrt gelten pauschal für alle sechs Schöffengrunder Ortsteile und von Schwalbach über Laufdorf und Niederwetz bis zu den Quembach-Orten. Keine Höhenzuschläge."
            },
            {
                question: "Können Sie historische Schlösser im denkmalgeschützten Oberwetz öffnen?",
                answer: "Definitiv. Unsere Techniker sind speziell im Umgang mit antiken Kastenschlössern, Buntbartschlüsseln und historischen Beschlägen geschult. Wir behandeln jedes denkmalgeschützte Gebäude mit größter Sorgfalt."
            },
            {
                question: "Wie schnell finden Sie im Schöffengrund die richtige Adresse?",
                answer: "Wir sind lokal stationiert und kennen jeden Ortsteil persönlich. Anders als bundesweite Vermittler navigieren wir staufrei und punktgenau und in 12 bis 15 Minuten sind wir bei Ihnen."
            }
        ],
        neighbors: ["schluesseldienst-braunfels", "schluesseldienst-huettenberg", "schluesseldienst-waldsolms"]
    }
];
