"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  Award,
  Wrench,
  Ship,
} from "lucide-react"
import { FadeIn, StaggerContainer } from "@/components/animations"

const services = [
  {
    title: "Assistenza Mobile in Tutta Italia",
    description:
      "Disponiamo di un officina mobile dotata di tutte le attrezzature necessarie per la manutenzione e riparazione. Siamo in grado di prestarvi assistenza in tutta Italia, portando la nostra professionalità direttamente da voi.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    features: [
      "Officina mobile completamente attrezzata",
      "Interventi su tutto il territorio italiano",
      "Attrezzature professionali",
      "Interventi rapidi e efficienti",
    ],
  },
  {
    title: "Manutenzione e Riparazione Barche",
    description:
      "Servizi completi di riparazione e manutenzione per imbarcazioni di ogni genere, dalla grande alla piccina. La nostra esperienza ci permette di affrontare qualsiasi tipo di intervento con professionalità e competenza.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80",
    features: [
      "Riparazione imbarcazioni di ogni dimensione",
      "Manutenzione ordinaria e straordinaria",
      "Riparazione scafi e carene",
      "Sistemi elettrici e idraulici",
    ],
  },
  {
    title: "Riparazione e Rifacimento Motori",
    description:
      "Specializzati nella riparazione di piedi poppieri e motori entrofuoribordo. Ripariamo e rifacciamo a nuovo motori entrobordo, entrofuoribordo e fuoribordo di tutte le marche con competenza e professionalità.",
    image: "https://images.unsplash.com/photo-1594736797933-d0c0aa0a3d0a?w=1200&q=80",
    features: [
      "Riparazione piedi poppieri",
      "Riparazione motori entrofuoribordo",
      "Riparazione motori entrobordo",
      "Riparazione motori fuoribordo tutte le marche",
      "Rifacimento motori a nuovo",
      "Diagnostica avanzata",
    ],
  },
  {
    title: "Rimessaggio e Ricovero Invernale",
    description:
      "Servizio di rimessaggio sia al coperto che all'esterno. Disponiamo di un terreno di 30.000 mq con una struttura coperta di 250 mq per officina e rimessaggio, più 2 strutture esterne per rimessaggio al chiuso.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    features: [
      "Rimessaggio coperto ed esterno",
      "Terreno di 30.000 mq",
      "Struttura coperta 250 mq",
      "2 strutture esterne per rimessaggio",
      "Posto barca da 50€/mese",
    ],
  },
  {
    title: "Trasporto Imbarcazioni",
    description:
      "Servizio di trasporto imbarcazioni in tutta Italia. Trasportiamo la tua barca in sicurezza e professionalità ovunque tu ne abbia bisogno, con attrezzature specializzate e personale esperto.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    features: [
      "Trasporto in tutta Italia",
      "Attrezzature specializzate",
      "Personale esperto e qualificato",
      "Trasporto sicuro e garantito",
      "Preventivo gratuito",
    ],
  },
  {
    title: "Consulenza e Assistenza Tecnica",
    description:
      "Offriamo consulenza tecnica per aiutarti a prendere le migliori decisioni per la tua barca. La nostra esperienza è a tua disposizione per qualsiasi dubbio o necessità.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    features: [
      "Consulenza gratuita",
      "Valutazione stato barca",
      "Preventivi dettagliati",
      "Assistenza post-vendita",
    ],
  },
]

