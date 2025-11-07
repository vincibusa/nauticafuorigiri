"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { BreadcrumbSchema } from "@/components/structured-data"

interface BreadcrumbItem {
  label: string
  href: string
}

const routeLabels: Record<string, string> = {
  servizi: "Servizi",
  contatti: "Contatti",
  offerte: "Offerte",
  "chi-siamo": "Chi Siamo",
}

export function Breadcrumbs() {
  const pathname = usePathname()
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (!pathname) {
      return []
    }
    
    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" },
    ]

    let currentPath = ""
    paths.forEach((path) => {
      currentPath += `/${path}`
      const label = routeLabels[path] || path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      breadcrumbs.push({ label, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't show breadcrumbs on homepage or if pathname is not available
  if (!pathname || pathname === "/") {
    return null
  }

  const structuredDataItems = breadcrumbs.map((item) => ({
    name: item.label,
    url: item.href,
  }))

  return (
    <>
      {structuredDataItems.length > 0 && (
        <BreadcrumbSchema items={structuredDataItems} />
      )}
      <nav
        aria-label="Breadcrumb"
        className="container px-4 py-4 sm:px-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link
                    href={crumb.href}
                    className="flex items-center gap-1 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    aria-label="Torna alla home"
                  >
                    <Home className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : (
                  <>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    {isLast ? (
                      <span
                        className="font-medium text-foreground"
                        aria-current="page"
                      >
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
