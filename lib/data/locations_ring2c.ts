import { companyInfo } from "@/lib/data/company";
import { LocationData } from "./locations";

/**
 * ══════════════════════════════════════════════════════════════
 * Ring 2c und Fehlende Ortsteile: Aßlar, Solms, Lahnau
 * 5-11 km Radius
 * ══════════════════════════════════════════════════════════════
 */
export const ring2cLocations: LocationData[] = [
    // ━━━━ AßLAR und BERMOLL ━━━━
    {
        id: "asslar-bermoll",
        slug: "schluesseldienst-bermoll",
        name: "Bermoll",
        plz: "35614",
        coordinates: { latitude: 50.5750, longitude: 8.4350 },
        logistics: { drivingTimeMinutes: "10", distanceFromHQ: 8 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Bermoll bei Aßlar Notdienst 24/7", metaDescription: "Schlüsseldienst Bermoll (Aßlar): In 10 Min. vor Ort. Festpreis ab 99€. 24/7 Notdienst: 06441-8056279" },
        routeDescription: "Von Wetzlar kommend erreichen wir Bermoll verkehrsgünstig über die L3286 und Aßlar, und fahren über ruhige Landstraßen in etwa 10 Minuten direkt in den Ortskern.",
        mainRoad: "L3286 / Kreisstraßen",
        distanceKm: 8,
        character: "Landschaftlich idyllisch gelegener, kleinster Stadtteil von Aßlar mit dörflichem, familiärem Charakter.",
        populationApprox: "~230",
        landmark: "Naturpark Lahn-Dill-Bergland / Historischer Backes",
        buildingTypes: "Landwirtschaftliche Altbestände, umgebaute Hofreiten und gepflegte, alleinstehende Hausbebauungen.",
        parkingInfo: "Durch die entspannte Parksituation auf den breiten Dorfflächen in Bermoll parken wir stets absolut problemlos vor Ihrem Haus.",
        heroVariant: "Schlüsseldienst für Bermoll. Ihr regionaler Experte direkt aus Wetzlar.",
        fareInfo: "Aufgrund der Nähe berechnen wir für Bermoll lediglich eine minimale Fahrpauschale von 15 Euro und keine versteckten Gebühren.",
        scenarios: [
            { icon: "home", title: "Zugefallene Haustür im Dorf", description: "Nur kurz mit den Nachbarn geredet und die Tür fällt zu? Wir öffnen alte und neue Türen in Bermoll materialschonend." },
            { icon: "shield-alert", title: "Holztor / Hofreite klemmt", description: "Rostige und in die Jahre gekommene Schlösser an Scheunen oder Höfen ersetzen wir professionell." },
            { icon: "briefcase", title: "Zylindertausch auf dem Land", description: "Schlüssel verloren auf einem Spaziergang? Ihr neues BKS-Sicherheitsschloss ist binnen Minuten montiert." }
        ],
        aboutText: `
<p><strong>Bermoll</strong> ist der idyllischste und mit rund 230 Einwohnern kleinste Stadtteil von Aßlar. Die dörfliche Ruhe, eingebettet in die Hügellandschaft westlich von Wetzlar, und die malerische Höhenlage machen Bermoll zu einem echten Rückzugsort. Sollten Sie sich bei einem Spaziergang rund um den Naturpark oder direkt in den dörflichen Gassen aus Ihrem Haus ausgesperrt haben, eilt der <strong>Schlüsseldienst Bermoll</strong> zügig zur Hilfe.</p>

<h3>Regionale Erreichbarkeit</h3>
<p>Dass Bermoll ruhig gelegen ist, bedeutet für uns keinen Zeitverlust. Unsere Einsatzfahrzeuge bewältigen die Route aus dem Wetzlarer Zentrallager über Aßlar oftmals in sehr souveränen <strong>10 Minuten</strong>. Das Warten im Regen oder Schnee hält sich bei uns in absoluten Grenzen.</p>

<h3>Preise fair und klar</h3>
<p>Die überwiegend ländliche Bausubstanz mit Einfamilienhäusern und älteren Hofreiten stellt für unsere Spezialisten keine Hürde dar. Bei Routineöffnungen von unverschlossenen Türen verlangen wir ab 99 Euro Festpreis zuzüglich einer transparenten und marginalen Anfahrtspauschale, die bereits am Telefon punktgenau geklärt wird.</p>`,
        localTestimonials: [
            { name: "Bernd S.", quote: "Tür in Bermoll zu. Ein Anruf und der Mann war in gut zehn Minuten da. Sehr saubere Arbeit ohne Schäden an unserer alten Holztür.", rating: 5 },
            { name: "Jutta M.", quote: "Der Schlüssel brach beim Aufschließen des Gartentores ab. Der Schlosser entfernte das Bruchstück und machte alles wieder funktionstüchtig. Sehr fair im Preis.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Bermoll? Unser Schlüsseldienst ist in ca. 10 Minuten bei Ihnen und zum transparenten Festpreis.",
            mainText: `<p>Wir sind Ihr ehrlicher und greifbarer Notdienst für kleinste Stadtteile. In <strong>Bermoll</strong> öffnen wir zugefallene Gebäude und defekte Schlösser schnell, regional und sicher.</p>`,
            serviceZerstörungsfrei: "In Bermoll rutschen wir mit flexiblen Fallengleitern bei zugezogenen Türen materialschonend bis an den Riegel.",
            serviceBohren: "Verriegelte Schlösser fräsen wir nachvollziehbar und passgenau auf, ohne Kratzer am Rahmen zu hinterlassen.",
            service247: "Unser Bereitschaftsdienst gilt für Bermoll uneingeschränkt an 365 Tagen im Jahr."
        },
        faqs: [
            { question: "Kommen Sie auch in so kleine Orte wie Bermoll?", answer: "Selbstverständlich. Bermoll gehört fest zu unserem Einsatzgebiet und egal wie klein der Ort." },
            { question: "Wie schnell sind Sie in Bermoll?", answer: "Über die Verbindungsstraßen von Aßlar sind wir in ca. 10 Minuten bei Ihnen." },
            { question: "Was kostet der Schlüsseldienst in Bermoll?", answer: "Zugefallene Türen öffnen wir werktags tagsüber ab 99 Euro Festpreis." }
        ],
        neighbors: ["schluesseldienst-asslar", "schluesseldienst-werdorf", "schluesseldienst-berghausen"]
    },

    // ━━━━ SOLMS und BURGSOLMS, OBERBIEL, OBERNDORF ━━━━
    {
        id: "solms-burgsolms",
        slug: "schluesseldienst-burgsolms",
        name: "Burgsolms",
        plz: "35606",
        coordinates: { latitude: 50.5350, longitude: 8.4050 },
        logistics: { drivingTimeMinutes: "9", distanceFromHQ: 7 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Burgsolms 24/7 Türöffnung", metaDescription: "Schlüsseldienst Burgsolms: In 9 Min. vor Ort. Festpreis ab 99€. Notdienst 24/7: 06441-8056279" },
        routeDescription: "Über die B49 bis Abfahrt Solms gleiten wir staufrei und zügig nach Burgsolms. In meist knapp 9 Minuten sind wir aus Wetzlar am Einsatzort.",
        mainRoad: "B49 / L3284",
        distanceKm: 7,
        character: "Belebter und einwohnerstarker Hauptort der Stadt Solms. Ein florierendes Zentrum mit eigener Verwaltung, Geschäften und reicher Historie.",
        populationApprox: "~4.800",
        landmark: "Historisches Rathaus Solms / Lahnufer / ehem. Burganlage",
        buildingTypes: "Prächtige Fachwerkzeilen im Alt-Ortskern, dichte Reihenhaussiedlungen der 80er Jahre sowie expansive Neubauausweisungen am Hang.",
        parkingInfo: "Trotz dichterer Ortskernbebauung in Burgsolms halten unsere Monteure dank Sondererlaubnis für Notdienste absolut nah am Gebäude.",
        heroVariant: "Probleme mit Schloss und Schlüssel in Burgsolms? Lokaler Service aus Wetzlar hilft sofort.",
        fareInfo: "Auf der Strecke nach Burgsolms fordern wir lediglich eine minimale Fahrtkostenbeteiligung von fairen 15 Euro und keine Phantasiepriese.",
        scenarios: [
            { icon: "home", title: "Wohnungstür im Reihenhaus", description: "Zugezogene Türen in den dichten Wohnvierteln Burgsolms öffnen wir per Lockpicking leise und schadenfrei." },
            { icon: "shield-alert", title: "Ladenlokal im Zentrum", description: "Geschäftsbetreiber in Burgsolms kommen nicht in ihr Geschäft? Wir sperren Sicherheitsschlösser punktgenau auf." },
            { icon: "briefcase", title: "Historisches Fachwerk", description: "Defekte Beschläge an teuren Altbautüren retten wir vor der Zerstörung und tauschen Mechaniken nachhaltig aus." }
        ],
        aboutText: `
<p><strong>Burgsolms</strong> stellt mit knapp 5.000 Einwohnern den pulsierenden Hauptort der Stadt Solms dar und beherbergt die zentrale Verwaltungseinheit rund um das historische Rathaus. Der klangvolle Name, der auf die erhabene Herrschaft der Grafen von Solms zurückgeht, spiegelt sich in liebevoll restaurierten Altbau-Zeilen wider, die heute nahtlos an florierende Neubaugebiete anknüpfen. Tritt an diesen vielfältigen Haustüren ein Schlüsselproblem auf, ist der <strong>Schlüsseldienst Burgsolms</strong> rasch gefragt.</p>

<h3>Flotte Anbindung über Wetzlar</h3>
<p>Die ausgebaute und meist frei fließende B49 macht es unserer Flotte leicht: In nur etwa <strong>9 Minuten</strong> cruisen wir von der Kernstadt Wetzlars bis nach Burgsolms. Unsere Techniker sparen am Gas nicht, solange es die Sicherheitstechnik erfordert.</p>

<h3>Transparente Solmser Preise</h3>
<p>Sie befürchten astronomische Fahrtkosten? Nicht mit uns. Für Burgsolms deckeln wir die Einsatz-Zufuhr bei moderaten 15 Euro Aufschlag. Der Basis-Festpreis der handwerklichen Öffnung unverschlossener Fallen bei Tag beläuft sich nachvollziehbar auf 99 Euro. Alle Komponenten der modernen Schließtechnik in Burgsolms und von einfachen Profilzylindern bis zu verknüpften Systemen und bedienen wir souverän und nahezu immer materialschonend.</p>`,
        localTestimonials: [
            { name: "Familie D.", quote: "Der Techniker kam wie besprochen in knapp zehn Minuten nach Burgsolms. Er griff zu Drahtwerkzeug und nach Sekunden waren wir drin. 99 Euro Öffnung, extrem sympathisch.", rating: 5 },
            { name: "Klaus P.", quote: "Nachts aus einem Lokal in Burgsolms gekommen und der Wohnungsschlüssel war weg. Der Monteur bohrte das Schloss kurz an und verbaute sofort ein neues Sicherheitsschloss. Perfekt.", rating: 5 }
        ],
        content: {
            heroIntro: "Schlüssel vergessen in Burgsolms? Unser Monteur ist in ca. 9 Minuten da und professionell und zum Festpreis.",
            mainText: `<p>Der <strong>Schlüsseldienst Burgsolms</strong> hilft Ihnen aus der direkten Nachbarschaft in Wetzlar. Durch kurze Reaktionswege und verbindlichen Preiszusagen lösen wir Notfälle im Solmser Hauptort besonders kundenorientiert.</p>`,
            serviceZerstörungsfrei: "In Burgsolms entsperren wir nur zugefallene Türen über Fallengleiter nahezu immer einwandfrei ohne Neuschluss-Notwendigkeit.",
            serviceBohren: "Sollte ein Schlossdefekt in Burgsolms final vorliegen, arbeiten wir effizient mit Spiralfräsen zum marktgerechten Zylindertausch.",
            service247: "Für ganz Burgsolms gilt unser verlässlicher Wetzlarer 24/7 Not-Bereitschaftsdienst ohne Ausfallzeiten."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Burgsolms?", answer: "Über die B49 sind wir in ca. 9 Minuten in Burgsolms." },
            { question: "Was kostet die Türöffnung in Burgsolms?", answer: "Werktags tagsüber öffnen wir zugefallene Türen ab 99 Euro Festpreis." },
            { question: "Ist Burgsolms im Einsatzgebiet?", answer: "Ja, Burgsolms gehört als Hauptort von Solms fest zu unserem regulären Einsatzgebiet." }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-niederbiel", "schluesseldienst-albshausen"]
    },
    {
        id: "solms-oberbiel",
        slug: "schluesseldienst-oberbiel",
        name: "Oberbiel",
        plz: "35606",
        coordinates: { latitude: 50.5400, longitude: 8.4200 },
        logistics: { drivingTimeMinutes: "10", distanceFromHQ: 8 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Oberbiel Sofortige Türöffnung", metaDescription: "Schlüsseldienst Oberbiel bei Solms: 10 Min. Anfahrt, ab 99€ Festpreis. Notdienst 24/7: 06441-8056279" },
        routeDescription: "Via B49-Brücke und der angrenzenden Wetzlarer Straße sind wir innerhalb von maximal 10 Fahrminuten reibungslos im Zentrum von Oberbiel.",
        mainRoad: "Wetzlarer Straße / B49",
        distanceKm: 8,
        character: "Idyllischer, oberhalb der Lahn gelegener Stadtteil von Solms mit naturnaher Lebensqualität.",
        populationApprox: "~2.500",
        landmark: "Kloster Altenberg (nahegelegen) / Lahnaue",
        buildingTypes: "Typischer Querschnitt aus modernen Einfamilienhäusern und älteren Anwesen mit dörflichem Einschlag.",
        parkingInfo: "Durch die ruhigen Straßenzüge in Oberbiel garantieren wir durchweg unproblematische Haltevorgänge knapp vor der Haustür.",
        heroVariant: "Schlüsseldienst für Oberbiel. Rasante Wetzlar-Anbindung, glasklare Preise.",
        fareInfo: "Die Anfahrt nach Oberbiel ist mit schlanken 15 Euro Weg-Pauschale transparent und fair eingepreist.",
        scenarios: [
            { icon: "home", title: "Zugezogene Einfamilienhaus-Tür", description: "Kurz zur Post oder zu den Nachbarn gegangen? Zugefallene Türen meistern wir in Oberbiel schadenfrei in unter einer Minute." },
            { icon: "shield-alert", title: "Schlüssel steckt beim Abschließen", description: "Verriegelung hakt und bricht ab? Wir durchbohren Notzylinder professionell und säubern das Schloss." },
            { icon: "briefcase", title: "Mehrfamilien-Eingang zu", description: "In den Wohngebieten in Oberbiel öffnen wir auch Sicherheitstüren der Gebäudekomplexe zügig." }
        ],
        aboutText: `
<p><strong>Oberbiel</strong>, verortet an einer wunderschönen Anhöhe direkt oberhalb der Lahn, versinnbildlicht für seine 2.500 Einwohner eine friedfertige Symbiose aus Natur-Nähe und schnellem Anschluss an den urbanen Kern. Fällt bei einem der Spaziergänge an der Lahn die Tür im heimischen Wohngebiet ins Schloss, ist der <strong>Schlüsseldienst Oberbiel</strong> der rettende und absolut ortskundige Partner.</p>

<h3>Flotte Distanz über Wetzlar</h3>
<p>Dank der hervorragenden B49-Andockung rücken wir ohne den oft zermürbenden Stadtverkehr unmittelbar zu Ihnen auf. In den allermeisten Szenarien bestätigen wir eine reine Fahrzeit von <strong>rund 10 Minuten</strong> bis zum Eingang auf dem Solmser Gebiet in Oberbiel.</p>

<h3>Eigene Tarife, verlässliche Kosten</h3>
<p>Die klassische Einfamilienhaus-Architektur verbirgt häufig in die Jahre gekommene Zylinder oder klassische Standard-Schließsysteme. Ungeachtet des Alters öffnen wir routiniert zum Werktags-Festpreis ab 99 Euro zuzüglich moderaten 15 Euro für den schnellen Einsatzwagen. Absolute Seriosität ohne Ausreden in Oberbiel.</p>`,
        localTestimonials: [
            { name: "Tanja F.", quote: "Der Monteur in Oberbiel war äußerst galant und fix. Obwohl ich ein Sicherheitsschloss hatte, öffnete er es über den Briefschlitz zerstörungsfrei. Exzellenter Service.", rating: 5 },
            { name: "Martin K.", quote: "Wir brauchten abends am Wochenende Hilfe. Der Wochenendzuschlag war im Telefonat klar umrissen. Der Techniker arbeitete extrem sauber. Ich kann das Team nur empfehlen.", rating: 5 }
        ],
        content: {
            heroIntro: "Tür zugefallen in Oberbiel? Wir kommen in ca. 10 Minuten und zum garantierten Festpreis.",
            mainText: `<p>Als <strong>Schlüsseldienst Oberbiel</strong> verbürgen wir uns für zügige Einsatzfahrten und materialschonende Türöffnungen in allen Solmser Ortsteilen. Wir behandeln Schlösser an der Lahn als wären es unsere eigenen.</p>`,
            serviceZerstörungsfrei: "Zugezogene Haus- und Wohnungstüren in Oberbiel entsperren wir per Spezialhaken oft absolut spurenlos.",
            serviceBohren: "Verweigerte Schlösser in Oberbiel fräsen wir auf Millimeter genau und verbauen direkt belastbare BKS / ABUS Lösungen.",
            service247: "Oberbiels Anwohner profitieren an 365 Tagen und Feiertage inklusive und von unserer Wetzlarer Notfall-Dispatch-Zentrale."
        },
        faqs: [
            { question: "Wie weit ist Oberbiel von Wetzlar?", answer: "Oberbiel liegt ca. 8 km westlich. Wir sind in rund 10 Minuten vor Ort." },
            { question: "Was kostet die Türöffnung in Oberbiel?", answer: "Werktags tagsüber ab 99 Euro Festpreis und verbindlich und transparent." }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-burgsolms", "schluesseldienst-niederbiel"]
    },
    {
        id: "solms-oberndorf",
        slug: "schluesseldienst-oberndorf",
        name: "Oberndorf",
        plz: "35606",
        coordinates: { latitude: 50.5250, longitude: 8.3950 },
        logistics: { drivingTimeMinutes: "11", distanceFromHQ: 9 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Anfahrtskosten nach Absprache" },
        seo: { metaTitle: "Schlüsseldienst Oberndorf Notdienst 24/7", metaDescription: "Schlüsseldienst Oberndorf bei Solms: In 11 Min. vor Ort. Ab 99€ Festpreis. Notdienst: 06441-8056279" },
        routeDescription: "Von unserem Wetzlarer Standort aus umfahren wir über Braunfels oder Burgsolms den starken Verkehr und erreichen Oberndorf im Solmser Hügelland zumeist in knapp 11 Minuten.",
        mainRoad: "Wetzlarer Straße / Burgsolmser Straße",
        distanceKm: 9,
        character: "Dörflich und landwirtschaftlich strukturierter, friedvoller Ortsteil von Solms abseits der großen Hauptstraßen.",
        populationApprox: "~1.400",
        landmark: "Oberndorfer Hügelland / Alte Dorfschmiede",
        buildingTypes: "Traditionsreiche Bauernhäuser, umgebaute Landgütersowie gemütliche Wohnsiedlungen an den Ortsrändern.",
        parkingInfo: "Durch die großflächigen Grundstücke und ländlichen Straßenverläufe ist die direkte Vorfahrt am Einsatzort immer problemlos.",
        heroVariant: "Ausgesperrt im schönen Oberndorf? Echte regionale Handwerksausführung.",
        fareInfo: "Die ländliche Tour nach Oberndorf versehen wir mit einer geringfügigen Aufwandspauschale von exakt 15 Euro. Ehrlich und stabil.",
        scenarios: [
            { icon: "home", title: "Haustür im Neubaugebiet", description: "Vom Wochenendeinkauf nach Hause und der Nachwuchs verlegt den Schlüssel? Lockpicking-Aufsperrung der Haustür in Sekunden." },
            { icon: "shield-alert", title: "Verklemmtes Hoftor", description: "Bauernhäuser und Höfe in Oberndorf besitzen teils antiquierte Schließzylinder, die wir sanieren und wieder gangbar machen." },
            { icon: "briefcase", title: "Wintergarten Terrassentür", description: "Türgriff der Veranda abgebrochen? Mit speziellen Fallengleitern umgehen wir die Blockade sanft von außen." }
        ],
        aboutText: `
<p><strong>Oberndorf</strong> bietet eine tiefe Verwurzelung in die oberhessischen Naturlandschaften. Als eher landwirtschaftlich orientierter und idyllischer Ortsteil im Süden von Burgsolms zieht es vor allem Familien und Ruhesuchende in die alten Dorfkerne und moderneren Randgebiete. Wer am späten Abend die Hoftür nicht mehr ins Schloss bekommt oder sonntags seinen Haustürschlüssel vergeblich sucht, ist froh, wenn der <strong>Schlüsseldienst Oberndorf</strong> kompetent und zügig zur Hilfe anrückt.</p>

<h3>Staufreie Anfahrt zu jeder Tageszeit</h3>
<p>Die geografische Lage abseits der staugeplagten B49 bietet uns oft klare Wegeverhältnisse. Unsere Servicefahrzeuge manövrieren zielsicher durch das Solmser Lahngebiet und parken im Normalfall in <strong>etwa 11 Minuten</strong> nach Ihrem rettenden Anruf vor Ihrer Haustür in Oberndorf.</p>

<h3>Wir schonen alte Türen und Ihren Geldbeutel</h3>
<p>Egal ob massives Holzportal der Dorfschmiede oder standardisierte Kunststoff-Haustür im Neubau: Die Einsatzteams verfahren hochprofessionell und zu 99 Prozent gewaltfrei bei Routineöffnungen. Für 99 Euro Festpreis tagsüber plus transparent geregelten 15 Euro für den Fuhrpark lösen wir jedes Schlossproblem im ländlichen Oberndorf absolut verlässlich.</p>`,
        localTestimonials: [
            { name: "Heidemarie O.", quote: "Mein Schlüssel für die alte Haustür am Gehöft ist einfach abgebrochen. Der Schlosser aus Wetzlar entfernte das Stück mit einer Miniatur-Pinzette und hat das Schloss geölt. Keine Abzocke, super ehrlicher Fachmann.", rating: 5 },
            { name: "Peter T.", quote: "Abends beim Hunde-Lüften Tür zugefallen. Es war eiskalt in Oberndorf. Der Monteur kam sehr schnell, benutzte ein kleines Blech und gut war. 99€ für die Öffnung ging in Ordnung.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Oberndorf? Unser Schlüsseldienst ist in ca. 11 Minuten bei Ihnen und zuverlässig und zum Festpreis.",
            mainText: `<p>In der besinnlichen Atmosphäre von <strong>Oberndorf</strong> stören unkalkulierbare Wartezeiten massiv. Wir garantieren aus Wetzlar heraus eine unheimlich schnelle Erreichbarkeit und astreine Festpreise, damit Sie rasch wieder zu Hause am Ofen sitzen.</p>`,
            serviceZerstörungsfrei: "In Oberndorf entsperren wir zugeknallte, nicht-gedrehte Wohnungstüren mit absoluter Materialrücksichtnahme schadenfrei.",
            serviceBohren: "Ruinierte Zylinder oder abgebrochene Bartschlüssel fräsen wir filigran auf und werten die Tür durch ein neues Schloss aus dem BKS Sortiment auf.",
            service247: "Oberndorf profitiert uneingeschränkt von unserer verlässlichen 24/7 Nachtbereitschaft."
        },
        faqs: [
            { question: "Wie lange brauchen Sie nach Oberndorf?", answer: "Über die Solmser Verbindungsstraßen sind wir in ca. 11 Minuten in Oberndorf." },
            { question: "Was kostet eine Türöffnung in Oberndorf?", answer: "Zugefallene Türen öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." }
        ],
        neighbors: ["schluesseldienst-solms", "schluesseldienst-burgsolms", "schluesseldienst-bonbaden"]
    },

    // ━━━━ LAHNAU und ATZBACH, DORLAR, WALDGIRMES ━━━━
    {
        id: "lahnau-atzbach",
        slug: "schluesseldienst-atzbach",
        name: "Atzbach",
        plz: "35633",
        coordinates: { latitude: 50.5700, longitude: 8.5550 },
        logistics: { drivingTimeMinutes: "8", distanceFromHQ: 6 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Atzbach (Lahnau) 24/7 Notdienst", metaDescription: "Schlüsseldienst Atzbach bei Lahnau: In 8 Min. da. Festpreis ab 99€. 24/7 Notdienst: 06441-8056279" },
        routeDescription: "Aus Wetzlar kommend nutzen wir die durchgängige B49 (Gießener Richtung) und pendeln flüssig in ca. 8 Minuten punktgenau nach Atzbach ein.",
        mainRoad: "Gießener Straße / L3286",
        distanceKm: 6,
        character: "Lebendiger und extrem verkehrsgünstig verorteter Ortsteil von Lahnau zwischen Gießen und Wetzlar, sehr beliebt bei Pendlern.",
        populationApprox: "~3.100",
        landmark: "Lahnaue / Historischer Bahnhof Atzbach",
        buildingTypes: "Straßenzüge mit klassischen Altbauhäusern im Kern und weitflächige Neubausiedlungen an den Ausläufern.",
        parkingInfo: "Durch die ausladenden Grundstücke und moderaten Anwohnerparkzonen in Atzbach ist ein direkter Stopp vor der Tür die Regel.",
        heroVariant: "Schlüsseldienst Atzbach in Lahnau. Rasant zur Stelle über die B49.",
        fareInfo: "Lahnau grenzt unmittelbar an. Für Atzbach fordern wir nur knappe 15 Euro Bereitstellungspauschale für den PKW.",
        scenarios: [
            { icon: "home", title: "Pendlerwohnung zu", description: "Nach der Arbeit im RMV-Zug am Bahnhof angekommen und bemerkt, dass der Türschlüssel fehlt? Schnelle Lockpicking-Hilfe garantiert." },
            { icon: "shield-alert", title: "Garagentor in Neubau hakt", description: "Verdrehte Mechanik am Kipptor? Wir fräsen die defekten Aufnahmezylinder plan und setzen wetterfeste Neuteile ein." },
            { icon: "briefcase", title: "Haustür-Umrüstung", description: "Einbruchsprävention in Atzbach gefragt? Kompletter Neueinbau inklusive ABUS-Sicherheitsverriegelungen direkt bei Erstbesuch." }
        ],
        aboutText: `
<p>Direkt am Lahnufer an der verkehrsstarken Achse zwischen den großen Zentren Gießen und Wetzlar platziert, ist <strong>Atzbach</strong> das Tor der Gemeinde Lahnau. Mit über 3.000 Einwohnern und starker Pendler-Infrastruktur herrscht hier täglich reges Kommen und Gehen. Vergessene oder verklemmte Türschlüssel sind in diesem ständigen Fluss keine Seltenheit. Wenn die Haustür blockiert, agiert der <strong>Schlüsseldienst Atzbach</strong> dank der optimalen Anbindung blitzschnell und routiniert am Einsatzort.</p>

<h3>Minimale Wartezeiten per Schnellstraße</h3>
<p>Die B49 gleicht von unserem Knotenpunkt aus einer Zielgeraden: Nahezu ampelfrei steuern unsere Handwerker direkt den Abzweig Atzbach an. Eine Durchschnitts-Route benötigt erfahrungsgemäß <strong>nur 8 bis 10 Minuten</strong>. Das spart Nerven, gerade am späten Feierabend oder bei frostigen Außentemperaturen.</p>

<h3>Preisgarantie statt Horrorrechnung</h3>
<p>In Atzbach erheben wir bei simplen zugefallenen Türen am Werktag faire 99 Euro Festpreis. Zur Abdeckung von Sprit und Fahrzeugflotte fließt eine bescheidene 15-Euro-Pauschale ein. Verdeckte Posten oder unseriöse Barzahlungs-Mafien? Nicht bei uns. EC-Zahlung und lupenreine Festpreisangebote sind in unserem Betrieb eine absolute Selbstverständlichkeit.</p>`,
        localTestimonials: [
            { name: "Saskia R.", quote: "Der Schlüssel brach in Atzbach in unserem alten Garagentor ab. Der Wetzlarer Schlüsseldienst kam über die B49 irre schnell angerauscht und konnte das alte Schloss tatsächlich reparieren.", rating: 5 },
            { name: "Marc J.", quote: "Zugezogene Tür. Transparente Vorabinfo zum Endpreis (99 Euro + 15 Fahrt). Exakt dieser Preis war auf dem SumUp Gerät zur Kartenzahlung. Super gelaufen.", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Atzbach? Wir sind in nur 8 Minuten bei Ihnen und professionell, schnell und zum Festpreis.",
            mainText: `<p>In <strong>Atzbach</strong> greifen wir für Sie im Handumdrehen zum Werkzeug. Pendler, ansässige Gewerbe und Familien vertrauen auf unser Wetzlarer Einsatzteam, weil wir rasant und zu echten Festpreisen liefern.</p>`,
            serviceZerstörungsfrei: "Wohnungstüren in Atzbach öffnen unsere Profis durch sanftes Streifen des Sperrriegels komplett ohne materielle Beschädigung.",
            serviceBohren: "Verriegelte oder defekte Alt-Schlösser an Hof- und Garagentoren bohren wir millimeterexzakt zum Austausch auf.",
            service247: "In Lahnau (Atzbach) garantieren wir einen echten, Wetzlarer 365-Tage-Notdienst rund um die Uhr."
        },
        faqs: [
            { question: "Wie schnell ist der Schlüsseldienst in Atzbach?", answer: "Über die B49 Richtung Gießen sind wir in nur 8 Minuten in Atzbach." },
            { question: "Was kostet die Türöffnung in Atzbach?", answer: "Werktags tagsüber ab 99 Euro Festpreis und transparent und verbindlich." },
            { question: "Ist Atzbach gut erreichbar?", answer: "Ja, Atzbach liegt direkt an der B49 und ist mit dem Auto schnell zu erreichen." }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-dorlar", "schluesseldienst-wetzlar-naunheim"]
    },
    {
        id: "lahnau-dorlar",
        slug: "schluesseldienst-dorlar",
        name: "Dorlar",
        plz: "35633",
        coordinates: { latitude: 50.5650, longitude: 8.5700 },
        logistics: { drivingTimeMinutes: "9", distanceFromHQ: 7 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Dorlar (Lahnau) Festpreis ab 99€", metaDescription: "Schlüsseldienst Dorlar bei Lahnau: In 9 Min. vor Ort. Festpreis ab 99€. Notdienst: 06441-8056279" },
        routeDescription: "Via Gießener Straße lenken wir die Einsatzfahrzeuge aus Wetzlar direkt ins Herz von Dorlar. Die Fahrzeit beträgt zumeist sehr stabile 9 Minuten.",
        mainRoad: "Gießener Straße / Wetzlarer Straße",
        distanceKm: 7,
        character: "Aufstrebender und gut angebundener Lahnau-Ortsteil mit hoher Attraktivität für junge Familien.",
        populationApprox: "~1.800",
        landmark: "Lahntal / Lahnau-Schule",
        buildingTypes: "Moderner Querschnitt aus neuen, großzügigen Wohnbaugebieten und solider, familiärer Siedlungsarchitektur.",
        parkingInfo: "Dorlar besticht durch weite Straßenführungen in den Wohngebieten, wodurch wir stets mit dem Service-Wagen am Zielobjekt parken können.",
        heroVariant: "Schlüsseldienst Dorlar in Lahnau. Ihr Nachbar aus Wetzlar hilft sofort.",
        fareInfo: "Lahnau zählt zu unserem Wetzlarer Spezialeinsatzgebiet. Die Fahrtkosten nach Dorlar deckeln wir transparent auf milde 15 Euro.",
        scenarios: [
            { icon: "home", title: "Neubau Haustür klemmt", description: "Hochwertige, schwere Mehrfachverriegelungen im Dorlarer Neubau bedienen unsere Spezialisten gewaltfrei mit Profi-Aufsperrtechnik." },
            { icon: "shield-alert", title: "Garagentorantrieb hakt", description: "Integrierte Seitentüren von Garagen öffnen wir nach Schlüsselverlust schnell und bauen gleichschließende Zylinder ein." },
            { icon: "briefcase", title: "Smart-Home Türschloss", description: "Mechatronik versagt in Lahnau? Wir wissen mit modernen Smart-Locks an Haustüren professionell umzugehen." }
        ],
        aboutText: `
<p><strong>Dorlar</strong> verschmilzt als lebhafter Teil von Lahnau den idyllischen ländlichen Charme mit hervorragenden infrastrukturellen Angeboten. Besonders die expansiven und gepflegten Wohnbaugebiete locken junge Familien ins Ruhige zwischen Wetzlar und Gießen. Doch gerade Alltagsroutinen wie der schnelle Weg zur Kita oder das Einkaufen lassen schnell den Haustürschlüssel in Vergessenheit geraten. Der <strong>Schlüsseldienst Dorlar</strong> bildet dann aus dem nahegelegenen Wetzlar die perfekte Rettungskette.</p>

<h3>Wirklich schnelle Lahnau-Pauschalen</h3>
<p>Langes Frieren in der Kälte ist Geschichte: Über die Wetzlarer Zufahrtswege sind unsere Techniker nach der Alarmierung in oft unter <strong>9 Minuten</strong> einsatzbereit in Dorlar. Diese Schnelligkeit erkaufen Sie sich bei uns nicht mit Horrorsummen: Mit knappen 15 Euro Fahrpauschale federn wir sämtliche Anfahrtskosten ehrlich ab.</p>

<h3>Moderne Technik erfordert moderne Öffner</h3>
<p>Gerade in Dorlars neueren Baugebieten dominieren hochsichere Mehrfachverriegelungen und enge Türfalze. Mit klassischen "Scheckkarten-Tricks" richtet man hier nur teuren Schaden an. Wir bedienen uns feinster Türfallengleiter, um Ihre neue Haustür nahezu immer spurlos zu öffnen. Der garantierte Festpreis von 99 Euro für Standardöffnungen bleibt das verlässliche Maß aller Dinge.</p>`,
        localTestimonials: [
            { name: "Fam. E.", quote: "Der Techniker kam in zehn Minuten nach Dorlar, schob ein spezielles Kunststoffteil durch unsere neue Alutür und sie war nach Sekunden offen. Einwandfreier Preis von 99+15 Euro.", rating: 5 },
            { name: "Svenja W.", quote: "Hatte mich mittags aus dem Haus ausgesperrt. Der Monteur war freundlich, schnell und hielt sich exakt an die Preisansage am Telefon.", rating: 5 }
        ],
        content: {
            heroIntro: "Tür zu in Dorlar? Unser Schlüsseldienst ist in ca. 9 Minuten bei Ihnen und kompetent und zum Festpreis.",
            mainText: `<p>Für <strong>Dorlar</strong> (Lahnau) stellt unsere Wetzlarer Einsatzcrew den idealen, lokalen Ansprechpartner dar, wenn Tür oder Tor den Zugang verweigern.</p>`,
            serviceZerstörungsfrei: "In Dorlars modernen Wohngebieten arbeiten wir bei zugezogenen Fronttüren mit absoluter Sorgfalt und spurenfrei.",
            serviceBohren: "Klemmen Mehrfachverriegelungen unwiderruflich, garantieren wir einen akkuraten Zylinderaustausch vor Ort.",
            service247: "Unser Bereitschaftsdienst gilt in ganz Dorlar und Lahnau rund um die Uhr und 365 Tage."
        },
        faqs: [
            { question: "Wie lange braucht der Monteur nach Dorlar?", answer: "Über die Lahnau-Verbindungsstraße sind wir in ca. 9 Minuten in Dorlar." },
            { question: "Was kostet der Schlüsseldienst in Dorlar?", answer: "Zugefallene Türen öffnen wir werktags tagsüber zum Festpreis ab 99 Euro." }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-atzbach", "schluesseldienst-waldgirmes"]
    },
    {
        id: "lahnau-waldgirmes",
        slug: "schluesseldienst-waldgirmes",
        name: "Waldgirmes",
        plz: "35633",
        coordinates: { latitude: 50.5600, longitude: 8.5500 },
        logistics: { drivingTimeMinutes: "9", distanceFromHQ: 7 },
        pricing: { basePrice: companyInfo.financial.startingPriceValue, basePriceNight: 149, basePriceWeekend: 179, travelCost: null, travelCostText: "Geringe Anfahrtskosten" },
        seo: { metaTitle: "Schlüsseldienst Waldgirmes Notdienst 24/7", metaDescription: "Schlüsseldienst Waldgirmes bei Lahnau: In 9 Min. vor Ort. Festpreis ab 99€. Notdienst: 06441-8056279" },
        routeDescription: "Über die direkte L3451 fahren wir schnurstracks von Wetzlar in das historisch bedeutsame Waldgirmes. In knapp 9 Minuten sichern wir unsere Ankunft zu.",
        mainRoad: "L3451 / Gießener Straße",
        distanceKm: 7,
        character: "Überregional historisch bekannter und größter Lahnau-Ortsteil mit perfekter Infrastruktur und hohem Freizeitwert.",
        populationApprox: "~3.300",
        landmark: "Römisches Forum Waldgirmes / Lahnaue",
        buildingTypes: "Historische Kerne gepaart mit breitflächigen, gut situierten Einfamilien-Siedlungen der jüngeren Jahrzehnte.",
        parkingInfo: "Durch die weitreichende Struktur von Waldgirmes finden wir mühelos dicht an Ihrem Eingang einen legalen Parkplatz für den Montage-Van.",
        heroVariant: "Schlüsseldienst Waldgirmes (Lahnau). Historischer Ort, moderne Öffnungstechnik.",
        fareInfo: "Die Strecke nach Waldgirmes wird mit einer absolut überschaubaren Nahbereichs-Pauschale von 15 Euro abgerechnet.",
        scenarios: [
            { icon: "home", title: "Keller- oder Kellertürschloss", description: "Verrostete Hangschlösser oder klemmende Kellertüren in älteren Siedlungsgebäuden tauschen wir unbürokratisch aus." },
            { icon: "shield-alert", title: "Schlüssel abgebrochen", description: "In der Eile den Haus- oder Briefkastenschlüssel abgedreht? Wir extrahieren die Reste fachmännisch zur Zylinder-Rettung." },
            { icon: "briefcase", title: "Schließanlagen Planung", description: "Sie wünschen sich mehr Sicherheitstransparenz in Waldgirmes? Wir verbauen gleichschließende Abus-Systeme bei Ihnen Zuhause." }
        ],
        aboutText: `
<p><strong>Waldgirmes</strong> ist der größte und wohl historisch faszinierendste Ortsteil von Lahnau. Schließlich prägt das überregional hochbedeutende <strong>Römische Forum Waldgirmes</strong>, mit den Resten der ältesten römischen Stadtgründung rechts des Rheins, die Identität des Ortes. Wer hier vor einer blockierten Haustür in einer der modernen Siedlungen order dem alten Ortskern steht, bedarf eines regional greifbaren Partners mit Handwerks-Ehre. Der <strong>Schlüsseldienst Waldgirmes</strong> befreit Sie verlässlich aus jeder Zwangslage.</p>

<h3>Minimale Wartezeiten per Schnellstraße</h3>
<p>Angetrieben durch exzellente Anbindungen an die B49 und L3451, verliert unser Team bei einer eiligen Anfahrt keine wertvollen Minuten. Durchschnittlich treffen wir nach lediglich <strong>9 Minuten</strong> Fahrtzeit in Waldgirmes bei Ihnen am Einsatzort ein und langes Frieren Adé!</p>

<h3>Preisgarantie statt Horrorrechnung</h3>
<p>In Waldgirmes agieren wir absolut transparent: Eine lediglich zugezogene, nicht aber doppelt verschlossene Tür öffnen wir mittels flexibler Haken zu werktäglichen 99 Euro Festpreis. Dazu addieren sich flache 15 Euro für unseren schnellen Fuhrpark. Jegliche Eventualitäten und Nachtzuschläge erklären wir Ihnen unverzüglich am Ersttelefonat. Keine Tricks, kein Bohren um jeden Preis.</p>`,
        localTestimonials: [
            { name: "Norbert H.", quote: "Der Monteur war für Waldgirmes sehr ortskundig und nach 10 Minuten in der Einfahrt. Die Öffnungsdauer betrug 20 Sekunden. Preis von 99 Euro wurde am Lesegerät bezahlt.", rating: 5 },
            { name: "Lisa v.K.", quote: "Nachts nach einer Feier den Schlüssel gesucht. Der Lahnauer Notdienst war sehr höflich, drehte mir kein unnötiges neues Schloss an, sondern öffnete material-schonend. Empfehlung!", rating: 5 }
        ],
        content: {
            heroIntro: "Ausgesperrt in Waldgirmes? Unser Notdienst ist in ca. 9 Minuten bei Ihnen und zum fairen Festpreis.",
            mainText: `<p>In ganz <strong>Waldgirmes</strong> bieten wir professionelle, zerstörungsarme Türöffnungen zu fairen Festpreisen. Wir sichern Wohn- und Gewerbeobjekte in Lahnau rasch und kompetent ab.</p>`,
            serviceZerstörungsfrei: "Bei einfachen Aussperrungen in Waldgirmes garantieren wir in 9 von 10 Fällen eine komplett schadenfreie Fallengleiter-Öffnung.",
            serviceBohren: "Müssen in Waldgirmes Schlösser zerstört werden, greifen wir stets auf Qualitätszylinder der Norm DIN EN 1303 zur direkten Wiederherstellung der Sicherheit zurück.",
            service247: "Unsere Bereitschaftszentrale sichert für Waldgirmes einen dauerhaften Nacht- und Feiertags-Notdienst ab."
        },
        faqs: [
            { question: "Wie schnell kommen Sie nach Waldgirmes?", answer: "Über die L3451 sind wir in ca. 9 Minuten in Waldgirmes vor Ort." },
            { question: "Was kostet eine Türöffnung in Waldgirmes?", answer: "Werktags tagsüber ab 99 Euro Festpreis und zuverlässig und transparent." },
            { question: "Bieten Sie auch Schlüsselkopien in Waldgirmes an?", answer: "Ja, Schlüssel nachmachen können Sie in unserer Schlüssel Schmiede in Wetzlar. Wir beraten Sie gerne." }
        ],
        neighbors: ["schluesseldienst-lahnau", "schluesseldienst-dorlar", "schluesseldienst-atzbach"]
    }
];
