import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import TrustedLogos from "@/components/trusted-logos"
import Approach from "@/components/approach"
import StatsBand from "@/components/stats-band"
import AboutCta from "@/components/about-cta"
import WhyChooseUs from "@/components/why-choose-us"

export const metadata: Metadata = {
  title: "Artimate Consulting | Engineering Consulting Services",
  description:
    "Artimate Consulting provides LV system design, lighting services, earthing & bonding, RAMS, and requirements management with a focus on safety and reliability.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0A2540]">
      <div className="scroll-smooth md:px-8">
        <Hero />
        {/* <TrustedLogos /> */}
        <WhyChooseUs />
        <Services />
        <Approach />
        <AboutCta />
      </div>
    </main>
  )
}
