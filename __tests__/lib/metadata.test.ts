import { describe, it, expect } from "vitest";
import { generateSharedMetadata } from "@/lib/metadata";

describe("metadata.ts", () => {
    describe("generateSharedMetadata", () => {
        it("generates correct structured metadata for a standard page", () => {
            const meta = generateSharedMetadata({
                title: "Preise",
                description: "Transparente Festpreise für Türöffnungen ab 50€.",
                path: "/preise",
            });

            // Canonical should NOT have trailing slash for non-root paths per the logic
            expect(meta.alternates?.canonical).toBe("https://wetzlar-schluesseldienst.de/preise");
            expect(meta.alternates?.languages?.["de-DE"]).toBe("https://wetzlar-schluesseldienst.de/preise");
            
            // Should append the suffix if exactTitle is default (false)
            expect(meta.title).toBe("Preise | MS Schlüsseldienst Wetzlar");
            expect(meta.description).toBe("Transparente Festpreise für Türöffnungen ab 50€.");

            // Indexable by default
            expect(meta.robots?.index).toBe(true);
            expect(meta.robots?.follow).toBe(true);

            // OpenGraph properties
            expect(meta.openGraph?.title).toBe("Preise");
            expect(meta.openGraph?.url).toBe("https://wetzlar-schluesseldienst.de/preise");
        });

        it("handles exactTitle prop correctly", () => {
            const meta = generateSharedMetadata({
                title: "MS Schlüsseldienst Wetzlar",
                description: "Notdienst Homepage",
                path: "/",
                exactTitle: true,
            });

            expect(meta.title).toBe("MS Schlüsseldienst Wetzlar");
            expect(meta.alternates?.canonical).toBe("https://wetzlar-schluesseldienst.de");
        });

        it("handles noindex prop correctly for protected/legal routes", () => {
            const meta = generateSharedMetadata({
                title: "Impressum",
                description: "Rechtliche Hinweise",
                path: "/impressum",
                noindex: true,
            });

            expect(meta.robots?.index).toBe(false);
            expect(meta.robots?.follow).toBe(false);
            // Even Google bot should be restricted
            // @ts-ignore - The structure is known but generic TS types might not map perfectly in standard Next types
            expect(meta.robots?.googleBot?.index).toBe(false);
        });
    });
});
