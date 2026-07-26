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
                    Wenn Sie einen zuverlässigen <strong>Schlüsseldienst {city.name}</strong> suchen, sind Sie bei der Schlüssel Schmiede genau richtig. 
                    Unser engagiertes Team ist als 24h Notdienst rund um die Uhr für Sie im Einsatz. Ein ausgesperrter Zustand oder eine zugefallene Tür 
                    kann jederzeit passieren. Deshalb bieten wir Ihnen eine professionelle <strong>Türöffnung</strong> zum transparenten <strong>Festpreis</strong> an.
                </p>
                <p className="mb-4">
                    Als erfahrener 24/7 Notdienst verstehen wir, dass Schnelligkeit und Präzision entscheidend sind. Unser <strong>Schlüsseldienst {city.name}</strong> 
                    ist in der Regel innerhalb kürzester Zeit bei Ihnen vor Ort (ca. {city.logistics.drivingTimeMinutes} Minuten). Mit unserem <strong>24h Notdienst</strong> 
                    lassen wir Sie niemals im Regen stehen. Wir verwenden modernstes Werkzeug, um Ihre Tür in den allermeisten Fällen komplett ohne Beschädigungen zu öffnen.
                </p>
                <h3 className="text-xl font-bold mb-3">24/7 Notdienst: Fachkompetenz rund um die Uhr</h3>
                <p className="mb-4">
                    Egal ob am Wochenende, an Feiertagen oder mitten in der Nacht: Der <strong>24/7 Notdienst</strong> der Schlüssel Schmiede in {city.name} ist 
                    Ihre sichere Anlaufstelle. Im Gegensatz zu unseriösen Callcentern arbeiten wir als echter Handwerksbetrieb in der Region. Die <strong>Schlüssel Schmiede</strong> 
                    garantiert Ihnen absolute Preis-Transparenz. Schon am Telefon erfahren Sie unseren verbindlichen <strong>Festpreis</strong> für die <strong>Türöffnung</strong> in {city.name}.
                </p>
                <p className="mb-4">
                    Neben der klassischen Türöffnung beraten wir Sie als <strong>Schlüsseldienst {city.name}</strong> auch umfassend zum Thema Einbruchschutz. 
                    Ein sicherer <strong>Schlüssel</strong> und ein modernes Schließsystem sind der beste Schutz für Ihr Zuhause. Vertrauen Sie der <strong>Schlüssel Schmiede</strong> 
                    und profitieren Sie von unserer langjährigen Expertise als lokaler <strong>24h Notdienst</strong>.
                </p>
                <p className="text-sm text-gray-500 mt-8 italic">
                    Hinweis: Diese Seite wurde speziell für {city.name} optimiert, um Ihnen als regionaler Schlüsseldienst und 24/7 Notdienst stets die beste 
                    Türöffnung zum Festpreis anbieten zu können. Schlüssel Schmiede - Ihr 24h Notdienst vor Ort.
                </p>
            </div>
        </section>
    );
}
