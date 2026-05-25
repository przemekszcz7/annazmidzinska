import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryItem } from "../data";

interface GallerySectionProps {
  items: GalleryItem[];
}

export default function GallerySection({ items }: GallerySectionProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? items.length - 1 : prev! - 1));
    }
  };

  const navNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === items.length - 1 ? 0 : prev! + 1));
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <section id="galeria" className="py-32 bg-black relative overflow-hidden px-6 md:px-12">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-[9px] uppercase tracking-[0.5em] text-amber-500/80 font-light block">Estetyka podania</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-[0.2em] uppercase">
            Pejzaż Kulinarny
          </h2>
          <div className="h-px w-16 bg-amber-500/20 mx-auto mt-4"></div>
        </div>

        {/* Dynamic Sophisticated Grid without visual text or category filters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="gallery-grid">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="group relative cursor-pointer overflow-hidden aspect-square border border-zinc-950 bg-zinc-950 transition-all duration-700"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Minimalist interactive overlay without text */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white font-serif font-light text-xs opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  +
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-12 text-zinc-600 font-serif text-xs tracking-widest uppercase">
            Brak kulinariów do wyświetlenia.
          </div>
        )}

      </div>

      {/* Full Screen Ambient Lightbox Modal with absolutely zero text distraction */}
      {currentLightboxItem && (
        <div
          id="gallery-lightbox"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex flex-col justify-center items-center p-4"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 p-1.5 text-zinc-500 hover:text-amber-400 transition-colors"
            aria-label="Zamknij"
          >
            <X size={20} />
          </button>

          <div className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center space-y-6">
            
            {/* Poprzednie */}
            <button
              onClick={navPrev}
              className="absolute left-2 sm:-left-16 p-2 text-zinc-500 hover:text-amber-300 transition-colors"
              style={{ zIndex: 10, top: "45%" }}
              aria-label="Wstecz"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>

            {/* Następne */}
            <button
              onClick={navNext}
              className="absolute right-2 sm:-right-16 p-2 text-zinc-500 hover:text-amber-300 transition-colors"
              style={{ zIndex: 10, top: "45%" }}
              aria-label="Dalej"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>

            {/* Image display */}
            <div 
              className="border border-zinc-900 overflow-hidden bg-zinc-950 max-h-[75vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentLightboxItem.url}
                alt={currentLightboxItem.title}
                className="max-h-[75vh] max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
