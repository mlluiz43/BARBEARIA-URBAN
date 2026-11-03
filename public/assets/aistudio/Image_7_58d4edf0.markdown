---
name: Urban Modern Barbershop
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#dbc1b4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#a38c80'
  outline-variant: '#554339'
  surface-tint: '#ffb68c'
  primary: '#ffb68c'
  on-primary: '#532200'
  primary-container: '#d97736'
  on-primary-container: '#491d00'
  inverse-primary: '#994703'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#60d4f9'
  on-tertiary: '#003543'
  tertiary-container: '#009ec1'
  on-tertiary-container: '#002f3b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68c'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#753400'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#b6eaff'
  tertiary-fixed-dim: '#60d4f9'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e60'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: 0.04em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Syne
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-uppercase:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
  label-numeric:
    fontFamily: Syne
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.05em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an architectural, dark-luxury digital identity engineered for modern grooming rituals and bespoke lifestyle services. It translates the tactile atmosphere of a premium barbershop—oiled timber, brushed brass, razor steel, and matte leather—into an uncluttered, authoritative digital interface.

The design movement merges **Modern Editorial Minimalism** with **Industrial Luxury**:
- **Monolithic Compositions:** Deep, charcoal-grounded surfaces paired with deliberate, generous negative space to evoke discretion and executive confidence.
- **Masculine Elegance:** Sharp structural geometry, high-contrast typography, and purposeful warm copper accents that reference vintage brass instruments without nostalgic kitsch.
- **Editorial Directness:** Crisp borders, uppercase architectural typography, and focused content hierarchy tailored to high-efficiency booking flows and curated service menus in Brazilian Portuguese.

## Colors

The palette relies on deep, non-pure black foundational layers punctuated by a metallic copper-brass accent. It builds depth through tone rather than chromatic competition.

### Palette Architecture
- **Primary Accent (`#D97736`):** Warm amber/copper brass. Used strictly for high-value interactions, active status markers, key promotional callouts, and critical conversion triggers (e.g., booking confirmations, prime actions).
- **Secondary Neutral (`#A3A3A3`):** Neutral anodized gray. Assigned to secondary copy, inactive icons, system labels, timestamps, and metadata.
- **Base Canvas (`#111111`):** Deep charcoal primary background, providing visual weight and eliminating retina fatigue.
- **Surface Elevation (`#1C1C1C`):** Secondary container surface for cards, dropdown sheets, navigation bars, and segmented panels.
- **Surface Highlight / Hairline (`#292929`):** Subdued boundary tone for borders, dividers, and framing structures.
- **Primary Text (`#FFFFFF`):** High-contrast optical white reserved for headlines, primary buttons, and critical values.

### Functional Rules
- Never use the copper accent on broad surface fills; confine it to focal points, active states, indicators, and primary interactive elements.
- Maintain a minimum contrast ratio of 7:1 for white text over `#111111` and `#1C1C1C`, and at least 4.5:1 for copper accents on dark backgrounds.

## Typography

Typography balances architectural display forms with razor-sharp legible ergonomics.

- **Headlines (Syne):** Set in uppercase for primary navigational landmarks, hero statements, and category anchors (e.g., "SERVIÇOS EXCLUSIVOS", "AGENDAMENTO", "MESTRES BARBEIROS"). Syne injects structural confidence and bespoke editorial prestige.
- **Body & Functional Labels (Hanken Grotesk):** Provides high legibility for service descriptions, duration badges, and interface data. Low geometric friction ensures dense tables and calendar timeslots remain legible at glance speeds.
- **Micro-Labels & Metadata:** Styled using `label-uppercase` in all-caps with generous letter-spacing (`0.12em`), emphasizing precision and craft.

## Layout & Spacing

The layout model is anchored to a 12-column responsive fluid grid structured around broad breathing room and architectural alignment.

### Grid & Breakpoints
- **Mobile (< 768px):** 4 columns, 1rem (16px) gutters, 1.25rem (20px) margins. Elements stack vertically, prioritizing thumb-zone scheduling and single-column service selection.
- **Tablet (768px - 1024px):** 8 columns, 1.5rem (24px) gutters, 2rem (32px) margins. Enables two-column split cards (barber profile adjacent to availability).
- **Desktop (> 1024px):** 12 columns, max-width 1360px centered canvas, 1.5rem (24px) gutters, 3rem (48px) margins. Accommodates editorial multi-column compositions.

### Layout Philosophy
Generous vertical spacing reflects high-end restraint. Avoid crowding interface controls; let large headers command full visual blocks before presenting concise interactive forms.

## Elevation & Depth

This design system avoids blurry skeuomorphic drop-shadows and neon glows. Instead, visual hierarchy is articulated strictly via **surface stratification** and **crisp 1px borders**:

- **Ground Level (`#111111`):** The master canvas tone.
- **Level 1 Containers (`#1C1C1C`):** Interactive cards, time-slot trays, and modal sheets, demarcated by a 1px solid border in `#292929`.
- **Level 2 Elevated Surfaces (`#242424`):** Flyout drawers, dropdowns, and date pickers. Border shifts to `#383838` to express physical proximity without cast shadows.
- **Focus / Active Elevation:** Represented by shifting borders from neutral `#292929` to accent `#D97736`, paired with an internal warm gradient wash of `rgba(217, 119, 54, 0.04)`.

## Shapes

The shape vocabulary uses strict zero-radius architecture (`0` - Sharp).

- **Rectilinear Precision:** Every button, card, input field, chip, and image container features clean 90-degree corners.
- **Physical Rationale:** Sharp angles reflect straight razors, squared mirrors, tailor shears, and clean-cut precision.
- **Exceptions:** Circular geometry is permitted solely for barber portraits and status dot indicators to contrast with the surrounding rectangular grid.

## Components

### Buttons
- **Primary Action (Agendar / Confirmar):** Solid `#D97736` background, `#FFFFFF` bold uppercase text (`Syne`), zero border-radius, 16px vertical by 28px horizontal padding. Hover shifts to `#E08548`. Active scales down microscopically (`scale(0.99)`).
- **Secondary Action:** Transparent background with a 1px solid `#FFFFFF` border, white text. Hover transitions to `#FFFFFF` fill with `#111111` text.
- **Tertiary / Ghost:** Transparent background, `#A3A3A3` text with subtle border-bottom underline on hover.

### Service & Barber Cards
- Built on `#1C1C1C` with a 1px `#292929` perimeter border.
- Layout emphasizes typographic contrast: Service title in uppercase `Syne`, duration in muted `Hanken Grotesk` (`#A3A3A3`), and price in highlighted copper-brass (`#D97736`).
- Hover state: Border shifts to `#D97736` over a 150ms transition.

### Chips & Time Slots (Horários)
- Sharp rectangular chips with 1px `#292929` outline on `#111111`.
- Selected state features a solid `#D97736` fill or a crisp 1px `#D97736` border with copper text and a subtle warm background tint (`rgba(217, 119, 54, 0.1)`). Disabled states sit at 30% opacity with struck-through labels.

### Input Fields
- Dark surface `#161616` with a 1px border in `#292929`.
- Text in `#FFFFFF`, placeholder in `#5A5A5A`.
- Active focus state commands a 1px border in `#D97736` with zero glow or blur.

### Checkboxes & Radio Buttons
- Strict square perimeters with 1px `#383838` borders.
- Checked state fills with `#D97736` presenting an optical white center indicator.

### Segmented Controls & Booking Stepper
- Continuous horizontal bar bounded by 1px `#292929` borders.
- Current active step features an uppercase label in `#FFFFFF` underlined by a persistent 2px copper `#D97736` bar.