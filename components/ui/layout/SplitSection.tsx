import React from "react";
import { cn } from "@/lib/utils";

export interface SplitSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: "50/50" | "60/40" | "40/60";
  reversed?: boolean;
  imageSide?: "left" | "right";
  children: React.ReactNode;
}

const ratioClasses = {
  "50/50": "md:grid-cols-2",
  "60/40": "md:grid-cols-[60%_40%]",
  "40/60": "md:grid-cols-[40%_60%]",
};

/**
 * <SplitSection>
 * Asymmetrisches Layout für Text-Bild-Kombinationen.
 * Auf Mobile: 1 Spalte (automatisch gestapelt).
 * Auf Desktop: Zickzack oder klassischer Grid-Split.
 */
export const SplitSection = React.forwardRef<HTMLDivElement, SplitSectionProps>(
  (
    {
      ratio = "50/50",
      reversed = false,
      imageSide = "right",
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Wenn 'reversed' aktiv ist, tausche die logische Reihenfolge in Flex/Grid via 'order' (handled in css logic) oder wir ordnen die rows.
    // Ein einfacherer Weg in Tailwind ist direction rtl oder flex-row-reverse zu nutzen.
    // Aber bei Grid ist auto-flow row, hier nutzen wir standard cols.
    // Wenn imageSide === "left" (und Children als Tuppel übergeben), rendert der Verwender einfach Bild zuerst.
    // Aber für die 'reversed' prop fügen wir direction classes hinzu:
    
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 gap-[var(--spacing-gap)] sm:gap-10",
          ratioClasses[ratio],
          className
        )}
        // Um visuell die Reihenfolge zu tauschen:
        style={{ direction: reversed ? "rtl" : "ltr" }}
        {...props}
      >
        <div style={{ direction: "ltr" }} className="flex flex-col h-full justify-center">
            {/* The primary content (Text) */}
            {React.Children.toArray(children)[0]}
        </div>
        <div style={{ direction: "ltr" }} className="relative h-full w-full min-h-[300px] md:min-h-0">
            {/* The secondary content (Image) */}
            {React.Children.toArray(children)[1]}
        </div>
      </div>
    );
  }
);

SplitSection.displayName = "SplitSection";
