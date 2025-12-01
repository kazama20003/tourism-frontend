"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { usersService } from "@/services/users-service"
import type { UpdateUserDto } from "@/types/user"

export function useUsers(page?: number, limit?: number) {
  return useQuery({
    queryKey: ["users", page ?? 1, limit ?? 10],
    queryFn: () => usersService.getUsers(page ?? 1, limit ?? 10),
  })
}

export function useUser(id: string) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => usersService.getUserById(id),
  })
}

export function useCreateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: usersService.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })
}

export function useUpdateUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserDto }) => usersService.updateUser(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      queryClient.invalidateQueries({ queryKey: ["users", id] })
    },
  })
}

export function useDeleteUser() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: usersService.deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })
}
