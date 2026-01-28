import type { Metadata } from "next";
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import JsonLd from "@/components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Waldbaden mit Christiane - Gifhorn, Braunschweig & Umgebung",
    template: "%s | Waldbaden mit Christiane"
  },
  description: "Entdecke Waldbaden in Gifhorn und Braunschweig mit Christiane Thoroe. Achtsamkeit, Stressbewältigung und Naturerlebnisse für mehr Entspannung und Resilienz.",
  keywords: ["Waldbaden", "Achtsamkeit", "Naturerlebnis", "Braunschweig", "Gifhorn", "Niedersachsen", "Entspannung", "Stressmanagement", "Stressabbau", "Resilienz", "Entschleunigung", "Shinrin-yoku", "Gesundheit", "Prävention"],

  openGraph: {
    siteName: "Waldbaden mit Christiane",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }]
  },

  twitter: {
    card: "summary_large_image",
    title: "Waldbaden mit Christiane - Gifhorn, Braunschweig & Umgebung",
    description: "Achtsamkeit und Entspannung in der Natur. Erlebe Waldbaden in Braunschweig und Gifhorn.",
    images: ["/og-default.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  },
  alternates: {
    canonical: "https://waldbaden-mit-christiane.de/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`antialiased min-h-screen flex flex-col bg-white ${playfair.className}`}>
        <Header />
        <main className="grow relative">
          {children}
        </main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
