import { CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <img
            src="/engineers-reviewing-plans.png"
            alt="Engineers reviewing plans and diagrams"
            className="h-auto w-full rounded-xl border object-cover shadow-sm"
          />
          <div className="absolute -right-3 -top-3 h-6 w-24 rounded-full bg-[#FFC72C]" aria-hidden="true" />
        </div>
        <div className="order-1 space-y-5 md:order-2">
          <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] md:text-3xl">About Artimate</h2>
          <p className="text-[#0A2540]/80">
            We are an engineering consulting practice focused on delivering safe, compliant, and maintainable systems.
            Our team blends standards knowledge with practical site experience to help projects move faster with fewer
            surprises.
          </p>
          <ul className="grid gap-3">
            {[
              "Standards-driven design and verification",
              "Independent reviews and due diligence",
              "Lifecycle thinking from concept to commissioning",
              "Clear documentation, traceability, and handover",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#2BB673]" />
                <span className="text-[#0A2540]/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
