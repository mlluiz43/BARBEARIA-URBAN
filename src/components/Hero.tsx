import React from 'react';
import { MessageSquare, ArrowDown, ShieldCheck, Clock, Award } from 'lucide-react';
import { BARBERSHOP_CONFIG, getWhatsAppBookingUrl, getBarbershopStatus } from '../config/barbershop';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const status = getBarbershopStatus();
  const directWhatsAppUrl = getWhatsAppBookingUrl();

  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 bg-[#111111] border-b border-[#292929] overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#E5E2E1 1px, transparent 1px), linear-gradient(90deg, #E5E2E1 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Editorial Typography & Actions - 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Slogan & Status Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-display text-xs sm:text-sm font-semibold tracking-widest-architectural uppercase text-[#D97736] border-b border-[#D97736]/40 pb-0.5">
                {BARBERSHOP_CONFIG.slogan}
              </span>
              <span className="text-[#554339]">•</span>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#1C1C1C] border border-[#292929] text-xs">
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.isOpen ? 'bg-emerald-500' : 'bg-[#A3A3A3]'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-[#A3A3A3] font-medium">{status.message}</span>
              </div>
            </div>

            {/* Display Hero Headline (Syne) */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-tight uppercase text-white mb-6 text-balance">
              O RITUAL DO CORTE CLÁSSICO E A PRECISÃO CONTEMPORÂNEA
            </h1>

            {/* Subtitle Value Proposition */}
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-2xl mb-8">
              Na Barbearia Urban, cuidamos da sua imagem com mestria. Do corte na tesoura à toalha quente com vapor de ozônio, proporcionamos uma experiência de relaxamento e estilo sob medida para o homem que valoriza sua presença.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#D97736] hover:bg-[#E08548] active:scale-[0.99] text-white font-display font-bold text-sm uppercase tracking-wider rounded-none transition-all duration-150 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="w-5 h-5" />
                <span>AGENDAR NO WHATSAPP</span>
              </a>

              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-white hover:bg-white hover:text-[#111111] text-white font-display font-bold text-sm uppercase tracking-wider rounded-none transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97736]"
              >
                <span>VER SERVIÇOS & PREÇOS</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#292929]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1C1C1C] border border-[#292929] flex items-center justify-center text-[#D97736] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white uppercase">Pontualidade</p>
                  <p className="text-[#A3A3A3]">Sem filas de espera</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1C1C1C] border border-[#292929] flex items-center justify-center text-[#D97736] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white uppercase">Biossegurança</p>
                  <p className="text-[#A3A3A3]">Lâminas 100% descartáveis</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 bg-[#1C1C1C] border border-[#292929] flex items-center justify-center text-[#D97736] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white uppercase">Experiência</p>
                  <p className="text-[#A3A3A3]">Mestres certificados</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Hero Visual Composition - 5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#292929] bg-[#1C1C1C] p-2 sm:p-3">
              {/* Corner accents referencing industrial brass fasteners */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#D97736]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#D97736]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-[#D97736]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#D97736]" />

              <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden border border-[#292929]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80"
                  alt="Barbearia Urban - Cadeira de barbeiro clássica e ambiente industrial"
                  fallbackTitle="Barbearia Urban"
                  fallbackSubtitle="Ambiente Industrial & Tradição"
                  containerClassName="w-full h-full"
                />

                {/* Subtle Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Highlight Card Inside Hero */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1C1C1C]/95 border border-[#292929] p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#D97736] uppercase tracking-wider block">
                        Corte + Barba Completa
                      </span>
                      <span className="font-display font-bold text-white text-lg">
                        R$ 70,00
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={onOpenBookingModal}
                      className="px-3.5 py-2 bg-[#D97736] hover:bg-[#E08548] text-white text-xs font-display font-bold uppercase tracking-wider rounded-none cursor-pointer"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column KPI Strip (Full-width row below hero split) */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-[#292929]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {BARBERSHOP_CONFIG.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1C] border border-[#292929] p-5 sm:p-6 transition-all duration-150 hover:border-[#D97736]"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#D97736] tabular-nums mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-white text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-[#A3A3A3] mt-1">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
