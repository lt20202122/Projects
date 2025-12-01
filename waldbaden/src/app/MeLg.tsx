import Image from "next/image"
import Link from "next/link"

export default function Me({playfair}:{playfair:any}) {

    return <div className={`w-full text-white relative hidden profile1:flex justify-center ${playfair.className} my-16`}>
        <div className="flex items-center gap-20 bg-[#9ab086] p-16 max-w-7xl mx-auto">
            <div className="h-[70vh] w-[35vw] relative shrink-0">
                    <Image src="/wald6.webp" alt="Ich im Wald" fill loading="lazy" className="object-cover"></Image>
            </div>
            <div className="flex flex-col gap-10 h-full pt-20">
                <div>
                    <h4 className={`${playfair.className} text-5xl mb-8`}>Christiane Thoroe</h4>
                    <p className={`${playfair.className} text-2xl leading-relaxed`}>Der Wald ist mein zweites Zuhause. <br/>
                        Hier komme ich zur Ruhe und sammle Kraft.</p>
                </div>
                <Link
                    href="/ueber/mich"
                    className="px-8 py-3 text-white border-2 border-white inline-flex items-center justify-center hover:bg-white hover:text-[#9ab086] transition-colors text-xl"
                >
                    Mehr erfahren
                </Link>
                <Link
                    href="/kontakt"
                    className="px-8 py-3 text-white border-2 border-white inline-flex items-center justify-center hover:bg-white hover:text-[#9ab086] transition-colors text-xl"
                >
                    Kontakt aufnehmen
                </Link>
            </div>
        </div>
    </div>
}