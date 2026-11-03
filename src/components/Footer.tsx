import React from 'react';
import { ArrowUp, Instagram, Facebook, MessageSquare, MapPin } from 'lucide-react';
import { BARBERSHOP_CONFIG, getWhatsAppBookingUrl } from '../config/barbershop';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços & Preços', href: '#servicos' },
    { label: 'Galeria de Fotos', href: '#galeria' },
    { label: 'Mestres Barbeiros', href: '#barbeiros' },
    { label: 'Localização & Contato', href: '#contato' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E0E0E] text-[#A3A3A3] border-t border-[#292929]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#292929]">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="font-display font-extrabold text-2xl tracking-wider text-white uppercase inline-block mb-3"
            >
              BARBEARIA <span className="text-[#D97736]">URBAN</span>
            </a>
            <p className="font-display text-xs uppercase tracking-widest text-[#D97736] mb-4">
              {BARBERSHOP_CONFIG.slogan}
            </p>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed max-w-sm mb-6">
              Experiência de barbearia contemporânea com DNA industrial de luxo. Cortes masculinos sob medida, barboterapia tradicional e atendimento pontual.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={BARBERSHOP_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1C1C1C] hover:bg-[#D97736] hover:text-white border border-[#292929] flex items-center justify-center text-[#E5E2E1] transition-colors"
                aria-label="Instagram da Barbearia Urban"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BARBERSHOP_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1C1C1C] hover:bg-[#D97736] hover:text-white border border-[#292929] flex items-center justify-center text-[#E5E2E1] transition-colors"
                aria-label="Facebook da Barbearia Urban"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1C1C1C] hover:bg-[#D97736] hover:text-white border border-[#292929] flex items-center justify-center text-[#E5E2E1] transition-colors"
                aria-label="WhatsApp da Barbearia Urban"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#D97736] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Hours (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Atendimento & Local
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97736] shrink-0 mt-0.5" />
                <span>{BARBERSHOP_CONFIG.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#D97736] shrink-0" />
                <span>WhatsApp: {BARBERSHOP_CONFIG.whatsappDisplay}</span>
              </div>
              <div className="pt-2 text-xs text-[#756A63]">
                <p className="font-semibold text-[#A3A3A3] uppercase mb-1">Horários:</p>
                <p>Segunda a Sexta: 09h às 20h</p>
                <p>Sábado: 09h às 19h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#756A63]">
          <div>
            <p>© {new Date().getFullYear()} Barbearia Urban. Todos os direitos reservados.</p>
            <p className="mt-1 text-[11px]">Dados cadastrais e fotos para demonstração comercial de design.</p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 bg-[#1C1C1C] hover:bg-[#242424] border border-[#292929] hover:border-[#D97736] text-[#E5E2E1] uppercase text-[11px] font-display font-bold tracking-wider transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D97736]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
