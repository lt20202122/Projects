import type { Metadata } from "next";
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Waldbaden mit Christiane - Gifhorn und Braunschweig",
    template: "%s | Waldbaden mit Christiane"
  },
  description: "Waldbaden in Braunschweig, Gifhorn & Umgebung – achtsam, entspannend, mit der Natur verbunden. Lass den Alltag hinter dir und finde Ruhe im Wald.",
  keywords: ["Waldbaden", "Achtsamkeit", "Natur", "Waldbaden Braunschweig", "Waldbaden Niedersachsen", "Entspannung", "Stressmanagement", "Stressabbau", "Resilienz", "Entschleunigung"], // 10
  
  openGraph: {
    siteName: "waldbaden-mit-christiane.de",
    locale: "de_DE",
    type: "website",
    // NICHT hier: title, description, images (seitenspezifisch)
  },
  
  twitter: {
    card: "summary_large_image",
    // NICHT hier: title, description, images (seitenspezifisch)
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
