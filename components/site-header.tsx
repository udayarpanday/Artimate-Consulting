"use client"

import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full md:px-8 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Artimate Consulting Home">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0A2540]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="font-semibold tracking-tight">
            <span>Artimate</span>{" "}
            <span className="inline-block rounded-sm bg-[#FFC72C] px-1 py-0.5 text-[#0A2540]">Consulting</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-[#2BB673]">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#2BB673]">
            About
          </Link>
          <Button asChild className="bg-[#0A2540] text-white hover:bg-[#0A2540]/90">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <div className="mt-6 grid gap-4">
                <Link href="/services" className="text-base font-medium">
                  Services
                </Link>
                <Link href="/about" className="text-base font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-base font-medium">
                  Contact
                </Link>
                <Button asChild className="mt-2 bg-[#0A2540] text-white hover:bg-[#0A2540]/90">
                  <Link href="/contact">Get a quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
