import { z } from "zod"

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Il nome deve contenere almeno 2 caratteri")
    .max(100, "Il nome non può superare i 100 caratteri")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Il nome può contenere solo lettere, spazi, apostrofi e trattini"),
  email: z
    .string()
    .min(1, "L'email è obbligatoria")
    .email("Inserisci un indirizzo email valido")
    .max(255, "L'email non può superare i 255 caratteri"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\+\-\(\)]+$/.test(val),
      "Il numero di telefono contiene caratteri non validi"
    ),
  message: z
    .string()
    .min(10, "Il messaggio deve contenere almeno 10 caratteri")
    .max(1000, "Il messaggio non può superare i 1000 caratteri"),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, "Devi accettare l'informativa sulla privacy per procedere"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

