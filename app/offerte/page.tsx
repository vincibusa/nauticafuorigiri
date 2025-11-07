"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, CheckCircle2, Sparkles, Star } from "lucide-react"
import { FadeIn, StaggerContainer } from "@/components/animations"

const offers = [
  {
    title: "Rimessaggio Invernale",
    description:
      "Prenota ora il rimessaggio per l'inverno a partire da soli 50 euro al mese. Disponiamo di terreno di 30.000 mq con struttura coperta di 250 mq e 2 strutture esterne per rimessaggio al chiuso. La promozione è valida soltanto se viene lasciato un corrispettivo per un servizio di manutenzione.",
    price: "da 50€/mese",
    badge: "Promozione",
    features: [
      "Rimessaggio coperto ed esterno",
      "Terreno di 30.000 mq",
      "Struttura coperta 250 mq",
      "2 strutture esterne per rimessaggio",
      "Manutenzione durante il ricovero",
      "Prezzo speciale per prenotazioni anticipate",
    ],
    highlight: true,
    color: "from-primary/20 to-primary/10",
  },
  {
    title: "Manutenzione Preventiva",
    description:
      "Pacchetto completo di manutenzione preventiva per la tua barca. Mantieni la tua barca in perfetto stato tutto l'anno.",
    price: "Su preventivo",
    badge: "Consigliato",
    features: [
      "Controllo completo barca e motore",
      "Manutenzione sistemi elettrici",
      "Pulizia e manutenzione scafo",
      "Assistenza post-intervento",
    ],
    highlight: false,
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Assistenza Mobile",
    description:
      "Servizio di assistenza mobile in tutta Italia. Portiamo la nostra professionalità direttamente da te.",
    price: "Su preventivo",
    badge: "Disponibile",
    features: [
      "Interventi in tutta Italia",
      "Officina mobile attrezzata",
      "Interventi rapidi ed efficienti",
      "Preventivo gratuito",
    ],
    highlight: false,
    color: "from-indigo-500/10 to-violet-500/10",
  },
]

export default function OffertePage() {
  return (
    <div className="container px-4 py-8 sm:py-12 md:py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
   
          </motion.div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Le Nostre Offerte
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Scopri le promozioni e le offerte speciali per i nostri servizi
          </p>
        </div>
      </FadeIn>

      <StaggerContainer>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <motion.div
              key={offer.title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className={`group relative flex h-full flex-col overflow-hidden border-2 transition-all hover:shadow-xl ${
                  offer.highlight
                    ? "border-primary shadow-lg md:scale-105"
                    : "hover:border-primary/50"
                }`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {offer.highlight && (
                  <div className="absolute -top-3 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      <Badge className="bg-primary text-primary-foreground shadow-lg">
                        {offer.badge}
                      </Badge>
                    </motion.div>
                  </div>
                )}

                <CardHeader className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-14 sm:w-14"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Calendar
                        className="h-6 w-6 text-primary sm:h-7 sm:w-7"
                        aria-hidden="true"
                      />
                    </motion.div>
                    {!offer.highlight && (
                      <Badge variant="outline">{offer.badge}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold sm:text-2xl">
                    {offer.title}
                  </CardTitle>
                  <div className="mt-3">
                    <span className="text-2xl font-bold text-primary sm:text-3xl">
                      {offer.price}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="relative flex flex-1 flex-col">
                  <CardDescription className="mb-6 text-base leading-relaxed">
                    {offer.description}
                  </CardDescription>
                  <ul className="mb-6 space-y-3 flex-1">
                    {offer.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      asChild
                      className="w-full shadow-sm hover:shadow-md"
                      size="lg"
                    >
                      <Link href="/contatti" aria-label="Richiedi preventivo">
                        Richiedi Preventivo
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </StaggerContainer>

      <FadeIn delay={0.6}>
        <motion.div
          className="mt-12 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background p-8 backdrop-blur-sm sm:mt-16 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              Hai Domande sulle Nostre Offerte?
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Contattaci per maggiori informazioni o per un preventivo
              personalizzato. Siamo sempre disponibili per rispondere alle tue
              esigenze.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                asChild
                size="lg"
                className="text-sm shadow-lg shadow-primary/20 sm:text-base focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                <Link href="/contatti" aria-label="Contattaci">
                  Contattaci
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  )
}
