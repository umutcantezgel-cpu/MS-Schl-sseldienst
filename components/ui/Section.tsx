import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'blue' | 'gradient';
  id?: string;
}

const spacingClasses = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
  xl: 'py-32 md:py-48'
};

const bgClasses = {
  white: 'bg-white text-gray-900',
  gray: 'bg-gray-50 text-gray-900',
  blue: 'bg-blue-900 text-white',
  gradient: 'bg-gradient-to-r from-blue-900 to-blue-700 text-white'
};

/**
 * Standard-Sektionstrenner für vertikale Abstände und volle Hintergrundfarben.
 */
export function Section({ 
  children, 
  className = "", 
  spacing = "md", 
  background = "white",
  id 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`w-full ${spacingClasses[spacing]} ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
