/**
 * Barbearia Urban - Arquivo de Configuração Central
 * 
 * Centraliza todas as informações da barbearia, incluindo dados de contato,
 * número oficial de WhatsApp para agendamento, endereço, horários de funcionamento,
 * catálogo de serviços, mestres barbeiros e imagens da galeria.
 * 
 * Para alterar o número do WhatsApp de toda a aplicação, modifique a propriedade `whatsappNumber` abaixo.
 */

export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  duration: string;
  description: string;
  badge?: string;
  popular?: boolean;
  included: string[];
}

export interface BarberItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cortes' | 'barba' | 'ambiente';
  categoryLabel: string;
  imageUrl: string;
  aspectRatio?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BARBERSHOP_CONFIG = {
  name: "Barbearia Urban",
  shortName: "Urban",
  slogan: "Seu estilo. Nossa identidade.",
  description: "Tradição em navalha, técnicas contemporâneas e um ambiente sofisticado projetado para o homem moderno.",
  
  // NÚMERO DO WHATSAPP CENTRALIZADO (Padrão Internacional: DDI + DDD + Número)
  // Altere aqui para atualizar em todos os botões e links da aplicação
  whatsappNumber: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  
  // Informações de Contato e Localização (Dados Fictícios Demonstrativos)
  contact: {
    phone: "(11) 3214-5678",
    email: "contato@barbeariaurban.com.br",
    address: {
      street: "Rua Augusta, 1420",
      neighborhood: "Consolação",
      city: "São Paulo",
      state: "SP",
      zipCode: "01304-001",
      full: "Rua Augusta, 1420 - Consolação, São Paulo - SP",
      reference: "A 200m da Estação Consolação do Metrô • Estacionamento conveniado no nº 1450"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975765089333!2d-46.66014492376678!3d-23.555943961596726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd3e88ec77%3A0x6b4f762699e394be!2sRua%20Augusta%2C%201420%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001304-001!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
    googleMapsDirectLink: "https://maps.google.com/?q=Rua+Augusta+1420+Sao+Paulo+SP",
  },

  // Horários de Funcionamento
  businessHours: [
    { days: "Segunda a Sexta", hours: "09:00 - 20:00", openHour: 9, closeHour: 20 },
    { days: "Sábado", hours: "09:00 - 19:00", openHour: 9, closeHour: 19 },
    { days: "Domingo e Feriados", hours: "Fechado", openHour: 0, closeHour: 0 }
  ],

  // Redes Sociais
  social: {
    instagram: "https://instagram.com/barbeariaurban.demo",
    instagramHandle: "@barbeariaurban.demo",
    facebook: "https://facebook.com/barbeariaurban.demo"
  },

  // Métricas de Impacto (Adjacent Proof)
  stats: [
    { value: "+12.000", label: "Clientes Atendidos", description: "Satisfação comprovada" },
    { value: "8+", label: "Anos de Tradição", description: "Pioneirismo em SP" },
    { value: "4.9", label: "Avaliação Google", description: "Mais de 850 reviews" },
    { value: "100%", label: "Navalha Esterilizada", description: "Biossegurança rigorosa" }
  ],

  // Comodidades do Espaço
  amenities: [
    { title: "Chopp Artesanal Cortesia", description: "Primeira rodada de chopp gelado por nossa conta em todos os atendimentos." },
    { title: "Café Espresso & Lounge", description: "Café especial moído na hora e ambiente climatizado com poltronas Chesterfield." },
    { title: "Toalha Quente & Ozônio", description: "Ritual completo com toalha aromatizada e vapor de ozônio para desobstruir os poros." },
    { title: "Wi-Fi de Alta Velocidade", description: "Conexão de fibra óptica 500MB para você trabalhar ou relaxar enquanto aguarda." },
    { title: "Estacionamento Conveniado", description: "1 hora de estacionamento cortesia no edifício ao lado (nº 1450)." },
    { title: "Mesa de Sinuca Clássica", description: "Mesa de bilhar profissional disponível no lounge para os nossos clientes." }
  ],

  // Catálogo de Serviços (Requisitos centrais do cliente)
  services: [
    {
      id: "corte-masculino",
      name: "Corte Masculino",
      price: 45.0,
      formattedPrice: "R$ 45,00",
      duration: "40 min",
      description: "Lavagem especializada com massagem capilar, corte tesoura ou máquina adaptado ao visagismo do seu rosto, finalização com pomada matte premium.",
      badge: "Essencial",
      included: [
        "Consultoria de visagismo capilar",
        "Lavagem com shampoo refrescante",
        "Corte na tesoura e/ou máquina",
        "Acabamento na lâmina e penteado"
      ]
    },
    {
      id: "barba-completa",
      name: "Barba Completa",
      price: 35.0,
      formattedPrice: "R$ 35,00",
      duration: "30 min",
      description: "Alinhamento milimétrico com navalha descartável, ritual clássico de toalha quente aromatizada com eucalipto, hidratação profunda com óleo de argan.",
      badge: "Tradição",
      included: [
        "Desenho e contorno personalizado",
        "Vapor de ozônio e toalha quente",
        "Espuma aquecida e navalha descartável",
        "Pós-barba calmante e balm hidratante"
      ]
    },
    {
      id: "corte-barba",
      name: "Corte + Barba",
      price: 70.0,
      formattedPrice: "R$ 70,00",
      duration: "65 min",
      description: "A experiência completa da Barbearia Urban com condição especial. Alinhamento total do visual, corte personalizado e barba completa com toalha quente.",
      badge: "Combo Mais Escolhido",
      popular: true,
      included: [
        "Corte masculino completo e personalizado",
        "Barboterapia completa com toalha quente",
        "Lavagem especial e massagem capilar",
        "Finalização com óleo nobre e pomada",
        "Chopp artesanal ou espresso de cortesia"
      ]
    },
    {
      id: "acabamento-pezinho",
      name: "Acabamento & Pezinho",
      price: 20.0,
      formattedPrice: "R$ 20,00",
      duration: "15 min",
      description: "Manutenção rápida das linhas laterais, nuca e costeletas na navalha com toalha quente rápida para manter o corte impecável.",
      included: [
        "Alinhamento da nuca e costeletas",
        "Navalhete de precisão",
        "Loção refrescante pós-navalha"
      ]
    },
    {
      id: "barboterapia-spa",
      name: "Barboterapia & SPA Facial",
      price: 50.0,
      formattedPrice: "R$ 50,00",
      duration: "45 min",
      description: "Tratamento facial masculino com esfoliação de grãos de café, vapor de ozônio, toalha aromatizada e hidratação com massagem modeladora.",
      included: [
        "Esfoliação facial desobstrutiva",
        "Vapor de ozônio revigorante",
        "Máscara preta de argila purificante",
        "Massagem relaxante facial e pescoço"
      ]
    },
    {
      id: "sobrancelha-navalha",
      name: "Sobrancelha na Navalha",
      price: 15.0,
      formattedPrice: "R$ 15,00",
      duration: "10 min",
      description: "Limpeza discreta e desenho natural das sobrancelhas masculinas, mantendo a virilidade e alinhamento do olhar.",
      included: [
        "Remoção dos excessos entre as sobrancelhas",
        "Alinhamento natural sem afinar",
        "Gel calmante para a pele"
      ]
    }
  ] as ServiceItem[],

  // Mestres Barbeiros
  barbers: [
    {
      id: "matheus-silva",
      name: "Matheus Silva",
      role: "Head Barber & Co-fundador",
      experience: "12 anos de bancada",
      specialty: "Low Fade, Taper Fade & Cortes Clássicos",
      bio: "Especialista formado em Londres e com passagens pelas barbearias mais conceituadas de São Paulo. Domina a técnica de tesoura clássica e transições suaves de degradê.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ricardo-mendes",
      name: "Ricardo Mendes",
      role: "Master Barber & Barbieri",
      experience: "9 anos de bancada",
      specialty: "Barboterapia Tradicional & Barba Lenhador",
      bio: "Apaixonado pelo ritual da lâmina e navalha clássica. Referência em cuidados dermatológicos com a pele masculina e modelagem de barbas volumosas.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "bruno-alencar",
      name: "Bruno Alencar",
      role: "Especialista em Visagismo",
      experience: "7 anos de bancada",
      specialty: "Texturização, Pompadour & Fade Militar",
      bio: "Focado em harmonizar o estilo capilar com a estrutura óssea e o estilo de vida de cada cliente. Especialista em finalizações contemporâneas.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    }
  ] as BarberItem[],

  // Galeria de Fotos Realistas / Estilo Stitch
  gallery: [
    {
      id: "gal-1",
      title: "Fade Degradê com Texturizado Superior",
      category: "cortes",
      categoryLabel: "Cortes",
      imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-2",
      title: "Ritual Clássico de Toalha Quente e Navalha",
      category: "barba",
      categoryLabel: "Barba",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-3",
      title: "Bancada e Estação de Trabalho em Madeira Escura",
      category: "ambiente",
      categoryLabel: "Ambiente",
      imageUrl: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-4",
      title: "Barba Desenhada com Linhas Marcadas",
      category: "barba",
      categoryLabel: "Barba",
      imageUrl: "https://images.unsplash.com/photo-1517832606589-7629c3395909?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-5",
      title: "Corte Clássico Executivo na Tesoura",
      category: "cortes",
      categoryLabel: "Cortes",
      imageUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "gal-6",
      title: "Lounge Chesterfield & Chopp Artesanal",
      category: "ambiente",
      categoryLabel: "Ambiente",
      imageUrl: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=800&q=80"
    }
  ] as GalleryItem[],

  // Horários disponíveis para agendamento interativo
  availableTimeSlots: [
    "09:00", "09:45", "10:30", "11:15", "13:00", 
    "13:45", "14:30", "15:15", "16:00", "16:45", 
    "17:30", "18:15", "19:00"
  ],

  // Depoimentos Verificados
  testimonials: [
    {
      id: "dep-1",
      name: "Rodrigo Vasconcellos",
      role: "Empresário & Cliente há 3 anos",
      rating: 5,
      date: "Há 1 semana",
      service: "Corte + Barba",
      comment: "Melhor barbearia de São Paulo sem sombra de dúvidas. O Matheus entende exatamente o que quero sem eu precisar falar muito. Pontualidade britânica, chopp sempre gelado e acabamento impecável."
    },
    {
      id: "dep-2",
      name: "Gabriel Antunes",
      role: "Advogado Tributarista",
      rating: 5,
      date: "Há 2 semanas",
      service: "Barboterapia & Toalha Quente",
      comment: "A barboterapia do Ricardo é terapêutica depois de uma semana pesada no escritório. A toalha quente e o vapor de ozônio renovam a pele. Não troco por nada."
    },
    {
      id: "dep-3",
      name: "Lucas Pinheiro",
      role: "Diretor de Arte",
      rating: 5,
      date: "Há 3 semanas",
      service: "Corte Masculino (Fade)",
      comment: "Atenção cirúrgica aos detalhes. O ambiente industrial escuro com acabamento em cobre é sensacional. O agendamento direto pelo WhatsApp é rápido e sem burocracia."
    }
  ] as TestimonialItem[],

  // Perguntas Frequentes
  faqs: [
    {
      question: "Como funciona o agendamento pelo WhatsApp?",
      answer: "Basta clicar em qualquer botão de 'Agendar Horário' ou escolher o serviço desejado. O sistema cria uma mensagem pronta no seu WhatsApp informando o serviço, e nossa equipe confirma o melhor horário em poucos minutos."
    },
    {
      question: "Preciso agendar com antecedência ou posso ser atendido por ordem de chegada?",
      answer: "Priorizamos o agendamento prévio para garantir pontualidade e zero tempo de espera. Atendimentos por ordem de chegada são realizados conforme a disponibilidade das bancadas."
    },
    {
      question: "Quais as formas de pagamento aceitas?",
      answer: "Aceitamos Pix, cartões de crédito (Visa, Mastercard, Elo, Amex) e cartões de débito. Não cobramos taxa adicional para pagamentos no cartão."
    },
    {
      question: "Existe estacionamento no local?",
      answer: "Sim! Possuímos convênio com o estacionamento localizado no edifício vizinho (Rua Augusta, 1450). Nossos clientes têm direito a 1 hora de cortesia."
    },
    {
      question: "O que acontece se eu me atrasar para o horário agendado?",
      answer: "Temos uma tolerância de 10 minutos para não comprometer a agenda dos clientes seguintes. Se previr algum imprevisto no trânsito, basta nos avisar pelo WhatsApp que faremos o possível para remanejar."
    }
  ] as FAQItem[]
};

/**
 * Função utilitária para gerar a URL formatada do WhatsApp com encodeURIComponent
 * Atende ao requisito estrito:
 * "Utilizar o formato: https://wa.me/5511999999999?text=MENSAGEM_CODIFICADA"
 * "Cada serviço deve gerar uma mensagem personalizada:
 * 'Olá! Gostaria de agendar um horário para [NOME DO SERVIÇO] na Barbearia Urban.'"
 */
export function getWhatsAppBookingUrl(
  serviceName?: string,
  options?: {
    date?: string;
    time?: string;
    barber?: string;
    customNote?: string;
  }
): string {
  const number = BARBERSHOP_CONFIG.whatsappNumber;
  let text = "";

  if (serviceName) {
    text = `Olá! Gostaria de agendar um horário para ${serviceName} na Barbearia Urban.`;
    
    // Detalhes opcionais se vierem do fluxo interativo de agendamento
    const details: string[] = [];
    if (options?.barber) {
      details.push(`• Profissional: ${options.barber}`);
    }
    if (options?.date) {
      details.push(`• Data sugerida: ${options.date}`);
    }
    if (options?.time) {
      details.push(`• Horário desejado: ${options.time}`);
    }
    if (options?.customNote) {
      details.push(`• Observação: ${options.customNote}`);
    }

    if (details.length > 0) {
      text += `\n\nDetalhes do agendamento:\n${details.join("\n")}`;
    }
  } else {
    text = "Olá! Gostaria de agendar um horário na Barbearia Urban.";
  }

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encodedText}`;
}

/**
 * Verifica se a barbearia está atualmente aberta com base no horário do dispositivo
 */
export function getBarbershopStatus(): { isOpen: boolean; message: string } {
  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour + minute / 60;

  if (day === 0) {
    return {
      isOpen: false,
      message: "Fechado hoje (Domingo) • Reabrimos Segunda às 09:00"
    };
  }

  if (day >= 1 && day <= 5) {
    if (currentTime >= 9 && currentTime < 20) {
      return {
        isOpen: true,
        message: "Aberto agora • Atendimento até as 20:00"
      };
    } else {
      return {
        isOpen: false,
        message: "Fechado agora • Atendimento Seg a Sex: 09h às 20h"
      };
    }
  }

  if (day === 6) {
    if (currentTime >= 9 && currentTime < 19) {
      return {
        isOpen: true,
        message: "Aberto hoje • Atendimento até as 19:00"
      };
    } else {
      return {
        isOpen: false,
        message: "Fechado agora • Atendimento Sábado: 09h às 19h"
      };
    }
  }

  return {
    isOpen: false,
    message: "Fechado no momento"
  };
}
