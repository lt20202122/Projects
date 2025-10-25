export default function ContentStripe({playfair}:{playfair:any}) {
    return (
        <section className={`min-w-screen relative bg-[#EBECEA] ${playfair.className} flex flex-col items-center mb-16 py-4`}>
        <h2 className="text-[#627D60] text-[36px] font-normal leading-[1.66667em] text-center px-2">
            Waldbaden in Braunschweig, Gifhorn und Umgebung
        </h2>
        <p className="text-lg font-normal leading-[1.66667em] text-center px-20">
            Lass Deinen Alltag hinter Dir und tauche ein in die beruhigende
            Atmosphäre des Waldes!  Beim Waldbaden - die Japaner nennen es Shinrin
            Yoku - geht es darum, achtsam und mit allen Sinnen im Wald präsent zu
            sein. Mit verschiedenen Übungen gelingt es uns, zur Ruhe zu kommen. Wir
            entspannen uns, spüren eine tiefe Verbindung zur Natur und dadurch auch
            zu uns selbst. 
        </p>
        </section>
    );
}