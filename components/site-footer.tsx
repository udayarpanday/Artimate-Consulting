import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white md:px-8">
      <div className="container mx-auto grid gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-[#0A2540]">Artimate Consulting</div>
          <p className="mt-2 text-sm text-[#0A2540]/70">Engineering consulting for safe and reliable systems.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-[#0A2540]">Navigate</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link className="text-[#0A2540]/80 hover:text-[#2BB673]" href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-[#0A2540]/80 hover:text-[#2BB673]" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-[#0A2540]/80 hover:text-[#2BB673]" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-[#0A2540]">Contact</div>
          <ul className="mt-2 space-y-2 text-sm text-[#0A2540]/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#2BB673]" />
              <a href="mailto:hello@example.com" className="hover:underline">
                hello@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-[#2BB673]" />
              <Link href="#" className="hover:underline">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-[#0A2540]/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Artimate Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#2BB673]">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[#2BB673]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
