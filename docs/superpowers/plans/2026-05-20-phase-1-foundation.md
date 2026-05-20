# Phase 1 — Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Poser le socle technique de la refonte design : design tokens TS, extension Tailwind, fonts Google, root layout et page placeholder. À la fin, `pnpm dev` rend une page avec les nouvelles couleurs et fonts, sans plus.

**Architecture:** Source unique des tokens dans `src/lib/tokens.ts` (typé). Tailwind étend son thème pour exposer ces tokens en classes utilitaires. Les fonts sont chargées via `next/font/google` qui pose des CSS vars `--font-*` sur `<html>`, et `tailwind.config.js` mappe `font-sans/serif/mono` sur ces vars. `globals.css` reste minimal (directives Tailwind + base body).

**Tech Stack:** TypeScript, Next.js 15 App Router, Tailwind CSS 3, `next/font/google` (Bricolage Grotesque, Fraunces, JetBrains Mono).

---

## Files

- **Create** `src/lib/tokens.ts` — design tokens TS (couleurs hex + font CSS var strings)
- **Modify** `tailwind.config.js` — remplacer le `theme.extend` shadcn-based par les tokens Thermo Pure (couleurs, fontFamily, boxShadow)
- **Create** `src/app/globals.css` — directives Tailwind + base body minimaliste
- **Create** `src/app/layout.tsx` — root layout (html lang="fr", fonts via `next/font/google`, metadata)
- **Create** `src/app/page.tsx` — placeholder qui affiche "Foundation OK" en utilisant les nouvelles couleurs/fonts

Pas de tests (le projet n'a pas d'infra de test). Validation par `pnpm build` propre + smoke test visuel `pnpm dev`.

---

## Task 1 : Créer les design tokens TypeScript

**Files:**
- Create: `src/lib/tokens.ts`

- [ ] **Step 1 :** Créer le dossier `src/lib/`

```bash
mkdir -p /Users/lazard/code/thermo-pure-website/.claude/worktrees/distracted-mcclintock-80a912/src/lib
```

- [ ] **Step 2 :** Écrire `src/lib/tokens.ts` avec le contenu exact ci-dessous

```typescript
// Thermo Pure — design tokens (port TS de tokens.jsx du ZIP Claude Design)
// "Logo-derived" : couleurs échantillonnées du logo (navy THERMO, vert PURE,
// teal goutte d'eau). Source unique pour les composants qui ont besoin des
// hex en runtime ; `tailwind.config.js` recopie ces valeurs côté classes utilitaires.

export const TP = {
  // SURFACES — navy "THERMO" famille
  ink:       '#0F2238',
  inkSoft:   '#1B3858',
  inkDeep:   '#091624',
  paper:     '#F6EFE2',
  paperWarm: '#ECE0C7',
  paperDeep: '#DDCFB2',

  // LINES & GLASS
  line:        'rgba(15, 34, 56, 0.12)',
  lineLight:   'rgba(255, 255, 255, 0.10)',
  lineStrong:  'rgba(255, 255, 255, 0.22)',

  // ACCENTS — logo
  sky:       '#2BA1C8',
  skyDeep:   '#163E61',
  leaf:      '#4FA72D',
  leafDark:  '#27882A',
  accent:    '#D9A35A',
  clay:      '#A84A2A',
  moss:      '#548E4A',

  // GLOWS — ombres colorées
  glowLeaf:     '0 8px 24px -8px rgba(79, 167, 45, 0.55)',
  glowLeafLg:   '0 14px 32px -10px rgba(79, 167, 45, 0.65)',
  glowSky:      '0 0 60px rgba(43, 161, 200, 0.25)',
  // Aliases rétro-compat avec les composants importés du ZIP qui utilisent
  // `glowCopper` (l'ancienne nomenclature avant le rebrand leaf-vert)
  glowCopper:   '0 8px 24px -8px rgba(79, 167, 45, 0.55)',
  glowCopperLg: '0 14px 32px -10px rgba(79, 167, 45, 0.65)',
} as const;

// Fallback font stacks. Les fonts Google réelles sont chargées via
// `next/font/google` dans `src/app/layout.tsx`, qui pose les CSS vars
// `--font-bricolage`, `--font-fraunces`, `--font-jetbrains` sur <html>.
export const TP_FONTS = {
  sans:  "var(--font-bricolage), 'Inter Tight', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
  serif: "var(--font-fraunces), 'Times New Roman', Georgia, serif",
  mono:  "var(--font-jetbrains), ui-monospace, monospace",
} as const;

export type TPColor = keyof typeof TP;
```

- [ ] **Step 3 :** Vérifier que TypeScript compile

