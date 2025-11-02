import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import Form from "./Form";

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


export default function Kontakt() {
    return <main className={playfair.className}>
        <Form/>
    </main>
}