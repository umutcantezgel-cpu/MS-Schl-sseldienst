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
            metaTitle: "Schlüsseldienst Gießen — Türöffnung Festpreis | 24/7 Notdienst",
            metaDescription: "Schlüsseldienst Gießen für Studenten-WGs, Altstadt & Neubauten. Lokaler Notdienst, zerstörungsfrei, Festpreis ab 99€. In 15-20 Min. in Gießen. 06441-8056544",
        },
        content: {
            heroIntro: "Vor der Studentenbude in Gießen ausgesperrt oder den Wohnungsschlüssel in der Wieseck-Aue verloren? Wir sind als 24-Stunden Notdienst für das gesamte Gießener Stadtgebiet rasend schnell im Einsatz.",
            mainText: `
<p>Mit der Justus-Liebig-Universität, der Technischen Hochschule Mittelhessen (THM) und knapp 90.000 Einwohnern ist die charmante Großstadt Gießen der pulsierende Mittelpunkt unserer Region. Tausende von Studentenzimmern, weitläufige Altbau-Viertel im Bereich Selzerweg und Ludwigsplatz sowie großflächige moderne Neubauten am Stadtrand bilden ein architektonisches Mosaik. Doch egal ob Sie in einem WG-Zimmer, einer Penthouse-Wohnung oder einer Gewerbeimmobilie an der Westanlage stehen: Ist die Tür zu und der Schlüssel weg, brauchen Sie sofort den <strong>Schlüsseldienst Gießen</strong>.</p>

<p>Wir von MS Schlüsseldienst kennen den Stress, kurz vor einer wichtigen Vorlesung, einem Arzttermin oder mitten in der regnerischen Nacht keinen Zugang mehr zu den eigenen vier Wänden zu haben. Das Gute für alle Gießener Bürger: Dank optimaler Verkehrsanbindungen wie der B49 und A480 stehen unsere freundlichen und hochqualifizierten Monteure in aller Regel in 15 bis maximal 20 Minuten bei Ihnen in der Lahnstadt vor der Tür.</p>

<p>Ihre Tür ist zugefallen? Dann sparen Sie sich Sorgen um horrende Reparaturkosten! Unsere Fachleute bringen modernstes Spezialwerkzeug mit und setzen ihr ganzes Fingerspitzengefühl ein, um herkömmlichen Haus- und Wohnungstüren zu 99% beschädigungsfrei beizukommen. Der Originalzylinder bleibt unberührt, der alte Schlüssel passt weiterhin. Wir berechnen für die reine Türöffnung werktags am Tag exakt 99 Euro. Sie zahlen bei uns lediglich einen marginalen Fahrtkostenzuschlag von ca. 15 Euro für Gießen – der Endbetrag steht glasklar, noch bevor wir einen Handgriff ausgeführt haben.</p>

<p>Gerade in der Universitätsstadt haben dubiose Callcenter-Betrugsmaschen traurige Berühmtheit erlangt. Das muss nicht sein! Verlassen Sie sich bei Ihrem Problem auf ein verankertes, regionales und ehrliches Fachunternehmen. Rufen Sie unsere direkte Festnetznummer 06441-8056544 an. Der kompetente Meister Notdienst in Gießen nimmt sich Ihrer direkt, unbürokratisch und kostengünstig an.</p>`,
            serviceZerstörungsfrei: "WG-Zimmer oder Haustür zu? In Gießen öffnen wir Ihre versehentlich ins Schloss gefallene Tür mit feinsten Instrumenten schonend und absolut spurlos.",
            serviceBohren: "Mehrfach verschlossen und den Schlüsselbund am Elefantenklo verloren? Mit höchster Akkuratesse fräsen wir den Kern im Zylinder auf, ohne das massive Türblatt in Gießen zu schädigen.",
            service247: "Wochentag, Wochenende oder nach der Kneipentour um 4 Uhr nachts: Wir haben für Studenten, Senioren und alle Gießener rund um die Uhr geöffnete Leitungen.",
        },
        faqs: [
            {
                question: "Wie schnell sind Sie in der Innenstadt von Gießen?",
                answer: "Die Anreise aus dem nahen Wetzlar über die B49 erlaubt es uns meist in ca. 15 bis 20 Minuten in sämtlichen Stadtteilen Gießens – von Wieseck bis in die engste Altstadtgasse – zu sein."
            },
            {
                question: "Sind die Preise in Gießen (z.B. für WGs) absolut transparent?",
                answer: "100% Ja. Die zugefallene, unverschlossene Standardtür öffnen wir zum Werktag-Tagtarif für planbare 99 Euro. Für die Anfahrt nach Gießen berechnen wir faire 15 Euro obendrauf."
            },
            {
                question: "Können Sie alte Altbau-Türen in Gießen zerstörungsfrei öffnen?",
                answer: "Selbstverständlich. Unsere ausgiebige Schulung bereitet unsere Vor-Ort-Kollegen optimal auf das teils historische Holzwerk und ältere Schloss-Systeme in Gießens Altbauten vor."
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
            metaTitle: "Schlüsseldienst Braunfels — Zerstörungsfreie Öffnung | Ab 99€",
            metaDescription: "Schlüsseldienst Braunfels: Rasanter 24 Std Notdienst. In ca. 10-15 Min. an der Haustür. Festpreise, Spezialisten für Altbau / Fachwerkhäuser. 06441-8056544",
        },
        content: {
            heroIntro: "Schlüsseldienst für die historische Schlossstadt Braunfels gesucht? Unser verlässlicher Meisterbetrieb steht Tag und Nacht zur Verfügung, um Ihnen zum Festpreis die Tür zu öffnen.",
            mainText: `
<p>Wenn es eine Stadt gibt, die pure mittelhessische Romantik versprüht, dann ist es der idyllische Kurort Braunfels mit dem altehrwürdigen Schloss Braunfels im Zentrum. Fachwerkhäuser, verwinkelte Gässchen in der Altstadt, prunkvolle Eingangstüren bei sanierten Immobilien sowie neuere Ortsteile am Waldrand runden das Bild ab. Verlegt man hier den Schlüssel beim Spaziergang am Herrengarten oder fällt die ehrwürdige Holztür ungewollt im Zugwind ins Schloss, bedarf es fachmännischer Hilfe. Genau diese hochspezialisierte Dienstleistung bietet Ihnen unser <strong>Schlüsseldienst Braunfels</strong>.</p>

<p>Mit echten Altbauten und oftmals antiquierten, aufwendigeren Schließ- und Beschlagssystemen darf hier kein ungeschultes Personal mit rabiater Technik ans Werk gehen! Wenn rohe Gewalt angewandt wird, drohen an antiken Türen in Braunfels massive und extrem kostspielige Reparaturmaßnahmen. Vermeiden Sie dieses Horrorszenario. Wir verstehen unser Gewerk durch tiefgehende Meisterausbildung (durch Uwe Sarfeld) von Grund auf. Sofern die Eingangstür nur ins Schloss gedrückt und nicht zweifach abgeschlossen wurde, bewerkstelligen unsere geschulten, erfahrenen Mechaniker die Öffnung bei nahezu allen Einsätzen völlig ohne Spuren, Defekte oder Nachfolgekosten.</p>

<p>Als vertrauensvoller, in der Region agierender Schlüsselnotdienst, befahren wir die L3020 über Solms nach Braunfels und in seine ausgedehnten Ortsteile (Tiefenbach, Philippstein) in der Regel bequem in etwa 10 bis 15 Minuten. Sie rufen uns an und schon ist unsere Einsatzkraft im modern ausgestatteten Servicefahrzeug auf dem Weg ins schöne Kurviertel, um Ihnen aus der Misere zu verhelfen.</p>

<p>Kostenklarheit ist unser zweiter Vorname: Ohne Wenn und Aber eröffnen wir werktags Ihre reine Zugefallen-Situation ab günstigen 99 Euro. Aufschläge bezüglich einer sehr kurzen Fahrtstrecke belaufen sich für Braunfels auf lediglich überschaubare 15 Euro. Setzen Sie auf Fachkompetenz, setzen Sie auf uns als Ihren lokalen Dienstleister für ganz Braunfels!</p>`,
            serviceZerstörungsfrei: "Dank Präzisionsziehwerkzeugen wird in Braunfels Ihre Türfüllung, der Zylinder und der Rahmen absolut intakt und sicher vor Folgeschäden bewahrt.",
            serviceBohren: "Bei klemmenden oder verlorenen Schließern nutzen unsere Techniker in Braunfels Spezial-Frästechnik. Der alte Mechanismus lässt sofort nach, ohne Splitter zu verursachen.",
            service247: "Wochenendausflug oder stürmische Nacht im Lahntal? Zögern Sie nicht: Das Team um MS Schlüsseldienst garantiert Einsätze in Braunfels zu jeder Stunde.",
        },
        faqs: [
            {
                question: "Erweist sich die Altstadt in Braunfels als Aufpreisgrund?",
                answer: "Nein, weder enge Gassen noch beschwerliche Zugänge zur Haustür führen bei unserem Festpreisservice in Braunfels zu sonderbaren Wucher-Zuschlägen."
            },
            {
                question: "Wenn Sie das Schloss tauschen müssen – haben Sie Zylinder dabei?",
                answer: "Natürlich! Wir führen in allen Notdienstwagen für Braunfels verschiedene Sicherheitsprofilzylinder in diversen Normgrößen inklusive Ersatzschlüsseln mit."
            },
            {
                question: "Muss bei einer zugefallenen Tür das gesamte Schloss ausgetauscht werden?",
                answer: "In exakt 99% dieser Routinefälle bleibt Ihr Schloss absolut unangetastet, nutzbar und fehlerfrei. Wir öffnen es in Braunfels materialschonend über den Türfalz."
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
            metaTitle: "Schlüsseldienst Ehringshausen | 24/7 Türöffnung ab 99€",
            metaDescription: "Erfahrener Schlüsseldienst in Ehringshausen (Katzenfurt, Kölschhausen). Fixe Preise (ab 99€), 24 Std erreichbar, zerstörungsfrei & fair. In ~15 Min bei Ihnen.",
        },
        content: {
            heroIntro: "Ausgeschlossen in Ehringshausen? Vertrauen Sie den kompetenten und ehrlichen Profis für Türöffnungen an der Dill. Festpreise ohne fiese Tricks.",
            mainText: `
<p>Die Dillgemeinde Ehringshausen ist mit ihren lebendigen rund 9.000 Einwohnern und stark wachsenden Ortsteilen wie Katzenfurt, Daubhausen, Kölschhausen, Dreisbach und Greifenthal ein herrliches Stück Mittelhessen, wo Wohnen und Industrie im Einklang liegen. Die hervorragende Lage an der B277 und der Dillstrecke lässt viele Pendler morgens hastig aufbrechen. Es verwundert niemanden, dass an einem stressigen Werktagmorgen schnell der Schlüssel im Hausflur vergessen ist, während die Haustür fest in den Rahmen drückt. Die rettende Hand in der Region? Das Team des <strong>Schlüsseldienst Ehringshausen</strong>.</p>

<p>Dank unserer zentralen Basis im benachbarten Wetzlar können Sie den Uhrzeiger beobachten: Zumeist treffen unsere Notfallmonteure binnen rasanter 10 bis 15 Minuten in den Ehringshauser Gemeindegrenzen ein. Wenn wir vor Ort sind, analysieren wir kompetent, welchen Schließmechanismus Sie verwenden. Denn die Ehringshauser Haustüren bieten eine riesige Palette – von Standard-Holztüren aus den ländlichen Gegenden um Daubhausen bis zur High-End Sicherheitstüre an den Neubauzeilen der Kernstadt.</p>

<p>Was für uns zählt, ist die absolute Bewahrung Ihrer materiellen Werte. So versprechen wir eine Zerstörungsfrei-Rate von über 99 % für alle lediglich zugefallenen und nicht extra verschlossenen Haustüren und Wohnungseingänge. Unser Spezialwerkzeug hinterlässt keinerlei Spuren am Türblatt, Rahmen oder dem teuren Zylinderbereich. Und der finanzielle Aspekt? Hier bieten wir Ihnen durch unseren Basispreis ab 99 Euro an allen Tagwerktagen plus einer humanen Anfahrt von nur etwa 15 Euro ein lupenreines Serviceerlebnis.</p>

<p>Die Ängste vieler Bürger vor extremen Wuchern durch Schlüsseldienste in Ehringshausen sind leider in ganz Deutschland durch Subunternehmernetzwerke begründet. Schützen Sie sich davor. Speichern Sie unsere Nummer direkt ein und im Falle der verschlossenen Tür vertrauen Sie einem aufrichtigen, lizenzierten Betrieb, der Sie niemals im Stich lässt.</p>`,
            serviceZerstörungsfrei: "Durch raffinierte Handwerkstechnik befreien wir in Ehringshausen Ihre Türfüllung in wenigen Sekunden vom Schloss ohne auch nur einen winzigen Kratzer an der Abdeckung zu setzen.",
            serviceBohren: "Sitzt das Einsteckschloss bei einem Zylinderbruch fest, so agieren unsere kompetenten Techniker in Ehringshausen über punktgenaues Ausfräsen zu 100% präzise und sicher.",
            service247: "Unsere kompetenten Notdiensttechniker schieben in Ehringshausen auch im strömenden Regen an einem Adventssonntag zuverlässig Bereitschafstdienst für Sie.",
        },
        faqs: [
            {
                question: "Wir wohnen oben in Greifenthal – kostet das extra Anfahrt in Ehringshausen?",
                answer: "Nein, ganz Ehringshausen wird bei unserer Dispositionsrechnung unter derselben günstigen und fix kommunizierten Anfahrtspauschale abgerechnet. Wir kennen keine verdeckten Höhenzuschläge."
            },
            {
                question: "Die Klinke ist von innen fest arretiert, der Schlüssel steckt – was tun in Ehringshausen?",
                answer: "Keine Panik auf der Dill. Das ist ein absoluter Standardfall für unsere Werkzeuge. Den steckenden Schlüssel manipulieren oder überwinden wir schadenfrei von außen."
            },
            {
                question: "Reparieren Sie in Ehringshausen auch Schäden von vorangegangenen Einbruchsversuchen?",
                answer: "Wir entfernen verbogene, dysfunktionale Schlösser und Schließbleche direkt vor Ort in Ehringshausen und montieren sofort modernste Sicherheitszylinder, sodass Sie wieder beruhigt schlafen können."
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
            metaTitle: "Schlüsseldienst Schöffengrund — Notöffnungen ab 99€",
            metaDescription: "Ihr Helfer im Schöffengrund (Schwalbach, Laufdorf, Quembach, Oberwetz). Zügige Türöffnung ab 99€, Festpreisgarantie, in 12-15 Min. bei Ihnen vor Ort.",
        },
        content: {
            heroIntro: "Mitten im ländlichen Schöffengrund ausgesperrt? Unser Team lässt Sie nicht frieren. Transparente Preise und superschneller Einsatz von Laufdorf bis Oberquembach.",
            mainText: `
<p>Wenn man die Gemeinde Schöffengrund im Lahn-Dill-Kreis betritt, eröffnet sich ein wunderschönes Bild aus Natur, Taunuswäldern und idyllischen Ortschaften wie Schwalbach, Laufdorf, Niederquembach, Oberquembach und Oberwetz. Ländliches Wohnen auf höchstem Niveau, wo Nachbarschaftshilfe oft noch großgeschrieben wird. Doch selbst der hilfsbereiteste Nachbar scheitert an hochmodernen Türzylindern und Sicherheitsschließanlagen, wenn man sich in der Hektik des Alltags schlichtweg aussperrt. Für exakt solche Notfälle positioniert sich der <strong>Schlüsseldienst Schöffengrund</strong> an vorderster Front.</p>

<p>Die teils versteckten und höhergelegenen Ortsteile stellen viele überregionale Notdienste vor Navigationsherausforderungen und resultieren in ewigen Wartezeiten. Nicht bei uns! Durch lokale Präsenz im benachbarten Wetzlar navigieren wir staufrei und finden punktgenau zumeist in etwa 12 bis 15 Minuten den schnellsten Weg direkt an Ihr Problem-Türblatt in Schöffengrund. Wenn Sie im Regen ohne Regenschirm oder im Winter ohne warme Jacke draußen stehen, zählt für uns jede Sekunde an Fahrzeit.</p>

<p>Unsere Monteure – tief verankert in höchsten Handwerksstandards (Ausbildung u. a. durch Uwe Sarfeld) – arbeiten materialschonend. Haben Sie Ihre Tür in Laufdorf verriegelt verloren oder im Eifer nur zugezogen in Schwalbach? In neun von zehn Fällen entriegelt unser Spezialequipment, bestehend aus raffinierten Türfallen-Spiralen, Nadeln und Ziehglocken, exakt jene Tür, und das bei 99 % Unversehrtheit des Mechanismus im Falle eines bloßen Zufallens. So vermeiden wir absichtlich horrende Rechnungen durch Folgedefekte.</p>

<p>Ehrlichkeit formt unsere Festpreispolitik (Basispreis Türöffnung am Werktag: 99 Euro zuzüglich 15 Euro Fahrtroute). Keine Mythen, keine Angst. Sie können uns an allen Schichten, 24/7 über unsere Hotline erreichen und vertrauensvoll den Schlüsseldienst in den Schöffengrund bestellen.</p>`,
            serviceZerstörungsfrei: "Keine rohe Anwendung! Zugefallene Eingangstüren im Raum Schöffengrund öffnen wir mithilfe unserer Profi-Pickutensilien innerhalb von Sekunden spurlos auf.",
            serviceBohren: "Handelt es sich bei Hausbesitzern im Schöffengrund um defekte und mehrfach verschlossene Premium-Schlösser, fräsen wir den Kern punktgenau heraus und verbauen neue Anlagen.",
            service247: "Auch den abgelegensten Ortsteil im Schöffengrund sichern unsere Monteure ab – und das kompromisslos mitten im winterlichen Feiertag, 24/7 rund um die Lebensuhr.",
        },
        faqs: [
            {
                question: "Ist die Anfahrt nach Oberwetz in Schöffengrund deutlich teurer?",
                answer: "Nein, absolut nicht. Für alle Ortsteile im Schöffengrund sichern wir eine komplett einheitliche, klar im Telefonat vermittelte, Anfahrtspauschale zu."
            },
            {
                question: "Ich haben den Schlüssel in Schwalbach beim Joggen verloren und die Tür ist abgeschlossen. Was nun?",
                answer: "In diesem Fall reicht ein reines Zufallen-Werkzeug nicht. Wir müssen den Zylinder sachgerecht in Schöffengrund aufbohren und Ihnen im gleichen Atemzug einen neuen Zylinder montieren."
            },
            {
                question: "Zählen Anfahrtszeiten unter 20 Minuten im Schöffengrund wirklich zur Regel?",
                answer: "Ja, wir sind in der Region stationiert. Anders als dubiose Vermittlungen sind wir effektiv nach 12 bis 15 Minuten an den meisten Türen im Schöffengrund eingetroffen."
            }
        ],
        neighbors: ["schluesseldienst-braunfels", "schluesseldienst-huettenberg", "schluesseldienst-waldsolms"]
    }
];
