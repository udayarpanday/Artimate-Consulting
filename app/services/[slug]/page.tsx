import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Pointers from "@/components/pointers"
import { Button } from "@/components/ui/button"
import { getServiceBySlug, services } from "@/lib/services"
import { notFound } from "next/navigation"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getServiceBySlug(params.slug)
  if (!s) {
    return {
      title: "Service not found | Artimate Consulting",
    }
  }
  return {
    title: `${s.title} | Artimate Consulting`,
    description: s.short,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) return notFound()

  return (
    <main className="bg-white px-8">
      <section className="border-b bg-white">
        <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC72C] bg-[#FFF9E6] px-3 py-1 text-xs font-medium text-[#0A2540]">
              <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
              Service
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] md:text-4xl">{service.title}</h1>
            <p className="max-w-prose text-[#0A2540]/80">{service.short}</p>
            <div className="flex gap-3 pt-1">
              <Button asChild className="bg-[#0A2540] text-white hover:bg-[#0A2540]/90">
                <a href="/contact">Request proposal</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540]/5 bg-transparent"
              >
                <Link href="/services">All services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={service.heroImage || "/placeholder.svg"}
              alt={`${service.title} illustrative image`}
              width={1200}
              height={640}
              className="h-auto w-full rounded-xl border object-cover shadow-sm"
              priority
            />
            <div className="absolute -left-3 -top-3 h-6 w-24 rounded-full bg-[#2BB673]" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {service.intro.map((paragraph) => (
              <p key={paragraph} className="text-[#0A2540]/85">
                {paragraph}
              </p>
            ))}

            <div className="rounded-lg border border-[#0A2540]/15 bg-[#0A2540]/[0.02] p-6">
              <Pointers title="Highlights" items={service.pointers} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-[#0A2540]/15 p-6">
                <Pointers title="What you get" items={service.deliverables} />
              </div>
              <div className="rounded-lg border border-[#0A2540]/15 p-6">
                <Pointers title="Standards we follow" items={service.standards} />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-[#0A2540]/15 p-6">
              <h3 className="text-lg font-semibold text-[#0A2540]">Why Artimate?</h3>
              <ul className="mt-3 grid gap-2 text-[#0A2540]/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-[#2BB673]" />
                  Standards-driven and practical
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-[#2BB673]" />
                  Clear documentation and traceability
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-[#2BB673]" />
                  Responsive support through delivery
                </li>
              </ul>
              <Button asChild className="mt-4 w-full bg-[#0A2540] text-white hover:bg-[#0A2540]/90">
                <a href="/contact">Start a conversation</a>
              </Button>
            </div>

            <div className="rounded-lg border border-dashed border-[#FFC72C] p-6">
              <div className="text-sm text-[#0A2540]/80">
                Need a customized scope or a combination of services? We can tailor our deliverables and schedule to
                your project constraints.
              </div>
              <Link href="/services" className="mt-3 inline-flex text-sm font-medium text-[#2BB673] hover:underline">
                Explore more services →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
