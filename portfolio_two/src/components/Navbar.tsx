import { getTranslations } from "next-intl/server";
import Link from "next/link";
export default async function Navbar() {
    const t = await getTranslations("Navbar")
    return (
        <nav className="w-screen flex justify-center gap-10 mt-1">
            <Link href="/de/my-work" className="hover:text-cyan text-[17px] text-text">{t("1")}</Link>
            <Link href="/de/contact" className="hover:text-cyan text-[17px] text-text">{t("2")}</Link>
            <Link href="/de/About" className="hover:text-cyan text-[17px] text-text">{t("3")}</Link>
        </nav>
    )
}