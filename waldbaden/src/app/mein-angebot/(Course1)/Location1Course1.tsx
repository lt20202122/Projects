import Link from "next/link";

export default function LocationsCourse1() {
  return (
    <div className={`min-w-screen relative bg-[#f5f6f4] px-[10vw] pb-4`}>
        <h5 className={`text-[#627D60] text-[22px] font-bold leading-[1.66667em] px-2 mb-4`}>
        Buchhorst - Wald im Osten von Braunschweig 
        </h5>
        <ul className="text-[18px] list-disc pl-5 flex gap-2 flex-col mb-10">
          <li>Dauer: 3 Stunden</li>
          <li>Preis pro Person: 40 € </li>
          <li>Strecke: ca. 2 km</li>
          <li>Treffpunkt: Waldparkplatz Ebertallee</li>
          <li>Termine 2025: </li>

          <li className="text-[#738d5c] font-bold">Samstag, 10. Mai | 13.30 - 16.30 Uhr​</li>

          <li className="text-[#738d5c] font-bold">Samstag, 25. Oktober | 13.30 - 16.30 Uhr </li>
        </ul>
        <p className="text-[18px]"><span className="text-[#738d5c]">Frag mich gern für ein individuelles Waldbad mit Deinen Freunden, Kolleginnen oder Deiner Familie an. <br/></span>
Ein Angebot in Kooperation mit der Stiftung Braunschweigischer Kulturbesitz</p>
    <Link className="text-[#FFF] text-[22px] leading-[1.36364em] border-2 border-[#2E5F2D] bg-[#84aa70] w-54 h-12 flex justify-center items-center rounded-sm
        hover:bg-[#9ec38a] transition-colors duration-400 mt-10 mx-auto"
        href="/kontakt">
            Anmelden
      </Link>
    </div>
  )
}