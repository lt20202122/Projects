export default function QuoteSectionLg({playfair}:{playfair:any}) {
    return (
        <section className="h-screen p-20 relative max-quote:hidden">
        <div className="relative w-full h-full grid grid-rows-1 grid-cols-[1fr_minmax(auto,1fr)] bg-[#9AB086]">
        <p className={`text-[#FFF] ${playfair.className} text-2xl leading-[1.4em] max-w-[40vw] z-10 relative p-4`}>
            „Ich ging in die Wälder, weil ich bewusst leben wollte. Ich wollte das
            Dasein auskosten. Ich wollte das Mark des Lebens einsaugen! Und alles
            fortwerfen, das kein Leben barg, um nicht an meinem Todestag
            Innezuwerden, daß ich nie gelebt hatte.“ <br/><span className="italic">-Henry David Thoreau</span>
        </p>
        <img
            src="/wald2.png"
            className="h-full z-20 max-w-[40vw]"
            alt="Rectangle 2"
        />
        </div>
        </section>
        
    );
    }