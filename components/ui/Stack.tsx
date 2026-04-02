import { ReactNode, ElementType } from "react";

export interface StackProps {
  children: ReactNode;
  direction?: 'vertical' | 'horizontal';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  className?: string;
  as?: ElementType;
}

const gapClasses = {
  none: 'gap-0',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-8',
  xl: 'gap-12'
};

const itemsClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around'
};

export function Stack({
  children,
  direction = 'vertical',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  className = "",
  as: Component = "div"
}: StackProps) {
  const dirClass = direction === 'vertical' ? 'flex-col' : 'flex-row';
  
  return (
    <Component 
      className={`flex ${dirClass} ${gapClasses[gap]} ${itemsClasses[align]} ${justifyClasses[justify]} ${className}`}
    >
      {children}
    </Component>
  );
}
