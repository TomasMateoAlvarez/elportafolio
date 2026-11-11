import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Me from "./components/Me";
import Contact from "./components/Contact";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

const siteUrl = "https://mateoalvarezdev.vercel.app";
const description =
  "Automatizo procesos manuales, integro tus sistemas y desarrollo software a medida para pymes y empresas en Uruguay. Backend, APIs y aplicaciones web en producción.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mateo Álvarez | Automatización y software a medida para empresas",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mateo Álvarez | Automatización y software a medida",
    description,
    url: siteUrl,
    siteName: "Mateo Álvarez",
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateo Álvarez | Automatización y software a medida",
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={figtree.variable}>
      <body>
        <LanguageProvider>
          <Header />
          <main id="contenido">
            <IntroSection />
            <Services />
            <Projects />
            <Process />
            <Me />
            <Contact />
          </main>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
