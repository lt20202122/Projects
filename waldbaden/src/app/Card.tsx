import Link from "next/link"
import Image from "next/image"
import Cards from './Data'

interface CardProps {
    imageSrc:string;
    id:number;
}
export default function Card({imageSrc, id}:CardProps) {
    return (
        <div className="relative bg-white grid gap-md:justify-items-center-safe max-w-full hover:-translate-y-2 transition-all duration-400 hover:bg-[#eee] py-5 px-0 overflow-x-hidden">
        <div className="w-[55vh] h-[55vh] relative mb-8">
            <Image src={imageSrc} alt={imageSrc}
                fill />
        </div>
        
        <h3 className="text-[#738D5C] text-3xl leading-[1.3em] mb-0 px-[4vw]">
            {Cards[id].title}
        </h3>
        <p className="text-black text-xl leading-[1.8em] mb-2 content2:w-[60vw] w-full px-[5vw]">
            {Cards[id].content}
        </p>
        <div>
            <p className="text-[#738B5E] text-lg font-medium leading-[1.66667em] mb-0 h-[130px] hidden content2:block">
                    {Cards[id].dates === "None" ? "" : Cards[id].dates.split("#").map((line,i) =>
                    <span key={id}>
                        {line}
                        <br/>
                    </span>
                )}
            </p>
            <p className="text-[#738B5E] text-lg font-medium leading-[1.66667em] mb-4 inline-block content2:hidden px-[5vw]">
                    {Cards[id].dates === "None" ? "" : Cards[id].dates.split("#").map((line,i) =>
                    <span key={`${id}-${i}`}>
                        {line}
                        <br/>
                    </span>
                )}
            </p>
        </div>
        
        <Link className="text-[#4D5E3D] text-[22px] leading-[1.36em] border border-[#2e5f2d]
          bg-white max-w-[70vw] md:w-64 h-12 flex justify-center items-center hover:bg-[#9ab086]
          transition-colors duration-400 mt-10 mx-[5vw] md:mx-auto hover:text-white mb-0
          max-md:w-[80%] max-md:text-[18px]"
        href="/mein-angebot">
            Alle Infos
        </Link>
        
        </div>
    )
}