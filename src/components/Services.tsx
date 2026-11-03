import React, { useState } from 'react';
import { MessageSquare, Clock, Check, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { BARBERSHOP_CONFIG, ServiceItem, getWhatsAppBookingUrl } from '../config/barbershop';

interface ServicesProps {
  onSelectServiceForBooking?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'principais' | 'cuidados'>('todos');

  const filteredServices = BARBERSHOP_CONFIG.services.filter(s => {
    if (selectedCategory === 'principais') {
      return ['corte-masculino', 'barba-completa', 'corte-barba'].includes(s.id);
    }
    if (selectedCategory === 'cuidados') {
      return ['acabamento-pezinho', 'barboterapia-spa', 'sobrancelha-navalha'].includes(s.id);
    }
    return true;
  });

  return (
    <section id="servicos" className="py-20 sm:py-24 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-display text-xs font-semibold tracking-widest-architectural uppercase text-[#D97736] block mb-2">
              MENU DE SERVIÇOS & TABELA DE PREÇOS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              CUIDADOS DE ALTA PRECISÃO
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-xl">
              Selecione o serviço ideal para você. O agendamento é enviado diretamente ao nosso WhatsApp com a mensagem personalizada correspondente.
            </p>
          </div>

          {/* Category Filter Buttons (Functional segmented control) */}
          <div className="inline-flex p-1 bg-[#1C1C1C] border border-[#292929] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory('todos')}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                selectedCategory === 'todos'
                  ? 'bg-[#D97736] text-white'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Todos ({BARBERSHOP_CONFIG.services.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('principais')}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                selectedCategory === 'principais'
                  ? 'bg-[#D97736] text-white'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Principais
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('cuidados')}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                selectedCategory === 'cuidados'
                  ? 'bg-[#D97736] text-white'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Especiais
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const serviceWhatsAppUrl = getWhatsAppBookingUrl(service.name);

            return (
              <div
                key={service.id}
                className={`relative bg-[#1C1C1C] border transition-all duration-150 flex flex-col justify-between ${
                  service.popular
                    ? 'border-[#D97736] ring-1 ring-[#D97736]/30'
                    : 'border-[#292929] hover:border-[#D97736]'
                }`}
              >
                {/* Popular / Feature Callout */}
                {service.popular && (
                  <div className="bg-[#D97736] text-white text-[10px] font-display font-extrabold uppercase tracking-widest px-3 py-1 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      ESCOLHA MAIS POPULAR
                    </span>
                    <span>MELHOR CUSTO-BENEFÍCIO</span>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Service Top Meta */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-white">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3] shrink-0 pt-1">
                      <Clock className="w-3.5 h-3.5 text-[#D97736]" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="mb-4">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#D97736] tabular-nums">
                      {service.formattedPrice}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Included Items */}
                  <div className="border-t border-[#292929] pt-4 mb-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C7C6C6] block mb-2.5">
                      O que está incluso:
                    </span>
                    <ul className="space-y-2">
                      {service.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#E5E2E1]">
                          <Check className="w-3.5 h-3.5 text-[#D97736] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row gap-3">
                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#D97736] hover:bg-[#E08548] active:scale-[0.99] text-white font-display font-bold text-xs uppercase tracking-wider rounded-none text-center flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>AGENDAR NO WHATSAPP</span>
                  </a>

                  {onSelectServiceForBooking && (
                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(service)}
                      className="py-3 px-3 bg-[#242424] hover:bg-[#2A2A2A] border border-[#383838] text-white text-xs font-display font-semibold uppercase tracking-wider rounded-none flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      title="Escolher profissional e horário antes de enviar"
                    >
                      <Calendar className="w-4 h-4 text-[#D97736]" />
                      <span className="hidden sm:inline">Personalizar</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Note */}
        <div className="mt-12 p-6 bg-[#1C1C1C] border border-[#292929] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-10 h-10 bg-[#242424] border border-[#383838] flex items-center justify-center text-[#D97736] shrink-0 hidden sm:flex">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display font-bold text-sm uppercase text-white">
                Deseja combinar serviços ou trazer um amigo?
              </p>
              <p className="text-xs text-[#A3A3A3] mt-0.5">
                Você pode solicitar pacotes sob medida ou agendamentos simultâneos diretamente com nossa equipe no WhatsApp.
              </p>
            </div>
          </div>
          
          <a
            href={getWhatsAppBookingUrl("Atendimento Personalizado")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-[#111111] text-white font-display font-bold text-xs uppercase tracking-wider rounded-none whitespace-nowrap transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>FALAR COM RECEPÇÃO</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
