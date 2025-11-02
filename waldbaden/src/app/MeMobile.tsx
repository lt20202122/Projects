
import Image from "next/image"

export default function Me({playfair}:{playfair:any}) {
    return <div className="bg-[#9ab086] flex items-center justify-center w-screen h-screen text-white relative profile1:hidden">
        <div className={`grid grid-rows-2 gap-[10vw]`}>
            <div className="w-screen h-[120vw] relative">
                <Image src="/wald6.webp" alt="Ich im Wald"
                fill></Image>
            </div>
            <div className="px-5">
                <h4 className={`${playfair.className} text-5xl whitespace-nowrap`}>Christiane Thoroe</h4>
                <p className={`${playfair.className} text-2xl text-center mt-8 pl-2 pr-1`}>Der Wald ist mein zweites Zuhause. <br/>
                    Hier komme ich zur Ruhe und sammle Kraft. </p>
            </div>
            

        </div>
        
    </div>
}