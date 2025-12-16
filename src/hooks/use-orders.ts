import useSWR, { mutate } from "swr"
import useSWRMutation from "swr/mutation"
import { ordersService } from "@/services/orders-service"
import type { CreateOrderDto, UpdateOrderDto } from "@/types/order"

const ORDERS_KEY = "orders-list"

const fetchOrders = async ([, page, limit]: [string, number, number]) => {
  return ordersService.getOrders(page, limit)
}

export function useOrders(page = 1, limit = 10) {
  return useSWR([ORDERS_KEY, page, limit], fetchOrders, {
    revalidateOnFocus: false,
  })
}

export function useOrder(id: string | null) {
  return useSWR(
    id ? ["order", id] : null,
    async ([, orderId]: [string, string]) => ordersService.getOrderById(orderId),
    { revalidateOnFocus: false },
  )
}

export function useOrderByCode(code: string | null) {
  return useSWR(
    code ? ["order-code", code] : null,
    async ([, orderCode]: [string, string]) => ordersService.getOrderByCode(orderCode),
    { revalidateOnFocus: false },
  )
}

export function revalidateOrders() {
  mutate((key) => Array.isArray(key) && key[0] === ORDERS_KEY, undefined, { revalidate: true })
}

export function useCreateOrder() {
  return useSWRMutation("createOrder", async (_, { arg }: { arg: CreateOrderDto }) => {
    const result = await ordersService.createOrder(arg)
    revalidateOrders()
    return result
  })
}

export function useUpdateOrder() {
  return useSWRMutation("updateOrder", async (_, { arg }: { arg: { id: string; data: UpdateOrderDto } }) => {
    const result = await ordersService.updateOrder(arg.id, arg.data)
    revalidateOrders()
    return result
  })
}

export function useDeleteOrder() {
  return useSWRMutation("deleteOrder", async (_, { arg }: { arg: string }) => {
    const result = await ordersService.deleteOrder(arg)
    revalidateOrders()
    return result
  })
}

export function useMyOrders() {
  return useSWR("my-orders", () => ordersService.getMyOrders(), {
    revalidateOnFocus: false,
  })
}
