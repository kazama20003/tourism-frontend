"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { Search, ArrowRight, Calendar, MapPin, Clock, Star } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n/config"
import { usePathname } from "next/navigation"

interface Event {
  id: number
  title: string
  subtitle: string
  description: string
  date: string
  location: string
  duration: string
  image: string
  highlights: string[]
  featured: boolean
  exclusive: boolean
}

interface EventCardProps {
  event: Event
  index: number
  dict: {
    badges: {
      featured: string
      exclusive: string
    }
    buttons: {
      reserveNow: string
      moreInfo: string
    }
  }
}

function EventCard({ event, index, dict }: EventCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 0

  useEffect(() => {
    const card = cardRef.current
    const image = imageRef.current
    const line = lineRef.current

    if (!card || !image || !line) return

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

      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      const imageInner = image.querySelector("img")
      if (imageInner) {
        card.addEventListener("mouseenter", () => {
          gsap.to(imageInner, { scale: 1.05, duration: 0.7, ease: "power2.out" })
        })
        card.addEventListener("mouseleave", () => {
          gsap.to(imageInner, { scale: 1, duration: 0.7, ease: "power2.out" })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="group opacity-0 py-6">
      <div className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"}`}>
        {/* Image Section */}
        <div ref={imageRef} className="relative w-full lg:w-1/2 aspect-4/3 overflow-hidden">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

          {event.featured && (
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 text-xs font-medium tracking-widest uppercase">
              <Star className="w-3 h-3" />
              {dict.badges.featured}
            </div>
          )}

          {event.exclusive && (
            <div className="absolute top-6 right-6 px-4 py-2 bg-foreground text-background text-xs font-medium tracking-widest uppercase">
              {dict.badges.exclusive}
            </div>
          )}

          <div className="absolute bottom-6 left-6 lg:hidden">
            <span className="text-white text-2xl font-serif">{event.date}</span>
          </div>
        </div>

        {/* Content Section */}
        <div
          ref={contentRef}
          className="relative w-full lg:w-1/2 p-6 lg:p-8 xl:p-10 flex flex-col justify-center bg-secondary"
        >
          <div
            ref={lineRef}
            className="absolute top-0 left-6 lg:left-8 xl:left-10 w-px h-8 bg-foreground/20 origin-top"
          />

          <div className="space-y-4">
            <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">{event.subtitle}</span>

            <h3 className="text-2xl md:text-3xl xl:text-4xl font-serif text-foreground leading-tight">{event.title}</h3>

            <div className="w-16 h-px bg-accent" />

            <p className="text-muted-foreground leading-relaxed max-w-lg">{event.description}</p>

            <div className="flex flex-wrap gap-2">
              {event.highlights.map((highlight, i) => (
                <span key={i} className="px-3 py-1.5 bg-muted text-muted-foreground text-xs tracking-wider">
                  {highlight}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{event.duration}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-[0.98]">
                {dict.buttons.reserveNow}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>

              <button className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/20 text-foreground text-xs font-medium tracking-widest uppercase hover:bg-foreground hover:text-background transition-all hover:scale-[1.02] active:scale-[0.98]">
                {dict.buttons.moreInfo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FAQSectionProps {
  dict: {
    faq: {
      questions: {
        q1: { question: string; answer: string }
        q2: { question: string; answer: string }
        q3: { question: string; answer: string }
        q4: { question: string; answer: string }
        q5: { question: string; answer: string }
        q6: { question: string; answer: string }
      }
    }
  }
}

function FAQSection({ dict }: FAQSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  const faqs = [
    { question: dict.faq.questions.q1.question, answer: dict.faq.questions.q1.answer },
    { question: dict.faq.questions.q2.question, answer: dict.faq.questions.q2.answer },
    { question: dict.faq.questions.q3.question, answer: dict.faq.questions.q3.answer },
    { question: dict.faq.questions.q4.question, answer: dict.faq.questions.q4.answer },
    { question: dict.faq.questions.q5.question, answer: dict.faq.questions.q5.answer },
    { question: dict.faq.questions.q6.question, answer: dict.faq.questions.q6.answer },
  ]

  return (
    <div ref={sectionRef} className="opacity-0">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border bg-background px-6 data-[state=open]:border-foreground transition-all duration-300"
          >
            <AccordionTrigger className="py-6 hover:no-underline group">
              <div className="flex items-center gap-4 text-left">
                <span className="text-muted-foreground text-sm font-mono">0{index + 1}</span>
                <span className="text-foreground font-medium group-hover:text-muted-foreground transition-colors">
                  {faq.question}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default function EventsPage() {
  const pathname = usePathname()
  const currentLocaleFromPath = pathname.split("/")[1]
  const currentLocale: Locale = isValidLocale(currentLocaleFromPath) ? currentLocaleFromPath : defaultLocale

  const dict = getDictionary(currentLocale)

  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const heroVideoRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const faqTitleRef = useRef<HTMLHeadingElement>(null)

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
            ease: "power3.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }

      if (faqTitleRef.current) {
        gsap.fromTo(
          faqTitleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: faqTitleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const events: Event[] = [
    {
      id: 1,
      title: dict.events.events.intiRaymi.title,
      subtitle: dict.events.events.intiRaymi.subtitle,
      description: dict.events.events.intiRaymi.description,
      date: dict.events.events.intiRaymi.date,
      location: dict.events.events.intiRaymi.location,
      duration: dict.events.events.intiRaymi.duration,
      image: "https://res.cloudinary.com/djldb5hqg/image/upload/v1765669373/Inti_Raymi_qzh4n6.jpg",
      highlights: dict.events.events.intiRaymi.highlights,
      featured: true,
      exclusive: true,
    },
    {
      id: 2,
      title: dict.events.events.candelaria.title,
      subtitle: dict.events.events.candelaria.subtitle,
      description: dict.events.events.candelaria.description,
      date: dict.events.events.candelaria.date,
      location: dict.events.events.candelaria.location,
      duration: dict.events.events.candelaria.duration,
      image: "https://res.cloudinary.com/djldb5hqg/image/upload/v1765669374/679e6a450bf6667b4e1f0c6b_hdnon6.png",
      highlights: dict.events.events.candelaria.highlights,
      featured: true,
      exclusive: true,
    },
    {
      id: 3,
      title: dict.events.events.arequipa.title,
      subtitle: dict.events.events.arequipa.subtitle,
      description: dict.events.events.arequipa.description,
      date: dict.events.events.arequipa.date,
      location: dict.events.events.arequipa.location,
      duration: dict.events.events.arequipa.duration,
      image: "https://res.cloudinary.com/djldb5hqg/image/upload/v1765669373/corso2-1024x630_buajva.jpg",
      highlights: dict.events.events.arequipa.highlights,
      featured: false,
      exclusive: true,
    },
    {
      id: 4,
      title: dict.events.events.trujillo.title,
      subtitle: dict.events.events.trujillo.subtitle,
      description: dict.events.events.trujillo.description,
      date: dict.events.events.trujillo.date,
      location: dict.events.events.trujillo.location,
      duration: dict.events.events.trujillo.duration,
      image:
        "https://res.cloudinary.com/djldb5hqg/image/upload/v1765669372/Carro_Aleg%C3%B3rico_en_Trujillo._Corso_del_63__Festival_Internacional_de_la_Primavera_ao2txy.jpg",
      highlights: dict.events.events.trujillo.highlights,
      featured: false,
      exclusive: true,
    },
    {
      id: 5,
      title: dict.events.events.milagros.title,
      subtitle: dict.events.events.milagros.subtitle,
      description: dict.events.events.milagros.description,
      date: dict.events.events.milagros.date,
      location: dict.events.events.milagros.location,
      duration: dict.events.events.milagros.duration,
      image: "https://res.cloudinary.com/djldb5hqg/image/upload/v1765669373/000541322W_qi4ugs.webp",
      highlights: dict.events.events.milagros.highlights,
      featured: true,
      exclusive: true,
    },
    {
      id: 6,
      title: dict.events.events.qoyllur.title,
      subtitle: dict.events.events.qoyllur.subtitle,
      description: dict.events.events.qoyllur.description,
      date: dict.events.events.qoyllur.date,
      location: dict.events.events.qoyllur.location,
      duration: dict.events.events.qoyllur.duration,
      image: "https://res.cloudinary.com/djldb5hqg/image/upload/v1765669516/Qoyllur-Riti_og5ohg.png",
      highlights: dict.events.events.qoyllur.highlights,
      featured: false,
      exclusive: true,
    },
  ]

  const filters = [
    { id: "all", label: dict.events.filters.all },
    { id: "religious", label: dict.events.filters.religious },
    { id: "cultural", label: dict.events.filters.cultural },
    { id: "patronal", label: dict.events.filters.patronal },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

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
            {dict.events.hero.subtitle}
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-2 opacity-0">
            {dict.events.hero.title}
          </h1>

          <p className="text-white/60 text-sm md:text-base max-w-md opacity-0">{dict.events.hero.description}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 bg-secondary">
        <div ref={introRef} className="max-w-4xl mx-auto text-center">
          <span className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
            {dict.events.introduction.discover}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6 text-foreground">
            {dict.events.introduction.title}
            <span className="italic block mt-2">{dict.events.introduction.titleItalic}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {dict.events.introduction.description}
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 px-4 bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={dict.events.search.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-12 pr-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="bg-secondary">
        <div className="px-4 md:px-8 lg:px-12">
          <div className="divide-y divide-foreground/10">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} dict={dict.events} />
            ))}
          </div>
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-24 text-center">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">{dict.events.noResults}</p>
          </div>
        )}
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
            {/* Left Title - sticky */}
            <div className="lg:sticky lg:top-24">
              <h2 ref={faqTitleRef} className="text-3xl md:text-4xl font-serif text-foreground leading-tight opacity-0">
                {dict.events.faq.title}
                <br />
                <span className="italic">{dict.events.faq.titleItalic}</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-4">{dict.events.faq.subtitle}</p>
            </div>

            {/* Right FAQ list */}
            <div>
              <FAQSection dict={dict.events} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{dict.events.cta.title}</h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">{dict.events.cta.description}</p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground text-xs font-medium tracking-widest uppercase hover:scale-105 transition-transform">
            {dict.events.cta.button}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
