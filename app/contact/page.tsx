import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact | Artimate Consulting",
  description:
    "Get in touch with Artimate Consulting. Tell us about your project and timelines — we typically reply within one business day.",
} as any

export default function ContactPage() {
  return <ContactPageClient />
}
