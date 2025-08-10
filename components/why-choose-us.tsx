import { ShieldCheck, ClipboardList, Activity, FileText, Clock, Wrench } from "lucide-react"

const reasons = [
  {
    title: "Safety-first and compliant",
    description: "Design decisions are grounded in safety and aligned to relevant standards from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Standards-driven, practical",
    description: "We balance compliance with site realities to deliver buildable, maintainable solutions.",
    icon: ClipboardList,
  },
  {
    title: "RAMS built-in",
    description: "Reliability, availability, maintainability, and safety are integrated—not bolted on.",
    icon: Activity,
  },
  {
    title: "Clear documentation",
    description: "Traceable decisions, evidence, and handover packs reduce rework and accelerate approvals.",
    icon: FileText,
  },
  {
    title: "Responsive delivery",
    description: "We collaborate closely with stakeholders and keep momentum through clear communication.",
    icon: Clock,
  },
  {
    title: "End-to-end support",
    description: "From concept to commissioning—advisory, design, V&V, and documentation all in one place.",
    icon: Wrench,
  },
]

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC72C] bg-[#FFF9E6] px-3 py-1 text-xs font-medium text-[#0A2540]">
            <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
            Why choose us
          </div>
          <h2 id="why-choose-us" className="mt-3 text-2xl font-bold tracking-tight text-[#0A2540] md:text-3xl">
            Engineering you can rely on
          </h2>
          <p className="mt-2 text-[#0A2540]/80">
            We combine standards expertise with practical delivery to reduce risk and keep projects moving.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl border border-[#0A2540]/15 p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540]">
                <r.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#0A2540]">{r.title}</h3>
              <p className="mt-2 text-sm text-[#0A2540]/80">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-dashed border-[#FFC72C] bg-[#0A2540]/[0.02] p-6 text-[#0A2540]">
          Have a complex scope or tight timelines?{" "}
          <a href="/contact" className="font-semibold text-[#2BB673] underline underline-offset-4">
            Talk to an expert →
          </a>
        </div>
      </div>
    </section>
  )
}
