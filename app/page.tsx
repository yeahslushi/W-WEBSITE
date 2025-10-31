import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { RamCalculator } from "@/components/ram-calculator"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient">
      <div className="grid-pattern">
        <Hero />
        <Features />
        <Services />
        <RamCalculator />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </main>
  )
}
