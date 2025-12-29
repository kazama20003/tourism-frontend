import type React from "react"
import { generateLocaleSEO } from "@/lib/seo/seo-config"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return generateLocaleSEO(locale, "home")
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
