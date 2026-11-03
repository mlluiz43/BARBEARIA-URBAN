# Barbearia Urban — Website & Landing Page

> *"Seu estilo. Nossa identidade."*

Website institucional completo, de alta performance e totalmente responsivo para a **Barbearia Urban**, desenvolvido com fidelidade estética ao design system industrial de luxo fornecido pelo Google Stitch.

---

## 💈 Visão Geral do Projeto

O projeto foi construído para transmitir a atmosfera tátil e sofisticada de uma barbearia contemporânea de alto padrão: superfícies escuras em grafite profundo (`#111111`), containers elevados (`#1C1C1C`), linhas estruturais milimétricas (`#292929`), acentos em cobre metálico envelhecido (`#D97736`) e geometria de cantos retos (*zero-radius architecture*).

### Principais Destaques:
- **Agendamento Direto pelo WhatsApp:** Cada serviço e o assistente de agendamento geram links no padrão oficial:
  `https://wa.me/5511999999999?text=MENSAGEM_CODIFICADA` utilizando `encodeURIComponent`.
- **Configuração Centralizada:** Número do WhatsApp, horários, catálogo de preços, endereço, dados da equipe e comodidades centralizados em um único arquivo: `src/config/barbershop.ts`.
- **Assistente Interativo de Agendamento (`BookingModal`):** Permite ao cliente escolher o serviço, o barbeiro, a data e o horário desejado em chips visuais e enviar tudo pronto para o WhatsApp da barbearia.
- **Galeria com Lightbox:** Filtros por categoria (*Cortes*, *Barba*, *Ambiente*) e visualizador em tela cheia com navegação por teclado e botões.
- **Indicador de Status em Tempo Real:** Detecta se a barbearia está aberta ou fechada com base no horário do cliente.
- **Zero Broken Images:** Componente resiliente com tratamento elegante de fallback caso alguma imagem externa oscile.
- **SEO & Acessibilidade:** Meta tags completas, OpenGraph, Twitter Card e dados estruturados Schema.org (`BarberShop / HairSalon`).

---

## 🛠️ Tecnologias Utilizadas

- **React 19** — Biblioteca moderna para interfaces reativas.
- **TypeScript** — Tipagem estática rigorosa para segurança e manutenção.
- **Tailwind CSS v4** — Framework de estilização com suporte nativo a CSS moderno e temas.
- **Vite** — Ferramenta de build ultrarrápida.
- **Lucide React** — Ícones consistentes e leves.
- **Google Fonts** — *Syne* (títulos display arquiteturais) e *Hanken Grotesk* (corpo de texto de alta legibilidade).

---

## 📁 Estrutura de Pastas

```text
/
├── public/
│   └── _redirects              # Configuração de redirecionamento SPA Netlify
├── src/
│   ├── components/
│   │   ├── About.tsx           # Seção sobre o conceito e comodidades
│   │   ├── Barbers.tsx         # Apresentação dos Mestres Barbeiros
│   │   ├── BookingModal.tsx    # Assistente de agendamento interativo
│   │   ├── Contact.tsx         # Informações, mapa escuro e formulário direto
│   │   ├── FAQ.tsx             # Perguntas frequentes em acordeão
│   │   ├── Footer.tsx          # Rodapé editorial com links e dados
│   │   ├── Gallery.tsx         # Galeria de fotos responsiva e lightbox
│   │   ├── Header.tsx          # Top Bar Contract com menu mobile
│   │   ├── Hero.tsx            # Dobra principal, métricas e CTAs
│   │   ├── ImageWithFallback.tsx # Prevenção de imagens quebradas
│   │   ├── Services.tsx        # Tabela e cards de serviços com preços
│   │   └── WhatsAppButton.tsx  # Botão flutuante de atendimento rápido
│   ├── config/
│   │   └── barbershop.ts       # ARQUIVO CENTRAL DE CONFIGURAÇÃO (WhatsApp, Serviços, etc.)
│   ├── App.tsx                 # Composição principal da aplicação
│   ├── index.css               # Importação Tailwind e variáveis do Stitch
│   └── main.tsx                # Ponto de entrada React
├── index.html                  # HTML5 com SEO e JSON-LD estruturado
├── netlify.toml                # Configuração de build e deploy para Netlify
├── package.json                # Dependências e scripts npm
└── tsconfig.json               # Configuração do TypeScript
```

---

## ⚙️ Como Alterar o Número do WhatsApp

Para atualizar o número do WhatsApp em **todos** os botões e formulários do site, abra o arquivo `src/config/barbershop.ts` e altere a propriedade:

```typescript
export const BARBERSHOP_CONFIG = {
  // Padrão Internacional: DDI + DDD + Número sem espaços ou traços
  whatsappNumber: "5511999999999", // Exemplo: 55 + 11 + 999999999
  whatsappDisplay: "(11) 99999-9999",
  ...
};
```

---

## 🚀 Instalação e Execução Local

### Pré-requisitos:
- **Node.js** (versão 18 ou superior recomendada)
- Gerenciador de pacotes **npm**

### Passo a passo:

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Executar em ambiente de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O site estará disponível no seu navegador em `http://localhost:3000`.

3. **Verificar tipos com o linter do TypeScript:**
   ```bash
   npm run lint
   ```

4. **Gerar a versão de produção:**
   ```bash
   npm run build
   ```
   Os arquivos finais otimizados serão gerados na pasta `dist/`.

5. **Testar a versão de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 🌐 Publicação no Netlify

O projeto já inclui os arquivos de configuração necessários para o Netlify (`netlify.toml` e `public/_redirects`).

### Opção 1: Via Git (Recomendado)
1. Envie o código para o seu repositório no **GitHub**, **GitLab** ou **Bitbucket**.
2. Acesse sua conta no [Netlify](https://app.netlify.com/).
3. Clique em **"Add new site"** > **"Import an existing project"**.
4. Conecte sua conta do Git e selecione o repositório da Barbearia Urban.
5. As configurações padrão já serão detectadas automaticamente:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Clique em **"Deploy Barbearia Urban"**. O Netlify publicará o site com HTTPS automático em poucos segundos.

### Opção 2: Drag & Drop (Manual)
1. No seu terminal local, execute:
   ```bash
   npm run build
   ```
2. Acesse [Netlify Drop](https://app.netlify.com/drop).
3. Arraste a pasta `dist` gerada para a área indicada na página.
4. Seu site estará publicado imediatamente!

---

## 📄 Licença

Este projeto é disponibilizado sob a licença **Apache-2.0**.
Desenvolvido com foco em estética comercial realista, alto desempenho e máxima conversão.
