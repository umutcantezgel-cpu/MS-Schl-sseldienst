/**
 * ══════════════════════════════════════════════════════════════════
 * VEKTOR 2: Micro-POI Datenbank (Hyper-Local SERP Choking)
 * ══════════════════════════════════════════════════════════════════
 * Each POI represents a high-traffic location in the 50km radius.
 * Google users searching "Schlüsseldienst in der Nähe von [POI]"
 * will land on a dedicated, unique page that monopolizes the SERP.
 *
 * SSOT: All prices/phone derived from companyInfo at render time.
 * GPS: Real-world coordinates for Haversine distance calculation.
 * ══════════════════════════════════════════════════════════════════
 */

export interface MicroPOI {
  /** URL-safe slug, e.g. "forum-wetzlar" */
  slug: string;
  /** Display name, e.g. "Forum Wetzlar" */
  name: string;
  /** POI category for content differentiation */
  category: "einkaufszentrum" | "klinik" | "arena" | "bahnhof" | "universität" | "behörde" | "wohngebiet" | "gewerbegebiet" | "schule" | "altstadt" | "park";
  /** Real GPS coordinates */
  lat: number;
  lng: number;
  /** City/district this POI belongs to */
  city: string;
  /** PLZ */
  plz: string;
  /** Short context sentence about the POI (unique per entry) */
  context: string;
  /** Typical emergency scenario at this POI type */
  scenario: string;
}

/**
 * ~30 Micro-POIs covering the Wetzlar/Gießen/Marburg corridor.
 * Each entry has real GPS data for accurate ETA calculation.
 */
