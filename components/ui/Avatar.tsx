import Image from "next/image";

export interface AvatarProps {
  src?: string;
  initials?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base',
  xl: 'w-24 h-24 text-xl'
};

/**
 * Avatar Komponente für Teammitglieder oder Testimonials. Fallback auf Initialen,
 * wenn kein Bild (`src`) vorhanden ist.
 */
export function Avatar({ src, initials, alt = "Avatar", size = "md", className = "" }: AvatarProps) {
  const sizeClass = sizeClasses[size];
  const finalClass = `relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 ${sizeClass} ${className}`;

  if (!src && initials) {
    return (
      <div className={`${finalClass} bg-blue-100 text-blue-900 font-bold uppercase`}>
        {initials.slice(0, 2)}
      </div>
    );
  }

  return (
    <div className={`${finalClass} bg-gray-100`}>
      {src ? (
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover"
        />
      ) : (
        <span className="text-gray-400">?</span>
      )}
    </div>
  );
}
