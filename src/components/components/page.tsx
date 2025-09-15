import { PresentationSection } from "../sections/presentation"
import { AboutSection } from "../sections/about"
import { ExamplesSection } from "../sections/examples"
import { DevisSection } from "../sections/devis"
import { ContactSection } from "../sections/contact"

export const Page = () => {
    return (
        <div className="w-full">
            <PresentationSection />
            <ExamplesSection />
            <DevisSection />
            <AboutSection />
            <ContactSection />
        </div>
    )
}