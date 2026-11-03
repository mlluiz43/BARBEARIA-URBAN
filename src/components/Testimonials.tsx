import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { BARBERSHOP_CONFIG } from '../config/barbershop';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-display text-xs font-semibold tracking-widest-architectural uppercase text-[#D97736] block mb-2">
              REPUTAÇÃO & PROVA SOCIAL
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              QUEM FREQUENTA A URBAN RECOMENDA
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#1C1C1C] border border-[#292929] px-5 py-3">
            <div className="font-display font-extrabold text-3xl text-[#D97736] tabular-nums">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#D97736]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D97736]" />
                ))}
              </div>
              <p className="text-[11px] text-[#A3A3A3] mt-0.5">
                Mais de 850 avaliações no Google
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BARBERSHOP_CONFIG.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-[#1C1C1C] border border-[#292929] hover:border-[#D97736] transition-colors p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Service */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D97736]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D97736]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D97736] bg-[#242424] px-2 py-0.5 border border-[#383838]">
                    {test.service}
                  </span>
                </div>

                {/* Comment Quote */}
                <p className="text-sm text-[#E5E2E1] leading-relaxed mb-6 italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="border-t border-[#292929] pt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-bold text-sm text-white uppercase">
                      {test.name}
                    </h3>
                    <span title="Cliente Verificado" className="inline-flex">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D97736]" />
                    </span>
                  </div>
                  <p className="text-xs text-[#A3A3A3]">
                    {test.role}
                  </p>
                </div>
                <span className="text-[11px] text-[#756A63] tabular-nums">
                  {test.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
