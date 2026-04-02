import { ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  className?: string;
}

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-4',
  md: 'gap-6 md:gap-8',
  lg: 'gap-8 md:gap-12',
  xl: 'gap-12 md:gap-16'
};

/**
 * Abstraktionsebene für standardisierte CSS-Grids inkl. Responsive Breakpoints.
 */
export function Grid({ 
  children, 
  columns = 1, 
  gap = "md", 
  responsive = true,
  className = "" 
}: GridProps) {
  
  let colsClass = "grid-cols-1";
  
  if (responsive) {
    if (columns === 2) colsClass = "grid-cols-1 md:grid-cols-2";
    if (columns === 3) colsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    if (columns === 4) colsClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  } else {
    colsClass = `grid-cols-${columns}`;
  }

  return (
    <div className={`grid ${colsClass} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}
