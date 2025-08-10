export default function StatsBand() {
  const stats = [
    { value: "50+", label: "Projects delivered" },
    { value: "10yr", label: "Avg. team experience" },
    { value: "99.8%", label: "Availability targets met" },
    { value: "100%", label: "Standards-compliant handovers" },
  ]
  return (
    <section className="bg-white">
      <div className="container mx-auto grid gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-[#0A2540]/15 bg-[#0A2540]/[0.02] px-6 py-5 text-center"
          >
            <div className="text-3xl font-bold text-[#0A2540]">{s.value}</div>
            <div className="mt-1 text-sm text-[#0A2540]/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
