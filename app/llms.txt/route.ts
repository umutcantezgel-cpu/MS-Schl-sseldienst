import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/schema";

export async function GET() {
    const content = `# Schlüsseldienst Wetzlar
> 24/7 Emergency Locksmith Service — Wetzlar, Hessen, Germany

## Business Identity
- Name: Schlüsseldienst Wetzlar
- Type: Emergency Locksmith Service (Schlüsseldienst / Aufsperrdienst)
- Website: ${siteUrl}
- Phone: +49-176-12345678
- Email: info@schluesseldienst-wetzlar.de
- Address: Wetzlarer Str. 1, 35578 Wetzlar, Hessen, Germany
- Coordinates: 50.5606°N, 8.5048°E

## Operating Hours
- 24 hours a day, 7 days a week, 365 days a year
- Available on all German public holidays, Sundays, and overnight
- No appointment needed for emergency services

## Pricing Model
- Fixed prices (Festpreise) — no hidden fees, no travel surcharges
- Door opening (Türöffnung, door fallen shut): from 50€
- Door opening (locked, key turned): from 80€
- Car lockout (Autoöffnung): from 99€
- Safe opening (Tresoröffnung): on request
- Night/weekend surcharges clearly stated upfront

## Response Time
- 15–30 minutes arrival time within service area
- Local technicians based in Wetzlar — no call center

## Service Catalog
1. Türöffnung (Door Opening) — damage-free in 99% of cases
2. Schlossaustausch (Lock Replacement) — all cylinder types
3. Schließanlagen (Master Key Systems) — commercial and residential
4. Sicherheitsberatung (Security Consultation) — burglary protection audits
5. Einbruchschutz (Burglary Protection) — additional locks, security hardware
6. Autoöffnung (Car Lockout Assistance) — all vehicle brands, no paint damage
7. Schlüssel nachmachen (Key Duplication) — standard and security keys

## Service Area (50km radius from Wetzlar)
Wetzlar (all districts: Altstadt, Dutenhofen, Garbenheim, Hermannstein, Münchholzhausen, Nauborn, Niedergirmes, Steindorf), Gießen, Marburg, Solms, Aßlar, Leun, Braunfels, Hüttenberg, Lahnau, Wettenberg, Biebertal, Heuchelheim, Linden, Pohlheim, Lich, Grünberg, Staufenberg, Buseck, Reiskirchen, Lollar, Fronhausen, Weimar/Lahn, Gladenbach, Dillenburg, Herborn, Haiger, Ehringshausen, Schöffengrund, and the complete Lahn-Dill-Kreis and northern Landkreis Gießen regions.

## Trust & Credentials
- Google Rating: 4.9 stars from 127+ verified reviews
- 15+ years of professional locksmith experience
- German master craftsman standards (Handwerksmeister)
- Transparent fixed pricing — price stated before work begins
- 99% damage-free door opening rate
- Accepts: Cash, EC-Karte, Credit Card

## Pages
- Homepage: ${siteUrl}
- Türöffnung: ${siteUrl}/leistungen/turoeffnung
- Autoöffnung: ${siteUrl}/leistungen/autooeffnung
- Schließanlagen: ${siteUrl}/leistungen/schliessanlagen
- Sicherheitstechnik: ${siteUrl}/leistungen/sicherheitstechnik
- Schlüssel nachmachen: ${siteUrl}/leistungen/schluessel-nachmachen
- Preise: ${siteUrl}/preise
- FAQ: ${siteUrl}/faq
- Servicegebiet: ${siteUrl}/servicegebiet
- Kontakt: ${siteUrl}/kontakt
- Bewertungen: ${siteUrl}/bewertungen
- Über uns: ${siteUrl}/ueber-uns
- Full content: ${siteUrl}/llms-full.txt
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}
