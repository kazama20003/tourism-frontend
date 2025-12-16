"use client"

import useSWR, { mutate } from "swr"
import useSWRMutation from "swr/mutation"
import { authService } from "@/services/auth-service"
import type { User, UpdateUserDto } from "@/types/user"
import type { LoginDto, RegisterDto } from "@/types/auth"
import { useRouter } from "next/navigation"

const PROFILE_KEY = "auth-profile"

// Fetch del perfil autenticado
const fetchProfile = async () => {
  return authService.getProfile()
}

// Hook para obtener el perfil del usuario autenticado
export function useProfile() {
  return useSWR<User>(PROFILE_KEY, fetchProfile, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })
}

// Revalidar el perfil manualmente
export function revalidateProfile() {
  mutate(PROFILE_KEY)
}

// Hook para actualizar el perfil
export function useUpdateProfile() {
  return useSWRMutation(PROFILE_KEY, async (_, { arg }: { arg: { id: string; data: UpdateUserDto } }) => {
    const result = await authService.updateProfile(arg.id, arg.data)
    revalidateProfile()
    return result
  })
}

export function useLogin() {
  const router = useRouter()

  return useSWRMutation(
    "auth-login",
    async (_, { arg }: { arg: LoginDto }) => {
      const result = await authService.loginLocal(arg)
      // Revalidar el perfil después del login
      revalidateProfile()
      return result
    },
    {
      onSuccess: () => {
        // Redirigir al home después del login exitoso
        router.push("/")
      },
    },
  )
}

export function useRegister() {
  const router = useRouter()

  return useSWRMutation(
    "auth-register",
    async (_, { arg }: { arg: RegisterDto }) => {
      // Add authProvider: 'LOCAL' for local registration
      const registerData = {
        ...arg,
        authProvider: "LOCAL" as const,
      }
      const result = await authService.register(registerData)
      // Revalidar el perfil después del registro
      revalidateProfile()
      return result
    },
    {
      onSuccess: () => {
        // Redirigir al home después del registro exitoso
        router.push("/")
      },
    },
  )
}

export function useLogout() {
  const router = useRouter()

  return useSWRMutation(
    "auth-logout",
    async () => {
      // Llamar al servicio logout que usa el api client correcto (puerto 4001)
      await authService.logout()

      // Limpiar el caché del perfil
      mutate(PROFILE_KEY, null, false)

      // Limpiar localStorage
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    },
    {
      onSuccess: () => {
        // Redirigir al login después del logout exitoso
        router.push("/login")
      },
    },
  )
}
