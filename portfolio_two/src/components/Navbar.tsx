import { getTranslations } from "next-intl/server";
import Link from "next/link";
export default async function Navbar() {
    const t = await getTranslations("Navbar")
    return (
        <nav className="w-screen flex justify-center gap-20 mt-2 font-semibold text-xl">
            <Link href="/de/my-work" className="hover:text-cyan text-[17px] text-text flex items-center max-h-7 gap-2 group">
            <svg className="max-h-11/12 py-1 w-5 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-px"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path fill="currentColor" d="M21,3H12.236l-4-2H3A3,3,0,0,0,0,4V23H24V6A3,3,0,0,0,21,3ZM3,3H7.764l4,2H21a1,1,0,0,1,1,1v.881L2,6.994V4A1,1,0,0,1,3,3ZM2,21V8.994l20-.113V21Z"/></g></svg>
            {t("1")}</Link>
            <Link href="/de/contact" className="hover:text-cyan text-[17px] group text-text flex items-center max-h-7 gap-2">
  <svg className="w-5 max-h-11/12 py-1 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="m22 14.02 2-1.398v11.378h-24v-18c0-1.654 1.346-3 3-3h7v2h-7c-.552 0-1 .449-1 1v.242l7.878 7.879c1.134 1.133 3.109 1.133 4.243 0l.121-.121h2.828l-1.535 1.536c-.945.944-2.201 1.464-3.536 1.464s-2.591-.52-3.536-1.464l-6.464-6.466v12.929h20v-7.98zm-2.174-9.657-1.283-4.363h-1.059l-1.285 4.363h-4.2v1.006l3.079 2.016-1.181 4.022.787.593 3.331-2.338 3.382 2.338.818-.571-1.271-3.982 3.054-2.083v-1h-4.174z"/>
  </svg>
  {t("2")}
</Link>

            <Link 
  href="/de/about" 
  className="group hover:text-cyan text-[17px] text-text flex items-center max-h-7 gap-2"
>
  <svg 
    className="max-h-11/12 py-1 w-5 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-px" 
    xmlns="http://www.w3.org/2000/svg" 
    id="Layer_1" 
    data-name="Layer 1" 
    viewBox="0 0 24 24" 
    width="512" 
    height="512"
  >
    <path 
      fill="currentColor" 
      d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-2.164c0-.552.449-1,1-1h6c.551,0,1,.448,1,1v2.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm10-1.169v-.995c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v.995c-2.427-1.826-4-4.73-4-7.995C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.264-1.573,6.169-4,7.995Zm-6-13.995c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"
    />
  </svg>
  {t("3")}
</Link>
        </nav>
    )
}