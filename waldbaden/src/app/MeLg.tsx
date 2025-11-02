import Image from "next/image"

export default function Me({playfair}:{playfair:any}) {

    return <div className="bg-[#9ab086] items-center w-screen h-[83vh] text-white relative hidden profile1:flex">
        <div className="grid grid-cols-2 items-center gap-[10vw]">
            <div className="h-[70vh] max-w-[50vw] relative ml-10">
                <Image src="/wald6.webp" alt="Ich im Wald"
                fill></Image>
            </div>
            <div className="mr-5">
                <h4 className={`${playfair.className} text-5xl whitespace-nowrap`}>Christiane Thoroe</h4>
                <p className={`${playfair.className} text-2xl text-center mt-5`}>Der Wald ist mein zweites Zuhause. <br/>
                    Hier komme ich zur Ruhe und sammle Kraft. </p>
            </div>
            

        </div>
        
    </div>
}