"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { FadeIn } from "@/components/animations"

export function Footer() {
  return (
    <footer
      className="border-t bg-muted/50"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Company Info */}
          <FadeIn>
            <div className="space-y-4">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                <Image
                  src="/logo.png"
                  alt="Logo Nautica Fuorigiri"
                  fill
                  sizes="48px"
                  className="object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.35)]"
                />
              </div>
              <p className="text-xs text-muted-foreground sm:text-sm">
                La passione per la nautica al servizio della qualità e della
                professionalità.
              </p>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-base font-semibold sm:text-lg">Contatti</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-4 w-4 mt-0.5 text-primary shrink-0 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                  <address className="not-italic text-muted-foreground">
                    Strada vicinale di Orbetello snc
                    <br />
                    Canino (VT) 01011
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className="h-4 w-4 text-primary shrink-0 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+393397478715"
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    aria-label="Chiama al numero 339 747 8715"
                  >
                    339 747 8715
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    className="h-4 w-4 text-primary shrink-0 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+3907611742610"
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    aria-label="Chiama al numero 0761 174 2610"
                  >
                    0761 174 2610
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail
                    className="h-4 w-4 text-primary shrink-0 sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:nauticafuorigiri@hotmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm break-all"
                    aria-label="Invia email a nauticafuorigiri@hotmail.com"
                  >
                    nauticafuorigiri@hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-base font-semibold sm:text-lg">
                Link Rapidi
              </h3>
              <nav
                className="flex flex-col space-y-2 text-xs sm:text-sm"
                aria-label="Link rapidi"
              >
                <Link
                  href="/servizi"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm w-fit"
                  aria-label="Vai alla pagina Servizi"
                >
                  Servizi
                </Link>
                <Link
                  href="/offerte"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm w-fit"
                  aria-label="Vai alla pagina Offerte"
                >
                  Offerte
                </Link>
                <Link
                  href="/testimonianze"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm w-fit"
                  aria-label="Vai alla pagina Testimonianze"
                >
                  Testimonianze
                </Link>
                <Link
                  href="/contatti"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm w-fit"
                  aria-label="Vai alla pagina Contatti"
                >
                  Contatti
                </Link>
              </nav>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground sm:mt-12 sm:pt-8 sm:text-sm">
            <p>
              © {new Date().getFullYear()} Nautica Fuorigiri. Tutti i diritti
              riservati.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

