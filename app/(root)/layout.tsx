import { Header } from "@/components/landing/header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "Kriyex UI = Open Source Components",
        default: "Kriyex UI"
    }
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="relative w-full pt-0 md:pt-0">
                {children}
            </main>
            <Footer />
        </>
    );
}