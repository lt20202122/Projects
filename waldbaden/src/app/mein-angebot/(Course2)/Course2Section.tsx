import Image from "next/image";
import Link from "next/link";

export default function Course2Section() {
  return (
    <section className={`px-[10vw] mb-20 w-screen`}>
      <div className="w-[70vw] h-[60vh] relative my-10 mx-auto mb-10 hidden md:block">
        <Image
        src="/wald9.webp"
        alt="Lichtung"
        fill
        className="object-contain"
        />
      </div>
      <div className="w-full h-[70vh] relative my-10 mx-auto mb-10 block md:hidden">
        <Image
        src="/wald14MOBILE.webp"
        alt="Lichtung"
        fill
        className="object-contain"
        />
      </div>

      <h2 className="text-[28px] text-[#5c7c3f] mb-2">Achtsam in den Feierabend</h2>
      <p className="text-[21px] mb-5">Waldbaden im Querumer Forst in Braunschweig & im Eyßelwald in Gifhorn
        <br/><br/>
        <span className="text-[18px]">In einer kleinen Gruppe erkunden wir zur Feierabendzeit den Querumer Forst in Braunschweig bzw. den Eyßelwald in Gifhorn. 
          Mit verschiedenen Achtsamkeitsübungen und kreativen, spielerischen Elementen schalten wir das Gedankenkarussell ab, erholen uns vom Stress des Tages und tanken neue Kraft. 
          Wir nehmen uns ganz bewusst Zeit für uns, entdecken die Natur in der Stadt und genießen den Aufenthalt im Grünen. </span>
      </p>
      <div className="hover:bg-[#ebecea] hover:-translate-y-1 transition-all duration-200">
        <h3 className="text-[#5c7c3f] text-[22px] font-bold">Entspannen und Kraft tanken: Achtsamkeit im Wald</h3>
        <p className="text-[21px] mb-5">Querumer Forst in Braunschweig</p>
        <ul className="list-disc pl-5 text-[18px]">
          {/* FIXME: href of following link need to be configured */}
          <li className="">Diese Veranstaltung findet in Kooperation mit der Volkshochschule Braunschweig statt und kann nur über die <a href="" className="relative before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-0 before:bg-[#5c7c3f] hover:before:w-full before:transition-all before:duration-300 inline-block text-[#265100]">Website der Volkshochschule</a>  gebucht werden.​</li>
          <li className="text-[#738d5c] font-bold">Mittwoch, 21. Mai 2025 | 17:30 - 19.45 Uhr</li>
        </ul>
        <Link className="text-[#FFF] text-[22px] leading-[1.36364em] border-2 border-[#2E5F2D] bg-[#84aa70] w-54 h-12 flex justify-center items-center rounded-sm
          hover:bg-[#9ec38a] transition-colors duration-400 mt-10 mx-auto mb-10"
          href="/kontakt">
              Anmelden
        </Link>
      </div>
      <div className="hover:bg-[#ebecea] hover:-translate-y-1 transition-all duration-200">
        <h3 className="text-[#5c7c3f] text-[22px] font-bold">Den Akku aufladen - mit Waldbaden</h3>
        <p className="text-[21px] mb-5">Eyßelwald in Gifhorn</p>
        <ul className="list-disc pl-5 text-[18px]">
          {/*FIXME: href of following link need to be configured */}
          <li className="">Diese Veranstaltung findet in Kooperation mit der Kreisvolkshochschule Gifhorn statt und kann nur über die <a href="" className="relative before:absolute before:w-0 before:h-0.5 before:bottom-0 before:left-0 before:bg-[#5c7c3f] hover:before:w-full before:transition-all before:duration-300 inline-block text-[#265100]">Website der KVHS</a>  gebucht werden.​</li>
          <li className="text-[#738d5c] font-bold">Mittwoch, 21. Mai 2025 | 17:30 - 19.45 Uhr</li>
        </ul>
        <Link className="text-[#FFF] text-[22px] leading-[1.36364em] border-2 border-[#2E5F2D] bg-[#84aa70] w-54 h-12 flex justify-center items-center rounded-sm
          hover:bg-[#9ec38a] transition-colors duration-400 mt-10 mx-auto"
          href="/kontakt">
              Anmelden
        </Link>
      </div>
      
    </section>    

  )
}