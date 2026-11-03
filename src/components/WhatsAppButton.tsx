import React, { useState } from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { BARBERSHOP_CONFIG, getWhatsAppBookingUrl } from '../config/barbershop';

interface WhatsAppButtonProps {
  onOpenBookingModal: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenBookingModal }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const directWhatsAppUrl = getWhatsAppBookingUrl();

  return (
    <aside
      aria-label="Atalho de agendamento rápido"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Tooltip on hover/focus */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#1C1C1C] border border-[#292929] px-3.5 py-2 text-xs text-white font-medium shadow-xl pointer-events-none whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
          <span className="text-[#D97736] font-display font-bold uppercase mr-1.5">
            WhatsApp Oficial:
          </span>
          Agende seu horário online
        </div>
      )}

      {/* Action Buttons Group */}
      <div className="flex items-center gap-2">
        {/* Interactive Booking Stepper Trigger */}
        <button
          type="button"
          onClick={onOpenBookingModal}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="hidden md:flex items-center gap-2 px-4 py-3 bg-[#1C1C1C] hover:bg-[#242424] border border-[#292929] hover:border-[#D97736] text-white text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 shadow-xl cursor-pointer"
          title="Agendamento guiado com escolha de serviço e horário"
        >
          <Calendar className="w-4 h-4 text-[#D97736]" />
          <span>Agendar Online</span>
        </button>

        {/* Floating WhatsApp Action Button */}
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-14 h-14 bg-[#D97736] hover:bg-[#E08548] active:scale-95 text-white flex items-center justify-center transition-all duration-150 shadow-2xl cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Conversar no WhatsApp e agendar horário na Barbearia Urban"
        >
          {/* Subtle pulse effect */}
          <span className="absolute -inset-1 bg-[#D97736]/30 animate-ping -z-10 opacity-75" />
          
          <MessageSquare className="w-6 h-6 fill-current" />
          
          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#111111] rounded-full" />
        </a>
      </div>
    </aside>
  );
};
