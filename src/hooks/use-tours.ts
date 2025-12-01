"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toursService } from "@/services/tours-service"
import type { UpdateTourDto } from "@/types/tour"

export function useTours(page?: number, limit?: number, lang?: string) {
  return useQuery({
    queryKey: ["tours", page ?? 1, limit ?? 10, lang],
    queryFn: () => toursService.getTours(page ?? 1, limit ?? 10, lang),
  })
}

export function useTour(id: string, lang?: string) {
  return useQuery({
    queryKey: ["tours", id, lang],
    queryFn: () => toursService.getTourById(id, lang),
  })
}

export function useCreateTour() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: toursService.createTour,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tours"] })
    },
  })
}

export function useUpdateTour() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTourDto }) => toursService.updateTour(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["tours"] })
      queryClient.invalidateQueries({ queryKey: ["tours", id] })
    },
  })
}

export function useDeleteTour() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: toursService.deleteTour,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tours"] })
    },
  })
}

export function useAutoTranslateTour() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, languages }: { id: string; languages: string[] }) =>
      toursService.autoTranslateTour(id, languages),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["tours"] })
      queryClient.invalidateQueries({ queryKey: ["tours", id] })
    },
  })
}

export function useUpdateTourTranslation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      id,
      lang,
      data,
    }: {
      id: string
      lang: string
      data: Partial<Record<string, unknown>>
    }) => toursService.updateTourTranslation(id, lang, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["tours"] })
      queryClient.invalidateQueries({ queryKey: ["tours", id] })
    },
  })
}
