import { createMetadata } from "@/lib/metadata"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Cookie, Shield, BarChart3, Target, Settings } from "lucide-react"

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy di Nautica Fuorigiri - Scopri quali cookie utilizziamo e come gestirli per proteggere la tua privacy.",
  path: "/cookie",
  keywords: [
    "cookie policy",
    "cookie",
    "privacy",
    "GDPR",
    "cookie tecnici",
    "cookie analitici",
    "Nautica Fuorigiri",
  ],
})

export default function CookiePage() {
  return (
    <div className="container px-4 py-8 sm:py-12 md:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Cookie className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Cookie Policy
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Come utilizziamo i cookie sul nostro sito
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Questa Cookie Policy spiega come <strong>Nautica Fuorigiri</strong> utilizza i cookie e tecnologie simili sul nostro sito web.
              I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti il nostro sito.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Puoi controllare e/o eliminare i cookie come desideri. Per saperne di più sui cookie e sulla protezione della privacy,
              consulta la nostra{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Cosa sono i Cookie */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Cosa sono i Cookie</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              I cookie sono piccoli file di testo che i siti web salvano sul tuo computer o dispositivo mobile mentre li navighi.
              Essi servono a ricordare le tue azioni e preferenze (come login, lingua, dimensioni dei caratteri e altre preferenze di visualizzazione)
              in modo che tu non debba reinserirle ogni volta che torni sul sito o navighi da una pagina all'altra.
            </p>
          </CardContent>
        </Card>

        {/* Come Gestire i Cookie */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Come Gestire i Cookie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>Puoi controllare e/o eliminare i cookie in diversi modi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Browser settings:</strong> La maggior parte dei browser web permette di controllare i cookie attraverso le impostazioni.</li>
                <li><strong>Il nostro banner:</strong> Utilizza il banner dei cookie che appare quando visiti il sito per la prima volta.</li>
                <li><strong>Strumenti di opt-out:</strong> Alcuni cookie di terze parti offrono opzioni di opt-out specifiche.</li>
              </ul>
              <p>
                Nota che disabilitare alcuni cookie potrebbe influire sulla funzionalità del sito e sulla tua esperienza di navigazione.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tipi di Cookie */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. Tipi di Cookie che Utilizziamo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Cookie Tecnici */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Cookie Tecnici (Sempre Attivi)</h3>
                    <Badge variant="secondary" className="mt-1">Necessari</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">
                  Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disattivati.
                  Consentono la navigazione sicura e l'accesso alle aree protette del sito.
                </p>
                <div className="bg-muted/50 rounded p-3">
                  <h4 className="font-medium mb-2">Cookie utilizzati:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><strong>Session cookies:</strong> Memorizzano informazioni temporanee per la durata della sessione di navigazione.</li>
                    <li><strong>Authentication cookies:</strong> Mantenono l'accesso sicuro alle aree riservate.</li>
                    <li><strong>CSRF protection:</strong> Proteggono da attacchi di cross-site request forgery.</li>
                  </ul>
                </div>
              </div>

              {/* Cookie Analitici */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Cookie Analitici</h3>
                    <Badge variant="outline">Opzionali</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">
                  Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito web,
                  raccogliendo informazioni in forma anonima. Utilizziamo questi dati per migliorare le prestazioni del sito.
                </p>
                <div className="bg-muted/50 rounded p-3">
                  <h4 className="font-medium mb-2">Cookie utilizzati:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><strong>Google Analytics:</strong> Analizza il traffico del sito (se abilitato dal consenso).</li>
                    <li><strong>Performance metrics:</strong> Monitora velocità di caricamento e errori delle pagine.</li>
                  </ul>
                </div>
              </div>

              {/* Cookie di Marketing */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6 text-orange-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Cookie di Marketing</h3>
                    <Badge variant="outline">Opzionali</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">
                  Questi cookie vengono utilizzati per mostrarti annunci pubblicitari più rilevanti in base ai tuoi interessi.
                  Possono anche limitare il numero di volte che vedi un annuncio e aiutano a misurare l'efficacia delle campagne pubblicitarie.
                </p>
                <div className="bg-muted/50 rounded p-3">
                  <h4 className="font-medium mb-2">Cookie utilizzati:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><strong>Targeting cookies:</strong> Personalizzano contenuti e annunci basati sui tuoi interessi.</li>
                    <li><strong>Social media cookies:</strong> Consentono condivisione e interazione con piattaforme social.</li>
                    <li><strong>Retargeting cookies:</strong> Mostrano annunci basati su visite precedenti.</li>
                  </ul>
                </div>
              </div>

              {/* Cookie di Preferenze */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-6 w-6 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-lg">Cookie di Preferenze</h3>
                    <Badge variant="outline">Opzionali</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">
                  Questi cookie ricordano le tue preferenze e scelte (come lingua, posizione geografica, preferenze di visualizzazione)
                  per offrirti un'esperienza personalizzata.
                </p>
                <div className="bg-muted/50 rounded p-3">
                  <h4 className="font-medium mb-2">Cookie utilizzati:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><strong>Language preferences:</strong> Ricordano la lingua selezionata.</li>
                    <li><strong>Location settings:</strong> Memorizzano preferenze di localizzazione.</li>
                    <li><strong>Theme preferences:</strong> Ricordano scelte di visualizzazione (se implementate).</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookie di Terze Parti */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Cookie di Terze Parti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Alcuni cookie sono impostati da servizi di terze parti che compaiono sulle nostre pagine.
                Non abbiamo controllo diretto su questi cookie, che sono soggetti alle rispettive privacy policy delle terze parti.
              </p>

              <div className="border rounded p-4 bg-muted/30">
                <h4 className="font-medium mb-2">Servizi di terze parti utilizzati:</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>OpenStreetMap:</strong> Per la visualizzazione delle mappe nel form di contatto.
                    <a href="https://wiki.openstreetmap.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <strong>Leaflet:</strong> Libreria JavaScript per mappe interattive.
                    <a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                      Sito web
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Durata dei Cookie */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Durata dei Cookie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>I cookie hanno diverse durate a seconda della loro funzione:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookie di sessione:</strong> Vengono eliminati automaticamente alla chiusura del browser.</li>
                <li><strong>Cookie persistenti:</strong> Rimangono sul dispositivo per un periodo specificato o fino alla loro eliminazione manuale.</li>
                <li><strong>Cookie tecnici:</strong> Durata massima di 12 mesi.</li>
                <li><strong>Cookie analitici/marketing:</strong> Durata massima di 24 mesi dal consenso.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Consenso e Revoca */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Consenso e Revoca</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Utilizzando il nostro banner dei cookie, puoi scegliere quali categorie di cookie accettare.
                Puoi revocare il tuo consenso in qualsiasi momento modificando le tue preferenze attraverso il banner
                o eliminando i cookie dal tuo browser.
              </p>
              <p>
                La revoca del consenso non pregiudica la liceità del trattamento basato sul consenso prestato prima della revoca.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Aggiornamenti */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Aggiornamenti della Cookie Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Potremmo aggiornare questa Cookie Policy di tanto in tanto per riflettere cambiamenti nei nostri servizi
              o nelle normative applicabili. Eventuali modifiche saranno pubblicate su questa pagina con indicazione
              della data di ultimo aggiornamento.
            </p>
          </CardContent>
        </Card>

        {/* Contatti */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. Contatti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>Per domande sui cookie o sulla tua privacy:</p>
              <div className="ml-4">
                <p><strong>Nautica Fuorigiri</strong></p>
                <p>Email: nauticafuorigiri@hotmail.com</p>
                <p>Telefono: +39 339 747 8715</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Questa Cookie Policy è parte integrante della nostra{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
