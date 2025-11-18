// Cookie utilities for GDPR compliance
export type CookieConsent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
  timestamp: number
}

const CONSENT_KEY = 'cookie-consent'
const CONSENT_VERSION = '1.0'

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) return null

    const data = JSON.parse(stored)

    // Check if consent version matches
    if (data.version !== CONSENT_VERSION) {
      localStorage.removeItem(CONSENT_KEY)
      return null
    }

    return data.consent
  } catch (error) {
    console.error('Error reading cookie consent:', error)
    return null
  }
}

export function setCookieConsent(consent: Omit<CookieConsent, 'timestamp'>): void {
  if (typeof window === 'undefined') return

  try {
    const data = {
      version: CONSENT_VERSION,
      consent: {
        ...consent,
        timestamp: Date.now(),
      },
    }

    localStorage.setItem(CONSENT_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving cookie consent:', error)
  }
}

export function hasCookieConsent(): boolean {
  const consent = getCookieConsent()
  return consent !== null
}

export function canUseAnalytics(): boolean {
  const consent = getCookieConsent()
  return consent?.analytics === true
}

export function canUseMarketing(): boolean {
  const consent = getCookieConsent()
  return consent?.marketing === true
}

export function canUsePreferences(): boolean {
  const consent = getCookieConsent()
  return consent?.preferences === true
}

// Utility to check if we should show the cookie banner
export function shouldShowCookieBanner(): boolean {
  if (typeof window === 'undefined') return false
  return !hasCookieConsent()
}

// Set default consent (only necessary cookies)
export function acceptNecessaryOnly(): void {
  setCookieConsent({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  })
}

// Accept all cookies
export function acceptAllCookies(): void {
  setCookieConsent({
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true,
  })
}

// Withdraw consent
export function withdrawConsent(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(CONSENT_KEY)
}
