"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type ViewportType = "mobile" | "tablet" | "desktop";

export interface AppContextType {
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
  viewport: ViewportType;
  scrollY: number;
  isScrolledPast: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [viewport, setViewport] = useState<ViewportType>("desktop");
  const [scrollY, setScrollY] = useState(0);
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewport("mobile");
      } else if (width < 1024) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    };
    
    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let throttleTimer: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setIsScrolledPast(currentScrollY > 100);
        throttleTimer = null;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  const toggleMobileNav = useCallback(() => {
    setIsMobileNavOpen(prev => !prev);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isMobileNavOpen,
        toggleMobileNav,
        viewport,
        scrollY,
        isScrolledPast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
