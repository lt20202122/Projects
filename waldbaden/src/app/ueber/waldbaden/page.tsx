import ForestBathingSection from "./ForstBathingSection";
import ForestBathingSectionMobile from "./ForstBathingSectionMobile";
import { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Was ist Waldbaden?",
  description:
    "Erfahre alles über Waldbaden (Shinrin-yoku). Christiane Thoroe erklärt die Wirkung von Waldachtsamkeit auf Körper und Geist.",
  openGraph: {
    title: "Was ist Waldbaden?",
    description:
      "Stress abbauen und Energie tanken durch Waldbaden. Erfahre mehr über die heilende Kraft des Waldes.",
    images: ["/wald16.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Was ist Waldbaden?",
    description:
      "Die Kunst des Waldbadens – Achtsamkeit, Entspannung und Gesundheit im Wald.",
    images: ["/wald16.webp"],
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