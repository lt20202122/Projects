import Image from "next/image";

export default function HeroSection() {
  return (
  <section className={`w-full md:w-screen flex flex-col items-center mb-10`}>
        <h1 className="text-[50px] text-[#5c7c3f] mb-20 mt-10 leading-16 text-center">Termine & Preise</h1>
        <div className="w-[95vw] md:w-[75vw] h-[30vh] md:h-[80vh] relative">
            <Image 
            src="/wald8.webp"
            alt="Farn"
            fill
            className="object-contain"
            />
        </div>
    </section>
  )
}