"use client"

import { useEffect, useState, useCallback } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { cartService } from "@/services/cart-service"
import type { Cart, CreateCartItemDto, CartItem } from "@/types/cart"
import { v4 as uuidv4 } from "uuid"

const CART_SESSION_KEY = "cart_session_id"
const CART_KEY = "cart"

// =======================================================
// Helpers
// =======================================================

const getOrCreateSessionId = (): string => {
  if (typeof window === "undefined") return ""

  let sessionId = localStorage.getItem(CART_SESSION_KEY)
  if (!sessionId) {
    sessionId = uuidv4()
    localStorage.setItem(CART_SESSION_KEY, sessionId)
  }
  return sessionId
}

const clearSessionId = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CART_SESSION_KEY)
  }
}

const extractProductId = (productId: CartItem["productId"]): string => {
  return typeof productId === "string" ? productId : productId._id
}

const sanitizeCartItem = (item: CartItem): CreateCartItemDto => {
  const sanitized: CreateCartItemDto = {
    productId: extractProductId(item.productId),
    productType: item.productType,
    unitPrice: item.unitPrice,
    totalPrice: item.totalPrice,
  }

  if (item.travelDate) sanitized.travelDate = item.travelDate
  if (item.adults !== undefined) sanitized.adults = item.adults
  if (item.children !== undefined) sanitized.children = item.children
  if (item.infants !== undefined) sanitized.infants = item.infants
  if (item.appliedOfferId) sanitized.appliedOfferId = item.appliedOfferId
  if (item.notes) sanitized.notes = item.notes

  return sanitized
}

// =======================================================
// Hook principal
// =======================================================

export function useCart() {
  const [sessionId, setSessionId] = useState<string>("")
  const queryClient = useQueryClient()

  useEffect(() => {
    setSessionId(getOrCreateSessionId())
  }, [])

  const { data: cart, isLoading, error } = useQuery<Cart | null>({
    queryKey: [CART_KEY, sessionId],
    queryFn: () => cartService.getCurrentCart(sessionId),
    enabled: !!sessionId,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })

  // =======================================================
  // Helper: invalidar todas las queries relacionadas
  // =======================================================

  const invalidateCartQueries = () => {
    queryClient.invalidateQueries({ queryKey: [CART_KEY] })
    queryClient.invalidateQueries({ queryKey: [CART_KEY, sessionId] })
  }

  // =======================================================
  // MUTATIONS
  // =======================================================

  // ADD ITEM
  const addItemMutation = useMutation({
    mutationFn: async (item: CreateCartItemDto) => {
      const currentCart = queryClient.getQueryData<Cart | null>([CART_KEY, sessionId])

      if (!currentCart) {
        return cartService.createCart({
          sessionId,
          items: [item],
        })
      }

      const sanitized = currentCart.items.map(sanitizeCartItem)
      return cartService.updateCart(currentCart._id, {
        items: [...sanitized, item],
      })
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData([CART_KEY, sessionId], updatedCart)
      invalidateCartQueries()
    },
  })

  // REMOVE ITEM
  const removeItemMutation = useMutation({
    mutationFn: async (productId: string) => {
      const currentCart = queryClient.getQueryData<Cart | null>([CART_KEY, sessionId])
      if (!currentCart) throw new Error("No cart found")

      const updatedItems = currentCart.items
        .filter((item) => extractProductId(item.productId) !== productId)
        .map(sanitizeCartItem)

      if (updatedItems.length === 0) {
        await cartService.deleteCart(currentCart._id)
        clearSessionId()
        setSessionId(getOrCreateSessionId())
        return null
      }

      return cartService.updateCart(currentCart._id, { items: updatedItems })
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData([CART_KEY, sessionId], updatedCart)
      invalidateCartQueries()
    },
  })

  // UPDATE ITEM
  const updateItemMutation = useMutation({
    mutationFn: async ({ productId, updates }: { productId: string; updates: Partial<CreateCartItemDto> }) => {
      const currentCart = queryClient.getQueryData<Cart | null>([CART_KEY, sessionId])
      if (!currentCart) throw new Error("No cart found")

      const updatedItems = currentCart.items
        .map((item) =>
          extractProductId(item.productId) === productId ? { ...item, ...updates } : item,
        )
        .map(sanitizeCartItem)

      return cartService.updateCart(currentCart._id, { items: updatedItems })
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData([CART_KEY, sessionId], updatedCart)
      invalidateCartQueries()
    },
  })

  // CLEAR CART
  const clearCartMutation = useMutation({
    mutationFn: async () => {
      const currentCart = queryClient.getQueryData<Cart | null>([CART_KEY, sessionId])
      if (!currentCart) throw new Error("No cart found")

      await cartService.deleteCart(currentCart._id)
      clearSessionId()
      setSessionId(getOrCreateSessionId())
      return null
    },
    onSuccess: () => {
      queryClient.setQueryData([CART_KEY, sessionId], null)
      invalidateCartQueries()
    },
  })

  // =======================================================
  // API helpers expuestos
  // =======================================================

  const addItem = useCallback(
    (item: CreateCartItemDto) => addItemMutation.mutateAsync(item),
    [addItemMutation],
  )

  const removeItem = useCallback(
    (productId: string) => removeItemMutation.mutateAsync(productId),
    [removeItemMutation],
  )

  const updateItem = useCallback(
    (productId: string, updates: Partial<CreateCartItemDto>) =>
      updateItemMutation.mutateAsync({ productId, updates }),
    [updateItemMutation],
  )

  const clearCart = useCallback(
    () => clearCartMutation.mutateAsync(),
    [clearCartMutation],
  )

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
