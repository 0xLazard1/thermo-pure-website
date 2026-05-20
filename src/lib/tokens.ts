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
