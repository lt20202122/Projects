
import {setRequestLocale, getTranslations} from 'next-intl/server';
import TextType from '@/components/TextType';
import Stocks from './Stocks';
import Lightbulb from './Lightbulb';
import TypewriterDelay from './TypeDelay';

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
        <section className="w-full flex flex-col items-center h-screen pt-20">
          <h1 className="h1-heading w-1/2 text-center leading-1">{t("Heading")}</h1>
          <div className="text-text text-[3rem] whitespace-nowrap flex">
            <p>Zeit für etwas&nbsp;</p> 
            <TypewriterDelay />
          </div>
          <div className='absolute w-[30vw] h-[60vh] z-9 left-0 bottom-4'>
            <Stocks />
          </div>
          <div className='absolute w-[30vw] h-[80vh] z-10 right-0 bottom-0'>
          <Lightbulb />
          </div>
        </section>
      </main>
  )
}