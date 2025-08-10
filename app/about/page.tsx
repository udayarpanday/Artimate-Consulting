import type { Metadata } from "next"
import Pointers from "@/components/pointers"
import { ShieldCheck, GaugeCircle, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Artimate Consulting",
  description:
    "Artimate Consulting is an engineering practice focused on safe, reliable, and maintainable systems. Learn about our mission, values, and how we work.",
}

export default function AboutPage() {
  return (
    <main className="bg-white md:px-8">
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC72C] bg-[#FFF9E6] px-3 py-1 text-xs font-medium text-[#0A2540]">
              <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
              About
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] md:text-4xl">
              Engineering excellence, delivered responsibly
            </h1>
            <p className="max-w-prose text-[#0A2540]/80">
              We help organizations design and deliver systems that are safe, compliant, and maintainable—without
              surprises during commissioning and operation.
            </p>
          </div>
          <div className="relative">
            <img
              src="/placeholder-f1r5b.png"
              alt="Artimate team reviewing engineering drawings"
              className="h-auto w-full rounded-xl border object-cover shadow-sm"
            />
            <div className="absolute -right-3 -top-3 h-6 w-24 rounded-full bg-[#2BB673]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Intro paragraph above Our mission (new) */}
      <section aria-labelledby="about-intro" className="bg-white">
        <div className="container mx-auto px-4 py-10 md:py-12">
          <h2 id="about-intro" className="sr-only">
            Introduction
          </h2>
          <p className="mx-auto max-w-3xl text-[#0A2540]/85">
            From LV power and lighting to earthing, RAMS, and requirements management, we bring a disciplined approach
            rooted in standards and real-world delivery. Our focus is to reduce risk early, keep scope and timelines on
            track, and hand over clear documentation that supports safe, reliable operations.
          </p>
        </div>
      </section>

      {/* Our mission */}
      <section aria-labelledby="mission" className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="rounded-xl border border-[#FFC72C] bg-[#FFF9E6] p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-1">
                <h2 id="mission" className="text-2xl font-bold tracking-tight text-[#0A2540] md:text-3xl">
                  Our mission
                </h2>
                <p className="mt-2 text-[#0A2540]/85">
                  Enable safe and reliable infrastructure through standards-driven design, clear documentation, and
                  practical, buildable solutions that stand up to real-world constraints.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-[#0A2540]/15 bg-white p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540]">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-[#0A2540]">Safety and compliance</div>
                    <p className="mt-1 text-sm text-[#0A2540]/80">
                      Decisions grounded in safety with clear evidence aligned to applicable standards.
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#0A2540]/15 bg-white p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540]">
                      <GaugeCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-[#0A2540]">Reliability and performance</div>
                    <p className="mt-1 text-sm text-[#0A2540]/80">
                      RAMS built in—optimizing availability, maintainability, and lifecycle cost.
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#0A2540]/15 bg-white p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540]">
                      <Handshake className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-[#0A2540]">Clarity and collaboration</div>
                    <p className="mt-1 text-sm text-[#0A2540]/80">
                      Traceable requirements and open communication to keep delivery moving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-[#0A2540]/15 p-6">
                <Pointers
                  title="Values"
                  items={[
                    "Safety first, always",
                    "Clarity and traceability",
                    "Practicality over theory alone",
                    "Respect for site realities",
                    "Continuous improvement",
                  ]}
                />
              </div>
              <div className="rounded-lg border border-[#0A2540]/15 p-6">
                <Pointers
                  title="Competencies"
                  items={[
                    "LV power systems and protection",
                    "Lighting and emergency egress",
                    "Earthing and bonding",
                    "RAMS engineering",
                    "Requirements management and V&V",
                  ]}
                />
              </div>
            </div>

            {/* Expanded How we work */}
            <div className="rounded-lg border border-[#0A2540]/15 bg-[#0A2540]/[0.02] p-6">
              <h3 className="text-lg font-semibold text-[#0A2540]">How we work</h3>
              <p className="mt-2 text-[#0A2540]/85">
                We start with clarity on scope, constraints, and standards. From there, we iterate design decisions with
                documented trade-offs, bringing stakeholders along with structured reviews and early risk reduction.
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                <Pointers
                  items={[
                    "Discovery workshops and assumptions log",
                    "Standards mapping and compliance plan",
                    "Requirements capture with testable IDs",
                    "Design calc packs with version control",
                    "Peer reviews and independent checks",
                  ]}
                />
                <Pointers
                  items={[
                    "RAMS integrated with design iterations",
                    "Clear V&V plan and evidence tracking",
                    "Change control and traceability matrices",
                    "Constructability and maintainability reviews",
                    "Handover packs ready for commissioning",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Sidebar (credentials removed as requested) */}
          <aside className="space-y-6">
            <div className="rounded-lg border border-dashed border-[#FFC72C] p-6">
              <div className="text-sm text-[#0A2540]/80">
                Want to know if we’re a fit for your project? We can tailor our engagement model from advisory to
                full-scope delivery.
              </div>
              <a href="/contact" className="mt-3 inline-flex text-sm font-medium text-[#2BB673] hover:underline">
                Contact the team →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
