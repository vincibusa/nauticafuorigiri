"use client"

import { useState, useEffect } from 'react'
import {
  getCookieConsent,
  setCookieConsent,
  hasCookieConsent,
  shouldShowCookieBanner,
  acceptNecessaryOnly,
  acceptAllCookies,
  withdrawConsent,
  canUseAnalytics,
  canUseMarketing,
  canUsePreferences,
  type CookieConsent
} from './cookie-utils'

export function useCookieConsent() {
  const [consent, setConsentState] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize consent state on mount
    const storedConsent = getCookieConsent()
    setConsentState(storedConsent)
    setShowBanner(shouldShowCookieBanner())
    setIsLoading(false)
  }, [])

  const updateConsent = (newConsent: Omit<CookieConsent, 'timestamp'>) => {
    setCookieConsent(newConsent)
    const updatedConsent = getCookieConsent()
    setConsentState(updatedConsent)
    setShowBanner(false)
  }

  const acceptAll = () => {
    acceptAllCookies()
    const updatedConsent = getCookieConsent()
    setConsentState(updatedConsent)
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    acceptNecessaryOnly()
    const updatedConsent = getCookieConsent()
    setConsentState(updatedConsent)
    setShowBanner(false)
  }

  const withdraw = () => {
    withdrawConsent()
    setConsentState(null)
    setShowBanner(true)
  }

  return {
    consent,
    showBanner,
    isLoading,
    hasConsent: hasCookieConsent(),
    canUseAnalytics: canUseAnalytics(),
    canUseMarketing: canUseMarketing(),
    canUsePreferences: canUsePreferences(),
    acceptAll,
    acceptNecessary,
    updateConsent,
    withdrawConsent: withdraw,
  }
}
