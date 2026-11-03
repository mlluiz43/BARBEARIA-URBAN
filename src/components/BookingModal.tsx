import React, { useState } from 'react';
import { X, Check, Calendar, Clock, User, Scissors, MessageSquare } from 'lucide-react';
import { BARBERSHOP_CONFIG, ServiceItem, BarberItem, getWhatsAppBookingUrl } from '../config/barbershop';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
  initialBarber?: BarberItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialBarber
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem>(
    initialService || BARBERSHOP_CONFIG.services[2] // Default to Corte + Barba
  );
  const [selectedBarber, setSelectedBarber] = useState<string>(
    initialBarber ? initialBarber.name : 'Qualquer Profissional Disponível'
  );
  
  // Date setup: next 7 business days
  const today = new Date();
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    return {
      dateString: d.toISOString().split('T')[0],
      displayDay: d.toLocaleDateString('pt-BR', { weekday: 'short' }),
      displayDate: d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      isSunday: d.getDay() === 0
    };
  }).filter(d => !d.isSunday); // Filter out Sundays as barbershop is closed

  const [selectedDate, setSelectedDate] = useState<string>(dateOptions[0]?.dateString || '');
  const [selectedTime, setSelectedTime] = useState<string>(BARBERSHOP_CONFIG.availableTimeSlots[2]); // e.g. 10:30

  if (!isOpen) return null;

  const handleConfirmBooking = () => {
    const formattedDate = new Date(selectedDate + 'T00:00:00').toLocaleDateString('pt-BR');
    const whatsappUrl = getWhatsAppBookingUrl(selectedService.name, {
      date: formattedDate,
      time: selectedTime,
      barber: selectedBarber !== 'Qualquer Profissional Disponível' ? selectedBarber : undefined
    });

    onClose();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#1C1C1C] border border-[#292929] my-8 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#292929]">
          <div>
            <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#D97736] block">
              AGENDAMENTO ONLINE
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-white">
              RESERVAR SEU HORÁRIO
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#A3A3A3] hover:text-white bg-[#242424] border border-[#383838] transition-colors cursor-pointer"
            aria-label="Fechar janela de agendamento"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper (Stitch Continuous Horizontal Bar with Persistent 2px Copper Bar) */}
        <div className="grid grid-cols-3 border-b border-[#292929] bg-[#161616]">
          <button
            type="button"
            onClick={() => setCurrentStep(1)}
            className={`py-3 text-center text-xs font-display font-bold uppercase tracking-wider relative cursor-pointer ${
              currentStep === 1 ? 'text-white' : 'text-[#756A63] hover:text-[#C7C6C6]'
            }`}
          >
            1. Serviço
            {currentStep === 1 && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D97736]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep(2)}
            className={`py-3 text-center text-xs font-display font-bold uppercase tracking-wider relative cursor-pointer ${
              currentStep === 2 ? 'text-white' : 'text-[#756A63] hover:text-[#C7C6C6]'
            }`}
          >
            2. Barbeiro
            {currentStep === 2 && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D97736]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep(3)}
            className={`py-3 text-center text-xs font-display font-bold uppercase tracking-wider relative cursor-pointer ${
              currentStep === 3 ? 'text-white' : 'text-[#756A63] hover:text-[#C7C6C6]'
            }`}
          >
            3. Data & Horário
            {currentStep === 3 && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D97736]" />
            )}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto">
          
          {/* STEP 1: SELECT SERVICE */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-[#A3A3A3] uppercase tracking-wider font-semibold mb-2">
                Selecione o serviço desejado:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BARBERSHOP_CONFIG.services.map((service) => {
                  const isSelected = selectedService.id === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`p-4 border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#111111] border-[#D97736] ring-1 ring-[#D97736]/40'
                          : 'bg-[#161616] border-[#292929] hover:border-[#383838]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-display font-bold text-sm uppercase text-white">
                          {service.name}
                        </h4>
                        <span className="font-display font-bold text-sm text-[#D97736] tabular-nums">
                          {service.formattedPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3] mb-2">
                        <Clock className="w-3 h-3 text-[#D97736]" />
                        <span>{service.duration}</span>
                      </div>
                      <p className="text-xs text-[#A3A3A3] line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT BARBER */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-xs text-[#A3A3A3] uppercase tracking-wider font-semibold mb-2">
                Escolha o barbeiro de sua preferência:
              </p>

              {/* Any Barber Option */}
              <div
                onClick={() => setSelectedBarber('Qualquer Profissional Disponível')}
                className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                  selectedBarber === 'Qualquer Profissional Disponível'
                    ? 'bg-[#111111] border-[#D97736] ring-1 ring-[#D97736]/40'
                    : 'bg-[#161616] border-[#292929] hover:border-[#383838]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#242424] border border-[#383838] flex items-center justify-center text-[#D97736]">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-white">
                      Primeiro Barbeiro Disponível
                    </h4>
                    <p className="text-xs text-[#A3A3A3]">
                      Maior flexibilidade de horários
                    </p>
                  </div>
                </div>
                {selectedBarber === 'Qualquer Profissional Disponível' && (
                  <Check className="w-5 h-5 text-[#D97736]" />
                )}
              </div>

              {/* Specific Barbers */}
              <div className="space-y-3">
                {BARBERSHOP_CONFIG.barbers.map((barber) => {
                  const isSelected = selectedBarber === barber.name;
                  return (
                    <div
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber.name)}
                      className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#111111] border-[#D97736] ring-1 ring-[#D97736]/40'
                          : 'bg-[#161616] border-[#292929] hover:border-[#383838]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={barber.image}
                          alt={barber.name}
                          className="w-10 h-10 rounded-full object-cover border border-[#D97736]"
                        />
                        <div>
                          <h4 className="font-display font-bold text-sm uppercase text-white">
                            {barber.name}
                          </h4>
                          <p className="text-xs text-[#D97736]">
                            {barber.role} • {barber.specialty}
                          </p>
                        </div>
                      </div>
                      {isSelected && <Check className="w-5 h-5 text-[#D97736]" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: DATE & TIME */}
          {currentStep === 3 && (
            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <p className="text-xs text-[#A3A3A3] uppercase tracking-wider font-semibold mb-2">
                  Escolha o Dia:
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {dateOptions.map((opt) => {
                    const isSelected = selectedDate === opt.dateString;
                    return (
                      <button
                        key={opt.dateString}
                        type="button"
                        onClick={() => setSelectedDate(opt.dateString)}
                        className={`p-3 border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#D97736] border-[#D97736] text-white'
                            : 'bg-[#161616] border-[#292929] text-[#A3A3A3] hover:text-white hover:border-[#383838]'
                        }`}
                      >
                        <span className="block text-[11px] uppercase font-bold tracking-wider">
                          {opt.displayDay}
                        </span>
                        <span className="block text-sm font-display font-bold mt-1">
                          {opt.displayDate}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots (Stitch Rectangular Chips) */}
              <div>
                <p className="text-xs text-[#A3A3A3] uppercase tracking-wider font-semibold mb-2">
                  Horários Disponíveis (Horário de Brasília):
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {BARBERSHOP_CONFIG.availableTimeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 px-3 border text-xs font-display font-bold tracking-wider transition-all cursor-pointer tabular-nums text-center ${
                          isSelected
                            ? 'bg-[#D97736] border-[#D97736] text-white'
                            : 'bg-[#111111] border-[#292929] text-[#E5E2E1] hover:border-[#D97736] hover:text-[#D97736]'
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Summary Box */}
              <div className="p-4 bg-[#161616] border border-[#292929] text-xs">
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#D97736] block mb-1">
                  Resumo da Reserva:
                </span>
                <div className="flex justify-between py-1 text-white">
                  <span>Serviço:</span>
                  <span className="font-bold">{selectedService.name} ({selectedService.formattedPrice})</span>
                </div>
                <div className="flex justify-between py-1 text-[#A3A3A3]">
                  <span>Barbeiro:</span>
                  <span>{selectedBarber}</span>
                </div>
                <div className="flex justify-between py-1 text-[#A3A3A3]">
                  <span>Data e Horário:</span>
                  <span>
                    {new Date(selectedDate + 'T00:00:00').toLocaleDateString('pt-BR')} às {selectedTime}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 sm:p-6 border-t border-[#292929] bg-[#161616] flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((currentStep - 1) as 1 | 2)}
              className="px-5 py-3 bg-[#242424] hover:bg-[#2A2A2A] border border-[#383838] text-white text-xs font-display font-bold uppercase tracking-wider rounded-none cursor-pointer"
            >
              Voltar
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((currentStep + 1) as 2 | 3)}
              className="px-6 py-3 bg-[#D97736] hover:bg-[#E08548] text-white text-xs font-display font-bold uppercase tracking-wider rounded-none cursor-pointer ml-auto"
            >
              Próximo Passo
            </button>
          ) : (
            <button
              type="button"
              onClick={handleConfirmBooking}
              className="px-6 py-3 bg-[#D97736] hover:bg-[#E08548] active:scale-[0.99] text-white text-xs font-display font-bold uppercase tracking-wider rounded-none flex items-center gap-2 cursor-pointer shadow-lg ml-auto"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CONFIRMAR NO WHATSAPP</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
