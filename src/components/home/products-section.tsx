"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

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
    {
      id: 3,
      title: "Rosado Delicado",
      description:
        "Vino rosado con aromas florales y notas frutales suaves, ideal para acompañar comidas ligeras y conversaciones gratas.",
      price: "$55",
      image: "https://res.cloudinary.com/ddbzpbrje/image/upload/v1760740330/samples/food/pot-mussels.jpg",
      type: "image",
    },
    {
      id: 4,
      title: "Tinto Vintage",
      description:
        "Vino tinto excepcional con 25 años de envejecimiento, aromas complejos y sabor profundo que evoluciona en el paladar.",
      price: "$120",
      video: "https://res.cloudinary.com/ddbzpbrje/video/upload/v1763011237/11929213_1920_1080_60fps_lq178j.mp4",
      type: "video",
    },
  ]

  return (
    <section className="w-full bg-white border-l-8 border-r-8 border-white">
      <div ref={dividerRef} className="border-t-8 border-white" />

      <div className="py-12 md:py-16 px-12 sm:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 md:mb-16 items-start">
            <div>
              <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Nuestros
              </h2>
              <p ref={subtitleRef} className="text-2xl md:text-3xl italic text-black/80 font-light mt-2">
                Tours Selectos.
              </p>
            </div>

            <div ref={descriptionRef} className="flex flex-col justify-start">
              <p className="text-sm md:text-base text-black/90 leading-relaxed mb-6">
                Cada Tour es el resultado de nuestros antepasados que dieron años de dedicación y maestría en la
                elaboración de cultura y arte. Utilizamos técnicas ancestrales combinadas con innovación moderna para
                ofrecer experiencias de sabor incomparables.
              </p>
              <button 
                className="text-black font-semibold text-xs md:text-sm hover:opacity-70 transition-opacity w-fit" 
                onClick={(e) => e.stopPropagation()}
              >
                EXPLORAR TOURS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={imagesContainerRef} className="w-full grid grid-cols-4 gap-0 border-t-8 border-white">
        {products.map((product, index) => (
          <div key={product.id} className="relative h-96 md:h-screen overflow-hidden group">
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
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{product.title}</h3>
              <p className="text-xs md:text-sm text-white/90 leading-relaxed mb-3 line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg md:text-xl font-bold text-white mb-3">{product.price}</p>
              <button 
                className="text-white font-semibold text-xs underline hover:opacity-70 transition-opacity w-fit"
                onClick={(e) => {
                  e.stopPropagation()
                  const reservarElement = document.getElementById("reservar")
                  if (reservarElement) {
                    reservarElement.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Reservar
              </button>
            </div>

            {index < products.length - 1 && <div className="absolute right-0 top-0 bottom-0 w-8 border-r-8 border-white" />}
          </div>
        ))}
      </div>
    </section>
  )
}
