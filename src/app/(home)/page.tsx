import HeroSection from "@/components/home/hero-section"
import Header from "@/components/home/header"
import FeaturedSection from "@/components/home/featured-section"
import ProductsSection from "@/components/home/products-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductsSection />
      <FeaturedSection />
      
    </main>
  )
}
