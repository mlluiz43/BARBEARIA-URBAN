import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BARBERSHOP_CONFIG, GalleryItem } from '../config/barbershop';
import { ImageWithFallback } from './ImageWithFallback';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'todos' | 'cortes' | 'barba' | 'ambiente'>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = BARBERSHOP_CONFIG.gallery.filter(item => {
    if (activeTab === 'todos') return true;
    return item.category === activeTab;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="galeria" className="py-20 sm:py-24 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-display text-xs font-semibold tracking-widest-architectural uppercase text-[#D97736] block mb-2">
              PORTFÓLIO & ATMOSFERA
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              GALERIA DE TRABALHOS
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-xl">
              Navegue pelos cortes executados diariamente em nossa bancada e conheça a ambientação da Barbearia Urban.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="inline-flex p-1 bg-[#1C1C1C] border border-[#292929] self-start md:self-auto overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('todos')}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'todos'
                  ? 'bg-[#D97736] text-white'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cortes')}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'cortes'
                  ? 'bg-[#D97736] text-white'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Cortes Clássicos & Fade
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('barba')}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'barba'
                  ? 'bg-[#D97736] text-white'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Barboterapia
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ambiente')}
              className={`px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-all duration-150 whitespace-nowrap cursor-pointer ${
                activeTab === 'ambiente'
                  ? 'bg-[#D97736] text-white'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              O Espaço
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-[#1C1C1C] border border-[#292929] hover:border-[#D97736] transition-all duration-200 overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  fallbackTitle={item.title}
                  fallbackSubtitle={item.categoryLabel}
                  containerClassName="w-full h-full"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 bg-[#111111]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5">
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#D97736] mb-1">
                  {item.categoryLabel}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 bg-[#D97736] text-white flex items-center justify-center shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Permanent Bottom Bar for Accessibility & Mobile */}
              <div className="p-3.5 bg-[#1C1C1C] border-t border-[#292929] flex items-center justify-between group-hover:bg-[#201F1F]">
                <div>
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#D97736] block">
                    {item.categoryLabel}
                  </span>
                  <span className="text-xs text-[#E5E2E1] font-medium truncate block max-w-[220px]">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs text-[#A3A3A3] group-hover:text-white transition-colors">
                  Ver
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1C1C1C] border border-[#292929] p-3 sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#292929]">
              <div>
                <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#D97736] block">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 text-[#A3A3A3] hover:text-white bg-[#242424] border border-[#383838] transition-colors cursor-pointer"
                aria-label="Fechar galeria"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <ImageWithFallback
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                fallbackTitle={filteredItems[lightboxIndex].title}
                containerClassName="w-full h-full"
              />
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#292929]">
              <span className="text-xs text-[#A3A3A3] tabular-nums">
                Foto {lightboxIndex + 1} de {filteredItems.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-3 py-2 bg-[#242424] hover:bg-[#2F3131] border border-[#383838] text-white text-xs font-display font-semibold uppercase flex items-center gap-1 cursor-pointer"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-3 py-2 bg-[#242424] hover:bg-[#2F3131] border border-[#383838] text-white text-xs font-display font-semibold uppercase flex items-center gap-1 cursor-pointer"
                  aria-label="Próxima foto"
                >
                  <span>Próxima</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
