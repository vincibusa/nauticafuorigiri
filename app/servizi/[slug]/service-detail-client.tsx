"use client"

import Image from "next/image"
import Link from "next/link"
import type { Service } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2, Phone, Mail, ArrowRight, HelpCircle } from "lucide-react"
import { FadeIn, StaggerContainer } from "@/components/animations"
import { ServiceSchema } from "@/components/structured-data"
import { motion } from "framer-motion"

interface ServiceDetailClientProps {
  service: Service
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  return (
    <>
      <ServiceSchema
        serviceName={service.title}
        description={service.shortDescription}
      />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-12 sm:py-20 md:py-32"
          aria-labelledby="service-hero-heading"
        >
          {/* Hero image background */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
          </div>

          <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <Link
                href="/#servizi"
                className="inline-flex items-center gap-2 mb-8 text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>Torna ai servizi</span>
              </Link>
            </FadeIn>

            <div className="mx-auto max-w-4xl">
              <FadeIn delay={0.2}>
                <h1
                  id="service-hero-heading"
                  className="mb-6 bg-gradient-to-br from-white to-white/90 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg"
                >
                  {service.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="mb-8 text-lg text-white/90 sm:text-xl md:text-2xl drop-shadow-md">
                  {service.shortDescription}
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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
                        Richiedi Preventivo
                        <Phone className="ml-2 h-4 w-4" aria-hidden="true" />
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
                      <Link href="/contatti" aria-label="Contattaci via email">
                        Contattaci
                        <Mail className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 sm:py-20 md:py-32">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <StaggerContainer>
                {/* Overview */}
                {service.detailedContent?.overview && (
                  <FadeIn>
                    <div className="mb-12">
                      <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                        Panoramica
                      </h2>
                      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                        {service.detailedContent.overview}
                      </p>
                    </div>
                  </FadeIn>
                )}

                {/* Features */}
                <FadeIn delay={0.1}>
                  <Card className="mb-12">
                    <CardHeader>
                      <CardTitle className="text-xl sm:text-2xl">
                        Cosa Include
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        Tutti i servizi e le caratteristiche incluse
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-3 sm:grid-cols-2" aria-label="Caratteristiche del servizio">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span className="text-sm sm:text-base">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>

                {/* Why Choose Us */}
                {service.detailedContent?.whyChooseUs && (
                  <FadeIn delay={0.2}>
                    <Card className="mb-12">
                      <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">
                          Perché Sceglierci
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                          I vantaggi del nostro servizio
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.detailedContent.whyChooseUs.map((reason, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <CheckCircle2
                                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                                aria-hidden="true"
                              />
                              <span className="text-sm sm:text-base">{reason}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </FadeIn>
                )}

                {/* Process */}
                {service.detailedContent?.process && (
                  <FadeIn delay={0.3}>
                    <Card className="mb-12">
                      <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl">
                          {service.detailedContent.process.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-4">
                          {service.detailedContent.process.steps.map((step, index) => (
                            <motion.li
                              key={index}
                              className="flex gap-4"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                                {index + 1}
                              </span>
                              <span className="pt-1 text-sm sm:text-base">{step}</span>
                            </motion.li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  </FadeIn>
                )}

                {/* FAQ */}
                {service.detailedContent?.faq && service.detailedContent.faq.length > 0 && (
                  <FadeIn delay={0.4}>
                    <div className="mb-12">
                      <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
                        Domande Frequenti
                      </h2>
                      <div className="space-y-4">
                        {service.detailedContent.faq.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card>
                              <CardHeader>
                                <CardTitle className="flex items-start gap-3 text-base sm:text-lg">
                                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                                  {item.question}
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                  {item.answer}
                                </p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                )}

                {/* CTA Section */}
                <FadeIn delay={0.5}>
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl sm:text-2xl">
                        Pronto a Iniziare?
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        Contattaci per un preventivo gratuito e personalizzato
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                          <Link href="/contatti">
                            Richiedi Preventivo
                            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                          <Link href="tel:+393397478715">
                            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                            Chiama Ora
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </StaggerContainer>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

