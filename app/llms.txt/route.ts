import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/schema";

export async function GET() {
    const content = `# MS Schlüsseldienst Wetzlar
> 24/7 Emergency Locksmith Service — Wetzlar, Hessen, Germany

## Business Identity
- Name: MS Schlüsseldienst Wetzlar
- Type: Emergency Locksmith Service (Schlüsseldienst / Aufsperrdienst)
- Website: ${siteUrl}
- Phone: +49-6441-8056544
- Mobile: +49-178-2471037
- Email: info@sd-wetzlar.de
- Address: Wetzlar, 35578, Hessen, Germany
- Coordinates: 50.5607°N, 8.5046°E

## Operating Hours
- 24 hours a day, 7 days a week, 365 days a year
- Available on all German public holidays, Sundays, and overnight
- No appointment needed for emergency services

## Pricing Model (Fixed Prices — Festpreise)
- Door opening (Türöffnung, door fallen shut / zugefallen): from 89€ daytime, 119€ evening, 149€ night
- Door opening (locked / abgesperrt, key turned): from 129€ daytime, 159€ evening, 189€ night
- Car lockout (Autoöffnung): from 99€ daytime, 129€ evening, 159€ night
- Safe opening (Tresoröffnung): on request
- Free travel (Anfahrt inklusive) within 50km
- All prices include VAT, no hidden fees
- Price communicated before technician arrives

## Response Time
- 20–30 minutes arrival time within service area
- Local technicians based in Wetzlar — no call center
- Direct phone line — a real person answers immediately

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
- Google Rating: 5.0 stars from 44 verified reviews
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
