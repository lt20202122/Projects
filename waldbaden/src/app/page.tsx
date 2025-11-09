import { Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";

// dynamisch laden:
const QuoteSectionLg = dynamic(() => import("./QuoteSectionLg"));
const QuoteSectionMobile = dynamic(() => import("./QuoteSectionMobile"));
const ContentStripe = dynamic(() => import("./CotentStripe"));
const CoursesSection = dynamic(() => import("./CoursesSection"));
const ProfileSection = dynamic(() => import("./ProfileSection"));

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Waldbaden mit Christiane – Gifhorn & Braunschweig",
    template: "%s | Waldbaden mit Christiane",
  },
  description:
    "Achtsamkeit in der Natur: Waldbaden in Braunschweig & Gifhorn. Gönn dir eine Auszeit vom Alltag!",
  openGraph: {
    title: "Waldbaden mit Christiane – Gifhorn & Braunschweig",
    description:
      "Achtsamkeit in der Natur: Waldbaden in Braunschweig & Gifhorn. Gönn dir eine Auszeit vom Alltag!",
    images: ["/og-default.jpg"],
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waldbaden mit Christiane – Gifhorn & Braunschweig",
    description:
      "Achtsamkeit in der Natur: Waldbaden in Braunschweig & Gifhorn. Gönn dir eine Auszeit vom Alltag!",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: "https://waldbaden-mit-christiane.de/",
  },
};


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function Home() {
  

  return (
    <div className="flex flex-col items-center">
      <HeroSection playfair={playfair}/>
      <QuoteSectionLg playfair={playfair}/>
      <QuoteSectionMobile playfair={playfair}/>
      <ContentStripe playfair={playfair}/>
      <CoursesSection playfair={playfair}/>
      <ProfileSection playfair={playfair}/>
    </div>
    
  );
}