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
            <Link href="/preise" className="text-white mb-2 mr-4" onClick={handleLinkClick}>
                Termine & Preise
            </Link>
            <Link href="/kontakt" className="text-white mb-2 mr-4" onClick={handleLinkClick}>
                Anmeldung & Kontakt
            </Link>
            <Link href="/ueber" className="text-white mb-2 mr-2" onClick={handleLinkClick}>
                Über das Waldbaden & mich
            </Link>
        </div>
    )
}
