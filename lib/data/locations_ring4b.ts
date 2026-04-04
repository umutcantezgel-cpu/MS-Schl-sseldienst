import { LocationData } from "./locations";

export const ring4bLocations: LocationData[] = [
    {
        id: "haiger",
        slug: "schluesseldienst-haiger",
        name: "Haiger",
        plz: "35708",
        coordinates: { latitude: 50.7410, longitude: 8.2050 },
        logistics: { drivingTimeMinutes: "30", distanceFromHQ: 28 },
        pricing: { basePrice: 99, basePriceNight: 119, basePriceWeekend: 179, travelCost: 20, travelCostText: "+ 20€ Anfahrt" },
        seo: { metaTitle: "Schlüsseldienst Haiger — 24/7 Notdienst | Festpreis ab 99€", metaDescription: "Schlüsseldienst Haiger (Sechshelden, Allendorf, Langenaubach). Zerstörungsfreie Türöffnung, Festpreis ab 99€. In ca. 30 Min. am Paradeplatz oder Rödgen. 06441-8056279" },
        
        // === 10X ERWEITERUNG ===
        routeDescription: "Über die A45 (Sauerlandlinie) steuern unsere Techniker das Haigerer Stadtgebiet inklusive der Ausläufer bis zur NRW-Landesgrenze weitaus schneller an als viele regionale Landstraßen-Anbieter.",
        mainRoad: "A45 / B277",
        distanceKm: 28,
        character: "Wirtschaftszentrum am Rande von Westerwald und Rothaargebirge",
        populationApprox: "~19.500",
        landmark: "Historischer Paradeplatz & Haigerer Stadtkirche",
        buildingTypes: "Prachtvolle Fachwerkhäuser in der Altstadt, weitläufige Industrieareale (Loh-Gruppe, Klingspor) und ausgedehnte, hügelige Wohnsiedlungen.",
        parkingInfo: "Spezielle Ausnahmegenehmigungen für Servicefahrzeuge in der Fußgängerzone am Marktplatz. Für Industriekunden fahren wir bei Gewerbe-Öffnungen direkt auf das Betriebsgelände.",
        heroVariant: "Schlüsseldienst für Haiger gesucht? Wir öffnen sofort ohne versteckte Kosten.",
        fareInfo: "Die Anfahrt an den nördlichsten Rand unseres Einsatzgebietes – nach Haiger sowie in sämtliche Ortsteile (z.B. Langenaubach) – rechnen wir pauschal und äußerst fair mit nur 20 Euro ab.",
        
        scenarios: [
            {
                icon: "home",
                title: "Zugezogene Tür im Fachwerkhaus",
                description: "Verzogene Holztüren rund um den Paradeplatz? Mit lackschonenden Türfallen-Gleitern öffnen wir historische Eingänge in Haiger zu 99% komplett spurfrei."
            },
            {
                icon: "shield-alert",
                title: "Gewerbliche Schließanlagen",
                description: "Ausgesperrt auf dem Werksgelände im Industriepark Kalteiche? Wir reparieren Defekte an schweren Industrietoren und Bürozylindern sofort vor Ort."
            },
            {
                icon: "key",
                title: "Autotür am Bahnhof Haiger",
                description: "Schlüssel steckt noch im Zündschloss auf dem Pendlerparkplatz? Unsere Techniker beweisen auch bei der schonenden KFZ-Öffnung in Haiger absolute Spitzenklasse."
            }
        ],

        aboutText: `
<p>Im äußersten Nordwesten des Lahn-Dill-Kreises, dort wo sich das raue Rothaargebirge und der nördliche Westerwald fast berühren, liegt <strong>Haiger</strong>. Die rund 19.500 Einwohner starke Stadt markiert nicht nur die Grenze zum benachbarten Nordrhein-Westfalen (Siegerland), sondern ist ein absolutes wirtschaftliches Schwergewicht der Region. Neben dem historischen Stadtkern rund um den Paradeplatz und die Haigerer Stadtkirche prägen massive Industrieunternehmen (wie Weiss oder Klingspor) an Standorten wie dem Industriepark Kalteiche das Bild. Wer sich hier in einem der stark verzweigten, hügeligen Ortsteile wie <strong>Sechshelden, Allendorf, Langenaubach, Roßbach, Fellerdilln oder Dillbrecht</strong> aussperrt, fühlt sich bei schlechtem Wetter fernab von urbanen Hilfsdiensten. Doch keine Panik: Der <strong>Schlüsseldienst Haiger</strong> unseres Meisterbetriebes deckt dieses Gebiet vollends ab.</p>

<h3>A45-Routenplanung: Rasanter in Haiger als gedacht</h3>
<p>Wer fernab des Wetzlarer Kernbereichs wohnt, befürchtet bei der Suche nach einem Schlüsseldienst endlose Wartezeiten und undurchsichtige Anfahrtsgebühren aus dem Ruhrgebiet oder Frankfurt. Wir brechen mit diesem Stigma. Über die unschlagbar schnelle Bundesautobahn 45 (Sauerlandlinie) passieren unsere voll ausgestatteten Notdienst-Mobile die Distanz nach Haiger in der Regel in unter bemerkenswerten <strong>30 Minuten</strong>. Ob im Schneetreiben am Rödgen oder nachts um drei in Fellerdilln – unser Fahrzeug ist bereits zu Ihnen unterwegs, während Sie im Warmen auf das Klingeln warten.</p>

<h3>Zerstörungsfreie Öffnung in Haigers Fachwerkgassen</h3>
<p>In der Altstadt von Haiger existieren noch zahlreiche wertvolle, teils denkmalgeschützte Fachwerkhäuser mit schweren Eichenholztüren. Wer hier mit roher Gewalt (Brechstange, dicke Bohrer) eine bloß zugefallene Haustür zu entriegeln versucht, verursacht vierstellige Holz- und Zylinderschäden. Wir garantieren Ihnen als seriöser Schlüsseldienst: Unser handwerkliches Niveau, geprägt durch die Schulung erfahrener Meister, schützt Ihre Immobilienwerte in Haiger. Sofern Sie nicht zweifach abgeschlossen haben, öffnen wir in atemberaubenden 99 % aller Fälle ihre Wohnung vollkommen materialschonend, per feinem Lockpicking oder modernen Fallenziehern. Der Originalschlüssel funktioniert im Nachgang völlig ohne Einschränkung weiter.</p>

<h3>Gebäudesicherheit für Haigers Industrieparks</h3>
<p>Nicht nur Privatpersonen, auch die großen Player am Wirtschaftsstandort Haiger zählen zu unseren Stammkunden. Bricht ein Generalschlüssel an einer Brandschutztür im Werk, oder blockiert das Schließsystem im Bürokomplex auf der Kalteiche? Wir leisten 24/7 sofortigen Ersatz, installieren auf Wunsch neue BKS-Profilzylinder oder beseitigen Einbruchschäden an Industrietoren diskret im laufenden Schichtbetrieb.</p>

<h3>Ehrliche Festpreise – auch an der Landesgrenze</h3>
<p>Im Notdienst-Sektor herrscht leider viel Kriminalität – wir agieren als lupenreines Gegenmittel. Trotz der recht weiten Anfahrt an den nördlichsten Zipfel Hessens zahlen Sie in ganz Haiger an Werktagen lediglich unseren fairen Basis-Festbetrag von exakt <strong>99 Euro für die Arbeitsleistung</strong>. Die Anfahrt legen wir für sämtliche Haigerer Stadtgebiete und Ortsteile auf einen äußerst knappen, transparent kommunizierten Spesen-Satz von zzgl. 20 Euro fest. Keine Zeittaktung, keine "Spezialbohrer-Aufschläge". Speichern Sie lieber heute schon unsere lokale Notnummer für Haiger im Smartphone – ehrliche Rettung kommt sofort.</p>
`,
        
        localTestimonials: [
            {
                name: "Birgit L.",
                quote: "Wir wohnen weit oben in Langenaubach. Niemand wollte am Sonntag bei Schnee rauskommen. Der Schlüsseldienst aus Wetzlar war über die A45 nach 35 Minuten da! Toller Service, Tür blieb beim Öffnen komplett heil. Preis stimmte exakt.",
                rating: 5
            },
            {
                name: "Michael F. (Gewerbekunde)",
                quote: "Im Lager auf der Kalteiche ließ sich das Tor nicht mehr sperren. Angerufen, 30 Minuten später war ein extrem kompetenter Mann da, baute den alten Zylinder sanft aus und einen neuen ein. Absolute Profi-Arbeit.",
                rating: 5
            },
            {
                name: "Lisa Maria K.",
                quote: "Mitten in der Altstadt am Paradeplatz den Schlüssel drinnen gelassen. Hatte Panik um die teure alte Holztür. Wurde mit einer winzigen Plastikkarte von außen geöffnet, Dauer 3 Minuten. Wirklich fantastische Arbeit und faire Rechnung.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ausgeschlossen in Haiger? Unser Schlüsseldienst erreicht Sie in ca. 30 Minuten über die A45 — professionell, ehrlich und zum strikten Festpreis.",
            mainText: "", // Ersetzt durch aboutText
            serviceZerstörungsfrei: "", // Ersetzt durch scenarios
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            { question: "Wie lange dauert die Fahrt bis ganz nach Langenaubach oder Rabenscheid?", answer: "Selbst bei den entlegensten Haigerer Ortsteilen an der Grenze zu Nordrhein-Westfalen oder Rheinland-Pfalz erreichen wir Sie bei normaler A45-Lage in maximal rund 30 bis 35 Minuten." },
            { question: "Muss ich Angst haben, am Straßenrand in Haiger abgezockt zu werden?", answer: "Nein! Wir kommunizieren den 99 Euro Festpreis der Türöffnung plus die human kalkulierten 20 Euro für die Haiger-Anfahrt absolut transparent bereits am Telefon. Keine horrenden Stundensätze." },
            { question: "Öffnen Sie in Haiger auch verschlossene Autotüren, wenn der Schlüssel im Wagen liegt?", answer: "Absolut. Ob Sie am Bahnhof Haiger stehen oder auf dem Discounter-Parkplatz: Wir haben Premium-Ausrüstung zur kratzerfreien PKW-Öffnung bei nahezu allen gängigen Fabrikaten direkt im Einsatzfahrzeug." }
        ],
        neighbors: ["schluesseldienst-dillenburg", "schluesseldienst-breitscheid", "schluesseldienst-dietzhoelztal"]
    },
    {
        id: "greifenstein",
        slug: "schluesseldienst-greifenstein",
        name: "Greifenstein",
        plz: "35753",
        coordinates: { latitude: 50.5950, longitude: 8.3000 },
        logistics: { drivingTimeMinutes: "20-25", distanceFromHQ: 20 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 20, travelCostText: "+ 20€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Greifenstein — 24/7 Türöffnung ab 99€", 
            metaDescription: "Schlüsseldienst Greifenstein (Beilstein, Ulmtal uvm.). Festpreis ab 99€. In ca. 20-25 Min. bei Ihnen. Zerstörungsfreie Öffnung, regionaler Meisterbetrieb." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Von unserer Wetzlarer Zentrale fahren wir über die B49 und Ehringshausen oder direkt durch das malerische Ulmtal, um jeden der 10 Greifensteiner Ortsteile in verlässlichen 20 bis 25 Minuten zu erreichen.",
        mainRoad: "B49 / Ulmtalstraße",
        distanceKm: 20,
        character: "Historische Berggemeinde am Rande des Westerwalds: Höchste Burg im Kreis, Glockenwelt und idyllische Dörfer mit rund 6.500 Einwohnern",
        populationApprox: "~6.560",
        landmark: "Burg Greifenstein (441m) mit Glockenwelt, Ulmbachtalsperre & Burgstall Beilstein",
        buildingTypes: "Auf 67 Quadratkilometern verteilen sich historische Fachwerkhöfe, alter dörflicher Bestand in den Tälern sowie vermehrt moderne Einfamilienhäuser an den Sonnenhängen.",
        parkingInfo: "Das ländliche Greifenstein bietet unseren Monteuren in der Regel entspannte Parkmöglichkeiten unmittelbar vor der betroffenen Haustür.",
        heroVariant: "Ausgesperrt in der Burggemeinde Greifenstein? Wir kommen schnell ins Ulmtal und auf den Berg.",
        fareInfo: "Die Anfahrt in den erweiterten Einsatzradius der Gemeinde Greifenstein kostet fair kalkulierte 20 Euro – absolut identisch für alle 10 Ortsteile, ob Ulm oder Arborn.",

        scenarios: [
            {
                icon: "home",
                title: "Haustür in Beilstein zugefallen",
                description: "Sie stehen im bevölkerungsreichsten Ortsteil Beilstein vor verschlossener Tür? Wir öffnen Ihr Eigenheim routiniert und zu über 99 % ohne jegliche Zylinderschäden."
            },
            {
                icon: "shield-alert",
                title: "Schlüsselverlust an der Ulmbachtalsperre",
                description: "Ein Spaziergang an der Ulmbachtalsperre oder auf dem Ulmtal-Rundwanderweg und der Schlüssel fehlt? Wir fräsen bei Komplettverlust minimalinvasiv auf und setzen sofort einen sicheren Neuzylinder ein."
            },
            {
                icon: "briefcase",
                title: "Fachwerk-Idylle: Antikes Schloss streikt",
                description: "In den kleinen, alten Ortsteilen wie Nenderoth oder Rodenroth klemmen mitunter uralte Schlösser in alten Holztüren. Wir gehen extrem behutsam vor, um die historische Substanz zu bewahren."
            }
        ],

        aboutText: `
<p>Die Großgemeinde <strong>Greifenstein</strong> im Nationalen GeoPark Westerwald-Lahn-Taunus punktet mit einer Fläche von 67 Quadratkilometern und unberührter Natur. Bekannt ist sie vor allem durch das weithin sichtbare, alles überragende Wahrzeichen: die <strong>Burg Greifenstein</strong>. Auf 441 Metern Höhe thront die höchste Anlage des Lahn-Dill-Kreises mit ihrer einzigartigen Doppelkapelle und dem Turm „Roßmühle", der die faszinierende <strong>Glockenwelt</strong> (über 100 Glocken) beherbergt. Wer sich in einer der 10 Greifensteiner Ortschaften aussperrt, braucht einen <strong>Schlüsseldienst Greifenstein</strong>, der das weite Gemeindegebiet und seine Straßen genau kennt.</p>

<h3>In 20 bis 25 Minuten beim Kunden</h3>
<p>Unsere Monteure navigieren sicher durch das <strong>Ulmtal</strong> und über die Höhen des östlichen Westerwalds. Egal ob Sie an der <strong>Ulmbachtalsperre</strong>, in Tal-Lage oder oben am Fuße der Burg stehen – wir sind von unserer Zentrale in gut <strong>20 bis 25 Minuten</strong> bei Ihnen. Wir lassen Sie weder bei einem eiskalten Höhensturm in Arborn noch bei Sommerhitze in Holzhausen lange warten.</p>

<h3>10 Ortsteile – Ein starker Service</h3>
<p>Greifenstein besteht aus 10 charakterstarken Ortsteilen: <strong>Allendorf, Arborn, Beilstein</strong> (als Verwaltungssitz und mit über 1.500 Bürgern der größte Ortsteil), <strong>Greifenstein, Holzhausen, Nenderoth, Odersberg, Rodenberg, Rodenroth</strong> und <strong>Ulm</strong>. Unsere Philosophie ist klar: Für uns gibt es keine benachteiligten Zonen. Wir versorgen jeden dieser 10 Ortsteile mit der exakt selben Prioität, dem exakt selben hohen handwerklichen Standard und vor allem denselben fairen Preisen.</p>

<h3>Zerstörungsfreie Öffnung in historischen Tälern</h3>
<p>In Greifenstein treffen wir auf historische Bausubstanz – von alten Fachwerkstrukturen rund um die Burg oder in Beilstein bis hin zu massiven Mehrfachverriegelungen in stetig wachsenden Neubaugebieten. Zieht man eine Tür unabsichtlich von außen zu, ohne abzuschließen, reicht unser High-Tech-Federwerkzeug fast immer aus. Die massive Tür wird beschädigungsfrei entsperrt. Der Rahmen bleibt unversehrt, der Zylinder muss nicht erneuert werden.</p>

<h3>Garantierte Preise ohne Höhenzuschlag</h3>
<p>Gute Arbeit darf auf dem Dorf nicht teurer sein als in der Stadt. Wir arbeiten in Greifenstein an Werktagen für <strong>fixe 99 Euro</strong>. Die weite Anfahrt legen wir transparent mit <strong>20 Euro</strong> um – pauschal für jeden Winkel der Gemeinde Greifenstein. Wer uns anruft, weiß vorher, was es hinterher kostet.</p>
`,

        localTestimonials: [
            {
                name: "Karola M.",
                quote: "Nach der Arbeit in Beilstein festgestellt: Schlüssel drinnen, Tür zu. Der Monteur war zügig da, extrem freundlich und hat die teure Haustür in Sekunden spurlos geöffnet. Die fixen 119 Euro Gesamtpreis waren jeden Cent wert.",
                rating: 5
            },
            {
                name: "Stefan D.",
                quote: "Wir wohnen in Holzhausen (Ulmtal). Hatte beim Gassi-Gehen den Schlüsselbund verloren. Der Schlüsseldienst kam abends, bohrte sauber auf und verbaute einen top Sicherheitszylinder. Alles zum vorher am Telefon besprochenen Preis.",
                rating: 5
            },
            {
                name: "Familie T.",
                quote: "Ausgesperrt direkt unterhalb der Burg Greifenstein. Es war ein Feiertag, aber der Techniker war nach nicht einmal 25 Minuten da. Saubere Arbeit und ehrliche Rechnung ohne Wucher.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Einsätze rund um die Burg Greifenstein und im Ulmtal. Wir öffnen zugefallene Türen in allen 10 Ortsteilen komplett spurlos – 24/7 und immer zum Festpreis.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gilt der Anfahrts-Festpreis auch für entlegene Berg-Ortschaften in Greifenstein?",
                answer: "Ja, die 20 Euro Anfahrt sind eine absolute Pauschale. Ob hoch oben in Greifenstein, in Odersberg, Nenderoth oder unten im Ulmtal (Allendorf, Ulm): Der Fahrtpreis ist für alle 10 Ortsteile derselbe."
            },
            {
                question: "Was tun, wenn ein uraltes Schloss in Beilstein blockiert?",
                answer: "Historische Holztüren und antike Schlösser behandeln wir mit spezieller Vorsicht. Unsere Monteure nutzen filigrane Werkzeuge, um alte Sperromechaniken ohne Zerstörung aufzubekommen."
            },
            {
                question: "Warten Sie auch nachts in Greifenstein den Notdienstbetrieb aufrecht?",
                answer: "Selbstverständlich. Als regionaler Fachbetrieb fahren wir 365 Tage im Jahr, auch tiefe Nächte oder an gesetzlichen Feiertagen, in das Greifensteiner Gebiet."
            }
        ],
        neighbors: ["schluesseldienst-leun", "schluesseldienst-ehringshausen", "schluesseldienst-driedorf", "schluesseldienst-herborn"]
    },
    {
        id: "breitscheid",
        slug: "schluesseldienst-breitscheid",
        name: "Breitscheid",
        plz: "35767",
        coordinates: { latitude: 50.6800, longitude: 8.1850 },
        logistics: { drivingTimeMinutes: "25-30", distanceFromHQ: 28 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 20, travelCostText: "+ 20€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Breitscheid — Ehrlicher 24/7 Notdienst ab 99€", 
            metaDescription: "Schlüsseldienst Breitscheid (Erdbach, Gusternhain uvm.): Schnelle Türöffnung ohne Abzocke in ca. 25-30 Min. Herbstlabyrinth & Töpferdorf. Festpreis garantiert." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die A45 (Abfahrt Herborn) und anschließende gut ausgebaute Landstraßen erreichen wir die Westerwald-Gemeinde an der Landesgrenze oftmals in unter 30 Minuten.",
        mainRoad: "A45 / B255",
        distanceKm: 28,
        character: "Westerwälder Flächengemeinde mit hessenweit größter Schauhöhle, Flugplatz und traditionellem Töpferhandwerk",
        populationApprox: "~4.700",
        landmark: "Herbstlabyrinth Schauhöhle, Flugplatz Breitscheid & Töpfermuseum Erdbach",
        buildingTypes: "Traditionelle, frei stehende Höfe und Westerwald-Einfamilienhäuser, sanierte Dorfkerne in den Ortsteilen, durchmischt mit modernisierten Energiespar-Eigenheimen.",
        parkingInfo: "Dank großzügiger Platzverhältnisse parken wir direkt an Ihrem Gartentor, in der Auffahrt oder direkt an der Einsatzadresse.",
        heroVariant: "Ausgesperrt in Breitscheid? Meisterhafte Hilfe für den hessischen Westerwald.",
        fareInfo: "Die Anfahrtspauschale für Breitscheid und alle zugehörigen Dörfer beträgt pauschale 20 Euro. Keine Aufschläge für die Randlage im Kreisgebiet.",

        scenarios: [
            {
                icon: "home",
                title: "Eigenheim in Gusternhain",
                description: "Ausgesperrt am Fuß des Barsteins? Wenn die gut gesicherte Tür nur zugezogen ist, öffnen unsere ausgebildeten Techniker diese gänzlich ohne Spuren und Bohren."
            },
            {
                icon: "shield-alert",
                title: "Schlüsselverlust beim Herbstlabyrinth",
                description: "Den Autoschlüssel beim Besuch der Schauhöhle oder auf dem Flugplatz Breitscheid verlegt? Wir entsperren alle gängigen KFZ-Modelle kratzerfrei."
            },
            {
                icon: "briefcase",
                title: "Notfall im Töpferdorf Erdbach",
                description: "Die Tür zur heimischen Werkstatt oder zum Eigenheim in Erdbach hat sich verkeilt? Wir sind 365 Tage im Jahr mit Profi-Equipment für Sie erreichbar."
            }
        ],

        aboutText: `
<p>Im nordwestlichsten Teil des Lahn-Dill-Kreises, direkt an den Ausläufern des Westerwalds und der Grenze zu Rheinland-Pfalz, liegt die Gemeinde <strong>Breitscheid</strong>. Mit rund 4.700 Einwohnern und den Ortsteilen <strong>Breitscheid, Erdbach, Gusternhain, Medenbach und Rabenscheid</strong> ist sie ein wichtiges Zentrum für Natur, Sport und Geschichte. Bundesweit bekannt ist Breitscheid durch seine faszinierende Unterwelt: Die <strong>Schauhöhle Herbstlabyrinth</strong> ist das größte Tropfsteinhöhlen-System Hessens. Obendrauf pulsiert das Leben auf dem <strong>Flugplatz Breitscheid</strong> (EDGB) oder im historischen „Töpferdorf" <strong>Erdbach</strong>. Wo Touristen, Sportler und Anwohner gleichermaßen aktiv sind, bleibt der gelegentliche Verlust eines Schlüssels nicht aus. Wenn sich die Haustür schließt, rückt unser <strong>Schlüsseldienst Breitscheid</strong> schnellstmöglich aus.</p>

<h3>In unter 30 Minuten vor Ort</h3>
<p>Die weite Distanz ist für uns kein Hindernis. Von unserer Wetzlarer Einsatzbasis aus nutzen wir die schnelle Autobahnverbindung (<strong>A45 bis Herborn</strong>) und biegen dann auf die Landstraßen in den Westerwald ab. In gut <strong>25 bis 30 Minuten</strong> stehen unsere Einsatzfahrzeuge bei Ihnen auf dem Hof. Ob im belebten Kernort Breitscheid, in der Nähe des Töpfermuseums Erdbach, oder oben am Gusternhainer Barstein (614 m) – wir lassen niemanden im Regen oder Schnee stehen.</p>

<h3>Von der Tropfsteinhöhle bis zum Flugplatz: Handwerk mit Herz</h3>
<p>Wir respektieren die teuren Investitionen, die viele Menschen rund um Breitscheid in Sicherheitstechnik (Einbruchschutz, Mehrfachverriegelungen, Isolier-Türen) getätigt haben. Unser Vorgehen ist deshalb geprägt von „Materialerhalt durch Know-how". In ca. 99 Prozent aller reinen Sperrfälle, bei denen eine Tür nur zugefallen und nicht mehrfach verriegelt ist, setzen wir hochentwickelte, biegsame Federdrähte („Türfallengleiter") ein. Diese schieben den Riegel sanft zurück, ganz ohne Beschädigungen an Farbprofil oder Zylinder.</p>

<h3>Flächendeckende Transparenz</h3>
<p>Ehrgeizige Preismodelle oder horrende Kosten haben bei uns keinen Platz. Wir bringen unseren Service für eine <strong>Basis von 99 Euro</strong> an die Haustür. Die Anfahrt in den äußersten Teil des Kreises berechnen wir mit fairen und fest vereinbarten <strong>20 Euro</strong>. Keine „Grenzort-Zuschläge", keine Fantasierechnungen am Wochenend-Sonntag. Transparente und faire Abwicklung für Breitscheid, Erdbach, Gusternhain, Medenbach und Rabenscheid.</p>
`,

        localTestimonials: [
            {
                name: "Dieter R.",
                quote: "Nach dem Wandern in Erdbach merkte ich: Haustürschlüssel ist weg. Der Schlüsseldienst aus Wetzlar kam pünktlich in 30 Min., fräste das alte Schloss sicher auf und baute ein neues ein. Preis-Leistung absolut top.",
                rating: 5
            },
            {
                name: "Annette S.",
                quote: "Gestern am späten Abend in Gusternhain den Schlüssel drinnen gelassen. Es war bitterkalt, aber der Monteur kümmerte sich herzlich, öffnete die dicke Tür in Sekunden und erklärte jeden Posten der 119 Euro Rechnung.",
                rating: 5
            },
            {
                name: "Lars K.",
                quote: "Wir waren auf dem Flugplatz Breitscheid und unser Auto ging nicht mehr auf. Andere wollten irrwitzige Anfahrtskosten haben, dieser Schlüsseldienst nannte klare Preise und hat den Wagen kratzerfrei geöffnet.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Türöffnung im gesamten Gebiet von Breitscheid (inkl. Erdbach, Gusternhain, Rabenscheid, Medenbach). Wir öffnen Türen beschädigungsfrei und helfen bei Schlüsselnot – fair, regional & 24/7.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Breitscheid-Rabenscheid grenzt an Rheinland-Pfalz – kostet die Anfahrt dorthin extra?",
                answer: "Nein. Ganz gleich, wie nah Sie in Gusternhain, Medenbach oder Rabenscheid an der Grenze wohnen: Die 20 Euro Anfahrtsgebühr ist ein in sich stringenter Fix-Tarif für das gesamte Gemeindegebiet Breitscheid."
            },
            {
                question: "Wie hoch ist die Gefahr einer kaputten Tür beim Schlossöffnen in Breitscheid?",
                answer: "Solange die Türe nicht zugeschlossen (verriegelt) wurde, minimiert unser Fachbetrieb die Schäden auf annähernd Null (99% spurenlose Öffnung). Es muss weder gebohrt noch der Rahmen eingedrückt werden."
            },
            {
                question: "Haben Sie am Wochenende einen Notdienst für den Raum Breitscheid / Erdbach?",
                answer: "Wir sind zu 100% notdienstfähig. Ob Sonntagmorgen beim Töpfermarkt oder nachts im kältesten Westerwald-Winter: Telefonisch erreichen Sie immer einen kompetenten Disponenten unserer Zentrale."
            }
        ],
        neighbors: ["schluesseldienst-haiger", "schluesseldienst-herborn", "schluesseldienst-driedorf", "schluesseldienst-dietzhoelztal"]
    },
    {
        id: "dietzhölztal",
        slug: "schluesseldienst-dietzhoelztal",
        name: "Dietzhölztal",
        plz: "35716",
        coordinates: { latitude: 50.7200, longitude: 8.2950 },
        logistics: { drivingTimeMinutes: "25-30", distanceFromHQ: 26 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 25, travelCostText: "+ 25€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Dietzhölztal — 24/7 Türöffnung ab 99€", 
            metaDescription: "Schlüsseldienst Dietzhölztal (Ewersbach, Rittershausen, Mandeln, Steinbrücken). Festpreis ab 99€. In ca. 30 Min. am äußersten Rand des Lahn-Dill-Kreises." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die A45 bis Dillenburg und dann über die B277 und L3044 durch das Dietztal erreichen unsere Monteure den nördlichsten Zipfel des Kreises.",
        mainRoad: "A45 / B277 / L3044",
        distanceKm: 26,
        character: "Waldreiche Kommune an der Grenze zu Nordrhein-Westfalen, bekannt für historische Keltenspuren und das imposante Nationale Automuseum",
        populationApprox: "~5.600",
        landmark: "National Auto Museum (The Loh Collection), Hammerweiher & Ringwall Rittershausen",
        buildingTypes: "Ländlich geprägte Bebauung mit historischen Fachwerkhäusern, freistehende Einfamilienhäuser und Handwerksbetriebe in Tallagen.",
        parkingInfo: "In Dietzhölztal finden wir in der Regel problemlos einen Parkplatz direkt vor Ihrem Objekt.",
        heroVariant: "Ausgesperrt im Dietzhölztal? Vom Hammerweiher bis Rittershausen sind wir für Sie da.",
        fareInfo: "Aufgrund der extremen Randlage im nördlichsten Lahn-Dill-Kreis berechnen wir für ganz Dietzhölztal inklusive aller 4 Ortsteile lediglich faire 25 Euro Anfahrt.",

        scenarios: [
            {
                icon: "home",
                title: "Eigenheim in Ewersbach",
                description: "Ausgesperrt in Ewersbach? Wenn die Tür nur ins Schloss gefallen ist, schieben wir den Riegel mit Spezialwerkzeug schonend zurück – ganz ohne Bohren!"
            },
            {
                icon: "shield-alert",
                title: "Notfall am National Auto Museum",
                description: "Autoschlüssel verloren nach einem Besuch in der Loh Collection? Wir öffnen alle gängigen KFZ-Modelle kratzerfrei, damit Sie zügig nach Hause kommen."
            },
            {
                icon: "briefcase",
                title: "Tür blockiert in Mandeln oder Rittershausen",
                description: "Ein altes Schloss in Mandeln klemmt oder der Schlüssel ist im Zylinder abgebrochen? Wir reparieren oder tauschen die Schließtechnik vor Ort zum festen Preis."
            }
        ],

        aboutText: `
<p>Im äußersten Norden des Lahn-Dill-Kreises, unmittelbar an der Grenze zu Nordrhein-Westfalen, liegt die waldreiche Gemeinde <strong>Dietzhölztal</strong>. Mit ihren über 5.600 Einwohnern und den vier charakterstarken Ortsteilen <strong>Ewersbach, Mandeln, Rittershausen und Steinbrücken</strong> ist sie eine echte Perle der Natur. Die Region vereint jahrtausendealte Historie an den keltischen Ringwallanlagen, Idylle am <strong>Hammerweiher</strong> und modernste Technik im weltbekannten <strong>National Auto Museum (The Loh Collection)</strong> in Ewersbach. Wer im beschaulichen Tal der Dietzhölze vor einer verschlossenen Haus- oder Autotür steht, benötigt einen verlässlichen Service. Genau dann ist unser <strong>Schlüsseldienst Dietzhölztal</strong> Ihr rettender Ankerpunkt.</p>

<h3>Wir kommen bis in den äußersten Kreis-Winkel</h3>
<p>Dass Dietzhölztal geografisch weit von Zentren wie Wetzlar oder Gießen entfernt ist, spüren unsere Kunden nicht bei der Verfügbarkeit. Egal ob Sie an einem kalten Winterabend in <strong>Rittershausen</strong> ausgesperrt sind oder sonntags in <strong>Steinbrücken</strong> der Schlüssel abgebrochen ist: Wir machen uns umgehend auf den Weg über die A45 und B277 in Richtung Dietzhölze. In aller Regel erreichen unsere erfahrenen Monteure jeden der vier Ortsteile in maximal <strong>25 bis 30 Minuten</strong>.</p>

<h3>Kratzerfreie Öffnung – auch bei älteren Türen</h3>
<p>Die ländliche Architektur im Dietzhölztal umfasst historische Fachwerkhöfe mit jahrzehntealten Holz-Türen genauso wie moderne, gut gedämmte Energiesparhäuser in Ewersbach. Ist Ihre Tür leidglich ins Schloss gefallen (also nicht mehrfach per Schlüssel verriegelt), versprechen wir Ihnen eine <strong>zerstörungsfreie Öffnung in 99% der Fällen</strong>. Unsere Monteure arbeiten nicht mit purer Kraft, sondern mit hochsensiblen Federdrähten und Spiralgleitern, die das Material von Rahmen und Zylinder vollständig intakt lassen.</p>

<h3>Fair kalkulierter Preis für das weite Tal</h3>
<p>Viele auswärtige Notdienste verlangen extreme Zuschläge für Ortschaften an den Kreisgrenzen. Nicht bei uns: Sie profitieren von unserer Basisgebühr von ehrlichen <strong>99 Euro für die reine Türöffnung</strong>. Die weite Anfahrt von der Zentrale in den tiefen Lahn-Dill-Kreis kompensieren wir mit einer pauschalen, absolut transparenten Anfahrt von <strong>25 Euro</strong>. So gibt es in Dietzhölztal keine versteckten Kosten, sondern ehrliches Handwerk mit klaren Zahlen.</p>
`,

        localTestimonials: [
            {
                name: "Bernd W.",
                quote: "Ich stand in Mandeln abends vor verschlossener Tür. Der Monteur war nach 25 Minuten da, hat die Tür in wenigen Augenblicken spurenlos geöffnet. Super Preis, sehr ehrlicher Service.",
                rating: 5
            },
            {
                name: "Julia K.",
                quote: "Nach dem Besuch im Auto-Museum in Ewersbach den Autoschlüssel nicht mehr gefunden. Trotz der weiten Anfahrt hat der Schlüsseldienst nur faire 25 Euro Fahrtkosten berechnet und den Wagen ohne Kratzer geöffnet.",
                rating: 5
            },
            {
                name: "Familie H.",
                quote: "Unser Schloss in Rittershausen klemmte komplett. Der Techniker bohrte es fachmännisch auf und verbaute sofort einen sehr sicheren neuen Zylinder. Keine Aufschläge, alles exakt wie am Telefon besprochen.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Notöffnungen für Ewersbach, Mandeln, Rittershausen und Steinbrücken. Wir öffnen Haus- und Autotüren in ganz Dietzhölztal sicher, schnell und zum ehrlichen Festpreis.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Kommen Sie auch in das grenznahe Rittershausen?",
                answer: "Selbstverständlich. Unser Einsatzgebiet umfasst ausnahmslos alle 4 Ortsteile im Dietzhölztal. Ob Ewersbach, Mandeln, Steinbrücken oder Rittershausen – wir lassen niemanden draußen stehen."
            },
            {
                question: "Wird die weite Anfahrt ins Dietzhölztal teuer?",
                answer: "Nein, ganz im Gegenteil. Wir berechnen für die weite Strecke ab Wetzlar in den nördlichsten Kreisabschnitt lediglich pauschale 25 Euro. Der Preis für die Türöffnung selbst bleibt bei den festen 99 Euro."
            },
            {
                question: "Ich habe mich samstagnachts in Mandeln ausgesperrt. Helfen Sie?",
                answer: "Auf jeden Fall. Als regionaler 24/7 Notdienst haben wir das offizielle Mandat, Sie an 365 Tagen im Jahr zu unterstützen – auch in der tiefsten Samstagnacht."
            }
        ],
        neighbors: ["schluesseldienst-dillenburg", "schluesseldienst-haiger", "schluesseldienst-eschenburg"]
    },
    {
        id: "driedorf",
        slug: "schluesseldienst-driedorf",
        name: "Driedorf",
        plz: "35759",
        coordinates: { latitude: 50.6300, longitude: 8.1850 },
        logistics: { drivingTimeMinutes: "30-35", distanceFromHQ: 30 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 25, travelCostText: "+ 25€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Driedorf — 24/7 Türöffnung ab 99€", 
            metaDescription: "Schlüsseldienst Driedorf inkl. aller 9 Ortsteile. Höllberg & Krombachtalsperre. Festpreis ab 99€. In ca. 30-35 Min. bei Ihnen vor Ort im Westerwald." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die A45 bis Herborn und anschließend über kurvige Westerwald-Landstraßen erreichen wir Driedorf und seine Ortsteile zügig, oft in gut 30 Minuten.",
        mainRoad: "A45 / B255",
        distanceKm: 30,
        character: "Höchste Erhebungen im Lahn-Dill-Kreis: Beliebte Westerwald-Gemeinde mit 9 Ortsteilen, viel Wasser und Berglandschaft",
        populationApprox: "~5.150",
        landmark: "Höllkopf (643m), Krombachtalsperre & Heisterberger Weiher",
        buildingTypes: "Freistehende Westerwald-Höfe in den Dörfern, touristische Bebauung an den Weihern und sanierte Eigenheime der Hauptwohnbevölkerung.",
        parkingInfo: "Aufgrund der weitläufigen Bebauung im Westerwald parken unsere Einsatzwagen meist unmittelbar an der Haustür.",
        heroVariant: "Ausgesperrt ganz oben im Lahn-Dill-Kreis? Wir sind Ihr Notdienst für den Hessischen Westerwald.",
        fareInfo: "Die Anfahrtspauschale für den extremen West-Zipfel (Driedorf mit allen 9 Ortsteilen) beträgt faire 25 Euro.",

        scenarios: [
            {
                icon: "home",
                title: "Haustür am Heisterberger Weiher",
                description: "Vom Spaziergang am Seehaus zurück, aber die Tür lässt sich nicht mehr öffnen? Wir öffnen Standardtüren und verwitterte Holzrahmen im Westerwald materialschonend."
            },
            {
                icon: "shield-alert",
                title: "Auto-Schlüssel beim Skifahren weg",
                description: "Wintersport am Höllberg oder Segeln an der Krombachtalsperre fordern ihren Tribut. Liegt der Schlüssel im verschlossenen Wagen, entsperren wir den PKW kratzerfrei."
            },
            {
                icon: "briefcase",
                title: "Defektes Schloss in Hohenroth",
                description: "Temperaturen im Westerwald setzen alten Schlössern oft zu. Wir rüsten defekte Zylinder in Mademühlen, Hohenroth oder Roth zügig auf leichtgängige Sicherheitszylinder um."
            }
        ],

        aboutText: `
<p>Die Großgemeinde <strong>Driedorf</strong> bildet den westlichen „Balkon" des Lahn-Dill-Kreises und liegt eingebettet in die Höhen des beginnenden hessischen Westerwalds. Aus den 9 charakteristischen Ortsteilen – <strong>Driedorf, Heiligenborn, Heisterberg, Hohenroth, Mademühlen, Münchhausen, Roth, Seilhofen und Waldaubach</strong> – blickt man teils bis ins benachbarte Rheinland-Pfalz. Auf über 643 Metern Höhe ragt der <strong>Höllberg (Höllkopf)</strong> auf. Natur pur und beliebte Ausflugsziele wie die <strong>Krombachtalsperre</strong> oder der <strong>Heisterberger Weiher</strong> ziehen nicht nur die 5.150 festen Einwohner, sondern auch zahllose Touristen an. Bei Skibetrieb im Winter oder Wassersport im Sommer gehen Schlüssel schnell verloren. Hier rückt unser <strong>Schlüsseldienst Driedorf</strong> im 24-Stunden-Takt zur Hilfe aus.</p>

<h3>Zerstörungsfreie Öffnung im gesamten Westerwald</h3>
<p>Unsere Monteure fahren von Wetzlar aus zügig über die A45 (Abfahrt Herborn) hinauf in die Westerwald-Gemeinde. Wir kennen das dichte Netz an Landstraßen und sind selbst bei winterlichen Bedingungen in aller Regel in <strong>30 bis 35 Minuten</strong> in Mademühlen, Driedorf oder Waldaubach vor Ort. Das Besondere: Die weite Landfahrt oder extreme Wetterbedingungen ändern nichts an unserer strikten Service-Qualität. Sofern eine Tür nur ins Fachwerk geschnappt (zugezogen) ist, wenden wir unsere Premium-Aufschließtechnik an, die zu <strong>über 99% keinerlei Spuren an Zylinderholz oder Beschlägen</strong> hinterlässt.</p>

<h3>Flächendeckende Preise für alle 9 Ortsteile</h3>
<p>Viele Schlüsseldienste lassen Kunden in abgelegenen Gebieten wie Münchhausen oder am äußersten Ende der Krombachtalsperre bluten. Das ist nicht unsere Philosophie. Wir behandeln die gesamte Gemeinde Driedorf mit einer klaren <strong>25 Euro Anfahrtspauschale</strong>. Ob Sie im Kernort neben der Burgruine oder im kleinsten Dorf Heiligenborn wohnen: Der Einsatz zur zerstörungsfreien Türöffnung kostet ehrliche <strong>99 Euro Festpreis am Werktag</strong> für den Handwerker, plus den transparenten Fahrtkostenanteil. Keine Höhenzuschläge, kein Ausnutzen der Randlage.</p>
`,

        localTestimonials: [
            {
                name: "Simone G.",
                quote: "Wir kamen abends vom Segeln an der Krombachtalsperre und standen in Mademühlen vor verschlossener Tür. Der Monteur kam prompt, war super transparent mit den 25 Euro Fahrtkosten und hat in Sekunden aufgemacht.",
                rating: 5
            },
            {
                name: "Tobias L.",
                quote: "In Heisterberg klemmte das alte Haustürschloss. Der Kollege hat professionell gebohrt, weil es defekt war, und einen neuen Abus-Zylinder verbaut. Festpreis absolut eingehalten, top Service auf dem Berg.",
                rating: 5
            },
            {
                name: "Familie M.",
                quote: "Am Sonntagmorgen in Seilhofen ausgeschwenkt und Tür war im Wind zu. Der Notdienst in Wetzlar machte sich sofort auf den langen Weg und war trotzdem noch so nett und günstig. 5 Sterne!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ehrliche Türöffnungen auf den Höhen des Westerwalds. Für alle 9 Ortsteile Driedorfs (von Waldaubach über Heisterberg bis Roth) sind wir fix und absolut transparent im Einsatz.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Wie ist der Anfahrtszeitraum nach Driedorf-Heiligenborn?",
                answer: "Heiligenborn ist einer der entlegensten Teile, doch via A45 und Bundesstraßen sind unsere Einsatzfahrzeuge üblicherweise in weniger als 35 Minuten auch in Randlagen Driedorfs vor Ort."
            },
            {
                question: "Was berechnen Sie netto oben auf dem Berg an Nachtzuschlägen?",
                answer: "Unsere Preise gliedern sich glasklar. Die Anfahrt in GANZ Driedorf bleibt exakt bei 25 Euro. Der Grundpreis nachts steigt im Rahmen der IHK-Empfehlungen auf 149 Euro für die zertifizierte Notfall-Öffnung."
            },
            {
                question: "Geht meine historische Westerwald-Eingangstür beim Öffnen kaputt?",
                answer: "Eindeutig nein! Sofern die Tür nur ins Schloss gefallen ist, arbeiten wir mit speziellen Gleitblechen oder „Türklingen“. Damit schieben wir den Sperrriegel unbeschädigt zurück. Kein Bohrer nötig."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-breitscheid", "schluesseldienst-greifenstein"]
    },
    {
        id: "eschenburg",
        slug: "schluesseldienst-eschenburg",
        name: "Eschenburg",
        plz: "35713",
        coordinates: { latitude: 50.7600, longitude: 8.3650 },
        logistics: { drivingTimeMinutes: "25-30", distanceFromHQ: 28 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 25, travelCostText: "+ 25€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Eschenburg — 24/7 Türöffnung ab 99€", 
            metaDescription: "Schlüsseldienst Eschenburg (Eibelshausen, Wissenbach, Hirzenhain). Festpreis ab 99€. Zerstörungsfreie Öffnung in ca. 30 Minuten, 100% ohne Abzocke." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über Dillenburg und die B253 dringen wir bis ins Tal der Dietzhölze vor. Für Eschenburgs 6 Ortsteile benötigen wir rund 25 bis 30 Minuten.",
        mainRoad: "A45 / B253",
        distanceKm: 28,
        character: "Gemeinde mit industrieller Entwicklungsgeschichte (Eisenland), 6 Ortsteilen und über 10.000 Einwohnern",
        populationApprox: "~10.000",
        landmark: "Freizeitbad Panoramablick, Eschenburgturm, Holderberg & Hirzenhainer Flugplatz",
        buildingTypes: "Mix aus gewachsenen dörflichen Strukturen, alten Schmieden sowie modernen Neubau-Siedlungen der Mittelzentren.",
        parkingInfo: "Sowohl in Eibelshausen am Panoramabad als auch in den ruhigeren Straßenzügen von Simmersbach sind Parkplätze in der Regel direkt am Haus vorhanden.",
        heroVariant: "Schlüsselnot in Eschenburg? Von Wissenbach bis Hirzenhain sind unsere Schlossexperten rasch zur Stelle.",
        fareInfo: "Die weite Distanz bis zum Marburger Kreisrand wird mit verlässlichen und pauschalen 25 Euro Anfahrt berechnet.",

        scenarios: [
            {
                icon: "home",
                title: "Wissentlich ausgesperrt in Wissenbach",
                description: "Zugefallene Haustür im Eschenburger Umland? Wir ziehen den Riegel schonend mit speziellen Federdrähten zurück, ohne Kratzer im Profil zu hinterlassen."
            },
            {
                icon: "shield-alert",
                title: "Defektes Schloss in Eibelshausen",
                description: "Der Zylinderblockadier-Schock in Eschenburgs Verwaltungssitz Eibelshausen? Wir bohren gezielt die Stifte an, ziehen das Schloss defektfrei und bauen top Sicherheitstechnik ein."
            },
            {
                icon: "briefcase",
                title: "PKW-Notöffnung an der Dietzhölze",
                description: "Vom Wanderweg beim Eschenburgturm zurück an den PKW und der Autoschlüssel fehlt? Wir entsperren alle Marken schonend direkt am Waldrand oder im Ort."
            }
        ],

        aboutText: `
<p>Im nordöstlichen Teil des Lahn-Dill-Kreises erstreckt sich die historisch geprägte Gemeinde <strong>Eschenburg</strong>. Bekannt als Teil des alten hessischen „Eisenlandes" und durchzogen vom Fluss Dietzhölze, beherbergt sie heute knapp 10.000 Menschen. Verteilt auf die 6 idyllischen Ortsteile <strong>Eibelshausen, Eiershausen, Hirzenhain, Roth, Simmersbach und Wissenbach</strong>, verbindet Eschenburg tiefergehende Tradition mit Naherholungs-Fokus am <strong>Freizeitbad Panoramablick</strong> oder oben am <strong>Eschenburgturm</strong>. Trotz der geografischen Grenznähe zum benachbarten Landkreis Marburg-Biedenkopf lassen wir die Bürger in Eschenburg bei Schlüsselverlust nicht in Stich. Im Notfall entsendet unser <strong>Schlüsseldienst Eschenburg</strong> unverzüglich einen Profi-Techniker aus der Zentrale.</p>

<h3>Flotte Erreichbarkeit der Dietzhölze</h3>
<p>Über die Autobahn A45 und Dillenburg setzen wir schnellstmöglich ins Tal zu Ihnen über. Ob in Tal-Lage (Wissenbach, Eibelshausen) oder am Hang bei Hirzenhain mit dem Segelflugplatz: Die veranschlagte Fahrtzeit für nahezu jeden Winkel der Großgemeinde liegt bei exzellenten <strong>25 bis 30 Minuten</strong>. Das gilt für regnerische Herbstabende genauso wie für sonnige Sommerwochenenden inmitten von Touristen am Holderberg.</p>

<h3>Handwerkskunst an alten und neuen Türen</h3>
<p>In Eschenburg mischt sich historische Bausubstanz mit modernsten Eigenheimen. Eine klassisch, nur zugefallene Haustür behandeln wir durch schonende Aufsperrtechniken („Picking", Gleiterkrallen, Zylinderhaken). Damit können wir <strong>über 99 % aller reinen „Tür zu"-Notfälle ohne kleinste Kratzer</strong> öffnen. Ist ein Zylinderschloss allerdings durch Verschleiß verklemmt oder mutwillig zugeklebt worden, fräsen Spezialgeräte den Bohrschutz gezielt aus, sodass ein Sicherheitszylinder passgenau direkt vor Ort (auf Wunsch „Gleichschließend") neu eingesetzt werden kann.</p>

<h3>Absolute Preissicherheit im Nordosten</h3>
<p>In den äußersten Randlagen von Kreisen tummeln sich oft dubiose Briefkasten-Firmen, die Mondpreise von teils weit über 500 Euro verlangen. Bei uns erhalten Sie echte Transparenz aus der Region für die Region: Die Basis-Türöffnung (zugefallen, am Werktag) bieten wir für ehrliche <strong>99 Euro Festpreis</strong> an. Hinzu kommt eine fair gedeckelte Fahrtpauschale von <strong>25 Euro</strong> für das Eschenburger Gesamtgebiet.</p>
`,

        localTestimonials: [
            {
                name: "Lisa R.",
                quote: "Nach dem Schwimmen im Panoramablick in Eibelshausen merkte ich, dass mein Wohnungsschlüssel verschwunden war. Der Disponent am Telefon nannte gleich den Endpreis, der Monteur war rasend fix. Einfach ehrliche Handwerksleistung.",
                rating: 5
            },
            {
                name: "Holger S.",
                quote: "Wir sitzen hoch oben in Hirzenhain und ich dachte, es dauert Stunden. Nach 30 Minuten stand der Schlüsseldienst vor der Gartentür, öffnete zerstörungsfrei und berechnete exakt den 99 Euro Basispreis plus Anfahrt. Perfekt.",
                rating: 5
            },
            {
                name: "Ehepaar M.",
                quote: "Unsere alte Holztür in Wissenbach ließ sich nicht mehr aufschließen, der Schlüssel ließ sich nicht einmal mehr drehen. Der nette Herr hat den Zylinder aufgefräst und kompetent beraten. Fühlen uns jetzt sicherer denn je.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ehrlicher regionaler Support für alle 6 Ortsteile von Eschenburg. Kompetente Türöffnungen, Schlosstausch und 24/7-Montage bei Ihnen vor Ort.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gelten die Festpreise auch noch nach hinten raus in Simmersbach oder Hirzenhain?",
                answer: "Absolut. Wie abgelegen Eschenburgs Ortsteile für Ortsfremde manchmal wirken mögen, für unseren Dienstleistungs-Kodex gibt es nur einen transparenten Kreis-Grenzen-Tarif von pauschalen 25 Euro Anfahrt."
            },
            {
                question: "Wenn sich meine Tür in Eibelshausen total verzogen hat?",
                answer: "Schwere Holztüren, die im Winter klemmen, fordern oft etwas mehr Fingerspitzengefühl. Wenn der Rahmen verzogen ist, setzen wir professionelle Hebel-Kissen ein (Luftdruck), um gewaltfrei an die Mechanik zu gelangen."
            },
            {
                question: "Darf ich direkt vor Ort per Karte beim Monteur in bar bezahlen?",
                answer: "Die Rechnungsbegleichung erfolgt völlig unkompliziert. Sie zahlen den zuvor besprochenen Festpreis (im besten Fall die 99€+25€) ganz bequem in Bar, per EC- oder Kreditkarte, direkt am Einsatzort in Eschenburg."
            }
        ],
        neighbors: ["schluesseldienst-dillenburg", "schluesseldienst-dietzhoelztal", "schluesseldienst-mittenaar"]
    },
    {
        id: "mittenaar",
        slug: "schluesseldienst-mittenaar",
        name: "Mittenaar",
        plz: "35756",
        coordinates: { latitude: 50.7000, longitude: 8.3700 },
        logistics: { drivingTimeMinutes: "25-30", distanceFromHQ: 26 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 25, travelCostText: "+ 25€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Mittenaar — 24/7 Türöffnung ab 99€", 
            metaDescription: "Schlüsseldienst Mittenaar (Bicken, Ballersbach, Bellersdorf, Offenbach). Festpreis ab 99€. In 30 Min. bei Ihnen am Lahn-Dill-Bergland." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über Herborn (A45) oder direkt durch das malerische Lahn-Dill-Bergland erreichen unsere Techniker alle 4 Ortsteile in verlässlichen 25 bis 30 Minuten.",
        mainRoad: "B255 / A45",
        distanceKm: 26,
        character: "Ländliche Gemeinde im idyllischen Lahn-Dill-Bergland (Hörre) mit rund 4.800 Einwohnern in 4 Ortsteilen",
        populationApprox: "~4.800",
        landmark: "Heimatmuseum Bicken, historische Kirche Ballersbach & Felsformation Wilhelmsteine",
        buildingTypes: "Typisch mittelhessische Bebauung: Historische Fachwerkhäuser im Dorfkern, durchsetzt mit freistehenden Einfamilienhäusern der letzten Jahrzehnte.",
        parkingInfo: "Ländlicher Raum bringt Vorteile: In nahezu allen Straßenzügen von Mittenaar parken wir direkt in Ihrer Auffahrt oder am Straßenrand vor dem Tor.",
        heroVariant: "Ausgesperrt in Mittenaar? Schnelle Hilfe für Bicken, Ballersbach, Bellersdorf und Offenbach.",
        fareInfo: "Die weite Fahrt ins Lahn-Dill-Bergland ist fair kalkuliert: pauschale 25 Euro für jeden Ortsteil von Mittenaar.",

        scenarios: [
            {
                icon: "home",
                title: "Haustür in Bicken zugezogen",
                description: "Vom Heimatmuseum nach Hause gekommen und die Tür ist im Wind zugefallen? Kein Grund zur Panik. Wir öffnen 99 % der zugefallenen Türen spurlos."
            },
            {
                icon: "shield-alert",
                title: "Schlüsselverlust bei den Wilhelmsteinen",
                description: "Eine Wanderung in der Hörre und plötzlich fehlt der Autoschlüssel? Wir helfen schnell und öffnen Ihren PKW absolut kratzerfrei vor Ort."
            },
            {
                icon: "briefcase",
                title: "Blockiertes Schloss in Ballersbach",
                description: "Historische Türen oder alte Schlösser in Ballersbach und Offenbach streiken oft altersbedingt. Wir bohren defekte Mechaniken vorsichtig aus und ersetzen sie sofort."
            }
        ],

        aboutText: `
<p>Im Herzen des Lahn-Dill-Berglandes, umschlossen vom dichten Waldgebiet der <em>Hörre</em>, liegt die beschauliche Gemeinde <strong>Mittenaar</strong>. Zu ihr gehören die vier charakterstarken Ortsteile <strong>Bicken (Verwaltungssitz), Ballersbach, Bellersdorf und Offenbach</strong>. Über 4.800 Menschen schätzen die Naturverbundenheit, Wanderziele wie die mächtige Felsformation der <strong>Wilhelmsteine</strong> und die reiche Kulturgeschichte (z.B. das Heimatmuseum in Bicken oder die Fresken in historischen Kirchen). Wo viel gewandert und ländlich gewohnt wird, fällt auch mal unbemerkt eine Tür ins Schloss. Wenn das passiert, ist der <strong>Schlüsseldienst Mittenaar</strong> der seriöse Ansprechpartner aus der Region.</p>

<h3>Zügig aus Wetzlar im Bergland</h3>
<p>Dank der guten überregionalen Anbindung via A45 (Herborn) und Bundesstraße 255 navigieren unsere Disponenten die Einsatzwagen schnellstmöglich zu Ihnen. Für Ballersbach, Bicken oder das kleinere Bellersdorf können Sie mit einer sehr verlässlichen Ankunftszeit von <strong>25 bis 30 Minuten</strong> rechnen – egal, ob in einer Regennacht oder am Sonntagmittag.</p>

<h3>Professionelles Werkzeug für jedes Schloss</h3>
<p>Einfach eine Scheckkarte durchziehen? So leicht lassen sich massive Haustüren in Mittenaar nicht knacken. Unsere ausgebildeten Monteure nutzen filigranste Fiberglas-Gleiter, Türfallen-Nadeln und spezielles Zug-Werkzeug. Damit können wir in über 99 % der Fälle zugezogene Türen <strong>komplett zerstörungsfrei und ohne einen einzigen Kratzer</strong> öffnen. Sollte der Schlüssel hingegen abgebrochen oder das Schloss mutwillig verklebt worden sein, setzen wir professionelle Akku-Zylinderfräsen ein und montieren Ihnen auf Wunsch sofort einen neuen Hochsicherheits-Zylinder nach DIN-Norm.</p>

<h3>Ehrliche Preise für Mittenaar</h3>
<p>Gute Arbeit darf nicht durch Wucherpreise getrübt werden. Bei uns gilt für ganz Mittenaar ein transparentes Versprechen: Die einfache Türöffnung kostet tagsüber <strong>genau 99 Euro Festpreis</strong>. Hinzu kommt eine fair gedeckelte Fahrtpauschale in das Lahn-Dill-Bergland von pauschalen <strong>25 Euro</strong>. So wissen alle Bewohner von Bicken bis Offenbach vorher auf den Cent genau, was transparent am Telefon kommuniziert wurde.</p>
`,

        localTestimonials: [
            {
                name: "Heinz K.",
                quote: "In Bicken ausgesperrt, als ich nur kurz Briefkasten leeren wollte. Nach einem kurzen Anruf war der Handwerker in einer halben Stunde da. Freundlich, hat zügig geöffnet, Preis hat 100% gepasst.",
                rating: 5
            },
            {
                name: "Sabrina M.",
                quote: "Wir kamen abends von einer Wanderung bei der Hörre. Autoschlüssel weg! Der Schlüsseldienst kam direkt nach Ballersbach, hat das Auto in wenigen Minuten professionell und ohne eine Schramme entriegelt.",
                rating: 5
            },
            {
                name: "Familie D.",
                quote: "Das Schloss unserer Gartentür in Offenbach hat sich total verkeilt. Der Schlosser bohrte das Ding präzise auf und baute ein modernes Teil ein. Alles zum Festpreis, sehr empfehlenswert.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ehrlicher regionaler Support für Bicken, Ballersbach, Bellersdorf und Offenbach. Wir entsperren Haustüren und PKWs in Mittenaar – zu 99% spurenlos und absolut fair kalkuliert.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Fallen für das kleine Bellersdorf extra Fahrtkosten an?",
                answer: "Auf keinen Fall. Die Fahrtkosten-Pauschale von fairen 25 Euro gilt einheitlich für das komplette Gebiet der Gemeinde Mittenaar, ganz ohne versteckte Entfernungs-Aufschläge."
            },
            {
                question: "Öffnen Sie in Mittenaar auch elektronische oder smarte Schlösser?",
                answer: "Ja, unsere Monteure bilden sich stetig weiter. Viele elektronische Schließsysteme weisen Notstrom-Brücken oder Bypass-Zylinder auf, die wir im Notfall ebenfalls professionell entsperren können."
            },
            {
                question: "Kommen Sie an einem Sonntag nach Bicken?",
                answer: "Ja, wir sind als regionaler 24-Stunden-Betrieb an exakt 365 Tagen im Jahr für unsere Kunden im Einsatz, auch an Sonn- und Feiertagen rund um die Uhr."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-eschenburg", "schluesseldienst-bischoffen"]
    },
    {
        id: "siegbach",
        slug: "schluesseldienst-siegbach",
        name: "Siegbach",
        plz: "35768",
        coordinates: { latitude: 50.7350, longitude: 8.3950 },
        logistics: { drivingTimeMinutes: "30-35", distanceFromHQ: 30 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 25, travelCostText: "+ 25€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Siegbach — Ehrlicher 24/7 Notdienst ab 99€", 
            metaDescription: "Schlüsseldienst Siegbach (Eisemroth, Tringenstein, Übernthal, Wallenfels, Oberndorf). Festpreis ab 99€. In ca. 35 Min. bei Ihnen vor Ort im Schelder Wald." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die A45 (Dillenburg) oder landschaftlich schöne Nebenstraßen gelangen wir tief in den Schelder Wald zu allen Siegbacher Ortsteilen – meist in rund 35 Minuten.",
        mainRoad: "A45 / B277",
        distanceKm: 30,
        character: "Idyllische, ruhige Waldgemeinde mit 5 Ortsteilen, reich an Burgruinen und Naturerlebnis-Pfaden",
        populationApprox: "~2.530",
        landmark: "Burgruine Tringenstein, Burg Wallenfels, Heimatmuseum Übernthal & Naturerlebnisbad",
        buildingTypes: "Stark ländliche Historie: Viele aus Burgsteinen errichtete Höfe in Wallenfels, urige Fachwerkkirchen, durchmischt mit typischen hessischen Ein- und Zweifamilienhäusern.",
        parkingInfo: "Das ländliche Siegbach bietet massig Platz: Unsere Einsatzfahrzeuge stehen immer unmittelbar an der betreffenden Hausnummer.",
        heroVariant: "Ausgesperrt ganz tief im Schelder Wald? Zuverlässige Hilfe für Siegbach und alle Ortsteile.",
        fareInfo: "Aufgrund der extremen Randlage berechnen wir auch für Siegbach eine transparente, gedeckelte Anfahrt von pauschal 25 Euro.",

        scenarios: [
            {
                icon: "home",
                title: "Haustür zu in Eisemroth",
                description: "Ausgesperrt im Hauptort Eisemroth? Wir entsperren auch stark gedämmte, schwere Außentüren in Minuten und fast immer vollkommen schadensfrei."
            },
            {
                icon: "shield-alert",
                title: "Burg Tringenstein Wandertrip",
                description: "Vom Wanderweg oder Naturerlebnisbad zurück und der Wagenschlüssel liegt im versperrten Kofferraum? Wir sorgen kratzerfrei für eine offene Autotür."
            },
            {
                icon: "briefcase",
                title: "Schlossdefekt in Wallenfels",
                description: "Frost im Winter hat den Zylinder im historischen Wallenfels unbrauchbar gemacht? Wir rüsten zügig auf ein gefrier-resistentes, hochsicheres Schloss um."
            }
        ],

        aboutText: `
<p>Eingebettet in die dichten Wälder des Schelder Waldes, ganz im nordöstlichen Zipfel des Lahn-Dill-Kreises, liegt die ländliche Natur-Idylle <strong>Siegbach</strong>. Mit rund 2.530 Einwohnern verteilt auf die fünf Ortsteile <strong>Eisemroth (Verwaltungssitz), Oberndorf, Tringenstein, Übernthal und Wallenfels</strong> ist die Region ein echtes Refugium für Naturfreunde, Wanderer und Geschichtsinteressierte. Highlights wie das stolze Burgberg-Modell und die Ruine in Tringenstein, historische Dorfkirchen und das beliebte Naturerlebnisbad zeugen von uriger Lebenskultur. Doch auch in der tiefsten Waldgemeinde bleiben Alltagspannen nicht aus: Ein Windstoß schlägt die Tür zu, der Autoschlüssel verschwindet beim Wandern. Dann sorgt der <strong>Schlüsseldienst Siegbach</strong> für schnelle, professionelle Rettung.</p>

<h3>Wir kommen bis zur letzten Hausnummer</h3>
<p>Für viele städtische Schlüsseldienste ist Siegbach schlichtweg zu weit weg. Nicht für uns. Wir entsenden unsere ortskundigen Techniker zügig über die A45 (Abfahrt Dillenburg) in das Lahn-Dill-Bergland. Auch wenn Dörfer wie Wallenfels klein sind: Wir sind nach rund <strong>30 bis 35 Minuten Fahrtzeit</strong> garantiert vor Ort. Lassen Sie sich bei Eiseskälte im Wald nicht von Vermittlerzentralen hinhalten, vertrauen Sie auf unseren regionalen Einsatz.</p>

<h3>Moderne Methodik – keine Schäden</h3>
<p>In Siegbach bearbeiten wir alles: alte Bauernhoftüren aus massivem Eichenholz, die teils noch aus Burgsteinen gebaut wurden, bis hin zu modernsten Kunststoff-Haustüren eines neuen Passivhauses in Übernthal. Wenn letztere lediglich ins Schloss gefallen sind, garantieren wir dank hochmoderner Feder- und Hebelwerkzeuge eine <strong>nahezu 100-prozentig beschädigungsfreie Zylinderöffnung</strong>. Muss ein defektes Schloss in Oberndorf aufgrund von Verschleiß doch weichen, fräsen wir millimetergenau und bauen ein neues Premium-System in Erstausrüsterqualität ein.</p>

<h3>Ein fairer Preis für das „Ende der Welt"</h3>
<p>Dass Siegbach eine extreme Randgemeinde im Kreis ist, rechtfertigt keine Wucherpreise. Wir verlangen für Siegbach und alle seine Ortsteile den identischen <strong>99 Euro Festpreis</strong> (Werktags-Öffnung) plus unsere abgegoltene, transparente Anfahrtspauschale für Langstrecken in Höhe von <strong>25 Euro</strong>. Das macht den Service vor Ort extrem berechenbar und schützt ehrliche Dorfbewohner vor schwarzen Schafen in der Branche.</p>
`,

        localTestimonials: [
            {
                name: "Karsten O.",
                quote: "In Tringenstein steht man weit oben. Der Monteur war an einem Samstag nach 35 Minuten da, hat die Tür mit einem Draht trickreich aufbekommen und nur das berechnet, was am Telefon stand. Perfekt.",
                rating: 5
            },
            {
                name: "Elena U.",
                quote: "Schlüsselverlust am Naturerlebnisbad Siegbach. Wir saßen vor unserem verschlossenen Kombi. Der nette Mensch vom Schlüsseldienst kam angerauscht, öffnete das Schloss in 2 Minuten ohne den Lack zu zerkratzen.",
                rating: 5
            },
            {
                name: "Markus V.",
                quote: "Wir wohnen in dem Mini-Ort Wallenfels. Toll, dass dieser Wetzlarer Notdienst uns nicht abgewiesen hat. Das rostige Schloss wurde aufgebohrt und durch ein Abus-System ersetzt. Sehr faire, ehrliche Rechnung.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ehrliche Türöffnungen für Eisemroth, Oberndorf, Tringenstein, Übernthal und Wallenfels. Wir öffnen Haus- und PKW-Türen tief im Waldgebiet – regional und absolut fair kalkuliert.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Finden Ihre Monteure auch versteckte Höfe in Übernthal oder Wallenfels?",
                answer: "Ja, unsere Techniker nutzen topaktuelle GPS-Systeme und kennen die versteckten Lagen in Tälern des Lahn-Dill-Berglandes durch hunderte regionale Einsätze sehr genau."
            },
            {
                question: "Gibt es für Siegbach nochmal einen Aufpreis zur 25€ Anfahrt?",
                answer: "Nein! Das ist unser Versprechen an Randgemeinden wie Siegbach. Die 25 Euro Anfahrt sind der maximale End-Deckel für unsere Fahrtkosten im Lahn-Dill-Kreis."
            },
            {
                question: "Kann man bei solch tiefen Landeinsätzen mit Karte zahlen?",
                answer: "Selbstverständlich. Jeder unserer Monteure führt ein mobiles Kartenterminal mit, sodass Sie in Eisemroth Bar, via EC-Karte, Girocard oder Kreditkarte zahlen können (Mobilnetzabdeckung vorausgesetzt)."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-mittenaar", "schluesseldienst-eschenburg"]
    },
    {
        id: "weilmuenster",
        slug: "schluesseldienst-weilmuenster",
        name: "Weilmünster",
        plz: "35789",
        coordinates: { latitude: 50.4350, longitude: 8.3700 },
        logistics: { drivingTimeMinutes: "25-30", distanceFromHQ: 28 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 25, travelCostText: "+ 25€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Weilmünster — 24/7 Türöffnung ab 99€", 
            metaDescription: "Schlüsseldienst Weilmünster (Laubuseschbach, Wolfenhausen, Möttau uvm.). Zerstörungsfreie Öffnung in ca. 30 Min. Festpreis ab 99€, absolut vertrauenswürdig." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die B456 von Wetzlar aus südöstlich erreichen unsere Service-Autos den stattlichen Marktflecken im Weiltal entspannt in rund 30 Minuten.",
        mainRoad: "B456 / L3025",
        distanceKm: 28,
        character: "Lebendiger Marktflecken im Taunus mit 12 dörflichen Ortsteilen und reicher Medizin- & Handelsgeschichte",
        populationApprox: "~8.600",
        landmark: "Kirbergturm, Weiltalweg, Möttauer Weiher & Altes Nassauisches Amtshaus",
        buildingTypes: "Kompakte, gepflegte Ortskerne (Kernort) in Fachwerkbauweise, idyllische Einfamilienhaussiedlungen an den Hängen und stattliche Klinikanlagen.",
        parkingInfo: "Auch im belebteren Kernort von Weilmünster oder an steileren Straßenlagen finden wir zügig Parkmöglichkeiten nahe dem Einsatzort.",
        heroVariant: "Ausgesperrt im Weiltal? Wir sind Ihr zuverlässiger Schlüsseldienst für ganz Weilmünster und seine Dörfer.",
        fareInfo: "Die weite Taunus-Anreise nach Weilmünster und zu seinen dutzenden Ortsteilen (bis nach Wolfenhausen) decken wir mit pauschal 25 Euro ab.",

        scenarios: [
            {
                icon: "home",
                title: "Haustür zu im Kernort",
                description: "Ausgesperrt nahe dem Kirbergturm? Eine nur zugefallene Sicherheitstür öffnen unsere Experten im Weiltal ohne Bohren, Schmutz oder bleibende Schäden."
            },
            {
                icon: "shield-alert",
                title: "KFZ-Not am Möttauer Weiher",
                description: "Bei einem sonnigen Fahrradausflug über den Weiltalweg den Autoschlüssel verloren? Wir kommen zum Weiher oder Rastplatz und öffnen Ihr Fahrzeug schadensfrei."
            },
            {
                icon: "briefcase",
                title: "Schlosstausch in Laubuseschbach",
                description: "Ein altes Bauernhausschloss streikt oder der Schlüssel klemmt? Wir bauen defekte Zylinder in Laubuseschbach, Rohnstadt & Co. fachgerecht und zum Festpreis aus."
            }
        ],

        aboutText: `
<p>Inmitten der grünen Hügel des östlichen Hintertaunus, im südlichsten Zipfel der Wetzlarer Region (Landkreis Limburg-Weilburg), erstreckt sich der weite Marktflecken <strong>Weilmünster</strong>. Über 8.600 Einwohner verteilen sich neben dem quirligen Kernort auf unglaubliche zwölf weitere Ortsteile, darunter <strong>Laubuseschbach, Wolfenhausen, Möttau, Ernsthausen, Laimbach, Langenbach, Dietenhausen, Aulenhausen, Rohnstadt, Audenschmiede, Essershausen und Lützendorf</strong>. Gepaart mit herrlichen Freizeitzielen wie dem <strong>Weiltalweg</strong>, dem <strong>Möttauer Weiher</strong> oder dem historischen <strong>Kirbergturm</strong> lockt Weilmünster viele Menschen nach draußen. Wo das Leben auf Landidylle trifft, klemmt auch mal ein Schließzylinder oder die Haustür fällt durch Windzug böse zu. Als regional verwurzelter <strong>Schlüsseldienst Weilmünster</strong> sind unsere Ausrüsterwägen sofort für Sie da.</p>

<h3>Flotte Anbindung in alle 13 Ortsteile</h3>
<p>Zwar liegt das Gemeindegebiet am Rande unseres eigentlichen Lahn-Dill-Epizentrums, doch durch die flüssig befahrbaren Bundesstraßen (B456) können wir Weilmünster effektiv in <strong>nahezu 30 Minuten</strong> abdecken. Und das Besondere: Wir bedienen nicht nur den großen Kernort rund um das Alte Nassauische Amtshaus. Wenn Sie am äußeren Rand in Wolfenhausen, Rohnstadt oder Laubuseschbach verzweifeln, kommen wir mit exakt gleicher Priorisierung und exakt gleicher Dauer zu Ihnen.</p>

<h3>Wir erhalten die Bausubstanz im Taunus</h3>
<p>Weilmünsters architektonische Vielfalt reicht von historischen Gemäuern und urigen Bauernhäusern bis zu massiv gesicherten KFW-Häusern an den Rändern des Weiltals. Bevor wir zur Bohrmaschine greifen, inspizieren unsere professionellen Handwerker jede Tür präzise. Ist sie schlichtweg zugefallen (unverriegelt), nutzen wir schonendes Spezialzubehör, um Fallbleche zurückzuschieben. Dieser Vorgang gewährt uns in beinahe <strong>99 von 100 Fällen eine völlig schadenfreie, saubere Öffnung</strong>. Rahmen, Türblatt und teurer Zylinder bleiben makellos erhalten.</p>

<h3>Ein Wort zur Preisgestaltung</td>
<p>Handwerk in der Region muss für alle verlässlich bezahlbar sein. Deshalb verzichten wir auf undurchsichtige Anfahrtspauschalen nach Kilometern. Die gesamte Gemarkung Weilmünster, vom Kernort bis ins entlegenste Audenschmiede, wird von uns mit einer pauschalen <strong>25 Euro Anfahrtsgebühr</strong> abgedeckt. Die Türöffnung selbst verbleibt an Werktagen bei dem ehrlichen <strong>99 Euro Festpreis-Garant</strong>. Sie erleben keine horrende Endrechnung, sondern faire, nachvollziehbare Zahlen.</p>
`,

        localTestimonials: [
            {
                name: "Bernd S.",
                quote: "Ich war beim Äppelwoi-Holen in Laubuseschbach, komme heim und der Wind hat meine schwere Holztür zugeschmissen. Der Schlüsseldienst aus Wetzlar kam fix bis in den Taunus, hat die Tür mit so einem gleitenden Blechspatel in Sekunden geöffnet. Absolut fair.",
                rating: 5
            },
            {
                name: "Monika H.",
                quote: "Wir wohnen in Möttau und mein Sohn hat den Wagen abgeschlossen, während der Schlüssel drin lag. Zum Glück haben wir diesen Notdienst gewählt, das Auto (neuer BMW) war in 3 Minuten völlig ohne Kratzer offen. Riesen Lob!",
                rating: 5
            },
            {
                name: "Daniela F.",
                quote: "In Weilmünster Kernort ist uns das Schloss am Wochenende kaputt gegangen, der Schlüssel brach zur Hälfte ab. Der Techniker nahm sich Zeit, bohrte geduldig alles raus und baute ein top Ersatzteil ein. Hat am Ende genau die Summe berechnet, die der Herr am Telefon versprochen hatte.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Notöffnungen für den Kernort Weilmünster und alle 12 Nachbardörfer im Weiltal. Fachgerechte Türöffnungen und Schlosstausch zum regionalen und völlig transparenten Festpreis.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Ich wohne im entlegenen Wolfenhausen, kommen Sie auch hierher zum selben Preis?",
                answer: "Definitiv! Wir schließen Keinen aus. Ob Kernort Weilmünster, Ernsthausen oder eben Wolfenhausen – unser pauschaler 25-Euro-Anfahrts-Tarif bleibt für jeden Flecken der Gemeinde felsenfest bestehen."
            },
            {
                question: "Wie genau läuft eine schadenfreie Autoöffnung am Möttauer Weiher ab?",
                answer: "Wir nutzen bei Fahrzeugen sanfte Luftkissen, um den Türspalt minimal zu weiten. Mit biegsamen Spezialstangen betätigen wir dann die innere Entriegelung. Es entstehen weder Kratzer im Lack noch Schäden an Dichtungen."
            },
            {
                question: "Was kostet die Hilfe, wenn ich an einem Feiertag in Rohnstadt anrufe?",
                answer: "Wir sind an rund 365 Tagen erreichbar. Die Anfahrt verbleibt immer bei 25 Euro. Lediglich der Öffnungs-Grundpreis steigt feiertagsgemäß auf 179 Euro (vgl. IHK-Sätze). Auch das sichern wir Ihnen bereits am Telefon zu."
            }
        ],
        neighbors: ["schluesseldienst-waldsolms", "schluesseldienst-braunfels", "schluesseldienst-schoeffengrund"]
    },
    {
        id: "herborn-seelbach",
        slug: "schluesseldienst-seelbach",
        name: "Seelbach",
        plz: "35745",
        coordinates: { latitude: 50.6500, longitude: 8.2950 },
        logistics: { drivingTimeMinutes: "20-25", distanceFromHQ: 20 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 20, travelCostText: "+ 20€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Seelbach (Herborn) — 24/7 Notdienst ab 99€", 
            metaDescription: "Schlüsseldienst für Herborn-Seelbach. Festpreis ab 99€, Anfahrt nur 20€. Zerstörungsfreie Premium-Türöffnung in ca. 20 Minuten. 100% regional." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die A45 oder die B277 durch Herborn erreichen wir den Ortsteil Seelbach im idyllischen Dilltal zügig in rund 20 bis 25 Minuten.",
        mainRoad: "A45 / B277",
        distanceKm: 20,
        character: "Ruhiger, familiärer Wohnort südwestlich des Herborner Kerngebiets am Rande des Westerwalds.",
        populationApprox: "~1.200",
        landmark: "Historische Fachwerkkirche Seelbach & alte Schulgebäude",
        buildingTypes: "Traditionelle Fachwerkhäuser im sehr alten Ortskern, umgeben von modernen, familiären Wohnsiedlungen der letzten Jahrzehnte.",
        parkingInfo: "Sowohl in den etwas engeren Gassen am Kirchplatz als auch in den ruhigen Neubaugebieten parken wir meist direkt beim Kunden.",
        heroVariant: "Ausgesperrt in Herborn-Seelbach? Schnelle und schonende Hilfe direkt aus der Region.",
        fareInfo: "Die Anfahrt in den beliebten Herborner Ortsteil Seelbach berechnen wir äußerst fair mit pauschalen 20 Euro.",

        scenarios: [
            {
                icon: "home",
                title: "Wohnungstür zugezogen",
                description: "Sie wollten nur kurz nach dem Rechten sehen und der Wind hat die Tür am Seelbacher Hang zugeschlagen? Wir öffnen zu 99% spurlos."
            },
            {
                icon: "key",
                title: "Schlüssel steckt von innen",
                description: "In den verwinkelten Fachwerkhäusern am Kernplatz steckt oft ein Schlüssel von innen, während man draußen steht. Wir lösen das Blockadeproblem elegant."
            },
            {
                icon: "briefcase",
                title: "Schloss defekt & rostig",
                description: "Ein altes Gartentor oder die Kellertür lässt sich nicht mehr drehen? Wir bohren defekte Alt-Zylinder in Seelbach schonend aus und ersetzen sie sofort."
            }
        ],

        aboutText: `
<p>Südwestlich der historischen Kernstadt von Herborn erstreckt sich der malerische Ortsteil <strong>Seelbach</strong>. Eingebettet an den Ausläufern des Westerwalds und mit direktem Zugang ins mittlere Dilltal, kombiniert das rund 1.200 Einwohner zählende Dorf dörfliche Ruhe mit der hervorragenden Infrastruktur der großen Nachbarstadt. Rund um die denkmalgeschützte <strong>Evangelische Kirche Seelbach</strong> reihen sich herrlich erhaltene Fachwerkhöfe aneinander, während an den Ortsrändern familienfreundliche Wohngebiete das Bild prägen. Wenn hier – etwa beim schnellen Gang zum Briefkasten – die Haustür ins Schloss fällt, sorgt der <strong>Schlüsseldienst Seelbach</strong> für umgehende, ehrliche Abhilfe.</p>

<h3>Flott vor Ort dank Dilltal-Achse</h3>
<p>Von unserem Wetzlarer Hauptsitz aus nutzen wir die direkte Route über die Bundesstraße 277 oder die A45. Dadurch garantieren wir für Herborn-Seelbach in der Regel eine Eintreffzeit von <strong>lediglich 20 bis 25 Minuten</strong>. Wir sind ein echter regionaler Fachbetrieb und sitzen nicht in irgendeinem Callcenter, das Ihre Notlage an Dritte verkauft. Wenn Sie bei uns anrufen, fährt unser Monteur direkt los.</p>

<h3>Fokus auf den Werterhalt von Türen</h3>
<p>Egal ob historische Eichentür in den eng bebauten Gassen am alten Schulhaus oder hochmoderne Kunststoff-Sicherheitstür in den Neubaustraßen: Wir bohren nicht blindlings drauf los. Liegt ein klassischer Fall von „zugezogen, nicht abgeschlossen" vor, wenden unsere spezialisierten Techniker modernste Zug- und Gleitmethoden an. Über <strong>99 Prozent dieser einfachen Türöffnungen in Seelbach erfolgen vollkommen beschädigungsfrei</strong>. Weder das Türblatt noch der eingebaute Schließzylinder nehmen Schaden.</p>

<h3>Festpreise, auf die Sie sich verlassen können</h3>
<p>Versteckte Kosten suchen Sie bei uns vergeblich. Den Basispreis für eine Standard-Türöffnung am Werktag garantieren wir mit <strong>exakt 99 Euro</strong>. Die Fahrtkosten in den Herborner Ortsteil Seelbach betragen pauschal und fair <strong>20 Euro</strong>. Auch an Wochenenden oder tief in der Nacht kommunizieren wir jeden Cent transparent am Telefon (orientiert an den offiziellen Empfehlungen der IHK), noch bevor wir uns ins Auto setzen.</p>
`,

        localTestimonials: [
            {
                name: "Anja K.",
                quote: "Nach dem Einkaufen in Herborn kam ich nach Seelbach zurück und mein Schlüsselbund war weg. Der Monteur war in gut 20 Minuten hier und hat mir ein neues Schloss eingebaut. Sehr netter Service und vor allem ein echter Festpreis.",
                rating: 5
            },
            {
                name: "Thorsten H.",
                quote: "Tür vom Neubau war zugefallen und das Kochfeld war noch an! Der Disponent hat die Dringlichkeit erkannt. Der Techniker war unfassbar schnell da, ist mit einem Draht rein und die Tür war offen. Kein Kratzer. Tausend Dank!",
                rating: 5
            },
            {
                name: "Familie M.",
                quote: "Haben ein altes Fachwerkhaus im Seelbacher Kern übernommen. Das alte Türschloss hat abends komplett blockiert. Top Leistung, sauberes Ausbohren, fairer Gesamtpreis inklusive der neuen Beschläge.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Türöffnungen in Herborn-Seelbach. Wir arbeiten zu 99% absolut zerstörungsfrei und bieten volle Preistransparenz ab der ersten Minute.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gelten die 20 Euro Anfahrtskosten wirklich für jeden Ort im Herborner Umkreis?",
                answer: "Die Anfahrtspauschale ins Herborner Stadtgebiet liegt bei fairen 20 Euro. Für direkten Support im Dilltal und Ortsteile wie Seelbach ist dieser Preis garantiert."
            },
            {
                question: "Mein Haustürschloss im alten Fachwerkhaus ist extrem alt. Können Sie das tauschen?",
                answer: "Natürlich. Gerade bei historischen Maßen oder alten Metallbeschlägen können wir Sondermaße verbauen oder alte Buntbart-Schlösser durch moderne Profilzylinder-Systeme ersetzen."
            },
            {
                question: "Ich brauche die Quittung aus Seelbach für meinen Vermieter, geht das elektronisch?",
                answer: "Ja. Auf Wunsch stellen wir Ihnen nach der EC-Kartenzahlung direkt am Einsatzort eine detaillierte, ausgewiesene Rechnung inkl. Mehrwertsteuer aus – gerne auch sofort papierlos per E-Mail."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-schoenbach-hoerbach", "schluesseldienst-sinn"]
    },
    {
        id: "herborn-schoenbach-hoerbach",
        slug: "schluesseldienst-schoenbach-hoerbach",
        name: "Schönbach & Hörbach",
        plz: "35745",
        coordinates: { latitude: 50.6600, longitude: 8.2800 },
        logistics: { drivingTimeMinutes: "25", distanceFromHQ: 22 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 20, travelCostText: "+ 20€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Herborn Schönbach & Hörbach — 24/7 Notdienst", 
            metaDescription: "Schlüsseldienst für Schönbach und Hörbach. Festpreis ab 99€. Regionale Fachkräfte, in ca. 25 Min. bei Ihnen vor Ort. 100% transparent und seriös." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Von Herborn aus schrauben wir uns zielstrebig über die Anhöhen hinauf zu den westlichen Lahn-Dill-Ausläufern. Schönbach und Hörbach sind so meist in 25 Minuten erreicht.",
        mainRoad: "B277 / K61",
        distanceKm: 22,
        character: "Zwei naturnahe, höher gelegene und traditionsreiche Herborner Ortsteile mit hohem Erholungswert",
        populationApprox: "~1.500 (kombiniert)",
        landmark: "Historische Evangelische Kirchen Schönbach & Hörbach, unzählige Wanderwege",
        buildingTypes: "Starke Durchmischung aus landwirtschaftlich geprägten Altbauten, Fachwerkkernen und neueren Einfamilienhaus-Reihen.",
        parkingInfo: "Durch die ländliche Charakteristik bestehen exzellente Haltemöglichkeiten für unsere Montagefahrzeuge direkt an den Hof- oder Hauseinfahrten.",
        heroVariant: "Schlüsselnot in Schönbach oder Hörbach? Ihr lokaler Schlüsseldienst für die Höhen über Herborn.",
        fareInfo: "Egal ob mitten in Schönbach oder am Rande von Hörbach: Für die Herborner West-Höhen verlangen wir einheitliche 20 Euro Anfahrt.",

        scenarios: [
            {
                icon: "home",
                title: "Windstoß am Wäldchen",
                description: "Beide Ortsteile liegen exponierter. Wenn der Wind die Haustür zuschlägt, öffnen wir schonend mit feinem Premium-Werkzeug und null Schäden."
            },
            {
                icon: "shield-alert",
                title: "KFZ-Schlüssel beim Gassigehen weg",
                description: "Schönbach und Hörbach sind Wanderparadiese. Verlieren Sie am Feldrand den Autoschlüssel, entsperren wir alle gängigen Wagenmarken vollkommen zerstörungsfrei."
            },
            {
                icon: "briefcase",
                title: "Schlosswechsel im alten Hof",
                description: "Holz verzieht sich, alte Mechanik bricht. Wir entfernen defekte, verrostete Zylinder in landwirtschaftlichen Altbauten und installieren modernste DIN-genormte Sicherheitstechnik."
            }
        ],

        aboutText: `
<p>Etwas abseits des Tals, auf den idyllischen Erhebungen westlich von Herborn, liegen die beiden naturnahen Stadtteile <strong>Schönbach und Hörbach</strong>. Diese ruhigen Wohnorte mit insgesamt gut 1.500 Einwohnern sind vor allem für ihre prächtigen, denkmalgeschützten Dorf-Kirchen und die herrliche Fachwerkarchitektur entlang der gewundenen Straßen bekannt. Das Leben hier spielt sich in der Ruhe der Natur ab, weit weg vom Verkehr der Bundestraße – doch genau diese Abgeschiedenheit kann bei einer zugefallenen Tür zum Ärgernis werden. Im Ernstfall ist unser <strong>Schlüsseldienst Schönbach & Hörbach</strong> allerdings binnen kurzer Zeit zur Stelle.</p>

<h3>Feste Anbindung von Wetzlar in den Taunus-Ausläufer</h3>
<p>Wenn die Tür klemmt oder der Schlüssel von innen steckt, zählt jede Minute. Wir fahren Wetzlarer Standorte direkt über die A45 an und passieren Herborn, um auf direkter Route hinauf nach Schönbach und das südlich angrenzende Hörbach zu gelangen. Diese zuverlässige Streckenführung bedeutet für Sie: Maximal <strong>25 Minuten Wartezeit</strong>. Kein Warten auf den halben Tag, kein Frust im Regen.</p>

<h3>Wir bewahren historische Werte</h3>
<p>Die Haustüren vieler Fachwerkhäuser in Schönbach und Hörbach sind liebevoll restaurierte Unikate aus Holz. Bei einer Öffnung dürfen sie unter keinen Umständen beschädigt werden. Die Anwendung roher Gewalt, wie sie bei unseriösen Firmen oft üblich ist, lehnen wir ab. Solange die Tür bloß zugefallen ist, öffnen wir sie mithilfe flexibler Türfallen-Gleiter und Nadeln in <strong>nahezu 100 % der Fälle völlig ohne jede Restspur</strong>.</p>

<h3>Absolute Preisklarheit für Hanglagen</h3>
<p>Schluss mit dubiosen Rechnungen, die sich nach Anfahrts-Kilometern im Minutentakt berechnen. Selbst in den höher gelegenen Ortsteilen Schönbach und Hörbach berechnen wir unsere feste Anfahrtspauschale für den Herborner Raum: <strong>20 Euro</strong>. Hinzu kommt der Festpreis für die Standardöffnung an Werktagen von <strong>99 Euro</strong>. So bleibt schnelle Hilfe für jeden Haushalt erschwinglich und vertrauensvoll.</p>
`,

        localTestimonials: [
            {
                name: "Sabine W.",
                quote: "Wir kamen abends von der Wanderung zurück nach Hörbach. Auto auf, aber den Hausschlüssel beim Laufen auf dem Feld verloren. Der Dienst war fix da, war total sympathisch und der Preis war super transparent. Besser gehts nicht.",
                rating: 5
            },
            {
                name: "Klaus R.",
                quote: "In Schönbach klemmte seit Wochen die Scheunentür, irgendwann ging gar nichts mehr. Der Schlosser bohrte professionell auf und tauschte den Schließzylinder aus. Tolle Handwerks-Fachkraft.",
                rating: 5
            },
            {
                name: "Marianne L.",
                quote: "Ganz dumm gelaufen: Tür in Schönbach zugefallen und das Essen stand auf dem Herd! Der Monteur sah die Not, war in unter 25 Minuten da und hat die Tür mit Plastikstreifen in 2 Minuten aufgeschoben. Fantastisch!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Notöffnungen in Herborn-Schönbach und Hörbach. Vertrauen Sie auf unseren regionalen Einsatz, garantierte Festpreise und spurenfreie Aufschließtechniken.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gelten die 20 Euro Anfahrtskosten auch ganz oben am Berg in Hörbach?",
                answer: "Ja, ob Sie im Tal oder an der höchsten Erhebung von Schönbach oder Hörbach wohnen: Wir verlangen für Herborn und all seine Ortsteile keine Höhenzuschläge, sondern glasklare 20 Euro."
            },
            {
                question: "Wenn mein Zylinder alt und defekt ist – haben Sie neue dabei?",
                answer: "Selbstverständlich. Unsere Fahrzeuge sind als kleine Werkstätten ausgestattet. Wir führen verschiedenste Qualitätszylinder (z.B. ABUS oder BKS) unterschiedlichster Längen für Sie mit."
            },
            {
                question: "Darf ich direkt vor der Tür in Schönbach per Karte bezahlen?",
                answer: "Ja. Jeder Techniker bringt zur bargeldlosen Zahlung ein mobiles EC-Terminal mit. Alternativ können Sie natürlich in den Ortsteilen auch unkompliziert bar bezahlen."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-seelbach", "schluesseldienst-merkenbach"]
    },
    {
        id: "herborn-merkenbach",
        slug: "schluesseldienst-merkenbach",
        name: "Merkenbach",
        plz: "35745",
        coordinates: { latitude: 50.6700, longitude: 8.3050 },
        logistics: { drivingTimeMinutes: "20", distanceFromHQ: 18 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 20, travelCostText: "+ 20€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Merkenbach (Herborn) — 24/7 Türöffnung ab 99€", 
            metaDescription: "Schlüsseldienst Merkenbach bei Herborn. Schonende 24/7 Türöffnung in 20 Minuten. Festpreis ab 99€ + faire 20€ Anfahrt. 100% regional und seriös." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Durch die direkte Nähe zur Autobahn sowie zur B277 ist der Herborner Stadtteil Merkenbach für uns in Rekordzeit von ca. 20 Minuten erreichbar.",
        mainRoad: "A45 / B277",
        distanceKm: 18,
        character: "Quirliger, verkehrsgünstig gelegener Herborner Stadtteil südlich der Kernstadt",
        populationApprox: "~1.400",
        landmark: "Historische Fachwerkhöfe im Ortskern und neuere Wohnerschließungen im Merkenbacher Hang",
        buildingTypes: "Mix aus gewachsener ländlicher Bebauung, liebevoll saniertem Fachwerk und Mehrfamilienhäusern an den Hauptachsen.",
        parkingInfo: "Unmittelbar in Merkenbach finden sich nahezu überall gute Haltemöglichkeiten für unsere kompakten Einsatzfahrzeuge direkt am Haus.",
        heroVariant: "Schlüssel steckt in Merkenbach von innen? Wir lösen das Problem schnell und 100% zerstörungsfrei.",
        fareInfo: "Die ideale Anbindung über die Ausfahrt Herborn-Süd erlaubt uns für Merkenbach unsere gedeckelte Herborn-Pauschale von nur 20 Euro.",

        scenarios: [
            {
                icon: "home",
                title: "Ein Windzug in Merkenbach",
                description: "Sie bringen den Müll an die Straße und die Tür knallt zu? Wir sind im Handumdrehen in Merkenbach und öffnen Standard- und Panzertüren absolut kratzerfrei."
            },
            {
                icon: "shield-alert",
                title: "Schloss defekt & hängt",
                description: "Ein altes Sicherheitsschloss blockiert den Zugang ins Eigenheim? Wir fräsen die Stifte behutsam an und wechseln das defekte Kastenschloss umgehend aus."
            },
            {
                icon: "briefcase",
                title: "Gewerbeschließanlagen",
                description: "Auch für Ladenlokale oder kleinere Betriebe in Merkenbach leisten wir zügige Hilfe. Wir öffnen defekte Profilzylinder in Büros diskret und auf Rechnung."
            }
        ],

        aboutText: `
<p>Südwestlich der Kernstadt fungiert <strong>Merkenbach</strong> als lebendiges und infrastrukturell hervorragend angebundenes Scharnier der Gemeinde Herborn. Mit rund 1.400 Einwohnern verbindet der Stadtteil das traditionelle, hessische Dorfleben mit der unmittelbaren Nähe zum Wirtschaftsraum Herborn/Dillenburg. Historisches Fachwerk im Zentrum und ausgedehnte, gepflegte Wohnquartiere an den sanften Anstiegen dominieren das Bild. Gerade durch die dichte Wohnbebauung und rege Bewegung passiert es in Merkenbach allzu leicht: Ein unachtsamer Moment, und die Haustür ist ins Schloss gefallen. Mit unserem <strong>Schlüsseldienst Merkenbach</strong> bieten wir den Bewohnern eine schnelle, professionelle Rettungsleine.</p>

<h3>Minimale Wartezeiten dank Top-Anbindung</h3>
<p>Merkenbach ist verkehrstechnisch für uns ein absolutes Heimspiel. Durch unsere Abdeckung via Autobahn A45 oder alternativ die parallele B277 sind unsere Monteure oftmals bereits in rasanten <strong>20 Minuten</strong> an Ihrer Hausnummer in Merkenbach. Das bedeutet kurze Wartezeiten im Treppenhaus oder draußen in der Kälte – und eine extrem planbare Abwicklung.</p>

<h3>Wir erhalten Türen und Beschläge</h3>
<p>Niemand möchte wegen eines vergessenen Schlüssels gleich einen massiven Holz- oder Lackschaden an seiner teuren Hauseingangstür erleiden. Unser geschultes Personal setzt deshalb voll auf Zerstörungsfreiheit. Wenn die Tür in Merkenbach lediglich „zugezogen", also nicht aktiv verriegelt ist, verwenden wir spezielle Türfallen-Bypass-Werkzeuge aus unserem Koffer (wie biegsame Nadeln und Gleiter). In weit <strong>über 99 Prozent der Einsätze gleitet die Tür damit lautlos und komplett unbeschädigt auf</strong>.</p>

<h3>Ehrlichkeit vor Ort</h3>
<p>Die Branche der Schlüsselnotdienste ist leider durchzogen von falschen Versprechungen. Schlüssel Schmiede Wetzlar steht für das komplette Gegenteil: Werktags öffnen wir einfache Haustüren für einen glasklaren <strong>Festpreis von 99 Euro</strong>. Die Fahrtkosten nach Merkenbach und an die benachbarte B277 pauschalisieren wir ehrlich und offen auf exakt <strong>20 Euro</strong>. Weder berechnen wir Ihnen den Feierabendzuschlag in der Minute vor Ort noch versteckte Bereitstellungspreise.</p>
`,

        localTestimonials: [
            {
                name: "Lisa M.",
                quote: "Kurz zur Nachbarin gewollt, Haustür flog zu. Der sehr höfliche Monteur war innerhalb von 20 Minuten in Merkenbach und hatte die Tür buchstäblich in Sekunden schadensfrei auf.",
                rating: 5
            },
            {
                name: "Hannes D.",
                quote: "Das Schloss an unserer Gartentür war völlig verklemmt. Der Techniker hat es mit einer feinen Maschine ausgebohrt, hat mir sofort einen guten Ersatzzylinder von Abus angeboten und perfekt eingebaut. Preis war wie vorher besprochen.",
                rating: 5
            },
            {
                name: "Familie S.",
                quote: "Wir brauchten sonntags ganz akut Hilfe, weil der Wohnungsschlüssel abgebrochen war. Es wurde uns am Telefon direkt genau gesagt, was der Sonntagstarif ist. Keine bösen Überraschungen, rasche Hilfe. Top Service für Merkenbach.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Einsätze in Herborn-Merkenbach: Wir entsperren Haustüren und Schlösser im Eiltempo, zu 99% spurenlos und mit echter Preisgarantie.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Wenn mein Schlosswechsel ansteht: Welches Material verwenden Sie?",
                answer: "Wir haben stets gängige DIN-zertifizierte Profilzylinder von renommierten Markenherstellern (wie ABUS, BKS oder CES) in Merkenbach griffbereit im Einsatzwagen dabei."
            },
            {
                question: "Gelten die Festpreise auch in den angrenzenden Feldrandlagen von Merkenbach?",
                answer: "Absolut. Unser Herborner Kreisgebiet wird komplett durch eine pauschale Anfahrt von 20 Euro abgedeckt. Die exakte Lage Ihres Hauses innerhalb von Merkenbach spielt für den Preis keine Rolle."
            },
            {
                question: "Bekomme ich direkt nach der Öffnung eine ordentliche Rechnung?",
                answer: "Ja, Sie können direkt bei uns vor der Tür Bar oder mit EC/Girocard bezahlen und erhalten auf Wunsch umgehend Ihre papierlose, ordnungsgemäße Rechnung für Steuern oder Vermieter."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-schoenbach-hoerbach", "schluesseldienst-guntersdorf-uckersdorf"]
    },
    {
        id: "herborn-guntersdorf-uckersdorf",
        slug: "schluesseldienst-guntersdorf-uckersdorf",
        name: "Guntersdorf & Uckersdorf",
        plz: "35745",
        coordinates: { latitude: 50.6800, longitude: 8.3200 },
        logistics: { drivingTimeMinutes: "25-30", distanceFromHQ: 23 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 20, travelCostText: "+ 20€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Guntersdorf & Uckersdorf (Herborn) — Ab 99€", 
            metaDescription: "Schlüsseldienst für Guntersdorf und Uckersdorf bei Herborn. Zerstörungsfreie Premium-Öffnung in 25-30 Minuten. Festpreis ab 99€ + 20€ Anfahrt." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Von Herborn oder Dillenburg setzen wir rasch ins Umland über: Für die idyllischen Ortsteile Guntersdorf und Uckersdorf planen wir etwa 25 bis 30 Minuten Fahrtzeit ein.",
        mainRoad: "L3046 / K65",
        distanceKm: 23,
        character: "Dörfliche, naturverbundene Herborner Ortsteile (Vogelpark Herborn in Uckersdorf) in ruhiger Taunusausläufer-Lage",
        populationApprox: "~1.300 (zusammen)",
        landmark: "Heimatmuseum, Evangelische Kirche Uckersdorf & der überregional bekannte Vogelpark Herborn (Uckersdorf)",
        buildingTypes: "Traditionelle Fachwerkhäuser in den Ortskernen, umgeben von weitläufigeren Bauern- und Einfamilienhäusern.",
        parkingInfo: "Durch die ruhige Dorfcharakteristik finden unsere Techniker direkt in Ihrer Hauseinfahrt ausreichend Platz zum Parken.",
        heroVariant: "Schlüsselverlust rund um den Vogelpark? Wir öffnen Haus und Auto in Guntersdorf und Uckersdorf.",
        fareInfo: "Die Anfahrt in diese wunderschönen, etwas abseits gelegenen Herborner Ortsteile bleibt unverändert fair bei einer Pauschale von 20 Euro.",

        scenarios: [
            {
                icon: "home",
                title: "Ein Windzug in Guntersdorf",
                description: "Sie wässern den Vorgarten im ruhigen Guntersdorf und die Haustür fällt zu? In 99% unserer Einsätze entsperren wir die Anlage sofort und absolut spurlos."
            },
            {
                icon: "shield-alert",
                title: "Wagenschlüssel am Vogelpark",
                description: "Tagestrip im Vogelpark Uckersdorf und der Autoschlüssel fehlt? Wir eilen nach Uckersdorf und öffnen alle modernen PKW-Typen völlig ohne Kratzer."
            },
            {
                icon: "briefcase",
                title: "Verklemmte Scheunentore",
                description: "Ein altes Vorhängeschloss oder der Zylinder eines landwirtschaftlichen Nebengebäudes streikt? Wir bohren gezielt aus und bauen sofort Ersatz ein."
            }
        ],

        aboutText: `
<p>Im grünen Gürtel der mittelhessischen Natur gelegen, bereichern die charmanten Ortsteile <strong>Guntersdorf und Uckersdorf</strong> das Stadtgebiet von Herborn. Gemeinsam zählen die Dörfer knapp 1.300 Einwohner und bestechen durch urige Fachwerkkirchen sowie weite Feld- und Waldränder. Größter Anziehungspunkt in Uckersdorf ist der überregional, bei Familien enorm beliebte <strong>Vogel- und NaturschutzTierpark Herborn</strong>. Hier – fernab der lauten Bundesstraßen – bedeutet eine im Windzug zugefallene Tür oft eine unangenehme Wartezeit, besonders am Wochenende. Mit Schlüssel Schmiede Wetzlar sind wir für die Menschen aus Guntersdorf und Uckersdorf als verlässlicher <strong>Schlüsseldienst aus der direkten Region</strong> sofort abrufbar.</p>

<h3>Flotte Reaktionszeit auf ländliche Hilferufe</h3>
<p>Dorfidylle darf nicht „Ende der Welt" bedeuten, wenn absolute Nothilfe im Schlosserbereich gefragt ist. Über die Zubringer aus Herborn oder Dillenburg manövrieren wir unsere Einsatzwagen zuverlässig zu Ihnen nach Guntersdorf oder Uckersdorf. Sie können mit einer absolut fairen Ankunftszeit von <strong>25 bis 30 Minuten</strong> rechnen – zu jeder Tageszeit, ob Sie nun nahe dem Vogelpark oder versteckt an einem Bauernhof in Guntersdorf feststecken.</p>

<h3>Absolute Schonung für Ihr Zuhause</h3>
<p>In den hessischen Fachwerkdörfern finden sich oft wunderschöne, individuell gefertigte oder alte massive Holztüren. Es ist Ehrensache, dass wir nicht gleich zur zerstörerischen Fräse greifen. Wenn der Schlüssel bloß von innen im Schloss steckt (oder die Tür unverschlossen ins Profil fiel), greifen wir zu feinen Nadeln und Gleitern. <strong>Solche klassischen Pannen öffnen wir in nahezu 100 % aller Fälle komplett ohne den geringsten Kratzer!</strong></p>

<h3>Festpreis, auch für kleine Ortsteile</h3>
<p>Gute Arbeit, klare Zahlen. Gerade in Randgemeinden fallen Kunden oft auf schwarze Schafe der Schlüsseldienstbranche herein, die absurde Distanzaufschläge verlangen. Bei uns erhalten Sie echte Transparenz aus Hessen: Die einfache Türöffnung an Werktagen wird in Guntersdorf und Uckersdorf zum <strong>99 Euro Festpreis</strong> berechnet. Die Pauschale für die Fahrt und Bereitstellung deckeln wir für das gesamte Herborner Umland offen und ehrlichen Herzens auf <strong>20 Euro</strong>. Keine verdeckten Zusatzgebühren bei Ankunft.</p>
`,

        localTestimonials: [
            {
                name: "Claudia P.",
                quote: "Wir waren oben in Uckersdorf am Tierpark spazieren. Kamen heim und haben gemerkt, dass der Schlüsselbund futsch war. Der Schlüsseldienst hat die Tür schadensfrei mit einem Haken geöffnet. 20 Euro Anfahrt und 99 Euro Öffnung, extrem fair.",
                rating: 5
            },
            {
                name: "Stefan R.",
                quote: "In Guntersdorf ging bei uns das Bad-Schloss abends kaputt – die Tür klemmte massiv. Der gute Herr kam in nicht mal 30 Minuten und bohrte den Zylinder so minimal auf, dass nicht mal Splitter auf dem Boden lagen. Geniale Handwerksleistung.",
                rating: 5
            },
            {
                name: "Eheleute K.",
                quote: "Wir dachten, hier draußen dauert es ewig oder kostet ein Vermögen. Der Monteur war jedoch extrem flott, super freundlich und hatte direkt auch ein hochwertiges Abus-Schloss als Ersatz dabei, weil unseres total verrostet war.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Dringende Notöffnungen für das Herborner Umland (Guntersdorf & Uckersdorf). Wir öffnen Haus- sowie PKW-Türen rasch, zu 99% spurenlos und mit echte Preisgarantie.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gibt es für das entlegenere Guntersdorf nochmal einen Entfernungsaufpreis?",
                answer: "Nein. Wir decken das gesamte Herborner Stadtgebiet, ausdrücklich inklusive Peripherien wie Guntersdorf und Uckersdorf, mit unserer fixen 20-Euro-Anfahrtspauschale ab."
            },
            {
                question: "Wirke das Bypass-Werkzeug auch bei großen Mehrfachverriegelungen?",
                answer: "Ja, solange besagte Tür 'nur' ins Schloss geworfen, aber nicht abgeschlossen wurde, können selbst starke Mehrfachverriegelungen meistens ohne Bohren schonend zurückgeschoben werden."
            },
            {
                question: "Wie ist der Ablauf beim Bezahlen in Uckersdorf?",
                answer: "Ganz entspannt ohne Gang zur Bank: Sie können die zuvor besprochene, transparente Summe einfach beim Monteur am mobilen Gerät per EC-Karte (Pin-Zahlung) entrichten."
            }
        ],
        neighbors: ["schluesseldienst-herborn", "schluesseldienst-merkenbach", "schluesseldienst-breitscheid"]
    },
    {
        id: "dillenburg-dillheim",
        slug: "schluesseldienst-dillheim",
        name: "Dillheim",
        plz: "35630",
        coordinates: { latitude: 50.6050, longitude: 8.3550 },
        logistics: { drivingTimeMinutes: "12-15", distanceFromHQ: 12 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 15, travelCostText: "+ 15€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Dillheim (Ehringshausen) — 24/7 Notdienst ab 99€", 
            metaDescription: "Schlüsseldienst für Ehringshausen-Dillheim. Schnelle Türöffnung in ca. 15 Min. Festpreis ab 99€. Zerstörungsfrei, fair und 100% regional." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Über die Bundesstraße B277 entlang der Dill erreichen unsere Monteure den direkt an Ehringshausen angrenzenden Ortsteil Dillheim in flotten 12 bis 15 Minuten.",
        mainRoad: "B277 / A45",
        distanceKm: 12,
        character: "Dicht mit Ehringshausen verwachsener Ortsteil direkt an der Dill, historisch geprägt und verkehrsgünstig",
        populationApprox: "~1.200",
        landmark: "Malerische Lagen am Dill-Ufer, historische Brücken & Evangelische Kirche",
        buildingTypes: "Traditionelle Einfamilienhäuser an den Hängen und gepflegte Hofanlagen im flacheren Flussgebiet.",
        parkingInfo: "Durch die ruhige Dorfstraßen-Struktur finden sich in Dillheim nahezu immer Parklücken direkt vor der Haustür.",
        heroVariant: "Schlüssel steckt von innen in Dillheim? Wir sind in 15 Minuten aus dem Nachbarort bei Ihnen.",
        fareInfo: "Da Dillheim äußerst verkehrsgünstig an der B277 zu Wetzlar liegt, fällt nur unsere reduzierte Anfahrtspauschale von günstigen 15 Euro an.",

        scenarios: [
            {
                icon: "home",
                title: "Ein Windstoß an der Dill",
                description: "In den Lagen entlang des Flusses pfeift oft der Wind. Ein Sekundenbruchteil, und die Tür ist zu. Wir öffnen sie – sofern nicht abgeschlossen – blitzschnell und völlig ohne Beschädigung."
            },
            {
                icon: "key",
                title: "Schlüssel im Einfamilienhaus abgebrochen",
                description: "Verschleiß nagt an jedem Schloss. Bricht der Schlüssel in der Haustür ab, extrahieren unsere Spezialisten in Dillheim ihn oder tauschen den alten Zylinder gegen ein Premium-Modell."
            },
            {
                icon: "shield-alert",
                title: "Autoschlüssel im Kofferraum",
                description: "Nach einem Spaziergang am Dillheim-Ufer den Wagenschlüssel im Kofferraum versehentlich eingeschlossen? Wir öffnen alle gängigen KFZ-Marken ohne jegliche Kratzer im Lack."
            }
        ],

        aboutText: `
<p>Im mittleren Dilltal gelegen, ist <strong>Dillheim</strong> heute so eng mit der Kerngemeinde Ehringshausen verwachsen, dass die Übergänge ineinander fließen. Mit rund 1.200 Einwohnern bietet dieser alteingesessene Ortsteil seinen Bewohnern den perfekten Mix aus ruhigen Wohnlagen am Fluss und den Erhebungen des Gladenbacher Berglandes, gepaart mit den Vorteilen der nahen Autobahn. Doch auch hier am ländlichen Rand kann der Alltag durch Pannen unterbrochen werden: Wer einmal ohne Schlüssel vor seiner verschlossenen Wohnungstür in Dillheim stand, weiß um den Schrecken. Gut, dass unser <strong>Schlüsseldienst für Dillheim</strong> im Notfall wie gerufen kommt.</p>

<h3>Extreme Schnelligkeit entlang der Dill</h3>
<p>Anders als manch überregionale Vermittler, die Fahrer teilweise aus Gießen oder Siegen schicken, operieren wir regional direkt auf der Achse des Lahn-Dill-Gebiets. Fahren wir von Wetzlar über die Bundesstraße 277 nach Ehringshausen ein, erreichen wir Dillheim in aller Regel in unfassbar schnellen <strong>12 bis 15 Minuten</strong>. Damit ersparen wir Ihnen lange Frustration vor einer regnerischen Kulisse.</p>

<h3>Wir erhalten Schlösser, statt sie zu zerstören</h3>
<p>Es ist unser oberstes Handwerker-Gebot: Wenn Ihre Tür lediglich ins Schloss gefallen ist, rücken wir ihr nicht mit grobem Bohr-Werkzeug auf die Pelle. Unsere erfahrenen Monteure nutzen stattdessen feine Metallschieber und Bypass-Werkzeuge aus Federspezialstahl. Diese Technik führt in weit <strong>über 99 % aller einfachen Einsätze zum sofortigen Erfolg – ganz ohne Schäden</strong>. Sie können anschließend Ihren gewohnten Schlüssel einfach weiterverwenden.</p>

<h3>Faire Preise und absolute Transparenz</h3>
<p>Dillheim fällt aufgrund seiner Nähe zu Wetzlar und Ehringshausen in unsere bevorzugte Tarifzone. Die Anfahrts- und Bereitstellungspauschale liegt hier bei überaus günstigen und gedeckelten <strong>15 Euro</strong>. Das eigentliche Handwerk – also die Standardöffnung der zugefallenen Tür am Werktag – dokumentieren wir ganz transparent für einen <strong>Festpreis von 99 Euro</strong>. Selbst am Wochenende tappen Sie bei uns in keine Kostenfallen, unsere Aufschläge sind seriös und telefonisch im Vorfeld abfragbar.</p>
`,

        localTestimonials: [
            {
                name: "Bernd L.",
                quote: "Ich stand in Dillheim draußen beim Autoausladen, Wind kam, Haustür flog zu. Der Betrieb wirkte direkt am Telefon am seriösesten. Der Techniker war unfassbar schnell da (keine 15 Min) und hat die Tür mit Plastikkarten ohne Kratzer entsperrt.",
                rating: 5
            },
            {
                name: "Simone E.",
                quote: "Bei unserem alten Haus nahe der Dill-Brücke war abends der Türzylinder zersprungen. Nichts ließ sich mehr drehen. Super faire Arbeit: Zylinder aufgebohrt, neues Marken-System rein, Festpreis exakt wie versprochen behalten.",
                rating: 5
            },
            {
                name: "Familie H.",
                quote: "Nach dem Kinderwagenspaziergang gemerkt: Schlüsselbund weg. Wir riefen Notdienste an – dieser hier kam als Einziger fix, transparent und vor allem freundlich aus der nahen Region Wetzlar. Vielen, vielen Dank für den Retter-Einsatz in Dillheim!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Ehrliche Notöffnungen in Dillheim (Ehringshausen). Verlassen Sie sich auf garantierte Festpreise, absolut zerstörungsfreie Öffnungsmethoden und kürzeste Anfahrtszeiten.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Steigen die 15 Euro Anfahrt am Sonntag?",
                answer: "Nein! Die Anfahrtspauschale für Dillheim beläuft sich an 365 Tagen im Jahr ausnahmslos auf 15 Euro. Lediglich der Öffnungspreis variiert feiertags leicht nach IHK-Empfehlung."
            },
            {
                question: "Wie zahlen wir in Dillheim?",
                answer: "Sie können den Festpreis bequem per Girocard, Maestro oder gängigen Kreditkarten am mobilen Gerät des Technikers bezahlen. Alternativ nehmen wir natürlich auch Barzahlungen entgegen."
            },
            {
                question: "Öffnen Sie in Dillheim auch Keller- oder Garagentore?",
                answer: "Grundsätzlich ja! Wir öffnen alle Arten von Profil- und Stiftschlössern. Vom Vorhängeschloss der Gartentür bis zur elektronischen Schließanlage im Eigenheim."
            }
        ],
        neighbors: ["schluesseldienst-ehringshausen", "schluesseldienst-wetzlar", "schluesseldienst-asslar"]
    },
    {
        id: "dillenburg-neukirchen",
        slug: "schluesseldienst-neukirchen",
        name: "Neukirchen",
        plz: "35619",
        coordinates: { latitude: 50.4850, longitude: 8.4350 },
        logistics: { drivingTimeMinutes: "20-25", distanceFromHQ: 18 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 20, travelCostText: "+ 20€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Neukirchen (Braunfels) — 24/7 Notdienst ab 99€", 
            metaDescription: "Schlüsseldienst Neukirchen im Hintertaunus (Braunfels). Fachkundige Türöffnung in ca. 25 Min. 99€ Festpreis, transparente 20€ Anfahrt, zerstörungsfrei." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Durch die reizvolle Taunus-Landschaft südlich von Braunfels steuern wir den kleinen Ortsteil Neukirchen über die L3283 meist in nur 20 bis 25 Minuten an.",
        mainRoad: "L3283 / L3053",
        distanceKm: 18,
        character: "Der kleinste und beschaulichste Braunfelser Ortsteil, ruhig eingebettet an den Hängen des östlichen Hintertaunus.",
        populationApprox: "~580",
        landmark: "Weipertgrundberg, das Solmsbachtal & dichte, naturverbundene Waldränder",
        buildingTypes: "Eine ländliche Mixtur aus traditionell hessischen Bauernhäusern, dörflichem Fachwerk und familiären Wohngebäuden.",
        parkingInfo: "Das ländliche Straßengefüge bietet stets sofortige, sichere Parkmöglichkeiten direkt vor dem Einfahrtstor der Kunden.",
        heroVariant: "Schlüsselnot in Neukirchen (Braunfels)? Unser regionaler Notdienst ist umgehend auf dem Weg.",
        fareInfo: "Die Anfahrt in den südlichen Taunus-Zipfel nach Braunfels-Neukirchen decken wir vollständig mit unserer fairen 20 Euro Pauschale ab.",

        scenarios: [
            {
                icon: "home",
                title: "Haustür zugezogen am Hang",
                description: "Ein Moment der Unaufmerksamkeit, und die Tür rastet ein. Wir nutzen in Neukirchen schonende Fallengleiter, um zu 99% makellos und kratzerfrei öffnen zu können."
            },
            {
                icon: "shield-alert",
                title: "Schlüsselverlust beim Wandern",
                description: "Vom Spaziergang am Weipertgrundberg herabgekommen, bemerken Sie das Fehlen des Schlüssels? Wir eilen hinauf und tauschen den Zylinder zügig am selben Tag aus."
            },
            {
                icon: "briefcase",
                title: "Türverriegelung blockiert",
                description: "Gerade an alten Holztüren neigt die Mechanik nach Jahrzehnten zum Klemmen. Wir bohren defekte Schließzylinder mit minimalinvasiver Präzision auf."
            }
        ],

        aboutText: `
<p>Im tiefsten Süden der Braunfelser Gemarkung, umrahmt von unberührter Waldlandschaft im östlichen Hintertaunus, liegt das beschauliche <strong>Neukirchen</strong>. Als kleinster Ortsteil der Schloss-Stadt beheimatet das Dorf, durchschnitten vom herrlichen Solmsbach, nicht einmal 600 Einwohner. Wer hier in relativer Abgeschiedenheit lebt, genießt die tiefe Verbundenheit zur Natur und eine dörfliche Gemeinschaft. Doch wenn gerade hier an kalten Tagen die Klinke der Haustür abbricht oder der Schlüsselbund auf Nimmerwiedersehen verschwindet, wächst die Sorge: Kommt hier im Taunus zeitnah und zu fairen Preisen Hilfe? Ja! Der <strong>Schlüsseldienst Neukirchen (Braunfels)</strong> ist Ihr zuverlässiger Retter in der Peripherie.</p>

<h3>Flott über Landstraßen erreichbar</h3>
<p>Wir scheuen auch die längeren Wege ins Hinterland nicht. Unsere Wetzlarer Stützpunkte ermöglichen ein rasches Ausrücken. Über Schwalbach und Niederquembach nähern sich unsere Einsatzwagen dem Ortsteil in durchgehend planbaren <strong>20 bis 25 Minuten</strong>. Sie hängen bei uns in keiner bundesweiten Hotline fest, sondern sprechen direkt mit Disponenten, die die Region um Braunfels bestens kennen.</p>

<h3>Materialschonende Präzision im Fokus</h3>
<p>Eine verschlossene Haustür, an der nicht zwingend doppelt abgeriegelt wurde, ist für gut ausgerüstete Fachexperten kein Grund für laute Bohrmaschinen. Unsere kompetenten Monteure setzen in Neukirchen in erster Linie auf Spezialwerkzeuge, die den Schließzylinder umgehen und die Türfalle von außen elegant zurückschieben. So bleibt Ihr Eingangsportal absolut intakt, und Sie können den alten Schlüssel problemlos weiterverwenden. <strong>Über 99 Prozent jener simplen Zugefallen-Öffnungen verlaufen spurenlos.</strong></p>

<h3>Der Land-Tarif ohne böse Überraschungen</h3>
<p>Ein kleiner, abgelegener Ortsteil bei Braunfels zu sein, darf nicht in exorbitanten Fahrtkosten resultieren. Schlüssel Schmiede Wetzlar garantiert Ihnen für die gesamte Südschleife des Lahn-Dill-Kreises echte Festpreise. Wir verlangen für Neukirchen eine deckelnde Anfahrtspauschale von lediglich <strong>20 Euro</strong>. Die Türöffnung an sich wird werktäglich zu einem glasklaren Festbetrag von exakt <strong>99 Euro</strong> abgewickelt. Seriosität, die man spüren und beweisen kann.</p>
`,

        localTestimonials: [
            {
                name: "Claudia T.",
                quote: "Wir dachten in Neukirchen, wir warten ewig auf einen Schlüsseldienst aus der Stadt. Aber der Herr war echt nach knapp 25 Minuten da, hat unsere zugeknallte Tür ohne Werkzeugschäden geöffnet und sich exakt an den 99€ + Anfahrt Preis gehalten.",
                rating: 5
            },
            {
                name: "Markus F.",
                quote: "Unser Schließzylinder in einem 30 Jahre alten Schloss hat sich völlig verhakt. Es wurde professionell, äußerst leise und sauber gearbeitet. Wir haben jetzt ein super ABUS-Sicherheitsschloss und sind hochzufrieden mit dem Service.",
                rating: 5
            },
            {
                name: "Rentnerehepaar W.",
                quote: "Sonntagmittag den Schlüssel innen stecken lassen. Es ging gar nichts. Die Leitstelle war total beruhigend, hat uns den Feiertagszuschlag genau erklärt und eine halbe Stunde später war Hilfe da. Wir sind sehr dankbar für die Ehrlichkeit.",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Regionalschiene Braunfels-Neukirchen: Wir knacken defekte Schlösser und entsperren zugefallene Türen - schnell, zu 99% spurenlos und mit vollem Preisschutz.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Gelten die Festpreise auch noch bis ganz ins äußerste Neukirchen?",
                answer: "Ja. Egal ob Sie im Braunfelser Zentrum, in Tiefenbach oder eben ganz südlich in Neukirchen leben: Wir berechnen die transparente 20-Euro-Pauschale auf das gesamte Stadtgebiet."
            },
            {
                question: "Wenn ich mein Türschloss austauschen lassen will, wie sicher sind Ihre verbauten Zylinder?",
                answer: "Wir setzen ausschließlich auf hochwertige Erstausrüster-Qualität in DIN-Norm. Viele unserer Standard-Ersatzmodelle (BKS, ABUS) verfügen bereits über einen elementaren Aufbohrschutz."
            },
            {
                question: "Haben Sie ein Kartenlesegerät dabei?",
                answer: "Selbstverständlich. Unsere Techniker akzeptieren direkt vor Ort EC- und Girokarten, sodass Sie auch tief im ländlichen Neukirchen nicht zwangsweise zur Bank fahren müssen."
            }
        ],
        neighbors: ["schluesseldienst-braunfels", "schluesseldienst-schoeffengrund", "schluesseldienst-waldsolms"]
    },
    {
        id: "dillenburg-tiefenbach",
        slug: "schluesseldienst-tiefenbach",
        name: "Tiefenbach",
        plz: "35619",
        coordinates: { latitude: 50.5350, longitude: 8.3550 },
        logistics: { drivingTimeMinutes: "15-20", distanceFromHQ: 15 },
        pricing: { basePrice: 99, basePriceNight: 149, basePriceWeekend: 179, travelCost: 15, travelCostText: "+ 15€ Anfahrt" },
        seo: { 
            metaTitle: "Schlüsseldienst Tiefenbach (Braunfels) — 24/7 Festpreis ab 99€", 
            metaDescription: "Schlüsseldienst Tiefenbach bei Braunfels. 24h Türöffnung in 15-20 Minuten. Zerstörungsfrei, regional und günstig: Festpreis ab 99€, Anfahrt nur 15€." 
        },

        // === 10X ERWEITERUNG ===
        routeDescription: "Aufgrund der Nähe zu Wetzlar gleiten wir schnell über die L3224 durch Leun oder direkt über Braunfels Kern in das idyllische Tiefenbach.",
        mainRoad: "L3224 / B49",
        distanceKm: 15,
        character: "Warmer, traditionsreicher Weinort und Ortsteil von Braunfels in reizvoller und naturnaher Hang- und Tallage",
        populationApprox: "~1.100",
        landmark: "Historischer Wehrturm (Kirchturm), Der 'Weinberg' & alte Gruben in den Wäldern",
        buildingTypes: "Straßenzüge aus gut saniertem hessischen Fachwerk am Hang sowie weiträumigere, modernere Häuser rund um den Ortskern.",
        parkingInfo: "Trotz teils kurviger Hanglagen verläuft das Parken unserer Einsatzwagen vor Ort nahezu immer reibungslos direkt vor der verschlossenen Tür.",
        heroVariant: "Schlüssel steckt in Tiefenbach von innen? Blitzschneller Vor-Ort-Service direkt aus der Region.",
        fareInfo: "Die sehr gute Erreichbarkeit von Wetzlar aus honorieren wir für Tiefenbach mit unserer niedrigsten Anfahrtspauschale: lediglich 15 Euro.",

        scenarios: [
            {
                icon: "home",
                title: "Haustür zugezogen am Weinberg",
                description: "Ein kalter Windstoß in Hanglage drückt die Haustür ins Schloss. Wir setzen spezielle Fallengleiter an und versprechen: in 99% aller solchen Fälle gibt es absolut keine Schäden!"
            },
            {
                icon: "shield-alert",
                title: "Schloss am Keller blockiert",
                description: "Alte Schlösser in den unteren Stockwerken setzen oft Rost an. Ein verklemmter Schlüssel? Wir bohren hochpräzise aus und wechseln Schließzylinder fachmännisch."
            },
            {
                icon: "briefcase",
                title: "KFZ Öffnung in der Natur",
                description: "Beim Wandern nahe der alten Gruben oder Radfahren am Ortsrand den Autoschlüssel verloren? Wir entsperren Fahrzeugtüren markenübergreifend extrem schonend."
            }
        ],

        aboutText: `
<p>Dort, wo der nördliche Taunusrand und das Lahntal aufeinandertreffen, liegt im Talboden eingeschmiegt der rund 1.100 Einwohner zählende Ortsteil <strong>Tiefenbach</strong>. Bekannt als vermutlich wärmster Ort im gesamten Lahn-Dill-Kreis – was seit einigen Jahren sogar wieder traditionellen Weinanbau am örtlichen "Weinberg" ermöglicht – fasziniert der zu Braunfels gehörende Stadtteil zudem durch den mächtigen historischen Wehrturm, der heute als Kirchturm dient. Diese malerische Mischung aus Geschichte und idyllischem Wohnen macht Tiefenbach überaus lebenswert. Wenn aber ausgerechnet hier, etwas nordwestlich von Braunfels, die Haustür knallt und der Schlüssel in der Wohnung verbleibt, bewahrt unser <strong>Schlüsseldienst Tiefenbach</strong> seine Bewohner vor Stress und Wucherpreisen.</p>

<h3>Extreme Nähe, starke Response-Zeiten</h3>
<p>Da wir eng im Großraum Wetzlar verzweigt sind, liegt Tiefenbach förmlich vor unserer Haustür. Wir erreichen den charmanten Ort über die Bundesstraße 49 und das Leuner Tal blitzschnell. In der Regel steht unser top-motivierter Techniker bereits <strong>15 bis 20 Minuten nach Ihrem Anruf</strong> an Ihrer Hauseingangstür, um Ihnen die verlorene Sicherheit zurückzugeben.</p>

<h3>Zerstörungsfrei: Das Maß aller Dinge</h3>
<p>Ein altes Fachwerkhaus am Hang von Tiefenbach verlangt Behutsamkeit. Die gute Nachricht: Eine nur zugefallene, unverschlossene Tür rechtfertigt bei uns niemals den Einsatz der Bohrmaschine! Wir greifen prinzipiell in unseren Koffer voller Spezialwerkzeuge für beschädigungsfreie Aufsperrtechniken (Federstahlgleiter, Lockpicks). Damit überwinden wir den Schnapper der Tür <strong>in beinahe allen Fällen zu vollkommen makellosen 100 %!</strong> Tür und Zylinder bleiben voll intakt.</p>

<h3>Wir stehen für 100 % Kostentransparenz</h3>
<p>Als lokaler Notdienst der Stadtgrenzen verabscheuen wir überzogene Distanzpauschalen. Wir veranschlagen für das nahe gelegene Tiefenbach unsere rabattierte Vorort-Anfahrtspauschale von <strong>gerade einmal 15 Euro</strong>. Auch die Arbeitsleistung selbst ist in Stein gemeißelt: Mo. - Fr. wird eine normale Türöffnung für <strong>99 Euro Festpreis</strong> berechnet. Die Rechnung bleibt also übersichtlich, transparent und absolut nachvollziehbar – exakt so, wie wir es am Hörer kommunizieren.</p>
`,

        localTestimonials: [
            {
                name: "Heinz K.",
                quote: "Kurz auf dem Hof gewesen, die schwere Eichentür am alten Bauernhaus war zu. Der Herr aus Wetzlar war schnell hier, schob ein Metallstück durch den Spalt und auf war das Ding. Kein Kratzer im Holz. Ganz starke Nummer, fairer Preis.",
                rating: 5
            },
            {
                name: "Sabrina D.",
                quote: "Schreck am Abend: Hausschlüssel im Urlaubsort liegen gelassen. Der Monteur war mitten in der Nacht nach Tiefenbach unterwegs, bohrte leise auf und erklärte mir die Rechnung für den neuen Zylinder. Super Vertrauensbasis.",
                rating: 5
            },
            {
                name: "Felix B.",
                quote: "Autoschlüssel eingeschlossen am Wanderparkplatz oberhalb von Tiefenbach. Schlüssel Schmiede kam angerauscht, öffnete meinen Passat in 2 Minuten auf eine Art, die ich nie für möglich gehalten hätte, komplett ohne Lackschaden. Danke!",
                rating: 5
            }
        ],

        content: {
            heroIntro: "Professioneller und ortsnaher Notdienst für Braunfels-Tiefenbach. Wir entsperren Haustüren und Schlösser sicher, zu 99% makellos und mit verlässlicher Preisgarantie.",
            mainText: "",
            serviceZerstörungsfrei: "",
            serviceBohren: "",
            service247: "",
        },
        faqs: [
            {
                question: "Wie transparent ist Ihr Festpreis-Zusprechen für Tiefenbach?",
                answer: "Er ist ein Versprechen. Die 15 Euro Anfahrt und der Basispreis von 99 Euro wochentags schließen böse Preisaufschläge zu 100% aus. Sämtliche Nachtzuschläge kommunizieren wir ungefragt vorab am Telefon."
            },
            {
                question: "Mein Schließzylinder klemmt. Reißen Sie in Tiefenbach alte Schlösser heraus?",
                answer: "Nein, eine grobe Beschädigung des Türblatts vermeiden wir strikt. Blockierte Zylinder werden von unseren Experten vorsichtig mit der Fräse ausgehöhlt, sodass nur das innere Innenleben (die Stifte) abgetragen wird."
            },
            {
                question: "Werden bei Zahlung in Tiefenbach Karten akzeptiert?",
                answer: "Ja! Unsere Techniker haben immer ein mobiles EC/Girocard-Terminal dabei. Bei Bar- oder Elektronikzahlung stellen wir umgehend eine korrekte, finanzamttaugliche Rechnung bereit."
            }
        ],
        neighbors: ["schluesseldienst-braunfels", "schluesseldienst-leun", "schluesseldienst-wetzlar"]
    }
];
