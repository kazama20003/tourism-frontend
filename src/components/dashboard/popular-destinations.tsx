import { MapPin, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const destinations = [
  {
    id: 1,
    name: "Cancún, México",
    bookings: 156,
    percentage: 92,
    trend: "+15%",
  },
  {
    id: 2,
    name: "Machu Picchu, Perú",
    bookings: 134,
    percentage: 78,
    trend: "+22%",
  },
  {
    id: 3,
    name: "Cartagena, Colombia",
    bookings: 98,
    percentage: 65,
    trend: "+8%",
  },
  {
    id: 4,
    name: "Buenos Aires, Argentina",
    bookings: 87,
    percentage: 54,
    trend: "+12%",
  },
  {
    id: 5,
    name: "Patagonia, Chile",
    bookings: 72,
    percentage: 45,
    trend: "+18%",
  },
]

export function PopularDestinations() {
  return (
    <div className="space-y-6">
      {destinations.map((destination) => (
        <div key={destination.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{destination.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{destination.bookings} reservas</span>
              <span className="text-xs text-emerald-500 flex items-center gap-0.5">
                <TrendingUp className="h-3 w-3" />
                {destination.trend}
              </span>
            </div>
          </div>
          <Progress value={destination.percentage} className="h-2" />
        </div>
      ))}
    </div>
  )
}
