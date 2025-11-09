import "./CertificatesMobile.css"
import Image from "next/image"

export default function CertificatesMobile({ playfair }: { playfair: any }) {
    return (
        <div className="bg-[#9ab086] block certificates:hidden">
        <div className={`flex flex-col  gap-6 ${playfair.className} text-white py-10`}>
            <div className="div1 text-[22px] px-[10vw] mx-auto">
            Zertifizierte Kursleiterin für Waldbaden
            </div>

            <div className="div2 relative">
            <div className="relative w-full h-[50vh]">
                <Image
                src="/Zertifikat1.webp"
                alt="Zertifikat Kursleiterin Waldbaden"
                fill
                className="object-contain certimg"
                />
            </div>
            </div>

            <div className="div3">
            <div className="relative w-full h-[50vh]">
                <Image
                src="/Zertifikat2.webp"
                alt="Zertifikat Kursleiterin Waldbaden"
                fill
                className="object-contain certimg"
                />
            </div>
            </div>

            <div className="div4">
            <div className="relative w-full h-[50vh]">
                <Image
                src="/Zertifikat3.webp"
                alt="Zertifikat der 'Deutschen Akademie für Waldbaden und Gesundheit'"
                fill
                className="object-contain certimg"
                />
            </div>
            </div>

            <div className="div5 text-[22px] px-[10vw] mx-auto">Zertifizierte Naturmentorin</div>

            <div className="div6 relative">
            <div className="relative h-full w-full">
                <Image
                src="/Waldbadenakademie.png"
                alt="Zertifikat zur Naturmentorin"
                fill
                className="object-contain"
                />
            </div>
            </div>
        </div>
        </div>
    )
    }
