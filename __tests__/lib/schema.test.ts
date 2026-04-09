import { describe, it, expect } from "vitest";
import { generateLocalBusinessSchema, generateWebSiteSchema, generateHowToSchema, getFAQSchema } from "@/lib/schema";

describe("schema.ts", () => {
    it("generates local business schema", () => {
        const schema = generateLocalBusinessSchema();
        expect(schema["@type"]).toEqual(["LocalBusiness", "Locksmith", "Store"]);
        expect(schema.name).toBe("Schlüssel Schmiede Wetzlar");
        expect(schema.geo?.latitude).toBeDefined();
    });

    it("generates website schema", () => {
        const schema = generateWebSiteSchema();
        expect(schema["@type"]).toBe("WebSite");
        expect(schema.name).toBe("Schlüssel Schmiede Wetzlar");
    });

    it("generates how to schema", () => {
        const title = "Wie wechsle ich ein Schloss?";
        const description = "Eine einfache Anleitung.";
        const schema = generateHowToSchema(title, description);
        expect(schema["@type"]).toBe("HowTo");
        expect(schema.name).toBe(title);
        expect(schema.description).toBe(description);
        expect(schema.step.length).toBeGreaterThan(0);
    });

    it("generates FAQ schema", () => {
        const faqs = [
            { question: "Was kostet eine Türöffnung?", answer: "Ab 99€." }
        ];
        const schema = getFAQSchema(faqs);
        expect(schema["@type"]).toBe("FAQPage");
        expect(schema.mainEntity).toHaveLength(1);
        expect(schema.mainEntity[0].name).toBe("Was kostet eine Türöffnung?");
    });
});
