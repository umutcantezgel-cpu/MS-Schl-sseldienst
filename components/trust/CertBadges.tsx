"use client";

import { useRef, useEffect, useState } from"react";

const certifications = [
  { name:"Handwerkskammer Wetzlar", initials:"HWK" },
  { name:"Innung für Metalltechnik", initials:"IM" },
  { name:"Meisterbetrieb", initials:"MB" },
];

export default function CertBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-wrap items-center justify-center gap-6 py-8">
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="flex flex-col items-center gap-2 transition-all duration-[600ms]"
          style={{
            filter: isVisible ?"grayscale(0)" :"grayscale(1)",
            opacity: isVisible ? 1 : 0.5,
          }}
        >
          <div className="w-16 h-16 rounded-full bg-[var(--border-subtle)] border-2 border-[var(--border-subtle)] flex items-center justify-center">
            <span className="text-lg font-bold text-[var(--text-secondary)]">
              {cert.initials}
            </span>
          </div>
          <span className="text-xs font-medium text-[var(--text-tertiary)] text-center max-w-[100px]">
            {cert.name}
          </span>
        </div>
      ))}
    </div>
  );
}
