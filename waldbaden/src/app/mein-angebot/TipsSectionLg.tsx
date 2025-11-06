import Image from "next/image";

export default function TipsSection() {
  return (
    <section className="w-full flex flex-col items-center px-6 md:px-[13vw] bg-[#ebecea] pt-8 md:pt-15">
      {/* Bilder Container */}
      <div className="flex flex-col angebot:flex-row gap-4 angebot:gap-8 relative w-full md:w-[82vw] mb-8 angebot:mb-14">
        {/* Mobile: Beide Bilder vertikal gestapelt mit reduzierter Höhe */}
        <div className="w-full angebot:w-1/2 h-[40vh] angebot:h-[70vh] relative">
          <Image 
            src="/wald12.webp"
            alt="Ich im Wald"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full angebot:w-1/2 h-[40vh] angebot:h-[70vh] relative">
          <Image 
            src="/wald13.webp"
            alt="Pilz bei näherer Betrachtung"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Text Container */}
      <div className="text-[16px] md:text-[18px] w-full">
        <h3 className="text-[#5c7c3f] font-bold text-[20px] md:text-[22px] mb-3">
          Hinweise und Tipps
        </h3>
        
        <p className="mb-4">
          Das Waldbaden findet bei jedem Wetter statt, außer bei Sturm, Gewitter oder Starkregen. 
          Bitte zieh Dich warm an, am besten im Zwiebellook, denn wir bewegen uns langsam im Wald und da kann es auch bei Sonnenschein schnell kalt werden. 
          Für alle Termine musst Du Dich vorher anmelden und per Bank-Überweisung bezahlen. Die Teilnahme geschieht auf eigene Gefahr und Haftung.
        </p>
        
        <span className="text-[#738d5c] font-medium block mb-2">
          Kleine Liste nützlicher Dinge
        </span>

        <ul className="list-disc pl-5 pb-12 md:pb-18 space-y-1">
          <li>Leichter Rucksack mit einem Getränk</li>
          <li>Gutes Schuhwerk und wetterangepasste Kleidung</li>
          <li>Sonnen-, Mücken- und Zeckenschutz, Gel gegen Insektenstiche</li>
          <li>Neugierde und gute Laune</li>
        </ul>
      </div>
    </section>
  )
}