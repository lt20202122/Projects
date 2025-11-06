import Image from "next/image";
import Link from "next/link";

export default function Course3Section() {
    return (
        <section className={`md:px-[13vw] w-screen py-8`}>
        <div className="w-[75vw] h-[80vh] relative mb-14 mx-auto md:block hidden">
            <Image
            src="/wald10.webp"
            alt="Hängematte"
            fill
            className="object-contain"
            />
        </div>
        <div className=" relative mb-14 w-full h-[35vh] block md:hidden">
            <Image
            src="/wald10MOBILE.webp"
            alt="Hängematte"
            fill
            className="object-contain"
            />
        </div>
        <div className="px-[13vw] md:px-0">
        <h2 className="text-[28px] text-[#5c7c3f] mb-2 ">Dein persönliches Waldbad</h2>
        <p className="text-[21px] mb-5">Mit allen Sinnen achtsam im Wald </p>
        <p className="text-[18px]">
            Wobei kannst Du am besten entspannen? Magst Du es gern kreativ oder ist Dir eine enge Verbindung zur Natur wichtig? Es gibt eine ganze Menge Waldbaden-Übungen: Meditation und Atemübungen, Landart (Bilder aus Naturmaterialien legen), Qigong, Barfuß gehen, leichte Bewegungen, Sitzplatz und einen Baum umarmen (oder sagen wir, mal den Baumumfang vermessen ;-). Es gibt auch viele Utensilien, die man ausprobieren kann, wie z. B. Hängematte, Lupe, Spiegel und Diarahmen. Auch den Ort kannst Du wählen: in mehreren Wäldern rund um Braunschweig, im Gifhorner Eyßelwald oder im wunderschönen Ruhewald Ribbesbüttel biete ich Waldbaden an. 
            <br/><br/><span className="text-[#4D5E3D] font-bold text-[20px]">Besondere Momente mit Freunden und Freundinnen teilen</span><br/>
            Im hektischen Alltag bleibt oft zu wenig Zeit füreinander? Dabei sind gute Freunde doch so wichtig! Wie wäre es mit einem Geburtstag oder einem Nachmittag der besonderen Art? 
            Genieße zusammen mit Deinen Freundinnen und Freunden in aller Ruhe die Natur und erlebt intensive Momente in Gemeinschaft. 
            <br/><br/><span className="text-[#4D5E3D] font-bold text-[20px]">Achtsamkeit in der Natur als Teamevent</span><br/>
            Es gibt beim Waldbaden viele schöne Übungen, die Ihr als Team gemeinsam ausprobieren könnt. Das ist Teambuilding an der frischen Luft mit ganz viel Spaß!
            ​

            <br/><br/><span className="text-[#4D5E3D] font-bold text-[20px]">Waldbaden für Unternehmen</span><br/>
            Achtsame Aufenthalte in der Natur stärken nachweislich das Immunsystem, reduzieren Stress, steigern das Wohlbefinden, stärken die Resilienz und wirken sich förderlich auf die Gesundheit aus. Ich konzipiere Veranstaltungen, die ich für Unternehmen im Rahmen des Betrieblichen Gesundheitsmanagements (BGM) mit bis zu zwölf Teilnehmern durchführe.

            ​
            <br/><br/>
            <span className="text-[#4D5E3D]">Sprich mich an und ich stelle ein Waldbad ganz nach Deinen Vorlieben für Dich allein oder Deine Leute zusammen. </span>
        </p>
        <Link className="text-[#4D5E3D] text-[22px] leading-[1.36364em] border border-[#2e5f2d] bg-white w-64 h-12 flex justify-center items-center
          hover:bg-[#9ab086] transition-colors duration-400 mt-10 mx-auto hover:text-white"
          href="/kontakt">
            Frag mich!
        </Link>
        <Link className="text-[#4D5E3D] text-[22px] leading-[1.36364em] border border-[#2e5f2d] bg-white w-32 h-12 flex justify-center items-center
          hover:bg-[#9ab086] transition-colors duration-400 mt-10 mx-auto hover:text-white"
          href="/agb">
            AGB
        </Link>
        </div>
        </section>    

    )
    }