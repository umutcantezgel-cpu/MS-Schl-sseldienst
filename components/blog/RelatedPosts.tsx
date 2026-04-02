import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { MDXPost } from "@/lib/data/mdx";

interface Props {
  title?: string;
  posts: MDXPost[];
  type?: "blog" | "ratgeber";
}

export default function RelatedPosts({ title = "Könnte Sie auch interessieren", posts, type = "blog" }: Props) {
  if (!posts || posts.length === 0) return null;

  // Limit to 3 posts
  const displayPosts = posts.slice(0, 3);
  const basePath = type === "blog" ? "/blog" : "/ratgeber";

  return (
    <section className="py-20 lg:py-24 bg-[var(--surface-primary)] border-t border-[var(--border-subtle)]">
      <div className="container mx-auto px-[var(--section-px)] max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[color:var(--text-primary)] mb-2">
              {title}
            </h2>
            <p className="text-[color:var(--text-secondary)] text-lg">
              Aktuelle Fachartikel & Expertenwissen
            </p>
          </div>
          <Link 
             href={basePath} 
             className="inline-flex items-center gap-2 text-[var(--color-red-500)] font-bold hover:underline"
          >
            Alle ansehen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`${basePath}/${post.slug}`} 
              className="flex flex-col bg-white border border-[var(--border-subtle)] rounded-[var(--radius-xl)] p-6 md:p-8 hover:shadow-xl hover:border-[var(--color-red-500)] hover:-translate-y-1 transition-all duration-300 group"
            >
               <div className="mb-4">
                 <span className="text-xs font-bold px-3 py-1 bg-[var(--color-red-50)] text-[var(--color-red-600)] rounded-full uppercase tracking-wider">
                   {post.metadata.category || type}
                 </span>
               </div>
               <h3 className="text-xl font-bold text-[color:var(--text-primary)] mb-3 group-hover:text-[var(--color-red-500)] transition-colors line-clamp-2">
                 {post.metadata.title}
               </h3>
               <p className="text-[color:var(--text-secondary)] mb-6 flex-1 line-clamp-3">
                 {post.metadata.excerpt}
               </p>
               <div className="flex items-center gap-2 text-sm font-bold text-[color:var(--text-primary)] group-hover:text-[var(--color-red-500)] mt-auto transition-colors">
                 Weiterlesen <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
               </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
