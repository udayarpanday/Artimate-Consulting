import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC72C] bg-[#FFF9E6] px-3 py-1 text-xs font-medium text-[#0A2540]">
            <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
            Engineering excellence, delivered.
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] sm:text-4xl md:text-5xl">
            Powering safe, reliable, and efficient systems.
          </h1>
          <p className="max-w-prose text-base text-[#0A2540]/80 md:text-lg">
            Artimate Consulting specializes in LV system design, lighting, earthing & bonding, RAMS, and requirements
            management. We help you design, verify, and deliver systems that meet standards and perform under pressure.
          </p>

          <ul className="grid gap-2 text-sm text-[#0A2540]/90 md:text-base">
            {[
              "LV System Design",
              "Lighting Services",
              "Earthing & Bonding",
              "Reliability, Availability, Maintainability & Safety (RAMS)",
              "Requirements Management",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#2BB673]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button className="bg-[#0A2540] text-white hover:bg-[#0A2540]/90" asChild>
              <a href="/contact">Talk to an expert</a>
            </Button>
            <Button
              variant="outline"
              className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540]/5 bg-transparent"
              asChild
            >
              <a href="/services">Our services</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/engineering-consulting-schematics.png"
            alt="Technical engineering schematic illustration"
            className="h-auto w-full rounded-xl border object-cover shadow-sm"
          />
          <div
            className="absolute -left-4 -top-4 hidden h-16 w-16 rounded-lg bg-[#FFC72C] md:block"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-4 -right-4 hidden h-16 w-16 rounded-full bg-[#2BB673] md:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
