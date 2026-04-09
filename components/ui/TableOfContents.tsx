"use client";

import { useEffect, useState } from "react";
import { ChevronRight, List } from "lucide-react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ selector = "main" }: { selector?: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Generate headings dynamically from DOM after render
    // Use a small timeout to ensure content is fully mounted in React
    const timeout = setTimeout(() => {
      const elements = Array.from(document.querySelector(selector)?.querySelectorAll("h2, h3") || []);
      
      const parsedHeadings = elements.map((el) => {
        if (!el.id) {
          el.id = el.textContent?.toLowerCase().replace(/[^a-z0-9äöüß]+/g, "-").replace(/(^-|-$)+/g, "") || "section";
        }
        return {
          id: el.id,
          text: el.textContent || "",
          level: Number(el.tagName.charAt(1)), // 2 for H2, 3 for H3
        };
      });

      setHeadings(parsedHeadings);

      // Setup intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0px 0px -80% 0px" } // trigger when near top
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [selector]);

  // Don't render for very short pages without enough headings
  if (headings.length < 2) return null;

  return (
    <div className="my-8 rounded-2xl bg-slate-50/80 border border-slate-100 p-6 shadow-sm xl:sticky xl:top-32 xl:my-0 xl:w-72 xl:shrink-0 transition-all">
      <div 
        className="flex items-center justify-between cursor-pointer xl:cursor-default active:scale-[0.98] xl:active:scale-100 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
          <List className="h-4 w-4 text-[var(--color-red-500)]" />
          Inhaltsverzeichnis
        </h3>
        <ChevronRight className={cn("h-4 w-4 text-slate-500 transition-transform xl:hidden", isOpen && "rotate-90")} />
      </div>

      <nav 
        className={cn(
          "flex flex-col gap-2.5 overflow-hidden transition-all duration-300 xl:mt-5 xl:max-h-none xl:opacity-100",
          isOpen ? "mt-5 max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(heading.id);
              if (el) {
                // Adjust scroll position for sticky header offset
                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
              setIsOpen(false);
            }}
            className={cn(
              "text-sm leading-snug transition-colors hover:text-[var(--color-red-500)] relative block",
              activeId === heading.id ? "font-bold text-[var(--color-red-500)]" : "text-slate-600",
              heading.level === 3 ? "pl-4 text-sm" : ""
            )}
          >
            {activeId === heading.id && (
              <span className="absolute -left-3 top-[0.4rem] h-1.5 w-1.5 rounded-full bg-[var(--color-red-500)]" />
            )}
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
