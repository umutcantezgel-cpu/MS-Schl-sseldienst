"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // 1. Finde alle H2 und H3 innerhalb der .prose Klasse
    const elements = Array.from(document.querySelectorAll(".prose h2, .prose h3"));
    
    // 2. Weise jedem Heading eine ID zu, falls es keine hat
    const extractedHeadings: TOCItem[] = elements.map((elem, index) => {
      let id = elem.id;
      if (!id) {
        id = `heading-${index}`;
        elem.id = id;
      }
      return {
        id,
        text: elem.textContent || "",
        level: elem.tagName.toLowerCase() === "h2" ? 2 : 3,
      };
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(extractedHeadings);

    // 3. Intersection Observer Setup um aktives Element zu tracken
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" } // Aktivierung etwas versetzt zur Mitte
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) {
    return null; // Zeige nichts, falls der Artikel keine Überschriften hat
  }

  return (
    <div className="bg-[var(--surface-elevated)] p-6 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] mb-10">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-[var(--color-red-500)]" />
        <h2 className="font-bold text-lg m-0">Inhalt</h2>
      </div>
      <ul className="space-y-3 m-0 p-0 text-sm list-none">
        {headings.map((heading) => (
          <li 
            key={heading.id} 
            className={`m-0 p-0 transition-colors ${heading.level === 3 ? "ml-4 text-[color:var(--text-tertiary)]" : "font-medium text-[color:var(--text-secondary)]"}`}
          >
            <a 
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`hover:text-[var(--color-red-500)] no-underline ${activeId === heading.id ? "text-[var(--color-red-500)]" : ""}`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
