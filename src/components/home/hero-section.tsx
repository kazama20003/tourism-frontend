"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.set([titleRef.current, descRef.current], {
      opacity: 0,
      y: 50,
    })

    gsap.set(buttonsRef.current, {
      visibility: "hidden",
      opacity: 0,
      y: 50,
    })

    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        end: "top 70%",
        scrub: 0.1,
      },
    })

    gsap.to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 90%",
        end: "top 70%",
        scrub: 0.1,
      },
    })

    gsap.to(buttonsRef.current, {
      visibility: "visible",
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: buttonsRef.current,
        start: "top 92%",
        end: "top 72%",
        scrub: 0.1,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1136148208?h=b661ea2878&autoplay=1&muted=1&loop=1&background=1"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 scale-[1.2]"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

      <div className="relative z-20 w-full h-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-end">
          <div className="w-full px-8 sm:px-12 lg:px-16 pb-16 md:pb-20">
            <div className="max-w-2xl">
              <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                GRANDEZA DEL
                <br />
                VALLE SAGRADO
              </h1>
              <p ref={descRef} className="text-lg md:text-xl text-white/90 italic font-light max-w-md mb-8">
                Enraizada en el majestuoso y sagrado Valle del Perú, Majestusa es una bodega familiar donde la tradición
                se encuentra con la innovación.
              </p>
            </div>
          </div>
        </div>

        <div ref={buttonsRef} className="w-full px-8 sm:px-12 lg:px-16 pb-16 md:pb-20 flex justify-end">
          <div className="flex gap-6 items-center">
            <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-black/80 transition-all duration-300">
              PLAN YOUR VISIT
            </button>
            <button className="px-8 py-3 bg-transparent text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
