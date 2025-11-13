"use client"

import type React from "react"

import { SidebarInset } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, User, Mail, Lock, Shield, Loader2, Save } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { usersService } from "@/services/users-service"
import type { User as UserType, UpdateUserDto, UserRole, AuthProvider } from "@/types/user"
import { toast } from "sonner"
import { PhoneInput } from "@/components/global/phone-input"
export default function EditUserPage() {
  const router = useRouter()
  const params = useParams()
  const userId = params.id as string

  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [user, setUser] = useState<UserType | null>(null)
  const [formData, setFormData] = useState<UpdateUserDto>({
    fullName: "",
    email: "",
    role: undefined,
    authProvider: undefined,
    phone: "",
    country: "",
  })

  useEffect(() => {
    loadUser()
  }, [userId])

  const loadUser = async () => {
    try {
      setLoading(true)
      const userData = await usersService.getUserById(userId)
      setUser(userData)
      setFormData({
        fullName: userData.fullName,
        email: userData.email,
        role: userData.role,
        authProvider: userData.authProvider,
        phone: userData.phone || "",
        country: userData.country || "",
      })
    } catch (error) {
      console.error("[v0] Error loading user:", error)
      toast.error("Error al cargar el usuario")
      router.push("/dashboard/users")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.email) {
      toast.error("Por favor completa los campos requeridos")
      return
    }

    try {
      setSubmitting(true)
      await usersService.updateUser(userId, formData)
      toast.success("Usuario actualizado correctamente")
      router.push("/dashboard/users")
    } catch (error) {
      console.error("[v0] Error updating user:", error)
      toast.error("Error al actualizar el usuario")
    } finally {
      setSubmitting(false)
    }
  }

  const handlePhoneChange = (phone: string, country: string) => {
    setFormData((prev) => ({
      ...prev,
      phone,
      country,
    }))
  }

  if (loading) {
    return (
      <SidebarInset>
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </SidebarInset>
    )
  }

  return (
    <SidebarInset>
      <div className="m-4 rounded-lg overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-t-lg px-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Editar Usuario</h1>
            <p className="text-sm text-muted-foreground">Actualiza la información del usuario</p>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-6 p-4 md:p-6 bg-background/50 backdrop-blur rounded-b-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Datos Personales
                </CardTitle>
                <CardDescription>Información básica del usuario</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">
                      Nombre Completo <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="fullName"
                        placeholder="Ej: Juan Pérez"
                        className="pl-9"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="correo@ejemplo.com"
                        className="pl-9"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <PhoneInput
                    value={formData.phone || ""}
                    onChange={handlePhoneChange}
                    placeholder="Ingresa tu número de teléfono"
                  />
                  <p className="text-xs text-muted-foreground">Selecciona tu país e ingresa tu número de teléfono</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">País</Label>
                  <Input
                    id="country"
                    value={formData.country || ""}
                    readOnly
                    className="bg-muted/50"
                    placeholder="Se llenará automáticamente al seleccionar el país en el teléfono"
                  />
                  <p className="text-xs text-muted-foreground">
                    Este campo se actualiza automáticamente según el país seleccionado en el teléfono
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Seguridad y Acceso
                </CardTitle>
                <CardDescription>Configuración de rol y autenticación</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role">Rol del Usuario</Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value) => setFormData({ ...formData, role: value as UserRole })}
                    >
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Selecciona un rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">Usuario</SelectItem>
                        <SelectItem value="admin">Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Define los permisos y accesos del usuario en el sistema
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authProvider">Proveedor de Autenticación</Label>
                    <Select
                      value={formData.authProvider}
                      onValueChange={(value) => setFormData({ ...formData, authProvider: value as AuthProvider })}
                    >
                      <SelectTrigger id="authProvider">
                        <SelectValue placeholder="Selecciona un proveedor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local (Email/Password)</SelectItem>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Método de autenticación utilizado por el usuario</p>
                  </div>
                </div>

                {formData.authProvider === "local" && (
                  <div className="space-y-2">
                    <Label htmlFor="password">Nueva Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Dejar en blanco para mantener la actual"
                        className="pl-9"
                        value={formData.password || ""}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Solo completa este campo si deseas cambiar la contraseña
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end">
              <Button type="button" variant="outline" onClick={() => router.back()} disabled={submitting}>
                Cancelar
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Guardando...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Guardar Cambios
                  </>
                )}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </SidebarInset>
  )
}
