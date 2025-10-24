"use client"
import {Alegreya_Sans} from 'next/font/google'
import Hamburger from './Hamburger'
import Image from 'next/image'
import Links from './Links'
import {useState} from 'react'

const alegreya = Alegreya_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    return (
        <header className="h-[90px] w-screen flex items-center justify-between bg-main1 relative" style={{
            fontFamily:alegreya.className,
        }}>
            <Image src="/logo.svg" alt="logo" width={65} height={72} 
            className="ml-4"/>
        <Hamburger dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        <Links dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        </header>
    )
}