"use client"
import { HeroSection } from "@/components/home/hero-section"
import Header from "@/components/home/header"
import FeaturedSection from "@/components/home/featured-section"
import ProductsSection from "@/components/home/products-section"
import { CustomCursor } from "@/components/home/custom-cursor"
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
     <CustomCursor  scrollToId="reservar">
       <Header />
      <HeroSection />
     </CustomCursor>
        <div id="reservar">
         <CustomCursor text="+TOURS" navigateTo="/tours">
          <ProductsSection />
        </CustomCursor>
      </div>
      <FeaturedSection />
      
    </main>
  )
}
