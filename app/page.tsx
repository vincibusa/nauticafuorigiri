"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Anchor, Wrench, Calendar, Shield, Star, ArrowRight, Waves, CheckCircle, Truck } from "lucide-react"
import { FadeIn, StaggerContainer, SlideUp, ScaleIn } from "@/components/animations"

export default function Home() {
  const mainServices = [
    {
      title: "Riparazione e Rifacimento Motori",
      description:
        "Specializzati nella riparazione di piedi poppieri e motori entrofuoribordo. Ripariamo e rifacciamo a nuovo motori entrobordo, entrofuoribordo e fuoribordo di tutte le marche.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1594736797933-d0c0aa0a3d0a?w=1200&q=80",
    },
    {
      title: "Riparazione Imbarcazioni",
      description:
        "Riparazione e manutenzione per imbarcazioni di ogni genere, dalla grande alla piccina, con professionalità e competenza.",
      icon: Anchor,
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80",
    },
    {
      title: "Trasporto Imbarcazioni",
      description:
        "Servizio di trasporto imbarcazioni in tutta Italia con attrezzature specializzate e personale esperto.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    },
    {
      title: "Rimessaggio",
      description:
        "Rimessaggio coperto ed esterno su terreno di 30.000 mq con struttura coperta di 250 mq e 2 strutture esterne.",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    },
    {
      title: "Concessionari Autorizzati",
      description:
        "Concessionari MERCURY, MERCRUISER, SELVA per motori. Concessionari EOLO, ASTARON, ALASKA BOAT per imbarcazioni.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-12 sm:py-20 md:py-32"
        aria-labelledby="hero-heading"
      >
        {/* Hero image background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt="Barca nautica"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
        </div>

        {/* Animated background waves */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">


            <SlideUp delay={0.2}>
              <h1
                id="hero-heading"
                className="mb-6 bg-gradient-to-br from-white to-white/90 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg"
              >
                Nautica Fuorigiri
              </h1>
            </SlideUp>

            <FadeIn delay={0.3}>
              <p className="mb-6 text-lg text-white/90 sm:text-xl md:text-2xl drop-shadow-md">
                La passione per la nautica al servizio della qualità e della
                professionalità
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mb-6 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg drop-shadow-sm">
                Nautica Fuorigiri nasce dalla passione per la nautica e
                dall'esigenza di fornire ai nostri clienti un servizio di qualità
                ed una professionalità che non si erano mai viste in questo campo.
                Ai nostri clienti facciamo vivere in totale relax l'esperienza
                della nautica senza doversi preoccupare di finire nelle mani di
                meccanici impreparati e cantieri disonesti.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="mb-10 text-sm font-medium leading-relaxed text-white/90 sm:text-base md:text-lg drop-shadow-sm">
                Sappiamo benissimo che avete già sentito o letto queste parole in
                molti altri siti internet, per questo non vi chiediamo di
                crederci ma di verificare voi stessi affidandovi a noi.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
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
                    <Link href="/contatti" aria-label="Contattaci per informazioni">
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
                    className="w-full text-sm sm:text-base bg-background/90 backdrop-blur-sm border-white/20 text-foreground hover:bg-background focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    <Link href="/servizi" aria-label="Scopri i nostri servizi">
                      I Nostri Servizi
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section
        className="relative py-12 sm:py-16 md:py-24"
        aria-labelledby="services-heading"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

              <h2
                id="services-heading"
                className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              >
                I Nostri Servizi
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                Soluzioni complete per tutte le tue esigenze nautiche
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mainServices.map((service, index) => {
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="group relative h-full min-h-[320px] sm:min-h-[360px] overflow-hidden border-0 transition-all hover:shadow-2xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 cursor-pointer">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300" />
                      
                      {/* Content overlay */}
                      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                        <CardTitle className="text-lg font-bold mb-3 sm:text-xl lg:text-2xl text-white drop-shadow-lg">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-md line-clamp-3 sm:line-clamp-4">
                          {service.description}
                        </CardDescription>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </StaggerContainer>

          <FadeIn delay={0.6}>
            <div className="mt-12 text-center sm:mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-sm shadow-sm hover:shadow-md sm:text-base focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  <Link href="/servizi" aria-label="Scopri tutti i nostri servizi">
                    Scopri Tutti i Servizi
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-background py-12 sm:py-16 md:py-24"
        aria-labelledby="cta-heading"
      >
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-3xl">
            <motion.div
              className="rounded-2xl border-2 border-primary/20 bg-background/50 p-8 backdrop-blur-sm sm:p-12 md:p-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ScaleIn delay={0.2}>
                <div className="mb-6 flex justify-center">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 sm:h-20 sm:w-20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Star
                      className="h-8 w-8 text-primary-foreground sm:h-10 sm:w-10"
                      aria-hidden="true"
                    />
                  </motion.div>
                </div>
              </ScaleIn>

              <FadeIn delay={0.3}>
                <h2
                  id="cta-heading"
                  className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center"
                >
                  Pronto a Vivere l'Esperienza Nautica?
                </h2>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="mb-8 text-base text-center leading-relaxed text-muted-foreground sm:text-lg">
                  Contattaci oggi stesso per una consulenza gratuita o per
                  prenotare un servizio. Siamo qui per aiutarti.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex-1 sm:flex-initial"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full text-sm shadow-lg shadow-primary/30 sm:text-base focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                      <Link href="/contatti" aria-label="Contattaci ora">
                        Contattaci Ora
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex-1 sm:flex-initial"
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
              </FadeIn>

              {/* Trust indicators */}
              <FadeIn delay={0.6}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t pt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span>Consulenza Gratuita</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span>Preventivo Immediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span>Assistenza H24</span>
                  </div>
                </div>
              </FadeIn>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
