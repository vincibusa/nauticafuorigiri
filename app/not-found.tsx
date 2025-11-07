"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, AlertCircle, RefreshCw } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertCircle className="h-8 w-8 text-destructive" aria-hidden="true" />
          </div>
          <CardTitle className="text-3xl font-bold">404</CardTitle>
          <CardDescription className="text-lg">
            Pagina non trovata
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                Torna alla Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
              Torna Indietro
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

