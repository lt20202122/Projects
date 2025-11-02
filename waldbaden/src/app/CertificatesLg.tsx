"use client"
import Image from "next/image"

export default function CertificatesLg({ playfair }: { playfair: any }) {
  return (
    <div className={`bg-[#4a6432ab] p-10 px-[10vw] hidden certificates:flex h-[70vh] items-center justify-between ${playfair.className}`}>
        {/* Linke Spalte: Text oben, Akademie-Logo unten */}
        <div className="flex flex-col justify-between h-full py-8">
          <p className="text-left text-white text-[28px] font-normal leading-relaxed whitespace-nowrap">
            Zertifizierte <br />Kursleiterin <br />für Waldbaden
          </p>
          <div className="relative w-[180px] h-[180px]">
            <Image 
              alt="Waldbadenakademie"
              src="/Waldbadenakademie.png"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Zertifikat 1 */}
        <div className="relative h-[90%] w-[22vw]">
          <img
            src="/Zertifikat1.webp"
            alt="Zertifikat Kursleiterin"
            className="w-[80%] h-[90%] border-4 relative border-gray-400 drop-shadow-2xl ml-14 cursor-pointer hover:-translate-y-2 transition-all duration-300"
            onClick={() => window.open("/pdf/Zertifikat1.pdf", "_blank")}
          />
        </div>

        {/* Zertifikat 2 */}
        <div className="relative h-[90%] w-[22vw] ml-7">
          <img
            src="/Zertifikat2.webp"
            alt="Zertifikat Kursleiterin"
            className="w-[78%] h-[84%] border-4 border-gray-400 drop-shadow-2xl cursor-pointer hover:-translate-y-2 transition-all duration-300"
            onClick={() => window.open("/pdf/Zertifikat2.pdf", "_blank")}
          />
        </div>
        
        {/* Zertifikat 3 */}
        <div className="relative h-[90%] w-[22vw] ml-2">
          <img
            src="/Zertifikat3.webp"
            alt="Zertifikat Kursleiterin"
            className="w-[80%] h-[90%] border-4 border-gray-400 drop-shadow-2xl cursor-pointer hover:-translate-y-2 transition-all duration-300"
            onClick={() => window.open("/pdf/Zertifikat3.pdf", "_blank")}
          />
        </div>

        {/* Rechte Spalte: Text */}
        <div className="flex items-start h-full py-8">
          <p className="text-right text-white text-[28px] font-normal leading-relaxed">
            Zertifizierte <br />Naturmentorin
          </p>
        </div>
    </div>
  )
}