```bash
cd /Users/lazard/code/thermo-pure-website/.claude/worktrees/distracted-mcclintock-80a912 && pnpm tsc --noEmit
```

Expected : pas d'erreur (warning OK).

---

## Task 2 : Étendre `tailwind.config.js` avec les tokens

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1 :** Remplacer entièrement le contenu de `tailwind.config.js` par :

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode "class" gardé au cas où on ajoute un toggle plus tard ; pas
  // utilisé pour l'instant.
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens Thermo Pure (logo-derived) — recopiés de src/lib/tokens.ts.
        // Tailwind ne lit pas le TS, donc duplication littérale assumée.
        ink: {
          DEFAULT: '#0F2238',
          soft:    '#1B3858',
          deep:    '#091624',
        },
        paper: {
          DEFAULT: '#F6EFE2',
          warm:    '#ECE0C7',
          deep:    '#DDCFB2',
        },
        sky: {
          DEFAULT: '#2BA1C8',
          deep:    '#163E61',
        },
        leaf: {
          DEFAULT: '#4FA72D',
          dark:    '#27882A',
        },
        // Accents tertiaires (usage parcimonieux)
        ocre:  '#D9A35A',
        clay:  '#A84A2A',
        moss:  '#548E4A',
      },
      fontFamily: {
        // Les vars --font-* sont posées par next/font/google dans layout.tsx
        sans:  ['var(--font-bricolage)', 'Inter Tight', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Times New Roman', 'serif'],
        mono:  ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-leaf':    '0 8px 24px -8px rgba(79, 167, 45, 0.55)',
        'glow-leaf-lg': '0 14px 32px -10px rgba(79, 167, 45, 0.65)',
        'glow-sky':     '0 0 60px rgba(43, 161, 200, 0.25)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up':   'accordion-up 0.3s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

Note : on a viré tout le bloc `var(--background)`, `var(--primary)`, etc. shadcn-based — ces vars venaient de l'ancien `globals.css` qui a été supprimé. Les keyframes accordion sont gardées pour un éventuel composant `<Accordion>` Radix (FAQ).

---

## Task 3 : Créer `src/app/globals.css` minimaliste

**Files:**
- Create: `src/app/globals.css`

- [ ] **Step 1 :** Écrire `src/app/globals.css` :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
  }

  body {
    @apply bg-paper text-ink font-sans antialiased;
  }
}
```

Pas plus. Pas de CSS vars shadcn, pas de reset agressif (Tailwind base s'en charge).

---

## Task 4 : Créer `src/app/layout.tsx` avec Google Fonts

**Files:**
- Create: `src/app/layout.tsx`

- [ ] **Step 1 :** Écrire `src/app/layout.tsx` :

```tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// `display: "swap"` évite le FOIT pendant le chargement.
// `variable` expose chaque font comme CSS var sur <html>, consommée par tailwind.config.js.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  // Fraunces est variable sur "opsz" (optical size) et "SOFT" / "WONK" pour
  // l'italique éditorial — utile pour les citations et le mot "PURE" en italique.
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thermo Pure — Nettoyage vapeur basse pression",
  description:
    "Nettoyage de toitures, façades et terrasses à la vapeur basse pression. Nouvelle-Aquitaine. Sans produit chimique.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

## Task 5 : Créer `src/app/page.tsx` placeholder

**Files:**
- Create: `src/app/page.tsx`

