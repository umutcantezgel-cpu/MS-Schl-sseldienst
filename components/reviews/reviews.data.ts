export interface Review {
    id: string;
    authorName: string;
    rating: number;
    text: string;
    date: string;
    source: "Google" | "ProvenExpert";
    location: string;
    avatarUrl?: string;
}

export const reviewsData: Review[] = [
    {
        id: "1",
        authorName: "Michael Schneider",
        rating: 5,
        text: "Schlüssel im Schloss abgebrochen, und das am Sonntagabend! Der Monteur war nach genau 18 Minuten in Wetzlar-Naunheim vor Ort. Zylinder wurde professionell getauscht, Preis war exakt wie vorher am Telefon vereinbart. Keine Abzocke, 100% Empfehlung.",
        date: "Vor 1 Woche",
        source: "Google",
        location: "Wetzlar-Naunheim",
        avatarUrl: "https://i.pravatar.cc/150?img=11"
    },
    {
        id: "2",
        authorName: "Sarah Müller",
        rating: 5,
        text: "Ich stand mit Kleinkind vor verschlossener Tür im strömenden Regen (Tür nur zugefallen, Schlüssel steckte steckte drinnen). 15 Minuten später kam die Rettung. Dauerte keine 2 Minuten und die Tür war komplett unbeschädigt offen. Wirklich jeden Cent wert!",
        date: "Vor 2 Wochen",
        source: "Google",
        location: "Wetzlar Altstadt",
        avatarUrl: "https://i.pravatar.cc/150?img=5"
    },
    {
        id: "3",
        authorName: "Thomas Weber",
        rating: 5,
        text: "Habe meinen Autoschlüssel im Kofferraum eingesperrt. Der Fachmann war in Dalheim super schnell da und hat den Wagen ohne einen Kratzer schonend geöffnet. Top Ausrüstung, sehr seriöses Auftreten.",
        date: "Vor 1 Monat",
        source: "Google",
        location: "Wetzlar-Dalheim",
        avatarUrl: "https://i.pravatar.cc/150?img=15"
    },
    {
        id: "4",
        authorName: "Julia Riedel",
        rating: 5,
        text: "Sehr kompetente Beratung zum Thema Einbruchschutz für unser Einfamilienhaus in Garbenheim. Wir haben direkt ein komplett neues Schließsystem installieren lassen. Man merkt sofort, dass hier ein Meisterfachbetrieb am Werk ist.",
        date: "Vor 2 Monaten",
        source: "ProvenExpert",
        location: "Wetzlar-Garbenheim",
        avatarUrl: "https://i.pravatar.cc/150?img=9"
    },
    {
        id: "5",
        authorName: "Lukas Wagner",
        rating: 5,
        text: "Mitten in der Nacht nach der Schicht ausgesperrt. Der Kollege war in 20 Minuten da, super freundlich und ruhig, und die Tür war im Handumdrehen auf. Der vereinbarte Nacht-Festpreis wurde strikt eingehalten.",
        date: "Vor 3 Monaten",
        source: "Google",
        location: "Wetzlar-Steindorf",
        avatarUrl: "https://i.pravatar.cc/150?img=33"
    },
    {
        id: "6",
        authorName: "Dr. Andreas Koch",
        rating: 5,
        text: "Unser Bürotresor (Sicherheitsstufe B) ließ sich nicht mehr öffnen - Elektronikschloss defekt. Der Spezialist hat das Problem mit Endoskop und ohne Flex diskret und extrem sauber gelöst. Absoluter Fachmann auf seinem Gebiet.",
        date: "Vor 4 Monaten",
        source: "ProvenExpert",
        location: "Wetzlar-Hermannstein",
        avatarUrl: "https://i.pravatar.cc/150?img=60"
    },
    {
        id: "7",
        authorName: "Marina Schmidt",
        rating: 5,
        text: "Meine Eltern (über 80) haben sich ausgesperrt. Ich habe aus der Ferne diesen Dienstleister angerufen. Er ist extrem empathisch mit meinen Eltern umgegangen und hat alles schnell und zum extrem fairen Preis abgewickelt. Danke!",
        date: "Vor 5 Monaten",
        source: "Google",
        location: "Wetzlar-Niedergirmes",
        avatarUrl: "https://i.pravatar.cc/150?img=42"
    },
    {
        id: "8",
        authorName: "Familie Hoffmann",
        rating: 5,
        text: "Nach einem Einbruchversuch war das alte Schloss komplett zerstört. Nachts um 3 Uhr kam direkt jemand, hat ein Notschloss montiert und uns am nächsten Tag ein hochwertiges ABUS-System eingebaut. Fühlen uns wieder sicher.",
        date: "Vor 6 Monaten",
        source: "Google",
        location: "Wetzlar-Blasbach"
    }
];

export const aggregateRating = {
    ratingValue: 4.9,
    reviewCount: 132,
};
