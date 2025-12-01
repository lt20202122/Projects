"use client"
import Image from "next/image"

export default function CertificatesLg({ playfair }: { playfair: any }) {
  return (
  <div className={`bg-[#4a6432ab] pt-8 md:pt-10 px-6 md:px-[4vw] hidden certificates:flex h-[70vh] items-center justify-between ${playfair.className}`}>
        {/* Linke Spalte: Text oben, Akademie-Logo unten */}
        <div className="flex flex-col justify-between h-full py-8">
          <p className="text-left text-white lg:text-[28px] font-normal leading-9 whitespace-nowrap md:text-[22px]">
            Zertifizierte <br />Kursleiterin <br />für Waldbaden
          </p>
          <div className="relative w-[180px] h-[180px]">
            <Image 
              alt="Logo der Waldbadenakademie"
              src="/Waldbadenakademie.png"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Zertifikat 1 */}
  <div className="relative h-[90%] w-full md:w-[22vw]">
            <Image
              src="/Zertifikat1.webp"
              alt="Zertifikat – Kursleiterin"
              fill
              loading="lazy"
              className="w-[80%] h-[90%] relative drop-shadow-2xl ml-14 cursor-pointer hover:-translate-y-2 transition-all duration-300 object-contain"
              onClick={() => window.open("/pdf/Zertifikat1.pdf", "_blank")}
            />
        </div>

        {/* Zertifikat 2 */}
  <div className="relative h-[90%] w-full md:w-[22vw] ml-7">
            <Image
              src="/Zertifikat2.webp"
              alt="Zertifikat – Kursabschluss"
              fill
              loading="lazy"
              className="w-[78%] h-[84%] drop-shadow-2xl cursor-pointer hover:-translate-y-2 transition-all duration-300 object-contain"
              onClick={() => window.open("/pdf/Zertifikat2.pdf", "_blank")}
            />
        </div>
        
        {/* Zertifikat 3 */}
  <div className="relative h-[90%] w-full md:w-[22vw] ml-2">
            <Image
              src="/Zertifikat3.webp"
              alt="Zertifikat – Qualifikation Waldbaden"
              fill
              loading="lazy"
              className="w-[80%] h-[90%]drop-shadow-2xl cursor-pointer hover:-translate-y-2 transition-all duration-300 object-contain"
              onClick={() => window.open("/pdf/Zertifikat3.pdf", "_blank")}
            />
        </div>

        {/* Rechte Spalte: Text */}
        <div className="flex items-start h-full py-8">
          <p className="text-right text-white text-[28px] font-normal leading-9 md:text-[22px]">
            Zertifizierte <br />Naturmentorin
          </p>
        </div>
    </div>
  )
}