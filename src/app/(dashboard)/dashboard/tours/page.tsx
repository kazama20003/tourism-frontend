import {  SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Search,
  Plus,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Calendar,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Link from "next/link"

export default function ToursPage() {
  const tourStats = [
    {
      title: "Tours Totales",
      value: "156",
      change: "+12",
      trend: "up",
      icon: MapPin,
    },
    {
      title: "Tours Activos",
      value: "47",
      change: "-3",
      trend: "down",
      icon: Calendar,
    },
    {
      title: "Capacidad Total",
      value: "2,840",
      change: "+180",
      trend: "up",
      icon: Users,
    },
    {
      title: "Ingresos Tours",
      value: "$184,592",
      change: "+15.2%",
      trend: "up",
      icon: DollarSign,
    },
  ]

  const tours = [
    {
      id: "TUR-001",
      name: "Tour Histórico Centro",
      destination: "Ciudad Colonial",
      duration: "4 horas",
      price: "$45",
      capacity: 25,
      booked: 18,
      status: "Activo",
      nextDate: "2025-10-20",
    },
    {
      id: "TUR-002",
      name: "Aventura en la Montaña",
      destination: "Sierra Nevada",
      duration: "8 horas",
      price: "$120",
      capacity: 15,
      booked: 15,
      status: "Completo",
      nextDate: "2025-10-18",
    },
    {
      id: "TUR-003",
      name: "Playa y Snorkel",
      destination: "Bahía Azul",
      duration: "6 horas",
      price: "$85",
      capacity: 30,
      booked: 22,
      status: "Activo",
      nextDate: "2025-10-19",
    },
    {
      id: "TUR-004",
      name: "Tour Gastronómico",
      destination: "Mercado Central",
      duration: "3 horas",
      price: "$55",
      capacity: 20,
      booked: 8,
      status: "Activo",
      nextDate: "2025-10-21",
    },
    {
      id: "TUR-005",
      name: "Cascadas y Naturaleza",
      destination: "Parque Nacional",
      duration: "10 horas",
      price: "$150",
      capacity: 12,
      booked: 0,
      status: "Cancelado",
      nextDate: "2025-10-25",
    },
    {
      id: "TUR-006",
      name: "City Night Tour",
      destination: "Centro Urbano",
      duration: "3 horas",
      price: "$40",
      capacity: 35,
      booked: 28,
      status: "Activo",
      nextDate: "2025-10-17",
    },
    {
      id: "TUR-007",
      name: "Viñedos y Cata",
      destination: "Valle del Vino",
      duration: "7 horas",
      price: "$95",
      capacity: 18,
      booked: 16,
      status: "Activo",
      nextDate: "2025-10-22",
    },
    {
      id: "TUR-008",
      name: "Safari Fotográfico",
      destination: "Reserva Natural",
      duration: "5 horas",
      price: "$110",
      capacity: 10,
      booked: 10,
      status: "Completo",
      nextDate: "2025-10-19",
    },
  ]

  const getStatusBadge = (status: string) => {
    const variants: Record<
      string,
      { variant: "default" | "secondary" | "destructive" | "outline"; className: string }
    > = {
      Activo: {
        variant: "default",
        className: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20",
      },
      Completo: {
        variant: "secondary",
        className: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20",
      },
      Cancelado: {
        variant: "destructive",
        className: "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20",
      },
    }
    const config = variants[status] || variants["Activo"]
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    )
  }

  const getOccupancyColor = (booked: number, capacity: number) => {
    const percentage = (booked / capacity) * 100
    if (percentage >= 90) return "text-emerald-500"
    if (percentage >= 70) return "text-blue-500"
    if (percentage >= 50) return "text-amber-500"
    return "text-muted-foreground"
  }

  return (
      <SidebarInset>
        <div className="m-4 rounded-lg overflow-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-t-lg">
            <div className="flex items-center gap-2 px-4 w-full">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="text-xl font-semibold">Tours y Experiencias</h1>
                  <p className="text-sm text-muted-foreground">Gestiona todos los tours disponibles</p>
                </div>
                <Button asChild>
                  <Link href="/tours/nuevo">
                    <Plus className="mr-2 h-4 w-4" />
                    Nuevo Tour
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          <main className="flex flex-1 flex-col gap-6 p-6 bg-background/50 backdrop-blur rounded-b-lg">
            {/* Statistics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {tourStats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.title} className="border-border/40 bg-card/50 backdrop-blur">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        {stat.trend === "up" ? (
                          <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 text-red-500" />
                        )}
                        <span className={stat.trend === "up" ? "text-emerald-500" : "text-red-500"}>{stat.change}</span>{" "}
                        vs mes anterior
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Tours Table */}
            <Card className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Lista de Tours</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar tours..." className="pl-8 w-[250px]" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nombre del Tour</TableHead>
                      <TableHead>Destino</TableHead>
                      <TableHead>Duración</TableHead>
                      <TableHead>Precio</TableHead>
                      <TableHead>Ocupación</TableHead>
                      <TableHead>Próxima Fecha</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tours.map((tour) => (
                      <TableRow key={tour.id}>
                        <TableCell className="font-medium">{tour.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{tour.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{tour.destination}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            {tour.duration}
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">{tour.price}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3 text-muted-foreground" />
                            <span className={getOccupancyColor(tour.booked, tour.capacity)}>
                              {tour.booked}/{tour.capacity}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            {new Date(tour.nextDate).toLocaleDateString("es-ES", {
                              day: "2-digit",
                              month: "short",
                            })}
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(tour.status)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </SidebarInset>
  )
}
