"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Wrench, Heart, Star, Shield, BookOpen, Building2, MapPin } from "lucide-react"
import { FadeIn, StaggerContainer, ScaleIn } from "@/components/animations"

const values = [
  {
    title: "Passione",
    description:
      "La passione per la nautica è il motore che ci guida ogni giorno. Non è solo un lavoro, è una vocazione che ci permette di trasformare la nostra passione in servizi di qualità per i nostri clienti.",
    icon: Heart,
    color: "from-red-500/10 to-pink-500/10",
  },
  {
    title: "Competenza",
    description:
      "Anni di esperienza nel settore nautico ci hanno permesso di sviluppare competenze tecniche approfondite. Ogni intervento è eseguito con precisione e attenzione ai dettagli.",
    icon: Wrench,
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Professionalità",
    description:
      "Professionalità e onestà sono i valori fondanti della nostra azienda. Ci impegniamo ogni giorno per offrire un servizio che non si era mai visto in questo campo, garantendo trasparenza e affidabilità.",
    icon: Shield,
    color: "from-indigo-500/10 to-violet-500/10",
  },
  {
    title: "Qualità",
    description:
      "La qualità del nostro lavoro è la nostra priorità. Utilizziamo solo materiali di prima scelta e attrezzature professionali per garantire risultati eccellenti e duraturi.",
    icon: Star,
    color: "from-amber-500/10 to-yellow-500/10",
  },
]

export default function BiografiaPage() {
  return (
    <div className="container px-4 py-8 sm:py-12 md:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <motion.div
              className="mb-4 inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                La Nostra Storia
              </span>
            </motion.div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              La Nostra Storia
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
              La passione per la nautica che diventa professione
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {/* Main Story */}
          <FadeIn>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="relative pt-8">
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                      Questo lavoro più che considerarlo tale lo considero una
                      passione, si perché per me riparare barche e motori nautici è
                      un divertimento, avendo sempre avuto la passione per la
                      nautica fin da quando ero bambino.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>

          {/* Values Section */}
          <StaggerContainer>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="group relative h-full overflow-hidden border-2 border-primary/20 transition-all hover:border-primary/50 hover:shadow-xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                      <CardContent className="relative pt-8">
                        <motion.div
                          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-14 sm:w-14"
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon
                            className="h-6 w-6 text-primary sm:h-7 sm:w-7"
                            aria-hidden="true"
                          />
                        </motion.div>
                        <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
                          {value.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </StaggerContainer>

          <Separator className="my-12" />

          {/* Structure Section */}
          <FadeIn delay={0.3}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="relative pt-8 sm:pt-12">
                  <div className="mb-6 flex items-center justify-center">
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-20 sm:w-20"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Building2
                        className="h-8 w-8 text-primary sm:h-10 sm:w-10"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>
                  <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
                    La Nostra Struttura
                  </h2>
                  <div className="mx-auto max-w-3xl space-y-6 text-center">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-lg border-2 border-primary/20 bg-background/50 p-6">
                        <MapPin
                          className="mx-auto mb-3 h-8 w-8 text-primary"
                          aria-hidden="true"
                        />
                        <h3 className="mb-2 text-lg font-semibold">Terreno</h3>
                        <p className="text-2xl font-bold text-primary">30.000 mq</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Spazio totale per lavorazioni e rimessaggio
                        </p>
                      </div>
                      <div className="rounded-lg border-2 border-primary/20 bg-background/50 p-6">
                        <Building2
                          className="mx-auto mb-3 h-8 w-8 text-primary"
                          aria-hidden="true"
                        />
                        <h3 className="mb-2 text-lg font-semibold">Struttura Coperta</h3>
                        <p className="text-2xl font-bold text-primary">250 mq</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Officina e rimessaggio al coperto
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg border-2 border-primary/20 bg-background/50 p-6">
                      <h3 className="mb-3 text-lg font-semibold">Rimessaggio</h3>
                      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Servizio di rimessaggio sia al coperto che all'esterno. Disponiamo di
                        una struttura coperta di 250 mq per officina e rimessaggio, più 2
                        strutture esterne per rimessaggio al chiuso.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>

          <Separator className="my-12" />

          {/* Mission Statement */}
          <FadeIn delay={0.4}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardContent className="relative pt-8 sm:pt-12">
                  <ScaleIn delay={0.2}>
                    <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
                      La Nostra Missione
                    </h2>
                  </ScaleIn>
                  <div className="mx-auto max-w-3xl space-y-6 text-center">
                    <FadeIn delay={0.3}>
                      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Nautica Fuorigiri nasce dalla passione per la nautica e
                        dall'esigenza di fornire ai nostri clienti un servizio di
                        qualità ed una professionalità che non si erano mai viste in
                        questo campo.
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Ai nostri clienti facciamo vivere in totale relax
                        l'esperienza della nautica senza doversi preoccupare di
                        finire nelle mani di meccanici impreparati e cantieri
                        disonesti.
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                      <p className="text-base font-semibold leading-relaxed sm:text-lg">
                        Sappiamo benissimo che avete già sentito o letto queste parole
                        in molti altri siti internet, per questo non vi chiediamo di
                        crederci ma di verificare voi stessi affidandovi a noi.
                      </p>
                    </FadeIn>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
