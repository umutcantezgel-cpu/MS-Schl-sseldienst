import { LocationData } from "@/lib/data/locations";

/**
 * Generates unique, SEO-optimized about text for locations that don't have
 * hand-written aboutText. Uses the location's existing data fields to compose
 * a genuinely unique multi-paragraph text block.
 * 
 * This prevents Google from flagging city pages as duplicate content since each
 * generated text references unique data: city name, PLZ, driving time, distance,
 * character, landmark, population, building types, route, main road, pricing,
 * and neighbors.
 */
export function generateUniqueAboutText(city: LocationData): string {
    const parts: string[] = [];

    // Simple deterministic variation selector based on slug length / char codes
    const hash = city.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const variantIdx = hash % 3;

    // ── Paragraph 1: Geographic Introduction ──
    const charDesc = city.character || "ein ruhiger Wohnort";
    const popDesc = city.populationApprox ? ` mit rund ${city.populationApprox} Einwohnern` : "";
    const plzDesc = city.plz ? ` (PLZ ${city.plz})` : "";
    
    if (variantIdx === 0) {
        parts.push(`<p>${city.name}${plzDesc} ist ${charDesc}${popDesc} im Lahn-Dill-Kreis. ` +
            `Als geprüfter <strong>Schlüsseldienst ${city.name}</strong> stehen wir Ihnen für professionelle Türöffnungen, ` +
            `Zylinderwechsel und moderne Sicherheitstechnik zur Seite. Unser lokaler Fachbetrieb bringt schnelle ` +
            `Hilfe bei Schlüsselnotfällen direkt zu Ihnen vor Ort.</p>`);
    } else if (variantIdx === 1) {
        parts.push(`<p>In ${city.name}${plzDesc}, ${charDesc}${popDesc}, versorgen wir als mobiler <strong>Schlüsseldienst ${city.name}</strong> ` +
            `Anwohner und Gewerbetreibende mit schnellen Türöffnungen sowie umfassendem Schloss-Service. ` +
            `Dabei setzen wir auf transparente Konditionen und kurze Anfahrtszeiten vom Handwerksbetrieb aus Wetzlar.</p>`);
    } else {
        parts.push(`<p>Für Bewohner in ${city.name}${plzDesc} (${charDesc}${popDesc}) bieten wir als <strong>Schlüsseldienst ${city.name}</strong> ` +
            `zuverlässige Hilfe bei zugefallenen oder verschlossenen Türen. Wir garantieren Facharbeit ohne Umwege, ` +
            `ausgeführt von erfahrenen Technikern aus der Region.</p>`);
    }

    // ── Paragraph 2: Route & Speed ──
    const routeDesc = city.routeDescription || 
        `Über die direkten Verbindungsstraßen erreichen unsere Monteure ${city.name} in etwa ${city.logistics.drivingTimeMinutes} Minuten.`;
    const roadInfo = city.mainRoad ? ` Die Anfahrt erfolgt meist über die ${city.mainRoad}.` : "";
    const distInfo = city.distanceKm ? ` Die Entfernung zu unserem Standort in Wetzlar beträgt ca. ${city.distanceKm} km.` : "";
    
    parts.push(`<h3>In ${city.logistics.drivingTimeMinutes} Minuten bei Ihnen in ${city.name}</h3>`);
    parts.push(`<p>${routeDesc}${roadInfo}${distInfo} Nach Ihrer Auftragserteilung macht sich unser Einsatzfahrzeug umgehend auf den Weg zu Ihnen.</p>`);

    // ── Paragraph 3: Building Types & Expertise ──
    if (city.buildingTypes || city.landmark) {
        const buildDesc = city.buildingTypes || "eine vielseitige Bebauung aus Wohn- und Geschäftsgebäuden";
        const landmarkDesc = city.landmark 
            ? ` Bekannt in der Ortschaft ist unter anderem ${city.landmark}.` 
            : "";
        
        parts.push(`<h3>Bausubstanz und Schlosstypen in ${city.name}</h3>`);
        parts.push(`<p>Die Gebäudestruktur in ${city.name} zeichnet sich aus durch ${buildDesc}.${landmarkDesc} ` +
            `Unsere Monteure verfügen über Spezialwerkzeuge für sämtliche Schließsysteme – von gängigen Profilzylindern ` +
            `in Wohnhäusern bis hin zu Mehrfachverriegelungen und Schutzbeschlägen.</p>`);
    }

    // ── Paragraph 4: Pricing Transparency ──
    const fareDesc = city.fareInfo || 
        (city.pricing.travelCost === 0 
            ? `${city.name} liegt im Kerngebiet, sodass keine zusätzlichen Anfahrtskosten berechnet werden.` 
            : city.pricing.travelCost !== null 
                ? `Die Anfahrt nach ${city.name} beträgt faire ${city.pricing.travelCost} Euro.`
                : `Die genauen Anfahrtskosten für ${city.name} stimmen wir vorab am Telefon mit Ihnen ab.`);
    
    parts.push(`<h3>Transparente Festpreise für ${city.name}</h3>`);
    parts.push(`<p>Türöffnungen für zugefallene Standardtüren führen wir in ${city.name} werktags ab ${city.pricing.basePrice} Euro durch. ` +
        `${fareDesc} Den verbindlichen Endpreis nennen wir Ihnen für Ihren Einsatz in ${city.name} bereits vor der Anfahrt am Telefon, damit Sie volle Kostensicherheit haben.</p>`);

    // ── Paragraph 5: 24/7 Availability ──
    const parkDesc = city.parkingInfo ? ` ${city.parkingInfo}` : "";
    const demoFocus = city.demographicsFocus === "urban" 
        ? "städtischen Umfeld" 
        : city.demographicsFocus === "suburban" 
            ? "Wohngebiet"
            : city.demographicsFocus === "business"
                ? "Gewerbegebiet"
                : "ländlichen Bereich";
    
    parts.push(`<h3>24/7 Notdienst für ${city.name} an 365 Tagen</h3>`);
    parts.push(`<p>Ob spät abends oder am Wochenende: Im ${demoFocus} von ${city.name} ist unser Schlüsselnotdienst rund um die Uhr ` +
        `einsatzbereit. Wir helfen Ihnen auch an Sonn- und Feiertagen zügig und fachgerecht aus der Klemme.${parkDesc}</p>`);

    // ── Paragraph 6: Anti-Scam / Trust ──
    if (variantIdx === 0) {
        parts.push(`<h3>Seriöser Schlüsseldienst für ${city.name}</h3>`);
        parts.push(`<p>Als eingetragener Handwerksbetrieb aus Wetzlar (Langgasse 70) distanzieren wir uns auch bei Einsätzen in ${city.name} von überteuerten ` +
            `Callcenter-Vermittlungen. Bei der Schlüssel Schmiede Wetzlar erhalten Sie für Ihre Türöffnung in ${city.name} ehrliches Handwerk und persönliche Ansprechpartner.</p>`);
    } else if (variantIdx === 1) {
        parts.push(`<h3>Regionale Facharbeit statt Callcenter in ${city.name}</h3>`);
        parts.push(`<p>Verbraucherschutzstellen raten auch in Regionen wie ${city.name} zu lokal ansässigen Dienstleistern. Die Schlüssel Schmiede Wetzlar ist Ihr ` +
            `physischer Fachbetrieb – mit transparenten Festpreisen und geprüfter Kundenzufriedenheit für alle unsere Kunden aus ${city.name}.</p>`);
    } else {
        parts.push(`<p>Vertrauen Sie in ${city.name} auf einen echten Betrieb vor Ort. Mit unserem Ladenlokal in Wetzlar stehen ` +
            `wir auch in ${city.name} für verlässlichen Service, schnelle Hilfe und kundenfreundliche Festpreise.</p>`);
    }

    return parts.join("\n\n");
}

/**
 * Returns the aboutText for a location, using the hand-written version if available
 * or generating a unique one from the location's data fields.
 */
export function getAboutText(city: LocationData): string {
    if (city.aboutText) return city.aboutText;
    return generateUniqueAboutText(city);
}
