"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ShoppingCart, Search, User, Menu, X } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLHeadingElement>(null)
  const navItems = ["RESTAURANT", "SHOP", "VISIT", "CLUB", "EVENTS", "ABOUT"]

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const navLinks = header.querySelectorAll("a, button")
    const logoSpan = header.querySelector("span.logo-text")
    const logoBox = header.querySelector(".logo-box")
    const iconButtons = header.querySelectorAll(".icon-button")

    gsap.set(header, {
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderBottomWidth: "0px",
      backdropFilter: "blur(0px)",
    })

    gsap.to(header, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "30px top",
        scrub: 0.3,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set(header, {
            backgroundColor: `rgba(255, 255, 255, ${progress * 0.95})`,
            backdropFilter: `blur(${progress * 10}px)`,
            borderBottomWidth: `${progress * 1}px`,
            borderBottomColor: `rgba(0, 0, 0, ${progress * 0.08})`,
          })

          const textColor = progress > 0.5 ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
          navLinks.forEach((link) => {
            if (link.tagName === "A" || link.tagName === "BUTTON") {
              gsap.set(link, { color: textColor })
            }
          })

          if (logoSpan) gsap.set(logoSpan, { color: textColor })
          if (logoBox) gsap.set(logoBox, { backgroundColor: progress > 0.5 ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)" })

          iconButtons.forEach((btn) => {
            const icon = btn.querySelector("svg")
            if (icon) gsap.set(icon, { color: textColor })
          })
        },
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <header ref={headerRef} className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link key={item} href="#" className="text-xs font-bold transition-colors text-white hover:text-primary">
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            <div className="logo-box w-8 h-8  flex items-center justify-center">
              <span className=" text-sm ">P</span>
            </div>
            <span className="logo-text font-bold text-lg tracking-wider text-white">eru</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6 ml-auto">
            <Link
              href="#"
              className="hidden sm:inline-block px-4 py-2 border border-white text-xs font-bold text-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              RESERVATIONS
            </Link>
            <button className="icon-button p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center">
              <User size={28} className="text-white" />
            </button>
            <button className="icon-button p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center">
              <Search size={28} className="text-white" />
            </button>
            <button className="icon-button p-2 hover:bg-white/10 rounded-full transition-colors relative flex items-center justify-center">
              <ShoppingCart size={28} className="text-white" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-background text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden p-2 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
