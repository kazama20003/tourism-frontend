import type React from "react"
import { generateTourSEO } from "@/lib/seo/seo-config"
import type { Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params

  // Fetch tour data for dynamic SEO
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tours/${slug}`, {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error("Tour not found")
    }

    const tour = await response.json()

    return generateTourSEO(
      locale,
      {
        title: tour.title,
        description: tour.description,
        currentPrice: tour.currentPrice,
      },
      slug,
    )
  } catch {
    // Fallback SEO if data fetch fails
    return {
      title: `Tour | eTourism`,
      description: "Discover amazing tours with eTourism.",
      alternates: {
        languages: {
          es: `/es/tours/${slug}`,
          en: `/en/tours/${slug}`,
          fr: `/fr/tours/${slug}`,
          it: `/it/tours/${slug}`,
          de: `/de/tours/${slug}`,
          pt: `/pt/tours/${slug}`,
          zh: `/zh/tours/${slug}`,
          ja: `/ja/tours/${slug}`,
          ru: `/ru/tours/${slug}`,
        },
      },
    }
  }
}

export default function TourDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
