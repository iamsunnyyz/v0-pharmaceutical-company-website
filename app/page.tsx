import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { BusinessDivisionsSection } from "@/components/sections/business-divisions-section"
import { InnovationSection } from "@/components/sections/innovation-section"
import { SustainabilitySection } from "@/components/sections/sustainability-section"
import { NewsSection } from "@/components/sections/news-section"
import { GlobalPresenceSection } from "@/components/sections/global-presence-section"
import { CareersSection } from "@/components/sections/careers-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BusinessDivisionsSection />
      <InnovationSection />
      <SustainabilitySection />
      <NewsSection />
      <GlobalPresenceSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
