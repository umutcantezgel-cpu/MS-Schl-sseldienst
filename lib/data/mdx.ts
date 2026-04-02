import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Typendefinition für unsere MDX Frontmatter
export interface MDXMetadata {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  readingTime: number;
  featured: boolean;
  tags?: string[];
  image?: string;
}

export interface MDXPost {
  metadata: MDXMetadata;
  slug: string;
  content: string; // The raw markdown content, to be processed by next-mdx-remote
}

// Basis-Ordner für Artikel
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const RATGEBER_DIR = path.join(process.cwd(), 'content', 'ratgeber');

/**
 * Holt alle Dateien aus einem bestimmten Verzeichnis und parst sie via gray-matter
 */
export function getMDXFiles(dirPath: string): MDXPost[] {
  // Verzeichnis erstellen falls nicht vorhanden
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs.readdirSync(dirPath);
  const mdxFiles = files.filter(file => file.endsWith('.mdx'));

  const posts: MDXPost[] = mdxFiles.map(filename => {
    const slug = filename.replace(/\.mdx$/, '');
    const filepath = path.join(dirPath, filename);
    const fileContent = fs.readFileSync(filepath, 'utf8');
    
    // Frontmatter parsen
    const { data, content } = matter(fileContent);
    
    return {
      slug,
      content,
      metadata: data as MDXMetadata
    };
  });

  return posts;
}

/**
 * Sammelt alle MDX-Post für Blog
 */
export function getAllBlogPosts(): MDXPost[] {
  const posts = getMDXFiles(BLOG_DIR);
  // Neueste Beiträge zuerst
  return posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
}

/**
 * Sammelt alle MDX-Post für Ratgeber
 */
export function getAllRatgeberPosts(): MDXPost[] {
  const posts = getMDXFiles(RATGEBER_DIR);
  return posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
}

/**
 * Holt einen spezifichen Blog-Beitrag per Slug
 */
export function getBlogPostBySlug(slug: string): MDXPost | undefined {
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug);
}

/**
 * Holt einen spezifischen Ratgeber-Beitrag per Slug
 */
export function getRatgeberPostBySlug(slug: string): MDXPost | undefined {
  const posts = getAllRatgeberPosts();
  return posts.find(post => post.slug === slug);
}

/**
 * Holt alle gefeaturten Beiträge für z.B. die Startseite
 */
export function getFeaturedBlogPosts(): MDXPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.metadata.featured === true);
}

/**
 * Filtert Blog-Beiträge nach Kategorie
 */
export function getBlogPostsByCategory(category: string): MDXPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.metadata.category === category);
}

/**
 * Sammelt alle verfügbaren Kategorien aus dem Vorhandenen Content
 */
export function getAllBlogCategories(): { name: string, count: number }[] {
  const posts = getAllBlogPosts();
  const categoryCount: Record<string, number> = {};
  
  posts.forEach(post => {
    const cat = post.metadata.category;
    if (cat) {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    }
  });

  return Object.entries(categoryCount).map(([name, count]) => ({
    name,
    count
  }));
}

/**
 * Sammelt alle verfügbaren Kategorien für Ratgeber (Clustering)
 */
export function getAllRatgeberCategories(): { name: string, count: number }[] {
  const posts = getAllRatgeberPosts();
  const categoryCount: Record<string, number> = {};
  
  posts.forEach(post => {
    const cat = post.metadata.category;
    if (cat) {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    }
  });

  return Object.entries(categoryCount).map(([name, count]) => ({
    name,
    count
  }));
}
