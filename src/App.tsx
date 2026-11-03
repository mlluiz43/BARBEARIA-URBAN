import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Barbers } from './components/Barbers';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookingModal } from './components/BookingModal';
import { ServiceItem, BarberItem } from './config/barbershop';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<BarberItem | null>(null);

  const handleOpenBookingModal = () => {
    setSelectedService(null);
    setSelectedBarber(null);
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (service: ServiceItem) => {
    setSelectedService(service);
    setSelectedBarber(null);
    setIsBookingModalOpen(true);
  };

  const handleSelectBarberForBooking = (barber: BarberItem) => {
    setSelectedBarber(barber);
    setSelectedService(null);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#E5E2E1] flex flex-col selection:bg-[#D97736] selection:text-white">
      {/* Fixed Header */}
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* About Section */}
        <About />

        {/* Services & Pricing Section */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Gallery Section */}
        <Gallery />

        {/* Master Barbers Section */}
        <Barbers onSelectBarberForBooking={handleSelectBarberForBooking} />

        {/* Client Reviews / Social Proof */}
        <Testimonials />

        {/* Location, Contact & Interactive Form */}
        <Contact />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton onOpenBookingModal={handleOpenBookingModal} />

      {/* Interactive Booking Stepper Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialService={selectedService}
        initialBarber={selectedBarber}
      />
    </div>
  );
}
