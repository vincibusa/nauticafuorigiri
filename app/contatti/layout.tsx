import type { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"

export const metadata: Metadata = createMetadata({
  title: "Contatti",
  description:
    "Contatta Nautica Fuorigiri per assistenza nautica professionale. Telefono: 339 747 8715 o 0761 174 2610. Email: nauticafuorigiri@hotmail.com. Sede: Strada vicinale di Orbetello snc, Canino (VT).",
  path: "/contatti",
  keywords: [
    "contatti nautica",
    "telefono nautica Canino",
    "assistenza nautica Viterbo",
    "riparazione barche Lazio",
    "nautica Canino",
  ],
})

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


