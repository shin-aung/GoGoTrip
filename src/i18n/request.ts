import type { SupportedLocales } from '@/locales'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as SupportedLocales

  if (!locale || !routing.Translations.includes(locale)) {
    locale = routing.defaultTranslation
  }

  return {
    locale,
    messages: (await import(`../../src/locales/${locale}.json`)).default,
  }
})
