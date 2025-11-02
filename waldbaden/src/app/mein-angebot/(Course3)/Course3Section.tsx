import Image from "next/image";
import Link from "next/link";

export default function Course3Section() {
    return (
        <section className={`px-[10vw] mb-10 w-screen py-8 bg-[#f5f6f4]`}>
        <div className="w-[80vw] h-[70vh] relative my-10 mx-auto">
            <Image
            src="/wald10.webp"
            alt="Hängematte"
            fill
            />
        </div>
        <h2 className="text-[28px] text-[#5c7c3f] mb-2">Dein persönliches Waldbad</h2>
        <p className="text-[21px] mb-5">Mit allen Sinnen achtsam im Wald </p>
        <p className="text-[18px]">
            In einer kleinen Gruppe erkunden wir zur Feierabendzeit den Querumer Forst in Braunschweig bzw. den Eyßelwald in Gifhorn. 
            Mit verschiedenen Achtsamkeitsübungen und kreativen, spielerischen Elementen schalten wir das Gedankenkarussell ab, erholen uns vom Stress des Tages und tanken neue Kraft. 
            Wir nehmen uns ganz bewusst Zeit für uns, entdecken die Natur in der Stadt und genießen den Aufenthalt im Grünen.
            <br/><br/><span className="text-[#4D5E3D] font-bold text-[20px]">Besondere Momente mit Freunden und Freundinnen teilen</span><br/>
            Im hektischen Alltag bleibt oft zu wenig Zeit füreinander? Dabei sind gute Freunde doch so wichtig! Wie wäre es mit einem Geburtstag oder einem Nachmittag der besonderen Art? 
            Genieße zusammen mit Deinen Freundinnen und Freunden in aller Ruhe die Natur und erlebt intensive Momente in Gemeinschaft. 
            <br/><br/><span className="text-[#4D5E3D] font-bold text-[20px]">Achtsamkeit in der Natur als Teamevent</span><br/>
            Es gibt beim Waldbaden viele schöne Übungen, die Ihr als Team gemeinsam ausprobieren könnt. Das ist Teambuilding an der frischen Luft mit ganz viel Spaß!
            ​

            <br/><br/><span className="text-[#4D5E3D] font-bold text-[20px]">Waldbaden für Unternehmen</span><br/>
            Achtsame Aufenthalte in der Natur stärken nachweislich das Immunsystem, reduzieren Stress, steigern das Wohlbefinden, stärken die Resilienz und wirken sich förderlich auf die Gesundheit aus. Ich konzipiere Veranstaltungen, die ich für Unternehmen im Rahmen des Betrieblichen Gesundheitsmanagements (BGM) mit bis zu zwölf Teilnehmern durchführe.

            ​

            <br/><br/><span className="text-[#4D5E3D] font-bold text-[20px]">Waldbaden mit der Familie</span><br/>
            Waldbaden macht auch mit Kindern großen Spaß! Es gibt viele tolle kreative und spielerische Übungen, die Jung und Alt begeistern. Gern entwickle ich ein schönes Programm, passend für Deine Familie.

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

        </section>    

    )
    }