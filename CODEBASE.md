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
ui_components: [shadcn/ui (Card, Badge, Button, Drawer, Carousel), Radix UI, Vaul, Lucide Icons]
carousel: embla-carousel-react (via shadcn Carousel)
blog: [gray-matter (frontmatter), react-markdown, remark-gfm]
email_service: Resend
image_optimization: Sharp
analytics: Google Analytics (GA4) + Google Ads conversion tracking
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
│   │   └── contact/route.ts    # API_ENDPOINT: POST /api/contact (Resend email + Google Ads conversion)
│   ├── sitemap.xml/route.ts    # DYNAMIC_SITEMAP: generates XML (includes blog URLs)
│   ├── image-sitemap.xml/route.ts  # IMAGE_SITEMAP: 11 images
│   ├── video-sitemap.xml/route.ts  # VIDEO_SITEMAP: 1 video
│   ├── blog/
│   │   ├── layout.tsx          # BLOG_LAYOUT: BlogHeader + main content + Footer
│   │   ├── page.tsx            # BLOG_LISTING: grid of BlogCard, BreadcrumbList JSON-LD
│   │   └── [slug]/page.tsx     # BLOG_ARTICLE: dynamic page, Article + BreadcrumbList JSON-LD
│   ├── mentions-legales/page.tsx   # LEGAL_PAGE (RGPD, Google Analytics cookies)
│   └── politique-confidentialite/page.tsx  # PRIVACY_PAGE (RGPD, Google Analytics cookies)
├── content/
│   └── blog/
│       └── nettoyage-toiture-79.md  # BLOG_ARTICLE: markdown with frontmatter
├── lib/
│   └── blog.ts                 # BLOG_LIB: getAllPosts, getPostBySlug, getAllSlugs
├── components/
│   ├── components/
│   │   ├── layout.tsx          # MAIN_LAYOUT: Header + Page + Footer + ScrollToTop + StickyCtaMobile
│   │   ├── header.tsx          # HEADER: nav (Présentation|Exemples|Devis|Qui sommes-nous|Blog|FAQ|Contact)
│   │   ├── footer.tsx          # FOOTER: contact info, social links, legal links, blog link
│   │   └── page.tsx            # PAGE_CONTENT: assembles all sections in order
│   ├── sections/
│   │   ├── hero.tsx            # SECTION_1: main CTA, background image/video
│   │   ├── examples.tsx        # SECTION_2: video + shadcn Carousel gallery (embla, manual navigation)
│   │   ├── presentation.tsx    # SECTION_3: 3 service cards (shadcn Card), data-driven
│   │   ├── steam-cleaning.tsx  # SECTION_4: differentiator explanation (vapeur basse pression)
│   │   ├── devis.tsx           # SECTION_5: 3-step quote process (shadcn Card)
│   │   ├── about.tsx           # SECTION_6: about the company
│   │   ├── faq-fixed.tsx       # SECTION_7: FAQ accordion (7 questions, vapeur/toiture/écologie focus)
│   │   └── contact.tsx         # SECTION_8: contact form + Google Ads generate_lead tracking
│   ├── blog/
│   │   ├── blog-header.tsx     # BLOG_HEADER: simplified header for blog pages
│   │   ├── blog-card.tsx       # BLOG_CARD: article card for listing (shadcn Card + Badge)
│   │   ├── blog-article.tsx    # BLOG_ARTICLE: markdown renderer (react-markdown + remark-gfm)
│   │   └── blog-cta.tsx        # BLOG_CTA: devis + "Voir nos réalisations" buttons
│   ├── ui/
│   │   ├── button.tsx          # UI_BUTTON: variant-based button component (shadcn)
│   │   ├── card.tsx            # UI_CARD: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter (shadcn)
│   │   ├── carousel.tsx        # UI_CAROUSEL: Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext (shadcn/embla)
│   │   ├── drawer.tsx          # UI_DRAWER: mobile navigation drawer (Vaul)
│   │   ├── input.tsx           # UI_INPUT: form input (shadcn)
│   │   ├── textarea.tsx        # UI_TEXTAREA: form textarea (shadcn)
│   │   ├── label.tsx           # UI_LABEL: form label (shadcn)
│   │   ├── badge.tsx           # UI_BADGE: badge component (shadcn)
│   │   ├── scroll-to-top.tsx   # UI_SCROLL: floating scroll-to-top button
│   │   └── sticky-cta-mobile.tsx  # UI_STICKY_CTA: fixed mobile/desktop devis button
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
title: "THERMO PURE - Nettoyage Vapeur Toiture & Façade Niort (79)"
description: "THERMO PURE : nettoyage vapeur basse pression de toitures, façades et terrasses à Niort (79). Sans produits chimiques, sans abîmer. Devis Gratuit."
structured_data:
  - type: LocalBusiness
    location: layout.tsx (inline script)
    includes: [name, logo, image, description, address, geo, telephone, email, openingHours, areaServed, services]
  - type: VideoObject
    location: src/components/structured-data.tsx
  - type: FAQPage
    location: src/components/structured-data.tsx (vapeur/toiture/écologie focus)
  - type: Article
    location: src/app/blog/[slug]/page.tsx (per article, dynamic)
  - type: BreadcrumbList
    location: src/app/blog/page.tsx + src/app/blog/[slug]/page.tsx
