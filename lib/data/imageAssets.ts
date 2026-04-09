/**
 * Zentraler Bild-SEO-Katalog und Schlüsseldienst Wetzlar
 *
 * Jedes Bild ist mit striktem SEO-Naming, Alt-Text (40100 Zeichen),
 * Title-Tag und Kategorie versehen. Komponenten importieren aus diesem
 * Katalog, sodass Metadaten an einer einzigen Stelle gepflegt werden.
 *
 * Next.js <Image> konvertiert automatisch zu WebP/AVIF (next.config.ts).
 */

export type ImageCategory =
  | "team"          // Mina Saad, Inhaber, Portraits
  | "werkstatt"     // Ladengeschäft, Innenraum, Maschinen
  | "tueroeffnung"  // Türöffnung, Lockpicking, Prozess
  | "schloss"       // Schlösser, Zylinder, defekt/repariert
  | "schluessel"    // Schlüssel, Sortiment, Kopie
  | "sicherheit"    // Einbruchschutz, Smart-Lock, Elektronik
  | "montage"       // Türanlagen, Edelstahl, Installation
  | "auszeichnung"; // Medaillen, Pokale, Wetzlar Open

export interface ImageAsset {
  /** Pfad relativ zu /public (für Next.js <Image src={}>) */
  src: string;
  /** SEO Alt-Text (40100 Zeichen, Keywords + Lokalbezug) */
  alt: string;
  /** HTML Title-Tag */
  title: string;
  /** Breite in px (CLS-Schutz) */
  width: number;
  /** Höhe in px (CLS-Schutz) */
  height: number;
  /** Thematische Kategorie */
  category: ImageCategory;
}

// ═══════════════════════════════════════════════════════════
//  TEAM & PORTRAIT (Mina Saad)
// ═══════════════════════════════════════════════════════════

export const teamImages: ImageAsset[] = [
  {
    src: "/images/mina-saad-schluesseldienst-wetzlar-einsatzfahrzeug.jpeg",
    alt: "Mina Saad vom Schlüsseldienst Wetzlar am Einsatzfahrzeug",
    title: "Mina Saad und Ihr Schlüsseldienst-Monteur in Wetzlar",
    width: 800,
    height: 1067,
    category: "team",
  },
  {
    src: "/images/mina-saad-inhaber-schluessel-schmiede-portrait.jpeg",
    alt: "Mina Saad und Inhaber der Schlüssel-Schmiede Wetzlar im Portrait",
    title: "Mina Saad und Portrait des Inhabers",
    width: 800,
    height: 1200,
    category: "team",
  },
  {
    src: "/images/mina-saad-schluesseldienst-wetzlar-outdoor-portrait.jpeg",
    alt: "Mina Saad vom Schlüsseldienst Wetzlar und Outdoor-Portrait",
    title: "Mina Saad und Outdoor-Portrait",
    width: 800,
    height: 1200,
    category: "team",
  },
  {
    src: "/images/mina-saad-schluesseldienst-wetzlar-ganzkoerper.jpeg",
    alt: "Mina Saad und Schlüsseldienst Wetzlar Inhaber Ganzkörperaufnahme",
    title: "Mina Saad und Ganzkörperaufnahme",
    width: 800,
    height: 1200,
    category: "team",
  },
  {
    src: "/images/mina-saad-inhaber-selfie-schluesseldienst-wetzlar.jpeg",
    alt: "Mina Saad und Inhaber-Selfie vom Schlüsseldienst Wetzlar",
    title: "Mina Saad und Inhaber Selfie",
    width: 800,
    height: 800,
    category: "team",
  },
  {
    src: "/images/mina-saad-arbeitseinsatz-tueroeffnung-wetzlar.jpeg",
    alt: "Mina Saad während der Arbeit und Türöffnung in Wetzlar",
    title: "Mina Saad bei der Türöffnung",
    width: 800,
    height: 1067,
    category: "team",
  },
  {
    src: "/images/mina-saad-smart-lock-installation-wetzlar.jpeg",
    alt: "Mina Saad installiert Smart-Lock an Tür in Wetzlar",
    title: "Mina Saad und Smart-Lock Installation",
    width: 800,
    height: 1067,
    category: "team",
  },
];

