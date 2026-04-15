import Image from "next/image";
import { cn } from "@/lib/utils";

interface TrustAvatarProps {
  className?: string;
  /** Size in pixels (used for width and height). Default: 32 */
  size?: number;
  /** Whether to show the pulsing green "online" indicator. Default: true */
  showPulse?: boolean;
}

export function TrustAvatar({ className, size = 32, showPulse = true }: TrustAvatarProps) {
  return (
    <div 
      className={cn("relative flex-shrink-0 inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 overflow-hidden rounded-full ring-2 ring-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.2)] group-hover:ring-white/80 transition-all duration-300 z-0">
        <Image
          src="/images/mina-saad-inhaber-schluessel-schmiede-portrait.jpeg"
          alt="Mina Saad - Inhaber Schlüssel Schmiede Wetzlar"
          fill
          className="object-cover scale-110 group-hover:scale-100 transition-[transform,filter] duration-500 saturate-[1.1] contrast-[1.05]"
          sizes={`${size}px`}
        />
      </div>
      
      {/* Online Pulse Indicator */}
      {showPulse && (
        <div className="absolute -bottom-0.5 -right-0.5 z-10">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 ring-2 ring-white"></span>
          </div>
        </div>
      )}
    </div>
  );
}
