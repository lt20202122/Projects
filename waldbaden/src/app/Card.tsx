import Link from "next/link"
import Image from "next/image"
import Cards from './Data'

interface CardProps {
    imageSrc: string;
    id: number;
}

export default function Card({ imageSrc, id }: CardProps) {
    return (
        <div className="relative bg-white grid gap-0 justify-items-center hover:-translate-y-2
            transition-all duration-300 hover:bg-[#eee] py-5 xl:px-10">

            {/* Bild */}
            <div className="w-full max-w-[55vh] h-[55vh] relative mb-8">
                <Image
                    src={imageSrc}
                    alt={`Kurs: ${Cards[id].title}`}
                    fill
                    loading="lazy"
                    className="object-cover"
                />
            </div>

            {/* Titel */}
            <h3 className="text-[#738D5C] text-2xl md:text-3xl leading-[1.3em] mb-2 text-center px-2 ">
                {Cards[id].title}
            </h3>

            {/* Content */}
            <p className="text-black text-lg md:text-xl leading-[1.8em] mb-2 text-center px-2 inline">
                {Cards[id].content}
            </p>

            {/* Dates Section */}
            <div className="w-full flex justify-center px-2 whitespace-nowrap">
                {/* Desktop Version - mit fester Höhe */}
                <p className="text-[#738B5E] text-lg font-medium leading-[1.66667em] mb-0 
                    h-[130px] hidden content2:block text-center">
                    {Cards[id].dates === "None" ? "" : Cards[id].dates.split("#").map((line, i) =>
                        <span key={`${id}-desktop-${i}`}>
                            {line}
                            <br />
                        </span>
                    )}
                </p>

                {/* Mobile Version - ohne feste Höhe */}
                <p className="text-[#738B5E] text-lg font-medium leading-[1.66667em] mb-4 
                    inline-block content2:hidden text-center">
                    {Cards[id].dates === "None" ? "" : Cards[id].dates.split("#").map((line, i) =>
                        <span key={`${id}-mobile-${i}`}>
                            {line}
                            <br />
                        </span>
                    )}
                </p>
            </div>

            {/* Button */}
            <Link
                className="text-[#4D5E3D] text-lg md:text-[22px] leading-[1.36em] 
                    border border-[#2e5f2d] bg-white w-[80%] md:w-64 h-12 
                    flex justify-center items-center hover:bg-[#9ab086]
                    transition-colors duration-300 mt-6 md:mt-10 hover:text-white"
                href="/mein-angebot"
            >
                Alle Infos
            </Link>
        </div>
    )
}