"use client"

import type React from "react"

import {  SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NewTransportPackagePage() {
  const [formData, setFormData] = useState({
    name: "",
    origin: "",
    destination: "",
    serviceType: "",
    price: "",
    duration: "",
    distance: "",
    capacity: "",
    description: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
      <SidebarInset>
        <div className="m-4 rounded-lg overflow-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-t-lg">
            <div className="flex items-center gap-2 px-4 w-full">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <Link href="/transporte">
                    <Button variant="ghost" size="icon">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                  <div>
                    <h1 className="text-xl font-semibold">Nuevo Paquete de Transporte</h1>
                    <p className="text-sm text-muted-foreground">Crea un nuevo servicio de transporte turístico</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="/transporte">
                    <Button variant="outline">Cancelar</Button>
                  </Link>
                  <Button onClick={handleSubmit}>
                    <Save className="h-4 w-4 mr-2" />
                    Guardar Paquete
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col gap-6 p-6 bg-background/50 backdrop-blur rounded-b-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <Card className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Información Básica</CardTitle>
                  <CardDescription>Detalles principales del paquete de transporte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre del Paquete *</Label>
                      <Input
                        id="name"
                        placeholder="Ej: Traslado Aeropuerto - Centro"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Tipo de Servicio *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange("serviceType", value)}
                      >
                        <SelectTrigger id="serviceType">
                          <SelectValue placeholder="Seleccionar tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basico">Básico</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="privado">Privado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe el servicio, incluye detalles importantes..."
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Route Information */}
              <Card className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Información de Ruta</CardTitle>
                  <CardDescription>Origen, destino y detalles del recorrido</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="origin">Punto de Origen *</Label>
                      <Input
                        id="origin"
                        placeholder="Ej: Aeropuerto Internacional"
                        value={formData.origin}
                        onChange={(e) => handleInputChange("origin", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Punto de Destino *</Label>
                      <Input
                        id="destination"
                        placeholder="Ej: Centro Ciudad"
                        value={formData.destination}
                        onChange={(e) => handleInputChange("destination", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="distance">Distancia</Label>
                      <Input
                        id="distance"
                        placeholder="Ej: 28 km"
                        value={formData.distance}
                        onChange={(e) => handleInputChange("distance", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duración Estimada</Label>
                      <Input
                        id="duration"
                        placeholder="Ej: 45min"
                        value={formData.duration}
                        onChange={(e) => handleInputChange("duration", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="capacity">Capacidad (pasajeros)</Label>
                      <Input
                        id="capacity"
                        type="number"
                        placeholder="Ej: 4"
                        value={formData.capacity}
                        onChange={(e) => handleInputChange("capacity", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Precio</CardTitle>
                  <CardDescription>Configura el precio del servicio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="price">Precio Base (USD) *</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="Ej: 25"
                        value={formData.price}
                        onChange={(e) => handleInputChange("price", e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">Precio por persona o por servicio según el tipo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3">
                <Link href="/transporte">
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Paquete
                </Button>
              </div>
            </form>
          </main>
        </div>
      </SidebarInset>

  )
}
