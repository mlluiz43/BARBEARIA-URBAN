import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-14 max-w-2xl">
          <span className="font-display text-xs font-semibold tracking-widest-architectural uppercase text-[#D97736] block mb-2">
            ESCLARECIMENTOS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-white">
            DÚVIDAS FREQUENTES
          </h2>
          <p className="text-sm text-[#A3A3A3] mt-2">
            Confira as principais informações sobre nosso formato de agendamento, formas de pagamento e conveniências.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-3">
          {BARBERSHOP_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#1C1C1C] border border-[#292929] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D97736]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base uppercase tracking-wide text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 bg-[#242424] border border-[#383838] flex items-center justify-center text-[#D97736] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#D97736] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A3A3A3] leading-relaxed border-t border-[#292929]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
