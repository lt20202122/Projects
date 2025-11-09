import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ['de', 'en'] as const;

export type Locales = typeof locales

export const pathnames: Pathnames<Locales> = {
    "/": "/",
    "/portfolio": "/portfolio"
}

export const localePrefix: LocalePrefix<Locales> = "always"