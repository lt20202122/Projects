import { Playfair_Display } from "next/font/google";
import HeroSection from "./HeroSection";
import Course1Section from "./(Course1)/Course1Section";
import Course2Section from "./(Course2)/Course2Section";
import Location2Course1 from "./(Course1)/Location2Course1";
import Course3Section from "./(Course3)/Course3Section";
import { Metadata } from "next";
import TipsSectionLg from "./TipsSectionLg";

export const metadata: Metadata = {
  title: "Termine & Preise – Waldbaden mit Christiane",
  description:
    "Alle Waldbaden-Termine & Preise für Braunschweig und Umgebung im Überblick.",
  openGraph: {
    title: "Termine & Preise – Waldbaden mit Christiane",
    description:
      "Alle Waldbaden-Termine & Preise für Braunschweig und Umgebung im Überblick.",
    images: ["/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Termine & Preise – Waldbaden mit Christiane",
    description:
      "Alle Waldbaden-Termine & Preise für Braunschweig und Umgebung im Überblick.",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: "https://waldbaden-mit-christiane.de/mein-angebot",
  },
};


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function MeinAngebot() {
    
    return <main className={`${playfair.className} flex flex-col leading-[31.5px] gap-10`}>
        <HeroSection/>
        <section>
          <Course1Section/>
          <Location2Course1/>
        </section>
        <Course2Section />
        <Course3Section />
        <TipsSectionLg />
    </main>
}