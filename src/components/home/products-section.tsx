"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function ProductsSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const imagesContainerRef = useRef<HTMLDivElement>(null)

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

  const products = [
    {
      id: 1,
      title: "Reserva Privada",
      description:
        "Un vino tinto complejo y elegante, envejecido 18 meses en barriles de roble francés, con notas profundas de especias y frutas maduras.",
      price: "$85",
      image: "https://res.cloudinary.com/ddbzpbrje/image/upload/v1760740330/samples/food/pot-mussels.jpg",
      type: "image",
    },
    {
      id: 2,
      title: "Blanco Ancestral",
      description:
        "Vino blanco fresco y aromático con notas de frutas tropicales del Valle Sagrado, perfecto para celebraciones especiales.",
      price: "$65",
      video: "https://res.cloudinary.com/ddbzpbrje/video/upload/v1763011237/11929213_1920_1080_60fps_lq178j.mp4",
      type: "video",
    },
  ]

  return (
    <section className="w-full bg-white">
      <div ref={dividerRef} className="border-t border-white/40" />

      <div className="py-8 md:py-12 px-8 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 md:mb-12 items-start">
            <div>
              <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Nuestros
              </h2>
              <p ref={subtitleRef} className="text-2xl md:text-3xl italic text-black/70 font-light mt-2">
                Productos Selectos.
              </p>
            </div>

            <div ref={descriptionRef} className="flex flex-col justify-start">
              <p className="text-sm md:text-base text-black/80 leading-relaxed mb-6">
                Cada botella es el resultado de generaciones de dedicación y maestría en la elaboración de vinos.
                Utilizamos técnicas ancestrales combinadas con innovación moderna para ofrecer experiencias de sabor
                incomparables.
              </p>
              <button className="text-black font-semibold text-xs md:text-sm hover:opacity-70 transition-opacity w-fit">
                EXPLORAR COLECCIÓN →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={imagesContainerRef} className="w-full h-screen flex">
        {products.map((product) => (
          <div key={product.id} className="flex-1 relative h-full overflow-hidden">
            {product.id === 1 && <div className="absolute right-0 top-0 bottom-0 w-px bg-white/30 z-10" />}

            {product.type === "image" ? (
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
            ) : (
              <video src={product.video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10 lg:p-16">
              <div className="max-w-full">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                  {product.title}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-white/90 leading-relaxed mb-6 max-w-2xl">
                  {product.description}
                </p>

                <div className="flex flex-col gap-4">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{product.price}</span>
                  <a
                    href="#"
                    className="text-white font-semibold text-xs md:text-sm underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity w-fit"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
