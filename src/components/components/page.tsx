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
            {/* 1. Hero - Accroche principale avec CTA */}
            <HeroSection />

            {/* 2. Présentation - Ce qu'on fait (services) */}
            <PresentationSection />

            {/* 3. Vapeur - Pourquoi nous (différenciateur) */}
            <SteamCleaningSection />

            {/* 4. Exemples - Preuves visuelles (vidéo + galerie) */}
            <ExamplesSection />

            {/* 5. Devis - CTA quand l'intérêt est maximum */}
            <DevisSection />

            {/* 6. FAQ - Lever les objections */}
            <FAQSection />

            {/* 7. À propos - Confiance / humaniser */}
            <AboutSection />

            {/* 8. Contact Final - Formulaire complet */}
            <ContactSection />
        </div>
    )
}
