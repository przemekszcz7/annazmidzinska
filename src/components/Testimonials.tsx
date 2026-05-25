import { Star, Facebook, ExternalLink } from "lucide-react";
import { Review } from "../data";

interface TestimonialsProps {
  reviews: Review[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
  return (
    <section id="opinie" className="py-32 bg-black relative overflow-hidden px-6 md:px-12">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-24">
          <span className="text-[9px] uppercase tracking-[0.5em] text-amber-500/80 font-light block">Księga gości</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-[0.2em] uppercase">
            Głosy Podniebienia
          </h2>
          <div className="h-px w-16 bg-amber-500/20 mx-auto mt-4"></div>
        </div>

        {/* Reviews Cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24" id="testimonials-grid">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="text-left flex flex-col justify-between space-y-8 p-1 relative group"
            >
              <div className="space-y-4">
                {/* Gold Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <Star key={idx} size={10} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Optional Review Title */}
                <h4 className="font-serif text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
                  {rev.title}
                </h4>

                {/* Review Text */}
                <p className="text-zinc-300 text-xs leading-relaxed font-serif font-light italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <h5 className="font-serif text-[10px] tracking-widest text-amber-400/90 uppercase">
                    {rev.author}
                  </h5>
                  <span className="text-[8px] font-serif tracking-widest text-zinc-600 uppercase block mt-1">RECENZJA ZWERYFIKOWANA</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Link Banner */}
        <div className="max-w-2xl mx-auto p-12 border border-amber-500/10 text-center space-y-8 bg-zinc-950/20">
          <div className="space-y-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-amber-500/70 font-serif block">Media społecznościowe</span>
            <h3 className="font-serif text-lg text-white tracking-[0.15em] uppercase">
              Rekomendacje na żywo
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-serif font-light max-w-md mx-auto">
              Zapraszamy do zapoznania się ze wszystkimi wpisami oraz bieżącymi relacjami z przyjęć bezpośrednio na naszym oficjalnym profilu.
            </p>
          </div>

          <a
            href="https://www.facebook.com/anna.zmidzinskawyszanow/reviews/?id=100057582033701&sk=reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-zinc-800 text-zinc-400 hover:text-white hover:border-amber-500/30 font-serif tracking-[0.2em] text-[9px] uppercase transition-all duration-300 rounded-sm"
          >
            <span>Profil Facebook</span>
            <ExternalLink size={11} className="text-amber-500/60" />
          </a>
        </div>

      </div>
    </section>
  );
}
