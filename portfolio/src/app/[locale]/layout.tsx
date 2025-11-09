import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import '../globals.css'
import Navbar from "@/components/Navbar";
import {Inter} from 'next/font/google'

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"]
})


const locales = ['de', 'en'];

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  console.log("params: ",params)
  if (!locales.includes(locale)) {
    notFound();
  }
  console.log("notFound no thrown yet")
  const messages = await getMessages();
  console.log("messages: ", messages)
  return (
    <html lang={locale}>
      <body className={`${inter.className} dark:bg-dark_bg`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="">
            {children}
          </main>
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}