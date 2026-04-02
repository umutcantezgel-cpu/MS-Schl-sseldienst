export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: string; // z.B. "border-gray-200" o.Ä.
}

const spacingClassesHorizontal = {
  none: 'my-0',
  sm: 'my-4',
  md: 'my-8',
  lg: 'my-12',
  xl: 'my-16'
};

const spacingClassesVertical = {
  none: 'mx-0',
  sm: 'mx-4',
  md: 'mx-8',
  lg: 'mx-12',
  xl: 'mx-16'
};

export function Divider({ 
  orientation = "horizontal", 
  spacing = "md",
  className = "",
  color = "bg-gray-200"
}: DividerProps) {
  
  if (orientation === "vertical") {
    return (
      <div 
        className={`w-px h-full ${color} ${spacingClassesVertical[spacing]} ${className}`} 
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  return (
    <div 
      className={`h-px w-full ${color} ${spacingClassesHorizontal[spacing]} ${className}`} 
      role="separator"
      aria-orientation="horizontal"
    />
  );
}
