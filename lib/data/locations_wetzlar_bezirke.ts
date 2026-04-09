import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

/**
 * ══════════════════════════════════════════════════════════════
 * Wetzlar Nauborn (fehlender Stadtteil) + 8 Kernstadt-Bezirke
 * Ring 1 und 0-3 km, keine Anfahrtskosten
 * ══════════════════════════════════════════════════════════════
 */
export const wetzlarBezirkeLocations: LocationData[] = [
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // NAUBORN und Offizieller Stadtteil (KRITISCH)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "wetzlar-nauborn",
        slug: "schluesseldienst-wetzlar-nauborn",
        name: "Wetzlar-Nauborn",
        plz: "35580",
        coordinates: { latitude: 50.5300, longitude: 8.4914 },
        logistics: { drivingTimeMinutes: "5-8", distanceFromHQ: 4 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Stadtteil Wetzlar)" },
        seo: {
            metaTitle: "Schlüsseldienst Nauborn — Türöffnung ab 99€",
            metaDescription: "Schlüsseldienst Wetzlar-Nauborn: In 5-8 Min. vor Ort im Wetzbachtal. Festpreis ab 99€, keine Anfahrtskosten. 24/7 Notdienst: 06441-8056279"
        },

        routeDescription: "Von unserem Standort in Wetzlar führt die Route über die Nauborner Straße (L3284) direkt ins Wetzbachtal. Über die Stoppelberger Hohl und die Karl-Kellner-Straße navigieren wir gezielt in jeden Winkel Nauborns.",
        mainRoad: "L3284",
        distanceKm: 4,
        character: "Zweitgrößter Stadtteil Wetzlars im idyllischen Wetzbachtal und ehemaliges Bergarbeiterdorf mit hoher Wohn- und Lebensqualität",
        populationApprox: "~4.000",
        landmark: "Evangelische Kirche Nauborn (romanische Hallenkirche, hessisches Kulturdenkmal)",
        buildingTypes: "Historische Fachwerkhäuser im alten Ortskern, Nachkriegs-Siedlungshäuser, moderne Neubaugebiete mit klimafreundlichen Wohngebäuden und Tiefgaragen.",
        parkingInfo: "In den engen Gassen des historischen Ortskerns nutzen wir kompakte Einsatzfahrzeuge. In den Neubaugebieten stehen ausreichend Parkflächen zur Verfügung.",
        heroVariant: "Ausgesperrt im Wetzbachtal? Ihr Schlüsseldienst für Nauborn ist sofort da.",
        fareInfo: "Nauborn ist ein offizieller Stadtteil von Wetzlar. Deshalb berechnen wir in ganz Nauborn und vom historischen Ortskern bis zu den Neubaugebieten und absolut keine Anfahrtskosten.",

        scenarios: [
            {
                icon: "home",
                title: "Zugefallene Tür im alten Ortskern",
                description: "Die schweren Holztüren der historischen Fachwerkhäuser im Nauborner Zentrum erfordern besonders schonende Öffnungstechniken. Mit feinfühligen Lockpicking-Methoden öffnen wir ohne den kleinsten Kratzer."
            },
            {
                icon: "building",
                title: "Neubau-Sicherheitstür klemmt",
                description: "In den modernen Wohngebieten Nauborns sind hochwertige Mehrfachverriegelungen Standard. Unsere Techniker kennen die Mechanik dieser Systeme und entriegeln sie professionell."
            },
            {
                icon: "shield-alert",
                title: "Schlüsselverlust nach Wanderung am Stoppelberg",
                description: "Nach einem Ausflug zum Stoppelberg (402 m) den Schlüssel verloren? Wir öffnen Ihre Haustür und tauschen den Zylinder direkt vor Ort aus und für Ihre Sicherheit."
            }
        ],

        aboutText: `
<p>Der Stadtteil <strong>Nauborn</strong> liegt südwestlich der Wetzlarer Innenstadt, eingebettet in das malerische <strong>Wetzbachtal</strong>, das historisch auch als „Siebenmühlental" bekannt ist und benannt nach den sieben Mühlen, die einst das Tal prägten. Von den ursprünglichen Mühlenbetrieben existieren noch zwei im Ort. Mit rund 4.000 Einwohnern ist Nauborn nach Niedergirmes der zweitgrößte Stadtteil Wetzlars und verbindet ländliche Idylle mit urbaner Anbindung.</p>

<h3>Vom Bergarbeiterdorf zum modernen Wohnort</h3>
<p>Ende des 19. Jahrhunderts war Nauborn ein typisches mittelhessisches Bergarbeiterdorf, geprägt durch Kleinlandwirtschaft und die bedeutenden Eisenerzbergwerke Uranus, Juno und Amanda in der Region. Heute hat sich Nauborn zu einem attraktiven Wohnstandort mit hoher Lebensqualität entwickelt. Die Infrastruktur umfasst Geschäfte, Ärzte, Apotheken und Banken und alles im Ort verfügbar, ohne in die Kernstadt fahren zu müssen.</p>

<h3>Keine Anfahrtskosten im gesamten Wetzbachtal</h3>
<p>Als offizieller Stadtteil von Wetzlar (PLZ 35580) liegt Nauborn vollständig in unserem kostenfreien Kern-Einsatzgebiet. Über die L3284, die kürzlich grundlegend saniert wurde, erreichen unsere Monteure jeden Winkel Nauborns in nur 5 bis 8 Minuten. Die Anfahrt ist für Sie komplett kostenfrei und Ihr Festpreis von 99 Euro ist genau das: ein Festpreis ohne versteckte Aufschläge.</p>

<h3>Schonende Öffnung für jede Nauborner Bausubstanz</h3>
<p>Nauborns Architektur ist vielfältig: Im historischen Ortskern dominieren liebevoll erhaltene Fachwerkhäuser und denkmalgeschützte Gebäude wie die romanische Evangelische Kirche und die Dickesmühle. Am Ortsrand entstehen moderne, klimafreundliche Neubauten mit Tiefgaragen und hochwertigen Sicherheitstüren. Unsere Techniker beherrschen das gesamte Spektrum und von der behutsamen Öffnung jahrhundertealter Holztüren bis zur professionellen Entriegelung modernster Mehrfachverriegelungen.</p>

<h3>Der höchste Punkt Wetzlars</h3>
<p>Mit dem Stoppelberg (402 Meter) liegt der höchste Punkt der gesamten Stadt Wetzlar in Nauborn. Der „Wilde Stein" bietet einen atemberaubenden Ausblick über den Stadtteil und das Wetzbachtal. Egal ob Sie von einer Wanderung zurückkehren und feststellen, dass der Schlüssel fehlt, oder ob abends plötzlich das Türschloss klemmt: Wir sind in wenigen Minuten bei Ihnen und lösen das Problem und professionell, fair und zum Festpreis.</p>
`,

        localTestimonials: [
            {
                name: "Familie Hoffmann",
                quote: "Sonntagabend in Nauborn ausgesperrt und der Monteur war in 7 Minuten da! Tür wurde ohne jeden Kratzer geöffnet, obwohl es eine alte Holztür ist. Und wirklich null Anfahrtskosten. Top-Service!",
                rating: 5
            },
            {
                name: "Tobias L.",
                quote: "Nach dem Joggen am Stoppelberg festgestellt: Schlüssel weg. Der Schlüsseldienst war super schnell da, hat die Tür geöffnet und gleich einen neuen Zylinder eingebaut. Alles zum vorher genannten Festpreis.",
                rating: 5
            },
            {
                name: "Ingrid M.",
                quote: "Im Neubaugebiet die Sicherheitstür zugezogen. Hatte Angst vor hohen Kosten. Aber 99 Euro werktags, keine Anfahrt und genau wie am Telefon gesagt. Sehr seriös!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgesperrt im idyllischen Wetzbachtal? Keine Sorge und als offizieller Stadtteil von Wetzlar sind wir in nur 5 bis 8 Minuten bei Ihnen in Nauborn. Ohne Anfahrtskosten, zum garantierten Festpreis.",
            mainText: "",
            serviceZerstörungsfrei: "In Wetzlar-Nauborn öffnen wir zugefallene Türen und vom Fachwerkhaus bis zum Neubau und in 99% der Fälle absolut zerstörungsfrei.",
            serviceBohren: "Bei abgebrochenen Schlüsseln oder defekten Zylindern in Nauborn verwenden wir Spezialwerkzeug und tauschen den Zylinder sofort vor Ort aus.",
            service247: "Unser 24/7-Notdienst steht Ihnen in Wetzlar-Nauborn an 365 Tagen im Jahr zur Verfügung und auch nachts und an Feiertagen."
        },
        faqs: [
            {
                question: "Ist Nauborn wirklich im kostenlosen Anfahrtsgebiet?",
                answer: "Ja! Nauborn ist ein offizieller Stadtteil von Wetzlar (PLZ 35580) und gehört zu unserem Kern-Einsatzgebiet. Die Anfahrt ist für Sie komplett kostenfrei."
            },
            {
                question: "Wie lange braucht der Monteur nach Nauborn?",
                answer: "Über die L3284 erreichen wir Nauborn in 5 bis 8 Minuten und sowohl den alten Ortskern als auch die Neubaugebiete."
            },
            {
                question: "Können Sie die historischen Türen im Nauborner Ortskern öffnen?",
                answer: "Absolut. Unsere Techniker sind auf die Mechanik älterer Beschläge und Fachwerktüren spezialisiert. Wir arbeiten mit maximaler Sorgfalt und hinterlassen keine Spuren."
            },
            {
                question: "Was kostet die Türöffnung in Nauborn am Wochenende?",
                answer: "An Wochenenden und Feiertagen beträgt unser Festpreis 179 Euro und ohne Anfahrtskosten, da Nauborn zum Wetzlarer Kerngebiet gehört."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-hermannstein", "schluesseldienst-schoeffengrund", "schluesseldienst-wetzlar-steindorf"]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // KERNSTADT-BEZIRKE (8 Pages)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "wetzlar-dalheim",
        slug: "schluesseldienst-wetzlar-dalheim",
        name: "Wetzlar-Dalheim",
        plz: "35578",
        coordinates: { latitude: 50.5450, longitude: 8.4950 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 2 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Dalheim — In 5 Min. da ab 99€", metaDescription: "Schlüsseldienst für Wetzlar-Dalheim. 3-5 Min. Anfahrt, keine Anfahrtskosten. Festpreis ab 99€. Notdienst: 06441-8056279" },
        // === 10X ERWEITERUNG ===
        routeDescription: "Dalheim liegt als westlicher Ausläufer direkt im Stadtgebiet. Von unserem Wetzlarer Standort aus erreichen wir den Bezirk meist kreuzungsfrei über die B49 (Abfahrt Dalheim) oder die Europastraße in unter 5 Minuten.",
        mainRoad: "B49 / Europastraße",
        distanceKm: 2,
        character: "Einwohnerstarker Stadtbezirk mit parkähnlichen Grünflächen und einer Mischung aus sozialem Wohnungsbau und modernen Wohnsiedlungen.",
        populationApprox: "~3.250",
        landmark: "Ehemalige Bergwerkssiedlungen / Linearbandkeramische Grabungsstätten",
        buildingTypes: "Typische Nachkriegs-Siedlungshäuser, mehrgeschossiger Wohnungsbau der 70er Jahre sowie sukzessiv modernisierte Einfamilienhaus-Quartiere.",
        parkingInfo: "Die weitläufigen Parkplätze vor den Mehrfamilienhäusern am Dalheimer Kopf ermöglichen unseren Technikern stets extrem kurze Wege für den Werkzeugtransport.",
        heroVariant: "Ausgesperrt in Wetzlar-Dalheim? Wir sind der Schlüsseldienst aus der direkten Nachbarschaft.",
        fareInfo: "Dalheim ist ein offizieller Kernstadt-Bezirk von Wetzlar. Daher garantieren wir hier eine absolute Null-Euro-Anfahrt.",

        scenarios: [
            {
                icon: "home",
                title: "Mehrfamilienhaus Dalheimer Kopf",
                description: "Die Tür zur Etagenwohnung ist ins Schloss gefallen. Wir öffnen mit feinsten Fallengleitern und absolut lautlos und garantiert ohne Schäden am Zylinder."
            },
            {
                icon: "shield-alert",
                title: "Gewerbe & Lebensmittelhandel",
                description: "Schlüssel zum Lager abgebrochen oder Rolltor am Einkaufszentrum blockiert? Wir extrahieren Fragmente und setzen BKS-Sicherheitszylinder sofort ein."
            },
            {
                icon: "briefcase",
                title: "Verklemmte Sicherheitstür im Neubau",
                description: "Modernisierte Wohnungen in Dalheim haben oft schwere Mehrfachverriegelungen. Unsere Fachkräfte lösen Sperren schonend ohne Beschädigung des teuren Türblatts."
            }
        ],

        aboutText: `
<p>Der Stadtbezirk <strong>Dalheim</strong> liegt westlich der historischen Altstadt und beherbergt rund 3.250 Einwohner. Das Quartier zeichnet sich durch einen hohen Grünanteil und parkähnliche Strukturen aus und eine Folge der Bergbauvergangenheit, da die komplexen Bodenverhältnisse dichte Bebauung oft verhinderten. Archäologische Funde aus der Zeit der Linearbandkeramik belegen, dass Menschen hier schon vor 7.500 Jahren siedelten. Heute ist Dalheim ein lebendiger Wohnbezirk. Wenn hier der Schlüssel klemmt, ist unser <strong>Schlüsseldienst Wetzlar-Dalheim</strong> in Minutenschnelle zur Stelle.</p>

<h3>3 bis 5 Minuten: Direkte Nachbarschaft</h3>
<p>Durch die unmittelbare Nähe von gerade einmal rund 2 Kilometern zum Stadtzentrum und die hervorragende Anbindung über die B49-Abfahrt Wetzlar-Dalheim erreichen unsere Einsatzfahrzeuge jede Straße in diesem Bezirk in <strong>3 bis 5 Minuten</strong>. Ob im älteren Teil an der Berliner Straße oder in den neueren Wohnkomplexen und wir garantieren Ihnen absolute Bestzeiten.</p>

<h3>Null-Euro-Anfahrt in der Kernstadt</h3>
<p>Als offizieller Stadtbezirk von Wetzlar (PLZ 35578) fällt Dalheim vollständig in unsere kostenfreie Anfahrtszone. Für die reine Öffnung einer zugefallenen Tür berechnen wir werktags tagsüber einen transparenten <strong>Festpreis von 99 Euro</strong>. Keine Kilometerpauschale, keine Rüstzeit, keine versteckten Gebühren.</p>

<h3>Handwerkliche Präzision im Dalheimer Wohngebiet</h3>
<p>Die Architektur in Dalheim ist vielfältig: Von robusten Siedlungshäusern aus der Nachkriegszeit über große Mehrfamilienhaushalte bis hin zu energetisch modernisierten Neubauten. Unsere Monteure sind auf jedes Schloss-Szenario vorbereitet. Mit speziellen Fräsen für verklemmte Riegel und modernsten Elektropicks für simple Fallenöffnungen gewährleisten wir eine spürbar über 99% liegende Zerstörungsfreiheits-Quote bei zugefallenen Haus- und Wohnungstüren in Dalheim.</p>`,

        localTestimonials: [
            {
                name: "Karsten B.",
                quote: "Kurz zur Mülltonne gegangen, Tür durch Zugluft am Dalheimer Kopf zugefallen. Der Techniker war in kaum 4 Minuten auf dem Parkplatz und hat die Tür mit einer Plastikkarte geöffnet. 99 Euro, super ehrlich.",
                rating: 5
            },
            {
                name: "Sabine F.",
                quote: "Schlüssel am Siedlungshaus auf der Breslauer Straße abgebrochen. Sehr professionelle Hilfe mit Spezialeisenwerkzeug. Der abgebrochene Bart wurde entfernt, das Schloss blieb heile.",
                rating: 5
            },
            {
                name: "Markus H.",
                quote: "Nachts um zwei Uhr riefen wir den Notdienst nach Dalheim. Wochenendtarif vorher genau kommuniziert, keine Anfahrtskosten berechnet. Schnelle und leise Öffnung, die Nachbarn haben nichts gemerkt.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringend Hilfe in Wetzlar-Dalheim gesucht? Wir sind Ihr lokaler Schlüsseldienst aus direkter Nachbarschaft. Festpreis von 99€, absolut keine Anfahrtskosten, 24/7 erreichbar.",
            mainText: `<p>Der Stadtbezirk <strong>Dalheim</strong> liegt westlich der Kernstadt Wetzlar. Als lokaler Schlüsseldienst sind wir in Dalheim extrem schnell vor Ort. Ob am Dalheimer Kopf oder in der Berliner Straße und Sie zahlen <strong>keine Anfahrtskosten</strong> und profitieren von transparenten Festpreisen.</p><p>Unsere Monteure öffnen täglich zugefallene Türen am Dalheimer Kopf und in den umliegenden Wohngebieten zu über 99% materialschonend.</p>`,
            serviceZerstörungsfrei: "In Wetzlar-Dalheim öffnen wir zugefallene Haustüren in Wohnquartieren mit maximaler Materialschonung ohne Schäden.",
            serviceBohren: "Sollte ein Schlossdefekt vorliegen, bohren wir mit Präzisionsgeräten und setzen sofort ein neues Marken-Zylinderschloss ein.",
            service247: "Egal ob Sonntagnacht oder Feiertag: Unser Notdienst ist für Wetzlar-Dalheim rund um die Uhr auf Abruf bereit."
        },
        faqs: [
            { question: "Fallen in Dalheim Anfahrtskosten an?", answer: "Nein. Dalheim ist als Kernstadt-Bezirk Teil der kostenfreien Null-Euro-Zone. Sie zahlen ausschließlich die transparente Einsatzpauschale ab 99 Euro." },
            { question: "Sind Sie auch nachts in Dalheim einsatzbereit?", answer: "Unser Notdienst operiert an 365 Tagen im Jahr 24 Stunden durchgängig. Für Dalheim gelten dabei sehr schnelle Anfahrtswege von unter 5 Minuten." },
            { question: "Das Schloss meines Reihenhauses klemmt und können Sie sofort reparieren?", answer: "Ja, unsere Fahrzeuge sind rollende Werkstätten. Wir führen gängige Zylinderformate (BKS, ABUS) mit und können defekte Schließanlagen am Dalheimer Kopf sofort austauschen." },
            { question: "Öffnen Sie auch gewerbliche Türen im Einzelhandel?", answer: "Selbstverständlich. Wir betreuen auch Supermärkte und Ladengeschäfte in Dalheim und öffen verklemmte Rolltore, Glastüren oder Personalzugänge rasch und materialschonend." }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-niedergirmes", "schluesseldienst-wetzlar-nauborn"]
    },
    {
        id: "wetzlar-altstadt",
        slug: "schluesseldienst-wetzlar-altstadt",
        name: "Wetzlar-Altstadt",
        plz: "35578",
        coordinates: { latitude: 50.5558, longitude: 8.5020 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 1 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Wetzlar Altstadt — Schonende Öffnung", metaDescription: "Schlüsseldienst für die Wetzlarer Altstadt. Spezialisiert auf denkmalgeschützte Türen. In 3 Min. da. Festpreis ab 99€. Jetzt: 06441-8056279" },
        // === 10X ERWEITERUNG ===
        routeDescription: "Direkt im Herzen der historischen Altstadt. Von unserer Zentrale aus bewegen wir uns in Windeseile und oft mit Sondergenehmigungen und durch die verwinkelten Altstadtstrukturen.",
        mainRoad: "Langgasse / Domplatz",
        distanceKm: 1,
        character: "Historischer Stadtkern der ehemals Freien Reichsstadt (Kulturdenkmal-Ensemble), geprägt durch dichte Fachwerkarchitektur und verwinkelte Gassen.",
        populationApprox: "~2.500",
        landmark: "Wetzlarer Dom (unvollendetes Sakralgebäude romanisch-gotisch), Lottehaus & historischer Fischmarkt",
        buildingTypes: "Geschlossene Fachwerkbebauung (Kulturdenkmäler), historische Holzportale, teils denkmalgeschützte Kasten- und Buntbartschlösser sowie enge Treppenhauszugänge in der Kramerstraße.",
        parkingInfo: "Dank polizeilicher Ausnahmegenehmigungen für Handwerker-Notdienste parken unsere Kompaktwagen extrem dicht am Einsatzort in der verkehrsberuhigten Kernzone.",
        heroVariant: "Ausgesperrt im Herzen von Wetzlar? Wir sind die Experten für Fachwerk und Denkmalschutz.",
        fareInfo: "Die Wetzlarer Altstadt liegt in der Zone 0. Keine Fahrtkosten, keine Parkgebührenzuschläge und 100% kostenloser Antritt.",

        scenarios: [
            {
                icon: "home",
                title: "Historische Fachwerktür zugefallen",
                description: "Spaziergang auf dem Domplatz und der Wind drückt die schwere Eichentür am Brodschirm zu? Wir öffnen sensible Altbau-Portale mit weichen Fallengleitern und garantiert kratzfrei."
            },
            {
                icon: "shield-alert",
                title: "Kastenschloss-Defekt in der Altstadt",
                description: "Alte Kastenschlösser können unvorhergesehen mechanisch versagen. Wir reparieren solche Raritäten, statt alles sofort durch neumodische Standardlösungen zu ersetzen."
            },
            {
                icon: "briefcase",
                title: "Tourismus & Gastronomie-Objekte",
                description: "Verschlossene Hintertür beim Restaurant am Fischmarkt oder am Kornmarkt? Pünktlich zur Öffnung sind wir da und bewahren gastronomische Betriebe vor Einnahmeverlusten."
            }
        ],

        aboutText: `
<p>Die <strong>Wetzlarer Altstadt</strong> ist das unumstrittene historische und touristische Zentrum der Stadt. Anerkannt als Gesamtanlage und Kulturdenkmal, beheimatet dieses Areal Schätze wie den weltberühmten, architektonisch einzigartigen Wetzlarer Dom, historische Plätze wie den Eisenmarkt und Fischmarkt sowie das Lottehaus, das Literaturgeschichte schrieb. Inmitten geschlossener, pittoresker Fachwerkensembles wie dem Brodschirm und wo das älteste Fachwerkhaus der Stadt (erbaut 1356) steht und leben rund 2.500 Menschen in denkmalgeschützter Substanz. Fällt an solch wertvollen und oft sensiblen Gebäuden die Tür ins Schloss, ist der <strong>Schlüsseldienst Wetzlar-Altstadt</strong> mit besonderem Fingerspitzengefühl gefragt.</p>

<h3>Blitzschnell durch die Gassen</h3>
<p>Die enge, mittelalterliche Straßenführung, oft steil ansteigend, fordert Logistik. Durch unsere absolute Standortnähe und spezielle Zufahrtsgenehmigungen für die Fußgängerzonen am Kornmarkt oder am Schillerplatz reduzieren wir die Wartezeit der Altstadtbewohner auf ein absolutes Minimum. Erfahrungsgemäß stehen wir in den verwinkelten Altstadtbereichen oft bereits in <strong>3 bis 5 Minuten</strong> mit unserem Werkzeug direkt an Ihrem Türportal.</p>

<h3>Fachexpertise für Denkmal und Fachwerk</h3>
<p>Ein modernes Kunststoff-Portal erfordert andere Öffnungstechniken als eine 300 Jahre alte, mehrfach handgeschnitzte Eichenholztür am Buttermarkt. Wer hier unsachgemäß bohrt oder hebelt, riskiert an unwiederbringlicher Bausubstanz tausende Euro Schaden. Unsere Techniker sind auf denkmalgeschützte Türen trainiert. 99 % der zugefallenen Altstadttüren öffnen unsere Handwerker dank minimalinvasiver Haken, spezieller Slider und professioneller Pick-Geräte vollkommen materialschonend.</p>

<h3>Null-Euro-Anfahrt im Wetzlarer Zentrum</h3>
<p>Wie für alle Gemarkungen des Kernbereichs kassieren wir auch im exklusiven Altstadtring <strong>keinerlei Fahrt- oder Rüstkosten</strong>. Die reine Arbeitsleistung zur Öffnung beginnt werktags bei 99 Euro Festpreis. Ehrlicher, regionaler und handwerklich perfekter Service direkt im Herzen der Goethestadt.</p>`,

        localTestimonials: [
            {
                name: "Renate S.",
                quote: "Ich lebe am Eisenmarkt. Eine ehrwürdige Holztür aus dem 18. Jahrhundert war zugefallen. Ich hatte unglaubliche Angst um das teure Portal. Der Techniker war in 3 Minuten da, hantierte mit speziellen Drähten und nach zehn Sekunden stand ich in meinem Flur. Wahnsinn!",
                rating: 5
            },
            {
                name: "Bernd W.",
                quote: "Schlüsseldienst direkt in der Wetzlarer Altstadt gesucht, 06441 gewählt. Pünktlicher Monteur, sehr diskret. Mein antikes Kastenschloss klemmte; er hat es repariert und neu geölt statt es direkt aufzubohren.",
                rating: 5
            },
            {
                name: "Janina F.",
                quote: "Mein Café nahe dem Domplatz hatte ein verklemmtes Profilschloss am Hintereingang. Dank der schnellen Rettung (7 Minuten nach Anruf) konnte ich rechtzeitig den Betrieb starten. Top Leute!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Behutsame Notöffnung am Wetzlarer Dom oder am Fischmarkt gewünscht? Spezialisten für Fachwerk- und Denkmalschutztüren direkt in der Nachbarschaft helfen und für 99€, ohne Anfahrtskosten.",
            mainText: `<p>Die Wetzlarer Altstadt ist das kulturelle und historische Herz der Stadt. Wer sich hier am Domplatz, Schillerplatz oder Kornmarkt aussperrt, braucht Handwerker, die mit <strong>denkmalgeschützter Architektur</strong> umgehen können.</p><p>Unser Schlüsseldienst befreit Sie in den verwinkelten Altstadtgassen oft in Rekordzeit von 3 bis 5 Minuten. Dabei arbeiten wir mit speziellem Werkzeug an historischen Türen, um keinerlei Schäden zu hinterlassen.</p>`,
            serviceZerstörungsfrei: "Zugefallene antike Wohnungstüren in der Altstadt öffnen wir mit speziell angepassten, materialschonenden Gleitern.",
            serviceBohren: "Müssen Schließzylinder ausgetauscht werden, tun wir das absolut vorsichtig, damit Beschläge historischer Türen unversehrt bleiben.",
            service247: "Wir kennen uns in der Wetzlarer Altstadt bestens aus und sind rund um die Uhr, 365 Tage im Jahr für Sie erreichbar."
        },
        faqs: [
            { question: "Beschädigen Sie meine antike Holztür?", answer: "Nein. Liegt nur eine zugefallene Falle vor, arbeiten wir an der historischen Substanz in der Wetzlarer Altstadt vollständig zerstörungsfrei und extrem materialschonend." },
            { question: "Muss ich Anfahrtskosten zahlen, weil ich in der Fußgängerzone am Kornmarkt wohne?", answer: "Selbstverständlich nicht. Wir verfügen über Ausnahmegenehmigungen und stornieren innerhalb der Kernstadt sämtliche Anfahrtsgebühren für Sie." },
            { question: "Helfen Sie auch nachts nach dem Besuch im Altstadt-Erlebnis?", answer: "Wir sind 365 Tage im Jahr 24/7 bereit. Egal ob Sie nachts um zwei Uhr vom Lahnfleck kommen und den Schlüssel vermissen und ein Monteur ist in wenigen Minuten vor Ort." },
            { question: "Können Sie alte antike Schlösser sofort nachrüsten?", answer: "Sollte ein historisches Schloss defekt sein, prüfen wir zunächst eine Reparatur. Falls ein Austausch der Mechanik zwingend ist, verbauen wir sicherheitstechnisch hochwertige Modernisierungen unter Bewahrung der Optik." }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-dalheim", "schluesseldienst-wetzlar-neustadt"]
    },
    {
        id: "wetzlar-neustadt",
        slug: "schluesseldienst-wetzlar-neustadt",
        name: "Wetzlar-Neustadt",
        plz: "35578",
        coordinates: { latitude: 50.5570, longitude: 8.5080 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 1 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Wetzlar-Neustadt — 24/7 ab 99€", metaDescription: "Schlüsseldienst Wetzlar-Neustadt. In 3 Min. vor Ort, Festpreis ab 99€, keine Anfahrtskosten. Notdienst: 06441-8056279" },
        // === 10X ERWEITERUNG ===
        routeDescription: "Direkt östlich/nordöstlich an die historische Altstadt grenzend. Wir erreichen die Neustadt bequem über den Buderusplatz und die Gloelstraße innerhalb weniger Abzweigungen.",
        mainRoad: "Gloelstraße / Eduard-Kaiser-Straße",
        distanceKm: 1,
        character: "Vitaler Innenstadtbezirk, stark vom Behördenzentrum und gründerzeitlichen Villen geprägt.",
        populationApprox: "~2.800",
        landmark: "Rathaus Wetzlar / Lahnufer",
        buildingTypes: "Prächtige Gründerzeit-Stadtwohnungen, großvolumige Verwaltungsbauten sowie stark sanierte, hochgesicherte Mehrfamilienobjekte im Innenstadtring.",
        parkingInfo: "Trotz verdichteter Parkräume im Behördenviertel garantieren unsere Notfallflotten ein rasches Vorankommen bis direkt an das Wohnportal.",
        heroVariant: "Notöffnung in der Wetzlarer Neustadt gesucht? Profis aus dem direkten Lahn-Umfeld.",
        fareInfo: "Die komplette Wetzlarer Neustadt wird absolut anfahrtskostenfrei betreut.",

        scenarios: [
            {
                icon: "home",
                title: "Einbruchschaden an Gründerzeittür",
                description: "Hebelschaden an einer sanierten Wohnungstür entdeckt? Wir sichern Objekte in der Neustadt rund um die Uhr notdürftig ab und reparieren Sicherheitsbeschläge."
            },
            {
                icon: "shield-alert",
                title: "Wohnungstür zugezogen nahe Rathaus",
                description: "Nur kurz Post geholt an der Ernst-Leitz-Straße? Wir bedienen die Profilzylinder sanft mit Gleitwerkzeugen und die Tür schwingt unbeschadet auf."
            },
            {
                icon: "briefcase",
                title: "Büro oder Kanzlei verschlossen",
                description: "Ein Aktennotfall rückt näher, aber die Eingangstür der Kanzlei in der Neustadt blockiert? Diskret und zeitsparend öffnen wir Schließanlagen modernster Art."
            }
        ],

        aboutText: `
<p>Die Wetzlarer <strong>Neustadt</strong> spannt sich unmittelbar nordöstlich der historischen Fachwerk-Altstadt auf. Architektonisch stark durch repräsentative Villen und breitere Alleen der Gründerzeit geprägt, beherbergt der Bezirk heute nicht nur exklusive städtische Wohnquartiere, sondern auch einen Großteil des administrativen Lebens (Polizei, Arbeitsamt, Neue Rathaus Wetzlar). Wenn hier inmitten des pulsierenden Innenstadtalltags ein Türschloss bockt oder sich das Büro der Behördenmitarbeiterin nicht aufsperren lässt, eilt der <strong>Schlüsseldienst Wetzlar-Neustadt</strong> sofort herbei.</p>

<h3>Minutenschnelle Präsenz am Rathaus</h3>
<p>Ob Sie im Schatten des neuen Rathauses (Ernst-Leitz-Straße) oder an der geschäftigen Gloelstraße nächtigen: Unser Zentrallager liegt fast auf Steinwurfdistanz. Lange Dispotouren? Fehlanzeige. Wir rücken innerhalb der Neustadt in einem verlässlichen <strong>3- bis 5-Minuten-Zeitfenster</strong> an und erlösen Sie rasch aus Ihrer Warteposition.</p>

<h3>Professionelles Vorgehen bei Altbau-Giganten</h3>
<p>Die opulenten Gründerzeitgebäude in der Neustadt sind im Laufe der Jahre stark energetisch und sicherheitsrelevant saniert worden. Schwere Holztüren, massive Mehrfachverriegelungen sowie Kernziehschutzbeschläge sind hier an der Tagesordnung. Unser Monteur-Pool führt Hightech-Öffnungsgeräte im Gepäck, die genau auf solche gehobenen Altbau- und Kanzleisicherungen abgestimmt sind. 99 Prozent der zugefallenen Türen weichen hierbei vollends ohne Aufbohren des Schlosses.</p>

<h3>100% ohne Anfahrtskosten</h3>
<p>Die Neustadt markiert neben der Altstadt das dichteste Zentrum von Wetzlar (PLZ 35578). Die logische Konsequenz: absolute Null-Toleranz bei Fahrtkosten in diesem Bezirk. Unser Versprechen gilt: Eine Türöffnung am Tag wird Sie hier bei einer ungeprägten zugefallenen Falle fest 99 Euro kosten. Regional, zuverlässig, stark.</p>`,

        localTestimonials: [
            {
                name: "Uwe T.",
                quote: "Kurz auf dem Balkon im Neustadt-Altbau gewesen, Wind schlägt Tür zu! Durch den Ruf eines Nachbarn den Schlüsseldienst gerufen. Super-schnelle Ankunft (4 Min.), perfekte Arbeit, keine Abzocke.",
                rating: 5
            },
            {
                name: "Kerstin G.",
                quote: "Unsere Anwaltskanzlei nahe des Amtsgerichts hatte ein defektes Sicherheitsschloss. Morgens um 7:30 Uhr war extrem schnelle Hilfe gefragt. Der Monteur kam direkt vom Wetzlarer Zentrallager, öffnete und montierte BKS-Technik in 20 Minuten.",
                rating: 5
            },
            {
                name: "Andreas F.",
                quote: "In der Gloelstraße ausgesperrt, Sonntagnacht. Absolute Preistransparenz vorab am Telefon (179 Euro). Seriöser Mann, hat sogar Tipps zur Einbruchsobhut in der Gründerzeitwohnung gegeben.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Panik in der Wetzlarer Neustadt? Ein Anruf genügt. In 3 bis 5 Minuten öffnet unser Expernteam Wohnungen und Büros von der Gloelstraße bis zum Rathaus. Ohne Fahrkosten, ab 99€.",
            mainText: `<p>Die Wetzlarer Neustadt ist geprägt durch herrschaftliche Gründerzeitbauten, moderne Büros und das städtische Behördenviertel. Falls Sie hier rund um Rathaus oder Gloelstraße vor verschlossener Tür stehen, handeln wir sofort.</p><p>Unsere Monteure öffnen schwere Altbautüren ebenso souverän wie verklemmte Sicherheitsschlösser von Geschäftsräumen und zum Festpreis und <strong>ohne Anfahrtsgebühren</strong>.</p>`,
            serviceZerstörungsfrei: "In Wetzlar-Neustadt öffnen wir zugefallene Sicherheitstüren und Kamerasystemtüren schonend und restlos ohne Defekte.",
            serviceBohren: "Verriegelte Türen von Geschäftsräumen öffnen unsere Profis im Notfall durch minimalinvasives Fräsen des Zylinders.",
            service247: "Egal ob Arbeits- oder Wochenende: Für die Wetzlarer Neustadt bieten wir unsere garantierte 24/7-Schlüsselbereitschaft an."
        },
        faqs: [
            { question: "Ich wohne im Gründerzeit-Altbau in der Neustadt und wird gebohrt?", answer: "Nein, solange die Tür nicht dreifach verriegelt ist, öffnen wir mit sanften Methoden (Bleche, Spione, Angeltechnik) absolut ohne Bohrer." },
            { question: "Berechnen Sie eine Anfahrt bis zur Ernst-Leitz-Straße?", answer: "Sämtliche Straßen innerhalb der Wetzlarer Neustadt sind für uns Anfahrts- und Kilometergebührenfrei. Sie zahlen lediglich die Öffnung." },
            { question: "Öffnen Sie auch gewerbliche Schließsysteme im Behördenviertel?", answer: "Ja, wir betreuen mehrere Dienstleister und Behörden und sind Spezialisten für das Öffnen, Reparieren und Auslesen vernetzter oder komplexer Schließanlagen." },
            { question: "Wie hoch sind die Kosten nachts in der Wetzlarer Neustadt?", answer: "Für Späteinsätze (ab 18 Uhr bis 22 Uhr) sowie tiefe Nachtstunden gelten Staffelungsaufschläge, die wir Ihnen am Mobiltelefon ohne Umschweife millimetergenau auflisten." }
        ],
        neighbors: ["schluesseldienst-wetzlar-altstadt", "schluesseldienst-wetzlar", "schluesseldienst-wetzlar-dalheim"]
    },
    {
        id: "wetzlar-bueblingshausen",
        slug: "schluesseldienst-wetzlar-bueblingshausen",
        name: "Wetzlar-Büblingshausen",
        plz: "35578",
        coordinates: { latitude: 50.5430, longitude: 8.5100 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 2 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Büblingshausen — Festpreis ab 99€", metaDescription: "Schlüsseldienst Büblingshausen: In 5 Min. vor Ort. Festpreis ab 99€, keine Anfahrtskosten. Notdienst: 06441-8056279" },
        // === 10X ERWEITERUNG ===
        routeDescription: "Über den Frankfurter Ring (B49) biegen wir blitzschnell Richtung Süden auf den Wetzlarer Berg (oder Volpertshäuser Straße) ab und stehen sofort in Büblingshausen.",
        mainRoad: "B49 / Frankfurter Straße",
        distanceKm: 2,
        character: "Kontrastreicher südlicher Bezirk: Gewachsene alte Einfamilienhaussiedlungen kombiniert mit dem hochmodernen Konversionsgelände Spilburg (Leitz-Park und Gewerbe).",
        populationApprox: "~3.000",
        landmark: "Spilburg-Kaserne (heute Leitz-Park & Leica Welt)",
        buildingTypes: "Idyllische Reihenhäuser, Einfamilienbauten aus den 50ern, ultramoderne Boardinghäuser sowie gewerbliche Hochsicherheitsanlagen am Leitz-Park.",
        parkingInfo: "Durch die dörflichen Straßenzüge in Alt-Büblingshausen und weitläufige Areale im Spilburg-Bereich parken unsere Flotten stets optimal am Türportal.",
        heroVariant: "Schlüsseldienst in Wetzlar-Büblingshausen & Spilburg. Schnell, gratis Anfahrt, seriös.",
        fareInfo: "Die Wetzlarer Südstadt (Büblingshausen) ist komplett Bestandteil der Anfahrtskosten-Freistellungs-Zone. Sie blechen null Euro für die Spritztour des Monteurs.",

        scenarios: [
            {
                icon: "home",
                title: "Wohnungsnot in Alt-Büblingshausen",
                description: "Vom Wochenendeinkauf beladen und der Wind klackt das Reihenhaus-Portal zu? Durch minimal-invasive Technik überlistet der Schlosser die unverschlossene Falle."
            },
            {
                icon: "shield-alert",
                title: "Gewerbepark Spilburg",
                description: "Ein Hightech-Sicherheitszylinder im Agenturbüro am Leitz-Park dreht durch? Wir bohren, falls nötig, mit Spezialfräsen aus dem Hochsicherheitssegment und rüsten neu aus."
            },
            {
                icon: "briefcase",
                title: "Appartements & Leitz-Park-Besucher",
                description: "Hotelgäste oder Appartementbewohner haben die Keycard oder den Schlüssel drinnen gelassen. Unser Notdienst rückt ultra-leise und unauffällig an, um Störungen abzuwehren."
            }
        ],

        aboutText: `
<p>Im Süden der Kernstadt breitet sich der facettenreiche Bezirk <strong>Büblingshausen</strong> aus. Mit etwa 3.000 Einwohnern präsentiert sich hier ein doppelgesichtiges Quartier: Einerseits gewachsene, beinahe kleinstädtisch-beruhigte Quartiere mit Reihen- und Einfamilienhäusern ("Alt-Büblingshausen"), andererseits das pulsierende Konversionsgelände der ehemaligen <strong>Spilburg-Kaserne</strong>. Dort residiert heute der weltweit respektierte "Leitz-Park" der Leica Camera AG, gesäumt von innovativen Startups, modernsten Appartements und Behördenzentren. Wenn im Schatten dieses High-Tech-Campus oder in der beschaulichen Einfamilienhaussiedlung ein Türnotfall pulsiert, rückt der <strong>Schlüsseldienst Wetzlar-Büblingshausen</strong> extrem rasant an.</p>

<h3>Fliegender Wechsel über die B49</h3>
<p>Dank flüssiger Zuwegung über den Frankfurter Straßen Ring erreichen wir Büblingshausen nahezu lückenlos kreuzungsfrei. Eine Dispo-Ansage bedeutet meist: In <strong>3 bis 5 Minuten</strong> schnallt der Service-Mann den Werkzeugkoffer ab und checkt direkt live am Einsatzort (z.B. Blücherstraße oder Am Leitz-Park) Ihr Problem.</p>

<h3>Von Omas Kellerschloss bis zur Firmen-Sicherheitsanlage</h3>
<p>Büblingshausens Varianz zwingt zu universellem Wissen. Während in Alt-Büblingshausen mitunter simple, verzogene Holztürrahmen vorherrschen, die man mit dem geschickten Einzug eines Türspions umgehen kann, verlangen die massiv gedämmten 3-fach-Verriegelungen der Bürogebäude im Spilburg-Areal höchste Ingenieurskunst in Form modernster Hochleistungs-Spiralfräsen, falls ein Zylinder restlos blockiert. Bei Zugefallenen Türen gilt wie eh und je unsere 99% Zerstörungsfrei-Garantie.</p>

<h3>100% Freie Anfahrt</h3>
<p>Egal ob Gewerbepark Spilburg oder Blücherstraße. Büblingshausen liegt ausnahmslos im kostenfreien Wetzlarer Einsatzring. Werktags-Routineöffnungen fangen konstant und fix ab 99 Euro an. Keinen einzigen Pfennig mehr für Sprit, Auto oder Anfahrts-Arbeitszeit.</p>`,

        localTestimonials: [
            {
                name: "Dietmar V.",
                quote: "Mein Haus an der Friedensstraße... alte Tür, verzogen. Zugefallen und nix ging mehr mit der Karte. Der erfahrene Mann hat einen feinen Draht genutzt und nach einer Minute war es gegessen. Absolut top.",
                rating: 5
            },
            {
                name: "Sarah G.",
                quote: "Nach der Firma im Spilburg-Park abends den Wohnungsschlüssel drinnen vergessen. Nachtzuschlag war zwar happig, aber extrem fair im Telefonat vorab begründet! Und gar keine Anfahrt. Super Arbeit, sehr fix vor Ort.",
                rating: 5
            },
            {
                name: "Jochen W.",
                quote: "Der Zylinder unserer Agentur am Leitz-Park fing an zu blockieren. Der Schlüsseldienst kam am Vormittag spontan vorbei, baute ein Keso-Schloss ein. 1A Kompetenz für Geschäftskunden in Wetzlar.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Schlüsselnothilfe in Büblingshausen & Spilburg gesucht? Blitzschnell, zerstörungsfrei und ohne Anfahrtskosten aus der Wetzlarer Kernstadt.",
            mainText: `<p>Büblingshausen verbindet idyllisches Wohngefühl mit dem modernen Gewerbepark Spilburg am Leitz-Park. Wir sind Ihr kompetenter Profi für den Süden Wetzlars. Durch kurze Anfahrtswege berechnen wir im gesamten Gebiet <strong>keinerlei Fahrtkosten</strong>.</p><p>Unsere Monteure beherrschen vom alten Kellerschloss im Einfamilienhaus bis zur hochsicheren Schließanlage von Agenturen im Spilburg-Areal alle Türprobleme sicher aus dem Effeff.</p>`,
            serviceZerstörungsfrei: "Türöffnungen im beschaulichen Alt-Büblingshausen realisieren wir sanft und lautlos.",
            serviceBohren: "Hochkomplexe Schließanlagen in der Spilburg werden bei Sperrungen fachmännisch durchleuchtet und bei Bedarf rasch gewechselt.",
            service247: "Für Büblingshausen und das Spilburg-Areal sichern wir 24 Stunden reibungslosen Not-Bereitschaftsdienst zu."
        },
        faqs: [
            { question: "Kostet mich die Anfahrt bis ins tiefste Büblingshausen etwas?", answer: "Ganz klares Nein. Ob Alt-Büblingshausen oder Spilburg-Kaserne, das Quartier gehört zur gebührenfreien Null-Euro-Wetzlar-Zone." },
            { question: "Öffnen Sie auch extrem moderne Sicherheitstüren unbeschadet?", answer: "Ja, gerade die hochwertigen Brandschutz- oder Sicherheitsobjekte in der Spilburg entriegeln wir bei bloßem Zufallen des Riegels über Manipulation und oft ganz ohne Bohrer." },
            { question: "Wann sind Sie nachts am Leitz-Park?", answer: "Wir verwalten einen rigorosen 24-Stunden-Shift. Zwischen Anruf und Eintreffen des Monteurs vergehen meist lediglich handgestoppte 3 bis 6 Minuten." },
            { question: "Kann ich den Notdienst mit Maestro-, Giro- oder Kreditkarte zahlen?", answer: "Definitiv. In unseren Service-Campern befinden sich drahtlose SumUp/EC-Terminals, die kontaktloses Bezahlen problemlos gestatten." }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-dalheim", "schluesseldienst-wetzlar-hermannstein"]
    },
    {
        id: "wetzlar-sturzkopf",
        slug: "schluesseldienst-wetzlar-sturzkopf",
        name: "Wetzlar-Sturzkopf",
        plz: "35578",
        coordinates: { latitude: 50.5480, longitude: 8.4980 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 2 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Sturzkopf — 24/7 Notdienst ab 99€", metaDescription: "Schlüsseldienst für Wetzlar-Sturzkopf. In 5 Min. da, Festpreis ab 99€, keine Anfahrtskosten. Jetzt: 06441-8056279" },
        // === 10X ERWEITERUNG ===
        routeDescription: "Über die Bergstraße und Nauborner Straße erreichen wir den höher gelegenen Sturzkopf aus der Wetzlarer Innenstadt verkehrsarm in unter 5 Minuten.",
        mainRoad: "Nauborner Straße / Waldstraße",
        distanceKm: 2,
        character: "Ruhiger, familienfreundlicher Wohnbezirk in Südhanglage, geprägt von aufgelockerter Einfamilienhausbebauung aus der Nachkriegszeit.",
        populationApprox: "~1.500",
        landmark: "Pestalozzischule Wetzlar / Hangkante",
        buildingTypes: "Überwiegend freistehende Einfamilien- und Doppelhäuser, einige gepflegte Reihenhauszeilen.",
        parkingInfo: "Durch die ruhigen Anliegerstraßen parken wir unseren Servicewagen meist direkt am Gartentor.",
        heroVariant: "Schlüsseldienst Wetzlar-Sturzkopf: Ihr Helfer in der direkten Nachbarschaft.",
        fareInfo: "Der Sturzkopf zählt zur Wetzlarer Kernstadt. Daher zahlen Sie keinen Cent für die Anfahrt des Monteurs.",
        scenarios: [
            { icon: "home", title: "Haustür zugezogen", description: "Windstoß am Südhang: Die Tür fällt ins Schloss. Wir öffnen die Tür zum Festpreis von 99 Euro absolut zerstörungsfrei." },
            { icon: "shield-alert", title: "Schlüssel abgebrochen", description: "Veraltetes Schloss klemmt und der Schlüssel bricht ab? Wir extrahieren die Reste fachmännisch." },
            { icon: "briefcase", title: "Zylindertausch sofort", description: "Nach Einzug in den Altbau am Sturzkopf tauschen wir alte Zylinder direkt gegen moderne ABUS Sicherheitszylinder aus." }
        ],
        aboutText: `
<p>Der <strong>Sturzkopf</strong> ist einer der ruhigsten Wohnbezirke der Wetzlarer Kernstadt. Entstanden nach dem Zweiten Weltkrieg, bietet dieses Wohngebiet an der Hangkante vielen Familien ein idyllisches Zuhause. Wer sich hier in den beschaulichen Straßen aussperrt, erreicht mit dem <strong>Schlüsseldienst Wetzlar-Sturzkopf</strong> sofort einen kompetenten Ansprechpartner aus der direkten Umgebung.</p>

<h3>Flotte Anfahrt über die Bergstraße</h3>
<p>Sobald Sie unseren Notruf wählen, machen sich unsere Servicewagen von der Zentrale auf den Weg. Über die Bergstraße stehen wir oft schon nach <strong>3 bis 5 Minuten</strong> vor Ihrer Haustür am Sturzkopf. Kein langes Warten draußen in der Kälte.</p>

<h3>100% Kostenfreie Anfahrt</h3>
<p>Die klare Regel für den Sturzkopf als Kernstadt-Gemarkung: <strong>0 Euro Anfahrtskosten</strong>. Für eine Standardöffnung einer unverschlossenen Tür zahlen Sie an Werktagen verlässlich ab 99 Euro und transparent, fair und ehrlich kommuniziert.</p>`,
        localTestimonials: [
            { name: "Michael H.", quote: "Hatte mich an der Waldstraße ausgesperrt. Der Monteur war in rekordverdächtigen 4 Minuten da. Toller, seriöser Schlüsseldienst ohne versteckte Kosten.", rating: 5 },
            { name: "Birgit S.", quote: "Das Türschloss an unserem älteren Haus funktionierte nicht mehr richtig. Innerhalb kurzer Zeit wurde alles professionell und freundlich gewechselt.", rating: 5 }
        ],
        content: {
            heroIntro: "Tür zugefallen am Sturzkopf? Unser Monteur ist in 3 bis 5 Minuten bei Ihnen und zum fairen Festpreis und Anfahrtskosten-frei.",
            mainText: `<p>Wir sind Ihr schneller und ehrlicher Notdienst für den <strong>Sturzkopf</strong>. Dank unserer tiefen Verwurzelung in Wetzlar garantieren wir eine extrem schnelle Reaktionszeit direkt zu Ihnen an den Südhang.</p>`,
            serviceZerstörungsfrei: "Am Sturzkopf öffnen wir Ihre zugefallene Tür routiniert mit Spezialgleitern und ohne Beschädigungen.",
            serviceBohren: "Bei defekten Schlössern am Sturzkopf arbeiten wir mit Präzisionsbohrern und ersetzen den Zylinder sofort durch Markenware.",
            service247: "Schlüsselnotdienst am Sturzkopf: Wir sind 24 Stunden erreichbar, 365 Tage im Jahr."
        },
        faqs: [
            { question: "Ist der Sturzkopf im kostenlosen Gebiet?", answer: "Ja, der Sturzkopf gehört zur Kernstadt Wetzlar. Keine Anfahrtskosten für Sie." },
            { question: "Wie lange brauchen Sie zum Sturzkopf?", answer: "Wir sind in 3 bis 5 Minuten bei Ihnen und der Sturzkopf liegt nur 2 km entfernt." }
        ],
        neighbors: ["schluesseldienst-wetzlar", "schluesseldienst-wetzlar-dalheim", "schluesseldienst-wetzlar-nauborn"]
    },
    {
        id: "wetzlar-stoppelberger-hohl",
        slug: "schluesseldienst-wetzlar-stoppelberger-hohl",
        name: "Wetzlar-Stoppelberger Hohl",
        plz: "35578",
        coordinates: { latitude: 50.5460, longitude: 8.4950 },
        logistics: { drivingTimeMinutes: "5", distanceFromHQ: 2 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Stoppelberger Hohl — Festpreis 24/7", metaDescription: "Schlüsseldienst für die Stoppelberger Hohl in Wetzlar. In 5 Min. da, ab 99€ Festpreis. Notdienst: 06441-8056279" },
        // === 10X ERWEITERUNG ===
        routeDescription: "Die Durchgangsstraße Stoppelberger Hohl erreichen wir über den Wöllbacher Tor / Frankfurter Straße meist schnurgerade und staufrei binnen 5 Minuten.",
        mainRoad: "Stoppelberger Hohl / Frankfurter Weg",
        distanceKm: 2,
        character: "Bürgerliches Wohnviertel am südwestlichen Rand der Kernstadt, charaktierisiert durch eine Mischung aus historischen Bestandshäusern und modernerer Bebauung.",
        populationApprox: "~1.200",
        landmark: "Friedhof an der Stoppelberger Hohl",
        buildingTypes: "Mehrparteienhäuser, ansprechende Einfamilienhäuser und Siedlungsbau.",
        parkingInfo: "Trotz der beidseitigen Bebauung entlang der Achse parken wir problemlos durch Sondergenehmigungen nahe des Hauseingangs.",
        heroVariant: "Schlüsseldienst Wetzlar und Stoppelberger Hohl. Festpreis ab 99€, Anfahrt stets kostenlos.",
        fareInfo: "Auch die Stoppelberger Hohl profitiert von der Wetzlarer Kernstadt-Garantie: 0 Euro für die Anfahrt.",
        scenarios: [
            { icon: "home", title: "Türöffnung im Mehrfamilienhaus", description: "Im Treppenhaus die Tür hinter sich zugezogen? Wir öffnen die Wohnungstür flüsterleise und restlos ohne Schäden am Holz." },
            { icon: "shield-alert", title: "Mechanischer Defekt", description: "Das in die Jahre gekommene Türschloss blockiert endgültig? Notöffnung durch Feinfräse ohne den Rahmen zu verletzen." },
            { icon: "briefcase", title: "Kellerschloss hakt", description: "Verrostetes Kellerschloss? Wir ersetzen einfache Bartschlösser kostengünstig und schnell." }
        ],
        aboutText: `
<p>Die <strong>Stoppelberger Hohl</strong> bildet eine markante Wohnachse im südwestlichen Teil der Wetzlarer Kernstadt. Ob traditionelle Einfamilienhäuser oder belebte Mehrparteien-Komplexe und als direkter Nachbar helfen wir mit dem <strong>Schlüsseldienst Stoppelberger Hohl</strong> bei jedem Schloss-Notfall kompetent weiter.</p>

<h3>Flotte Ankunftszeit garantiert</h3>
<p>Dank kurzer Dispatch-Zeiten und freier Strecke erreichen wir das Quartier an der Stoppelberger Hohl im Durchschnitt nach nur <strong>4 bis 5 Minuten</strong>. Sie stehen also niemals lange fluchend im Treppenhaus.</p>

<h3>Null-Euro-Anfahrt für die Kernstadt</h3>
<p>Auch die Wetzlarer Gemarkung um die Stoppelberger Hohl genießt den VIP-Status unserer Kernstadt: Wir stornieren vollumfänglich jegliche Anfahrtskosten. Wir berechnen für Standard-Türöffnungen an Wochentagen tagsüber einen fixen <strong>Ab-Preis von 99 Euro</strong>.</p>`,
        localTestimonials: [
            { name: "Thomas L.", quote: "Super freundlich am Telefon und der Schlosser war nach Anruf in knapp 5 Minuten am Friedhof an der Hohl. Sehr gute Arbeit.", rating: 5 },
            { name: "Eva K.", quote: "Der Techniker hat mir an einem Sonntag kurzfristig geholfen, Tür war zugefallen. Es gab vorher klare Preisansagen, die auch genau so in der Rechnung gestanden haben.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt an der Stoppelberger Hohl? Wir sind in etwa 5 Minuten da und mit Festpreisgarantie und ohne Anfahrtskosten.",
            mainText: `<p>Die <strong>Stoppelberger Hohl</strong> ist ein etablierter Wohnbezirk in der Wetzlarer Kernstadt. Als erfahrener lokaler Schlüsseldienst garantieren wir schnelle, seriöse und preistransparente Hilfe bei allen Türöffnungen.</p>`,
            serviceZerstörungsfrei: "An der Stoppelberger Hohl öffnen wir zugefallene Türen aller Art schonend und mit Profiwerkzeug.",
            serviceBohren: "Defekte Zylinder tauschen wir an der Stoppelberger Hohl sofort vor Ort durch langlebige BKS-Qualität aus.",
            service247: "Unser 24/7-Notdienst für die Stoppelberger Hohl ist jeden Tag rund um die Uhr erreichbar."
        },
        faqs: [
            { question: "Ist die Stoppelberger Hohl im kostenfreien Gebiet?", answer: "Ja, als Kernstadt-Bezirk zahlen Sie keine Anfahrtskosten." },
            { question: "Wie schnell kommen Sie zur Stoppelberger Hohl?", answer: "In etwa 5 Minuten und der Bezirk liegt direkt im Wetzlarer Stadtgebiet." }
        ],
        neighbors: ["schluesseldienst-wetzlar-sturzkopf", "schluesseldienst-wetzlar-nauborn", "schluesseldienst-wetzlar-dalheim"]
    },
    {
        id: "wetzlar-silhoefer-aue",
        slug: "schluesseldienst-wetzlar-silhoefer-aue",
        name: "Wetzlar-Silhöfer Aue/Westend",
        plz: "35578",
        coordinates: { latitude: 50.5580, longitude: 8.4920 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 1 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Silhöfer Aue — In 3 Min. da ab 99€", metaDescription: "Schlüsseldienst für die Silhöfer Aue und das Westend in Wetzlar. In 3 Min. da, ab 99€ Festpreis. Jetzt: 06441-8056279" },
        // === 10X ERWEITERUNG ===
        routeDescription: "Die Silhöfer Aue liegt unmittelbar an der Lahn. Von der Wetzlarer Innenstadt überqueren wir rasch die Lahn und sind oft in unter 3 Minuten auf der Westseite.",
        mainRoad: "Karl-Kellner-Ring / Lahnbrücken",
        distanceKm: 1,
        character: "Mischgebiet aus zentrumsnahem Wohnen direkt am Flussufer und kleingewerblichen Immobilien im Westend.",
        populationApprox: "~1.800",
        landmark: "Colo Park / Lahninsel",
        buildingTypes: "Attraktive Neubauten an der Lahn, moderne Appartements sowie Altbaubestände Richtung Westend.",
        parkingInfo: "Durch die Uferbebauung parken wir flexibel in den Anliegerstraßen, dank Handwerker-Sondervignette oft auch bei Parkraummangel direkt am Eingang.",
        heroVariant: "Schlüsseldienst Wetzlar-Silhöfer Aue / Westend. Soforthilfe zum Festpreis.",
        fareInfo: "Die Silhöfer Aue fällt als 35578er-Bezirk komplett unter unsere 0-Euro-Anfahrtskosten-Kulanz.",
        scenarios: [
            { icon: "home", title: "Wohnungstür Lahn-Appartement", description: "Zugezogene Tür der neuen Premium-Wohnung? Wir garantieren 100% materialschonende Spion- oder Fallengleit-Öffnung." },
            { icon: "shield-alert", title: "Sportvereine & Gewerbe", description: "Zugang zum Bootsclub oder Restaurant verschlossen? Unauffällige und schnelle Profilzylinder-Öffnung rund um die Uhr." },
            { icon: "briefcase", title: "Reparatur nach Defekt", description: "Bunte Mechanik streikt im Westend: Kostengünstiger Ausbau und Neuinstallation der Schließtechnik am selben Tag." }
        ],
        aboutText: `
<p>Die <strong>Silhöfer Aue</strong> und das angrenzende Westend verzaubern durch ihre fulminante Lage direkt an der Lahn. Wo Wasser, Freizeitaktivitäten und modernes Innenstadt-Wohnen zusammentreffen, herrscht viel Bewegung. Wer hier nach dem Spaziergang an der Lahn seinen Wohnungsschlüssel verlegt hat, ist beim <strong>Schlüsseldienst Wetzlar-Silhöfer Aue</strong> exakt an der richtigen Adresse.</p>

<h3>Blitzhilfe am Fluss</h3>
<p>Da das Gebiet direkt an den engsten Kern der Innenstadt andockt, vergehen von Ihrem Anruf bis zum Klingeln unseres Monteurs meist lediglich <strong>3 bis 4 Minuten</strong>. Absolute Rekordzeiten bei absoluter Zuverlässigkeit.</p>

<h3>Ohne versteckte Fahrtkosten</h3>
<p>Egal ob direkt am Colo-Park, auf der Lahninsel oder am Rande des Westends: Für die Silhöfer Aue fordern wir kategorisch <strong>keine Anfahrtskosten</strong> ein. Unverschlossene Standardtüren öffnen wir montags bis freitags (tagsüber) zu extrem reellen 99 Euro Festpreis.</p>`,
        localTestimonials: [
            { name: "Katharina W.", quote: "Beim Joggen an der Lahn habe ich den Schlüssel verloren. Super schnelle Hilfe an der Silhöfer Aue durch den unglaublich zugewandten Schlosser.", rating: 5 },
            { name: "Philipp D.", quote: "Wohne am Colo Park, Tür war zugefallen. Es hat keine drei Minuten gedauert, bis der Pkw vor der Tür stand. Fairer Festpreis, exzellente Kommunikation.", rating: 5 }
        ],
        content: {
            heroIntro: "Schlüsselnotfall in der Silhöfer Aue oder im Westend? Wir sind in nur 3 Minuten bei Ihnen und zum transparenten Festpreis.",
            mainText: `<p>Die <strong>Silhöfer Aue</strong> verbindet modernes Wohnen mit erholsamer Flussnähe. Wenn Sie hier den Schlüsseldienst benötigen, punkten wir durch unsere absolute Standortnähe und eine völlig <strong>kostenfreie Anfahrt</strong>.</p>`,
            serviceZerstörungsfrei: "In der Silhöfer Aue rutschen wir mit Spezialwerkzeug über die Falle und öffnen Ihre Tür spurenlos.",
            serviceBohren: "Bei massiven Schlossausfällen im Westend bohren wir den Zylinderkern und fixieren sofort einen BKS Marken-Ersatz.",
            service247: "Notdienst Silhöfer Aue/Westend: Wir stehen an 365 Tagen zu jeder Tages- und Nachtzeit für Sie bereit."
        },
        faqs: [
            { question: "Wie schnell sind Sie in der Silhöfer Aue?", answer: "In nur 3 Minuten und der Bezirk liegt direkt neben unserem Einsatzgebiet im Zentrum." },
            { question: "Fallen Anfahrtskosten an?", answer: "Nein, die Silhöfer Aue ist Teil der Wetzlarer Kernstadt. Keine Anfahrtskosten." }
        ],
        neighbors: ["schluesseldienst-wetzlar-altstadt", "schluesseldienst-wetzlar", "schluesseldienst-wetzlar-neustadt"]
    },
    {
        id: "wetzlar-dillfeld",
        slug: "schluesseldienst-wetzlar-dillfeld",
        name: "Wetzlar-Dillfeld",
        plz: "35576",
        coordinates: { latitude: 50.5620, longitude: 8.5100 },
        logistics: { drivingTimeMinutes: "3-5", distanceFromHQ: 2 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 119, basePriceWeekend: 179, travelCost: 0, travelCostText: "Keine Anfahrtskosten (Kernstadt Wetzlar)" },
        seo: { metaTitle: "Schlüsseldienst Dillfeld — 24/7 Notdienst Festpreis", metaDescription: "Schlüsseldienst Wetzlar-Dillfeld. In 5 Min. vor Ort, Festpreis ab 99€, keine Anfahrtskosten. Notdienst: 06441-8056279" },
        // === 10X ERWEITERUNG ===
        routeDescription: "Über die B49 / Bergstraße und den Kreuzungsbereich Dillfeld gelangen wir äußerst flüssig und direkt ins Wetzlarer Dillfeld.",
        mainRoad: "B49 / Dillfeld",
        distanceKm: 2,
        character: "Vielseitiger Bezirk im Nordwesten, der Gewerbeparks, Einkaufsmärkte und punktuelle Wohnbebauung bei sehr guter Verkehrsanbindung mischt.",
        populationApprox: "~900",
        landmark: "Raststätte Wetzlar / Gewerbepark Dillfeld",
        buildingTypes: "Große Industrie- und Gewerbehallen sowie Mehrfamilienhäuser der 70er Jahre am Rand des Gebiets.",
        parkingInfo: "Durch reichlich Dimensionierte Gewerbe- und Industrie-Parkplätze ist das Heranfahren an die verschlossene Tür zu 100% gesichert.",
        heroVariant: "Türöffnung im Wetzlarer Gewerbegebiet Dillfeld. Lokal, schnell und ohne Fahrtkosten.",
        fareInfo: "Auch das Wetzlarer Dillfeld ist ein Null-Euro-Anfahrtskosten Bezirk.",
        scenarios: [
            { icon: "home", title: "Rolltor oder Schranke blockiert", description: "Logistik steht still, weil die Schließanlage im Dillfeld defekt ist? Wir öffnen Schranken und Tore zeitnah." },
            { icon: "shield-alert", title: "Bürotür im Gewerbepark zu", description: "Draußen Pause gemacht, Büro zu? Minimalinvasive Draht-Öffnung ohne den Büroalltag zu bremsen." },
            { icon: "briefcase", title: "Wohnungstüren im Randgebiet", description: "Zugefallene private Wohnungstür? Gewohnt seriöse, schnelle Hilfe für private Anwohner im Industriegebiet." }
        ],
        aboutText: `
<p>Das nördlich angrenzende <strong>Dillfeld</strong> dominiert Wetzlar als bedeutender Gewerbe- und Industriepark in direkter Achse zur B49. Zwischen Autohäusern, Fachmärkten, Logistikzentren und der Lahn gedeiht jedoch auch lokales Arbeiten und punktuelles Wohnen. Klemmt das Schloss zum Logistik-Rolltor oder streikt die Sicherheitstür zum Bürogebäude, rückt der <strong>Schlüsseldienst Wetzlar-Dillfeld</strong> rasch und mit robuster Expertise an.</p>

<h3>Hohe Maschinenverfügbarkeit</h3>
<p>Für unsere Monteure ist das Dillfeld logistisch ein Traum. Meist erreichen wir das Gebiet ohne nennenswerten Stop&Go-Innerortsverkehr über die umarmenden Hauptverkehrsadern in oft unter <strong>5 Minuten</strong>. Gerade im B2B-Umfeld zählt jede Minute Betriebszeit.</p>

<h3>100% Anfahrtskosten-Kulanz</h3>
<p>Trotz der klaren gewerblichen Prägung gelten im Dillfeld unsere ehrlichen Konditionen der Wetzlarer Kernstadt: Sie entrichten <strong>keinerlei Wege- oder Anfahrtskostenpauschalen</strong>. Eine ungeplante Türöffnung schlägt werktags konstant mit marktgerechten 99 Euro zu Buche.</p>`,
        localTestimonials: [
            { name: "Sven P. (Firmeninhaber)", quote: "Unsere Lagerhalle im Dillfeld ließ sich morgens nicht aufschließen. Der Monteur war zügig da, reparierte den massiven Profilzylinder und wir konnten die Arbeit aufnehmen. Sehr zufrieden.", rating: 5 },
            { name: "Anja K.", quote: "Hatte mich im Randbezirk am Dillfeld im Mehrfamilienhaus ausgeschlossen. Der Schlüsseldienst war kompetent, ruhig und hat die Tür mit einem Gleiter einfach weggeschoben. 99 Euro, super gemacht.", rating: 5 }
        ],
        content: {
            heroIntro: "Tür zu im Dillfeld? Unser Schlüsseldienst ist in 3 bis 5 Minuten vor Ort und zum transparenten Festpreis.",
            mainText: `<p>Das Gewerbegebiet und Wohnareal <strong>Dillfeld</strong> versorgen wir extrem zügig mit Notöffnungen aller Art. Profitieren Sie von lokaler Expertise und <strong>komplett wegfallenden Anfahrtskosten</strong>.</p>`,
            serviceZerstörungsfrei: "Im Dillfeld öffnen wir private und gewerbliche nicht-verriegelte Türen zu 99% materialschonend.",
            serviceBohren: "Sicherheitsschlösser an Industrieanlagen oder Shops im Dillfeld tauschen wir nach exakter Fräsung direkt vor Ort.",
            service247: "24/7-Notdienst im Dillfeld: Ob Spätschicht oder Werkstag, unser Notruf ist für Sie immer da."
        },
        faqs: [
            { question: "Ist das Dillfeld im kostenfreien Anfahrtsgebiet?", answer: "Ja, das Dillfeld gehört zur Wetzlarer Kernstadt. Keine Anfahrtskosten für Sie." },
            { question: "Wie schnell kommen Sie ins Dillfeld?", answer: "In 3 bis 5 Minuten und das Dillfeld liegt zentral im Wetzlarer Stadtgebiet." }
        ],
        neighbors: ["schluesseldienst-wetzlar-niedergirmes", "schluesseldienst-wetzlar", "schluesseldienst-wetzlar-naunheim"]
    }
];
