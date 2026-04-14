import { NextResponse } from "next/server";
import { siteUrl } from "@/lib/schema";
import { cities } from "@/lib/localData";
import { getAllBlogPosts } from "@/lib/data/mdx";

// AI-priority-ordered sitemap und pages listed in order of importance for AI extraction
export async function GET() {
    const pages = [
        { loc: "", priority: "1.0", changefreq: "weekly" },
        { loc: "/llms.txt", priority: "1.0", changefreq: "weekly" },
        { loc: "/llms-full.txt", priority: "1.0", changefreq: "weekly" },
        { loc: "/ai.txt", priority: "1.0", changefreq: "weekly" },
        { loc: "/leistungen/notdienst", priority: "0.95", changefreq: "monthly" },
        { loc: "/leistungen/turoeffnung", priority: "0.95", changefreq: "monthly" },
        { loc: "/leistungen/autooeffnung", priority: "0.90", changefreq: "monthly" },
        { loc: "/leistungen/schliessanlagen", priority: "0.90", changefreq: "monthly" },
        { loc: "/leistungen/sicherheitstechnik", priority: "0.90", changefreq: "monthly" },
        { loc: "/leistungen/schluessel-nachmachen", priority: "0.90", changefreq: "monthly" },
        { loc: "/preise", priority: "0.85", changefreq: "weekly" },
        { loc: "/faq", priority: "0.85", changefreq: "monthly" },
        { loc: "/servicegebiet", priority: "0.80", changefreq: "monthly" },
        { loc: "/bewertungen", priority: "0.75", changefreq: "weekly" },
        { loc: "/kontakt", priority: "0.70", changefreq: "monthly" },
        { loc: "/ueber-uns", priority: "0.65", changefreq: "monthly" },
        ...cities.map((city) => ({
            loc: `/${city.slug}`,
            priority: "0.70",
            changefreq: "monthly",
        })),
        ...getAllBlogPosts().map((post) => ({
            loc: `/blog/${post.slug}`,
            priority: "0.65",
            changefreq: "monthly",
        }))
    ];

    const lastmod = new Date().toISOString().split("T")[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${siteUrl}${p.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}
