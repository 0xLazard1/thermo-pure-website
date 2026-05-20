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
