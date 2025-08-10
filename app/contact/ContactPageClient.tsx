"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPageClient() {
  const { toast } = useToast()
  const [loading, setLoading] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") || "")
    const email = String(data.get("email") || "")
    const message = String(data.get("message") || "")
    if (!name || !email || !message) {
      toast({
        title: "Missing details",
        description: "Please provide your name, email, and a message.",
        variant: "destructive",
      })
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    ;(e.currentTarget as HTMLFormElement).reset()
    toast({
      title: "Thanks! We'll be in touch.",
      description: "Your message has been received. A consultant will contact you shortly.",
    })
  }

  return (
    <main className="bg-white md:px-8">
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <h1 className="text-3xl font-bold tracking-tight text-[#0A2540] md:text-4xl">Contact us</h1>
          <p className="mt-2 max-w-2xl text-[#0A2540]/80">
            Tell us about your project and timelines. We typically respond within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-4 md:grid-cols-3">
          <div className="space-y-4 md:col-span-1">
            <div className="rounded-lg border border-[#0A2540]/15 bg-[#0A2540]/[0.02] p-6">
              <ul className="space-y-3 text-[#0A2540]/90">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-[#2BB673]" />
                  <a href="mailto:hello@example.com" className="hover:underline">
                    hello@example.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-[#2BB673]" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#2BB673]" />
                  <span>123 Engineering Way, Suite 200, City, Country</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-[#2BB673]" />
                  <span>Mon–Fri, 9:00–17:00</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-dashed border-[#FFC72C] p-6 text-sm text-[#0A2540]/80">
              Prefer email?{" "}
              <a
                className="font-semibold text-[#2BB673] underline underline-offset-4"
                href="mailto:hello@example.com?subject=Artimate%20Consulting%20Enquiry"
              >
                hello@example.com
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-[#0A2540]/15 p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-[#0A2540]">
                    Name
                  </Label>
                  <Input id="name" name="name" placeholder="Jane Doe" className="focus-visible:ring-[#0A2540]" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-[#0A2540]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    className="focus-visible:ring-[#0A2540]"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company" className="text-[#0A2540]">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Company name"
                  className="focus-visible:ring-[#0A2540]"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-[#0A2540]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share a bit about scope, standards, and timelines…"
                  rows={5}
                  className="resize-y focus-visible:ring-[#0A2540]"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-[#0A2540] text-white hover:bg-[#0A2540]/90">
                {loading ? "Sending…" : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
