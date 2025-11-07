import Image from "next/image";

export default function HeroSection() {
  return (
  <section className={`w-full md:w-screen flex flex-col items-center md:mb-9 mb-0`}>
        <h1 className="md:text-[50px] text-[35px] text-[#5c7c3f] md:mb-20 md:mt-10 mt-5 leading-16 text-center">Termine & Preise</h1>
        <div className="w-screen md:w-[75vw] h-[30vh] md:h-[80vh] relative">
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