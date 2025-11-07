import type { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"

export const metadata: Metadata = createMetadata({
  title: "Chi Siamo",
  description:
    "Scopri la storia di Nautica Fuorigiri: passione, competenza e professionalità dal 2010. La nostra missione è offrire servizi nautici di qualità superiore, trasformando la passione per la nautica in eccellenza operativa.",
  path: "/chi-siamo",
  keywords: [
    "chi siamo",
    "storia nautica",
    "azienda nautica Canino",
    "esperienza nautica",
    "professionalità nautica",
  ],
})

export default function ChiSiamoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


