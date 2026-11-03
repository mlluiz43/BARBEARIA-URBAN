import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Send, ExternalLink, ShieldAlert } from 'lucide-react';
import { BARBERSHOP_CONFIG, getWhatsAppBookingUrl } from '../config/barbershop';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: BARBERSHOP_CONFIG.services[0].name,
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct structured WhatsApp message
    const formattedDate = formData.date ? new Date(formData.date + 'T00:00:00').toLocaleDateString('pt-BR') : undefined;
    
    const whatsappUrl = getWhatsAppBookingUrl(formData.service, {
      date: formattedDate,
      customNote: `${formData.message ? formData.message + ' ' : ''}(Solicitante: ${formData.name || 'Cliente'}${formData.phone ? ' • Tel: ' + formData.phone : ''})`
    });

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contato" className="py-20 sm:py-24 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <span className="font-display text-xs font-semibold tracking-widest-architectural uppercase text-[#D97736] block mb-2">
            LOCALIZAÇÃO & ATENDIMENTO
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white max-w-2xl">
            VENHA NOS VISITAR OU RESERVE PELO WHATSAPP
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-xl">
            Estamos estrategicamente localizados na Consolação em São Paulo, com acesso facilitado pelo metrô e estacionamento conveniado.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (Information & Interactive Map - 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-[#1C1C1C] border border-[#292929] p-6 sm:p-8">
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-6 flex items-center gap-2">
                <span>INFORMAÇÕES COMERCIAIS</span>
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#242424] border border-[#383838] flex items-center justify-center text-[#D97736] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-white mb-0.5">
                      Endereço
                    </h4>
                    <p className="text-sm text-[#E5E2E1]">
                      {BARBERSHOP_CONFIG.contact.address.street} - {BARBERSHOP_CONFIG.contact.address.neighborhood}
                    </p>
                    <p className="text-xs text-[#A3A3A3] mt-0.5">
                      {BARBERSHOP_CONFIG.contact.address.city} - {BARBERSHOP_CONFIG.contact.address.state}, CEP {BARBERSHOP_CONFIG.contact.address.zipCode}
                    </p>
                    <p className="text-xs text-[#D97736] mt-1.5">
                      {BARBERSHOP_CONFIG.contact.address.reference}
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#242424] border border-[#383838] flex items-center justify-center text-[#D97736] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-white mb-0.5">
                      WhatsApp & Telefone
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      WhatsApp: {BARBERSHOP_CONFIG.whatsappDisplay}
                    </p>
                    <p className="text-xs text-[#A3A3A3] mt-0.5">
                      Fixo: {BARBERSHOP_CONFIG.contact.phone}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#242424] border border-[#383838] flex items-center justify-center text-[#D97736] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-white mb-1">
                      Horário de Funcionamento
                    </h4>
                    <div className="space-y-1 text-xs">
                      {BARBERSHOP_CONFIG.businessHours.map((h, i) => (
                        <div key={i} className="flex justify-between gap-4 text-[#A3A3A3]">
                          <span className="font-medium text-[#E5E2E1]">{h.days}:</span>
                          <span className="tabular-nums text-white">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fictitious Data Notice */}
              <div className="mt-6 pt-5 border-t border-[#292929] flex items-center gap-2 text-[11px] text-[#A3A3A3]">
                <ShieldAlert className="w-4 h-4 text-[#D97736] shrink-0" />
                <span>
                  Dados de endereço e contato fictícios para fins de demonstração visual e comercial.
                </span>
              </div>
            </div>

            {/* Map Frame Card */}
            <div className="bg-[#1C1C1C] border border-[#292929] p-3 sm:p-4">
              <div className="relative aspect-[16/9] w-full bg-[#111111] border border-[#292929] overflow-hidden">
                <iframe
                  title="Localização Barbearia Urban"
                  src={BARBERSHOP_CONFIG.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-[#A3A3A3]">
                  Consolação • São Paulo
                </span>
                <a
                  href={BARBERSHOP_CONFIG.contact.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D97736] hover:text-[#E08548] font-semibold uppercase tracking-wider"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (Direct WhatsApp Appointment Request Form - 6 cols) */}
          <div className="lg:col-span-6 bg-[#1C1C1C] border border-[#292929] p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#D97736] block mb-1">
                SOLICITAÇÃO RÁPIDA
              </span>
              <h3 className="font-display font-bold text-2xl uppercase text-white">
                ENVIAR MENSAGEM DIRETA
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mt-1">
                Preencha os dados abaixo e clique para abrir a conversa no WhatsApp pronta para envio.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7C6C6] mb-1.5">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#161616] border border-[#292929] focus:border-[#D97736] px-4 py-3 text-sm text-white placeholder-[#5A5A5A] rounded-none outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7C6C6] mb-1.5">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: (11) 98765-4321"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#161616] border border-[#292929] focus:border-[#D97736] px-4 py-3 text-sm text-white placeholder-[#5A5A5A] rounded-none outline-none transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7C6C6] mb-1.5">
                  Serviço Desejado *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#161616] border border-[#292929] focus:border-[#D97736] px-4 py-3 text-sm text-white rounded-none outline-none transition-colors cursor-pointer"
                >
                  {BARBERSHOP_CONFIG.services.map((s) => (
                    <option key={s.id} value={s.name} className="bg-[#1C1C1C] text-white">
                      {s.name} ({s.formattedPrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7C6C6] mb-1.5">
                  Data de Preferência (Opcional)
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#161616] border border-[#292929] focus:border-[#D97736] px-4 py-3 text-sm text-white rounded-none outline-none transition-colors cursor-pointer"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7C6C6] mb-1.5">
                  Observações ou Horário de Preferência
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Gostaria de ser atendido no período da tarde, de preferência com o Matheus."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#161616] border border-[#292929] focus:border-[#D97736] px-4 py-3 text-sm text-white placeholder-[#5A5A5A] rounded-none outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#D97736] hover:bg-[#E08548] active:scale-[0.99] text-white font-display font-bold text-xs uppercase tracking-wider rounded-none flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR SOLICITAÇÃO VIA WHATSAPP</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs text-center">
                  Redirecionando para o WhatsApp da Barbearia Urban... Caso a janela não abra, verifique seu bloqueador de popups.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