sitemaps:
  - /sitemap.xml (dynamic, includes homepage + blog listing + all blog articles + legal pages)
  - /sitemap-index.xml (static fallback)
  - /image-sitemap.xml (11 images)
  - /video-sitemap.xml (1 video)
canonical: https://thermo-pure.com
robots: index, follow
blog_seo:
  - metadata: dynamic title, description, canonical per article
  - openGraph: type article, publishedTime, authors, images
  - twitter: summary_large_image card per article
  - keywords: injected from article frontmatter tags
  - generateStaticParams: pre-rendered at build time (SSG)
```

## COMPONENT_HIERARCHY
```
RootLayout (layout.tsx)
├── Home (page.tsx)
│   └── StructuredData
│   └── Layout (components/layout.tsx)
│       ├── Header (nav: Présentation|Exemples|Devis|Qui sommes-nous|Blog|FAQ|Contact)
│       │   ├── Logo
│       │   ├── Navigation (desktop)
│       │   └── Drawer (mobile)
│       ├── Page (components/page.tsx)
│       │   ├── HeroSection
│       │   ├── ExamplesSection (shadcn Carousel)
│       │   ├── PresentationSection (shadcn Card, data-driven)
│       │   ├── SteamCleaningSection
│       │   ├── DevisSection (shadcn Card)
│       │   ├── AboutSection
│       │   ├── FAQSection (vapeur/toiture/écologie)
│       │   └── ContactSection (+ Google Ads generate_lead)
│       ├── Footer
│       ├── ScrollToTop
│       └── StickyCtaMobile
└── Blog (blog/layout.tsx)
    ├── BlogHeader
    ├── BlogPage (blog/page.tsx) → grid of BlogCard
    ├── BlogPostPage (blog/[slug]/page.tsx) → BlogArticle + BlogCta
    └── Footer (shared with main site)
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
  side_effects:
    - Google Ads gtag('event', 'generate_lead') on success
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

## NAVIGATION
```yaml
header_links:
  - label: "Présentation"  → /#presentation
  - label: "Exemples"      → /#examples
  - label: "Devis"         → /#devis
  - label: "Qui sommes-nous" → /#about
  - label: "Blog"          → /blog (page route)
  - label: "FAQ"           → /#faq
  - label: "Contact"       → /#contact
section_anchors:
  - id: "presentation"
  - id: "examples"
  - id: "vapeur"
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

## BLOG_SYSTEM
```yaml
content_directory: src/content/blog/
format: Markdown with YAML frontmatter (gray-matter)
rendering: react-markdown + remark-gfm
frontmatter_fields:
  required: [title, description, date, slug]
  optional: [thumbnail, thumbnailAlt, tags, author]
routes:
  listing: /blog (static)
  article: /blog/[slug] (SSG via generateStaticParams)
adding_article:
  1. Create src/content/blog/[slug].md with frontmatter
  2. Add thumbnail image to public/
  3. Build will auto-generate the page and update sitemap
```

## KNOWN_ISSUES
```yaml
- images.qualities warning (Next.js 16 preparation)
- baseline-browser-mapping outdated (dev dependency)
- Google favicon: may take time to update after re-indexation
- OG image is logo.webp (200x200) - should be 1200x630 for optimal social sharing
```

## MODIFICATION_GUIDELINES
```yaml
adding_page:
  1. Create src/app/[slug]/page.tsx
  2. Add to sitemap.xml/route.ts
  3. Update navigation in header.tsx and footer.tsx if needed

adding_blog_article:
  1. Create src/content/blog/[slug].md with frontmatter (title, description, date, slug, thumbnail, tags)
  2. Add thumbnail image to public/
  3. Sitemap updates automatically at build

adding_section:
  1. Create src/components/sections/[name].tsx
  2. Import in src/components/components/page.tsx
  3. Add navigation anchor if needed

modifying_seo:
  1. Metadata: src/app/layout.tsx (metadata export)
  2. Structured data: layout.tsx (LocalBusiness) or structured-data.tsx (Video, FAQ)
  3. Blog SEO: src/app/blog/[slug]/page.tsx (Article schema, OG, Twitter)
  4. Sitemaps: respective route.ts files

styling:
  1. Use TailwindCSS classes
  2. Follow existing color scheme (sky-600/700 primary)
  3. Use shadcn/ui components from src/components/ui/
```
