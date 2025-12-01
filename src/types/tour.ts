export interface Tour extends CreateTourDto {
  _id: string
  createdAt: string
  updatedAt: string
  translations?: Record<string, Partial<Tour>>
}

export interface CreateTourDto {
  // Básicos
  title: string
  description: string
  // Imágenes Cloudinary
  images?: Array<{
    url: string
    publicId: string
  }>
  videoUrl?: string
  locationName: string
  coordinates?: {
    lat: number
    lng: number
  }
  durationDays: number
  durationHours?: number
  difficulty?: "easy" | "medium" | "hard"
  minAge?: number
  capacity?: number
  meetingPoint?: string
  startTime?: string
  endTime?: string
  // Beneficios y recomendaciones
  benefits?: string[]
  preparations?: string[]
  // Itinerario
  itinerary?: Array<{
    order: number
    title: string
    description: string
    durationHours?: number
    images?: string[]
    activities?: string[]
    meals?: {
      breakfast: boolean
      lunch: boolean
      dinner: boolean
    }
    hotelNight?: boolean
  }>
  // Transporte
  hasTransport?: boolean
  vehicleIds?: string[]
  // Guía
  hasGuide?: boolean
  // Precios
  currentPrice: number
  oldPrice?: number
  discounts?: Array<{
    people: number
    discount: number
  }>
  // Disponibilidad y reglas de reserva
  availabilityType?: "unlimited" | "fixed_dates" | "date_range"
  startDate?: string
  endDate?: string
  availableDates?: string[]
  limitCapacity?: boolean
  minPeoplePerBooking?: number
  maxPeoplePerBooking?: number
  cutoffHoursBeforeStart?: number
  instantConfirmation?: boolean
  isBookable?: boolean
  // Incluye / excluye
  includes?: string[]
  excludes?: string[]
  // Categorías y lenguajes
  categories?: string[]
  languages?: string[]
  // Meta / rating
  rating?: number
  reviewsCount?: number
  cancellationPolicy?: string
  refundPolicy?: string
  changePolicy?: string
  isActive?: boolean
  slug: string
  metaDescription?: string
}

export type UpdateTourDto = Partial<CreateTourDto>

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
    