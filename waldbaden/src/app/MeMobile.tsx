
import Image from "next/image"

export default function Me({playfair}:{playfair:any}) {
    return <div className="bg-[#9ab086] flex items-center justify-center w-full min-h-screen text-white relative profile1:hidden py-12">
        <div className="flex flex-col gap-10 max-w-lg mx-auto px-4">
            <div className="w-full aspect-4/5 relative overflow-hidden">
                <Image src="/wald6.webp" alt="Ich im Wald"
                fill className="object-cover"></Image>
            </div>
            <div className="px-4 text-center">
                <h4 className={`${playfair.className} text-4xl`}>Christiane Thoroe</h4>
                <p className={`${playfair.className} text-xl mt-6 leading-relaxed`}>Der Wald ist mein zweites Zuhause. <br/>
                    Hier komme ich zur Ruhe und sammle Kraft. </p>
            </div>
            

        </div>
        
    </div>
}