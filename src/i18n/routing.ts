import { defaultLocale, supportedLocales } from '@/locales'
import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  Translations: supportedLocales,
  defaultTranslation: defaultLocale,
  TranslationPrefix: 'never',
})

export type Locale = (typeof routing.Translations)[number]

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
