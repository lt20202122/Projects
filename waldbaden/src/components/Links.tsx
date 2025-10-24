import Link from 'next/link'
export default function Links() {

    return <div className=" text-white leading-5 hidden hamburger:flex">
        <Link href="/preise" className="pr-4">Termine & <span className="a:hidden"><br /></span>Preise</Link>
        <Link href="/kontakt" className="pr-4">Anmeldung & <span className="a:hidden"><br /></span>Kontakt</Link>
        <Link href="/ueber" className="pr-4">Über das Waldbaden & <span className="a:hidden"><br /></span>mich</Link>
    </div>
}