import "./CertificatesMobile.css"
import Image from "next/image"

export default function CertificatesMobile({ playfair }: { playfair: any }) {
    return (
        <div className="bg-[#9ab086] block md:hidden">
        <div className={`parent ${playfair.className} text-white p-10 pt-[10vh]`}>
            <div className="div1 text-[22px]">
            Zertifizierte Kursleiterin für Waldbaden
            </div>

            <div className="div2">
            <div className="relative Certificate1Div">
                <Image
                src="/Zertifikat1.webp"
                alt="Zertifikat Kursleiterin Waldbaden"
                fill
                className="object-contain certimg"
                />
            </div>
            </div>

            <div className="div3">
            <div className="relative Certificate2Div">
                <Image
                src="/Zertifikat2.webp"
                alt="Zertifikat Kursleiterin Waldbaden"
                fill
                className="object-contain certimg"
                />
            </div>
            </div>

            <div className="div4">
            <div className="relative Certificate3Div">
                <Image
                src="/Zertifikat3.webp"
                alt="Zertifikat der 'Deutschen Akademie für Waldbaden und Gesundheit'"
                fill
                className="object-contain certimg"
                />
            </div>
            </div>

            <div className="div5 text-[22px]">Zertifizierte Naturmentorin</div>

            <div className="div6">
            <div className="relative ImageDiv">
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
