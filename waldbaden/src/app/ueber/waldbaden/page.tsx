import ForestBathingSection from "./ForstBathingSection";
import ForestBathingSectionMobile from "./ForstBathingSectionMobile";
import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

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


export default function Ueber() {
    
    return <main className={playfair.className}>
          <ForestBathingSection />
          <ForestBathingSectionMobile />
        </main>
}