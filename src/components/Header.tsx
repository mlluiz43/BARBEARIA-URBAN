import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

interface HeaderProps {
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Barbeiros', href: '#barbeiros' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#111111]/95 backdrop-blur-md border-[#292929] py-3.5 shadow-2xl'
          : 'bg-[#111111] border-[#292929]/50 py-4 md:py-5'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white uppercase whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97736]"
          aria-label="Barbearia Urban Página Inicial"
        >
          <span>BARBEARIA</span>
          <span className="text-[#D97736]">URBAN</span>
        </a>

        {/* Zone 2: 4-5 Clean single-line text nav links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-wide uppercase text-[#A3A3A3]"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white hover:border-b-2 hover:border-[#D97736] pb-1 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBookingModal}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-[#D97736] hover:bg-[#E08548] active:scale-[0.99] text-white font-display font-bold text-xs uppercase tracking-wider rounded-none transition-all duration-150 shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>AGENDAR HORÁRIO</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#E5E2E1] hover:text-white bg-[#1C1C1C] border border-[#292929] rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97736] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#292929] px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium tracking-wider uppercase text-[#C7C6C6]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 border-b border-[#292929]/50 hover:text-[#D97736] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3.5 bg-[#D97736] hover:bg-[#E08548] text-white font-display font-bold text-xs uppercase tracking-wider rounded-none flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>AGENDAR PELO WHATSAPP</span>
              </button>
            </div>
            
            <div className="pt-2 text-xs text-[#A3A3A3] text-center">
              <span>{BARBERSHOP_CONFIG.contact.address.street} • {BARBERSHOP_CONFIG.whatsappDisplay}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
