"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Wrench, Heart, Star, Shield, BookOpen, Building2, MapPin, Users, Award } from "lucide-react"
import { FadeIn, StaggerContainer } from "@/components/animations"

const values = [
  {
    title: "Passione",
    description:
      "La passione per la nautica è il motore che ci guida ogni giorno. Non è solo un lavoro, è una vocazione che ci permette di trasformare la nostra passione in servizi di qualità per i nostri clienti.",
    icon: Heart,
    color: "from-red-500/10 to-pink-500/10",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
  },
  {
    title: "Competenza",
    description:
      "Anni di esperienza nel settore nautico ci hanno permesso di sviluppare competenze tecniche approfondite. Ogni intervento è eseguito con precisione e attenzione ai dettagli.",
    icon: Wrench,
    color: "from-blue-500/10 to-cyan-500/10",
    image: "https://images.unsplash.com/photo-1594736797933-d0c0aa0a3d0a?w=1200&q=80",
  },
  {
    title: "Professionalità",
    description:
      "Professionalità e onestà sono i valori fondanti della nostra azienda. Ci impegniamo ogni giorno per offrire un servizio che non si era mai visto in questo campo, garantendo trasparenza e affidabilità.",
    icon: Shield,
    color: "from-indigo-500/10 to-violet-500/10",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  },
  {
    title: "Qualità",
    description:
      "La qualità del nostro lavoro è la nostra priorità. Utilizziamo solo materiali di prima scelta e attrezzature professionali per garantire risultati eccellenti e duraturi.",
    icon: Star,
    color: "from-amber-500/10 to-yellow-500/10",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  },
]

// Placeholder per immagini squadra - sostituire con immagini reali
const teamImages = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Squadra Nautica Fuorigiri",
    name: "Il Nostro Team",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Lavoro in officina",
    name: "Al Lavoro",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    alt: "Squadra professionale",
    name: "Professionalità",
  },
]

export default function BiografiaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 md:py-32">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920&q=80"
            alt="Nautica Fuorigiri"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
        </div>

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn delay={0.2}>
              <motion.div
                className="mb-4 inline-block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  La Nostra Storia
                </span>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1 className="mb-6 bg-gradient-to-br from-white to-white/90 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                La Nostra Storia
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-lg text-white/90 sm:text-xl md:text-2xl drop-shadow-md">
                La passione per la nautica che diventa professione
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="container px-4 py-8 sm:py-12 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Main Story Section */}
          <section className="mb-16 sm:mb-20">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1594736797933-d0c0aa0a3d0a?w=1200&q=80"
                    alt="Passione per la nautica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
                    </motion.div>
                    <h2 className="text-2xl font-bold sm:text-3xl">La Nostra Passione</h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                      Questo lavoro più che considerarlo tale lo considero una
                      passione, si perché per me riparare barche e motori nautici è
                      un divertimento, avendo sempre avuto la passione per la
                      nautica fin da quando ero bambino.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16 sm:mb-20">
            <FadeIn>
              <div className="mb-12 text-center">
                <motion.div
                  className="mb-4 inline-block"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    Il Nostro Team
                  </span>
                </motion.div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  La Nostra Squadra
                </h2>
                <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
                  Professionisti appassionati al servizio della nautica
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teamImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="group relative h-full overflow-hidden border-0 transition-all hover:shadow-2xl !py-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-lg font-bold text-white drop-shadow-lg sm:text-xl">
                            {image.name}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </StaggerContainer>
          </section>

          {/* Values Section */}
          <section className="mb-16 sm:mb-20">
            <FadeIn>
              <div className="mb-12 text-center">
                <motion.div
                  className="mb-4 inline-block"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    <Star className="h-4 w-4" aria-hidden="true" />
                    I Nostri Valori
                  </span>
                </motion.div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Cosa Ci Guida
                </h2>
                <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
                  I principi che guidano ogni nostro intervento
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.title}
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
                            src={value.image}
                            alt={value.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                            quality={85}
                          />
                        </div>
                        
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/98 group-hover:via-black/80 transition-all duration-300" />
                        
                        {/* Content overlay */}
                        <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                          <motion.div
                            className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm sm:h-14 sm:w-14"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon
                              className="h-6 w-6 text-white sm:h-7 sm:w-7"
                              aria-hidden="true"
                            />
                          </motion.div>
                          <h3 className="mb-3 text-xl font-bold text-white drop-shadow-lg sm:text-2xl">
                            {value.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-white/95 drop-shadow-md sm:text-base">
                            {value.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </StaggerContainer>
          </section>

          <Separator className="my-12" />

          {/* Structure Section */}
          <section className="mb-16 sm:mb-20">
            <FadeIn delay={0.3}>
              <div className="mb-12 text-center">

                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Strutture e Spazi
                </h2>
              </div>
            </FadeIn>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
                    alt="Struttura Nautica Fuorigiri"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-6">

                  <div className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="p-6">
                        <MapPin
                          className="mb-3 h-8 w-8 text-primary"
                          aria-hidden="true"
                        />
                        <h3 className="mb-2 text-lg font-semibold">Terreno</h3>
                        <p className="text-2xl font-bold text-primary">30.000 mq</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Spazio totale per lavorazioni e rimessaggio
                        </p>
                      </div>
                      <div className=" p-6">
                        <Building2
                          className="mb-3 h-8 w-8 text-primary"
                          aria-hidden="true"
                        />
                        <h3 className="mb-2 text-lg font-semibold">Struttura Coperta</h3>
                        <p className="text-2xl font-bold text-primary">410 mq</p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Officina e rimessaggio al coperto
                        </p>
                      </div>
                    </div>
                    <div className=" p-6">
                      <h3 className="mb-3 text-lg font-semibold">Rimessaggio</h3>
                      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Servizio di rimessaggio sia al coperto che all'esterno. Disponiamo di
                        una struttura coperta di 410 mq per officina e rimessaggio, più 2
                        strutture esterne per rimessaggio al chiuso.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Mission Statement */}
          <section>
            <FadeIn delay={0.4}>
              <div className="mb-12 text-center">
                <motion.div
                  className="mb-4 inline-block"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >

                </motion.div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  La Nostra Missione
                </h2>
              </div>
            </FadeIn>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80"
                    alt="La Nostra Missione"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">

                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                      Nautica Fuorigiri nasce dalla passione per la nautica e
                      dall'esigenza di fornire ai nostri clienti un servizio di
                      qualità ed una professionalità che non si erano mai viste in
                      questo campo.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl mt-4">
                      Ai nostri clienti facciamo vivere in totale relax
                      l'esperienza della nautica senza doversi preoccupare di
                      finire nelle mani di meccanici impreparati e cantieri
                      disonesti.
                    </p>
                    <p className="text-lg font-semibold leading-relaxed text-foreground sm:text-xl mt-4">
                      Sappiamo benissimo che avete già sentito o letto queste parole
                      in molti altri siti internet, per questo non vi chiediamo di
                      crederci ma di verificare voi stessi affidandovi a noi.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
