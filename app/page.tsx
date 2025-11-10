"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { Anchor, Wrench, Calendar, Shield, Star, ArrowRight, Waves, CheckCircle, Truck, CheckCircle2, Award, Ship } from "lucide-react"
import { FadeIn, StaggerContainer, SlideUp, ScaleIn } from "@/components/animations"
import { LocalBusinessSchema, OrganizationSchema, ServiceSchema } from "@/components/structured-data"
import { services } from "@/lib/services"

export default function Home() {

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
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Image
                    src="/logo-bianco.png"
                    alt="Nautica Fuorigiri"
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                    className="object-contain drop-shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    priority
                  />
                </motion.div>
              </div>
              <h1 id="hero-heading" className="sr-only">
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
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
              {services.map((service, index) => {
                // Improved balanced bento grid layout for 5 elements:
                // Row 1: Large (2 cols) + Normal (1 col) + Normal (1 col) = 4 cols filled
                // Row 2: Normal (1 col) + Large (2 cols) + empty (1 col) = 3 cols filled, 1 empty
                // This creates a balanced layout with minimal empty space
                const isLarge = index === 0 || index === 3
                const colSpan = isLarge ? "sm:col-span-2 lg:col-span-2" : "sm:col-span-1 lg:col-span-1"
                // Position cards in second row: Index 4 in col 1, Index 3 in cols 2-3
                const colStart = index === 4 ? "lg:col-start-1 lg:row-start-2" : index === 3 ? "lg:col-start-2 lg:row-start-2" : ""
                // Varied heights for visual interest
                const heightVariations = [
                  "min-h-[400px] sm:min-h-[500px] lg:min-h-[550px]", // Large card 1
                  "min-h-[400px] sm:min-h-[450px] lg:min-h-[480px]", // Normal card
                  "min-h-[400px] sm:min-h-[450px] lg:min-h-[480px]", // Normal card
                  "min-h-[400px] sm:min-h-[500px] lg:min-h-[550px]", // Large card 2
                  "min-h-[400px] sm:min-h-[450px] lg:min-h-[480px]", // Normal card
                ]
                const minHeight = heightVariations[index] || "min-h-[400px] sm:min-h-[450px]"
                
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className={`${colSpan} ${colStart}`}
                  >
                    <Link
                      href={`/servizi/${service.slug}`}
                      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
                      aria-label={`Scopri di più su ${service.title}`}
                    >
                      <Card className={`group relative h-full ${minHeight} overflow-hidden border-0 transition-all hover:shadow-2xl cursor-pointer`}>
                        {/* Full image background */}
                        <div className="absolute inset-0">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes={isLarge ? "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
                            priority={index < 3}
                            loading={index < 3 ? undefined : "lazy"}
                            quality={85}
                          />
                        </div>
                        
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/98 group-hover:via-black/80 transition-all duration-300" />
                        
                        {/* Content overlay */}
                        <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white z-10">
                          <CardTitle className={`font-bold mb-3 text-white drop-shadow-lg ${isLarge ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl lg:text-2xl"}`}>
                          {service.title}
                        </CardTitle>
                          <CardDescription className={`text-white/95 leading-relaxed drop-shadow-md mb-4 ${isLarge ? "text-base sm:text-lg line-clamp-3 lg:line-clamp-4" : "text-sm sm:text-base line-clamp-2 sm:line-clamp-3"}`}>
                            {service.shortDescription}
                        </CardDescription>
                          <ul className={`space-y-2 mb-4 ${isLarge ? "mb-6" : ""}`} aria-label="Caratteristiche del servizio">
                            {service.features.slice(0, isLarge ? 4 : 3).map((feature, idx) => (
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
                            {service.features.length > (isLarge ? 4 : 3) && (
                              <li className="text-xs sm:text-sm text-white/80 italic">
                                +{service.features.length - (isLarge ? 4 : 3)} altre caratteristiche
                              </li>
                            )}
                          </ul>
                          <div className={`flex items-center gap-2 font-medium text-white/90 group-hover:text-white transition-colors ${isLarge ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>
                            <span>Scopri di più</span>
                            <ArrowRight className={`transition-transform group-hover:translate-x-1 ${isLarge ? "h-4 w-4 sm:h-5 sm:w-5" : "h-3 w-3 sm:h-4 sm:w-4"}`} aria-hidden="true" />
                          </div>
                        </div>
                    </Card>
                    </Link>
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
                          src="/rip-motori.jpeg"
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
                          src="/rimessaggio.jpeg"
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
                          src="/elettronica.jpeg"
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
