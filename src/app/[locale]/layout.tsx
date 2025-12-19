import type React from "react"
import { Suspense } from "react"
import { Toaster } from "sonner"
import { QueryProvider } from "@/components/providers/query-provider"
import { I18nProvider } from "@/lib/i18n/context"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n/config"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const rawLocale = params.locale
  const locale: Locale = isValidLocale(rawLocale)
    ? rawLocale
    : defaultLocale

  const dictionary = await getDictionary(locale)

  return (
    <html lang={locale}>
      <body>
        <QueryProvider>
          <I18nProvider key={locale} locale={locale} dictionary={dictionary}>
            <Suspense fallback={null}>{children}</Suspense>
          </I18nProvider>
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  )
}
