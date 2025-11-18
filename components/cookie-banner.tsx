"use client"

import Link from "next/link"
import { X, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCookieConsent } from "@/lib/useCookieConsent"
import { cn } from "@/lib/utils"

interface CookieBannerProps {
  className?: string
}

export function CookieBanner({ className }: CookieBannerProps) {
  const { showBanner, acceptAll, acceptNecessary } = useCookieConsent()

  if (!showBanner) return null

  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg",
          className
        )}
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <Card className="max-w-6xl mx-auto border-0 shadow-none bg-background/95">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 id="cookie-banner-title" className="text-lg font-semibold mb-2">
                  I Cookie su questo sito
                </h2>

                <div id="cookie-banner-description" className="text-sm text-muted-foreground mb-4 space-y-2">
                  <p>
                    Utilizziamo cookie tecnici necessari per il funzionamento del sito.
                    Con il tuo consenso, utilizziamo anche cookie per analisi e personalizzazione.
                  </p>
                  <p>
                    Puoi scegliere quali categorie di cookie accettare. Per saperne di più, consulta la nostra{" "}
                    <Link
                      href="/privacy"
                      className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      Privacy Policy
                    </Link>{" "}
                    e{" "}
                    <Link
                      href="/cookie"
                      className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={acceptAll}
                    size="sm"
                    className="flex-1 sm:flex-none"
                  >
                    Accetta tutti
                  </Button>

                  <Button
                    onClick={acceptNecessary}
                    variant="outline"
                    size="sm"
                    className="flex-1 sm:flex-none"
                  >
                    Solo necessari
                  </Button>
                </div>
              </div>

              <Button
                onClick={acceptNecessary}
                variant="ghost"
                size="sm"
                className="flex-shrink-0 h-8 w-8 p-0"
                aria-label="Chiudi banner cookie e accetta solo necessari"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
