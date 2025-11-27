import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Me from './components/Me';
import { LanguageProvider } from './contexts/LanguageContext';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Mateo Álvarez - Portafolio',
  description: 'Dev JR',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <Header />
          <IntroSection />
          <Me />
          <Projects />
          <Experience />
          <Contact />

          <main>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}

