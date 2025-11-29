import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { JwtPayload, UserRole } from "@/types/auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function decodeToken(token: string): JwtPayload | null {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    )
    return JSON.parse(jsonPayload) as JwtPayload
  } catch {
    return null
  }
}

export function getRedirectByRole(roles: UserRole[]): string {
  if (roles.includes(UserRole.CLIENT)) {
    return "/users/profile"
  }
  return "/dashboard"
}
