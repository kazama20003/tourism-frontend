import { api } from "@/lib/api"
import type { Tour, CreateTourDto, UpdateTourDto, UpdateTourTranslationDto, PaginatedResponse } from "@/types/tour"

export const toursService = {
  // GET /tours?lang=XX&page=X&limit=Y
  async getTours(page = 1, limit = 10, lang?: string) {
    const response = await api.get<PaginatedResponse<Tour>>("/tours", {
      params: { lang, page, limit },
    })
    return response.data
  },

  // GET /tours/popular?lang=XX
  async getPopularTours(lang?: string) {
    const response = await api.get<Tour[]>("/tours/popular", {
      params: lang ? { lang } : {},
    })
    return response.data
  },

  // GET /tours/slug/:slug?lang=XX
  async getTourBySlug(slug: string, lang?: string) {
    const response = await api.get<Tour>(`/tours/slug/${slug}`, {
      params: lang ? { lang } : {},
    })
    return response.data
  },

  // GET /tours/:id?lang=XX
  async getTourById(id: string, lang?: string) {
    const response = await api.get<Tour>(`/tours/${id}`, {
      params: lang ? { lang } : {},
    })
    return response.data
  },

  // POST /tours
  async createTour(data: CreateTourDto) {
    const response = await api.post<Tour>("/tours", data)
    return response.data
  },

  // PATCH /tours/:id
  async updateTour(id: string, data: UpdateTourDto) {
    const response = await api.patch<Tour>(`/tours/${id}`, data)
    return response.data
  },

  // DELETE /tours/:id
  async deleteTour(id: string) {
    const response = await api.delete<{ message: string }>(`/tours/${id}`)
    return response.data
  },

  // POST /tours/:id/auto-translate
  async autoTranslateTour(id: string, langs: string[]) {
    const response = await api.post<{ message: string }>(`/tours/${id}/auto-translate`, { langs })
    return response.data
  },

  // PATCH /tours/:id/translation/:lang
  async updateTourTranslation(id: string, lang: string, data: UpdateTourTranslationDto) {
    const response = await api.patch<Tour>(`/tours/${id}/translation/${lang}`, data)
    return response.data
  },
}
