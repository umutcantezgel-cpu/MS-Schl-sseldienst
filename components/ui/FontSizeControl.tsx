"use client";

import { useState, useEffect } from "react";
import { Type } from "lucide-react";

type FontSize = "normal" | "large" | "xlarge";

const FONT_SIZE_MAP: Record<FontSize, string> = {
  normal: "16px",
  large: "18px",
  xlarge: "20px",
};

const FONT_SIZE_LABELS: Record<FontSize, string> = {
  normal: "A",
  large: "A+",
  xlarge: "A++",
};

const COOKIE_KEY = "font_size_pref";

function getFontSizeCookie(): FontSize {
  if (typeof document === "undefined") return "normal";
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_KEY}=`));
  if (cookie) {
    const val = cookie.split("=")[1] as FontSize;
    if (val in FONT_SIZE_MAP) return val;
  }
  return "normal";
}

function setFontSizeCookie(size: FontSize) {
  document.cookie = `${COOKIE_KEY}=${size};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

/**
 * Font size control widget. Sets font-size on <html> element.
 * Since all typography uses rem, the entire site scales proportionally.
 */
export default function FontSizeControl() {
  const [size, setSize] = useState<FontSize>("normal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = getFontSizeCookie();
    setSize(saved);
    document.documentElement.style.fontSize = FONT_SIZE_MAP[saved];
  }, []);

  const cycle = () => {
    const order: FontSize[] = ["normal", "large", "xlarge"];
    const next = order[(order.indexOf(size) + 1) % order.length];
    setSize(next);
    setFontSizeCookie(next);
    document.documentElement.style.fontSize = FONT_SIZE_MAP[next];
  };

  if (!mounted) return null;

  return (
    <button
      onClick={cycle}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[color:var(--text-secondary)] hover:bg-[var(--surface-secondary)] transition-colors"
      aria-label={`Schriftgröße: ${size === "normal" ? "Normal" : size === "large" ? "Groß" : "Sehr groß"}. Klicken zum Wechseln.`}
      title="Schriftgröße anpassen"
    >
      <Type className="w-4 h-4" />
      <span className="font-medium">{FONT_SIZE_LABELS[size]}</span>
    </button>
  );
}
