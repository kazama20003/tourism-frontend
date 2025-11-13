"use client"

import type React from "react"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, ArrowLeft, Loader2, Mail, Lock, User, Shield } from "lucide-react"
import { PhoneInput } from "@/components/global/phone-input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { usersService } from "@/services/users-service"
import { UserRole, AuthProvider } from "@/types/user"
import type { CreateUserDto } from "@/types/user"
import { toast } from "sonner"

export default function NewUserPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<CreateUserDto>({
    fullName: "",
    email: "",
    password: "",
    role: UserRole.USER,
    authProvider: AuthProvider.LOCAL,
    phone: "",
    country: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!formData.fullName || !formData.email) {
      toast.error("Por favor completa los campos requeridos")
      return
    }

    // Si el proveedor es local, la contraseña es requerida
    if (formData.authProvider === AuthProvider.LOCAL && !formData.password) {
      toast.error("La contraseña es requerida para autenticación local")
      return
    }

    try {
      setLoading(true)

      // Preparar datos para enviar (eliminar campos vacíos opcionales)
      const dataToSend: CreateUserDto = {
        fullName: formData.fullName,
        email: formData.email,
        role: formData.role,
        authProvider: formData.authProvider,
      }

      if (formData.password) dataToSend.password = formData.password
      if (formData.phone) dataToSend.phone = formData.phone
      if (formData.country) dataToSend.country = formData.country

      await usersService.createUser(dataToSend)
      toast.success("Cliente creado correctamente")
      router.push("/dashboard/users")
    } catch (error) {
      console.error("[v0] Error creating user:", error)
      toast.error("Error al crear el cliente")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: keyof CreateUserDto, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePhoneChange = (phone: string, country: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: phone,
      country: country,
    }))
  }

  return (
    <SidebarInset>
      <div className="m-4 rounded-lg overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-t-lg">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => router.push("/dashboard/users")}
                  className="shrink-0 hover:bg-accent"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-xl font-semibold">Nuevo Cliente</h1>
                  <p className="text-sm text-muted-foreground">Crea un nuevo cliente en el sistema</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8 bg-background/50 backdrop-blur rounded-b-lg">
          <Card className="border-border/40 bg-card/50 backdrop-blur w-full">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <UserPlus className="h-6 w-6 text-primary" />
                Información del Cliente
              </CardTitle>
              <CardDescription className="text-base">
                Completa los datos del nuevo cliente. Los campos marcados con * son obligatorios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Datos Personales
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium">
                        Nombre Completo <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="fullName"
                          placeholder="Juan Pérez García"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Correo Electrónico <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="juan.perez@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-sm font-medium">
                        País
                      </Label>
                      <Input
                        id="country"
                        value={formData.country || ""}
                        readOnly
                        placeholder="Selecciona un país desde el teléfono"
                        className="bg-muted/50"
                      />
                      <p className="text-xs text-muted-foreground">
                        El país se selecciona automáticamente al elegir el código de teléfono
                      </p>
                    </div>

                    <div className="lg:col-span-2">
                      <PhoneInput
                        value={formData.phone}
                        country={formData.country || "US"}
                        onValueChange={handlePhoneChange}
                        label="Teléfono"
                        placeholder="Ingresa el número de teléfono"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Seguridad y Acceso
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-sm font-medium">
                        Rol del Usuario
                      </Label>
                      <Select value={formData.role} onValueChange={(value) => handleChange("role", value)}>
                        <SelectTrigger id="role" className="w-full">
                          <SelectValue placeholder="Selecciona un rol" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={UserRole.USER}>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>Usuario</span>
                            </div>
                          </SelectItem>
                          <SelectItem value={UserRole.ADMIN}>
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4" />
                              <span>Administrador</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Define los permisos del usuario en el sistema</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="authProvider" className="text-sm font-medium">
                        Método de Autenticación
                      </Label>
                      <Select
                        value={formData.authProvider}
                        onValueChange={(value) => handleChange("authProvider", value)}
                      >
                        <SelectTrigger id="authProvider" className="w-full">
                          <SelectValue placeholder="Selecciona un proveedor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={AuthProvider.LOCAL}>
                            <div className="flex items-center gap-2">
                              <Lock className="h-4 w-4" />
                              <span>Local (Email/Contraseña)</span>
                            </div>
                          </SelectItem>
                          <SelectItem value={AuthProvider.GOOGLE}>
                            <div className="flex items-center gap-2">
                              <svg className="h-4 w-4" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23s.43-3.45 1.18-4.93l3.66-2.84.81-.62z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                              </svg>
                              <span>Google</span>
                            </div>
                          </SelectItem>
                          <SelectItem value={AuthProvider.FACEBOOK}>
                            <div className="flex items-center gap-2">
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                              </svg>
                              <span>Facebook</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Cómo el usuario iniciará sesión en la plataforma</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Contraseña{" "}
                      {formData.authProvider === AuthProvider.LOCAL && <span className="text-destructive">*</span>}
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Mínimo 6 caracteres"
                        value={formData.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        required={formData.authProvider === AuthProvider.LOCAL}
                        minLength={6}
                        className="pl-10"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {formData.authProvider === AuthProvider.LOCAL
                        ? "Requerida para autenticación local. Debe tener al menos 6 caracteres."
                        : "Opcional para autenticación OAuth. El usuario puede establecerla más tarde."}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/dashboard/users")}
                    disabled={loading}
                    className="w-full sm:w-auto min-w-[140px]"
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={loading} className="w-full sm:w-auto min-w-[140px]">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creando...
                      </>
                    ) : (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Crear Cliente
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarInset>
  )
}
