"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const company = String(formData.get("company") || "")
    const message = String(formData.get("message") || "")

    if (!name || !email || !message) {
      toast({
        title: "Missing details",
        description: "Please provide your name, email, and a message.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    form.reset()
    toast({
      title: "Thanks! We'll be in touch.",
      description: "Your message has been received. A consultant will contact you shortly.",
    })
  }

  return (
    <section id="contact" className="w-full bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-[#0A2540] md:text-3xl">Contact us</h2>
          <p className="text-[#0A2540]/80">
            Tell us about your project and timelines. We typically respond within one business day.
          </p>
          <div className="rounded-lg border border-[#0A2540]/15 bg-[#0A2540]/[0.02] p-4 text-sm text-[#0A2540]/80">
            Prefer email?{" "}
            <a
              className="font-semibold text-[#2BB673] underline underline-offset-4"
              href="mailto:hello@example.com?subject=Artimate%20Consulting%20Enquiry"
            >
              hello@example.com
            </a>
          </div>
        </div>

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
            <Input id="company" name="company" placeholder="Company name" className="focus-visible:ring-[#0A2540]" />
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
    </section>
  )
}
