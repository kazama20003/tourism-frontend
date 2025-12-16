"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Wine, Gift, Percent, Calendar, Truck, Star } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { type Locale, isValidLocale, defaultLocale } from "@/lib/i18n/config"
import { usePathname } from "next/navigation"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Benefit {
  icon: typeof Percent
  title: string
  description: string
  featured?: boolean
  learnMoreText: string
  popularBadge?: string
}

interface FAQ {
  question: string
  answer: string
}

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="group opacity-0">
      <div className="relative aspect-3/4 overflow-hidden bg-muted mb-4 flex items-center justify-center">
        <div className="w-20 h-20 flex items-center justify-center bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
          <benefit.icon className="w-10 h-10" />
        </div>
        {benefit.featured && benefit.popularBadge && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs tracking-widest uppercase">
            {benefit.popularBadge}
          </span>
        )}
      </div>

      <h3 className="text-lg font-serif text-foreground mb-1">{benefit.title}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{benefit.description}</p>

      <button className="w-full py-2.5 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors">
        {benefit.learnMoreText}
      </button>
    </div>
  )
}

function FAQSection({ faqs }: { faqs: FAQ[] }) {
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

  return (
    <div ref={sectionRef} className="opacity-0">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq: FAQ, index: number) => (
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

export default function ClubPage() {
  const pathname = usePathname()
  const currentLocaleFromPath = pathname.split("/")[1]
  const currentLocale: Locale = isValidLocale(currentLocaleFromPath) ? currentLocaleFromPath : defaultLocale

  const dict = getDictionary(currentLocale)

  const benefits: Benefit[] = [
    {
      icon: Percent,
      title: dict.club.benefits.exclusivePricing.title,
      description: dict.club.benefits.exclusivePricing.description,
      featured: true,
      learnMoreText: dict.club.benefits.learnMore,
      popularBadge: dict.club.benefits.popularBadge,
    },
    {
      icon: Gift,
      title: dict.club.benefits.specialRewards.title,
      description: dict.club.benefits.specialRewards.description,
      learnMoreText: dict.club.benefits.learnMore,
    },
    {
      icon: Calendar,
      title: dict.club.benefits.priorityAccess.title,
      description: dict.club.benefits.priorityAccess.description,
      learnMoreText: dict.club.benefits.learnMore,
    },
    {
      icon: Truck,
      title: dict.club.benefits.freeShipping.title,
      description: dict.club.benefits.freeShipping.description,
      featured: true,
      learnMoreText: dict.club.benefits.learnMore,
      popularBadge: dict.club.benefits.popularBadge,
    },
    {
      icon: Star,
      title: dict.club.benefits.vipExperiences.title,
      description: dict.club.benefits.vipExperiences.description,
      learnMoreText: dict.club.benefits.learnMore,
    },
    {
      icon: Wine,
      title: dict.club.benefits.quarterlySelections.title,
      description: dict.club.benefits.quarterlySelections.description,
      learnMoreText: dict.club.benefits.learnMore,
    },
  ]

  const faqs: FAQ[] = [
    {
      question: dict.club.faq.question1,
      answer: dict.club.faq.answer1,
    },
    {
      question: dict.club.faq.question2,
      answer: dict.club.faq.answer2,
    },
    {
      question: dict.club.faq.question3,
      answer: dict.club.faq.answer3,
    },
    {
      question: dict.club.faq.question4,
      answer: dict.club.faq.answer4,
    },
    {
      question: dict.club.faq.question5,
      answer: dict.club.faq.answer5,
    },
    {
      question: dict.club.faq.question6,
      answer: dict.club.faq.answer6,
    },
  ]

  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const heroVideoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
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

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
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
            {dict.club.hero.subtitle}
          </span>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-2 opacity-0">
            {dict.club.hero.title}
          </h1>

          <p className="text-white/60 text-sm md:text-base max-w-md opacity-0">{dict.club.hero.description}</p>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="px-6">
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-3 bg-foreground text-background text-xs font-medium tracking-wider uppercase rounded-full border border-foreground transition-all hover:scale-[1.02]">
              {dict.club.ctaBar.joinNow}
            </button>
            <button className="px-8 py-3 bg-transparent border border-border text-muted-foreground text-xs font-medium tracking-wider uppercase rounded-full hover:text-foreground hover:border-foreground transition-all">
              {dict.club.ctaBar.signIn}
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
            {/* Left Title - sticky */}
            <div className="lg:sticky lg:top-24">
              <h2 ref={titleRef} className="text-3xl md:text-4xl font-serif text-foreground leading-tight opacity-0">
                {dict.club.benefits.sectionTitle}
                <br />
                <span className="italic">{dict.club.benefits.sectionTitleItalic}</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                {dict.club.benefits.sectionDescription}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
            {/* Left Title - sticky */}
            <div className="lg:sticky lg:top-24">
              <h2 ref={faqTitleRef} className="text-3xl md:text-4xl font-serif text-foreground leading-tight opacity-0">
                {dict.club.faq.sectionTitle}
                <br />
                <span className="italic">{dict.club.faq.sectionTitleItalic}</span>
              </h2>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{dict.club.faq.sectionDescription}</p>
            </div>

            {/* FAQ List */}
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>
    </main>
  )
}
