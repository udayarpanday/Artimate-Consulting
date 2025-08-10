import { CheckCircle2 } from "lucide-react"

type PointersProps = {
  title?: string
  items: string[]
  iconColor?: string
}

export default function Pointers({ title, items, iconColor = "#2BB673" }: PointersProps) {
  return (
    <div className="space-y-3">
      {title ? <h3 className="text-lg font-semibold text-[#0A2540]">{title}</h3> : null}
      <ul className="grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[#0A2540]/90">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none" style={{ color: iconColor }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
