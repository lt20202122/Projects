"use client"
import {Alegreya_Sans} from 'next/font/google'
import Hamburger from './Hamburger'
import Image from 'next/image'
import Links from './Links'
import {useState} from 'react'
import { useRouter } from 'next/navigation'

const alegreya = Alegreya_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function Header() {
    const router = useRouter()
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
    return (
        <header className="h-[90px] w-screen flex items-center relative justify-between bg-main1 pr-8" style={{
            fontFamily:alegreya.className,
        }}>
            <div className='relative h-3/4 w-70'>
            <Image src="/logo.webp" alt="logo" fill
            className="ml-8 cursor-pointer object-contain" onClick={()=>router.push("/")}/>
            </div>
        <Hamburger dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        <Links dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen} />
        </header>
    )
}