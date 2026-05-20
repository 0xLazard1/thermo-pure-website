# Spec — Refonte design Thermo Pure (2026-05)

> Refonte complète du site sur la branche `dev`. Le design vient de Claude Design (ZIP unzippé sur `~/Desktop/thermo-pure-design/`, 27 composants JSX + assets). Cible : Next.js 15 + Tailwind 3 + TypeScript.

## Contexte

- Site actuel sur `main` : Next.js stateless, prod sur `thermo-pure.com` via Coolify (auto-deploy au push)
- Branche `dev` : reset sur `main` puis vidée — ne reste que l'infra (Next, Tailwind, Docker, configs, pnpm migration)
- Nouveau design : 27 composants `.jsx` exportés en artifact Claude (inline styles, `window.TP`/`window.SERVICE_DATA`/etc. comme globals, pas d'imports). À porter vers Next/TS/Tailwind.

## Décisions de portage (validées)

| Sujet | Décision |
|---|---|
| Langage | `.jsx` → `.tsx` (TypeScript strict comme le reste du projet) |
| Styles | inline styles → classes Tailwind (cohérent stack) |
| Responsive | Fusion Desktop+Mobile en composants uniques avec breakpoints Tailwind `md:`/`lg:` |
| Tokens | `window.TP` → import depuis `src/lib/tokens.ts` + extension `tailwind.config.js` (couleurs, fonts) |
| Services data | `window.SERVICE_DATA` → `src/lib/services.ts` typé |
| `tweaks-panel.jsx` | jeté (UI d'édition Claude Design, prod-inutile) |
| Hero | V2 uniquement (V1 et V3 supprimés du dernier export Claude) |
| Fonts | Bricolage Grotesque + Fraunces + JetBrains Mono via `next/font/google` |

## À récupérer de `origin/main`

Tout adapté au nouveau design system :

- `src/app/mentions-legales/page.tsx` (CNIL)
- `src/app/politique-confidentialite/page.tsx` (CNIL)
- `src/app/api/contact/route.ts` (handler Resend — inchangé, juste brancher le form `ContactFullBleed` dessus)
- `src/app/sitemap.xml/route.ts` + `image-sitemap.xml` + `video-sitemap.xml` (SEO routes, adapter aux nouvelles URLs)
- `src/app/manifest.ts` (PWA)
- `src/components/structured-data.tsx` (JSON-LD pour SEO)
- `src/app/blog/page.tsx` + `[slug]/page.tsx` + composants blog (UI à re-skinner avec les nouveaux tokens)
- `src/lib/blog.ts` (gray-matter parsing — inchangé)
- `src/content/blog/*.md` (2 articles indexables)
- `public/robots.txt`, `public/llms.txt`

## Architecture cible

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer + fonts)
│   ├── page.tsx                # Home : Hero + Methode + Services + Galerie + Video + Comparaison + Contact
│   ├── globals.css             # CSS vars (tokens.ts les écrit ici)
│   ├── manifest.ts             # récupéré de main
│   ├── nettoyage-toiture/page.tsx
│   ├── nettoyage-facade/page.tsx
│   ├── nettoyage-terrasse/page.tsx
│   ├── mentions-legales/page.tsx       # récupéré
│   ├── politique-confidentialite/page.tsx  # récupéré
│   ├── blog/page.tsx + [slug]/page.tsx     # récupéré + re-skinné
│   ├── api/contact/route.ts            # récupéré tel quel
│   ├── sitemap.xml/route.ts            # récupéré + adapté
│   ├── image-sitemap.xml/route.ts      # récupéré
│   └── video-sitemap.xml/route.ts      # récupéré
├── components/
│   ├── ui/                     # Logo, Nav, PhoneButton, QuoteButton, Stars
│   ├── sections/               # Hero, Methode, Services, Galerie, Video, Comparaison, Contact
│   ├── services/               # ServiceLanding (re-skinné)
│   ├── blog/                   # récupéré + re-skinné
│   └── structured-data.tsx     # récupéré
├── lib/
│   ├── tokens.ts               # design tokens (depuis tokens.jsx)
│   ├── services.ts             # service catalog typé (depuis serviceData.jsx)
│   └── blog.ts                 # récupéré
└── content/blog/*.md           # récupéré
public/
├── assets du nouveau design    # hero-drone, gallery-01..05, service-*, facade-avant-apres, logo, presentation.mp4
├── images blog                 # récupérées de main
├── robots.txt + llms.txt       # récupéré
└── favicon, manifest icons     # à régénérer si besoin (le nouveau logo a un look différent)
```

## Build sequence (phases courtes, commitables une par une)

| # | Phase | Sortie |
|---|---|---|
| 1 | Foundation : tokens.ts + tailwind.config.js extension + globals.css + Google fonts + root layout vide | Site qui boote sans erreur, fonts chargées, palette dispo |
| 2 | Assets : copier `assets/` du ZIP vers `public/` | Images accessibles |
| 3 | Shared UI : Logo, Nav, PhoneButton, QuoteButton, Stars (TSX + Tailwind) | Composants réutilisables typés |
| 4 | Home — section par section : Hero → Methode → Services → Galerie → Video → Comparaison → Contact | `/` rend la home |
| 5 | Service catalog : `services.ts` (TS depuis `serviceData.jsx`) + `ServiceLanding` re-skinné | 3 routes `/nettoyage-{toiture,facade,terrasse}` |
| 6 | Récup légal + blog + structured-data depuis main + re-skin avec tokens | CNIL + 2 articles indexés |
| 7 | Récup `/api/contact` + branchement du form `ContactFullBleed` dessus | Form fonctionnel Resend |
| 8 | Récup sitemap/robots/manifest, adapter aux nouvelles routes | SEO conservé |
| 9 | `pnpm build` + `pnpm lint` propres, vérifs visuelles dans `pnpm dev` | Site cohérent et buildable |
| 10 | Push `dev` → test sur `staging.thermo-pure.com` (Coolify) | Validation visuelle prod-like |
| 11 | PR `dev` → `main` quand validé → auto-deploy thermo-pure.com | Live |

## Risques connus

- **27 composants × portage paradigme** : estimation 4-6h de coding non-stop, mais on coupe par phase ; chaque phase est commitable séparément → tu peux interrompre n'importe quand sans perdre l'avancée.
- **Le ContactFullBleed.jsx est un form HTML statique** — il faut écrire le `onSubmit` qui POST vers `/api/contact` et gérer les états (loading/success/error). 1h de travail.
- **Le blog actuel utilise un design qu'il faut re-skinner** — si on garde la même structure HTML mais juste tokens, c'est rapide.
- **Les inline styles du design utilisent beaucoup de `clamp()` et de styles complexes** — certains ne se traduisent pas trivialement en Tailwind, on garde ceux-là en inline (hybride local).
- **Pas de tests** : validation = `pnpm build` + œil humain sur `pnpm dev` et `staging.thermo-pure.com`.

## Hors scope

- Refaire le favicon avec le nouveau logo (à voir séparément si besoin)
- Animations avancées au-delà de ce que le design importé propose
- Internationalisation
- Migration DB / auth / Server Actions (site stateless reste stateless)
- Fix des 4 erreurs `@typescript-eslint/no-require-imports` pré-existantes (autre PR)
