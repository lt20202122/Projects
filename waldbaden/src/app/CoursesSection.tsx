import Card from "./Card";
import Link from "next/link";

export default function CoursesSection({playfair}:{playfair:any}) {

    return  (
        <>
        <div className="w-screen flex justify-center">
            <section className="grid content1:grid-cols-3 w-max gap-10 content2:grid-cols-2 grid-cols-1">
                <Card imageSrc="/wald3.webp" id={0}/>
                <Card imageSrc="/wald4.webp" id={1}/>
                <Card imageSrc="/wald5.webp" id={2}/>
            </section> </div>
            <div className={`text-center text-[18px] p-20 ${playfair.className} flex flex-col items-center`}>
                <p>Ich biete Waldbaden in Gifhorn, Braunschweig und Umgebung an. 
                    Die <em>Entspannte Auszeit im Wald</em> findet in einer kleinen Gruppe im wunderschönen, idyllischen Ruhewald Ribbesbüttel, in den Wäldern im Norden und Osten von Braunschweig statt.
                    <em> Achtsam in den Feierabend</em> findet ebenso in einer kleinen Gruppe im Querumer Forst in Braunschweig sowie im beliebten Eyßelwald in Gifhorn statt. 
                    Wenn Du möchtest, entwickle ich für Dich und Deine Freunde, Familie oder Dein Team auch gerne individuelle Angebote. <br/><br/>
                    Der positive Effekt des Waldbadens auf Körper, Geist und Seele ist mittlerweile durch zahlreiche Studien bewiesen. Drück einfach mal die Pause-Taste und gönn Dir Zeit - nur für Dich selbst!
                </p>
                <Link className="text-[#FFF] text-[22px] leading-[1.36364em] border-2 border-[#2E5F2D] bg-[#84aa70] w-90 h-16 flex justify-center items-center rounded-sm
                hover:bg-[#9ec38a] transition-colors duration-400 mt-18"
                href="/mein-angebot">
                    Zu den Terminen & Preisen
                </Link>
            </div>
            
        </>
    )
}