export const MICRO_POIS: MicroPOI[] = [
  // ── Wetzlar Core ──
  {
    slug: "forum-wetzlar",
    name: "Forum Wetzlar",
    category: "einkaufszentrum",
    lat: 50.5525, lng: 8.5047,
    city: "Wetzlar", plz: "35576",
    context: "Das Forum Wetzlar ist das größte Einkaufszentrum der Region mit über 100 Geschäften und tausenden Besuchern täglich.",
    scenario: "Autoschlüssel im Einkaufswagen vergessen oder Fahrzeug auf dem Parkdeck versehentlich verschlossen — wir öffnen direkt vor Ort.",
  },
  {
    slug: "klinikum-wetzlar",
    name: "Klinikum Wetzlar",
    category: "klinik",
    lat: 50.5450, lng: 8.4920,
    city: "Wetzlar", plz: "35578",
    context: "Das Klinikum Wetzlar-Braunfels ist das zentrale Krankenhaus im Lahn-Dill-Kreis mit Notaufnahme und über 500 Betten.",
    scenario: "Schlüssel im Krankenzimmer eingeschlossen, Angehörige stehen vor verschlossener Wohnung — schnelle Hilfe rund um die Uhr.",
  },
  {
    slug: "rittal-arena-wetzlar",
    name: "Rittal Arena Wetzlar",
    category: "arena",
    lat: 50.5583, lng: 8.4833,
    city: "Wetzlar", plz: "35576",
    context: "Die Rittal Arena ist die Heimat der HSG Wetzlar (Handball-Bundesliga) und fasst über 4.400 Zuschauer.",
    scenario: "Nach dem Spiel zum Auto — und der Schlüssel steckt innen. Wir sind in 10 Minuten am Arena-Parkplatz.",
  },
  {
    slug: "wetzlar-hauptbahnhof",
    name: "Hauptbahnhof Wetzlar",
    category: "bahnhof",
    lat: 50.5530, lng: 8.4990,
    city: "Wetzlar", plz: "35576",
    context: "Der Hauptbahnhof Wetzlar ist Knotenpunkt der Dillstrecke und verbindet die Stadt mit Frankfurt, Gießen und Siegen.",
    scenario: "Wohnungsschlüssel im Zug vergessen — stehen Sie nicht vor verschlossener Tür. Ein Anruf genügt.",
  },
  {
    slug: "altstadt-wetzlar",
    name: "Altstadt Wetzlar",
    category: "altstadt",
    lat: 50.5567, lng: 8.5022,
    city: "Wetzlar", plz: "35576",
    context: "Die historische Altstadt Wetzlar mit Dom, Lottehaus und Fachwerkhäusern ist das kulturelle Herz der Stadt.",
    scenario: "Historische Türen mit Kastenschlössern erfordern Spezialwerkzeug — unsere Techniker kennen jede Schlosskonstruktion der Altstadt.",
  },
  {
    slug: "leitz-park-wetzlar",
    name: "Leitz-Park Wetzlar",
    category: "gewerbegebiet",
    lat: 50.5610, lng: 8.4750,
    city: "Wetzlar", plz: "35578",
    context: "Der Leitz-Park ist Sitz von Leica Camera und Visitationsziel für Fotografen weltweit.",
    scenario: "Büroschlüssel im Firmengebäude eingeschlossen — diskreter Schlüsseldienst auch für Gewerbekunden.",
  },
  // ── Wetzlar Stadtteile ──
  {
    slug: "niedergirmes-wetzlar",
    name: "Niedergirmes",
    category: "wohngebiet",
    lat: 50.5630, lng: 8.5100,
    city: "Wetzlar", plz: "35576",
    context: "Niedergirmes ist ein dicht besiedelter Stadtteil mit einer Mischung aus Mietwohnungen und Eigenheimen.",
    scenario: "Zugefallene Tür in der Mietwohnung — wir öffnen zerstörungsfrei und der Vermieter muss nichts erfahren.",
  },
  {
    slug: "dutenhofen",
    name: "Dutenhofen",
    category: "wohngebiet",
    lat: 50.5760, lng: 8.5340,
    city: "Wetzlar", plz: "35582",
    context: "Dutenhofen ist ein ruhiger Wetzlarer Stadtteil mit typischen Einfamilienhäusern und guter Anbindung.",
    scenario: "Schlüssel beim Rasenmähen im Haus vergessen — kein Problem, wir sind in Minuten da.",
  },
  {
    slug: "hermannstein",
    name: "Hermannstein",
    category: "wohngebiet",
    lat: 50.5390, lng: 8.5120,
    city: "Wetzlar", plz: "35578",
    context: "Hermannstein liegt südlich der Kernstadt mit großen Wohnsiedlungen und dem Klinikum in Reichweite.",
    scenario: "Abends von der Arbeit — und die Tür ist zu. Wir sind vom Hauptsitz in 5 Minuten bei Ihnen.",
  },
  {
    slug: "muenchholzhausen",
    name: "Münchholzhausen",
    category: "wohngebiet",
    lat: 50.5820, lng: 8.5580,
    city: "Wetzlar", plz: "35584",
    context: "Münchholzhausen ist der nördlichste Wetzlarer Stadtteil, ländlich geprägt mit Neubaugebieten.",
    scenario: "Auch in ländlichen Stadtteilen: Unser Einsatzfahrzeug erreicht Sie zuverlässig in unter 15 Minuten.",
  },
  // ── Gießen ──
  {
    slug: "seltersweg-giessen",
    name: "Seltersweg Gießen",
    category: "einkaufszentrum",
    lat: 50.5842, lng: 8.6765,
    city: "Gießen", plz: "35390",
    context: "Der Seltersweg ist Gießens Haupteinkaufsstraße und eine der meistfrequentierten Fußgängerzonen Mittelhessens.",
    scenario: "Autoschlüssel im Café liegen gelassen, Fahrzeug im Parkhaus verschlossen — wir öffnen noch während Sie warten.",
  },
  {
    slug: "justus-liebig-universitaet",
    name: "Justus-Liebig-Universität Gießen",
    category: "universität",
    lat: 50.5800, lng: 8.6737,
    city: "Gießen", plz: "35390",
    context: "Die JLU ist eine der größten Universitäten Hessens mit über 28.000 Studierenden.",
    scenario: "Studenten-WG ausgesperrt um 2 Uhr morgens — unser 24h-Notdienst kennt jede Schlossart in Gießener Altbauwohnungen.",
  },
  {
    slug: "uniklinikum-giessen",
    name: "Universitätsklinikum Gießen",
    category: "klinik",
    lat: 50.5780, lng: 8.6640,
    city: "Gießen", plz: "35392",
    context: "Das UKGM Gießen ist eines der größten Universitätsklinika Deutschlands.",
    scenario: "Schichtdienst-Ende um 22 Uhr, Wohnungsschlüssel verloren — rufen Sie uns direkt vom Klinikgelände an.",
  },
  {
    slug: "giessen-hauptbahnhof",
    name: "Hauptbahnhof Gießen",
    category: "bahnhof",
    lat: 50.5790, lng: 8.6630,
    city: "Gießen", plz: "35390",
    context: "Der Hauptbahnhof Gießen ist ICE-Halt und Knotenpunkt für ganz Mittelhessen.",
    scenario: "Schlüssel im ICE vergessen? Stehen Sie nicht im Regen — ein Anruf bei uns und die Tür ist in 25 Minuten offen.",
  },
  {
    slug: "schiffenberger-weg-giessen",
    name: "Schiffenberger Weg",
    category: "wohngebiet",
    lat: 50.5730, lng: 8.6900,
    city: "Gießen", plz: "35394",
    context: "Das Viertel am Schiffenberger Weg ist ein beliebtes Wohngebiet für Familien und Studierende.",
    scenario: "Kind hat sich versehentlich eingesperrt — wir öffnen besonders behutsam und kindersicher.",
  },
  // ── Marburg ──
  {
    slug: "oberstadt-marburg",
    name: "Oberstadt Marburg",
    category: "altstadt",
    lat: 50.8100, lng: 8.7700,
    city: "Marburg", plz: "35037",
    context: "Die Marburger Oberstadt mit Schloss und Fachwerkhäusern ist UNESCO-Weltkulturerbe-Kandidat.",
    scenario: "Historische Holztüren mit alten Schlössern — unsere Spezialisten arbeiten zerstörungsfrei auch an denkmalgeschützten Gebäuden.",
  },
  {
    slug: "philipps-universitaet-marburg",
    name: "Philipps-Universität Marburg",
    category: "universität",
    lat: 50.8090, lng: 8.7710,
    city: "Marburg", plz: "35037",
    context: "Die Philipps-Universität ist die älteste noch existierende protestantische Universität der Welt (gegr. 1527).",
    scenario: "Ausgesperrt aus dem Studentenwohnheim — unser Notdienst kennt die Schließsysteme der Marburger Studentenwerke.",
  },
  {
    slug: "uniklinikum-marburg",
    name: "Universitätsklinikum Marburg",
    category: "klinik",
    lat: 50.8120, lng: 8.7730,
    city: "Marburg", plz: "35043",
    context: "Das UKGM Marburg auf den Lahnbergen ist ein Klinikum der Maximalversorgung.",
    scenario: "Nach dem Klinikbesuch — Schlüssel im Wartebereich verloren. Wir kommen zu Ihnen nach Marburg.",
  },
  // ── Weitere Städte ──
  {
    slug: "solms-burgsolms",
    name: "Burgsolms",
    category: "wohngebiet",
    lat: 50.5410, lng: 8.4130,
    city: "Solms", plz: "35606",
    context: "Burgsolms ist der zentrale Ort der Gemeinde Solms im Lahn-Dill-Kreis.",
    scenario: "Nur 10 Minuten von unserem Hauptsitz entfernt — ultraschnelle Hilfe bei Aussperrungen.",
  },
  {
    slug: "asslar-zentrum",
    name: "Aßlar Zentrum",
    category: "wohngebiet",
    lat: 50.5910, lng: 8.4680,
    city: "Aßlar", plz: "35614",
    context: "Aßlar ist eine kleine Stadt nördlich von Wetzlar mit aktiver Gewerbezone.",
    scenario: "Bürotür verschlossen, Termin in 30 Minuten — wir schaffen das schneller als der Termin beginnt.",
  },
  {
    slug: "braunfels-schloss",
    name: "Schloss Braunfels",
    category: "altstadt",
    lat: 50.5170, lng: 8.3920,
    city: "Braunfels", plz: "35619",
    context: "Braunfels mit seinem imposanten Schloss ist ein Touristenmagnet im Lahn-Dill-Kreis.",
    scenario: "Ferienwohnung verschlossen, Schlüssel nicht auffindbar — wir sind auch für Urlaubsgäste da.",
  },
  {
    slug: "dillenburg-wilhelmsturm",
    name: "Dillenburg (Wilhelmsturm)",
    category: "altstadt",
    lat: 50.7410, lng: 8.2830,
    city: "Dillenburg", plz: "35683",
    context: "Dillenburg mit dem historischen Wilhelmsturm liegt im nördlichen Lahn-Dill-Kreis.",
    scenario: "Auch in Dillenburg sind wir in unter 35 Minuten — zuverlässiger Schlüsseldienst ohne Callcenter.",
  },
  {
    slug: "herborn-altstadt",
    name: "Altstadt Herborn",
    category: "altstadt",
    lat: 50.6810, lng: 8.3060,
    city: "Herborn", plz: "35745",
    context: "Die Herborner Altstadt mit ihren bunten Fachwerkhäusern zählt zu den schönsten in Hessen.",
    scenario: "Alte Fachwerktür klemmt — unsere Techniker kennen die besonderen Anforderungen historischer Schlösser.",
  },
  {
    slug: "lahnau-atzbach",
    name: "Atzbach (Lahnau)",
    category: "wohngebiet",
    lat: 50.5690, lng: 8.5620,
    city: "Lahnau", plz: "35633",
    context: "Atzbach ist der größte Ortsteil von Lahnau, gelegen zwischen Wetzlar und Gießen.",
    scenario: "Genau zwischen unseren beiden Haupteinsatzgebieten — Anfahrt in unter 12 Minuten garantiert.",
  },
  {
    slug: "huettenberg-rechtenbach",
    name: "Rechtenbach (Hüttenberg)",
    category: "wohngebiet",
    lat: 50.5210, lng: 8.5580,
    city: "Hüttenberg", plz: "35625",
    context: "Rechtenbach ist der größte Stadtteil von Hüttenberg, südlich von Wetzlar an der B49.",
    scenario: "Pendlergemeinde Hüttenberg — abends ausgesperrt nach der Arbeit? Wir kommen sofort.",
  },
  {
    slug: "ehringshausen-zentrum",
    name: "Ehringshausen",
    category: "wohngebiet",
    lat: 50.6080, lng: 8.3800,
    city: "Ehringshausen", plz: "35630",
    context: "Ehringshausen liegt an der Dill zwischen Wetzlar und Herborn.",
    scenario: "Schlüssel im Auto eingeschlossen auf dem REWE-Parkplatz — wir öffnen Ihr Fahrzeug schonend.",
  },
  {
    slug: "lollar-zentrum",
    name: "Lollar",
    category: "wohngebiet",
    lat: 50.6520, lng: 8.7100,
    city: "Lollar", plz: "35457",
    context: "Lollar liegt an der Lahn zwischen Gießen und Marburg mit guter Verkehrsanbindung.",
    scenario: "Auf halber Strecke zwischen Gießen und Marburg — wir erreichen Sie in 20 Minuten.",
  },
];

/**
 * Returns all POI slugs for generateStaticParams.
 */
export function getAllPoiSlugs(): string[] {
  return MICRO_POIS.map((poi) => poi.slug);
}

/**
 * Returns a specific POI by slug or undefined.
 */
export function getPoiBySlug(slug: string): MicroPOI | undefined {
  return MICRO_POIS.find((poi) => poi.slug === slug);
}
