# THERMO PURE - Codebase Context for AI

## BUSINESS_CONTEXT
```yaml
type: local_business_website
business_name: THERMO PURE
business_type: exterior_cleaning_service
service: steam_low_pressure_cleaning
location: Niort, Deux-Sèvres (79), France
coverage: [Deux-Sèvres, Charente-Maritime, Vendée, Vienne]
contact:
  phone: "+33671558027"
  email: "contact@thermo-pure.com"
  siret: "991 013 038 00013"
domain: "https://thermo-pure.com"
```

## TECH_STACK
```yaml
framework: Next.js 15.5.7
runtime: React 19.1.0
language: TypeScript 5
styling: TailwindCSS 3.4.17
ui_components: [Radix UI, Vaul (drawer), Lucide Icons]
email_service: Resend
image_optimization: Sharp
build: Turbopack
deployment: Custom server (nginx)
```

## FILE_STRUCTURE
```
src/
├── app/
│   ├── layout.tsx              # ROOT_LAYOUT: metadata, SEO, structured_data, analytics
│   ├── page.tsx                # HOME_PAGE: renders Layout component
│   ├── globals.css             # GLOBAL_STYLES: tailwind imports
│   ├── manifest.ts             # PWA_MANIFEST
│   ├── api/
│   │   └── contact/route.ts    # API_ENDPOINT: POST /api/contact (Resend email)
│   ├── sitemap.xml/route.ts    # DYNAMIC_SITEMAP: generates XML
│   ├── image-sitemap.xml/route.ts  # IMAGE_SITEMAP: 11 images
│   ├── video-sitemap.xml/route.ts  # VIDEO_SITEMAP: 1 video
│   ├── mentions-legales/page.tsx   # LEGAL_PAGE
│   └── politique-confidentialite/page.tsx  # PRIVACY_PAGE
├── components/
│   ├── components/
│   │   ├── layout.tsx          # MAIN_LAYOUT: Header + Page + Footer + ScrollToTop + StickyCtaMobile
│   │   ├── header.tsx          # HEADER: navigation, logo, mobile drawer
│   │   ├── footer.tsx          # FOOTER: contact info, social links, legal links
│   │   └── page.tsx            # PAGE_CONTENT: assembles all sections in order
│   ├── sections/
│   │   ├── hero.tsx            # SECTION_1: main CTA, background image/video
│   │   ├── examples.tsx        # SECTION_2: video demonstration, before/after gallery
│   │   ├── presentation.tsx    # SECTION_3: 4 services cards (facades, toitures, terrasses, autres)
│   │   ├── steam-cleaning.tsx  # SECTION_4: differentiator explanation (vapeur basse pression)
│   │   ├── devis.tsx           # SECTION_5: quote CTA section
│   │   ├── about.tsx           # SECTION_6: about the company
│   │   ├── faq-fixed.tsx       # SECTION_7: FAQ accordion (7 questions)
│   │   └── contact.tsx         # SECTION_8: contact form (name, email, phone, subject, message)
│   ├── ui/
│   │   ├── button.tsx          # UI_BUTTON: variant-based button component
│   │   ├── card.tsx            # UI_CARD: card container components
│   │   ├── drawer.tsx          # UI_DRAWER: mobile navigation drawer (Vaul)
│   │   ├── input.tsx           # UI_INPUT: form input
│   │   ├── textarea.tsx        # UI_TEXTAREA: form textarea
│   │   ├── label.tsx           # UI_LABEL: form label
│   │   ├── badge.tsx           # UI_BADGE: badge component
│   │   ├── scroll-to-top.tsx   # UI_SCROLL: floating scroll-to-top button
│   │   └── sticky-cta-mobile.tsx  # UI_STICKY_CTA: fixed mobile call button
│   └── structured-data.tsx     # SEO_SCHEMA: VideoObject + FAQPage JSON-LD
public/
├── favicon.ico                 # FAVICON: 48x48 ICO format
├── favicon-16.png              # FAVICON: 16x16 for browser tabs
├── favicon-32.png              # FAVICON: 32x32 for browser tabs
├── favicon.png                 # FAVICON: 48x48 PNG
├── favicon-192.png             # FAVICON: 192x192 for Google Search & Apple
├── favicon-512.png             # FAVICON: 512x512 for PWA
├── logo.webp                   # LOGO: company logo (200x200)
├── logo.avif                   # LOGO: company logo AVIF format
├── nettoyage-facade-toiture-vapeur-thermo-pure.[webp|avif]  # HERO_IMAGE
├── nettoyage-toiture-avant-apres-niort.[webp|avif]          # GALLERY
├── nettoyage-facade-pierre-deux-sevres.[webp|avif]          # GALLERY
├── nettoyage-terrasse-exterieure-thermo-pure.[webp|avif]    # GALLERY
├── demoussage-toiture-vapeur-nouvelle-aquitaine.[webp|avif] # GALLERY
├── nettoyage-mur-exterieur-niort.[webp|avif]                # GALLERY
├── nettoyage-facade-commerciale-niort.[webp|avif]           # GALLERY
├── renovation-surface-exterieure-vapeur.[webp|avif]         # GALLERY
├── nettoyage-facade-vapeur-basse-pression.[webp|avif]       # SERVICE_IMAGE
├── nettoyage-terrasse-vapeur-basse-pression.[webp|avif]     # SERVICE_IMAGE
├── video_presentation.webm     # VIDEO: demonstration (6.2MB)
├── robots.txt                  # ROBOTS: sitemap references, bot rules
└── sitemap-index.xml           # STATIC_SITEMAP: fallback sitemap
```

