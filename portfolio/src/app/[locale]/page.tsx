import {getTranslations} from 'next-intl/server'
import HeroSection from './HeroSection';
export default async function Page({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  const t = getTranslations("")
  return (
    <HeroSection />
  )
}