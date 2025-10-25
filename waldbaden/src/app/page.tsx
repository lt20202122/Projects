import { Playfair_Display } from "next/font/google";
import HeroSection from './HeroSection'
import QuoteSectionLg from './QuoteSectionLg'
import QuoteSectionMobile from './QuoteSectionMobile'
import ContentStripe from "./CotentStripe";
import CoursesSection from "./CoursesSection";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export default function Home() {
  

  return (
    <main>
      <HeroSection playfair={playfair}/>
      <QuoteSectionLg playfair={playfair}/>
      <QuoteSectionMobile playfair={playfair}/>
      <ContentStripe playfair={playfair}/>
      <CoursesSection playfair={playfair}/>
    </main>
    
  );
}
