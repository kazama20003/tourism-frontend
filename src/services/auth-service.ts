import { api } from "@/lib/api"
import type { AuthResponse, LoginCredentials } from "@/types/auth"
import type { User, UpdateUserDto } from "@/types/user"

interface CreateUserDto {
  firstName: string
  lastName: string
  email: string
  authProvider: "LOCAL" | "GOOGLE" | "FACEBOOK"
  password?: string
  externalId?: string
  roles?: string[]
  country?: string
  phone?: string
  address?: string
  documentType?: string
  documentNumber?: string
}

export const authService = {
  // POST /auth/register - Registra un usuario local y devuelve JWT guardado en cookie HttpOnly
  async register(data: CreateUserDto) {
    const response = await api.post<AuthResponse>("/auth/register", data)
    return response.data
  },

  // POST /auth/login/local - Login con email/contraseña, genera JWT y lo guarda en cookie HttpOnly
  async loginLocal(credentials: LoginCredentials) {
    const response = await api.post<AuthResponse>("/auth/login/local", credentials)
    return response.data
  },

  // GET /auth/profile - Devuelve el perfil del usuario autenticado (requiere JWT válido)
  async getProfile() {
    const response = await api.get<User>("/auth/profile")
    return response.data
  },

  // PATCH /auth/:id - Actualiza el perfil del usuario autenticado
  async updateProfile(id: string, data: UpdateUserDto) {
    const response = await api.patch<User>(`/auth/${id}`, data)
    return response.data
  },

  // POST /auth/logout - Elimina la cookie JWT del navegador
  async logout() {
    const response = await api.post("/auth/logout")

    return response.data
  },

  // OAuth URLs
  getGoogleAuthUrl() {
    return `${api.defaults.baseURL}/auth/google`
  },

  getGoogleRedirectUrl() {
    return `${api.defaults.baseURL}/auth/google/redirect`
  },

  getFacebookAuthUrl() {
    return `${api.defaults.baseURL}/auth/facebook`
  },

  getFacebookRedirectUrl() {
    return `${api.defaults.baseURL}/auth/facebook/redirect`
  },
}
