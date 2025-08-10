import { Compass, Ruler, ShieldCheck, ClipboardList } from "lucide-react"

const steps = [
  {
    title: "Discover",
    description: "Clarify scope, constraints, standards, and success criteria with stakeholders.",
    icon: Compass,
  },
  {
    title: "Design",
    description: "Produce buildable, standards-compliant designs with traceable decisions.",
    icon: Ruler,
  },
  {
    title: "Verify",
    description: "Perform calculations, RAMS, and peer reviews to de-risk delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Deliver",
    description: "Handover clear documentation with V&V evidence and commissioning support.",
    icon: ClipboardList,
  },
]

export default function Approach() {
  return (
    <section aria-labelledby="approach-heading" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC72C] bg-[#FFF9E6] px-3 py-1 text-xs font-medium text-[#0A2540]">
            <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
            Our approach
          </div>
          <h2 id="approach-heading" className="mt-3 text-2xl font-bold tracking-tight text-[#0A2540] md:text-3xl">
            Our approach
          </h2>
          <p className="mt-2 text-[#0A2540]/80">
            A structured, standards-driven method that keeps momentum and reduces whole-life risk.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-[#0A2540]/15 p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540]">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-lg font-semibold text-[#0A2540]">{s.title}</div>
              <p className="mt-2 text-sm text-[#0A2540]/80">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
