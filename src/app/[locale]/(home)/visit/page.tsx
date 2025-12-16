"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, Clock, Phone, Mail, Calendar, ArrowRight, Car, Plane, Train } from "lucide-react"
import { getDictionary, type Dictionary } from "@/lib/i18n/dictionaries"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n/config"
import Image from "next/image"
import { usePathname } from "next/navigation"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Venue {
  id: number
  title: string
  subtitle: string
  description: string
  hours: string
  image: string
}

function VenueCard({ venue, index, dict }: { venue: Venue; index: number; dict: Dictionary }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 0

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="group opacity-0 py-6">
      <div className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"}`}>
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 aspect-4/3 overflow-hidden">
          <Image
            src={venue.image || "/placeholder.svg"}
            alt={venue.title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="relative w-full lg:w-1/2 p-6 lg:p-8 xl:p-10 flex flex-col justify-center bg-secondary">
          <div className="absolute top-0 left-6 lg:left-8 xl:left-10 w-px h-8 bg-foreground/20 origin-top" />

          <div className="space-y-4">
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">{venue.subtitle}</span>

            <h3 className="text-2xl md:text-3xl xl:text-4xl font-serif text-foreground leading-tight">{venue.title}</h3>

            <div className="w-16 h-px bg-accent" />

            <p className="text-muted-foreground leading-relaxed max-w-lg">{venue.description}</p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{venue.hours}</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-[0.98]">
                {dict.visit.buttons.reserveNow}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>

              <button className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/20 text-foreground text-xs font-medium tracking-widest uppercase hover:bg-foreground hover:text-background transition-all hover:scale-[1.02] active:scale-[0.98]">
                {dict.visit.buttons.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VisitPage() {
  const pathname = usePathname()
  const currentLocaleFromPath = pathname.split("/")[1]
  const currentLocale: Locale = isValidLocale(currentLocaleFromPath) ? currentLocaleFromPath : defaultLocale

  const dict = getDictionary(currentLocale)

  const visitInfo = [
    {
      id: 1,
      title: dict.visit.venues.tastingRoom.title,
      subtitle: dict.visit.venues.tastingRoom.subtitle,
      description: dict.visit.venues.tastingRoom.description,
      hours: dict.visit.venues.tastingRoom.hours,
      image:
        "https://res.cloudinary.com/ddbzpbrje/image/upload/v1765780203/surtido-plano-con-deliciosa-comida-brasilena_l7n5xl.jpg",
    },
    {
      id: 2,
      title: dict.visit.venues.restaurant.title,
      subtitle: dict.visit.venues.restaurant.subtitle,
      description: dict.visit.venues.restaurant.description,
      hours: dict.visit.venues.restaurant.hours,
      image:
        "https://res.cloudinary.com/ddbzpbrje/image/upload/v1765780203/adultos-disfrutando-de-comida-mexicana_r7r15d.jpg",
    },
    {
      id: 3,
      title: dict.visit.venues.localAgency.title,
      subtitle: dict.visit.venues.localAgency.subtitle,
      description: dict.visit.venues.localAgency.description,
      hours: dict.visit.venues.localAgency.hours,
      image:
        "https://res.cloudinary.com/ddbzpbrje/image/upload/v1765780203/mujer-de-vista-lateral-que-trabaja-como-agente-de-viajes_uq9rpe.jpg",
    },
  ]

  const quickInfo = [
    {
      icon: MapPin,
      title: dict.visit.quickInfo.location.title,
      details: [dict.visit.quickInfo.location.line1, dict.visit.quickInfo.location.line2],
    },
    {
      icon: Clock,
      title: dict.visit.quickInfo.hours.title,
      details: [dict.visit.quickInfo.hours.line1, dict.visit.quickInfo.hours.line2],
    },
    {
      icon: Phone,
      title: dict.visit.quickInfo.contact.title,
      details: [dict.visit.quickInfo.contact.line1, dict.visit.quickInfo.contact.line2],
    },
    {
      icon: Mail,
      title: dict.visit.quickInfo.email.title,
      details: [dict.visit.quickInfo.email.line1, dict.visit.quickInfo.email.line2],
    },
  ]

  const directions = [
    {
      icon: Car,
      title: dict.visit.directions.byCar.title,
      description: dict.visit.directions.byCar.description,
    },
    {
      icon: Plane,
      title: dict.visit.directions.fromAirport.title,
      description: dict.visit.directions.fromAirport.description,
    },
    {
      icon: Train,
      title: dict.visit.directions.publicTransport.title,
      description: dict.visit.directions.publicTransport.description,
    },
  ]

  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const heroVideoRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const directionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroVideoRef.current) {
        gsap.to(heroVideoRef.current, {
          scale: 1.1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      }

      if (heroContentRef.current) {
        gsap.to(heroContentRef.current, {
          opacity: 0,
          y: 100,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "50% top",
            scrub: true,
          },
        })
      }

      const heroElements = heroContentRef.current?.children
      if (heroElements) {
        gsap.fromTo(
          heroElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.3,
            ease: "power3.out",
          },
        )
      }

      if (introRef.current) {
        gsap.fromTo(
          introRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }

      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: infoRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }

      if (directionsRef.current) {
        gsap.fromTo(
          directionsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: directionsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] overflow-hidden">
        <div ref={heroVideoRef} className="absolute inset-0">
          <video
            src="https://res.cloudinary.com/ddbzpbrje/video/upload/v1763011237/11929213_1920_1080_60fps_lq178j.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div
          ref={heroContentRef}
          className="absolute inset-0 flex flex-col items-start justify-end text-left px-6 pb-12"
        >
          <span className="text-white/70 text-xs font-medium tracking-[0.3em] uppercase mb-3 opacity-0">
            {dict.visit.hero.subtitle}
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-2 opacity-0">
            {dict.visit.hero.title}
          </h1>

          <p className="text-white/60 text-sm md:text-base max-w-md opacity-0">{dict.visit.hero.description}</p>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="px-6">
          <div ref={infoRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickInfo.map((info, index) => (
              <div key={index} className="text-center opacity-0">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border border-accent text-accent">
                  <info.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6 bg-background">
        <div ref={introRef} className="max-w-4xl mx-auto text-center">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            {dict.visit.introduction.welcome}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6 text-foreground">
            {dict.visit.introduction.title}
            <span className="italic block mt-2">{dict.visit.introduction.titleItalic}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {dict.visit.introduction.description}
          </p>
        </div>
      </section>

      {/* Venues List */}
      <section className="bg-secondary">
        <div className="px-4 md:px-8 lg:px-12">
          <div className="divide-y divide-foreground/10">
            {visitInfo.map((venue, index) => (
              <VenueCard key={venue.id} venue={venue} index={index} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      {/* Getting Here Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
              {dict.visit.directions.sectionSubtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 text-foreground">
              {dict.visit.directions.sectionTitle}
            </h2>
          </div>

          <div ref={directionsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {directions.map((item, index) => (
              <div key={index} className="text-center p-8 bg-secondary opacity-0">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-primary text-primary-foreground">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[50vh] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.5!2d138.55!3d-35.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEzJzEyLjAiUyAxMzjCsDMzJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        />
        <div className="absolute bottom-8 left-8 bg-background p-6 shadow-lg max-w-sm">
          <h3 className="text-lg font-serif text-foreground mb-2">{dict.visit.map.businessName}</h3>
          <p className="text-sm text-muted-foreground mb-4">{dict.visit.map.address}</p>
          <button className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-accent hover:text-foreground transition-colors">
            {dict.visit.map.getDirections}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{dict.visit.cta.title}</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">{dict.visit.cta.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground text-xs font-medium tracking-widest uppercase hover:bg-accent/90 transition-colors">
              {dict.visit.cta.primaryButton}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-3 px-10 py-5 border border-primary-foreground/30 text-primary-foreground text-xs font-medium tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors">
              {dict.visit.cta.secondaryButton}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
