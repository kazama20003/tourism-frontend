import { NextResponse } from "next/server";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";
import { UserRole } from "@/types/auth";

const publicRoutes = ["/login", "/register", "/forgot-password"];

function decodeJwtPayload(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = Buffer.from(base64, "base64").toString("utf-8");
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

function getLocaleFromPath(pathname) {
  const segments = pathname.split("/");
  return isValidLocale(segments[1]) ? segments[1] : null;
}

function getPathWithoutLocale(pathname) {
  const locale = getLocaleFromPath(pathname);
  return locale ? pathname.replace(`/${locale}`, "") || "/" : pathname;
}

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Skip static routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  const locale = getLocaleFromPath(pathname);
  const pathNoLocale = getPathWithoutLocale(pathname);

  // ------------------------------------
  // FIX: evitar loop /es ↔ /es/
  // ------------------------------------
  if (locale && (pathname === `/${locale}` || pathname === `/${locale}/`)) {
    return NextResponse.next();
  }

  // ------------------------------------
  // Si NO tiene locale, agregarlo
  // ------------------------------------
  if (!locale) {
    let chosen = defaultLocale;

    const lang = request.headers.get("accept-language");
    if (lang) {
      const preferred = lang.split(",")[0].split("-")[0];
      if (isValidLocale(preferred)) chosen = preferred;
    }

    const redirectUrl = new URL(`/${chosen}${pathname}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  // ------------------------------------
  // TOKEN HANDLING
  // ------------------------------------
  const token = request.cookies.get("token")?.value;
  const payload = token ? decodeJwtPayload(token) : null;

  const roles = payload?.roles ?? [];

  // ------------------------------------
  // Public routes
  // ------------------------------------
  if (publicRoutes.some((r) => pathNoLocale.startsWith(r))) {
    if (!payload) return NextResponse.next();

    if (!Array.isArray(roles)) return NextResponse.next();

    // CLIENT → profile
    if (
      roles.includes(UserRole.CLIENT) &&
      !roles.some((r) =>
        [UserRole.ADMIN, UserRole.EDITOR, UserRole.SUPPORT].includes(r)
      )
    ) {
      const redirectUrl = new URL(`/${locale}/users/profile`, request.url);
      return NextResponse.redirect(redirectUrl);
    }

    // ADMIN → dashboard
    if (
      roles.some((r) =>
        [UserRole.ADMIN, UserRole.EDITOR, UserRole.SUPPORT].includes(r)
      )
    ) {
      const redirectUrl = new URL(`/${locale}/dashboard`, request.url);
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  }

  // ------------------------------------
  // Protected routes
  // ------------------------------------
  const isProtected =
    pathNoLocale.startsWith("/dashboard") ||
    pathNoLocale.startsWith("/users");

  if (isProtected) {
    // NO TOKEN → login
    if (!token || !payload) {
      const redirectUrl = new URL(`/${locale}/login`, request.url);
      return NextResponse.redirect(redirectUrl);
    }

    // Token expirado
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      const response = NextResponse.redirect(
        new URL(`/${locale}/login`, request.url)
      );
      response.cookies.delete("token");
      return response;
    }

    // CLIENT queriendo entrar a dashboard
    if (
      pathNoLocale.startsWith("/dashboard") &&
      roles.includes(UserRole.CLIENT)
    ) {
      const redirectUrl = new URL(`/${locale}/users/profile`, request.url);
      return NextResponse.redirect(redirectUrl);
    }

    // ADMIN queriendo entrar a /users/profile sin ser CLIENT
    if (
      pathNoLocale.startsWith("/users/profile") &&
      roles.some((r) =>
        [UserRole.ADMIN, UserRole.EDITOR, UserRole.SUPPORT].includes(r)
      ) &&
      !roles.includes(UserRole.CLIENT)
    ) {
      const redirectUrl = new URL(`/${locale}/dashboard`, request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon|.*\\..*).*)"],
};
