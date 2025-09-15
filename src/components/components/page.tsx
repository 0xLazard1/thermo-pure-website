import { PresentationSection } from "../sections/presentation"
import { AboutSection } from "../sections/about"
import { ExamplesSection } from "../sections/examples"
import { DevisSection } from "../sections/devis"
import { TestimonialsSection } from "../sections/testimonials"
import { FAQSection } from "../sections/faq-fixed"
import { ContactSection } from "../sections/contact"

export const Page = () => {
    return (
        <div className="w-full">
            <PresentationSection />
            <ExamplesSection />
            <DevisSection />
            <AboutSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
        </div>
    )
}