import Link from "next/link";
import { LocationData } from "@/lib/data/locations";
import { allLocations } from "@/lib/data/allLocations";

export default function LocalNeighbors({ city }: { city: LocationData }) {
    if (!city.neighbors || city.neighbors.length === 0) return null;

    return (
        <section aria-labelledby="nachbarn-heading" className="bg-transparent relative px-[var(--section-px)] py-[var(--space-16)] border-t border-[var(--border-subtle)]">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-xl z-[-1]"></div>
            <div className="mx-auto max-w-4xl text-center relative z-10">
                <h2 id="nachbarn-heading" className="text-xl font-bold text-[var(--text-primary)] mb-6">
                    Wir sind auch in Ihrer direkten Nachbarschaft schnell vor Ort:
                </h2>
                <nav aria-label="Benachbarte Einsatzgebiete" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                    {city.neighbors.map((neighborSlug) => {
                        const neighbor = allLocations.find(l => l.slug === neighborSlug);
                        if (!neighbor) return null;
                        return (
                            <Link key={neighbor.id} href={`/${neighbor.slug}`} className="text-[var(--text-secondary)] font-medium hover:text-[var(--color-red-500)] underline decoration-[var(--border-subtle)] underline-offset-4 hover:decoration-[var(--color-red-500)] transition-colors">
                                Schlüsseldienst {neighbor.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </section>
    );
}
