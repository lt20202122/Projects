import Image from "next/image";

export default function ForestBathingSection() {
  return (
    <section className=" px-[15vw] flex flex-col">
    <div className="w-[65vw] h-[70vh] relative my-10 mb-10 hidden md:block">
            <Image
            src="/wald15.webp"
            alt="Waldboden"
            fill
            className="object-contain"
            />
        </div>
    <h1 className="text-[#5c7c3f] text-[28px]">Was ist Waldbaden?</h1>
    <p className="text-[18px] leading-7">
        Der Begriff „Waldbaden“ leitet sich aus dem Japanischen Shinrin-Yoku ab. 
        Gemeint ist nicht das Bad in einem Waldsee, wörtlich übersetzt heißt es „Eintauchen in die Atmosphäre des Waldes“. 
        Beim Waldbaden nehmen wir die Umgebung des Waldes ganz bewusst wahr und lassen sie auf uns wirken. 
        Wir spüren unsere Verbindung zur Natur noch intensiver als bei einem Spaziergang, denn verschiedene Achtsamkeitsübungen helfen uns, das Gedankenkarussel anzuhalten 
        und uns zu entspannen. Wir genießen den Wald mit all unseren Sinnen und schöpfen neue Kraft.
    </p> <br/>
    <div className="w-[65vw] h-[70vh] relative my-10 mb-10 hidden md:block">
            <Image
            src="/wald16.webp"
            alt="Moosbewachsener Baumstamm"
            fill
            className="object-contain"
            />
        </div>
    <h2 className="text-[#5c7c3f] text-[28px]">Effekte des Waldbadens</h2>
    <p className="text-[18px] leading-7">
        Wissenschaftliche Studien haben gezeigt, dass schon kurze Aufenthalte im Wald einen positiven Einfluss auf unsere körperliche und psychische Gesundheit haben können: Unser Immunsystem wird gestärkt, der Blutdruck reguliert, Stress reduziert, die Konzentration und das Gedächtnis werden verbessert. Außerdem kann die Resilienz gestärkt und Depressionen gelindert werden, der Schlaf und die Stimmung können verbessert werden. Diese und viele weitere positive Auswirkungen auf das Nerven-, Hormon- und Immunsystem konnten durch mehrere Studien belegt, sollten aber am besten selbst erlebt werden. 
    </p> <br/>
    <div className="w-[65vw] h-[70vh] relative my-10 mb-10 hidden md:block">
            <Image
            src="/wald17.webp"
            alt="Moos im Wald"
            fill
            className="object-contain"
            />
        </div>
    <h2 className="text-[#5c7c3f] text-[28px]">Was sind Achtsamkeitsübungen?</h2>
    <p className="text-[18px] leading-7">
        Hast Du schon mal Moos gestreichelt? Es kann so richtig kuschelig weich sein. Und da sind wir schon beim typischen Klischee: Waldbaden ist Bäume umarmen! Naja, ich habe nichts dagegen, mich bei einem Baum anzulehnen und ihn auch zu umarmen, aber es gibt unzählige Waldbaden-Übungen: Meditation und Atemübungen, Landart (Bilder aus Naturmaterialien legen), Qigong, Tasten und Fühlen, Barfuß gehen, leichte Bewegungen, Staunen, Solozeit und vieles mehr. Es gibt auch viele Utensilien, die man ausprobieren kann, wie z. B. Hängematte, Lupe, Spiegel und Diarahmen. Ein paar Elemente des Waldbadens möchte ich Dir im Wald gerne zeigen.  
    </p> <br/>
    <div className="w-[65vw] h-[70vh] relative my-10 mb-10 hidden md:block">
            <Image
            src="/wald18.webp"
            // FIXME:Was ist das?
            alt="Sonnenuntergang im Wald"
            fill
            className="object-contain"
            />
        </div>
    <h2 className="text-[#5c7c3f] text-[28px] mb-2">Literaturtipps</h2>
    <span className="text-[18px] mb-1 inline-block">Es gibt eine Fülle guter Bücher über Waldbaden und Naturverbindung. Diese haben mir besonders gut gefallen:</span>
<ul className="text-[18px] list-disc pl-5 space-y-2 mb-5">
  <li>
    <span className="text-[#5c7c3f]">Dr. Qing Li:</span> „Die wertvolle Medizin des Waldes. Wie die Natur Körper und Geist stärkt“
  </li>
  <li>
    <span className="text-[#5c7c3f]">Dr. Melanie Adamek:</span> „Im Wald sein. Die natürliche Antwort auf Psychostress und Zivilisationskrankheiten. Entdeckung eines Präventivkonzepts“
  </li>
  <li>
    <span className="text-[#5c7c3f]">Dr. Gerlinde Manz-Christ:</span> „Ankommen. Aufatmen. Sich selbst wiederfinden durch Naturverbundenheit.“
  </li>
  <li>
    <span className="text-[#5c7c3f]">Elli H. Radinger:</span> „Das Geschenk der Wildnis“
  </li>
  <li>
    <span className="text-[#5c7c3f]">Wolf-Dieter Storl:</span> „Wir sind Geschöpfe des Waldes“
  </li>
  <li>
    <span className="text-[#5c7c3f]">Jasmin Schlimm-Thierjung, Cornelia Wriedt:</span> „Wir lieben Waldbaden“ <span className="italic">(Ein Buch für die ganze Familie)</span>
  </li>
  <li>
    <span className="text-[#5c7c3f]">Henry David Thoreau:</span> „Walden“
  </li>
</ul>


    </section>
  )
}