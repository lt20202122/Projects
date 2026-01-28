
import Image from "next/image"

export default function Me({ playfair }: { playfair: any }) {
    return <div className="bg-[#9ab086] w-full flex items-center justify-center text-white relative profile1:hidden pt-12 mb-12 pb-10">
        <div className="flex flex-col gap-10 max-w-lg mx-auto px-4">
            <div className="w-full aspect-4/5 relative overflow-hidden">
                <Image src="/wald6.webp" alt="Christiane Thoroe - Kursleiterin für Waldbaden"
                    fill loading="lazy" className="object-cover"></Image>
            </div>
            <div className="px-4 text-center">
                <h4 className={`${playfair.className} text-4xl`}>Christiane Thoroe</h4>
                <p className={`${playfair.className} text-xl mt-6 leading-relaxed`}>Der Wald ist mein zweites Zuhause.
                    Hier komme ich zur Ruhe und sammle Kraft. </p>
            </div>


        </div>

    </div>
}