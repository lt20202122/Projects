"use client"
import Link from "next/link"
import './Components.css'
import Image from "next/image"

export default function Footer() {
  return (
    <section className="bg-[#4a6432] text-white flex flex-col items-center pt-5 mt-4 gap-2 pb-5">
        <p>&copy;2025 Waldbaden mit Christiane</p>
        <div className="flex gap-5">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/agb">AGB</Link>
          <div className="rounded-[50%] w-6 box-border h-6 relative hover:cursor-pointer"
          onClick={()=>window.location.href=""}>
            <Image 
            src="/instagram.svg"
            alt="instagram"
            fill
            />
          </div>
          <div className="w-6 h-6 relative hover:cursor-pointer"
          onClick={()=>{
            window.location.href = "https://www.instagram.com/christianeimwald/"
          }}>
            <Image
            src="/linkedin.svg"
            alt="linkedin"
            fill
            className="fill-white"
            />
          </div>
        </div>
        
    </section>
  )
}