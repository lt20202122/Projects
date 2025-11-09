import { getRequestConfig } from "next-intl/server";
import { routing } from "./i18n-routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale statt locale!
  let locale = await requestLocale;
  
  // Fallback auf default
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});