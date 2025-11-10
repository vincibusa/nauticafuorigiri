import { MetadataRoute } from "next"
import { siteUrl } from "@/lib/metadata"
import { getAllServiceSlugs } from "@/lib/services"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contatti",
    "/offerte",
    "/chi-siamo",
  ]

  // Add service detail pages
  const serviceSlugs = getAllServiceSlugs()
  const serviceRoutes = serviceSlugs.map((slug) => `/servizi/${slug}`)

  const allRoutes = [...routes, ...serviceRoutes]

  return allRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/servizi/") ? 0.8 : 0.7,
  }))
}

