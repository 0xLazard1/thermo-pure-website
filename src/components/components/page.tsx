import { HeroSection } from "../sections/hero"
import { PresentationSection } from "../sections/presentation"
import { TrustBadgesSection } from "../sections/trust-badges"
import { DroneInnovationSection } from "../sections/drone-innovation"
import { AboutSection } from "../sections/about"
import { ExamplesSection } from "../sections/examples"
import { DevisSection } from "../sections/devis"
import { TestimonialsSection } from "../sections/testimonials"
import { FAQSection } from "../sections/faq-fixed"
import { ContactSection } from "../sections/contact"

export const Page = () => {
    return (
        <div className="w-full">
            {/* 1. Hero Section - Accroche principale avec CTA */}
            <HeroSection />

            {/* 1.5 Trust Badges - Réassurance immédiate */}
            <TrustBadgesSection />

            {/* 2. Présentation - Les 4 services */}
            <PresentationSection />

            {/* 3. Témoignages - Preuves sociales IMMÉDIATEMENT */}
            <TestimonialsSection />

            {/* 4. Innovation Drone - Section dédiée à votre différenciateur */}
            <DroneInnovationSection />

            {/* 5. Exemples - Résultats concrets */}
            <ExamplesSection />

            {/* 6. Devis - CTA quand l'intérêt est maximum */}
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