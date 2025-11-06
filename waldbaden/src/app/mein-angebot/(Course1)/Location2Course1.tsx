import Link from "next/link";

export default function LocationsCourse2() {
    return (
        <div className={`min-w-screen relative px-[13vw]`}>
            <h5 className={`text-main-light text-[22px] font-bold leading-[1.66667em] px-2 mb-3`}>
            Ruhewald Ribbesbüttel
            </h5>
            <ul className="text-[18px] list-disc pl-5 flex gap-0.5 flex-col mb-10">
            <li>Dauer: 3 Stunden</li>
            <li>Preis pro Person: 40 € </li>
            <li>Strecke: ca. 2 km</li>
            <li>Treffpunkt: Parkplatz am Ruhewald Ribbesbüttel</li>
            <li>Termine 2025: </li>

            <li className="text-[#738d5c] font-bold">Sonntag, 22. Juni | 13.30 - 16.30 Uhr​</li>

            <li className="text-[#738d5c] font-bold">Sonntag, 21. September | 14.00 - 17.00 Uhr</li>
            </ul>
        <Link className="text-[#4D5E3D] text-[22px] leading-[1.36em] border border-[#2e5f2d]
                    bg-white w-59 h-13 whitespace-nowrap flex justify-center items-center hover:bg-[#9ab086]
                    transition-colors duration-400 mt-10 hover:text-white mb-16
                    "
                    href="/kontakt">
                        Anmelden
        </Link>
        <p className="text-[18px] mb-5"><span className="text-[#738d5c]">Frag mich gern für ein individuelles Waldbad mit Deinen Freunden, Kolleginnen oder Deiner Familie an. <br/></span>
    Ein Angebot in Kooperation mit dem Ruhewald Ribbesbüttel <br/> <br/>
    Der Ruhewald Ribbesbüttel ist ein ganz besonderer Ort der Ruhe und Geborgenheit. 
    Uralte Bäume stehen dort neben neu gepflanzten und es gibt Totholz in den unterschiedlichsten Formen. 
    Dadurch zeigt sich eine hohe Artenvielfalt sowohl bei den Tieren als auch bei den Pflanzen. 
    Der Wald ist mit zwei Rundwegen erschlossen, die als natürliche Trampelpfade gehalten werden. 
    Besonders idyllisch sind das Feuchtbiotop und die kleinen Holzbrücken entlang der Wege. 
    Der Ruhewald steht als Ort der Entspannung und Erholung grundsätzlich allen Besucherinnen und Besuchern offen. 
    Die Waldbaden-Veranstaltungen finden nicht während der Bestattungen statt. 
    rotzdem sind wir uns der besonderen Atmosphäre des Ortes bewusst und verhalten uns würdevoll.
    </p>
    <p className="mx-auto text-[#738d5c] text-[18px] pb-8">Alle weiteren Infos gibt´s bei der Buchung oder frag mich einfach!</p>
        </div>
    )
    }