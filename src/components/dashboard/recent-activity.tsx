import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    customer: "María González",
    initials: "MG",
    action: "Nueva reserva",
    destination: "Cancún, México",
    amount: "$2,450",
    time: "Hace 5 min",
    status: "confirmed",
  },
  {
    id: 2,
    customer: "Carlos Ruiz",
    initials: "CR",
    action: "Pago recibido",
    destination: "Machu Picchu, Perú",
    amount: "$3,200",
    time: "Hace 12 min",
    status: "paid",
  },
  {
    id: 3,
    customer: "Ana Martínez",
    initials: "AM",
    action: "Reserva cancelada",
    destination: "Cartagena, Colombia",
    amount: "$1,800",
    time: "Hace 1 hora",
    status: "cancelled",
  },
  {
    id: 4,
    customer: "Luis Fernández",
    initials: "LF",
    action: "Nueva reserva",
    destination: "Buenos Aires, Argentina",
    amount: "$2,100",
    time: "Hace 2 horas",
    status: "confirmed",
  },
]

const statusConfig = {
  confirmed: { label: "Confirmado", variant: "default" as const },
  paid: { label: "Pagado", variant: "secondary" as const },
  cancelled: { label: "Cancelado", variant: "destructive" as const },
}

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary/10 text-primary text-xs">{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.customer}</p>
            <p className="text-xs text-muted-foreground">
              {activity.action} • {activity.destination}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-sm font-medium">{activity.amount}</p>
            <Badge variant={statusConfig[activity.status as keyof typeof statusConfig].variant} className="text-xs">
              {statusConfig[activity.status as keyof typeof statusConfig].label}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
