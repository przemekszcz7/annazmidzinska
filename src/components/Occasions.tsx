import { Utensils, ChevronDown, Check } from "react-dom";
import { useState } from "react";
import { Occasion } from "../data";

interface OccasionsProps {
  occasions: Occasion[];
  onSelectOccasion: (slug: string) => void;
}

export default function Occasions({ occasions, onSelectOccasion }: OccasionsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleOccasion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="kolekcje" className="py-32 bg-black relative px-6 md:px-12">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-24">
          <span className="text-[9px] uppercase tracking-[0.5em] text-amber-500/80 font-light block">Kolekcje Smaku</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-[0.2em] uppercase">
            Menu Okolicznościowe
          </h2>
          <div className="h-px w-16 bg-amber-500/20 mx-auto mt-4"></div>
        </div>

        {/* Waiter Service Elegant Highlight */}
        <div className="mb-24 text-center border-t border-b border-amber-500/15 py-10 px-8 relative">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-[9px] uppercase tracking-[0.4em] text-amber-400 font-serif font-medium block">
              Serwis Kelnerski
            </span>
            <h3 className="font-serif text-lg text-white tracking-widest uppercase">
              Profesjonalna Obsługa Kelnerska
            </h3>
            <p className="text-zinc-400 font-serif font-light text-xs sm:text-sm leading-relaxed">
              Zapewniamy pełny, elegancki zespół kelnerów dbający o płynność oraz podniosły charakter każdego przyjęcia. Dyskretna i bezbłędna realizacja serwisowa.
            </p>
          </div>
        </div>

        {/* Michelin-Style Minimalist Accordion/List of Menus */}
        <div className="space-y-4" id="occasions-minimal-list">
          {occasions.map((occasion, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={occasion.id}
                className="border-b border-zinc-900 pb-6 transition-all duration-300"
              >
                <div 
                  onClick={() => toggleOccasion(idx)}
                  className="flex items-center justify-between cursor-pointer py-4 group hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-baseline space-x-6">
                    <span className="font-serif text-amber-500/70 text-xs tracking-wider">
                      {(idx + 1).toString().padStart(2, '0')}.
                    </span>
                    <h3 className="font-serif text-base sm:text-xl text-zinc-100 group-hover:text-amber-300 transition-colors tracking-widest uppercase">
                      {occasion.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="hidden sm:inline font-serif text-[10px] text-zinc-500 uppercase tracking-widest">
                      od {occasion.basePricePerGuest} zł / os.
                    </span>
                    <span className={`text-amber-500/60 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </div>
                </div>

                {/* Animated Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                  <div className="pl-12 pr-4 space-y-6 text-left">
                    <p className="text-zinc-400 font-serif font-light text-sm sm:text-base leading-relaxed tracking-wide">
                      {occasion.description}
                    </p>

                    {/* Minimal bullets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif font-light text-zinc-200">
                      {occasion.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-3">
                          <span className="w-1 h-1 rounded-full bg-amber-500/60"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex my-6 items-center justify-between pt-4 border-t border-zinc-900">
                      <div>
                        <span className="text-[9px] font-serif uppercase tracking-widest text-zinc-500 block">Sugerowany pakiet</span>
                        <span className="text-xs font-serif text-amber-400 font-medium tracking-widest block mt-1">od {occasion.basePricePerGuest} PLN / osoba</span>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectOccasion(occasion.slug);
                        }}
                        className="px-6 py-2.5 border border-amber-500/20 text-amber-400 hover:border-amber-400 font-serif text-[10px] tracking-widest uppercase transition-all duration-300 rounded-sm"
                      >
                        Zapytaj o Ofertę
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
