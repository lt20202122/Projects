import { Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";

// dynamisch laden:
const QuoteSectionLg = dynamic(() => import("./QuoteSectionLg"));
const QuoteSectionMobile = dynamic(() => import("./QuoteSectionMobile"));
const ContentStripe = dynamic(() => import("./CotentStripe"));
const CoursesSection = dynamic(() => import("./CoursesSection"));
const ProfileSection = dynamic(() => import("./ProfileSection"));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waldbaden mit Christiane", // Wird zu "Über mich | Waldbaden mit Christiane"
  description: "Waldbaden in Braunschweig, Gifhorn & Umgebung – achtsam, entspannend, mit der Natur verbunden. Lass den Alltag hinter dir und finde Ruhe im Wald.",
  openGraph: {
    title: "Waldbaden mit Christiane",
    description: "Waldbaden in Braunschweig, Gifhorn & Umgebung – achtsam, entspannend, mit der Natur verbunden. Lass den Alltag hinter dir und finde Ruhe im Wald.",
    images: [{ url: "/wald6.webp", width: 1200, height: 630 }] //TODO
  },
}

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