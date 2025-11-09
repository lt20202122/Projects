import { Link } from "@/i18n-routing"
import { getTranslations } from "next-intl/server"

export default async function Navbar() {
  const t = await getTranslations("Navbar")

  return (
    <nav className="flex items-center justify-between h-16 px-8 md:px-20 dark:bg-dark_bg dark:text-white text-regular leading-[150%] tracking-normal">
      {/* Left: Links */}
      <div className="flex gap-10">
        <Link href="/" className="hover:text-purple_heart transition-colors duration-300">Start</Link>
        <Link href="/" className="hover:text-purple_heart transition-colors duration-300">Portfolio</Link>
        <Link href="/" className="hover:text-purple_heart transition-colors duration-300">{t("Link3")}</Link>
      </div>

      {/* Right: Button */}
      <Link href="/contact" className="primaryBtn">
        {t("Link4")}
      </Link>
    </nav>
  )
}