export default function ServiziPage() {
  return (
    <div className="container px-4 py-8 sm:py-12 md:py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <motion.div
            className="mb-4 inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Star className="h-4 w-4" aria-hidden="true" />
              Servizi Professionali
            </span>
          </motion.div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            I Nostri Servizi
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Siamo in grado di prestarvi assistenza in tutta Italia. Disponiamo di
            un officina mobile dotata di tutte le attrezzature necessarie per la
            manutenzione e riparazione.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="group relative h-full min-h-[400px] sm:min-h-[450px] overflow-hidden border-0 transition-all hover:shadow-2xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 cursor-pointer">
                  {/* Full image background */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/98 group-hover:via-black/80 transition-all duration-300" />
                  
                  {/* Content overlay */}
                  <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                    <CardTitle className="text-lg font-bold mb-3 sm:text-xl lg:text-2xl text-white drop-shadow-lg">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-md mb-4 line-clamp-2 sm:line-clamp-3">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2" aria-label="Caratteristiche del servizio">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                            aria-hidden="true"
                          />
                          <span className="text-white/90 drop-shadow-sm">{feature}</span>
                        </motion.li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs sm:text-sm text-white/80 italic">
                          +{service.features.length - 3} altre caratteristiche
                        </li>
                      )}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </StaggerContainer>

      {/* Brands Section */}
      <FadeIn delay={0.5}>
        <div className="mt-12 sm:mt-16">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <motion.div
              className="mb-4 inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Award className="h-4 w-4" aria-hidden="true" />
                Marchi Autorizzati
              </span>
            </motion.div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              I Nostri Marchi
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Siamo concessionari e rivenditori autorizzati dei migliori marchi del settore nautico
            </p>
          </div>

          <StaggerContainer>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Motori */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative h-full overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-14 sm:w-14"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Wrench className="h-6 w-6 text-primary sm:h-7 sm:w-7" aria-hidden="true" />
                    </motion.div>
                    <CardTitle className="text-lg font-semibold sm:text-xl">
                      Motori
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-4 text-sm sm:text-base">
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">MERCURY</h3>
                        <p className="text-muted-foreground">
                          Concessionari per motori fuoribordo benzina ed elettrici, ricambi
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">MERCRUISER</h3>
                        <p className="text-muted-foreground">
                          Concessionari per tutta la gamma di motori entrofuoribordo benzina e diesel, piedi poppieri e ricambi
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">SELVA</h3>
                        <p className="text-muted-foreground">
                          Concessionari per motori fuoribordo benzina ed elettrici, ricambi
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Imbarcazioni */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative h-full overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-14 sm:w-14"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Ship className="h-6 w-6 text-primary sm:h-7 sm:w-7" aria-hidden="true" />
                    </motion.div>
                    <CardTitle className="text-lg font-semibold sm:text-xl">
                      Imbarcazioni
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-4 text-sm sm:text-base">
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">EOLO</h3>
                        <p className="text-muted-foreground">
                          Concessionari imbarcazioni
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">ASTARON</h3>
                        <p className="text-muted-foreground">
                          Concessionari imbarcazioni
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">ALASKA BOAT</h3>
                        <p className="text-muted-foreground">
                          Concessionari barche da pesca in alluminio
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">SELVA</h3>
                        <p className="text-muted-foreground">
                          Imbarcazioni in vetroresina e pneumatiche (gommoni)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Elettronica */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative h-full overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-14 sm:w-14"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="h-6 w-6 text-primary sm:h-7 sm:w-7" aria-hidden="true" />
                    </motion.div>
                    <CardTitle className="text-lg font-semibold sm:text-xl">
                      Elettronica
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-4 text-sm sm:text-base">
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">HUMMINBIRD</h3>
                        <p className="text-muted-foreground">
                          Rivenditori autorizzati
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">MINNKOTA</h3>
                        <p className="text-muted-foreground">
                          Rivenditori autorizzati
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </StaggerContainer>
        </div>
      </FadeIn>

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
              Hai Bisogno di Assistenza?
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Contattaci per un preventivo gratuito o per prenotare un intervento.
              Siamo sempre disponibili per rispondere alle tue esigenze.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full text-sm shadow-lg shadow-primary/20 sm:text-base focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <Link href="/contatti" aria-label="Contattaci per assistenza">
                    Contattaci
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <Link href="/offerte" aria-label="Vedi le nostre offerte">
                    Vedi le Offerte
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  )
}

