"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { X, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer } from "@/components/animations"

// Placeholder images - replace with actual images
const galleryImages = [
  { id: 1, src: "/placeholder-boat-1.jpg", alt: "Barca 1" },
  { id: 2, src: "/placeholder-boat-2.jpg", alt: "Barca 2" },
  { id: 3, src: "/placeholder-boat-3.jpg", alt: "Barca 3" },
  { id: 4, src: "/placeholder-boat-4.jpg", alt: "Barca 4" },
  { id: 5, src: "/placeholder-boat-5.jpg", alt: "Barca 5" },
  { id: 6, src: "/placeholder-boat-6.jpg", alt: "Barca 6" },
  { id: 7, src: "/placeholder-boat-7.jpg", alt: "Barca 7" },
  { id: 8, src: "/placeholder-boat-8.jpg", alt: "Barca 8" },
  { id: 9, src: "/placeholder-boat-9.jpg", alt: "Barca 9" },
]

export default function PhotoGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
              <Camera className="h-4 w-4" aria-hidden="true" />
              Gallery
            </span>
          </motion.div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Photo Gallery
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg md:text-xl">
            Scopri alcuni dei nostri lavori e della nostra passione per la nautica
          </p>
        </div>
      </FadeIn>

      {/* Image Grid */}
      <StaggerContainer>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className="group relative cursor-pointer overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                <CardContent className="relative p-0">
                  <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="flex flex-col items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Camera className="h-8 w-8 text-primary/50 sm:h-10 sm:w-10" aria-hidden="true" />
                        <span className="text-xs text-muted-foreground sm:text-sm">
                          {image.alt}
                        </span>
                      </motion.div>
                    </div>
                    {/* Uncomment when you have actual images:
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    */}
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-20" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </StaggerContainer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10 text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-offset-2"
                onClick={() => setSelectedImage(null)}
                aria-label="Chiudi lightbox"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
              <div
                className="relative max-h-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image) => (
                      <CarouselItem key={image.id}>
                        <motion.div
                          className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg text-white">{image.alt}</span>
                          </div>
                          {/* Uncomment when you have actual images:
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain"
                            sizes="100vw"
                          />
                          */}
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 text-white hover:bg-white/20 border-white/20" />
                  <CarouselNext className="right-4 text-white hover:bg-white/20 border-white/20" />
                </Carousel>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

