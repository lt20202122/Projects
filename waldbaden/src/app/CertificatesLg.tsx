import "./CertificatesLg.css"
import Image from "next/image"

export default function CertificatesLg({ playfair }: { playfair: any }) {
  return (
    <div className="bg-[#9ab086] p-10 hidden certificates:block">
      <div className={`certificates-layout ${playfair.className}`}>
        {/* Linke Überschrift */}
        <div>
            <div className="side-text text-left text-white text-[22px]">
          Zertifizierte <br />Kursleiterin <br />für Waldbaden
        </div>
        <div className="akademie ">
            <Image alt="Waldbadenakademie"
            src="/Waldbadenakademie.png"
            fill
            className="object-contain"
            />
        </div>
        </div>
        

        {/* Zertifikate */}
        <div className="certificates-row">
          <div className="cert-card">
            <Image
              src="/Zertifikat1.webp"
              alt="Zertifikat Kursleiterin"
              fill
              className="object-contain"
            />
          </div>
          <div className="cert-card">
            <Image
              src="/Zertifikat2.webp"
              alt="Zertifikat Kursleiterin"
              fill
              className="object-contain"
            />
          </div>
          <div className="cert-card">
            <Image
              src="/Zertifikat3.webp"
              alt="Zertifikat Kursleiterin"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Rechte Überschrift */}
        <div className="side-text text-right text-white text-[22px]">
          Zertifizierte <br />Naturmentorin
        </div>
      </div>
    </div>
  )
}