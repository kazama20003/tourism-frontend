export enum UserRole {
  CLIENT = "CLIENT",
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  SUPPORT = "SUPPORT",
}

export interface JwtPayload {
  email: string
  sub: string
  roles: UserRole[]
  iat: number
  exp: number
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  name: string
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  user: {
    id: string
    email: string
    firstName: string
    roles: UserRole[]
  }
}
