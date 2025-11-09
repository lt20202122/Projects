import ForestBathingSection from "./ForstBathingSection";
import ForestBathingSectionMobile from "./ForstBathingSectionMobile";
import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Über das Waldbaden – Waldbaden mit Christiane",
  description:
    "Was ist Waldbaden? Erfahre, wie achtsame Naturerlebnisse Stress reduzieren, deine Sinne stärken und zu mehr Ruhe führen.",
  openGraph: {
    title: "Über das Waldbaden – Waldbaden mit Christiane",
    description:
      "Was ist Waldbaden? Erfahre, wie achtsame Naturerlebnisse Stress reduzieren, deine Sinne stärken und zu mehr Ruhe führen.",
    images: ["/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über das Waldbaden – Waldbaden mit Christiane",
    description:
      "Was ist Waldbaden? Erfahre, wie achtsame Naturerlebnisse Stress reduzieren, deine Sinne stärken und zu mehr Ruhe führen.",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: "https://waldbaden-mit-christiane.de/ueber/waldbaden",
  },
};


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