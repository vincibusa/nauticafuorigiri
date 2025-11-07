"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react"
import { FadeIn, StaggerContainer } from "@/components/animations"
import { motion } from "framer-motion"

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to an API
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
              <Phone className="h-4 w-4" aria-hidden="true" />
              Contattaci
            </span>
          </motion.div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Contatti
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Siamo sempre disponibili per rispondere alle tue domande e per
            fornirti un preventivo gratuito.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer>
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <FadeIn>
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <CardTitle className="text-lg sm:text-xl">
                      Informazioni di Contatto
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Contattaci tramite telefono, email o vieni a trovarci in sede.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-12 sm:w-12"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <MapPin
                          className="h-5 w-5 text-primary sm:h-6 sm:w-6"
                          aria-hidden="true"
                        />
                      </motion.div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold sm:text-base">
                        Indirizzo
                      </h3>
                      <address className="not-italic text-xs text-muted-foreground sm:text-sm">
                        Strada vicinale di Orbetello snc
                        <br />
                        Canino (VT) 01011
                      </address>
                    </div>
                  </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-12 sm:w-12"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone
                          className="h-5 w-5 text-primary sm:h-6 sm:w-6"
                          aria-hidden="true"
                        />
                      </motion.div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold sm:text-base">
                        Telefono
                      </h3>
                      <div className="space-y-1 text-xs text-muted-foreground sm:text-sm">
                        <a
                          href="tel:+393397478715"
                          className="block hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm w-fit"
                          aria-label="Chiama al numero 339 747 8715"
                        >
                          339 747 8715
                        </a>
                        <a
                          href="tel:+3907611742610"
                          className="block hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm w-fit"
                          aria-label="Chiama al numero 0761 174 2610"
                        >
                          0761 174 2610
                        </a>
                      </div>
                    </div>
                  </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 sm:h-12 sm:w-12"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Mail
                          className="h-5 w-5 text-primary sm:h-6 sm:w-6"
                          aria-hidden="true"
                        />
                      </motion.div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold sm:text-base">
                        Email
                      </h3>
                      <a
                        href="mailto:nauticafuorigiri@hotmail.com"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm break-all sm:text-sm"
                        aria-label="Invia email a nauticafuorigiri@hotmail.com"
                      >
                        nauticafuorigiri@hotmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="relative">
                    <CardTitle className="text-lg sm:text-xl">
                      Orari di Apertura
                    </CardTitle>
                  </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Lunedì - Venerdì
                      </span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sabato</span>
                      <span className="font-medium">9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domenica</span>
                      <span className="font-medium">Chiuso</span>
                    </div>
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative">
                  <CardTitle className="text-lg sm:text-xl">
                    Invia un Messaggio
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Compila il form qui sotto e ti risponderemo il prima possibile.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center sm:py-12"
                  >
                    <CheckCircle2 className="mb-4 h-12 w-12 text-primary sm:h-16 sm:w-16" />
                    <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                      Messaggio Inviato!
                    </h3>
                    <p className="text-sm text-muted-foreground sm:text-base">
                      Ti risponderemo il prima possibile.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                    aria-label="Form di contatto"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">
                        Nome e Cognome
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Mario Rossi"
                        className="text-sm sm:text-base"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="mario.rossi@example.com"
                        className="text-sm sm:text-base"
                        aria-required="true"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm sm:text-base">
                        Telefono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+39 123 456 7890"
                        className="text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm sm:text-base">
                        Messaggio
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Scrivi qui il tuo messaggio..."
                        rows={6}
                        className="text-sm sm:text-base"
                        aria-required="true"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-sm shadow-lg shadow-primary/20 sm:text-base focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        Invia Messaggio
                        <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </motion.div>
                  </form>
                )}
                </CardContent>
              </Card>
            </motion.div>
          </FadeIn>
        </div>
      </StaggerContainer>
    </div>
  )
}
