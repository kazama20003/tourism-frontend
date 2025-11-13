import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, TrendingUp, MapPin, Clock, ArrowUpRight, MoreHorizontal, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function TransportPage() {
  const transportPackages = [
    {
      id: "TP001",
      name: "Traslado Aeropuerto - Centro",
      origin: "Aeropuerto Internacional",
      destination: "Centro Ciudad",
      serviceType: "Básico",
      price: 25,
      duration: "45min",
      distance: "28 km",
      capacity: 4,
      status: "Activo",
    },
    {
      id: "TP002",
      name: "Tour Playas del Sur",
      origin: "Hotel Central",
      destination: "Playas del Sur",
      serviceType: "Premium",
      price: 85,
      duration: "6h",
      distance: "120 km",
      capacity: 15,
      status: "Activo",
    },
    {
      id: "TP003",
      name: "Excursión Montaña",
      origin: "Plaza Principal",
      destination: "Mirador Montaña",
      serviceType: "Premium",
      price: 95,
      duration: "8h",
      distance: "150 km",
      capacity: 20,
      status: "Activo",
    },
    {
      id: "TP004",
      name: "Traslado Privado VIP",
      origin: "Aeropuerto",
      destination: "Hotel Resort",
      serviceType: "Privado",
      price: 120,
      duration: "1h",
      distance: "45 km",
      capacity: 3,
      status: "Activo",
    },
    {
      id: "TP005",
      name: "City Tour Completo",
      origin: "Terminal Turística",
      destination: "Puntos de Interés",
      serviceType: "Básico",
      price: 35,
      duration: "4h",
      distance: "50 km",
      capacity: 25,
      status: "Activo",
    },
    {
      id: "TP006",
      name: "Ruta del Vino",
      origin: "Centro",
      destination: "Valle Vinícola",
      serviceType: "Premium",
      price: 110,
      duration: "7h",
      distance: "95 km",
      capacity: 12,
      status: "Programado",
    },
  ]

  return (
      <SidebarInset>
        <div className="m-4 rounded-lg overflow-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-t-lg">
            <div className="flex items-center gap-2 px-4 w-full">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="text-xl font-semibold">Paquetes de Transporte</h1>
                  <p className="text-sm text-muted-foreground">Gestión de servicios y rutas turísticas</p>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Tipo de servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="basico">Básico</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="privado">Privado</SelectItem>
                    </SelectContent>
                  </Select>
                  <Link href="/transporte/nuevo">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Nuevo Paquete
                    </Button>
                  </Link>
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col gap-6 p-6 bg-background/50 backdrop-blur rounded-b-lg">
            {/* Key Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Paquetes Activos</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <span className="text-emerald-500">18 Disponibles</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ingresos Mensuales</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,280</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                    <span className="text-emerald-500">+12.5%</span> vs mes anterior
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Reservas Hoy</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <span className="text-muted-foreground">8 en progreso</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Promedio Duración</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.5h</div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <span className="text-muted-foreground">por servicio</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter */}
            <Card className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Buscar Paquetes</CardTitle>
                <CardDescription>Filtra por origen, destino o tipo de servicio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input placeholder="Buscar por nombre, origen o destino..." className="flex-1" />
                  <Button variant="outline">Buscar</Button>
                </div>
              </CardContent>
            </Card>

            {/* Transport Packages Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {transportPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className="border-border/40 bg-card/50 backdrop-blur hover:bg-card/70 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{pkg.name}</CardTitle>
                        <CardDescription className="mt-1">{pkg.id}</CardDescription>
                      </div>
                      <Badge
                        variant={
                          pkg.serviceType === "Básico"
                            ? "secondary"
                            : pkg.serviceType === "Premium"
                              ? "default"
                              : "outline"
                        }
                      >
                        {pkg.serviceType}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium">Origen:</p>
                          <p className="text-muted-foreground">{pkg.origin}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium">Destino:</p>
                          <p className="text-muted-foreground">{pkg.destination}</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Duración</p>
                        <p className="font-medium">{pkg.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Distancia</p>
                        <p className="font-medium">{pkg.distance}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Capacidad</p>
                        <p className="font-medium">{pkg.capacity} pax</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Precio desde</p>
                        <p className="text-2xl font-bold text-primary">${pkg.price}</p>
                      </div>
                      <Badge variant={pkg.status === "Activo" ? "default" : "secondary"}>{pkg.status}</Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-transparent" size="sm">
                        Editar
                      </Button>
                      <Button className="flex-1" size="sm">
                        Ver Detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </SidebarInset>

  )
}
