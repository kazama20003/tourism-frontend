import type React from "react"
import type { Metadata } from "next"
import { generateLocaleSEO } from "@/lib/seo/seo-config"
import { isValidLocale, defaultLocale } from "@/lib/i18n/config"

interface ToursLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ToursLayoutProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
  return generateLocaleSEO(validLocale, "tours")
}

export default async function ToursLayout({ children, }: ToursLayoutProps) {
  return <>{children}</>
}
