import Link from 'next/link'
import type {dropdownType} from './Hamburger'

export default function Dropdown({dropdownOpen, setDropdownOpen}:dropdownType) {
    const handleLinkClick = () => {
        setDropdownOpen(false);
    }

    return (
        <div className={`w-screen absolute top-22 
        bg-main1 overflow-hidden pl-3
        flex flex-col transition-all duration-400
        ${dropdownOpen ?  "h-40 pt-3 border-2 border-[#3a4e27]" : "h-0 p-0 pt-0 border-0"}
        `}>
            <Link href="/preise" className="text-white mb-2" onClick={handleLinkClick}>Termine & Preise</Link>
            <Link href="/kontakt" className='mb-2 text-white' onClick={handleLinkClick}>Anmeldung & Kontakt</Link>
            <Link href="/ueber" className='text-white' onClick={handleLinkClick}>Über das Waldbaden & mich</Link>
        </div>
    )
}