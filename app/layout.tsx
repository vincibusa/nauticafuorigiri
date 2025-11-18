import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CookieBanner } from "@/components/cookie-banner";
import { createMetadata } from "@/lib/metadata"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Nautica Fuorigiri - Servizi nautici professionali: riparazione motori, manutenzione imbarcazioni, trasporto, rimessaggio. Concessionari autorizzati MERCURY, MERCRUISER, SELVA. Assistenza in tutta Italia.",
  path: "/",
  keywords: [
    "nautica",
    "riparazione motori nautici",
    "manutenzione barche",
    "rimessaggio barche",
    "trasporto imbarcazioni",
    "Canino",
    "Viterbo",
    "Lazio",
    "MERCURY",
    "MERCRUISER",
    "SELVA",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Salta al contenuto principale
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <Breadcrumbs />
          <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
