"use client"

import { useEffect, useState, useCallback } from "react"
import useSWR from "swr"
import { cartService } from "@/services/cart-service"
import type { Cart, CreateCartItemDto, CartItem } from "@/types/cart"
import { v4 as uuidv4 } from "uuid"

const CART_SESSION_KEY = "cart_session_id"

// Genera o recupera el sessionId
const getOrCreateSessionId = (): string => {
  if (typeof window === "undefined") return ""

  let sessionId = localStorage.getItem(CART_SESSION_KEY)
  if (!sessionId) {
    sessionId = uuidv4()
    localStorage.setItem(CART_SESSION_KEY, sessionId)
  }
  return sessionId
}

// Elimina el sessionId del localStorage
const clearSessionId = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CART_SESSION_KEY)
  }
}

const extractProductId = (productId: CartItem["productId"]): string => {
  if (typeof productId === "string") {
    return productId
  }
  return productId._id
}

const sanitizeCartItem = (item: CartItem): CreateCartItemDto => {
  const sanitized: CreateCartItemDto = {
    productId: extractProductId(item.productId),
    productType: item.productType,
    unitPrice: item.unitPrice,
    totalPrice: item.totalPrice,
  }

  // Solo incluir campos opcionales si existen
  if (item.travelDate) sanitized.travelDate = item.travelDate
  if (item.adults !== undefined) sanitized.adults = item.adults
  if (item.children !== undefined) sanitized.children = item.children
  if (item.infants !== undefined) sanitized.infants = item.infants
  if (item.appliedOfferId) sanitized.appliedOfferId = item.appliedOfferId
  if (item.notes) sanitized.notes = item.notes

  return sanitized
}

export function useCart() {
  const [sessionId, setSessionId] = useState<string>("")

  useEffect(() => {
    setSessionId(getOrCreateSessionId())
  }, [])

  const {
    data: cart,
    error,
    mutate,
    isLoading,
  } = useSWR<Cart | null>(sessionId ? ["cart", sessionId] : null, () => cartService.getCurrentCart(sessionId), {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  // Agregar item al carrito
  const addItem = useCallback(
    async (item: CreateCartItemDto) => {
      try {
        console.log("[v0] Adding item to cart:", item)

        if (!cart) {
          // Crear nuevo carrito con el item
          const newCart = await cartService.createCart({
            sessionId,
            items: [item],
          })
          mutate(newCart, false)
          return newCart
        } else {
          const existingItems = cart.items.map(sanitizeCartItem)
          const updatedItems = [...existingItems, item]

          console.log("[v0] Updating cart with sanitized items:", updatedItems)

          const updatedCart = await cartService.updateCart(cart._id, {
            items: updatedItems,
          })
          mutate(updatedCart, false)
          return updatedCart
        }
      } catch (error) {
        console.error("[v0] Error adding item to cart:", error)
        throw error
      }
    },
    [cart, sessionId, mutate],
  )

  // Remover item del carrito
  const removeItem = useCallback(
    async (productId: string) => {
      if (!cart) return

      try {
        const updatedItems = cart.items
          .filter((item) => extractProductId(item.productId) !== productId)
          .map(sanitizeCartItem)

        // Si no quedan items, eliminar el carrito y el sessionId
        if (updatedItems.length === 0) {
          await cartService.deleteCart(cart._id)
          clearSessionId()
          setSessionId(getOrCreateSessionId())
          mutate(null, false)
        } else {
          const updatedCart = await cartService.updateCart(cart._id, {
            items: updatedItems,
          })
          mutate(updatedCart, false)
        }
      } catch (error) {
        console.error("[v0] Error removing item from cart:", error)
        throw error
      }
    },
    [cart, mutate],
  )

  // Actualizar cantidad de un item
  const updateItem = useCallback(
    async (productId: string, updates: Partial<CreateCartItemDto>) => {
      if (!cart) return

      try {
        const updatedItems = cart.items
          .map((item) => (extractProductId(item.productId) === productId ? { ...item, ...updates } : item))
          .map(sanitizeCartItem)

        const updatedCart = await cartService.updateCart(cart._id, {
          items: updatedItems,
        })
        mutate(updatedCart, false)
        return updatedCart
      } catch (error) {
        console.error("[v0] Error updating item in cart:", error)
        throw error
      }
    },
    [cart, mutate],
  )

  // Limpiar carrito
  const clearCart = useCallback(async () => {
    if (!cart) return

    try {
      await cartService.deleteCart(cart._id)
      clearSessionId()
      setSessionId(getOrCreateSessionId())
      mutate(null, false)
    } catch (error) {
      console.error("[v0] Error clearing cart:", error)
      throw error
    }
  }, [cart, mutate])

  return {
    cart,
    isLoading,
    error,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    itemCount: cart?.items?.length ?? 0,
    totalPrice: cart?.totalPrice ?? 0,
  }
}
