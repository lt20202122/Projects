import MeLg from "./MeLg";
import MeMobile from './MeMobile'
import ContactLg from "./ContactLg";
import ContactMobile from './ContactMobile'
import CertificatesLg from "./CertificatesLg";
import CertificatesMobile from "./CertificatesMobile";
import { Playfair_Display } from "next/font/google";

export default function Profile({playfair}:{playfair:any}) {
    return (
        <section className="flex flex-col gap-0 contact:gap-10">
            <MeLg playfair={playfair}/>
            <MeMobile playfair={playfair}/>
            <ContactLg playfair={playfair}/>
            <ContactMobile playfair={playfair}/>
            <CertificatesLg playfair={playfair}/>
            <CertificatesMobile playfair={playfair} />
        </section>
    )
}