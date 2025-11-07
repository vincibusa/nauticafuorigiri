"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { Anchor, Wrench, Calendar, Shield, Star, ArrowRight, Waves, CheckCircle, Truck, CheckCircle2, Award, Ship } from "lucide-react"
import { FadeIn, StaggerContainer, SlideUp, ScaleIn } from "@/components/animations"
import { LocalBusinessSchema, OrganizationSchema, ServiceSchema } from "@/components/structured-data"

export default function Home() {
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

  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <ServiceSchema
        serviceName="Servizi Nautici Professionali"
        description="Servizi completi per la manutenzione, riparazione e assistenza di imbarcazioni e motori nautici in tutta Italia."
      />
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
            quality={90}
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
                    <Link href="#servizi" aria-label="Scopri i nostri servizi">
                      I Nostri Servizi
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servizi"
        className="relative overflow-hidden py-12 sm:py-20 md:py-32"
        aria-labelledby="services-heading"
      >
        <div className="container px-4 sm:px-6 lg:px-8">
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
              <h2
                id="services-heading"
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              >
                I Nostri Servizi
              </h2>
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
                          loading={index < 3 ? undefined : "lazy"}
                          quality={85}
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
                <h3 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  I Nostri Marchi
                </h3>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Siamo concessionari e rivenditori autorizzati dei migliori marchi del settore nautico
                </p>
              </div>

              <StaggerContainer>
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Motori */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="group relative h-full min-h-[400px] sm:min-h-[450px] overflow-hidden border-0 transition-all hover:shadow-2xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 cursor-pointer">
                      {/* Full image background */}
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1594736797933-d0c0aa0a3d0a?w=1200&q=80"
                          alt="Motori nautici"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/98 group-hover:via-black/80 transition-all duration-300" />
                      
                      {/* Content overlay */}
                      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                        <CardTitle className="text-lg font-bold mb-3 sm:text-xl lg:text-2xl text-white drop-shadow-lg">
                          Motori
                        </CardTitle>
                        <ul className="space-y-2" aria-label="Marchi motori">
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">MERCURY</strong> - Motori fuoribordo benzina ed elettrici</span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">MERCRUISER</strong> - Motori entrofuoribordo benzina e diesel</span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">SELVA</strong> - Motori fuoribordo benzina ed elettrici</span>
                          </motion.li>
                        </ul>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Imbarcazioni */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="group relative h-full min-h-[400px] sm:min-h-[450px] overflow-hidden border-0 transition-all hover:shadow-2xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 cursor-pointer">
                      {/* Full image background */}
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=80"
                          alt="Imbarcazioni"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/98 group-hover:via-black/80 transition-all duration-300" />
                      
                      {/* Content overlay */}
                      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                        <CardTitle className="text-lg font-bold mb-3 sm:text-xl lg:text-2xl text-white drop-shadow-lg">
                          Imbarcazioni
                        </CardTitle>
                        <ul className="space-y-2" aria-label="Marchi imbarcazioni">
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">EOLO</strong> - Concessionari imbarcazioni</span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">ASTARON</strong> - Concessionari imbarcazioni</span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">ALASKA BOAT</strong> - Barche da pesca in alluminio</span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">SELVA</strong> - Vetroresina e pneumatici</span>
                          </motion.li>
                        </ul>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Elettronica */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="group relative h-full min-h-[400px] sm:min-h-[450px] overflow-hidden border-0 transition-all hover:shadow-2xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 cursor-pointer">
                      {/* Full image background */}
                      <div className="absolute inset-0">
                        <Image
                          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                          alt="Elettronica nautica"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/98 group-hover:via-black/80 transition-all duration-300" />
                      
                      {/* Content overlay */}
                      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                        <CardTitle className="text-lg font-bold mb-3 sm:text-xl lg:text-2xl text-white drop-shadow-lg">
                          Elettronica
                        </CardTitle>
                        <ul className="space-y-2" aria-label="Marchi elettronica">
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">HUMMINBIRD</strong> - Rivenditori autorizzati</span>
                          </motion.li>
                          <motion.li
                            className="flex items-start gap-2 text-xs sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="text-white/90 drop-shadow-sm"><strong className="font-semibold">MINNKOTA</strong> - Rivenditori autorizzati</span>
                          </motion.li>
                        </ul>
                      </div>
                    </Card>
              </motion.div>
                </div>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </section>


    </div>
    </>
  )
}
