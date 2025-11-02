import Image from "next/image";

export default function TipsSectionMobile() {
  return (
    <section className="max-w-screen flex flex-col justify-center angebot:hidden px-[5vw]">
        <div className="flex gap-8 relative w-screen h-screen flex-col items-center">
            <div className="w-full h-full relative">
                <Image 
                src="/wald12.webp"
                alt="Ich im Wald"
                fill
                className="object-contain"
                />
            </div>
            <div className="w-full h-full relative">
                <Image 
                src="/wald13.webp"
                alt="Pilz bei näherer Betrachtung"
                fill
                className="object-contain"
                />
            </div>
        </div>

        <div className="w-screen h-6 bg-[#f5f6f4] my-8"></div>

        <div className="text-[18px]">
            
<h3 className="text-[#5c7c3f] font-bold text-[22px]">Hinweise und Tipps</h3>
<p>Das Waldbaden findet bei jedem Wetter statt, außer bei Sturm, Gewitter oder Starkregen. 
    Bitte zieh Dich warm an, am besten im Zwiebellook, denn wir bewegen uns langsam im Wald und da kann es auch bei Sonnenschein schnell kalt werden. 
    Für alle Termine musst Du Dich vorher anmelden und per Bank-Überweisung bezahlen. Die Teilnahme geschieht auf eigene Gefahr und Haftung. </p> <br/>
<span className="text-[#738d5c]">Kleine Liste nützlicher Dinge</span>

<ul className="list-disc pl-5">
<li>Leichter Rucksack mit einem Getränk</li>
<li>Gutes Schuhwerk und wetterangepasste Kleidung</li>
<li>Sonnen-, Mücken- und Zeckenschutz, Gel gegen Insektenstiche</li>
<li>Neugierde und gute Laune</li>
</ul>
    
        </div>
    </section>
  )
}