"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, MessageSquare, Mail } from "lucide-react"
import { FadeIn, StaggerContainer } from "@/components/animations"

// Placeholder testimonials - replace with actual testimonials
const testimonials = [
  {
    name: "Mario Rossi",
    location: "Roma",
    rating: 5,
    text: "Servizio eccellente! Hanno riparato il motore della mia barca con professionalità e competenza. Consigliatissimo!",
    initials: "MR",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    name: "Giulia Bianchi",
    location: "Napoli",
    rating: 5,
    text: "Finalmente ho trovato qualcuno di cui posso fidarmi per la manutenzione della mia barca. Professionalità e onestà al top!",
    initials: "GB",
    color: "from-cyan-500/10 to-sky-500/10",
  },
  {
    name: "Luca Verdi",
    location: "Milano",
    rating: 5,
    text: "Assistenza mobile fantastica! Sono venuti direttamente al porto e hanno risolto il problema in poco tempo. Ottimo servizio!",
    initials: "LV",
    color: "from-sky-500/10 to-indigo-500/10",
  },
  {
    name: "Anna Neri",
    location: "Genova",
    rating: 5,
    text: "Ho usato il servizio di posto barca invernale. Prezzo onesto e servizio impeccabile. La mia barca è in ottime mani!",
    initials: "AN",
    color: "from-indigo-500/10 to-violet-500/10",
  },
  {
    name: "Paolo Gialli",
    location: "Venezia",
    rating: 5,
    text: "Competenza e passione si vedono nel loro lavoro. Hanno sistemato problemi che altri non erano riusciti a risolvere.",
    initials: "PG",
    color: "from-violet-500/10 to-purple-500/10",
  },
  {
    name: "Sara Blu",
    location: "Palermo",
    rating: 5,
    text: "Servizio di manutenzione preventiva molto utile. Mi hanno aiutato a mantenere la barca in perfetto stato. Grazie!",
    initials: "SB",
    color: "from-purple-500/10 to-pink-500/10",
  },
]

export default function TestimonianzePage() {
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
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Testimonianze
            </span>
          </motion.div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Testimonianze dei Clienti
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Scopri cosa dicono di noi i nostri clienti soddisfatti
          </p>
        </div>
      </FadeIn>

      <StaggerContainer>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="group relative flex h-full flex-col overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <CardHeader className="relative">
                  <div className="mb-4 flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Avatar className="h-12 w-12 border-2 border-primary/20 sm:h-14 sm:w-14">
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base sm:text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.1 + 0.3 + i * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <Star className="h-4 w-4 fill-primary text-primary sm:h-5 sm:w-5" />
                      </motion.div>
                    ))}
                  </motion.div>
                </CardHeader>

                <CardContent className="relative flex-1">
                  <CardDescription className="text-base leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
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
              Vuoi Lasciare una Testimonianza?
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sei stato nostro cliente? Condividi la tua esperienza con noi! Le
              tue opinioni ci aiutano a migliorare continuamente.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="mailto:nauticafuorigiri@hotmail.com?subject=Testimonianza"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-base"
                aria-label="Invia testimonianza via email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Invia Testimonianza
              </a>
            </motion.div>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  )
}
