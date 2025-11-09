import Card from "./Card";
import Link from "next/link";

export default function CoursesSection({playfair}:{playfair:any}) {

    return  (
        <>
        <div className={`w-full flex justify-center ${playfair.className}`}>
            <section className="grid content1:grid-cols-3 w-full gap-10 content2:grid-cols-2 grid-cols-1 overflow-x-hidden">
                <Card imageSrc="/wald3.webp" id={0}/>
                <Card imageSrc="/wald4.webp" id={1}/>
                <Card imageSrc="/wald5.webp" id={2}/>
            </section> </div>
            <div className={`text-center text-[18px] pt-10 md:px-[20vw] ${playfair.className} flex flex-col items-center max-w-full leading-7 md:px-[5vw] lg:px-[10vw]`}>
                <p>Ich biete Waldbaden in Gifhorn, Braunschweig und Umgebung an. 
                    Die <strong className="text-[#4D5E3D]">Entspannte Auszeit im Wald</strong> findet in einer kleinen Gruppe im wunderschönen, idyllischen Ruhewald Ribbesbüttel statt.
                    <strong className="text-[#4D5E3D]"> Achtsam in den Feierabend</strong> findet ebenso in einer kleinen Gruppe im beliebten Eyßelwald in Gifhorn statt. 
                    Wenn Du möchtest, entwickle ich für Dich und Deine Freunde, Familie oder Dein Team auch gerne individuelle Angebote. <br/><br/>
                    Der positive Effekt des Waldbadens auf Körper, Geist und Seele ist mittlerweile durch zahlreiche Studien bewiesen. Drück einfach mal die Pause-Taste und gönn Dir Zeit - nur für Dich selbst!
                </p>
                
            </div>
            <Link className="text-[#4D5E3D] text-[22px] leading-[1.36em] border border-[#2e5f2d]
                bg-white w-[70vw] h-13 whitespace-nowrap flex justify-center items-center hover:bg-[#9ab086]
                transition-colors duration-400 mt-10 mx-auto hover:text-white mb-16
                max-md:w-[80%] max-md:text-[18px] overflow-x-hidden"
                href="/mein-angebot">
                    Zu den Terminen & Preisen
                </Link>
            
        </>
    )
}