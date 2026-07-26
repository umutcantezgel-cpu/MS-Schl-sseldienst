import { LocationData } from "@/lib/data/locations";

export default function SeoContentBlock({ city }: { city: LocationData }) {
    const hash = city.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const variantIdx = hash % 3;
    
    // We heavily use the H1 and Title keywords here to fix Seobility warnings
    // Title keywords: Schlüsseldienst, [city.name], 24h, Notdienst, Schlüssel, Schmiede
    // H1 keywords: Schlüsseldienst, [city.name], Türöffnung, Festpreis, 24/7, Notdienst
    
    return (
        <section className="py-[var(--section-py)] bg-white border-t border-[var(--border-subtle)] prose prose-slate max-w-none px-[var(--section-px)]">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Ihr vertrauenswürdiger Schlüsseldienst {city.name} – Türöffnung zum garantierten Festpreis</h2>
                <p className="mb-4">
                    Wenn Sie einen zuverlässigen <span className="font-semibold text-[color:var(--text-primary)]">Schlüsseldienst {city.name}</span> suchen, sind Sie bei der Schlüssel Schmiede genau richtig. 
                    Unser engagiertes Team ist als 24h Notdienst rund um die Uhr für Sie im Einsatz. Ein ausgesperrter Zustand oder eine zugefallene Tür 
                    kann jederzeit passieren. Deshalb bieten wir Ihnen eine professionelle <span className="font-semibold text-[color:var(--text-primary)]">Türöffnung</span> zum transparenten <span className="font-semibold text-[color:var(--text-primary)]">Festpreis</span> an.
                </p>
                <p className="mb-4">
                    Als erfahrener 24/7 Notdienst verstehen wir, dass Schnelligkeit und Präzision entscheidend sind. Unser <span className="font-semibold text-[color:var(--text-primary)]">Schlüsseldienst {city.name}</span> 
                    ist in der Regel innerhalb kürzester Zeit bei Ihnen vor Ort (ca. {city.logistics.drivingTimeMinutes} Minuten). Mit unserem <span className="font-semibold text-[color:var(--text-primary)]">24h Notdienst</span> 
                    lassen wir Sie niemals im Regen stehen. Wir verwenden modernstes Werkzeug, um Ihre Tür in den allermeisten Fällen komplett ohne Beschädigungen zu öffnen.
                </p>
                <h3 className="text-xl font-bold mb-3">24/7 Notdienst: Fachkompetenz rund um die Uhr</h3>
                <p className="mb-4">
                    Egal ob am Wochenende, an Feiertagen oder mitten in der Nacht: Der <span className="font-semibold text-[color:var(--text-primary)]">24/7 Notdienst</span> der Schlüssel Schmiede in {city.name} ist 
                    Ihre sichere Anlaufstelle. Im Gegensatz zu unseriösen Callcentern arbeiten wir als echter Handwerksbetrieb in der Region. Die <span className="font-semibold text-[color:var(--text-primary)]">Schlüssel Schmiede</span> 
                    garantiert Ihnen absolute Preis-Transparenz. Schon am Telefon erfahren Sie unseren verbindlichen <span className="font-semibold text-[color:var(--text-primary)]">Festpreis</span> für die <span className="font-semibold text-[color:var(--text-primary)]">Türöffnung</span> in {city.name}.
                </p>
                <p className="mb-4">
                    Neben der klassischen Türöffnung beraten wir Sie als <span className="font-semibold text-[color:var(--text-primary)]">Schlüsseldienst {city.name}</span> auch umfassend zum Thema Einbruchschutz. 
                    Ein sicherer <span className="font-semibold text-[color:var(--text-primary)]">Schlüssel</span> und ein modernes Schließsystem sind der beste Schutz für Ihr Zuhause. Vertrauen Sie der <span className="font-semibold text-[color:var(--text-primary)]">Schlüssel Schmiede</span> 
                    und profitieren Sie von unserer langjährigen Expertise als lokaler <span className="font-semibold text-[color:var(--text-primary)]">24h Notdienst</span>.
                </p>
                <p className="text-sm text-gray-500 mt-8 italic">
                    Hinweis: Diese Seite wurde speziell für {city.name} optimiert, um Ihnen als regionaler Schlüsseldienst und 24/7 Notdienst stets die beste 
                    Türöffnung zum Festpreis anbieten zu können. Schlüssel Schmiede - Ihr 24h Notdienst vor Ort.
                </p>
            </div>
        </section>
    );
}
