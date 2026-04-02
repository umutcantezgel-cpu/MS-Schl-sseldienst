"use client";
import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageZoom({ src, alt, caption }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className="my-8 not-prose relative group cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--surface-secondary)] min-h-[250px] md:min-h-[400px]">
          <Image 
            src={src} 
            alt={alt} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all">
              <ZoomIn className="w-5 h-5 text-[color:var(--text-primary)]" />
            </div>
          </div>
        </div>
        {caption && (
          <figcaption className="text-center text-sm mt-3 text-[color:var(--text-secondary)] italic">
            {caption}
          </figcaption>
        )}
      </figure>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12"
            onClick={() => setIsOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
            >
              <Image 
                src={src} 
                alt={alt} 
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
