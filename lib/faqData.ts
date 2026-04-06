export interface FAQItem {
    question: string;
    answer: string;
    category: "kosten" | "anfahrt" | "leistungen" | "sicherheit" | "notdienst";
}

export const FAQ_CATEGORIES: Record<string, string> = {
    kosten: "Kosten & Preise",
    anfahrt: "Anfahrt & Servicegebiet",
    leistungen: "Leistungen & Ablauf",
    sicherheit: "Sicherheit & Vertrauen",
    notdienst: "Notdienst & Erreichbarkeit",
};

export const FAQ_DATA: FAQItem[] = [
    // ============ KOSTEN & PREISE ============
    {
        question: "Was kostet ein Schlüsseldienst in Wetzlar?",
        answer: "Wir wissen, wie sehr versteckte Kosten verärgern. Deshalb öffnen wir zugefallene Türen ab 89 Euro zum garantierten Festpreis. Sie erfahren den exakten Preis immer verbindlich am Telefon, noch bevor unser Techniker überhaupt losfährt. Im gesamten Wetzlarer Kern-Servicegebiet gibt es zudem keine Anfahrtsgebühren.",
        category: "kosten",
    },
    {
        question: "Gibt es versteckte Kosten oder Aufschläge?",
        answer: "Schlüsseldienst Wetzlar arbeitet ausschließlich mit transparenten Festpreisen — ohne versteckte Kosten, ohne nachträgliche Aufschläge. Der Preis, der am Telefon genannt wird, ist der Preis, den Sie zahlen. Anfahrtskosten innerhalb des Servicegebiets sind im Festpreis bereits enthalten.",
        category: "kosten",
    },
    {
        question: "Gibt es Zuschläge für Einsätze nachts oder am Wochenende?",
        answer: "Schlüsseldienst Wetzlar berechnet einen transparenten Zuschlag von 30 Euro für Einsätze zwischen 18:00 und 8:00 Uhr sowie an Wochenenden und Feiertagen. Dieser Zuschlag wird Ihnen vorab mitgeteilt, bevor der Techniker losfährt.",
        category: "kosten",
    },
    {
        question: "Wie kann ich bezahlen?",
        answer: "Bei Schlüsseldienst Wetzlar können Sie bequem in bar, per EC-Karte oder per Kreditkarte direkt vor Ort bezahlen. Eine Rechnung wird Ihnen selbstverständlich ausgestellt.",
        category: "kosten",
    },
    {
        question: "Was kostet eine Autoöffnung?",
        answer: "Schlüsseldienst Wetzlar öffnet Fahrzeuge aller Marken ab 99 Euro zum Festpreis — ohne Lackschäden und ohne versteckte Kosten. Die Autoöffnung ist 24/7 verfügbar.",
        category: "kosten",
    },
    {
        question: "Welche Kosten entstehen bei einer Stornierung?",
        answer: "Wenn Sie Ihren Einsatz stornieren, bevor der Techniker sich auf den Weg gemacht hat, fallen keine Kosten an. Ist der Techniker bereits unterwegs, fällt eine Anfahrtspauschale von 80 Euro an.",
        category: "kosten",
    },

    // ============ ANFAHRT & SERVICEGEBIET ============
    {
        question: "Wie schnell kommt der Schlüsseldienst in Wetzlar?",
        answer: "Wenn Sie ausgesperrt im Regen stehen, zählt jede Minute. Durch unsere lokale Stationierung mitten in Wetzlar garantieren wir eine Anfahrt von 15 bis 30 Minuten. Wir betreiben kein anonymes Callcenter — Sie sprechen direkt mit dem diensthabenden Monteur, der sich sofort auf den Weg macht.",
        category: "anfahrt",
    },
    {
        question: "Kommt der Schlüsseldienst auch nach Gießen?",
        answer: "Ja, Schlüsseldienst Wetzlar bedient Gießen mit einer Anfahrtszeit von 15–20 Minuten zum identischen Festpreis ohne zusätzliche Anfahrtsgebühren.",
        category: "anfahrt",
    },
    {
        question: "Kommt der Schlüsseldienst auch nach Marburg?",
        answer: "Ja, Schlüsseldienst Wetzlar bedient auch Marburg an der Lahn mit einer Anfahrtszeit von 25–30 Minuten. Es gelten die gleichen Festpreise wie in Wetzlar.",
        category: "anfahrt",
    },
    {
        question: "Welche Orte bedient der Schlüsseldienst Wetzlar?",
        answer: "Schlüsseldienst Wetzlar bedient ein Einsatzgebiet im Umkreis von 50 Kilometern: Wetzlar, Gießen, Marburg, Solms, Aßlar, Leun, Braunfels, Hüttenberg, Lahnau, Wettenberg, Biebertal, Heuchelheim, Linden, Pohlheim, Lich, Dillenburg, Herborn, Haiger, Buseck, Lollar, Ehringshausen, Schöffengrund und den gesamten Lahn-Dill-Kreis.",
        category: "anfahrt",
    },
    {
        question: "Gibt es zusätzliche Anfahrtskosten für Orte außerhalb von Wetzlar?",
        answer: "Schlüsseldienst Wetzlar berechnet innerhalb des gesamten Servicegebiets (50 km Umkreis) keine zusätzlichen Anfahrtskosten. Die Anfahrt ist im Festpreis enthalten.",
        category: "anfahrt",
    },

    // ============ LEISTUNGEN & ABLAUF ============
    {
        question: "Wird die Tür bei der Öffnung beschädigt?",
        answer: "Nein. Wir verstehen Ihre Sorge vor teuren Schäden. Mit modernstem Spezialwerkzeug können wir 99% aller zugefallenen Türen völlig zerstörungsfrei öffnen. Sollte bei abgebrochenen Schlüsseln der Zylinder aufgebohrt werden müssen, klären wir das samt Materialkosten immer vorher transparent ab.",
        category: "leistungen",
    },
    {
        question: "Wie läuft eine Türöffnung ab?",
        answer: "Der Ablauf bei Schlüsseldienst Wetzlar ist einfach: 1. Sie rufen an, 2. Der Preis wird sofort am Telefon genannt, 3. Unser Techniker ist in 15–30 Minuten bei Ihnen, 4. Die Tür wird zerstörungsfrei geöffnet, 5. Sie zahlen den vereinbarten Festpreis.",
        category: "leistungen",
    },
    {
        question: "Können Sie auch Tresor- oder Safe-Türen öffnen?",
        answer: "Tresoröffnungen sind bei Schlüsseldienst Wetzlar nach vorheriger Absprache möglich. Kontaktieren Sie uns für ein individuelles Angebot und die Prüfung der Machbarkeit.",
        category: "leistungen",
    },
    {
        question: "Bieten Sie auch Schließanlagen und Sicherheitsberatung an?",
        answer: "Ja, Schlüsseldienst Wetzlar berät, plant und installiert Schließanlagen für Wohn- und Gewerbeimmobilien — von der einfachen Gleichschließung bis zur elektronischen Zutrittskontrolle. Kostenlose Sicherheitsberatung vor Ort ist ebenfalls verfügbar.",
        category: "leistungen",
    },
    {
        question: "Können Sie Schlösser direkt vor Ort austauschen?",
        answer: "Ja, Schlüsseldienst Wetzlar führt gängige Schließzylinder und Schlösser mit und kann den Austausch direkt vor Ort durchführen. So ist Ihre Tür sofort wieder sicher verschließbar.",
        category: "leistungen",
    },
    {
        question: "Helfen Sie auch bei einbruchbeschädigten Türen?",
        answer: "Ja, Schlüsseldienst Wetzlar sichert einbruchbeschädigte Türen sofort ab und tauscht beschädigte Schlösser vor Ort aus. Wir beraten Sie anschließend gerne zu besseren Einbruchschutzmaßnahmen.",
        category: "leistungen",
    },
    {
        question: "Bieten Sie auch Autoöffnungen an?",
        answer: "Ja, Schlüsseldienst Wetzlar öffnet Fahrzeuge aller Marken professionell und ohne Lackschäden ab 99 Euro zum Festpreis. Unser Techniker verwendet Spezialwerkzeug, das das Fahrzeug nicht beschädigt.",
        category: "leistungen",
    },
    {
        question: "Was ist der Unterschied zwischen einer zugefallenen und einer abgesperrten Tür?",
        answer: "Eine zugefallene Tür (Schlüssel steckt innen) lässt sich schneller und günstiger öffnen — ab 89 Euro. Eine abgesperrte Tür (Schlüssel verloren oder abgebrochen) erfordert aufwendigere Techniken und kostet ab 129 Euro. In beiden Fällen arbeitet Schlüsseldienst Wetzlar zerstörungsfrei.",
        category: "leistungen",
    },

    // ============ SICHERHEIT & VERTRAUEN ============
    {
        question: "Welcher Schlüsseldienst in Wetzlar ist seriös?",
        answer: "Ein seriöser Schlüsseldienst nutzt Ihre Notsituation niemals aus. Setzen Sie auf absolute Transparenz: Festpreise VOR der Anfahrt, über 45 echte lokale Google-Bewertungen (5.0 Sterne) und kein Callcenter im Hintergrund. Bei Schlüsseldienst Wetzlar erleben Sie keine bösen Überraschungen auf der Rechnung.",
        category: "sicherheit",
    },
    {
        question: "Woran erkenne ich einen seriösen Schlüsseldienst?",
        answer: "Ein seriöser Schlüsseldienst nennt den Festpreis vorab am Telefon, hat nachprüfbare Google-Bewertungen, eine local Adresse und verlangt vor Ort einen Identitätsnachweis. Schlüsseldienst Wetzlar erfüllt alle diese Kriterien — 5.0 Sterne bei 45+ Bewertungen.",
        category: "sicherheit",
    },
    {
        question: "Muss ich meinen Ausweis vorlegen?",
        answer: "Ja, Schlüsseldienst Wetzlar prüft grundsätzlich die Zugangsberechtigung des Auftraggebers. Ein Personalausweis, Mietvertrag oder Grundbuchauszug ist als Nachweis ausreichend. Dies dient Ihrer Sicherheit.",
        category: "sicherheit",
    },
    {
        question: "Haben Sie eine Versicherung für eventuelle Schäden?",
        answer: "Ja, Schlüsseldienst Wetzlar ist vollständig betriebshaftpflichtversichert. In dem seltenen Fall, dass bei der Öffnung ein Schaden entsteht, übernimmt unsere Versicherung die Kosten.",
        category: "sicherheit",
    },
    {
        question: "Sind Ihre Techniker ausgebildet und qualifiziert?",
        answer: "Alle Techniker von Schlüsseldienst Wetzlar sind ausgebildete Fachkräfte mit langjähriger Erfahrung in der Schloss- und Sicherheitstechnik. Wir bilden regelmäßig zu neuen Schlosstypen und Sicherheitstechnologien weiter.",
        category: "sicherheit",
    },

    // ============ NOTDIENST & ERREICHBARKEIT ============
    {
        question: "Gibt es einen Schlüsseldienst in Wetzlar der nachts geöffnet hat?",
        answer: "Ja, Schlüsseldienst Wetzlar ist rund um die Uhr erreichbar — auch nachts zwischen 22 und 6 Uhr, an Wochenenden und an allen deutschen Feiertagen. Für Nachteinsätze fällt ein transparenter Zuschlag von 30 Euro an.",
        category: "notdienst",
    },
    {
        question: "Was mache ich, wenn ich mich ausgesperrt habe?",
        answer: "Rufen Sie Schlüsseldienst Wetzlar an unter 06441 8056279. Wir nennen Ihnen sofort den Festpreis und sind in 15–30 Minuten bei Ihnen. Wichtig: Versuchen Sie nicht, die Tür selbst aufzubrechen — das verursacht fast immer teure Schäden.",
        category: "notdienst",
    },
    {
        question: "Kommt der Schlüsseldienst auch an Weihnachten und Silvester?",
        answer: "Ja, Schlüsseldienst Wetzlar ist an 365 Tagen im Jahr im Einsatz — einschließlich aller Feiertage wie Weihnachten, Silvester, Ostern und Pfingsten. Der Feiertagszuschlag von 30 Euro wird vorab mitgeteilt.",
        category: "notdienst",
    },
    {
        question: "Wie erreiche ich den Schlüsseldienst Wetzlar am schnellsten?",
        answer: "Der schnellste Weg ist ein Anruf unter 06441 8056279. Sie erreichen direkt unseren Einsatzdisponenten — kein Callcenter, keine Warteschleife. Alternativ können Sie über die Website oder per WhatsApp Kontakt aufnehmen.",
        category: "notdienst",
    },
    {
        question: "Kann ich einen Termin für einen nicht-dringenden Einsatz vereinbaren?",
        answer: "Ja, Schlüsseldienst Wetzlar bietet neben dem Notdienst auch Terminvereinbarungen für Schlossaustausch, Schließanlagen-Installation und Sicherheitsberatungen an. Rufen Sie uns an und wir finden einen passenden Termin.",
        category: "notdienst",
    },
    {
        question: "Tür zugefallen in Wetzlar — was tun?",
        answer: "Wenn Ihre Tür zugefallen ist: Rufen Sie Schlüsseldienst Wetzlar an unter 06441 8056279. Festpreis ab 89 Euro, Anfahrt in 15–30 Minuten, zerstörungsfreie Öffnung in 99% der Fälle. Kein Callcenter — lokale Techniker direkt aus Wetzlar.",
        category: "notdienst",
    },
];

