import MeLg from "./MeLg";
import MeMobile from './MeMobile'
import CertificatesLg from "./CertificatesLg";
import CertificatesMobile from "./CertificatesMobile";

export default function Profile({playfair}:{playfair:any}) {
    return (
        <section className="flex flex-col gap-0 contact:gap-10">
            <MeLg playfair={playfair}/>
            <MeMobile playfair={playfair}/>
            <CertificatesLg playfair={playfair}/>
            <CertificatesMobile playfair={playfair} />
        </section>
    )
}