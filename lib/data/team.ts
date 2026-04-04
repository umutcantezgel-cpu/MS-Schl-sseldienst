import { TeamMember, createId, createSlug, Slug } from "../types";

export const teamMembers: TeamMember[] = [
  {
    id: createId("team-01"),
    slug: createSlug("mustafa-s"),
    name: "Mustafa S.",
    role: "Geschäftsführer & Einsatzleiter",
    department: "Geschäftsleitung",
    bio: "Mustafa leitet den Schlüssel Schmiede Wetzlar mit über 15 Jahren Erfahrung in der Sicherheitstechnik. Er ist spezialisiert auf komplexe Schließanlagen und Tresoröffnungen. Seine Philosophie: Ehrliche Preise und fachgerechte, zerstörungsfreie Arbeit für jeden Kunden.",
    shortBio: "Gründer und Experte für zertifizierte Schließanlagen.",
    image: "/team/mustafa.jpg", // Placeholder
    skills: ["Schließanlagen", "Tresoröffnung", "Sicherheitsberatung"],
    order: 1
  },
  {
    id: createId("team-02"),
    slug: createSlug("lukas-m"),
    name: "Lukas M.",
    role: "Sicherheitstechniker",
    department: "Technik",
    bio: "Lukas ist unser Spezialist für elektronische Zutrittskontrollen und Smart-Home-Sicherheitssysteme. Er bildet sich ständig weiter, um modernste Schließzylinder fachgerecht zu montieren und Einbrüche durch Prävention zu vereiteln.",
    shortBio: "Spezialist für moderne Zutrittskontrollen und Smart Locks.",
    image: "/team/lukas.jpg",
    skills: ["Smart Home", "Einbruchschutz", "Elektronische Zylinder"],
    order: 2
  },
  {
    id: createId("team-03"),
    slug: createSlug("ahmet-y"),
    name: "Ahmet Y.",
    role: "Monteur 24/7 Notdienst",
    department: "Notdienst",
    bio: "Ahmet ist rund um die Uhr auf den Straßen im Lahn-Dill-Kreis im Einsatz. Er zeichnet sich durch seine extrem schnelle Anfahrtszeit und seine hohe Erfolgsquote bei zerstörungsfreien Türöffnungen (99%) aus.",
    shortBio: "Rund um die Uhr im Einsatz für schnelle Türöffnungen.",
    image: "/team/ahmet.jpg",
    skills: ["Zerstörungsfreie Öffnung", "Autoöffnung", "Schnellreparaturen"],
    order: 3
  },
  {
    id: createId("team-04"),
    slug: createSlug("sven-w"),
    name: "Sven W.",
    role: "Monteur Notdienst & Autoöffnungen",
    department: "Notdienst",
    bio: "Sven öffnet jedes Fabrikat, von älteren PKWs bis zu hochmodernen SUVs, ohne Lack- oder Türschäden. Zudem sichert er Einbruchsschäden direkt mitten in der Nacht fachgerecht ab.",
    shortBio: "Spezialisiert auf beschädigungsfreie Autoöffnungen.",
    image: "/team/sven.jpg",
    skills: ["KFZ-Öffnung", "Einbruchschadenbeseitigung", "Notfallhilfe"],
    order: 4
  },
  {
    id: createId("team-05"),
    slug: createSlug("julia-b"),
    name: "Julia B.",
    role: "Kundenberaterin & Disposition",
    department: "Büro",
    bio: "Julia koordiniert unsere Notfalleinsätze und berät Anrufer in Stresssituationen ruhig und kompetent. Sie klärt bereits am Telefon transparent über unsere Festpreise auf und sorgt für effiziente Routenplanung.",
    shortBio: "Koordiniert Einsätze und sorgt für transparente Preisauskünfte.",
    image: "/team/julia.jpg",
    skills: ["Disposition", "Kundenservice", "Beratung"],
    order: 5
  },
  {
    id: createId("team-06"),
    slug: createSlug("felix-k"),
    name: "Felix K.",
    role: "Auszubildender Sicherheitstechnik",
    department: "Technik",
    bio: "Felix lernt das Handwerk des Sicherheitstechnikers von der Pike auf. Unter Aufsicht der Einsatzleiter begleitet er Notdienste und lernt die Feinmechanik moderner Hochsicherheitszylinder kennen.",
    shortBio: "Nachwuchstalent in der handwerklichen Schließtechnik.",
    image: "/team/felix.jpg",
    skills: ["Mechanik", "Zylindermontage", "Wartung"],
    order: 6
  }
];

// ==========================================
// GETTER FUNKTIONEN (Type Safe)
// ==========================================

export function getAllTeamMembers(): TeamMember[] {
  return [...teamMembers].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getTeamMemberBySlug(slug: Slug | string): TeamMember | undefined {
  if (!slug || typeof slug !== "string") {
    console.warn("[WARN] getTeamMemberBySlug called with invalid slug.");
    return undefined;
  }
  return teamMembers.find(t => t.slug === slug);
}

export function getTeamMembersByDepartment(department: string): TeamMember[] {
  if (!department) return [];
  return teamMembers.filter(t => t.department === department);
}

export function getTeamByOrder(): TeamMember[] {
  return getAllTeamMembers();
}

if (process.env.NODE_ENV === "development") {
  const slugs = teamMembers.map(t => t.slug);
  const duplicates = slugs.filter((item, index) => slugs.indexOf(item) !== index);
  if (duplicates.length > 0) {
    console.error("[ERROR] Duplikate in teamMembers Slugs gefunden:", duplicates);
  }
  teamMembers.forEach(t => {
    if (!t.id || !t.slug || !t.name) {
      console.warn(`[WARN] TeamMember ${t.name || "UNBEKANNT"} fehlen erforderliche Felder.`);
    }
  });
}
