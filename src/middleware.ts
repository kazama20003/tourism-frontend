import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { UserRole } from "@/types/auth"

// Rutas públicas que no requieren autenticación
const publicRoutes = ["/login", "/register", "/forgot-password"]

// Decodifica el JWT sin verificar la firma
function decodeJwtPayload(token: string) {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    const jsonPayload = Buffer.from(base64, "base64").toString("utf-8")
    return JSON.parse(jsonPayload)
  } catch {
    return null
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Obtener el token de las cookies
  const token = request.cookies.get("token")?.value

  // Si es ruta pública y tiene token, redirigir según rol
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    if (token) {
      const payload = decodeJwtPayload(token)
      if (payload && payload.roles) {
        const roles = payload.roles as UserRole[]

        // CLIENT va a /users/profile
        if (
          roles.includes(UserRole.CLIENT) &&
          !roles.some((r) => [UserRole.ADMIN, UserRole.EDITOR, UserRole.SUPPORT].includes(r))
        ) {
          return NextResponse.redirect(new URL("/users/profile", request.url))
        }

        // ADMIN, EDITOR, SUPPORT van a /dashboard
        if (roles.some((r) => [UserRole.ADMIN, UserRole.EDITOR, UserRole.SUPPORT].includes(r))) {
          return NextResponse.redirect(new URL("/dashboard", request.url))
        }
      }
    }
    return NextResponse.next()
  }

  // Rutas protegidas: verificar autenticación
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  const payload = decodeJwtPayload(token)

  if (!payload) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Verificar expiración del token
  if (Date.now() >= payload.exp * 1000) {
    const response = NextResponse.redirect(new URL("/login", request.url))
    response.cookies.delete("token")
    return response
  }

  const roles = payload.roles as UserRole[]

  // Redirección según rol para rutas específicas
  if (pathname.startsWith("/dashboard")) {
    // Solo ADMIN, EDITOR, SUPPORT pueden acceder al dashboard
    if (
      roles.includes(UserRole.CLIENT) &&
      !roles.some((r) => [UserRole.ADMIN, UserRole.EDITOR, UserRole.SUPPORT].includes(r))
    ) {
      return NextResponse.redirect(new URL("/users/profile", request.url))
    }
  }

  if (pathname.startsWith("/users/profile")) {
    // ADMIN, EDITOR, SUPPORT se redirigen al dashboard
    if (
      roles.some((r) => [UserRole.ADMIN, UserRole.EDITOR, UserRole.SUPPORT].includes(r)) &&
      !roles.includes(UserRole.CLIENT)
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/login", "/register", "/forgot-password", "/dashboard/:path*", "/users/:path*"],
}
