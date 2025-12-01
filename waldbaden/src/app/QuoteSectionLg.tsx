export default function QuoteSectionLg({playfair}:{playfair:any}) {
    return (
        <section className="max-w-7xl mx-auto py-24 px-0 relative max-quote:hidden w-full md:w-screen">
            <div className="grid grid-cols-2 bg-accent overflow-hidden">
                <div className="p-8 md:p-16 flex items-center h-screen">
                    <blockquote className={`text-white ${playfair.className} text-2xl sm:text-[28px] leading-9`}>
                        „Ich ging in die Wälder, weil ich bewusst leben wollte. Ich wollte das
                        Dasein auskosten. Ich wollte das Mark des Lebens einsaugen! Und alles
                        fortwerfen, das kein Leben barg, um nicht an meinem Todestag
                        Innezuwerden, daß ich nie gelebt hatte.“
                        <p className="italic mt-8 text-2xl">
                            Henry David Thoreau
                        </p>
                    </blockquote>
                </div>
                
                <div className="relative aspect-4/3">
                    <img
                            src="/wald2.webp"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="Waldlichtung im Morgenlicht"
                        />
                </div>
        </div>
        </section>
        
    );
    }