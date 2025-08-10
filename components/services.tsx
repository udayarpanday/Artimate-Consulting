import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFC72C] bg-[#FFF9E6] px-3 py-1 text-xs font-medium text-[#0A2540]">
            <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
            Our services
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0A2540] md:text-3xl">
            Our Services
          </h2>
          <p className="mt-2 max-w-prose text-[#0A2540]/80">
            Practical engineering support across the full project lifecycle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="block">
              <Card
                className="h-full overflow-hidden border-[#0A2540]/15 transition hover:shadow-md hover:border-[#0A2540]/30"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={s.heroImage || "/placeholder.svg"}
                    alt={`${s.title} illustrative image`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A2540] shadow-sm">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-[#0A2540]">{s.title}</CardTitle>
                  <CardDescription className="text-[#0A2540]/70">
                    {s.short}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Content removed - entire card is now clickable */}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
