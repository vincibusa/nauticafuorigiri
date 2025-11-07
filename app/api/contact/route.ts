import { NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations"
import { z } from "zod"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data
    const validatedData = contactFormSchema.parse(body)

    // Here you would typically:
    // 1. Send email using a service like Resend, SendGrid, etc.
    // 2. Save to database
    // 3. Send notification, etc.

    // For now, we'll just log it and return success
    console.log("Contact form submission:", validatedData)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: "Messaggio inviato con successo! Ti risponderemo il prima possibile.",
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Dati non validi",
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    console.error("Error processing contact form:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Si è verificato un errore durante l'invio del messaggio. Per favore, riprova più tardi.",
      },
      { status: 500 }
    )
  }
}

// Rate limiting helper (simple in-memory implementation)
// In production, use a proper rate limiting service like Upstash Rate Limit
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 1000 }) // 1 minute window
    return true
  }

  if (limit.count >= 5) {
    // Max 5 requests per minute
    return false
  }

  limit.count++
  return true
}

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  )
}

