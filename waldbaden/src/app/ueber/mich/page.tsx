import Image from "next/image";
import Link from "next/link";
import CertificatesSection from "./CertificatesSection"
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


export default function AboutMe() {
  return (
    <main className={`text-[18px] flex flex-col items-center ${playfair.className}`}>
      <div className="bg-[#fafafa] px-[20vw] flex flex-col items-center pb-10
        max-md:px-[6vw]">
        <h1 className="text-[38px] text-[#5c7c3f] font-bold py-5 text-center
          max-md:text-[28px]">
          Ich liebe es, <br /> im Wald zu sein!
        </h1>

        <p className="leading-9 text-center max-md:leading-8">
          Der Wald ist für mich der Ort, an dem ich Kraft tanke. Unter den Kronen
          alter Bäume und auf wurzeligen Wegen fühle ich mich zu Hause. Diese Verbindung
          zur Natur zu spüren, das ist mir unglaublich wichtig. Waldbaden verbindet meine
          Liebe für den Wald mit dem Wunsch und Bemühen, bewusster im Jetzt zu leben.
        </p>

        <div className="h-[55vh] w-[30vw] relative my-8
          max-md:w-[80vw] max-md:h-[40vh]">
          <Image
            src="/wald20.webp"
            alt="Ich im Wald"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-[28px] text-[#5c7c3f] text-center max-md:text-[22px]">
          Christiane Thoroe
        </h2>
        <p className="text-[#5c7c3f] text-[20px] text-center max-md:text-[18px]">
          zertifizierte Kursleiterin für Waldbaden / zertifizierte Naturmentorin
        </p>
      </div>

      <p className="px-[10vw] py-10 max-md:px-[6vw] text-justify">
        Seit Herbst 2021 bin ich Kursleiterin für Waldbaden in den Wäldern rund um
        Braunschweig, Gifhorn und Umgebung. Ich biete Waldbaden in verschiedensten
        Formaten an, z. B. Einzel- und Paar-Waldbaden, offene Gruppen, Teamausflüge,
        Mädelsnachmittage bis hin zu Workshops im Rahmen des Betrieblichen Gesundheitsmanagements.
        Zudem bin ich Dozentin für Waldbaden an der Kreisvolkshochschule Gifhorn und
        an der Volkshochschule Braunschweig.
        <br /><br />
        Um das Band zur Natur noch weiter zu stärken, habe ich 2023 einen Lehrgang für
        Wildnispädagogik und Naturmentoring bei{" "}
        <a
          href=""
          className="relative before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-0 before:bg-[#5c7c3f]
            hover:before:w-full before:transition-all before:duration-300 inline-block text-[#326b00]"
        >
          Wildniswind
        </a>{" "}
        absolviert. In der einjährigen berufsbegleitenden Weiterbildung habe ich mir
        lieb gewonnene Methoden der Wildnispädagogik vertieft, viele heimische Tier- und
        Pflanzenarten noch intensiver kennengelernt und bin noch mehr in die Geheimnisse
        der Natur vor unserer Haustür eingetaucht.
        <br /><br />
        Im Frühjahr 2024 habe ich begonnen, Umweltwissenschaften an der Fernuniversität
        Hagen berufsbegleitend auf Master zu studieren. Ich finde es sehr spannend, die
        Themen Umwelt- und Naturschutz jetzt aus einer ganz anderen Perspektive zu
        betrachten.
      </p>

      {/* 📸 Bildergalerie */}
      <div className="w-[70vw] h-[40vh] relative flex overflow-hidden mb-10
        max-md:flex-col max-md:h-auto max-md:w-[90vw] max-md:gap-4 max-md:items-center">
        <div className="relative h-full w-1/4 ml-10 max-md:w-[80vw] max-md:h-[40vh] max-md:ml-0">
          <Image src="/wald21.webp" alt="Ich mit Spiegel im Wald" fill className="object-contain" />
        </div>
        <div className="relative h-full w-1/4 ml-10 max-md:w-[80vw] max-md:h-[40vh] max-md:ml-0">
          <Image src="/wald22.webp" alt="Ich auf Waldboden" fill className="object-contain" />
        </div>
        <div className="relative h-full w-1/4 ml-10 max-md:w-[80vw] max-md:h-[40vh] max-md:ml-0">
          <Image src="/wald23.webp" alt="Ich in einer Hängematte im Wald" fill className="object-contain" />
        </div>
      </div>

      <h2 className="text-[38px] text-[#5c7c3f] font-bold py-5 text-center
        max-md:text-[28px]">
        Wie ich zum Waldbaden gekommen bin
      </h2>

      <p className="px-[10vw] max-md:px-[6vw] text-justify">
        Ich bin in meinem Alltag sehr gefordert: ich habe eine tolle Familie mit zwei Kindern,
        einen Beruf, der mir viel Spaß macht, aber auch einiges abverlangt - und dann ist da ja
        auch noch das bisschen Haushalt ;-)
        <br /><br />
        Lange habe ich nach einer Möglichkeit gesucht, um runterzukommen und mich zu entspannen.
        Dabei habe ich vieles ausprobiert: Autogenes Training, Yoga, Laufen, Kraftsport,
        Progressive Muskelentspannung und sogar Hypnose. Das tat mir auch sehr gut, aber wenn ich
        richtig gestresst war, dann bin ich immer wieder im Wald gelandet...
      </p>

      <span className="text-[#5c7c3f] text-center block w-screen mt-10 mb-8
        max-md:px-4">
        Hast du Lust, den Wald einmal anders zu erleben? Dann komm mit mir in den Wald!
      </span>

      <Link
        className="text-[#4D5E3D] text-[22px] leading-[1.36em] border border-[#2e5f2d]
          bg-white w-64 h-12 flex justify-center items-center hover:bg-[#9ab086]
          transition-colors duration-400 mt-10 mx-auto hover:text-white mb-10
          max-md:w-[80%] max-md:text-[18px]"
        href="/kontakt"
      >
        Kontakt aufnehmen
      </Link>

      <CertificatesSection />
    </main>
  );
}
