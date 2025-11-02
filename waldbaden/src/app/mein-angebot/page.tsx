import { Playfair_Display } from "next/font/google";
import HeroSection from "./HeroSection";
import Course1Section from "./(Course1)/Course1Section";
import Course2Section from "./(Course2)/Course2Section";
import Location1Course1 from "./(Course1)/Location1Course1";
import Location2Course1 from "./(Course1)/Location2Course1";
import Course3Section from "./(Course3)/Course3Section";
import { Metadata } from "next";
import TipsSectionLg from "./TipsSectionLg";
import TipsSectionMobile from "./TipsSectionMobile";

export const metadata: Metadata = {
  title: "Über mich", // Wird zu "Über mich | Waldbaden mit Christiane"
  description: "Spezifische Beschreibung für diese Seite", //TODO
  openGraph: {
    title: "Über mich",
    description: "...", //TODO
    images: [{ url: "/og-about.jpg", width: 1200, height: 630 }] //TODO
  },
}

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
          <Location1Course1/>
          <Location2Course1/>
        </section>
        <Course2Section />
        <Course3Section />
        <TipsSectionLg />
        <TipsSectionMobile />
    </main>
}