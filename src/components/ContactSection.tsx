import { useState } from "react";

export default function ContactSection() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedText(label);
        setTimeout(() => setCopiedText(""), 3000);
      });
  };

  return (
    <section id="kontakt" className="py-32 bg-black relative overflow-hidden px-6 md:px-12">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-24">
          <span className="text-[9px] uppercase tracking-[0.5em] text-amber-500/80 font-light block">Rezerwacje terminów</span>
          <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-[0.2em] uppercase">
            Kontakt Osobisty
          </h2>
          <div className="h-px w-16 bg-amber-500/20 mx-auto mt-4"></div>
        </div>
        <div className="max-w-2xl mx-auto space-y-16">
          
          {/* Centered Contact information block */}
          <div className="space-y-12 text-center">
            
            <div className="space-y-4 max-w-xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500/60 font-serif block">
                Biuro rezerwacji
              </span>
              <p className="text-zinc-400 text-xs sm:text-sm font-serif font-light leading-relaxed">
                W celu omówienia unikalnej aranżacji półmisków, doboru dań oraz potwierdzenia bezzwrotnych rezerwacji terminów – prosimy o kontakt telefoniczny bądź pocztowy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-900/60">
              
              {/* 1. Address box */}
              <div className="space-y-2.5">
                <span className="text-[8px] font-serif tracking-widest text-zinc-600 uppercase block">Kuchnia Rzemieślnicza</span>
                <p className="text-white text-sm font-serif tracking-[0.05em]">Wyszanów 98-400</p>
                <p className="text-zinc-500 text-[10px] font-serif font-light leading-normal">Województwo łódzkie</p>
                <button
                  onClick={() => handleCopy("Wyszanów 98-400", "Adres")}
                  className="text-[8px] font-sans tracking-widest text-amber-500/80 hover:text-amber-400 transition-colors block mx-auto pt-1 uppercase"
                >
                  {copiedText === "Adres" ? "Skopiowano!" : "[ Skopiuj Adres ]"}
                </button>
              </div>

              {/* 2. Phone box */}
              <div className="space-y-2.5 border-t md:border-t-0 md:border-x border-zinc-900 pt-8 md:pt-0 px-4">
                <span className="text-[8px] font-serif tracking-widest text-zinc-600 uppercase block">Telefon alarmowy</span>
                <a
                  href="tel:888783004"
                  className="text-amber-400 hover:text-amber-300 font-serif text-lg tracking-widest block transition-colors mt-0.5"
                >
                  888 783 004
                </a>
                <button
                  onClick={() => handleCopy("888783004", "Telefon")}
                  className="text-[8px] font-sans tracking-widest text-amber-500/80 hover:text-amber-400 transition-colors block mx-auto pt-1 uppercase"
                >
                  {copiedText === "Telefon" ? "Skopiowano!" : "[ Skopiuj Telefon ]"}
                </button>
              </div>

              {/* 3. Email box */}
              <div className="space-y-2.5 border-t md:border-t-0 border-zinc-900 pt-8 md:pt-0">
                <span className="text-[8px] font-serif tracking-widest text-zinc-600 uppercase block">Poczta elektroniczna</span>
                <a
                  href="mailto:anna.zmidzinska@wp.pl"
                  className="text-zinc-200 hover:text-amber-400 text-xs tracking-wider block font-sans font-light transition-colors mt-1"
                >
                  anna.zmidzinska@wp.pl
                </a>
                <button
                  onClick={() => handleCopy("anna.zmidzinska@wp.pl", "Mail")}
                  className="text-[8px] font-sans tracking-widest text-amber-500/80 hover:text-amber-400 transition-colors block mx-auto pt-1 uppercase"
                >
                  {copiedText === "Mail" ? "Skopiowano!" : "[ Skopiuj E-mail ]"}
                </button>
              </div>

            </div>

            {/* Logistics info */}
            <div className="pt-12 border-t border-zinc-900/60 max-w-md mx-auto space-y-2">
              <span className="text-[8px] uppercase tracking-[0.25em] text-amber-500/50 font-serif block">
                Zasięg logistyczny
              </span>
              <p className="text-xs text-zinc-500 font-serif font-light leading-relaxed">
                Obsługujemy bankiety oraz wesela w promieniu do 50 km od kuchni głównej w Wyszanowie i powiatach ościennych.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
