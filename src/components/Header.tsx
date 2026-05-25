import { useState, useEffect } from "react";
import { Menu, X, Phone, Facebook } from "lucide-react";

interface HeaderProps {
  logoUrl: string;
}

export default function Header({ logoUrl }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Kolekcje Menu", href: "#kolekcje" },
    { name: "Galeria", href: "#galeria" },
    { name: "Opinie", href: "#opinie" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 border-b border-amber-500/10 py-4 backdrop-blur-md"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Symmetrical Left Wing (Desktop Only) */}
          <nav className="hidden lg:flex items-center space-x-10" id="desktop-nav-left">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-amber-400 font-serif transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Symmetrical Centered Logo & Brand (Visual Jewel) */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="flex flex-col items-center justify-center text-center group"
          >
            <span className="font-serif text-sm sm:text-base tracking-[0.4em] text-white font-extrabold max-w-[280px] break-keep transition-colors group-hover:text-amber-200 uppercase">
              ANNA ŻMIDZIŃSKA
            </span>
            <span className="text-[7.5px] uppercase tracking-[0.45em] text-amber-500/70 font-sans font-light mt-1.5 transition-colors group-hover:text-amber-400">
              catering okolicznościowy
            </span>
          </a>

          {/* Symmetrical Right Wing (Desktop Only) */}
          <nav className="hidden lg:flex items-center space-x-10" id="desktop-nav-right">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-amber-400 font-serif transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* Minimalist Facebook icon */}
            <a
              href="https://www.facebook.com/anna.zmidzinskawyszanow/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300 pl-2"
              title="Odwiedź nasz Facebook"
            >
              <Facebook size={14} />
            </a>
          </nav>

          {/* Mobile phone button (Right-side alignment on mobile/tablet) */}
          <div className="flex lg:hidden items-center space-x-4">
            <a
              href="tel:888783004"
              className="text-xs font-mono text-amber-400/90 hover:text-amber-300 border border-amber-500/20 px-2.5 py-1 text-[9px] uppercase tracking-widest rounded-sm"
            >
              📞 888 783 004
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-1 rounded-sm text-gray-400 hover:text-amber-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 bg-black/98 transform ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-col justify-center items-center h-full space-y-9 px-6 pt-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-lg tracking-[0.35em] text-gray-300 hover:text-amber-400 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-8 border-t border-zinc-900 w-full max-w-xs text-center space-y-4">
            <a
              href="mailto:anna.zmidzinska@wp.pl"
              className="text-zinc-500 hover:text-amber-400 transition-colors text-xs font-mono tracking-widest"
            >
              anna.zmidzinska@wp.pl
            </a>
            
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://www.facebook.com/anna.zmidzinskawyszanow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest"
              >
                <Facebook size={14} />
                <span>Facebook</span>
              </a>
              <span className="text-zinc-800">/</span>
              <a
                href="tel:888783004"
                className="text-amber-500 hover:text-amber-400 font-serif font-bold text-sm tracking-wider"
              >
                888 783 004
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