## SEO_CONFIGURATION
```yaml
metadata_location: src/app/layout.tsx
title: "Nettoyage Toiture & Façade Niort (79) | Vapeur Basse Pression"
description: "N'abîmez pas votre maison avec la haute pression ! Nettoyage vapeur toiture & façade à Niort (79). Sans produits chimiques. Devis Gratuit."
structured_data:
  - type: LocalBusiness
    location: layout.tsx (inline script)
    includes: [name, logo, image, description, address, geo, telephone, email, openingHours, areaServed, services]
  - type: VideoObject
    location: src/components/structured-data.tsx
  - type: FAQPage
    location: src/components/structured-data.tsx
sitemaps:
  - /sitemap.xml (dynamic, 3 pages)
  - /sitemap-index.xml (static fallback)
  - /image-sitemap.xml (11 images)
  - /video-sitemap.xml (1 video)
canonical: https://thermo-pure.com
robots: index, follow
```

## COMPONENT_HIERARCHY
```
RootLayout (layout.tsx)
└── Home (page.tsx)
    └── StructuredData
    └── Layout (components/layout.tsx)
        ├── Header
        │   ├── Logo
        │   ├── Navigation (desktop)
        │   └── Drawer (mobile)
        ├── Page (components/page.tsx)
        │   ├── HeroSection
        │   ├── ExamplesSection
        │   ├── PresentationSection
        │   ├── SteamCleaningSection
        │   ├── DevisSection
        │   ├── AboutSection
        │   ├── FAQSection
        │   └── ContactSection
        ├── Footer
        ├── ScrollToTop
        └── StickyCtaMobile
```

## API_ENDPOINTS
```yaml
POST /api/contact:
  input:
    name: string (required)
    email: string (required)
    phone: string (optional)
    subject: string (required)
    message: string (required)
  output:
    success: { success: true, message: string }
    error: { error: string }
  service: Resend
  env_var: RESEND_API_KEY
  destination: contact@thermo-pure.com
```

## STYLING_CONVENTIONS
```yaml
framework: TailwindCSS
color_scheme:
  primary: sky-600 (#0284c7), sky-700 (#0369a1)
  secondary: emerald-500, emerald-600
  background: white, slate-50, slate-900 (dark sections)
  text: slate-700, slate-900, white
animations: tailwindcss-animate, tw-animate-css
responsive_breakpoints: [sm: 640px, md: 768px, lg: 1024px, xl: 1280px]
```

## NAVIGATION_ANCHORS
```yaml
sections:
  - id: "presentation"
  - id: "examples"
  - id: "devis"
  - id: "about"
  - id: "faq"
  - id: "contact"
```

## IMAGE_FORMATS
```yaml
strategy: dual_format (avif + webp)
avif: primary (smaller, modern browsers)
webp: fallback (wider support)
quality: 85-90
optimization: Next.js Image component with Sharp
naming_convention: SEO-optimized (lowercase, hyphens, keywords, location)
  example: nettoyage-facade-vapeur-basse-pression.webp
```

## ENV_VARIABLES
```yaml
required:
  - RESEND_API_KEY: Resend API key for email sending
```

## BUILD_COMMANDS
```bash
dev: npm run dev        # Next.js dev with Turbopack
build: npm run build    # Production build
start: npm run start    # Start production server
lint: npm run lint      # ESLint
```

## KNOWN_ISSUES
```yaml
- images.qualities warning (Next.js 16 preparation)
- baseline-browser-mapping outdated (dev dependency)
- Google favicon: may take time to update after re-indexation
```

## MODIFICATION_GUIDELINES
```yaml
adding_page:
  1. Create src/app/[slug]/page.tsx
  2. Add to sitemap.xml/route.ts
  3. Update navigation in header.tsx if needed

adding_section:
  1. Create src/components/sections/[name].tsx
  2. Import in src/components/components/page.tsx
  3. Add navigation anchor if needed

modifying_seo:
  1. Metadata: src/app/layout.tsx (metadata export)
  2. Structured data: layout.tsx (LocalBusiness) or structured-data.tsx (Video, FAQ)
  3. Sitemaps: respective route.ts files

styling:
  1. Use TailwindCSS classes
  2. Follow existing color scheme (sky-600/700 primary)
  3. Use existing UI components from src/components/ui/
```
