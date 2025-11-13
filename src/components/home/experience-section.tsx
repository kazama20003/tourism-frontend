"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface ExperienceCard {
  id: number
  title: string
  description: string
  image: string
}

const experiences: ExperienceCard[] = [
  {
    id: 1,
    title: "Maxwell Mead Tasting",
    description: "A mead for all occasions, taste Australia's leading examples of mead.",
    image: "/mead-tasting-glasses-wine-bottles.jpg",
  },
  {
    id: 2,
    title: "Winery Heritage Tour & Tasting",
    description: "Discover the history and heritage of the Maxwell Estate.",
    image: "/winery-barrel-cellar-tour.jpg",
  },
  {
    id: 3,
    title: "Winery Heritage Tour, Tasting & Fine Dining",
    description:
      "A behind-the-scenes tour of our winery with an exclusive tasting, the rare chance to taste wine straight from the barrel.",
    image: "/wine-tasting-glasses-vineyard.jpg",
  },
  {
    id: 4,
    title: "Helicopter Flight & Fine Dining",
    description:
      "A once-in-a-lifetime experience that you will never forget. A 30-minute scenic helicopter flight of McLaren Vale, followed by a fine dining lunch.",
    image: "/helicopter-flight-vineyard-landscape.jpg",
  },
]

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const cardWidth = carousel.children[0]?.getBoundingClientRect().width || 0
    const gap = 16 // gap-4 = 16px

    const updateCarousel = (index: number) => {
      gsap.to(carousel, {
        x: -(index * (cardWidth + gap)),
        duration: 0.6,
        ease: "power2.inOut",
      })
    }

    const handlePrev = () => {
      const newIndex = Math.max(0, currentIndex - 1)
      setCurrentIndex(newIndex)
      updateCarousel(newIndex)
    }

    const handleNext = () => {
      const newIndex = Math.min(experiences.length - 1, currentIndex + 1)
      setCurrentIndex(newIndex)
      updateCarousel(newIndex)
    }

    const prevBtn = containerRef.current?.querySelector("[data-prev]")
    const nextBtn = containerRef.current?.querySelector("[data-next]")

    prevBtn?.addEventListener("click", handlePrev)
    nextBtn?.addEventListener("click", handleNext)

    // Scroll animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.1,
          markers: false,
        },
      },
    )

    return () => {
      prevBtn?.removeEventListener("click", handlePrev)
      nextBtn?.removeEventListener("click", handleNext)
    }
  }, [currentIndex])

  return (
    <section ref={containerRef} className="w-full bg-gray-100 py-16">
      <div className="w-full px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">EXPERIENCE MAXWELL WINES</h2>

          <div className="flex gap-2">
            <button
              data-prev
              className="w-10 h-10 border border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              data-next
              className="w-10 h-10 border border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div ref={carouselRef} className="flex gap-4">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="flex-shrink-0 w-full md:w-1/4 h-96 relative group cursor-pointer overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{experience.title}</h3>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-xs md:text-sm leading-relaxed line-clamp-3">{experience.description}</p>
                  </div>

                  {/* Button */}
                  <button className="self-start px-3 py-2 bg-transparent border border-white text-white text-xs font-bold hover:bg-white hover:text-black transition-all duration-300">
                    MAKE A RESERVATION
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
