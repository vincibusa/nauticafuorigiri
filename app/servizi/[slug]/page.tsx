import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services"
import { ServiceDetailClient } from "./service-detail-client"

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }))
}

export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string }
}) {
  const resolvedParams = params instanceof Promise ? await params : params
  const service = getServiceBySlug(resolvedParams.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
