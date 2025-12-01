"use client"

import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryOptions,
  type UseMutationOptions,
} from "@tanstack/react-query"
import { api } from "@/lib/api"

export function useApiQuery<T>(
  key: string[],
  endpoint: string,
  options?: Omit<UseQueryOptions<T, Error>, "queryKey" | "queryFn">,
) {
  return useQuery<T, Error>({
    queryKey: key,
    queryFn: () => api.get<T>(endpoint).then((res) => res.data),
    ...options,
  })
}

type MutationMethod = "post" | "put" | "patch" | "delete"

export function useApiMutation<TData, TVariables, TContext = unknown>(
  method: MutationMethod,
  endpoint: string | ((variables: TVariables) => string),
  options?: Omit<UseMutationOptions<TData, Error, TVariables, TContext>, "mutationFn"> & {
    invalidateKeys?: string[][]
  },
) {
  const queryClient = useQueryClient()
  const { invalidateKeys, ...mutationOptions } = options || {}

  return useMutation<TData, Error, TVariables, TContext>({
    mutationFn: async (variables) => {
      const url = typeof endpoint === "function" ? endpoint(variables) : endpoint
      switch (method) {
        case "post":
          return api.post<TData>(url, variables).then((res) => res.data)
        case "put":
          return api.put<TData>(url, variables).then((res) => res.data)
        case "patch":
          return api.patch<TData>(url, variables).then((res) => res.data)
        case "delete":
          return api.delete<TData>(url).then((res) => res.data)
      }
    },
    onSuccess: (data, variables, context, meta) => {
      if (invalidateKeys) {
        invalidateKeys.forEach((key) => {
          queryClient.invalidateQueries({ queryKey: key })
        })
      }
      if (mutationOptions?.onSuccess) {
        mutationOptions.onSuccess(data, variables, context, meta)
      }
    },
    ...mutationOptions,
  })
}

export const useGet = useApiQuery

export function usePost<TData, TVariables>(
  endpoint: string | ((variables: TVariables) => string),
  options?: Parameters<typeof useApiMutation<TData, TVariables>>[2],
) {
  return useApiMutation<TData, TVariables>("post", endpoint, options)
}

export function usePut<TData, TVariables>(
  endpoint: string | ((variables: TVariables) => string),
  options?: Parameters<typeof useApiMutation<TData, TVariables>>[2],
) {
  return useApiMutation<TData, TVariables>("put", endpoint, options)
}

export function usePatch<TData, TVariables>(
  endpoint: string | ((variables: TVariables) => string),
  options?: Parameters<typeof useApiMutation<TData, TVariables>>[2],
) {
  return useApiMutation<TData, TVariables>("patch", endpoint, options)
}

export function useDelete<TData, TVariables = void>(
  endpoint: string | ((variables: TVariables) => string),
  options?: Parameters<typeof useApiMutation<TData, TVariables>>[2],
) {
  return useApiMutation<TData, TVariables>("delete", endpoint, options)
}
