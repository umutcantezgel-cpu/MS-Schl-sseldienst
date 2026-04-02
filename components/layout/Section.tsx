import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  paddingY?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | 'gap' | 'section';
}

const paddingMap: Record<string, string> = {
  '0': 'py-[var(--space-0)]',
  '1': 'py-[var(--space-1)]',
  '2': 'py-[var(--space-2)]',
  '3': 'py-[var(--space-3)]',
  '4': 'py-[var(--space-4)]',
  '5': 'py-[var(--space-5)]',
  '6': 'py-[var(--space-6)]',
  '7': 'py-[var(--space-7)]',
  '8': 'py-[var(--space-8)]',
  '9': 'py-[var(--space-9)]',
  '10': 'py-[var(--space-10)]',
  '11': 'py-[var(--space-11)]',
  '12': 'py-[var(--space-12)]',
  '13': 'py-[var(--space-13)]',
  'gap': 'py-[var(--space-gap)]',
  'section': 'py-[var(--space-section)]',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Component = 'section', paddingY = 'section', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(paddingMap[paddingY], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Section.displayName = 'Section';
