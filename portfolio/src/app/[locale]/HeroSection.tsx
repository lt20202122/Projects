import { getTranslations } from "next-intl/server"
import { Raleway } from "next/font/google"
import InteractivePhone3D from "../Phone"

const rale = Raleway({
  subsets: ["latin"],
  variable: "--font-rale",
  display: "swap",
  weight: ["500"]
})


export default async function HeroSection() {
    const t = await getTranslations("Homepage.HeroSection")
  return (
    <section className="mt-lg w-full flex flex-col items-center bg-linear-to-t from-[#731B00] to-dark_bg h-screen md:px-[75px]">
        <h1 className="inner-shadow text-[160px] leading-[1.2em] overflow-hidden text-center caret-transparent">{t("title")}</h1>
        <InteractivePhone3D />
    </section>
  )
}