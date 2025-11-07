"use client"

import { motion, type HTMLMotionProps, type Variants } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

// Fade in animation variants
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Stagger container for children
const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Slide in from bottom
const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Scale in animation
const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Fade in component
export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: {
  children: ReactNode
  delay?: number
  className?: string
} & HTMLMotionProps<"div">) {
  const pathname = usePathname()
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prev) => prev + 1)
  }, [pathname])

  return (
    <motion.div
      key={key}
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Stagger container
export function StaggerContainer({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
} & HTMLMotionProps<"div">) {
  const pathname = usePathname()
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prev) => prev + 1)
  }, [pathname])

  return (
    <motion.div
      key={key}
      initial="hidden"
      animate="visible"
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide up component
export function SlideUp({
  children,
  delay = 0,
  className,
  ...props
}: {
  children: ReactNode
  delay?: number
  className?: string
} & HTMLMotionProps<"div">) {
  const pathname = usePathname()
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prev) => prev + 1)
  }, [pathname])

  return (
    <motion.div
      key={key}
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Scale in component
export function ScaleIn({
  children,
  delay = 0,
  className,
  ...props
}: {
  children: ReactNode
  delay?: number
  className?: string
} & HTMLMotionProps<"div">) {
  const pathname = usePathname()
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prev) => prev + 1)
  }, [pathname])

  return (
    <motion.div
      key={key}
      initial="hidden"
      animate="visible"
      variants={scaleInVariants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Hover lift effect
export function HoverLift({
  children,
  className,
  ...props
}: {
  children: ReactNode
  className?: string
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

