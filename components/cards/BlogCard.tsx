import Link from "next/link";
import { BlogPost } from "@/lib/types";

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className = "" }: BlogCardProps) {
  // ISO-Date Parsing
  const dateObj = new Date(post.publishedAt);
  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(dateObj);

  return (
    <article className={`flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 ${className}`}>
      
      {/* Blog Image Placeholder / Skeleton Area */}
      <div className="w-full h-48 bg-gray-200 relative">
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded">
          {post.category || "News"}
        </div>
      </div>

      <div className="flex flex-col p-6 flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <time dateTime={post.publishedAt}>{formattedDate}</time>
          {post.readingTime && (
            <span>• {post.readingTime} Min. Lesezeit</span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
          <Link 
            href={`/blog/${post.slug}`} 
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm flex items-center"
          >
            Artikel lesen <span className="sr-only">: {post.metadata?.title}</span>
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
