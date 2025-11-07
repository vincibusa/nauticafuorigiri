import type { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"

export const metadata: Metadata = createMetadata({
  title: "Offerte",
  description:
    "Offerte speciali Nautica Fuorigiri: rimessaggio invernale da 50€/mese, pacchetti manutenzione preventiva, assistenza mobile. Promozioni e sconti per servizi nautici professionali.",
  path: "/offerte",
  keywords: [
    "offerte nautica",
    "rimessaggio invernale",
    "promozioni nautica",
    "sconti riparazione barche",
    "pacchetti manutenzione",
  ],
})

export default function OfferteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


