import useSWR, { mutate } from "swr"
import useSWRMutation from "swr/mutation"
import { toursService } from "@/services/tours-service"
import type { CreateTourDto, UpdateTourDto, UpdateTourTranslationDto } from "@/types/tour"

const TOURS_KEY = "tours-list"
const POPULAR_TOURS_KEY = "tours-popular"

// Supported languages for translations
export const SUPPORTED_LANGUAGES = [
  { code: "es", name: "Español" },
  { code: "en", name: "Inglés" },
  { code: "fr", name: "Francés" },
  { code: "it", name: "Italiano" },
  { code: "de", name: "Alemán" },
  { code: "pt", name: "Portugués" },
  { code: "zh", name: "Chino" },
  { code: "ja", name: "Japonés" },
  { code: "ru", name: "Ruso" },
] as const

export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"]

export function isValidLanguageCode(code: string): code is SupportedLanguageCode {
  return SUPPORTED_LANGUAGES.some((lang) => lang.code === code)
}

// Fetcher para tours paginados
const fetchTours = async ([, page, limit, lang]: [string, number, number, string?]) =>
  toursService.getTours(page, limit, lang)

// ➤ Hook: Obtener tours paginados
export function useTours(page = 1, limit = 10, lang?: string) {
  return useSWR([TOURS_KEY, page, limit, lang], fetchTours, {
    revalidateOnFocus: false,
  })
}

// ➤ Hook: Obtener 1 tour por slug
export function useTourBySlug(slug: string | null, lang?: string) {
  return useSWR(
    slug ? ["tour-slug", slug, lang] : null,
    async ([, tourSlug, language]: [string, string, string?]) => toursService.getTourBySlug(tourSlug, language),
    { revalidateOnFocus: false },
  )
}

// ➤ Hook: Obtener 1 tour
export function useTour(id: string | null, lang?: string) {
  return useSWR(
    id ? ["tour", id, lang] : null,
    async ([, tourId]: [string, string]) => toursService.getTourById(tourId, lang),
    { revalidateOnFocus: false },
  )
}

// ➤ Hook: Obtener tours populares (DEVUELVE 4)
export function usePopularTours(lang?: string) {
  return useSWR([POPULAR_TOURS_KEY, lang], async () => toursService.getPopularTours(lang), { revalidateOnFocus: false })
}

// ➤ Revalidación global
export function revalidateTours() {
  mutate((key) => Array.isArray(key) && key[0] === TOURS_KEY, undefined, { revalidate: true })
  mutate((key) => Array.isArray(key) && key[0] === POPULAR_TOURS_KEY, undefined, { revalidate: true })
}

// ➤ Crear tour
export function useCreateTour() {
  return useSWRMutation("createTour", async (_, { arg }: { arg: CreateTourDto }) => {
    const result = await toursService.createTour(arg)
    revalidateTours()
    return result
  })
}

// ➤ Actualizar tour
export function useUpdateTour() {
  return useSWRMutation("updateTour", async (_, { arg }: { arg: { id: string; data: UpdateTourDto } }) => {
    const result = await toursService.updateTour(arg.id, arg.data)
    revalidateTours()
    return result
  })
}

// ➤ Eliminar tour
export function useDeleteTour() {
  return useSWRMutation("deleteTour", async (_, { arg }: { arg: string }) => {
    const result = await toursService.deleteTour(arg)
    revalidateTours()
    return result
  })
}

// ➤ Auto traducir tour
export function useAutoTranslateTour() {
  return useSWRMutation(
    "autoTranslateTour",
    async (_, { arg }: { arg: { id: string; languages: SupportedLanguageCode[] } }) => {
      const validLanguages = arg.languages.filter(isValidLanguageCode)
      if (!validLanguages.length) throw new Error("No valid languages provided")
      const result = await toursService.autoTranslateTour(arg.id, validLanguages)
      revalidateTours()
      return result
    },
  )
}

// ➤ Actualizar traducción
export function useUpdateTourTranslation() {
  return useSWRMutation(
    "updateTourTranslation",
    async (_, { arg }: { arg: { id: string; lang: SupportedLanguageCode; data: UpdateTourTranslationDto } }) => {
      const result = await toursService.updateTourTranslation(arg.id, arg.lang, arg.data)
      revalidateTours()
      return result
    },
  )
}
