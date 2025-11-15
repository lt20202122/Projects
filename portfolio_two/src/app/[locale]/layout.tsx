import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/Navbar";
import {NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { AnimationProvider } from "../../AnimationContext";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

import {routing} from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning className="w-full max-w-screen scroll-smooth relative">

      <body className="bg-bg-dark text-text max-w-full">
        <NextIntlClientProvider>
          <AnimationProvider>
            <Navbar />
            {children}
          </AnimationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}