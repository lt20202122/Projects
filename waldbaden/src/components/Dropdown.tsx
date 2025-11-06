"use client"
import {useEffect} from 'react'
import Link from 'next/link'
import type {dropdownType} from './Hamburger'

export default function Dropdown({dropdownOpen, setDropdownOpen}:dropdownType) {
    const handleLinkClick = () => {
        setDropdownOpen(false);
    }
    
    return (
        <div className={`w-full absolute top-[90px] left-0 right-0
            bg-[#4a6432] overflow-hidden
            flex flex-col transition-all duration-300 ease-in-out
            md:hidden z-40
            ${dropdownOpen 
                ? "max-h-[400px] py-4 px-8 border-t-2 border-[#3a4e27]" 
                : "max-h-0 py-0 px-8 border-0"
            }
        `}>
            <Link href="/mein-angebot" className="text-white mb-3 hover:text-gray-200 transition-colors" onClick={handleLinkClick}>
                Termine & Preise
            </Link>
            <Link href="/kontakt" className='mb-3 text-white hover:text-gray-200 transition-colors' onClick={handleLinkClick}>
                Anmeldung & Kontakt
            </Link>
            <Link href="/ueber/mich" className='text-white hover:text-gray-200 transition-colors mb-3' onClick={handleLinkClick}>
                Über mich
            </Link>
            <Link href="/ueber/mich" className='text-white hover:text-gray-200 transition-colors' onClick={handleLinkClick}>
                Über das Waldbaden
            </Link>
        </div>
    )
}