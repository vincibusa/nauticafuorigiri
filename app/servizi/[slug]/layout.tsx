import type { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string }
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params
  const { getServiceBySlug } = await import("@/lib/services")
  const service = getServiceBySlug(resolvedParams.slug)

  if (!service) {
    return createMetadata({
      title: "Servizio non trovato",
      description: "Il servizio richiesto non è stato trovato.",
      path: `/servizi/${resolvedParams.slug}`,
      noIndex: true,
    })
  }

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/servizi/${service.slug}`,
    keywords: [
      service.title.toLowerCase(),
      "servizi nautici",
      "riparazione barche",
      "manutenzione barche",
      "nautica",
      "Canino",
      "Viterbo",
    ],
    image: service.image,
  })
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

