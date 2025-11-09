import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/about': {
      de: '/ueber-uns',
      en: '/about'
    },
    '/contact': {
      de: '/kontakt',
      en: '/contact'
    }
  }
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname
} = createNavigation(routing);