import type React from "react"
import { generateTransportSEO } from "@/lib/seo/seo-config"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params

  // Fetch transport data for dynamic SEO
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transports/${slug}`, {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error("Transport not found")
    }

    const transport = await response.json()

    return generateTransportSEO(
      locale,
      {
        title: transport.title,
        description: transport.description,
        currentPrice: transport.currentPrice,
      },
      slug,
    )
  } catch {
    // Fallback SEO if data fetch fails
    return {
      title: `Transport | eTourism`,
      description: "Book reliable transportation with eTourism.",
      alternates: {
        languages: {
          es: `/es/transports/${slug}`,
          en: `/en/transports/${slug}`,
          fr: `/fr/transports/${slug}`,
          it: `/it/transports/${slug}`,
          de: `/de/transports/${slug}`,
          pt: `/pt/transports/${slug}`,
          zh: `/zh/transports/${slug}`,
          ja: `/ja/transports/${slug}`,
          ru: `/ru/transports/${slug}`,
        },
      },
    }
  }
}

export default function TransportDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