- [ ] **Step 1 :** Écrire `src/app/page.tsx` :

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-sky">
          Phase 1 · Foundation
        </p>

        <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight">
          <span className="text-sky-deep">THERMO</span>{" "}
          <span className="text-leaf">PURE</span>
        </h1>

        <p className="mt-6 font-serif italic text-xl text-ink-soft">
          Nettoyage à basse pression, sans produit chimique.
        </p>

        <p className="mt-12 text-sm text-ink/60">
          Foundation set — tokens TS, Tailwind extension, Google fonts
          (Bricolage Grotesque / Fraunces / JetBrains Mono), root layout.
          Prochaine phase : dossier images + composants UI partagés.
        </p>
      </div>
    </main>
  );
}
```

Cette page sert juste à valider visuellement la phase 1. Elle sera réécrite à la phase 4 (Home sections).

---

## Task 6 : Valider que le projet build et boot

**Files:** aucun changement

- [ ] **Step 1 :** S'assurer que `node_modules` existe (sinon `pnpm install`)

```bash
cd /Users/lazard/code/thermo-pure-website/.claude/worktrees/distracted-mcclintock-80a912 && [ -d node_modules ] || pnpm install
```

- [ ] **Step 2 :** Build prod pour confirmer que tout compile

```bash
cd /Users/lazard/code/thermo-pure-website/.claude/worktrees/distracted-mcclintock-80a912 && pnpm build
```

Expected : build qui se termine sans erreur, output liste au moins la route `/` en static.

- [ ] **Step 3 :** (Optionnel — l'utilisateur peut le faire) Lancer le dev server pour vérification visuelle

```bash
cd /Users/lazard/code/thermo-pure-website/.claude/worktrees/distracted-mcclintock-80a912 && pnpm dev
```

Visiter http://localhost:3000 — voir :
- "THERMO" en navy foncé (#163E61), "PURE" en vert (#4FA72D), gros bold avec Bricolage Grotesque
- Tagline italique sous : "Nettoyage à basse pression, sans produit chimique." en Fraunces italic
- Eyebrow au-dessus : "Phase 1 · Foundation" en JetBrains Mono uppercase, couleur sky (#2BA1C8)
- Fond crème (#F6EFE2)

Si OK : kill le dev server (Ctrl-C).

---

## Task 7 : Commit

**Files:** tous les nouveaux fichiers + tailwind.config.js modifié

- [ ] **Step 1 :** Stager uniquement les fichiers liés à phase 1 (exclure `.claude/settings.local.json` qui traîne en local)

```bash
cd /Users/lazard/code/thermo-pure-website/.claude/worktrees/distracted-mcclintock-80a912 && \
git add src/lib/tokens.ts src/app/globals.css src/app/layout.tsx src/app/page.tsx tailwind.config.js
```

- [ ] **Step 2 :** Vérifier ce qui est stagé

```bash
git status --short
```

Expected (en plus du `.claude/settings.local.json` modifié non-stagé, qu'on ignore) :
```
A  src/lib/tokens.ts
A  src/app/globals.css
A  src/app/layout.tsx
A  src/app/page.tsx
M  tailwind.config.js
```

- [ ] **Step 3 :** Commit

```bash
git commit -F- <<'EOF'
feat(design): phase 1 — foundation (tokens, Tailwind, fonts, layout)

Pose le socle de la refonte design :
- src/lib/tokens.ts : design tokens Thermo Pure (couleurs hex + font CSS vars)
- tailwind.config.js : extension du thème avec ink/paper/sky/leaf + fontFamily
  + boxShadow glow-* — remplace l'ancien bloc shadcn var(--*)
- src/app/globals.css : minimal (Tailwind directives + base body)
- src/app/layout.tsx : root layout fr + next/font/google (Bricolage Grotesque,
  Fraunces axes opsz/SOFT/WONK, JetBrains Mono)
- src/app/page.tsx : placeholder qui affiche le wordmark THERMO PURE
  avec les nouvelles couleurs et fonts — sera réécrit à la phase 4

Le site boot avec `pnpm dev` et `pnpm build` passe.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
```

- [ ] **Step 4 :** Vérifier le commit

```bash
git log -1 --stat
```

Expected : 5 fichiers changés (4 nouveaux + 1 modif tailwind), commit propre.

---

## Self-review checklist

Avant d'exécuter ce plan, l'agent doit confirmer :

1. ✅ Aucun placeholder type "TODO" ou "implémente comme tu veux" dans les étapes
2. ✅ Le code TypeScript dans `tokens.ts` est cohérent avec le tailwind.config.js (mêmes hex)
3. ✅ Les noms de classes Tailwind utilisés dans `page.tsx` existent dans le config étendu :
   - `bg-paper` ✓ (DEFAULT = '#F6EFE2')
   - `text-ink` ✓ (DEFAULT = '#0F2238')
   - `text-ink-soft` ✓ (color.ink.soft)
   - `text-ink/60` ✓ (Tailwind opacity modifier sur color.ink.DEFAULT)
   - `text-sky` ✓ (DEFAULT = '#2BA1C8')
   - `text-sky-deep` ✓ (color.sky.deep)
   - `text-leaf` ✓ (DEFAULT = '#4FA72D')
   - `font-mono`, `font-serif`, `font-sans` ✓ (theme.fontFamily)
4. ✅ Pas de référence à des composants/skills non encore créés
5. ✅ Le commit final est un atomic feature commit (5 fichiers liés à la phase 1, rien d'autre)

## Hors scope (phase 2+)

- Dossier images / assets (phase 2)
- Composants partagés Logo / Nav / boutons (phase 3)
- Toutes les sections (Hero, Méthode, Services, ...) (phase 4)
- Catalogue services typé (phase 5)
- Récupération depuis main (phases 6-8)
