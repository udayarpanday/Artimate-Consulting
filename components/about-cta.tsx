import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutCta() {
  return (
    <section aria-labelledby="about-cta" className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-[#FFC72C] bg-[#FFF9E6] px-6 py-8 text-center md:flex-row md:text-left">
          <div>
            <h2 id="about-cta" className="text-xl font-semibold text-[#0A2540]">
              Learn more about Artimate
            </h2>
            <p className="mt-1 text-[#0A2540]/80">Who we are, how we work, and what we stand for.</p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md bg-[#0A2540] px-4 py-2 text-sm font-medium text-white hover:bg-[#0A2540]/90"
          >
            About us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
