import type { Metadata } from "next"

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nauticafuorigiri.it"
const siteName = "Nautica Fuorigiri"
const defaultDescription =
  "Nautica Fuorigiri - Servizi nautici professionali: riparazione motori, manutenzione imbarcazioni, trasporto, rimessaggio. Concessionari autorizzati MERCURY, MERCRUISER, SELVA. Assistenza in tutta Italia."

export function createMetadata({
  title,
  description,
  path = "",
  image = "/hero.jpg",
  keywords,
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
}): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const url = `${siteUrl}${path}`
  const imageUrl = `${siteUrl}${image}`

  return {
    title: fullTitle,
    description,
    keywords: keywords || [
      "nautica",
      "riparazione motori nautici",
      "manutenzione barche",
      "rimessaggio barche",
      "trasporto imbarcazioni",
      "Canino",
      "Viterbo",
      "Lazio",
    ],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "it_IT",
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

