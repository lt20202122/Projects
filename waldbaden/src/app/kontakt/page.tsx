import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Anmeldung – Waldbaden mit Christiane",
  description:
    "Jetzt Platz sichern: Anmeldung für Waldbaden-Auszeiten im Raum Braunschweig und Gifhorn.",
  openGraph: {
    title: "Anmeldung – Waldbaden mit Christiane",
    description:
      "Jetzt Platz sichern: Anmeldung für Waldbaden-Auszeiten im Raum Braunschweig und Gifhorn.",
    images: ["/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmeldung – Waldbaden mit Christiane",
    description:
      "Jetzt Platz sichern: Anmeldung für Waldbaden-Auszeiten im Raum Braunschweig und Gifhorn.",
    images: ["/og-default.jpg"],
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
        <Form/>
    </main>
}