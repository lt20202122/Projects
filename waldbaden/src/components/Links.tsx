"use client"
import Link from "next/link"
import type { dropdownType } from "./Hamburger"

export default function Dropdown({ dropdownOpen, setDropdownOpen }: dropdownType) {
    const handleLinkClick = () => {
        setDropdownOpen(false)
    }

    return (
        <div
            className={`
                text-white leading-5 hidden hamburger:flex
            `}
        >
            <Link href="/mein-angebot" className="text-white mb-2 mr-4 hover:text-[#d7e6d1] transition-colors duration-400" onClick={handleLinkClick}>
                Termine & Preise
            </Link>
            <Link href="/kontakt" className="text-white mb-2 mr-4 hover:text-[#d7e6d1] transition-colors duration-400" onClick={handleLinkClick}>
                Anmeldung
            </Link>
            <Link href="/ueber/waldbaden" className="text-white mb-2 mr-4 hover:text-[#d7e6d1] transition-colors duration-400" onClick={handleLinkClick}>
                Über das Waldbaden
            </Link>
            <Link href="/ueber/mich" className="text-white mb-2 mr-4 hover:text-[#d7e6d1] transition-colors duration-400" onClick={handleLinkClick}>
                Über mich
            </Link>
        </div>
    )
}
