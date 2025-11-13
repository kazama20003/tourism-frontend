// User types based on backend schema

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export enum AuthProvider {
  LOCAL = "local",
  GOOGLE = "google",
  FACEBOOK = "facebook",
}

export interface User {
  _id: string
  fullName: string
  email: string
  password?: string
  role: UserRole
  authProvider: AuthProvider
  phone?: string
  country?: string
  createdAt: string
  updatedAt: string
}

export interface CreateUserDto {
  fullName: string
  email: string
  password?: string
  role?: UserRole
  authProvider?: AuthProvider
  phone?: string
  country?: string
}

export interface UpdateUserDto {
  fullName?: string
  email?: string
  password?: string
  role?: UserRole
  authProvider?: AuthProvider
  phone?: string
  country?: string
}

export interface UserNameOnly {
  _id: string
  fullName: string
}

export interface UsersResponse {
  data: User[]
  message: string
  total?: number
  page?: number
  limit?: number
}
