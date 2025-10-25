
export default function QuoteSectionMobile({playfair}:{playfair:any}) {
    return (
        <>
        <section className="min-w-screen overflow-auto relative quote:hidden bg-[#9AB086] flex justify-center px-[10%] py-[7%]">
        <p className={`text-[#FFF] ${playfair.className} text-[4vw] leading-[2.22222em] h-full`}>
            „Ich ging in die Wälder, weil ich bewusst leben wollte. Ich wollte das
            Dasein auskosten. Ich wollte das Mark des Lebens einsaugen! Und alles
            fortwerfen, das kein Leben barg, um nicht an meinem Todestag
            Innezuwerden, daß ich nie gelebt hatte.“ Henry David Thoreau
        </p>
        </section>
        <section>
            <img src="/wald2.png" alt="Wald" className="w-screen h-auto" />
        </section>

        </>
    );
    }