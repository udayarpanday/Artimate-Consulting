export default function TrustedLogos() {
  const logos = [
    { name: "Acme Infra", w: 120 },
    { name: "NorthGrid", w: 128 },
    { name: "LuminaWorks", w: 140 },
    { name: "RailTech", w: 110 },
    { name: "AeroSystems", w: 132 },
  ]
  return (
    <section aria-labelledby="trusted-heading" className="border-y bg-white">
      <div className="container mx-auto px-4 py-10">
        <h2 id="trusted-heading" className="sr-only">
          Trusted by
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center rounded-md border border-[#0A2540]/10 bg-white/50 px-4 py-2"
              style={{ width: 148 }}
            >
              <img src="/generic-company-logo.png" alt={`${logo.name} logo`} className="h-10 w-auto opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
