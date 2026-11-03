import React from 'react';
import { Award, Scissors, Calendar } from 'lucide-react';
import { BARBERSHOP_CONFIG, BarberItem } from '../config/barbershop';
import { ImageWithFallback } from './ImageWithFallback';

interface BarbersProps {
  onSelectBarberForBooking: (barber: BarberItem) => void;
}

export const Barbers: React.FC<BarbersProps> = ({ onSelectBarberForBooking }) => {
  return (
    <section id="barbeiros" className="py-20 sm:py-24 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <span className="font-display text-xs font-semibold tracking-widest-architectural uppercase text-[#D97736] block mb-2">
            MESTRES DA NAVALHA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white max-w-2xl">
            PROFISSIONAIS CERTIFICADOS & APAIXONADOS PELO OFÍCIO
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-xl">
            Nossos mestres combinam anos de bancada, formação contínua e técnica cirúrgica para entregar um resultado personalizado ao formato do seu rosto.
          </p>
        </div>

        {/* Barbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BARBERSHOP_CONFIG.barbers.map((barber) => (
            <div
              key={barber.id}
              className="bg-[#1C1C1C] border border-[#292929] hover:border-[#D97736] transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Circular Portrait (Permitted by Stitch Design Guidelines) */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#D97736] shrink-0 bg-[#242424]">
                    <ImageWithFallback
                      src={barber.image}
                      alt={barber.name}
                      fallbackTitle={barber.name}
                      fallbackSubtitle={barber.role}
                      containerClassName="w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide text-white">
                      {barber.name}
                    </h3>
                    <p className="text-xs text-[#D97736] font-medium uppercase tracking-wider">
                      {barber.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#A3A3A3] mt-1">
                      <Award className="w-3 h-3 text-[#D97736]" />
                      <span>{barber.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Specialty Banner */}
                <div className="p-3 bg-[#242424] border border-[#383838] mb-4">
                  <div className="flex items-center gap-2 text-xs text-white font-semibold mb-1">
                    <Scissors className="w-3.5 h-3.5 text-[#D97736]" />
                    <span className="uppercase tracking-wider">Especialidade:</span>
                  </div>
                  <p className="text-xs text-[#A3A3A3]">
                    {barber.specialty}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                  {barber.bio}
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectBarberForBooking(barber)}
                className="w-full py-3 bg-[#242424] hover:bg-[#D97736] hover:text-white text-white border border-[#383838] hover:border-[#D97736] font-display font-bold text-xs uppercase tracking-wider rounded-none flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>AGENDAR COM {barber.name.split(' ')[0].toUpperCase()}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
