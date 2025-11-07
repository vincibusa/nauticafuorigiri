"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, AlertTriangle, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-8 w-8 text-destructive" aria-hidden="true" />
          </div>
          <CardTitle className="text-3xl font-bold">Ops! Qualcosa è andato storto</CardTitle>
          <CardDescription className="text-lg">
            Si è verificato un errore imprevisto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Ci scusiamo per l&apos;inconveniente. Il nostro team è stato notificato e sta lavorando per risolvere il problema.
          </p>
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="rounded-md bg-muted p-4 text-left">
              <p className="text-xs font-mono text-destructive">{error.message}</p>
            </div>
          )}
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button onClick={reset}>
              <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
              Riprova
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                Torna alla Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

