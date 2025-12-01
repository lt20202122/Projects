import Image from "next/image";
import Link from "next/link";

export default function Course2Section() {
  return (
    <section className={`w-full md:w-screen bg-[#ebecea]`}>
      <div className="w-full md:w-[75vw] h-[90vh] relative mx-auto mb-5 hidden md:block">
        <Image
        src="/wald9.webp"
        alt="Lichtung"
        fill
        className="object-contain"
        loading="lazy"
        />
      </div>
      <div className="w-full h-[43vh] relative mb-10 mx-0 block md:hidden">
        <Image
        src="/wald14MOBILE.webp"
        alt="Lichtung"
        fill
        className="object-contain"
        loading="lazy"
        />
      </div>
      <div className="px-4 md:px-[13vw]">
      <h2 className="text-[28px] text-[#5c7c3f] mb-2">Achtsam in den Feierabend</h2>
      <p className="text-[21px] mb-5">Waldbaden im Eyßelwald in Gifhorn
        <br/><br/>
        <span className="text-[18px]">In einer kleinen Gruppe erkunden wir zur Feierabendzeit den Eyßelwald in Gifhorn. 
          Mit verschiedenen Achtsamkeitsübungen und kreativen, spielerischen Elementen schalten wir das Gedankenkarussell ab, erholen uns vom Stress des Tages und tanken neue Kraft. 
          Wir nehmen uns ganz bewusst Zeit für uns, entdecken die Natur in der Stadt und genießen den Aufenthalt im Grünen. </span>
      </p>
      <div className="">
        <h3 className="text-[#5c7c3f] text-[22px] font-bold">Den Akku aufladen - mit Waldbaden</h3>
        <p className="text-[21px] mb-5">Eyßelwald in Gifhorn</p>
        <ul className="list-disc pl-5 text-[18px]">
          {/*FIXME: href of following link need to be configured */}
          <li className="">Diese Veranstaltung findet in Kooperation mit der Kreisvolkshochschule Gifhorn statt und kann nur über die <a href="" className="relative before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-0 before:bg-[#5c7c3f] hover:before:w-full before:transition-all before:duration-300 inline-block text-[#265100]">Website der KVHS</a>  gebucht werden.​</li>
          <li className="text-[#738d5c] font-bold">Mittwoch, 21. Mai 2025 | 17:30 - 19.45 Uhr</li>
        </ul>
        <Link className="text-[#4D5E3D] text-[22px] leading-[1.36em] border border-[#2e5f2d]
                    bg-white w-80 md:w-92 h-13 whitespace-nowrap flex justify-center items-center hover:bg-[#9ab086]
                    transition-colors duration-400 mt-10 hover:text-white mb-16
                    "
                    href="/mein-angebot">
                        Anmeldung ab Februar 2026
        </Link>
        <p className="text-[18px] mt-4">
          Erfahre mehr über <Link href="/ueber/waldbaden" className="text-[#5c7c3f] underline hover:text-[#4D5E3D]">das Waldbaden</Link> oder entdecke unsere anderen Kurse weiter unten.
        </p>
      </div>
      </div>
      
    </section>    

  )
}