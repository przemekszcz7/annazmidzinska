import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Occasions from "./components/Occasions";
import GallerySection from "./components/GallerySection";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import { REVIEWS, GALLERY_ITEMS, OCCASIONS } from "./data";
import { ChevronUp, Phone, Facebook, Mail, Sparkles, MapPin } from "lucide-react";

export default function App() {
  const logoUrl = "https://i.ibb.co/1GTNm7t9/292809123-494001609195903-3115706408738407086-n.jpg";

  const handleSelectOccasion = (slug: string) => {
    // Smooth scroll down to the contact section
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHeroCalculatorClick = () => {
    // Scroll directly to the contact section
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-200 selection:bg-amber-500/30 selection:text-amber-400 font-sans antialiased overflow-x-hidden">
      
      {/* 1. Header Navigation Bar */}
      <Header logoUrl={logoUrl} />

      {/* 2. Impressive Hero Panel */}
      <Hero onCalculateClick={handleHeroCalculatorClick} />

      {/* 3. Occasions section */}
      <Occasions occasions={OCCASIONS} onSelectOccasion={handleSelectOccasion} />

      {/* 4. Filterable Gallery with large screen Lightbox view on 14 photos */}
      <GallerySection items={GALLERY_ITEMS} />

      {/* 7. Client Facebook Testimonials Section */}
      <Testimonials reviews={REVIEWS} />

      {/* 8. Direct Contact section, Google maps, open street coordinates */}
      <ContactSection />

      {/* 9. Elite Corporate Footer */}
      <footer className="bg-black border-t border-zinc-900 py-16 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-zinc-900 pb-12 mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-amber-500/40">
                  <img
                    src={logoUrl}
                    alt="Catering u Ani"
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                    ANNA ŻMIDZIŃSKA
                  </h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-amber-500/80">
                    Catering Okolicznościowy
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-light">
                Twoja najwyższa gwarancja świeżości i profesjonalizmu kulinarnego. Organizujemy catering na Chrzciny, Komunie, Stypy, Urodziny i Rocznice na terenie Wyszanowa i sąsiadujących powiatów.
              </p>
            </div>

            {/* Event Links Column */}
            <div className="space-y-4 col-span-1">
              <h5 className="text-[11px] uppercase font-mono tracking-[0.2em] text-amber-500 font-bold">Nasze Usługi</h5>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#oferta" className="hover:text-amber-400 transition-colors">Pierwsza Komunia</a>
                </li>
                <li>
                  <a href="#oferta" className="hover:text-amber-400 transition-colors">Chrzciny Święte</a>
                </li>
                <li>
                  <a href="#oferta" className="hover:text-amber-400 transition-colors">Urodziny i Rocznice</a>
                </li>
                <li>
                  <a href="#oferta" className="hover:text-amber-400 transition-colors">Godne Stypy</a>
                </li>
                <li>
                  <span className="text-amber-400/90 font-medium">Obsługa kelnerska gratis/opcja</span>
                </li>
              </ul>
            </div>

            {/* Direct Quick Action Contact */}
            <div className="space-y-4 col-span-1">
              <h5 className="text-[11px] uppercase font-mono tracking-[0.2em] text-amber-500 font-bold">Szybki Kontakt</h5>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin size={12} className="text-amber-500" />
                  <span>Wyszanów 98-400</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={12} className="text-amber-500 animate-pulse" />
                  <a href="tel:888783004" className="hover:text-amber-400 transition-colors font-bold text-amber-300">888 783 004</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={12} className="text-amber-500" />
                  <a href="mailto:anna.zmidzinska@wp.pl" className="hover:text-amber-400 transition-colors">anna.zmidzinska@wp.pl</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyrights and disclaimer */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-zinc-600 text-[11px]">
            <p className="font-light">
              &copy; {new Date().getFullYear()} Catering Okolicznościowy Anna Żmidzińska. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a
                href="https://www.facebook.com/anna.zmidzinskawyszanow/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors flex items-center gap-1"
              >
                <Facebook size={12} />
                <span>Facebook Profil</span>
              </a>
              <span>•</span>
              <span className="font-mono">Wyszanów, Polska</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Call-to-action button or scroll to top triggers */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-zinc-900 hover:bg-amber-500 border border-amber-500/30 text-amber-400 hover:text-black rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-all z-40 transform active:scale-90"
        title="Przewiń do góry"
      >
        <ChevronUp size={20} />
      </button>

    </div>
  );
}
