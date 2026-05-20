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
