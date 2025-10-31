import { Header } from "./header"
import { Footer } from "./footer"
import { Page } from "./page"
import { ScrollToTop } from "../ui/scroll-to-top"
import { StickyCtaMobile } from "../ui/sticky-cta-mobile"


export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex justify-center items-center">
                <Page />
            </main>
            <Footer />
            <ScrollToTop />
            <StickyCtaMobile />
        </div>
    )
}