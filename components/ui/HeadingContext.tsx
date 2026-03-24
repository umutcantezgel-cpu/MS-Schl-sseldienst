"use client";

import React, { createContext, useContext } from "react";

const HeadingLevelContext = createContext<number>(2);

/**
 * Liefert das aktuelle Überschriften-Level.
 */
export function useHeadingLevel() {
  const level = useContext(HeadingLevelContext);
  // Max H6
  return Math.min(level, 6);
}

interface HeadingLevelProviderProps {
  children: React.ReactNode;
  level?: number;
}

/**
 * Erhöht automatisch das Heading-Level für Kinder (oder setzt es manuell).
 */
export function HeadingLevelProvider({ children, level }: HeadingLevelProviderProps) {
  const currentLevel = useHeadingLevel();
  const nextLevel = level ?? currentLevel + 1;

  return (
    <HeadingLevelContext.Provider value={nextLevel}>
      {children}
    </HeadingLevelContext.Provider>
  );
}
