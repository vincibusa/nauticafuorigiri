"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Servizi", href: "/#servizi" },
  { name: "Offerte", href: "/offerte" },
  { name: "Contatti", href: "/contatti" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [hash, setHash] = useState("")
  const pathname = usePathname()
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Update hash when it changes
    const handleHashChange = () => {
      setHash(window.location.hash)
    }
    
    // Set initial hash
    setHash(window.location.hash)
    
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    
    // Also listen for scroll to detect when we're in servizi section
    const handleScroll = () => {
      if (pathname === "/") {
        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
        
        // Debounce scroll handling
        scrollTimeoutRef.current = setTimeout(() => {
          const serviziSection = document.getElementById("servizi")
          if (serviziSection) {
            const rect = serviziSection.getBoundingClientRect()
            const isVisible = rect.top <= 150 && rect.bottom >= 100
            const currentHash = window.location.hash
            
            if (isVisible && currentHash !== "#servizi") {
              window.history.replaceState(null, "", "/#servizi")
              setHash("#servizi")
            } else if (!isVisible && currentHash === "#servizi" && window.scrollY < serviziSection.offsetTop - 200) {
              window.history.replaceState(null, "", "/")
              setHash("")
            }
          }
        }, 100)
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") {
      // Home is active only if we're on homepage AND not on servizi section
      return pathname === "/" && hash !== "#servizi"
    }
    // Handle anchor links
    if (href.startsWith("/#")) {
      const anchor = href.substring(1)
      return pathname === "/" && hash === anchor
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          aria-label="Nautica Fuorigiri - Torna alla home"
        >
          <motion.div
            className="relative h-10 w-10 sm:h-12 sm:w-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/logo.png"
              alt="Logo Nautica Fuorigiri"
              fill
              sizes="48px"
              className="object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.35)]"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-1"
          aria-label="Navigazione principale"
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault()
                    const anchor = item.href.substring(1)
                    if (pathname !== "/") {
                      window.location.href = item.href
                    } else {
                      const element = document.querySelector(anchor)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                    }
                  }
                }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm ${
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                aria-label={`Vai alla pagina ${item.name}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {!isActive(item.href) && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Apri menu di navigazione"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px]"
            id="mobile-navigation"
          >
            <SheetHeader className="space-y-4">
              <motion.div
                className="relative h-10 w-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo Nautica Fuorigiri"
                  fill
                  sizes="40px"
                  className="object-contain drop-shadow-[0_0_12px_rgba(37,99,235,0.35)]"
                />
              </motion.div>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-col space-y-2 mt-8"
              aria-label="Navigazione mobile"
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("/#")) {
                        e.preventDefault()
                        const anchor = item.href.substring(1)
                        setOpen(false)
                        if (pathname !== "/") {
                          window.location.href = item.href
                        } else {
                          setTimeout(() => {
                            const element = document.querySelector(anchor)
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth", block: "start" })
                            }
                          }, 100)
                        }
                      } else {
                        setOpen(false)
                      }
                    }}
                    className={`block text-base font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm py-3 px-4 ${
                      isActive(item.href)
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    }`}
                    aria-label={`Vai alla pagina ${item.name}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
