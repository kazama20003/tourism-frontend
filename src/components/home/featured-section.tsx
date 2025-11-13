"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
gsap.registerPlugin(ScrollTrigger)

export default function FeaturedSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const imagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = [
      titleRef.current,
      subtitleRef.current,
      textRef.current,
      labelRef.current,
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
    <section className="w-full bg-white overflow-x-hidden">
      {/* Text section with padding */}
      <div className="py-12 md:py-16 px-8 sm:px-12 lg:px-16">
        <div ref={containerRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8 md:mb-12 items-start">
            {/* Title - Left Side */}
            <div>
              <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                A Family Estate,
              </h2>
              <p ref={subtitleRef} className="text-2xl md:text-3xl italic text-black/70 font-light mt-2">
                Crafted By Generations.
              </p>
            </div>

            {/* Description - Right Side */}
            <div ref={textRef} className="flex flex-col justify-start">
              <p className="text-sm md:text-base text-black/80 leading-relaxed mb-6">
                Maxwell Wines crafts premium wines that celebrate the limestone character of the estate. From bold
                Shiraz to vibrant whites and the estates iconic meads, every bottle reflects a commitment to
                sustainability and meticulous winemaking.
              </p>
              <button className="text-black font-semibold text-xs md:text-sm hover:opacity-70 transition-opacity w-fit">
                SHOP WINE & MEAD →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Label */}
        <div ref={labelRef} className="absolute top-6 left-6 z-10">
          <p className="text-white font-semibold text-sm md:text-base tracking-wide">MAXWELL RESTAURANT</p>
        </div>

        <div ref={imagesContainerRef} className="relative h-96 md:h-[500px] lg:h-[600px] bg-gray-200 overflow-hidden">
          <Image
  src="https://res.cloudinary.com/ddbzpbrje/image/upload/v1760740330/samples/food/pot-mussels.jpg"
  alt="Maxwell Restaurant meat dish"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
        </div>
      </div>
    </section>
  )
}
