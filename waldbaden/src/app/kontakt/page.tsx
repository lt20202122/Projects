import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Anmeldung & Kontakt",
  description:
    "Melde dich jetzt zum Waldbaden in Braunschweig und Gifhorn an. Christiane Thoroe freut sich auf deine Nachricht.",
  openGraph: {
    title: "Anmeldung & Kontakt",
    description:
      "Melde dich jetzt zum Waldbaden in Braunschweig und Gifhorn an. Christiane Thoroe freut sich auf deine Nachricht.",
    images: ["/wald5.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmeldung & Kontakt",
    description:
      "Melde dich jetzt zum Waldbaden in Braunschweig und Gifhorn an. Christiane Thoroe freut sich auf deine Nachricht.",
    images: ["/wald5.webp"],
  },
  alternates: {
    canonical: "https://waldbaden-mit-christiane.de/kontakt",
  },
};


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});


export default function Kontakt() {
  return <main className={playfair.className}>
    <Form />
  </main>
}