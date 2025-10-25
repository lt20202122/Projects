import Link from "next/link"
import Image from "next/image"
import Cards from './Data'

interface CardProps {
    imageSrc:string;
    id:number;
}
export default function Card({imageSrc, id}:CardProps) {
    return (
        <div className="relative bg-white grid gap-2 justify-items-center hover:-translate-y-2 transition-all duration-400 hover:bg-[#eee] pt-5 px-5">
        <div className="w-[42vh] h-[42vh] relative mb-12">
            <Image src={imageSrc} alt={imageSrc}
                fill />
        </div>
        
        <h3 className="text-[#738D5C] text-3xl leading-[1.3em] mb-12">
            {Cards[id].title}
        </h3>
        <p className="text-black text-xl leading-[1.8em] mb-12 max-content2:w-[60vw]">
            {Cards[id].content}
        </p>
        <p className="text-[#738B5E] text-lg font-medium leading-[1.66667em] mb-12 h-[130px]">
                {Cards[id].dates === "None" ? "" : Cards[id].dates.split("#").map((line,i) =>
                <span key={id}>
                    {line}
                    <br/>
                </span>
            )}
        </p>
        <div className="boxTotal">
            <Link className="text-[#FFF] text-[22px] leading-[1.36364em] border-2 border-[#2E5F2D] bg-[#84aa70] w-54 h-16 flex justify-center items-center rounded-sm
            hover:bg-[#9ec38a] transition-colors duration-400"
            href="/mein-angebot">
                Alle Infos
            </Link>
        </div>
        
        </div>
    )
}