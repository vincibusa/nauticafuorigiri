"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="it">
      <body>
        <div className="container flex min-h-screen flex-col items-center justify-center px-4 py-16">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">Ops! Qualcosa è andato storto</h1>
            <p className="mb-8 text-muted-foreground">
              Si è verificato un errore critico. Per favore, ricarica la pagina.
            </p>
            <button
              onClick={reset}
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            >
              Riprova
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

