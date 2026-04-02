export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  circle?: boolean;
}

export function Skeleton({ width, height, className = "", circle = false }: SkeletonProps) {
  const finalClass = `animate-pulse bg-gray-200 ${circle ? 'rounded-full' : 'rounded-lg'} ${className}`;
  
  return (
    <div 
      className={finalClass} 
      style={{ width, height }} 
      aria-hidden="true" 
    />
  );
}
