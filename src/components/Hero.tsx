import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  onCalculateClick: () => void;
}

export default function Hero({ onCalculateClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-6 sm:px-12"
    >
      {/* Immersive cinematic background of luxury golden event setup */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[12000ms] scale-110 motion-safe:animate-subtle-zoom"
        style={{
          backgroundImage: `url('https://i.ibb.co/NgK0ykj8/476158295-1996852044125453-9205184724536357122-n.jpg')`
        }}
        referrerPolicy="no-referrer"
      ></div>
      
      {/* Refined gradient vignette over background image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black pointer-events-none"></div>

      {/* Symmetrical fine jewelry golden lines/markers for extreme elegance */}
      <div className="absolute inset-y-12 inset-x-6 sm:inset-x-12 border border-amber-500/10 pointer-events-none flex flex-col justify-between p-6">
        <div className="flex justify-end text-[7px] font-mono tracking-[0.5em] text-amber-500/40 uppercase">
          <span>[ WYSZANÓW, PL ]</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full space-y-12">
        {/* Absolute premium badge */}
        <div className="inline-flex items-center space-x-3 text-amber-400">
          <span className="h-px w-6 bg-amber-500/40"></span>
          <span className="text-[9px] uppercase tracking-[0.5em] font-light text-amber-200">
            Kreatywna Kuchnia Okolicznościowa
          </span>
          <span className="h-px w-6 bg-amber-500/40"></span>
        </div>

        {/* Grand Michelin Title */}
        <div className="space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light text-white tracking-[0.18em] leading-tight uppercase">
            Sztuka
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 font-extralight py-1 mt-1 tracking-[0.12em]">
              Smaku
            </span>
          </h1>
          <p className="font-serif text-[10px] sm:text-xs tracking-[0.6em] text-amber-500/80 uppercase">
            Anna Żmidzińska
          </p>
        </div>

        {/* Minimalist introduction sentence (Michelin description) */}
        <p className="text-zinc-300 font-serif font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed tracking-wider">
          Kameralne bankiety, prestiżowe przyjęcia rodzinne i najwyższy standard serwisu kelnerskiego. Tworzymy niestandardowe doznania dla najbardziej wymagających podniebień.
        </p>

        {/* Dynamic Interactive Fine-Dining CTA Button Duo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6" id="hero-actions">
          <button
            onClick={onCalculateClick}
            className="group px-8 py-3.5 border border-amber-400 bg-amber-400 text-black font-serif text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:bg-transparent hover:text-amber-300 rounded-sm"
          >
            <span>Zarezerwuj Termin</span>
          </button>

          <a
            href="#kontakt"
            className="flex items-center gap-2.5 px-8 py-3.5 border border-amber-500/20 text-gray-300 hover:text-white bg-black/60 font-serif text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-amber-500/5 hover:border-amber-500/50 rounded-sm"
          >
            <Phone size={11} className="text-amber-500" />
            <span>Zapytanie</span>
          </a>
        </div>
      </div>
    </section>
  );
}
