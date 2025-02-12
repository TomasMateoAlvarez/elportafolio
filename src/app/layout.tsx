import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Me from './components/Me';
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "#f8f4e9", // Blanco cremoso
          color: "#333333", // Texto negro fuerte
        }}
      >
        <Header />
        <IntroSection />
        <Me />
        <Projects />

        <Experience />

        <Contact />
        

        <main className="flex justify-center items-center h-full">
          {children} {/* Este es el contenido principal */}
        </main>
      </body>
    </html>
  );
}

