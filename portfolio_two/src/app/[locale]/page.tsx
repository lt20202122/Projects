import {setRequestLocale, getTranslations} from 'next-intl/server';
import TextType from '@/components/TextType';
import Image from 'next/image';
import Stocks from './Stocks';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' }
  ];
}

export default async function Home({params: {locale}}:{params:{locale:string}}) {
  setRequestLocale(locale);
  const t = await getTranslations('Hero-Section');
  
  return (
    <main className="w-full">
      <section className="w-full flex flex-col items-center h-screen justify-center">
        <h1 className="h1-heading w-1/2 text-center leading-1">{t("Heading")}</h1>
        <div className="gradient-text text-[3rem] whitespace-nowrap flex">
          <p>Zeit für etwas&nbsp;</p> 
          <TextType 
            text={["Neues", "Großes", "Besseres", "Einfaches"]}
            typingSpeed={300}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            deletingSpeed={100}
          />
        </div>
        <div className='absolute w-[30vw] h-[60vh] z-10 left-0 bottom-4'>
          <Stocks />
        </div>
        <div className='absolute w-[30vw] h-[60vh] z-10 right-0 bottom-4'>
        
        </div>
      </section>
    </main>
  )
}