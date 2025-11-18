"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { FadeIn, StaggerContainer } from "@/components/animations"
import { motion } from "framer-motion"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import dynamic from "next/dynamic"

// Carica la mappa solo lato client per evitare problemi SSR
const DynamicMap = dynamic(() => import("@/components/map").then((mod) => ({ default: mod.Map })), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-full items-center justify-center rounded-lg bg-muted">
      <div className="text-center">
        <MapPin className="mx-auto mb-2 h-8 w-8 animate-pulse text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Caricamento mappa...</p>
      </div>
    </div>
  ),
})

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Errore durante l'invio del messaggio")
      }

      setSubmitted(true)
      reset()
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      // In a real app, you might want to show an error toast here
      alert(error instanceof Error ? error.message : "Errore durante l'invio del messaggio")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 py-8 sm:py-12 md:py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

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
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    <CheckCircle2 className="mb-4 h-12 w-12 text-primary sm:h-16 sm:w-16" aria-hidden="true" />
                    <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                      Messaggio Inviato!
                    </h3>
                    <p className="text-sm text-muted-foreground sm:text-base">
                      Ti risponderemo il prima possibile.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 sm:space-y-6"
                    aria-label="Form di contatto"
                    noValidate
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm sm:text-base">
                        Nome e Cognome <span className="text-destructive" aria-label="campo obbligatorio">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        {...register("name")}
                        placeholder="Mario Rossi"
                        className={`text-sm sm:text-base ${
                          errors.name ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="flex items-center gap-1 text-xs text-destructive sm:text-sm"
                          role="alert"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm sm:text-base">
                        Email <span className="text-destructive" aria-label="campo obbligatorio">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="mario.rossi@example.com"
                        className={`text-sm sm:text-base ${
                          errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="flex items-center gap-1 text-xs text-destructive sm:text-sm"
                          role="alert"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm sm:text-base">
                        Telefono <span className="text-muted-foreground text-xs">(opzionale)</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+39 123 456 7890"
                        className={`text-sm sm:text-base ${
                          errors.phone ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="flex items-center gap-1 text-xs text-destructive sm:text-sm"
                          role="alert"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm sm:text-base">
                        Messaggio <span className="text-destructive" aria-label="campo obbligatorio">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Scrivi qui il tuo messaggio..."
                        rows={6}
                        className={`text-sm sm:text-base ${
                          errors.message ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                        aria-required="true"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          className="flex items-center gap-1 text-xs text-destructive sm:text-sm"
                          role="alert"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Privacy Consent */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="privacyConsent"
                          {...register("privacyConsent")}
                          className="mt-1"
                          aria-required="true"
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor="privacyConsent"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Acconsento al trattamento dei dati personali{" "}
                            <span className="text-destructive" aria-label="campo obbligatorio">*</span>
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Dichiaro di aver letto e compreso l'
                            <a
                              href="/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                            >
                              informativa sulla privacy
                            </a>{" "}
                            e acconsento al trattamento dei miei dati personali per le finalità indicate.
                          </p>
                        </div>
                      </div>
                      {errors.privacyConsent && (
                        <p
                          className="flex items-center gap-1 text-xs text-destructive sm:text-sm"
                          role="alert"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
                          {errors.privacyConsent.message}
                        </p>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full text-sm shadow-lg shadow-primary/20 sm:text-base focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                            Invio in corso...
                          </>
                        ) : (
                          <>
                            Invia Messaggio
                            <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                          </>
                        )}
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

      {/* Map Section */}
      <FadeIn delay={0.4}>
        <div className="mt-12 sm:mt-16">
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="mb-4 inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Come Raggiungerci
              </span>
            </motion.div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              La Nostra Posizione
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Vieni a trovarci nella nostra sede a Canino (VT)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="overflow-hidden rounded-lg border-2 shadow-xl"
          >
            <DynamicMap
              latitude={42.4650}
              longitude={11.7500}
              address="Strada vicinale di Orbetello snc, Canino (VT) 01011"
            />
          </motion.div>
        </div>
      </FadeIn>
    </div>
  )
}
