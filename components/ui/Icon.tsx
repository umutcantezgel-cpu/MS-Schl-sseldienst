import { ReactNode } from "react";

export interface IconProps {
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: ReactNode; // Falls wir SVG children direkt mergen wollen
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

/**
 * Standardisierter Wrapper für Icons (z.B. Lucide), damit Größenvorgaben 
 * im gesamten Projekt einheitlich bleiben.
 */
export function Icon({ size = "md", className = "", children }: IconProps) {
  return (
    <span 
      className={`inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
