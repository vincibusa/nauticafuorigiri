import { siteUrl } from "@/lib/metadata"

interface StructuredDataProps {
  type: "LocalBusiness" | "Service" | "Organization" | "BreadcrumbList"
  data: Record<string, any>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  )
}

// LocalBusiness schema per homepage
export function LocalBusinessSchema() {
  return (
    <StructuredData
      type="LocalBusiness"
      data={{
        name: "Nautica Fuorigiri",
        description:
          "Servizi nautici professionali: riparazione motori, manutenzione imbarcazioni, trasporto, rimessaggio. Concessionari autorizzati MERCURY, MERCRUISER, SELVA.",
        url: siteUrl,
        telephone: ["+393397478715", "+3907611742610"],
        email: "nauticafuorigiri@hotmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada vicinale di Orbetello snc",
          addressLocality: "Canino",
          postalCode: "01011",
          addressRegion: "VT",
          addressCountry: "IT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "42.4658",
          longitude: "11.7525",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
        priceRange: "€€",
        image: `${siteUrl}/hero.jpg`,
        logo: `${siteUrl}/logo.png`,
        sameAs: [],
      }}
    />
  )
}

// Organization schema
export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: "Nautica Fuorigiri",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+393397478715",
          contactType: "customer service",
          areaServed: "IT",
          availableLanguage: "Italian",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada vicinale di Orbetello snc",
          addressLocality: "Canino",
          postalCode: "01011",
          addressRegion: "VT",
          addressCountry: "IT",
        },
      }}
    />
  )
}

// Service schema per pagina servizi
export function ServiceSchema({
  serviceName,
  description,
  provider,
}: {
  serviceName: string
  description: string
  provider?: string
}) {
  return (
    <StructuredData
      type="Service"
      data={{
        name: serviceName,
        description,
        provider: {
          "@type": "LocalBusiness",
          name: provider || "Nautica Fuorigiri",
          url: siteUrl,
        },
        areaServed: {
          "@type": "Country",
          name: "Italy",
        },
        serviceType: "Nautical Services",
      }}
    />
  )
}

// BreadcrumbList schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null
  }

  return (
    <StructuredData
      type="BreadcrumbList"
      data={{
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteUrl}${item.url}`,
        })),
      }}
    />
  )
}

