import type React from "react"
import type { Metadata } from "next"
import { generateLocaleSEO } from "@/lib/seo/seo-config"
import { isValidLocale, defaultLocale } from "@/lib/i18n/config"

interface TransportsLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: TransportsLayoutProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : defaultLocale
  return generateLocaleSEO(validLocale, "transports")
}

export default async function TransportsLayout({ children,  }: TransportsLayoutProps) {
  return <>{children}</>
}