/**
 * Get FAQs by category, or all if no category specified
 */
function getFAQsByCategory(category?: FAQItem["category"]): FAQItem[] {
    if (!category) return FAQ_DATA;
    return FAQ_DATA.filter(faq => faq.category === category);
}

/**
 * Get the top N FAQs for homepage (hand-picked highest-impact questions)
 */
export function getHomepageFAQs(): FAQItem[] {
    const homepageQuestions = [
        "Was kostet ein Schlüsseldienst in Wetzlar?",
        "Wie schnell kommt der Schlüsseldienst in Wetzlar?",
        "Gibt es einen Schlüsseldienst in Wetzlar der nachts geöffnet hat?",
        "Welcher Schlüsseldienst in Wetzlar ist seriös?",
        "Wird die Tür bei der Öffnung beschädigt?",
        "Gibt es versteckte Kosten oder Aufschläge?",
        "Wie läuft eine Türöffnung ab?",
        "Muss ich meinen Ausweis vorlegen?",
        "Kommt der Schlüsseldienst auch nach Gießen?",
        "Kommt der Schlüsseldienst auch nach Marburg?",
        "Welche Orte bedient der Schlüsseldienst Wetzlar?",
        "Was mache ich, wenn ich mich ausgesperrt habe?",
        "Gibt es Zuschläge für Einsätze nachts oder am Wochenende?",
        "Wie kann ich bezahlen?",
        "Tür zugefallen in Wetzlar — was tun?",
    ];

    return homepageQuestions
        .map(q => FAQ_DATA.find(faq => faq.question === q))
        .filter((faq): faq is FAQItem => faq !== undefined);
}
