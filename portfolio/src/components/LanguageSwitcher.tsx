'use client';

import { usePathname, useRouter } from 'next/navigation';

type Props = {
  currentLocale: string;
};

export default function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    // Ersetze die Locale im Pfad
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <button
        onClick={() => switchLocale('de')}
        style={{
          padding: '0.5rem 1rem',
          fontWeight: currentLocale === 'de' ? 'bold' : 'normal',
          backgroundColor: currentLocale === 'de' ? '#0070f3' : '#eee',
          color: currentLocale === 'de' ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Deutsch
      </button>
      <button
        onClick={() => switchLocale('en')}
        style={{
          padding: '0.5rem 1rem',
          fontWeight: currentLocale === 'en' ? 'bold' : 'normal',
          backgroundColor: currentLocale === 'en' ? '#0070f3' : '#eee',
          color: currentLocale === 'en' ? 'white' : 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        English
      </button>
    </div>
  );
}