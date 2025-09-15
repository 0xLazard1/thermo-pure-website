import { Header } from "./header"
import { Footer } from "./footer"
import { Page } from "./page"


export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex justify-center items-center">
                <Page />
            </main>
            <Footer />
        </div>
    )
}