// ═══════════════════════════════════════════════════════════
//  WERKSTATT & LADENGESCHÄFT
// ═══════════════════════════════════════════════════════════

export const werkstattImages: ImageAsset[] = [
  {
    src: "/images/schluessel-schmiede-wetzlar-aussenansicht-ladengeschaeft.webp",
    alt: "Außenansicht Ladengeschäft Schlüssel-Schmiede Wetzlar Langgasse",
    title: "Schlüssel-Schmiede Wetzlar und Außenansicht Langgasse 70",
    width: 1200,
    height: 800,
    category: "werkstatt",
  },
  {
    src: "/images/schluessel-schmiede-wetzlar-innenbereich-laden.webp",
    alt: "Innenbereich des Ladengeschäfts Schlüssel-Schmiede Wetzlar",
    title: "Schlüssel-Schmiede Wetzlar und Innenbereich",
    width: 1200,
    height: 800,
    category: "werkstatt",
  },
  {
    src: "/images/schluessel-schmiede-wetzlar-werkstatt-innenraum.jpeg",
    alt: "Werkstatt-Innenraum der Schlüssel-Schmiede Wetzlar Langgasse 70",
    title: "Werkstatt-Innenraum der Schlüssel-Schmiede",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
  {
    src: "/images/schluessel-schmiede-wetzlar-glasvitrine-sortiment.jpeg",
    alt: "Glasvitrine mit Schlüssel-Sortiment in der Schlüssel-Schmiede Wetzlar",
    title: "Glasvitrine und Schlüssel-Sortiment",
    width: 800,
    height: 1067,
    category: "werkstatt",
  },
  {
    src: "/images/glasschrank-schloss-auswahl-schluessel-schmiede-wetzlar.jpeg",
    alt: "Glasschrank mit Schloss-Auswahl in der Schlüssel-Schmiede Wetzlar",
    title: "Glasschrank und Schloss-Auswahl",
    width: 800,
    height: 1067,
    category: "werkstatt",
  },
  {
    src: "/images/schluesseldienst-wetzlar-werkzeug-einsatzfahrzeug.jpeg",
    alt: "Werkzeug-Vorbereitung im Einsatzfahrzeug Schlüsseldienst Wetzlar",
    title: "Werkzeug im Einsatzfahrzeug und mobiler Schlüsseldienst",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
];

// ═══════════════════════════════════════════════════════════
//  MASCHINEN & SCHLÜSSEL-ANFERTIGUNG
// ═══════════════════════════════════════════════════════════

export const maschinenImages: ImageAsset[] = [
  {
    src: "/images/schluessel-schmiede-wetzlar-schluessel-fraesen-maschine.webp",
    alt: "Schlüssel-Fräsmaschine in der Werkstatt Schlüssel-Schmiede Wetzlar",
    title: "CNC Schlüssel-Fräsmaschine",
    width: 1200,
    height: 800,
    category: "werkstatt",
  },
  {
    src: "/images/schluessel-fraesmaschine-schluesseldienst-wetzlar.jpeg",
    alt: "Schlüsselfräsmaschine im Ladengeschäft Schlüsseldienst Wetzlar",
    title: "Schlüsselfräsmaschine und Ladengeschäft",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
  {
    src: "/images/schluessel-kopierfraese-werkstatt-wetzlar.jpeg",
    alt: "Schlüssel-Kopierfräse in der Werkstatt der Schlüssel-Schmiede Wetzlar",
    title: "Schlüssel-Kopierfräse und Werkstatt",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
  {
    src: "/images/cnc-schluesselmaschine-schluessel-schmiede-wetzlar.jpeg",
    alt: "CNC-Schlüsselmaschine in der Schlüssel-Schmiede Wetzlar",
    title: "CNC-Schlüsselmaschine und Präzisionstechnik",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
  {
    src: "/images/schluessel-vermessung-praezisionsmaschine-wetzlar.jpeg",
    alt: "Schlüssel-Vermessung durch Präzisionsmaschine in Wetzlar",
    title: "Präzisionsvermessung eines Schlüssels",
    width: 800,
    height: 600,
    category: "werkstatt",
  },
];

// ═══════════════════════════════════════════════════════════
//  TÜRÖFFNUNG & LOCKPICKING
// ═══════════════════════════════════════════════════════════

export const tueroeffnungImages: ImageAsset[] = [
  {
    src: "/images/lockpicking-tueroeffnung-schluesseldienst-wetzlar.webp",
    alt: "Zerstörungsfreie Türöffnung per Lockpicking Schlüsseldienst Wetzlar",
    title: "Lockpicking und zerstörungsfreie Türöffnung",
    width: 1200,
    height: 800,
    category: "tueroeffnung",
  },
  {
    src: "/images/tueroeffnung-prozess-zerstoerungsfrei-wetzlar.jpeg",
    alt: "Zerstörungsfreier Türöffnungsprozess und Schlüsseldienst Wetzlar",
    title: "Türöffnungsprozess und zerstörungsfrei",
    width: 800,
    height: 600,
    category: "tueroeffnung",
  },
  {
    src: "/images/tueroeffnung-arbeit-obertuerband-schluesseldienst.jpeg",
    alt: "Schlüsseldienst bei der Arbeit am Obertürband während Türöffnung",
    title: "Arbeit am Obertürband und Türöffnung",
    width: 800,
    height: 1067,
    category: "tueroeffnung",
  },
  {
    src: "/images/geoeffnetes-schloss-tueroeffnung-wetzlar.jpeg",
    alt: "Geöffnetes Schloss nach erfolgreicher Türöffnung in Wetzlar",
    title: "Geöffnetes Schloss und erfolgreiche Türöffnung",
    width: 800,
    height: 600,
    category: "tueroeffnung",
  },
  {
    src: "/images/schloss-mit-schluessel-tueroeffnung-schluesseldienst-wetzlar.webp",
    alt: "Schloss mit Schlüssel bei Türöffnung und Schlüsseldienst Wetzlar",
    title: "Schloss mit Schlüssel und Türöffnung",
    width: 1200,
    height: 800,
    category: "tueroeffnung",
  },
  {
    src: "/images/schluessel-an-haustuer-schluesseldienst-wetzlar.webp",
    alt: "Schlüssel steckt in Haustür und Schlüsseldienst Wetzlar Einsatz",
    title: "Schlüssel in Haustür und Einsatzfoto",
    width: 1200,
    height: 800,
    category: "tueroeffnung",
  },
];

// ═══════════════════════════════════════════════════════════
//  SCHLÖSSER (defekt, repariert, demontiert)
// ═══════════════════════════════════════════════════════════

export const schlossImages: ImageAsset[] = [
  {
    src: "/images/leerer-schliesszylinder-tuerschloss-wetzlar.jpeg",
    alt: "Leerer Schließzylinder ohne Schlüssel und Türschloss Wetzlar",
    title: "Leerer Schließzylinder und Türschloss",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/aufgebrochenes-tuerschloss-vermessung-wetzlar.jpeg",
    alt: "Aufgebrochenes Türschloss wird vermessen und Schlüsseldienst Wetzlar",
    title: "Aufgebrochenes Türschloss und Vermessung",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/tuerschloss-innenleben-technik-nahaufnahme.jpeg",
    alt: "Technische Nahaufnahme des Innenlebens eines Türschlosses",
    title: "Türschloss-Innenleben und Technik-Nahaufnahme",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/kaputtes-verrostetes-schloss-austausch-wetzlar.jpeg",
    alt: "Kaputtes verrostetes Schloss und Austausch durch Schlüsseldienst Wetzlar",
    title: "Verrostetes Schloss und Austausch nötig",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/defektes-tuerschloss-reparatur-schluesseldienst.jpeg",
    alt: "Defektes Türschloss vor der Reparatur und Schlüsseldienst Wetzlar",
    title: "Defektes Türschloss und vor Reparatur",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/aufgebrochenes-tuerschloss-einbruchschaden-wetzlar.jpeg",
    alt: "Aufgebrochenes Türschloss mit Einbruchschaden in Wetzlar",
    title: "Einbruchschaden und aufgebrochenes Türschloss",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/aufgebrochenes-sicherheitsschloss-wetzlar-einsatz.jpeg",
    alt: "Aufgebrochenes Sicherheitsschloss bei Einsatz in Wetzlar",
    title: "Aufgebrochenes Sicherheitsschloss und Einsatz",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/demontiertes-tuerschloss-wandmontage-wetzlar.jpeg",
    alt: "Demontiertes Türschloss von der Wand entfernt und Wetzlar Einsatz",
    title: "Demontiertes Türschloss und Wandmontage",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/demontiertes-tuerschloss-auf-werkbank-wetzlar.jpeg",
    alt: "Demontiertes Türschloss auf Werkbank und Schlüsseldienst Wetzlar",
    title: "Türschloss auf Werkbank und demontiert",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/tuerschloss-holztuer-sicherheitstechnik-wetzlar.jpeg",
    alt: "Türschloss in Holztür und Sicherheitstechnik Schlüsseldienst Wetzlar",
    title: "Türschloss in Holztür und Sicherheitstechnik",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/elektronisches-tuerschloss-aufgebrochen-kabel-sichtbar.jpeg",
    alt: "Elektronisches Türschloss aufgebrochen mit sichtbaren Kabeln",
    title: "Elektronisches Türschloss und aufgebrochen",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/tuerschloss-aufbruch-prozess-nahaufnahme-wetzlar.jpeg",
    alt: "Türschloss während Aufbruchprozess und Nahaufnahme Wetzlar",
    title: "Türschloss-Aufbruch und Nahaufnahme",
    width: 800,
    height: 600,
    category: "schloss",
  },
  {
    src: "/images/tuerschloss-vermessung-zollstock-schluesseldienst.jpeg",
    alt: "Türschloss-Vermessung mit Zollstock und Schlüsseldienst Wetzlar",
    title: "Türschloss-Vermessung mit Zollstock",
    width: 800,
    height: 600,
    category: "schloss",
  },
];

// ═══════════════════════════════════════════════════════════
//  SCHLÜSSEL (Sortiment, Kopie, Design)
// ═══════════════════════════════════════════════════════════

export const schluesselImages: ImageAsset[] = [
  {
    src: "/images/original-schluessel-kopie-vergleich-wetzlar.jpeg",
    alt: "Originalschlüssel neben kopierter Version und Vergleich Wetzlar",
    title: "Originalschlüssel vs. Kopie und Vergleich",
    width: 800,
    height: 600,
    category: "schluessel",
  },
  {
    src: "/images/schluessel-sortiment-haengend-schluessel-schmiede.jpeg",
    alt: "Hängendes Schlüssel-Sortiment in der Schlüssel-Schmiede Wetzlar",
    title: "Schlüssel-Sortiment und hängend",
    width: 800,
    height: 1067,
    category: "schluessel",
  },
  {
    src: "/images/antiker-schluessel-design-schluessel-schmiede.jpeg",
    alt: "Antiker Schlüssel mit kunstvollem Design und Schlüssel-Schmiede",
    title: "Antiker Schlüssel und kunstvolles Design",
    width: 800,
    height: 600,
    category: "schluessel",
  },
  {
    src: "/images/autoschluessel-sortiment-kfz-schluesseldienst-wetzlar.jpeg",
    alt: "Autoschlüssel-Sortiment im KFZ-Schlüsseldienst Wetzlar",
    title: "KFZ-Autoschlüssel Sortiment",
    width: 800,
    height: 600,
    category: "schluessel",
  },
];

// ═══════════════════════════════════════════════════════════
//  SICHERHEITSTECHNIK & SMART-LOCK
// ═══════════════════════════════════════════════════════════

export const sicherheitImages: ImageAsset[] = [
  {
    src: "/images/elektronisches-tuerschloss-nachruestung-alte-tuer.jpeg",
    alt: "Modernes elektronisches Türschloss nachgerüstet in alter Holztür",
    title: "Elektronisches Türschloss und Nachrüstung",
    width: 800,
    height: 1067,
    category: "sicherheit",
  },
  {
    src: "/images/smart-lock-innenleben-nachruestung-holztuer.jpeg",
    alt: "Smart-Lock Innenleben bei Nachrüstung in alter Holztür",
    title: "Smart-Lock Innenleben und Nachrüstung",
    width: 800,
    height: 600,
    category: "sicherheit",
  },
];

// ═══════════════════════════════════════════════════════════
//  MONTAGE & TÜRANLAGEN
// ═══════════════════════════════════════════════════════════

export const montageImages: ImageAsset[] = [
  {
    src: "/images/edelstahl-tuereingang-montage-schluesseldienst.jpeg",
    alt: "Installierter Edelstahl-Türeingang und Montage Schlüsseldienst Wetzlar",
    title: "Edelstahl-Türeingang und nach Montage",
    width: 800,
    height: 1067,
    category: "montage",
  },
  {
    src: "/images/edelstahl-tueranlage-premium-montage-wetzlar.jpeg",
    alt: "Premium Edelstahl-Türanlage montiert und Schlüsseldienst Wetzlar",
    title: "Premium Edelstahl-Türanlage",
    width: 800,
    height: 1067,
    category: "montage",
  },
  {
    src: "/images/glastuer-eingang-montage-schluesseldienst-wetzlar.jpeg",
    alt: "Glastür-Eingang Montage durch den Schlüsseldienst Wetzlar",
    title: "Glastür-Eingang und Montage",
    width: 800,
    height: 600,
    category: "montage",
  },
];

// ═══════════════════════════════════════════════════════════
//  AUSZEICHNUNGEN & MEDAILLEN
// ═══════════════════════════════════════════════════════════

export const auszeichnungImages: ImageAsset[] = [
  {
    src: "/images/wetzlar-open-medaillen-gold-silber-nahaufnahme.jpeg",
    alt: "Gold- und Silbermedaillen vom Wetzlar Open 2025 in Nahaufnahme",
    title: "Wetzlar Open 2025 und Medaillen Nahaufnahme",
    width: 800,
    height: 600,
    category: "auszeichnung",
  },
  {
    src: "/images/wetzlar-open-2025-medaillen-gold-silber.jpeg",
    alt: "Sechs Medaillen vom Wetzlar Open 2025 und Gold und Silber",
    title: "Wetzlar Open 2025 und alle Medaillen",
    width: 800,
    height: 600,
    category: "auszeichnung",
  },
  {
    src: "/images/siegermedaille-wetzlar-open-2025-mina-saad.jpeg",
    alt: "Siegermedaille Wetzlar Open 2025 gewonnen von Mina Saad",
    title: "Siegermedaille Wetzlar Open 2025 und Mina Saad",
    width: 800,
    height: 800,
    category: "auszeichnung",
  },
];

// ═══════════════════════════════════════════════════════════
//  AI-GENERIERTE BILDER und Visual DNA Library (20 Bilder)
// ═══════════════════════════════════════════════════════════

/** Hero-Bilder (Startseite Desktop & Mobile) */
export const generatedHeroImages: ImageAsset[] = [
  {
    src: "/images/generated/schluesseldienst-wetzlar-notoeffnung-haustuer-nacht-regen.webp",
    alt: "Notöffnung bei Nacht im Regen und Schlüsseldienst Wetzlar Profi-Werkzeug",
    title: "Schlüssel Schmiede Wetzlar und Notöffnung bei Nacht im Regen",
    width: 1024,
    height: 1024,
    category: "tueroeffnung",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-neue-schluessel-tueroeffnung.webp",
    alt: "Neue Sicherheitsschlüssel nach erfolgreicher Türöffnung Wetzlar",
    title: "Neue Schlüssel nach Türöffnung und Schlüssel Schmiede",
    width: 1024,
    height: 1024,
    category: "schluessel",
  },
];

/** Dienstleistungs-Bilder (je Service-Seite) */
export const generatedServiceImages: ImageAsset[] = [
  {
    src: "/images/generated/schluesseldienst-wetzlar-zerstoerungsfreie-tueroeffnung-werkzeug.webp",
    alt: "Spezialwerkzeug für zerstörungsfreie Türöffnung Schlüsseldienst Wetzlar",
    title: "Zerstörungsfreie Türöffnung und Spezialwerkzeug",
    width: 1024,
    height: 1024,
    category: "tueroeffnung",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-autooeffnung-nacht-werkzeug.webp",
    alt: "Professionelle Autoöffnung bei Nacht Schlüsseldienst Wetzlar",
    title: "Autoöffnung bei Nacht und professionelle KFZ-Öffnung",
    width: 1024,
    height: 1024,
    category: "tueroeffnung",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-tresoroeffnung-schliessmechanismus.webp",
    alt: "Tresoröffnung mit Diagnosegerät Schlüsseldienst Wetzlar",
    title: "Tresoröffnung und professionelle Safe-Öffnung",
    width: 1024,
    height: 1024,
    category: "sicherheit",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-sicherheitszylinder-einbau.webp",
    alt: "Neuer Sicherheitszylinder beim Einbau Schlüsseldienst Wetzlar",
    title: "Sicherheitszylinder-Einbau und Schließanlagen",
    width: 1024,
    height: 1024,
    category: "schloss",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-panzerriegel-altbau-holztuer.webp",
    alt: "Panzerriegel an Altbau-Holztür und Einbruchschutz Wetzlar",
    title: "Panzerriegel und Einbruchschutz für Altbau",
    width: 1024,
    height: 1024,
    category: "sicherheit",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-einbruchschaden-aufgebohrtes-schloss.webp",
    alt: "Einbruchschaden aufgebohrter Zylinder Schlüsseldienst Wetzlar",
    title: "Einbruchschaden und Soforthilfe und Reparatur",
    width: 1024,
    height: 1024,
    category: "schloss",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-notdienst-werkzeug-haustuer-nacht.webp",
    alt: "Notdienst-Werkzeugkoffer vor Haustür bei Nacht Schlüsseldienst Wetzlar",
    title: "24/7 Notdienst und Werkzeug vor Haustür bei Nacht",
    width: 1024,
    height: 1024,
    category: "tueroeffnung",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-tuerschliesser-gewerbetuer-montage.webp",
    alt: "Türschließer-Montage an Gewerbetür Schlüsseldienst Wetzlar",
    title: "Türschließer und Montage an Gewerbetür",
    width: 1024,
    height: 1024,
    category: "montage",
  },
];

/** Vertrauensbildende Bilder (Trust, Werkstatt, Produkte) */
export const generatedTrustImages: ImageAsset[] = [
  {
    src: "/images/generated/schluesseldienst-wetzlar-einsatzfahrzeug-profi-werkzeug.webp",
    alt: "Einsatzfahrzeug mit Profi-Werkzeug Schlüsseldienst Wetzlar",
    title: "Einsatzfahrzeug und professionelle Ausstattung",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-werkstatt-schluesselwand.webp",
    alt: "Werkstatt mit Schlüsselwand und Fräsmaschine Schlüsseldienst Wetzlar",
    title: "Werkstatt und Schlüsselwand mit Fräsmaschine",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-neues-sicherheitsschloss-schluessel.webp",
    alt: "Neues Sicherheitsschloss mit Schlüsseln Schlüsseldienst Wetzlar",
    title: "Neues Sicherheitsschloss und frisch eingebaut",
    width: 1024,
    height: 1024,
    category: "schloss",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-sicherheitsprodukte-schliessanlagen-vitrine.webp",
    alt: "Vitrine mit Sicherheitsprodukten und Schließanlagen Schlüsseldienst Wetzlar",
    title: "Vitrine und Sicherheitsprodukte und Schließanlagen",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
];

/** Makro-/Technik-Bilder + Handwerk */
export const generatedMacroImages: ImageAsset[] = [
  {
    src: "/images/generated/schluesseldienst-wetzlar-sicherheitszylinder-querschnitt-makro.webp",
    alt: "Sicherheitszylinder Querschnitt Makro und Stiftzuhaltung Schlüsseldienst Wetzlar",
    title: "Sicherheitszylinder und technischer Querschnitt",
    width: 1024,
    height: 1024,
    category: "schloss",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-schluessel-fraesen-cnc-maschine.webp",
    alt: "Schlüssel fräsen auf CNC-Maschine Schlüsseldienst Wetzlar",
    title: "CNC-Schlüsselfräsung und Präzisionstechnik",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-autoschluessel-programmierung-transponder.webp",
    alt: "Autoschlüssel-Programmierung Transponder-Chip Schlüsseldienst Wetzlar",
    title: "Autoschlüssel und Transponder-Programmierung",
    width: 1024,
    height: 1024,
    category: "schluessel",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-alte-neue-schluessel-handwerkskunst.webp",
    alt: "Alte Buntbart-Schlüssel neben modernem Sicherheitsschlüssel Handwerkskunst",
    title: "Handwerkskunst und traditionelle und moderne Schlüssel",
    width: 1024,
    height: 1024,
    category: "schluessel",
  },
];

/** Lokale Präsenz / Einsatzgebiet-Bilder */
export const generatedLocalImages: ImageAsset[] = [
  {
    src: "/images/generated/schluesseldienst-wetzlar-einsatzfahrzeug-nachtfahrt.webp",
    alt: "Einsatzfahrzeug bei Nachtfahrt in deutscher Altstadt Schlüsseldienst Wetzlar",
    title: "Nachtfahrt und schnelle Anfahrt zum Notdienst-Einsatz",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
  {
    src: "/images/generated/schluesseldienst-wetzlar-einsatzfahrzeug-stadtpanorama.webp",
    alt: "Einsatzfahrzeug vor Stadtpanorama Schlüsseldienst Wetzlar Einsatzgebiet",
    title: "Einsatzgebiet und Stadtpanorama mit Fahrzeug",
    width: 1024,
    height: 1024,
    category: "werkstatt",
  },
];

// ═══════════════════════════════════════════════════════════
//  ALLE BILDER (flacher Export für Batch-Operationen)
// ═══════════════════════════════════════════════════════════

export const allImages: ImageAsset[] = [
  ...teamImages,
  ...werkstattImages,
  ...maschinenImages,
  ...tueroeffnungImages,
  ...schlossImages,
  ...schluesselImages,
  ...sicherheitImages,
  ...montageImages,
  ...auszeichnungImages,
  ...generatedHeroImages,
  ...generatedServiceImages,
  ...generatedTrustImages,
  ...generatedMacroImages,
  ...generatedLocalImages,
];

/**
 * Gibt ein Bild anhand seines Dateinamens (ohne Pfad) zurück.
 * Verwendung: getImageByFilename("mina-saad-inhaber-selfie-schluesseldienst-wetzlar.jpeg")
 */
export function getImageByFilename(filename: string): ImageAsset | undefined {
  return allImages.find((img) => img.src.endsWith(filename));
}

/**
 * Gibt alle Bilder einer Kategorie zurück.
 * Verwendung: getImagesByCategory("team")
 */
export function getImagesByCategory(category: ImageCategory): ImageAsset[] {
  return allImages.filter((img) => img.category === category);
}
