import { HeroSection } from "../sections/hero"
import { PresentationSection } from "../sections/presentation"
import { SteamCleaningSection } from "../sections/steam-cleaning"
import { AboutSection } from "../sections/about"
import { ExamplesSection } from "../sections/examples"
import { DevisSection } from "../sections/devis"
import { FAQSection } from "../sections/faq-fixed"
import { ContactSection } from "../sections/contact"

export const Page = () => {
    return (
        <div className="w-full">
            {/* 1. Hero Section - Accroche principale avec CTA */}
            <HeroSection />

            {/* 1.5 Vidéo - Démonstration du nettoyage */}
            <ExamplesSection />

            {/* 2. Présentation - Les 4 services */}
            <PresentationSection />

            {/* 3. Nettoyage Vapeur Basse Pression - Section dédiée à votre différenciateur */}
            <SteamCleaningSection />

            {/* 4. Devis - CTA quand l'intérêt est maximum */}
            <DevisSection />

            {/* 7. À propos - Humaniser après avoir convaincu */}
            <AboutSection />

            {/* 8. FAQ - Lever dernières objections */}
            <FAQSection />

            {/* 9. Contact Final - Formulaire complet */}
            <ContactSection />
        </div>
    )
}