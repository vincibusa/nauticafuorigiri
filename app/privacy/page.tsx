import { createMetadata } from "@/lib/metadata"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Users, Lock, Eye, FileText, Mail } from "lucide-react"

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Informativa sulla privacy e trattamento dei dati personali - Nautica Fuorigiri. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
  path: "/privacy",
  keywords: [
    "privacy policy",
    "trattamento dati personali",
    "GDPR",
    "informativa privacy",
    "Nautica Fuorigiri",
  ],
})

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-8 sm:py-12 md:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Informativa sulla Privacy
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Come trattiamo i tuoi dati personali
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Nautica Fuorigiri</strong> (di seguito "Noi" o "Nautica Fuorigiri") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali.
              Questa informativa sulla privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le informazioni che ci fornisci quando utilizzi il nostro sito web
              o i nostri servizi, in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) UE 2016/679.
            </p>
          </CardContent>
        </Card>

        {/* Titolare del trattamento */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              1. Titolare del Trattamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Nautica Fuorigiri</strong></p>
              <p>Indirizzo: Strada vicinale di Orbetello snc, Canino (VT) 01011</p>
              <p>Telefono: +39 339 747 8715 | +39 0761 174 2610</p>
              <p>Email: nauticafuorigiri@hotmail.com</p>
              <p>Partita IVA: [Inserire P.IVA se disponibile]</p>
            </div>
          </CardContent>
        </Card>

        {/* Dati Personali Raccolti */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              2. Dati Personali che Raccogliamo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Dati forniti direttamente:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Indirizzo (per servizi di consegna/spedizione)</li>
                  <li>Informazioni sui servizi richiesti</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Dati raccolti automaticamente:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Indirizzo IP</li>
                  <li>Tipo di browser e versione</li>
                  <li>Sistema operativo</li>
                  <li>Pagine visitate e tempo di permanenza</li>
                  <li>Cookie e tecnologie simili</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Finalità del Trattamento */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              3. Finalità del Trattamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Trattiamo i tuoi dati personali per:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Rispondere alle tue richieste:</strong> Gestire contatti, preventivi e richieste di informazioni sui nostri servizi nautici.
                  </li>
                  <li>
                    <strong>Fornire i nostri servizi:</strong> Organizzare e eseguire riparazioni, manutenzioni, trasporti e altri servizi richiesti.
                  </li>
                  <li>
                    <strong>Comunicazioni commerciali:</strong> Inviarti informazioni sui nostri servizi, offerte speciali e novità (solo con il tuo consenso).
                  </li>
                  <li>
                    <strong>Oblighi legali:</strong> Adempiere agli obblighi di legge, contabili e fiscali.
                  </li>
                  <li>
                    <strong>Migliorare i nostri servizi:</strong> Analizzare l'utilizzo del sito web per ottimizzare l'esperienza utente.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Base Giuridica */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Base Giuridica del Trattamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>Trattiamo i tuoi dati personali sulla base delle seguenti basi giuridiche:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consenso:</strong> Per comunicazioni commerciali e utilizzo di cookie non necessari.</li>
                <li><strong>Esecuzione di contratto:</strong> Per fornire i servizi richiesti e gestire le tue richieste.</li>
                <li><strong>Legittimo interesse:</strong> Per migliorare i nostri servizi e comunicazioni.</li>
                <li><strong>Oblighi legali:</strong> Per adempiere alle normative vigenti.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Condivisione dei Dati */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Con chi Condividiamo i tuoi Dati</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>Non vendiamo, affittiamo o cediamo i tuoi dati personali a terzi, salvo nei seguenti casi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Fornitori di servizi:</strong> Società che ci aiutano a gestire il sito web, elaborare pagamenti o fornire servizi (es. hosting, email).</li>
                <li><strong>Autorità competenti:</strong> Quando richiesto dalla legge o per proteggere i nostri diritti.</li>
                <li><strong>Partner commerciali:</strong> Solo con il tuo esplicito consenso per servizi specifici.</li>
              </ul>
              <p className="mt-3">
                Tutti i nostri partner sono vincolati da accordi di riservatezza e trattano i dati in conformità al GDPR.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trasferimento dei Dati */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Trasferimento dei Dati Fuori dall'Unione Europea</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I tuoi dati sono trattati principalmente all'interno dell'Unione Europea. In caso di trasferimenti verso paesi terzi,
              adotteremo tutte le misure necessarie per garantire un livello adeguato di protezione, inclusi accordi che assicurino
              standard equivalenti a quelli del GDPR.
            </p>
          </CardContent>
        </Card>

        {/* Conservazione dei Dati */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Per Quanto Tempo Conserviamo i tuoi Dati</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>Conserviamo i tuoi dati personali per il tempo necessario alle finalità per cui sono stati raccolti:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dati di contatto:</strong> Fino a 24 mesi dall'ultimo contatto, salvo rinnovo del consenso.</li>
                <li><strong>Dati per servizi:</strong> Per tutta la durata del servizio e per 10 anni successivi per obblighi fiscali.</li>
                <li><strong>Cookie tecnici:</strong> Per la durata della sessione o fino a 12 mesi.</li>
                <li><strong>Cookie analitici:</strong> Fino a 24 mesi dal consenso.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Diritti dell'Interessato */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              8. I tuoi Diritti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Ai sensi del GDPR, hai diritto a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Accesso:</strong> Richiedere una copia dei tuoi dati personali.</li>
                <li><strong>Rettifica:</strong> Correggere dati inesatti o incompleti.</li>
                <li><strong>Cancellazione:</strong> Richiedere la cancellazione dei tuoi dati ("diritto all'oblio").</li>
                <li><strong>Limitazione:</strong> Limitare il trattamento in determinate circostanze.</li>
                <li><strong>Portabilità:</strong> Ricevere i tuoi dati in formato strutturato.</li>
                <li><strong>Opposizione:</strong> Opporsi al trattamento per motivi legittimi.</li>
                <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Per esercitare questi diritti, contattaci ai recapiti indicati al punto 1.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sicurezza */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. Sicurezza dei Dati</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali da accessi non autorizzati,
              perdita, alterazione o divulgazione. Utilizziamo crittografia, controlli di accesso, firewall e altre tecnologie di sicurezza.
            </p>
          </CardContent>
        </Card>

        {/* Cookie */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>10. Cookie e Tecnologie Simili</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito.
              Per informazioni dettagliate sui cookie che utilizziamo, consulta la nostra{" "}
              <a href="/cookie" className="text-primary hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Modifiche */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>11. Modifiche a questa Informativa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Potremmo aggiornare questa informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali modifiche significative
              pubblicandole sul nostro sito web e aggiornando la data di "ultimo aggiornamento" in cima a questa pagina.
            </p>
          </CardContent>
        </Card>

        {/* Contatti */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              12. Contatti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>Per qualsiasi domanda sulla privacy o per esercitare i tuoi diritti:</p>
              <div className="ml-4">
                <p><strong>Nautica Fuorigiri</strong></p>
                <p>Strada vicinale di Orbetello snc</p>
                <p>Canino (VT) 01011</p>
                <p>Email: nauticafuorigiri@hotmail.com</p>
                <p>Telefono: +39 339 747 8715</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Questa informativa è stata redatta in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) UE 2016/679
            e alla normativa italiana in materia di protezione dei dati personali.
          </p>
        </div>
      </div>
    </div>
  )
}
