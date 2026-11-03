import React from 'react';
import { Beer, Coffee, Wind, Wifi, Car, Disc } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';
import { ImageWithFallback } from './ImageWithFallback';

export const About: React.FC = () => {
  const amenityIcons = [
    <Beer key="beer" className="w-5 h-5" />,
    <Coffee key="coffee" className="w-5 h-5" />,
    <Wind key="wind" className="w-5 h-5" />,
    <Wifi key="wifi" className="w-5 h-5" />,
    <Car key="car" className="w-5 h-5" />,
    <Disc key="disc" className="w-5 h-5" />
  ];

  return (
    <section id="sobre" className="py-20 sm:py-24 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <span className="font-display text-xs font-semibold tracking-widest-architectural uppercase text-[#D97736] block mb-2">
            CONCEITO & TRADIÇÃO
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white max-w-3xl">
            ONDE A ELEGÂNCIA INDUSTRIAL ENCONTRA O RITUAL DA NAVALHA
          </h2>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left Visual Grid (2 stacked images or asymmetric preview) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="border border-[#292929] bg-[#1C1C1C] p-2 aspect-[3/4]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80"
                alt="Ambiente Barbearia Urban - Cadeiras e espelhos"
                fallbackTitle="Espaço Urban"
                fallbackSubtitle="Bancadas em Madeira Escura"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="border border-[#292929] bg-[#1C1C1C] p-2 aspect-[3/4] mt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80"
                alt="Detalhe do corte na navalha e precisão"
                fallbackTitle="Precisão Cirúrgica"
                fallbackSubtitle="Mestres Barbeiros"
                containerClassName="w-full h-full"
              />
            </div>
          </div>

          {/* Right Narrative Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-lg text-[#E5E2E1] font-medium leading-relaxed mb-6">
              A Barbearia Urban nasceu em São Paulo com um propósito claro: resgatar a liturgia do atendimento clássico masculino, combinando o rigor técnico das barbearias tradicionais com a estética contemporânea e funcional do design industrial.
            </p>
            
            <p className="text-base text-[#A3A3A3] leading-relaxed mb-6">
              Cada detalhe do nosso espaço foi arquitetado para proporcionar conforto, discrição e pontualidade. Dos assentos anatômicos em couro nobre à seleção exclusiva de chopes artesanais locais e cafés de torra fresca, sua permanência aqui é uma pausa revigorante na rotina da cidade.
            </p>

            <div className="p-5 bg-[#1C1C1C] border border-[#292929] mt-2">
              <div className="flex items-start gap-4">
                <div className="w-1 bg-[#D97736] h-12 shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-sm uppercase text-white tracking-wider mb-1">
                    Compromisso com o Tempo do Cliente
                  </h3>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    Respeitamos rigorosamente seu agendamento. Nossas bancadas operam com sincronia perfeita para que você seja atendido no minuto marcado, sem esperas desnecessárias.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Amenities Section ("O QUE ESTÁ INCLUSO NA SUA VISITA") */}
        <div>
          <div className="border-b border-[#292929] pb-4 mb-8">
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white">
              COMODIDADES & EXPERIÊNCIA DO CLIENTE
            </h3>
            <p className="text-sm text-[#A3A3A3] mt-1">
              Todos os clientes têm acesso total às comodidades do nosso espaço durante seu atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BARBERSHOP_CONFIG.amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1C1C1C] border border-[#292929] p-6 hover:border-[#D97736] transition-colors duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-[#242424] border border-[#383838] flex items-center justify-center text-[#D97736] mb-4">
                    {amenityIcons[idx % amenityIcons.length]}
                  </div>
                  <h4 className="font-display font-bold text-base uppercase text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
