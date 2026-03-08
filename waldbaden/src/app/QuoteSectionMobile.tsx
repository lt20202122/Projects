
export default function QuoteSectionMobile({ playfair }: { playfair: any }) {
    return (
        <>
            <div className="quote:hidden">
                <section className="bg-accent px-6 py-12">
                    <blockquote className={`text-white ${playfair.className} text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto`}>
                        „Ich ging in die Wälder, weil ich bewusst leben wollte. Ich wollte das
                        Dasein auskosten. Ich wollte das Mark des Lebens einsaugen! Und alles
                        fortwerfen, das kein Leben barg, um nicht an meinem Todestag
                        Innezuwerden, daß ich nie gelebt hatte.“
                        <footer className="italic mt-6">
                            Henry David Thoreau
                        </footer>
                    </blockquote>
                </section>
                <section className="aspect-video relative">
                    <img
                        src="/1650391244514.jpg"
                        loading="lazy"
                        alt="Waldlichtung im Morgenlicht"
                        className="w-full h-full object-cover"
                    />
                </section>
            </div>

        </>
    );
}