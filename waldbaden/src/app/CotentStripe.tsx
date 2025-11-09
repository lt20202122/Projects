export default function ContentStripe({playfair}:{playfair:any}) {
    return (
        <section className={`w-full bg-bg-light ${playfair.className} py-8 my-8`}>
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <h2 className="text-maim-light text-3xl [920px]:text-4xl leading-relaxed text-center mb-4 md:whitespace-nowrap text-main font-semibold">
                    Waldbaden in Braunschweig, Gifhorn und Umgebung
                </h2>
                <p className="text-lg leading-relaxed overflow-x-hidden max-w-screen text-center">
                    Lass Deinen Alltag hinter Dir und tauche ein in die beruhigende
                    Atmosphäre des Waldes! <br className="hidden sm:block"/> Beim Waldbaden - die Japaner nennen es Shinrin
                    Yoku - geht es darum, achtsam und mit allen Sinnen im Wald präsent zu
                    sein. Mit verschiedenen Übungen gelingt es uns, zur Ruhe zu kommen. Wir
                    entspannen uns, spüren eine tiefe Verbindung zur Natur und dadurch auch
                    zu uns selbst. 
                </p>
            </div>
        </section>
    );
}