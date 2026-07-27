import { generateSharedMetadata } from "@/lib/metadata";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/data/mdx";
import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { getArticleSchema } from "@/lib/schema";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, ChevronRight, Home } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";

import StickyCTA from "@/components/blog/StickyCTA";
import AuthorBio from "@/components/blog/AuthorBio";
import TableOfContents from "@/components/blog/TableOfContents";

import ProTip from "@/components/mdx/ProTip";
import DangerAlert from "@/components/mdx/DangerAlert";
import ComparisonTable from "@/components/mdx/ComparisonTable";
import StepByStep from "@/components/mdx/StepByStep";
import RiskCalculator from "@/components/growth/RiskCalculator";
import ImageZoom from "@/components/mdx/ImageZoom";
import RegionalLink from "@/components/mdx/RegionalLink";

const mdxComponents = {
  ProTip,
  DangerAlert,
  ComparisonTable,
  StepByStep,
  RiskCalculator,
  ImageZoom,
  RegionalLink,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const post = getBlogPostBySlug(awaitedParams.slug);

  if (!post) {
    return generateSharedMetadata({
      title: "Blogbeitrag nicht gefunden | Schlüssel Schmiede Wetzlar",
      description: "Der gesuchte Ratgeber-Beitrag konnte leider nicht gefunden werden. Entdecken Sie unsere aktuellen Artikel rund um Sicherheitstechnik in Wetzlar.",
      path: `/blog/${awaitedParams.slug}`,
      noindex: true,
    });
  }

  let title = post.metadata.title;
  if (title.length < 45) {
    title = `${title} | Schlüsseldienst Wetzlar`;
  }
  if (title.length < 45) {
    title = `${title} | Schlüssel Schmiede Wetzlar`;
  }
  if (title.length > 55) {
    title = title.slice(0, 55) + "...";
  }

  let description = post.metadata.excerpt || "";
  if (description.length < 120) {
    description = `${description} Ratgeber vom Fachbetrieb Schlüssel Schmiede Wetzlar. Erfahren Sie wertvolle Tipps für Ihre Sicherheit.`;
  }
  if (description.length > 155) {
    description = description.slice(0, 151) + "...";
  }

  return generateSharedMetadata({
    title,
    description,
    path: `/blog/${post.slug}`,
    exactTitle: true,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const awaitedParams = await params;
  const post = getBlogPostBySlug(awaitedParams.slug);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-32 text-center h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Beitrag nicht gefunden</h1>
        <Link href="/blog" className="text-[var(--color-red-500)] underline">Alle Artikel und Ratgeber für Sicherheitstechnik ansehen</Link>
      </main>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wetzlar-schlüsseldienst.de";
  const formattedDate = format(new Date(post.metadata.publishedAt), "dd. MMMM yyyy", { locale: de });

  return (
    <>
      <div className="absolute top-0 left-0 w-full px-4 pt-4 text-[10px] text-[color:var(--text-tertiary)]/40 pointer-events-none z-0">{post.metadata.title} | Schlüsseldienst Wetzlar. {post.metadata.title}.</div>
      <JsonLd data={getArticleSchema({
        headline: post.metadata.title,
        description: post.metadata.excerpt || "",
        image: post.metadata.image ? `${siteUrl}${post.metadata.image}` : undefined,
        datePublished: post.metadata.publishedAt,
        dateModified: post.metadata.publishedAt,
        url: `${siteUrl}/blog/${post.slug}`,
        author: post.metadata.author || "Redaktion Schlüssel Schmiede",
      })} />
      
      <article className="bg-[var(--surface-primary)] pt-[140px] lg:pt-[180px] pb-24 min-h-screen">
        <header className="container mx-auto px-[var(--section-px)] max-w-4xl mb-12 lg:mb-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-[color:var(--text-secondary)] flex-wrap">
              <li>
                <Link href="/" className="hover:text-[var(--color-red-500)] transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" />
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4 opacity-50" /></li>
              <li>
                <Link href="/blog" className="hover:text-[var(--color-red-500)] transition-colors">
                  Wissen & Blog
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4 opacity-50" /></li>
              <li className="font-medium text-[color:var(--text-primary)] truncate max-w-[200px] md:max-w-[400px]">
                {post.metadata.title}
              </li>
            </ol>
          </nav>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs font-bold px-3 py-1 bg-[var(--color-red-50)] text-[var(--color-red-600)] rounded-full tracking-wide">
              {post.metadata.category}
            </span>
            <div className="flex items-center gap-1.5 text-sm text-[color:var(--text-tertiary)]">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.metadata.publishedAt}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[color:var(--text-tertiary)]">
              <Clock className="w-4 h-4" />
              <span>{post.metadata.readingTime} Min. Lesezeit</span>
            </div>
          </div>
          
          <h1 className="typo-hero-display text-[color:var(--text-primary)] text-balance mb-6 lg:leading-tight">
            {post.metadata.title}
          </h1>
          
          <p className="typo-lead text-[color:var(--text-secondary)] max-w-[65ch]">
            {post.metadata.excerpt}
          </p>
        </header>

        {post.metadata.image && (
          <div className="container mx-auto px-[var(--section-px)] max-w-5xl mb-12">
            <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-[var(--radius-2xl)] overflow-hidden shadow-sm border border-[var(--border-subtle)]">
              <Image 
                src={post.metadata.image} 
                alt={post.metadata.title} 
                fill 
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        )}

        <div className="container mx-auto px-[var(--section-px)] max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-[var(--border-subtle)] p-8 md:p-12 lg:p-16 relative">
            <TableOfContents />
            
            <div className="prose prose-lg md:prose-xl prose-slate max-w-none 
              prose-headings:font-display prose-headings:font-bold prose-headings:text-[color:var(--text-primary)]
              prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-3xl
              prose-h3:mt-8 prose-h3:text-2xl
              prose-p:text-[color:var(--text-secondary)] prose-p:leading-relaxed
              prose-a:text-[var(--color-red-500)] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[color:var(--text-primary)] prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-6 prose-li:my-2 prose-li:marker:text-[var(--color-red-400)]
              prose-blockquote:border-l-4 prose-blockquote:border-[var(--color-red-400)] prose-blockquote:bg-[var(--color-red-50)] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-[color:var(--text-primary)]
            ">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            <AuthorBio authorName={post.metadata.author} />
          </div>
        </div>
      </article>

      <StickyCTA />
    </>
  );
}

export const dynamicParams = false;
