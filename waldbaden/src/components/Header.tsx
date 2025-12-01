"use client"
import {Alegreya_Sans, Playfair_Display} from 'next/font/google'
import Hamburger from './Hamburger'
import Image from 'next/image'
import Links from './Links'
import {useState} from 'react'
import { useRouter } from 'next/navigation'

const alegreya = Alegreya_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function Header() {
    const router = useRouter()
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    return (
        <header className={`h-[90px] w-full flex items-center relative justify-between gap-10 bg-[#4a6432] pr-8 ${playfair.className} font-medium`}>
            <div className='relative h-3/4 w-70'>
            <Image src="/logo.webp" alt="Waldbaden-Logo" fill
            className="ml-2 cursor-pointer object-contain" onClick={()=>router.push("/")}/>
            </div>
            <Hamburger dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
            <Links dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        </header>
    )
}