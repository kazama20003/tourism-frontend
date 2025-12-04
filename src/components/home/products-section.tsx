"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getProductsSectionDictionary } from "@/lib/i18n/dictionaries/products-section"
import type { Locale } from "@/lib/i18n/config"

gsap.registerPlugin(ScrollTrigger)

interface ProductsSectionProps {
  locale: Locale
}

export function ProductsSection({ locale }: ProductsSectionProps) {
  const dict = getProductsSectionDictionary(locale)

  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const imagesContainerRef = useRef<HTMLDivElement>(null)

  const products = [
    {
      id: 1,
      title: dict.products[0].title,
      description: dict.products[0].description,
      price: dict.products[0].price,
      image: "https://res.cloudinary.com/ddbzpbrje/image/upload/v1760740330/samples/food/pot-mussels.jpg",
      type: "image" as const,
    },
    {
      id: 2,
      title: dict.products[1].title,
      description: dict.products[1].description,
      price: dict.products[1].price,
      video: "https://res.cloudinary.com/ddbzpbrje/video/upload/v1763011237/11929213_1920_1080_60fps_lq178j.mp4",
      type: "video" as const,
    },
    {
      id: 3,
      title: dict.products[2].title,
      description: dict.products[2].description,
      price: dict.products[2].price,
      image: "https://res.cloudinary.com/ddbzpbrje/image/upload/v1760740330/samples/food/pot-mussels.jpg",
      type: "image" as const,
    },
    {
      id: 4,
      title: dict.products[3].title,
      description: dict.products[3].description,
      price: dict.products[3].price,
      video: "https://res.cloudinary.com/ddbzpbrje/video/upload/v1763011237/11929213_1920_1080_60fps_lq178j.mp4",
      type: "video" as const,
    },
  ]

  useEffect(() => {
    const elements = [
      titleRef.current,
      subtitleRef.current,
      descriptionRef.current,
      dividerRef.current,
      imagesContainerRef.current,
    ]

    elements.forEach((el) => {
      if (!el) return

      gsap.set(el, {
        opacity: 0,
        y: 50,
      })

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 70%",
          scrub: 0.1,
          markers: false,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="w-full bg-white border-l-8 border-r-8 border-white">
      <div ref={dividerRef} className="border-t-8 border-white" />

      <div className="py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
            >
              {dict.title}
            </h2>
            <p ref={subtitleRef} className="text-xl sm:text-2xl md:text-3xl italic text-black/80 font-light mt-2">
              {dict.subtitle}
            </p>
          </div>

          <div ref={descriptionRef} className="mb-8 md:mb-12">
            <p className="text-xs sm:text-sm md:text-base text-black/90 leading-relaxed mb-4">{dict.description}</p>
            <button
              className="text-black font-semibold text-xs md:text-sm hover:opacity-70 transition-opacity w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              {dict.exploreTours}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={imagesContainerRef}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t-8 border-white"
      >
        {products.map((product, index) => (
          <div key={product.id}>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-screen overflow-hidden group">
              {product.type === "image" && (
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="w-full h-full object-cover"
                />
              )}
              {product.type === "video" && (
                <video src={product.video} autoPlay muted loop className="w-full h-full object-cover" />
              )}

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed mb-3 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">{product.price}</p>
                <button
                  className="text-white font-semibold text-xs sm:text-sm underline hover:opacity-70 transition-opacity w-fit"
                  onClick={(e) => {
                    e.stopPropagation()
                    const reservarElement = document.getElementById("reservar")
                    if (reservarElement) {
                      reservarElement.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {dict.reserve}
                </button>
              </div>

              {index < products.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-8 border-r-8 border-white" />
              )}
            </div>

            <div className="md:hidden border-b-4 border-white" />
          </div>
        ))}
      </div>
    </section>
  )
}
