"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ChevronRight,
  Clock,
  MapPin,
  Star,
  Calendar,
  Plus,
  Minus,
  ShoppingCart,
  Check,
  X,
  Play,
  ChevronLeft,
  ChevronDown,
  Shield,
  Utensils,
  Hotel,
  ArrowRight,
} from "lucide-react"
import { useTour } from "@/hooks/use-tours"
import { Skeleton } from "@/components/ui/skeleton"
import { isValidLocale, defaultLocale, type Locale } from "@/lib/i18n/config"
import { getTourDetailDictionary } from "@/lib/i18n/dictionaries/tour-detail"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TourDetailPage() {
  const params = useParams()
  const router = useRouter()
  const localeParam = params.locale as string
  const slug = params.slug as string
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale

  const dict = useMemo(() => getTourDetailDictionary(locale), [locale])
  const { tour, isLoading, error } = useTour(slug, locale)

  const [activeSection, setActiveSection] = useState("overview")
  const [selectedDate, setSelectedDate] = useState("")
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [cartAdded, setCartAdded] = useState(false)
  const [expandedDay, setExpandedDay] = useState<number | null>(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        )
      }
    })
    return () => ctx.revert()
  }, [tour])

  const sections = [
    { id: "overview", label: dict.sections.overview },
    { id: "itinerary", label: dict.sections.itinerary },
    { id: "included", label: dict.sections.included },
    { id: "policies", label: dict.sections.policies },
  ]

  const duration = tour
    ? tour.durationDays > 0
      ? `${tour.durationDays} ${tour.durationDays > 1 ? dict.hero.days : dict.hero.day}`
      : `${tour.durationHours || 1} ${(tour.durationHours || 1) > 1 ? dict.hero.hours : dict.hero.hour}`
    : ""

  const handleAddToCart = () => {
    setCartAdded(true)
    setTimeout(() => setCartAdded(false), 3000)
  }

  const handleBookNow = () => {
    router.push(`/${locale}/checkout?tour=${slug}&adults=${adults}&children=${children}&date=${selectedDate}`)
  }

  const nextImage = () => {
    if (tour?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % tour.images!.length)
    }
  }

  const prevImage = () => {
    if (tour?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + tour.images!.length) % tour.images!.length)
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="h-[60vh] relative">
          <Skeleton className="absolute inset-0" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-40 w-full" />
            </div>
            <div>
              <Skeleton className="h-96 w-full" />
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (error || !tour) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Tour not found</p>
          <Link
            href={`/${locale}/tours`}
            className="px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase"
          >
            {dict.breadcrumb.tours}
          </Link>
        </div>
      </main>
    )
  }

  const currentImage =
    tour.images?.[currentImageIndex]?.url || `/placeholder.svg?height=800&width=1200&query=${tour.title}`

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Breadcrumb */}
      <nav className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href={`/${locale}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {dict.breadcrumb.home}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link href={`/${locale}/tours`} className="text-muted-foreground hover:text-foreground transition-colors">
              {dict.breadcrumb.tours}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium truncate max-w-[200px]">{tour.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Gallery */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-black">
        {showVideo && tour.videoUrl ? (
          <video
            src={tour.videoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            controls
            playsInline
          />
        ) : (
          <>
            <img
              src={currentImage || "/placeholder.svg"}
              alt={tour.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </>
        )}

        {/* Gallery Controls */}
        {tour.images && tour.images.length > 1 && !showVideo && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {tour.images.slice(0, 5).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`w-16 h-12 overflow-hidden border-2 transition-all ${
                    currentImageIndex === i ? "border-white" : "border-white/30"
                  }`}
                >
                  <img src={img.url || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </>
        )}

        {/* Video Toggle */}
        {tour.videoUrl && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase flex items-center gap-2 hover:bg-white/30 transition-colors"
          >
            {showVideo ? <X className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {showVideo ? "Close" : "Video"}
          </button>
        )}

        {/* Hero Info Overlay */}
        <div ref={heroRef} className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="text-white/70 text-xs font-medium tracking-[0.3em] uppercase">{tour.locationName}</span>
          <h1 className="text-white text-3xl md:text-5xl font-serif mt-2 mb-4">{tour.title}</h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            {tour.rating && (
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{tour.rating.toFixed(1)}</span>
                {tour.reviewsCount && (
                  <span className="text-white/60">
                    ({tour.reviewsCount} {dict.hero.reviews})
                  </span>
                )}
              </div>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{tour.locationName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <nav className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-4 text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all border-b-2 ${
                  activeSection === section.id
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-8 md:py-12" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              {activeSection === "overview" && (
                <div className="space-y-8">
                  <div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{tour.description}</p>
                  </div>

                  {/* Highlights */}
                  {tour.benefits && tour.benefits.length > 0 && (
                    <div>
                      <h3 className="text-xl font-serif mb-4">{dict.overview.highlights}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tour.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 bg-secondary">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {tour.difficulty && (
                      <div className="p-4 bg-secondary text-center">
                        <span className="text-xs text-muted-foreground tracking-wider uppercase block mb-1">
                          {dict.overview.difficulty}
                        </span>
                        <span className="font-medium">{dict.overview.difficultyLevels[tour.difficulty]}</span>
                      </div>
                    )}
                    {tour.minAge && (
                      <div className="p-4 bg-secondary text-center">
                        <span className="text-xs text-muted-foreground tracking-wider uppercase block mb-1">
                          {dict.overview.minAge}
                        </span>
                        <span className="font-medium">
                          {tour.minAge} {dict.overview.years}
                        </span>
                      </div>
                    )}
                    {tour.capacity && (
                      <div className="p-4 bg-secondary text-center">
                        <span className="text-xs text-muted-foreground tracking-wider uppercase block mb-1">
                          {dict.overview.capacity}
                        </span>
                        <span className="font-medium">
                          {tour.capacity} {dict.overview.people}
                        </span>
                      </div>
                    )}
                    {tour.languages && tour.languages.length > 0 && (
                      <div className="p-4 bg-secondary text-center">
                        <span className="text-xs text-muted-foreground tracking-wider uppercase block mb-1">
                          {dict.overview.languages}
                        </span>
                        <span className="font-medium">{tour.languages.join(", ")}</span>
                      </div>
                    )}
                  </div>

                  {/* Meeting Point */}
                  {tour.meetingPoint && (
                    <div className="p-6 bg-secondary">
                      <h4 className="text-sm font-medium tracking-wider uppercase mb-2">
                        {dict.overview.meetingPoint}
                      </h4>
                      <p className="text-muted-foreground">{tour.meetingPoint}</p>
                      {tour.startTime && (
                        <p className="text-sm text-muted-foreground mt-2">
                          <span className="font-medium">{dict.overview.startTime}:</span> {tour.startTime}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Itinerary */}
              {activeSection === "itinerary" && tour.itinerary && tour.itinerary.length > 0 && (
                <div className="space-y-4">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="border border-border">
                      <button
                        onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                            {item.order}
                          </span>
                          <div>
                            <span className="text-xs text-muted-foreground tracking-wider uppercase block">
                              {dict.itinerary.dayLabel} {item.order}
                            </span>
                            <span className="text-lg font-serif">{item.title}</span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground transition-transform ${
                            expandedDay === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedDay === index && (
                        <div className="px-6 pb-6 space-y-4">
                          <p className="text-muted-foreground pl-14">{item.description}</p>

                          {item.activities && item.activities.length > 0 && (
                            <div className="pl-14">
                              <h5 className="text-sm font-medium mb-2">{dict.itinerary.activities}</h5>
                              <div className="flex flex-wrap gap-2">
                                {item.activities.map((activity, i) => (
                                  <span key={i} className="px-3 py-1 bg-secondary text-sm">
                                    {activity}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.meals && (
                            <div className="pl-14 flex items-center gap-4">
                              <Utensils className="w-4 h-4 text-muted-foreground" />
                              <div className="flex gap-3 text-sm">
                                {item.meals.breakfast && (
                                  <span className="text-muted-foreground">{dict.itinerary.meals.breakfast}</span>
                                )}
                                {item.meals.lunch && (
                                  <span className="text-muted-foreground">{dict.itinerary.meals.lunch}</span>
                                )}
                                {item.meals.dinner && (
                                  <span className="text-muted-foreground">{dict.itinerary.meals.dinner}</span>
                                )}
                              </div>
                            </div>
                          )}

                          {item.hotelNight && (
                            <div className="pl-14 flex items-center gap-4">
                              <Hotel className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{dict.itinerary.hotelNight}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Included/Excluded */}
              {activeSection === "included" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {tour.includes && tour.includes.length > 0 && (
                    <div>
                      <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        {dict.sections.included}
                      </h3>
                      <ul className="space-y-3">
                        {tour.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.excludes && tour.excludes.length > 0 && (
                    <div>
                      <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        {dict.sections.excluded}
                      </h3>
                      <ul className="space-y-3">
                        {tour.excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.preparations && tour.preparations.length > 0 && (
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-serif mb-4">{dict.sections.preparation}</h3>
                      <div className="flex flex-wrap gap-2">
                        {tour.preparations.map((item, i) => (
                          <span key={i} className="px-4 py-2 bg-secondary text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Policies */}
              {activeSection === "policies" && (
                <div className="space-y-6">
                  {tour.cancellationPolicy && (
                    <div className="p-6 bg-secondary">
                      <h4 className="font-medium mb-2">{dict.policies.cancellation}</h4>
                      <p className="text-muted-foreground">{tour.cancellationPolicy}</p>
                    </div>
                  )}
                  {tour.refundPolicy && (
                    <div className="p-6 bg-secondary">
                      <h4 className="font-medium mb-2">{dict.policies.refund}</h4>
                      <p className="text-muted-foreground">{tour.refundPolicy}</p>
                    </div>
                  )}
                  {tour.changePolicy && (
                    <div className="p-6 bg-secondary">
                      <h4 className="font-medium mb-2">{dict.policies.changes}</h4>
                      <p className="text-muted-foreground">{tour.changePolicy}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-secondary p-6 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">
                    {dict.booking.priceFrom}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-serif text-foreground">${tour.currentPrice}</span>
                    <span className="text-muted-foreground">{dict.booking.perPerson}</span>
                  </div>
                  {tour.oldPrice && tour.oldPrice > tour.currentPrice && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="line-through">${tour.oldPrice}</span>
                      <span className="ml-2 text-green-600">
                        -{Math.round(((tour.oldPrice - tour.currentPrice) / tour.oldPrice) * 100)}%
                      </span>
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Date Selection */}
                  <div>
                    <label className="text-xs font-medium tracking-wider uppercase block mb-2">
                      {dict.booking.selectDate}
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-background border border-border text-sm focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div>
                    <label className="text-xs font-medium tracking-wider uppercase block mb-2">
                      {dict.booking.travelers}
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-background border border-border">
                        <span className="text-sm">{dict.booking.adults}</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="w-8 h-8 flex items-center justify-center border border-border hover:bg-secondary"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{adults}</span>
                          <button
                            onClick={() => setAdults(adults + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-border hover:bg-secondary"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background border border-border">
                        <span className="text-sm">{dict.booking.children}</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="w-8 h-8 flex items-center justify-center border border-border hover:bg-secondary"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{children}</span>
                          <button
                            onClick={() => setChildren(children + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-border hover:bg-secondary"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">Total</span>
                      <span className="text-2xl font-serif">${tour.currentPrice * (adults + children)}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleBookNow}
                      className="w-full py-4 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      {dict.booking.bookNow}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleAddToCart}
                      className={`w-full py-4 border text-xs font-medium tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                        cartAdded
                          ? "bg-green-600 text-white border-green-600"
                          : "border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                      }`}
                    >
                      {cartAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          {dict.cart.added}
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          {dict.booking.addToCart}
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="pt-4 space-y-2">
                    {tour.instantConfirmation && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500" />
                        {dict.booking.instantConfirmation}
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-green-500" />
                      {dict.booking.freeCancellation}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-green-500" />
                      {dict.booking.bestPrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{dict.cta.title}</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">{dict.cta.description}</p>
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground text-xs font-medium tracking-widest uppercase hover:bg-accent/90 transition-colors">
            {dict.cta.button}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  )
}
