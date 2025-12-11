import useSWR, { mutate } from "swr"
import useSWRMutation from "swr/mutation"
import { transportsService } from "@/services/transports-service"
import type { CreateTransportDto, UpdateTransportDto } from "@/types/transport"

const TRANSPORTS_KEY = "transports-list"

const fetchTransports = async ([, page, limit, lang]: [string, number, number, string]) => {
  return transportsService.getTransports(page, limit, lang)
}

export function useTransports(page = 1, limit = 10, lang = "es") {
  return useSWR([TRANSPORTS_KEY, page, limit, lang], fetchTransports, {
    revalidateOnFocus: false,
  })
}

export function useTransport(id: string | null) {
  return useSWR(
    id ? ["transport", id] : null,
    async ([, transportId]) => transportsService.getTransportById(transportId),
    { revalidateOnFocus: false },
  )
}

export function revalidateTransports() {
  mutate((key) => Array.isArray(key) && key[0] === TRANSPORTS_KEY, undefined, {
    revalidate: true,
  })
}

export function useCreateTransport() {
  return useSWRMutation("createTransport", async (_, { arg }: { arg: CreateTransportDto }) => {
    const result = await transportsService.createTransport(arg)
    revalidateTransports()
    return result
  })
}

export function useUpdateTransport() {
  return useSWRMutation("updateTransport", async (_, { arg }: { arg: { id: string; data: UpdateTransportDto } }) => {
    const result = await transportsService.updateTransport(arg.id, arg.data)
    revalidateTransports()
    return result
  })
}

export function useDeleteTransport() {
  return useSWRMutation("deleteTransport", async (_, { arg }: { arg: string }) => {
    const result = await transportsService.deleteTransport(arg)
    revalidateTransports()
    return result
  })
}
