import { useState } from "react";
import { Phone, Mail, MapPin, Copy, Check, ExternalLink } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Hand-crafted Contact information block */}
          <div className="lg:col-span-5 space-y-12 text-left">
            
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500/60 font-mono block">
                Biuro rezerwacji
              </span>
              <p className="text-zinc-400 text-xs font-serif font-light leading-relaxed">
                W celu omówienia unikalnej aranżacji półmisków, doboru dań oraz potwierdzenia bezzwrotnych rezerwacji terminów – prosimy o kontakt telefoniczny bądź pocztowy.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* 1. Address box */}
              <div className="space-y-1.5">
                <span className="text-[8px] font-mono tracking-widest text-zinc-600 uppercase block">Kuchnia Rzemieślnicza</span>
                <p className="text-white text-sm font-serif tracking-[0.05em]">Wyszanów 98-400</p>
                <p className="text-zinc-500 text-xs font-serif font-light">Gmina Wieruszów, województwo łódzkie</p>
                <button
                  onClick={() => handleCopy("Wyszanów 98-400", "Adres")}
                  className="text-[9px] font-mono tracking-wider text-amber-500 hover:text-amber-400 transition-colors block pt-1"
                >
                  {copiedText === "Adres" ? "Skopiowano!" : "[ Skopiuj Adres ]"}
                </button>
              </div>

              {/* 2. Phone box */}
              <div className="space-y-1.5 pt-4 border-t border-zinc-900">
                <span className="text-[8px] font-mono tracking-widest text-zinc-600 uppercase block">Telefon alarmowy rezerwacji</span>
                <a
                  href="tel:888783004"
                  className="text-amber-400 hover:text-amber-300 font-serif text-lg tracking-widest block transition-colors"
                >
                  888 783 004
                </a>
                <button
                  onClick={() => handleCopy("888783004", "Telefon")}
                  className="text-[9px] font-mono tracking-wider text-amber-500 hover:text-amber-400 transition-colors block pt-1"
                >
                  {copiedText === "Telefon" ? "Skopiowano!" : "[ Skopiuj Telefon ]"}
                </button>
              </div>

              {/* 3. Email box */}
              <div className="space-y-1.5 pt-4 border-t border-zinc-900">
                <span className="text-[8px] font-mono tracking-widest text-zinc-600 uppercase block">Poczta elektroniczna</span>
                <a
                  href="mailto:anna.zmidzinska@wp.pl"
                  className="text-zinc-200 hover:text-amber-400 text-xs tracking-wider block font-mono transition-colors"
                >
                  anna.zmidzinska@wp.pl
                </a>
                <button
                  onClick={() => handleCopy("anna.zmidzinska@wp.pl", "Mail")}
                  className="text-[9px] font-mono tracking-wider text-amber-500 hover:text-amber-400 transition-colors block pt-1"
                >
                  {copiedText === "Mail" ? "Skopiowano!" : "[ Skopiuj E-mail ]"}
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Premium Leaflet OpenStreetMap embed map or visual card */}
          <div className="lg:col-span-7 w-full space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500/60 font-mono block text-left">
              Zasięg logistyczny (Wyszanów oraz powiaty ościenne)
            </span>
            
            {/* Embedded map */}
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-zinc-900 relative">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=18.1182%2C51.2785%2C18.1696%2C51.3030&layer=mapnik&marker=51.2908%2C18.1419"
                title="Katering Anna Żmidzińska - Mapa Wyszanów"
                id="osm-interactive-map"
                className="w-full h-full border-0 filter invert grayscale contrast-125 select-none"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 pt-2">
              <p className="text-[10px] text-zinc-500 text-left font-serif font-light tracking-wide max-w-sm">
                Obsługujemy bankiety oraz wesela w promieniu do 50 km od kuchni głównej w Wyszanowie.
              </p>
              <a
                href="https://maps.google.com/?q=Wyszan%C3%B3w+98-400"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 text-[10px] tracking-widest uppercase font-serif hover:text-light transition-colors flex items-center gap-1.5"
              >
                <span>Nawiguj do kuchni</span>
                <ExternalLink size={10} className="text-amber-500/60" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
