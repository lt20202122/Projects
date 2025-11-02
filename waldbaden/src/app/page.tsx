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

export default function Home() {
  

  return (
    <main>
      <HeroSection playfair={playfair}/>
      <QuoteSectionLg playfair={playfair}/>
      <QuoteSectionMobile playfair={playfair}/>
      <ContentStripe playfair={playfair}/>
      <CoursesSection playfair={playfair}/>
      <ProfileSection playfair={playfair}/>
    </main>
    
  );
}