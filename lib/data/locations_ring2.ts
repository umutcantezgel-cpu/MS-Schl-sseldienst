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
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 10,
            travelCostText: "+ 10€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Aßlar — Türöffnung ab 99€ | 24/7 Notdienst",
            metaDescription: "Schlüsseldienst Aßlar: Türöffnung ab 99€. In ca. 5-10 Min. vor Ort in Werdorf, Berghausen & Kernstadt. Faire Preise, 24/7 Notdienst. 06441-8056544",
        },
        content: {
            heroIntro: "Ausgesperrt in Aßlar oder den Ortsteilen? Unser lokaler Schlüsseldienst ist schnell für Sie im Einsatz. Transparente Festpreise und beschädigungsfreie Türöffnungen – 24 Stunden am Tag.",
            mainText: `
<p>Direkt nordwestlich an Wetzlar angrenzend, liegt Aßlar – eine lebendige Stadt im Lahn-Dill-Kreis mit rund 14.000 Einwohnern. Die Mischung aus beliebten Wohngebieten, charmanten Ortsteilen wie Werdorf, Berghausen oder Kölschhausen und Gewerbeansiedlungen macht Aßlar so einzigartig. Wenn Sie hier vor einer verschlossenen Haustür stehen und Ihren Schlüssel verloren haben, brauchen Sie rasche und vor allem seriöse Hilfe. Genau das bietet Ihnen unser <strong>Schlüsseldienst Aßlar</strong>.</p>

<p>Durch unsere unschlagbare geografische Nähe zu Aßlar und die perfekte Anbindung über die B277 garantieren wir Ihnen Einsatzzeiten, von denen andere Notdienste nur träumen können: Oft sind wir schon in 5 bis 10 Minuten bei Ihnen vor Ort. In eiligen Situationen, wenn Essen auf dem Herd steht oder das Wetter umschlägt, ist diese Schnelligkeit von unschätzbarem Wert.</p>

<p>Wir öffnen für Sie nicht nur einfache ins Schloss gefallene Wohnungstüren (die wir werktags zum transparenten Basispreis von 99 Euro zzgl. einer extrem geringen Anfahrtspauschale öffnen), sondern haben uns auch auf komplexe Sicherheitstüren spezialisiert. Ob in neueren Wohnvierteln Aßlars oder bei veralteten Zylindern in Werdorf – unsere Monteure gehen mit absolutem Fingerspitzengefühl und Spezialwerkzeug ans Werk. In über 99 % der Fälle öffnen wir zugefallene Türen vollständig beschädigungsfrei.</p>

<p>Wir distanzieren uns klar von dubiosen Vermittlungszentralen. Rufen Sie uns, den regionalen Ansprechpartner, direkt unter 06441-8056544 an. Sie sprechen persönlich mit unseren Experten, erhalten klare Preisinformationen vorab und können sich entspannt zurücklehnen – wir übernehmen das Problem in kürzester Zeit für ganz Aßlar.</p>`,
            serviceZerstörungsfrei: "Zugefallene Türen in Aßlar öffnen unsere Profis durch gezielte, sanfte Handwerkstechniken in Sekunden – absolut zerstörungsfrei und ohne teure Folgeschäden.",
            serviceBohren: "Sollten Profilzylinder massiv verriegelt oder defekt sein, bohren unsere Monteure in Aßlar punktgenau auf, ohne das Türblatt in Mitleidenschaft zu ziehen.",
            service247: "Im gesamten Stadtgebiet Aßlar bieten wir unseren uneingeschränkten, voll ausgefahrenen 24/7 Schlüsselnotdienst. Tag, Nacht, feiertags.",
        },
        faqs: [
            {
                question: "Wie lange warte ich im Notfall in Aßlar?",
                answer: "Aufgrund der direkten Nachbarschaft zu Wetzlar und der guten B277 Anbindung sind wir in Aßlar meist in ca. 5 bis 10 Minuten vor Ort."
            },
            {
                question: "Fahren Sie auch Aßlarer Ortsteile wie Werdorf oder Berghausen an?",
                answer: "Ja, unser Service-Radius erfasst das gesamte Aßlarer Stadtgebiet inklusive aller Ortsteile wie Werdorf, Berghausen, Bechlingen und Kölschhausen ohne unnötige Verzögerung."
            },
            {
                question: "Sind die Preise für die Türöffnung in Aßlar fair und verlässlich?",
                answer: "Wir arbeiten mit einem strikten und transparent kommunizierten Festpreissystem. Die einfache Öffnung bei zugefallener Tür beginnen bei 99 Euro zzgl. einer symbolischen Anfahrtspauschale."
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
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 10,
            travelCostText: "+ 10€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Solms — Türöffnung 24/7 zum Festpreis ab 99€",
            metaDescription: "Ihr zuverlässiger Schlüsseldienst für Solms, Oberbiel, Niederbiel & Burgsolms. In ca. 8-12 Min. bei Ihnen. Zerstörungsfreie Öffnung, Festpreise. Jetzt anrufen!",
        },
        content: {
            heroIntro: "Suchen Sie einen ehrlichen Schlüsseldienst in Solms? Wir helfen sofort, öffnen schonend und arbeiten zum garantierten Festpreis. Jetzt anrufen und stressfrei wieder ins Haus gelangen.",
            mainText: `
<p>Westlich von Wetzlar liegt die wunderschöne Lahn-Stadt Solms, bestehend aus den liebenswerten Ortsteilen Oberbiel, Niederbiel, Albshausen und Burgsolms. Über 14.000 Einwohner nennen Solms ihr Zuhause, geprägt von historischen Wohnsiedlungen ebenso wie von charmanten Neubauquartieren am Waldrand. Eine vergessene Haustürschlüssel, ein verlorener Bund oder ein blockiertes Türschloss passieren hier wie überall. Damit Ihr Tag nicht ruiniert ist, steht der <strong>Schlüsseldienst Solms</strong> für Sie rund um die Uhr Gewehr bei Fuß.</p>

<p>Über die direkte L3020 und die B49 durchs Lahntal erreichen unsere Monteure Solms und seine Ortsteile unglaublich zügig. Mit einer kalkulierten Anfahrtszeit von oft nur 8 bis 12 Minuten lassen wir Sie nicht lange draußen warten. Wir bringen alles, was unser Berufsstand benötigt, direkt ans Türblatt: Hochpräzises Gerät, jahrelange Erfahrung im Handwerk und absolute Verlässlichkeit. Zugefallene Standardtüren öffnen wir für Sie werktags komplett zerstörungsfrei und mit einer Fixkostenstruktur (99 Euro zzgl. einer sehr geringfügigen Anfahrtspauschale), die Sie bereits am Telefon einholen.</p>

<p>Solmsen ist vielfältig: Von massiven, älteren Holztüren in Burgsolms bis zu komplexen Doppelfalz-Sicherheitstüren im neueren Albshausen bringen wir die passende Technik mit. Wenn der Zylinder getauscht werden muss (etwa bei Einbruchsschäden oder Riegelbruch), montieren wir direkt vor Ort qualitative Schließzylinder großer Hersteller und sichern Sie umfassend ab.</p>

<p>Vertrauen Sie keinem unpersönlichen Callcenter irgendwo in Deutschland. Wir sind Ihr vertrauter Nachbarbetrieb. Kontaktieren Sie uns sofort über die 06441-8056544 – unsere Einsatzkräfte in Solms setzen sich sofort, zuverlässig und professionell für Sie in Bewegung.</p>`,
            serviceZerstörungsfrei: "Eine zugefallene Tür ist für unseren Schlüsseldienst Solms kein Grund zur Zerstörung. Über clevere Zugtechniken entriegeln wir die Tür, ohne das Schloss anzugreifen.",
            serviceBohren: "Ist die Tür in Solms verschlossen und der Schlüssel weg? Wir beherrschen exaktes Aufbohren des Profilzylinders und tauschen veraltete Beschläge routiniert aus.",
            service247: "Für Sie rücken wir in Solms auch nachts um 3 Uhr oder an Feiertagen im Eiltempo aus. Verlassen Sie sich bei unserem Notdienst auf sofortiges Eingreifen.",
        },
        faqs: [
            {
                question: "Kostet die Anfahrt nach Solms extra?",
                answer: "Wir berechnen für das Nachbargebiet Solms (inklusive aller Ortsteile wie Oberbiel und Burgsolms) lediglich eine winzige Anfahrtspauschale von ca. 10€, über die wir Sie vorher klar aufklären."
            },
            {
                question: "Öffnen Sie in Solms-Albshausen auch schwergängige Mehrfachverriegelungen?",
                answer: "Definitiv. Unsere Meister-Ausbildung ermächtigt uns dazu, auch defekte und hochkomplexe Mehrfachverriegelungen zuverlässig zu diagnostizieren und sachgerecht zu öffnen."
            },
            {
                question: "Wie schnell können Sie beispielsweise in Niederbiel eintreffen?",
                answer: "Im Durchschnitt benötigen wir für eine Notöffnungsfahrt in sämtliche Solmser Randbezirke wie Niederbiel lediglich 8 bis 12 Minuten."
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
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 10,
            travelCostText: "+ 10€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Lahnau — In ca. 5-10 Min. vor Ort | Ab 99€",
            metaDescription: "Schlüsseldienst Lahnau (Waldgirmes, Dorlar, Atzbach). Zerstörungsfreie Türöffnung ab 99€. Direkte Hilfe, keine versteckten Kosten, 24/7. Erreichbar unter 06441-8056544",
        },
        content: {
            heroIntro: "Schlüsseldienst für die Gemeinde Lahnau gesucht? Wir öffnen Haustüren in Atzbach, Dorlar und Waldgirmes fachgerecht, blitzschnell und zu absolut kalkulierbaren Festpreisen.",
            mainText: `
<p>Die idyllische Gemeinde Lahnau, zusammen mit ihren charmanten Ortsteilen Waldgirmes (bekannt durch das Römerlager), Dorlar und Atzbach, fungiert als perfektes Bindeglied zwischen Wetzlar und Gießen. Das Gebiet ist äußerst ländlich-suburban geprägt und besticht durch dichte Wohnbesiedlung. Wo viele Menschen wohnen und das städtische Leben pendelt, bleibt auch das Vergessen des Schlüssels nicht aus. In genau jenen Momenten ist unser versierter <strong>Schlüsseldienst Lahnau</strong> Ihr regionaler Retter in der Not.</p>

<p>Mit unserer Anfahrtsdauer von sensationellen 5 bis 10 Minuten nach Lahnau garantieren wir, dass Sie bei Regen, Kälte oder inmitten der Nacht nicht über ein ungeplantes Biwak im Vorgarten nachdenken müssen. Wir öffnen Haustüren an der Lahn genauso sicher und schnell, wie wir abgebrochene Schlüssel in Briefkastenanlagen extrahieren. Unsere Philosophie ist es, mit den Menschen vor Ort ehrlich, transparent und handwerklich spitze zu interagieren. Der absolute Großteil (zu 99 %) der unverschlossenen, nur ins Schloss geworfenen Türen lässt sich durch geschulte Handgriffe absolut schadenfrei öffnen.</p>

<p>Was Lahnau auszeichnet, ist die große Anzahl an Einfamilienhäusern mit teils hochmodernen Schließzylindern und Sicherheitstüren. Da reicht ein bloßes Stück Draht längst nicht mehr aus, um hier ohne Beschädigung erfolgreich zu sein. Wir investieren stets in das modernste Sperrwerkzeug auf dem Markt und können als professionelle Experten die Türöffnung so effizient durchführen, dass Ihnen Kosten für neue Garnituren und teuren Türersatz vollständig erspart bleiben.</p>

<p>Geben Sie unseriösen Tricks keine Chance. Verlassen Sie sich auf Festpreise: Die einfache Öffnung für Lahnau beginnt werktags ab lediglich 99 Euro zzgl. Mini-Anfahrt. Rufen Sie unseren direkt am Ort ansässigen Service jetzt unter der 06441-8056544 und wir steuern Atzbach, Dorlar oder Waldgirmes sofort an.</p>`,
            serviceZerstörungsfrei: "Eine zugefallene, aber nicht komplett abgeriegelte Tür öffnen unsere Techniken in Lahnau mittels passgenauem Aufziehwerkzeug zumeist völlig unversehrt.",
            serviceBohren: "Sitzt an Ihrem Eigenheim in Lahnau ein verklemmter Zylinder fest, ziehen wir diesen auf professionelle Weise heraus und tauschen ihn direkt gegen neue Sicherheitsausstattung aus.",
            service247: "Unabhängig davon, ob es auf einen Sonntag, Feiertag oder mitten in die tiefste regnerische Nacht fällt – Ihr verlässlicher Notdienst steuert Lahnau sofort an.",
        },
        faqs: [
            {
                question: "Gilt in Lahnau ein Festpreis für die Türöffnung?",
                answer: "Absolut. Wenn Ihre Haustür beispielsweise in Waldgirmes oder Dorlar nur zugefallen ist (nicht fest verschlossen), berechnen wir Ihnen werktags (bis 19:59 Uhr) fixe 99 Euro plus die winzige Fahrtpauschale."
            },
            {
                question: "Werden in Lahnau durch das Öffnen weitere Schäden an meinem Schloss angerichtet?",
                answer: "Durch unsere fundierte handwerkliche Erfahrung öffnen wir fast alle nur zugefallenen Türen komplett spurlos und ohne Folgeschäden."
            },
            {
                question: "Bieten Sie Ihre Leistungen im gesamten Gemeindegebiet Lahnau an?",
                answer: "Ja, sowohl Dorlar, Waldgirmes als auch Atzbach fahren wir konsequent, verlässlich und innerhalb weniger Minuten an."
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
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Hüttenberg — Türöffnung ab 99€ | 24/7 Notdienst",
            metaDescription: "Ausgesperrt in Hüttenberg, Rechtenbach oder Volpertshausen? Wir garantieren Türöffnungen ab 99€, transparente Festpreise und ca. 10-15 Min. Anfahrtszeit.",
        },
        content: {
            heroIntro: "Dringende Türöffnung in der Gemeinde Hüttenberg? Wir sind Ihr seriöser Schlüsselnotdienst für Rechtenbach, Hochelheim und Co. Garantiert schnelle Hilfe und 24/7 Erreichbarkeit.",
            mainText: `
<p>Südlich von Wetzlar entfaltet sich die historisch reiche Gemeinde Hüttenberg (berühmt für ihren Original Handkäse mit Musik). Mit ihren weitreichenden Ortsteilen wie Rechtenbach, Hochelheim, Hörnsheim, Volpertshausen, Weidenhausen und Reiskirchen ist Hüttenberg äußerst ländlich-idyllisch, aber dennoch extrem dicht besiedelt. Eigenheime und gewachsene Dorfgemeinschaften prägen das Bild. Sollte in dieser vertrauten Atmosphäre Ihre Haustür ungewollt zuschlagen und Sie ohne Schlüssel aussperren, greift unser verlässlicher <strong>Schlüsseldienst Hüttenberg</strong> blitzschnell ein.</p>

<p>Der Weg über die L3360 in den Raum Hüttenberg ist eine unserer routiniertesten Hausstrecken. Deshalb geben wir Ihnen die garantierte Anfahrtszeit von meist nur 10 bis 15 Minuten. Wir wissen, wie unangenehm es sich anfühlt, bei Kälte oder abendlicher Dunkelheit auf dem Gehweg von Rechtenbach oder vor der zugefallenen Tür in Volpertshausen zu warten. Zögern Sie nicht: Setzen Sie von vornherein auf einen seriösen Fachbetrieb anstatt an falsche Werbeköder von bundesweiten Vermittlern zu geraten.</p>

<p>Anhand modernster Technik, fachlichem Fingerspitzengefühl und stetigen Weiterbildungen im Umgang mit modernen Sicherheitszylindern und Doppelfalz-Türen bewältigen wir die schwierigsten Öffnungsszenarien reibungslos. Fiel Ihre Haustür lediglich ins Schloss, liegt unsere Erfolgsquote einer absolut zerstörungsfreien, defektlosen Öffnung in Hüttenberg bei annähernd 100 %. Ihr Schloss wird weiter so funktionieren, wie es soll.</p>

<p>Kostentransparenz und feste Tarife (im Basispreis für 99 Euro für die zugefallene Standardtür an Werktagen) bilden den Kern unseres Versprechens. Profitieren Sie für Hüttenberg von exzellentem Einsatz einer wahren Meister-Kompetenz und rufen Sie uns sofort zur Problembehandlung im Lahn-Dill-Kreis an.</p>`,
            serviceZerstörungsfrei: "Ohne Beschädigung: Eine nicht verschlossene (nur zugefallene) Tür in Hüttenberg bekommen wir nahezu immer extrem materialschonend, zügig und abriebfrei auf.",
            serviceBohren: "Verlorener Schlüssel? Wir befreien Sie fachlich präzise von festsitzenden Zylindern und verbauen auf Wunsch direkt langlebige BKS/DOM Profizylinder aus unserem Transporter.",
            service247: "Egal ob das Schloss am Feiertag oder Sonntagnacht klemmt – in Hüttenberg stehen wir an den restlichen 365 Tagen im Jahr mit verlässlichem Rat und Tatgewähr bereit.",
        },
        faqs: [
            {
                question: "Sind Sie im Notdienst auch in Ortsteilen wie Reiskirchen oder Weidenhausen unterwegs?",
                answer: "Selbstverständlich. Unsere regionalen Disponenten schicken den Monteur schnell in jedes noch so ländliche Dorf und Ortsteil rund um Hüttenberg und den Schöffengrund."
            },
            {
                question: "Ab welchem Preis öffnen Sie eine Zugefallene Tür in Hüttenberg?",
                answer: "Wir verrechnen eine pauschale Türöffnung während der Werktage (06:00 - 20:00 Uhr) ab 99 Euro (zzgl. einer geringen Einsatz-/Fahrtenpauschale für Hüttenberg)."
            },
            {
                question: "Muss bei einer Öffnung immer der Profilzylinder getauscht werden?",
                answer: "Nein, solange die Tür bloß zugefallen ist, öffnen wir diese ohne jeglichen Schaden. Zylinder in Hüttenberg werden gewöhnlich nur bei defekten Verriegelungen oder verlorenen Schlüsseln zwingend getauscht."
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
            basePrice: 99,
            basePriceNight: 119,
            basePriceWeekend: 179,
            travelCost: 15,
            travelCostText: "+ 15€ Anfahrt",
        },
        seo: {
            metaTitle: "Schlüsseldienst Hohenahr — Türöffnung ab 99€ | 24/7",
            metaDescription: "Ihr Notdienst für Hohenahr, Erda und Hohensolms. Schnelles Eintreffen in ca. 8-12 Minuten. Beschädigungsfreie Öffnung, Festpreise. 06441-8056544",
        },
        content: {
            heroIntro: "Der verlässliche Schlüsseldienst für die Großgemeinde Hohenahr. Wir öffnen in Erda, Hohensolms oder Altenkirchen Ihre Tür sicher, professionell und ohne Wucherpreise.",
            mainText: `
<p>Im schönen nördlichen Randgebiet zu Wetzlar liegt Hohenahr, eine beschauliche ländliche Gemeinde, die durch bewaldete Hügellandschaften und den historischen Kern in Hohensolms oder Erda besticht. Gerade hier, wo die Wege zu größeren infrastrukturellen Knotenpunkten etwas weiter sind und Eigenheime sowie liebevoll dekorierte Hofreiten dominieren, kann ein ausgeschlossener Einwohner schnell in einer verzwickten Lage feststecken. Genau für Sie macht sich unser kompetenter <strong>Schlüsseldienst Hohenahr</strong> stark.</p>

<p>Trotz der hügeligen Anfahrt über die L3053 sind wir durch unsere ausgeklügelte Flottensteuerung und geographische Nähe extrem flexibel und bemerkenswert schnell. Erwarten Sie in Erda, Mudersbach, Altenkirchen oder Großaltenstädten eine pünktliche Ankunft in etwa 8 bis 12 Minuten. Unsere Disponenten sprechen direkt am Telefon klarste Fakten: Ein fester Preis statt dubiosen Überraschungen oder Wucher wie man es leider allzu oft von der unseriösen Konkurrenz im Internet liest. Mit transparenten Basis-Öffnungen von 99 Euro (zzgl. geringer, kommunizierter Anfahrt nach Hohenahr) wissen Sie bei uns absolute Fairness an Ihrer Seite.</p>

<p>Die Haustüren in ländlichen Gebieten sind oft mit starken Verriegelungen und teilweise historischen Beschlägen ausgestattet, wie beispielsweise im Kernbereich von Hohensolms. Wir garantieren Ihnen absolute Fachkompetenz: Eine herkömmlich zugefallene Holztür als auch mehrfach verriegelte Kunststofffronten öffnen wir auf materialschonendem Niveau. Es wird kein roher Kraftaufwand betrieben; unser Equipment und unser Fachwissen sichern in über 99 % ein schadenfreies Öffnen.</p>

<p>Wir arbeiten absolut vertrauensvoll. Im Notdienst erreichen Sie uns zudem an jedem einzelnen Wochentag sowie auch sonntags und in der schattigsten Nacht im Winter. Vertrauen als Schlüssel – wir sind in Hohenahr verlässlich für Sie im Dienst.</p>`,
            serviceZerstörungsfrei: "Ist die Tür rund um Hohenahr versehentlich hinter Ihnen ins Verriegelungsschloss gerutscht? Wir fädeln unser Präzisionswerkzeug sanft ein und verhindern dadurch hässliche Türbeschädigungen.",
            serviceBohren: "Doppelt verriegelt, ein Schlossdefekt oder Schüssel komplett verloren? Mit akkurater Frästechnik öffnen wir in Erda und Mudersbach den Kern behutsam und zügig.",
            service247: "Notsituation in Hohenahr kurz nach Mitternacht? Rufen Sie uns ungeniert an. Unser Notrufzentrum steht über 24 Stunden lückenlos bereit für Ihren Anruf.",
        },
        faqs: [
            {
                question: "Fahren Sie auch weit entlegene Ortsteile in Hohenahr an?",
                answer: "Ja, ob Erda, Hohensolms, Großaltenstädten oder Mudersbach – jeder Ortsteil in Hohenahr wird zügig und ohne Aufschrei in nur wenigen Minuten souverän angefahren."
            },
            {
                question: "Übernimmt der Festpreis ein zerstörungsfreies Vorgehen in Hohenahr?",
                answer: "Für 99 Euro (werktags, Grundtarif) plus Anfahrtsgebühr garantieren wir, sofern nicht fest zugeschlossen wurde, ein reibungsloses und beschädigungsfreies Aufziehen Ihrer Haustür."
            },
            {
                question: "Reparieren Sie in Hohenahr auch defekte Schloss-Kasten / Einsteckschlösser?",
                answer: "Dafür führen wir ein Komplettpaket im Firmenwagen mit. Ob Riegelbruch, Fallenbruch oder Federdefekt – ein neues Einsteckschloss ist postwendend durch uns einmontiert."
            }
        ],
        neighbors: ["schluesseldienst-wetzlar-naunheim", "schluesseldienst-wetzlar-muenchholzhausen", "schluesseldienst-asslar"]
    }
];
