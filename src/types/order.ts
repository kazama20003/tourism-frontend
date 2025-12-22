export enum OrderStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELED = "canceled",
  COMPLETED = "completed",
}

export enum PaymentStatus {
  PENDING = "pending",
  PAID = "paid",
  REFUNDED = "refunded",
  FAILED = "failed",
}

export interface Product {
  _id: string
  title: string
  description?: string
  images?: string[]
  videoUrl?: string
  locationName?: string
  durationDays?: number
  difficulty?: string
  minAge?: number
  capacity?: number
  startTime?: string
  benefits?: string[]
  preparations?: string[]
  itinerary?: Array<{
    day?: number
    title?: string
    description?: string
    activities?: string[]
  }>
  hasTransport?: boolean
  vehicleIds?: string[]
  hasGuide?: boolean
  currentPrice?: number
  discounts?: Array<{
    offerId?: string
    type?: string
    value?: number
  }>
  availabilityType?: string
  availableDates?: string[]
  limitCapacity?: boolean
  minPeoplePerBooking?: number
  maxPeoplePerBooking?: number
  cutoffHoursBeforeStart?: number
  instantConfirmation?: boolean
  isBookable?: boolean
  includes?: string[]
  excludes?: string[]
  categories?: string[]
  languages?: string[]
  rating?: number
  reviewsCount?: number
  cancellationPolicy?: string
  refundPolicy?: string
  changePolicy?: string
  isActive?: boolean
  slug?: string
  translations?: Array<{
    locale?: string
    title?: string
    description?: string
  }>
  createdAt?: string
  updatedAt?: string
}

export interface User {
  _id: string
  email: string
  firstName?: string
  lastName?: string
  authProvider?: string
  externalId?: string
  isActive?: boolean
  roles?: string[]
  createdAt?: string
  updatedAt?: string
}

export interface OrderItem {
  productId: string | Product
  productType: "Tour" | "Transport"
  travelDate?: string
  adults?: number
  children?: number
  infants?: number
  unitPrice: number
  totalPrice: number
  appliedOfferId?: string
  notes?: string
  addedAt?: string
}

export interface Order {
  _id: string
  userId?: string | User
  customerName: string
  customerEmail: string
  customerPhone?: string
  items: OrderItem[]
  subtotal: number
  discountTotal?: number
  grandTotal: number
  currency?: string
  status: OrderStatus
  paymentStatus: PaymentStatus
  paymentMethod?: string
  notes?: string
  confirmationCode?: string
  cartId?: string
  createdAt?: string
  updatedAt?: string
}

export type CreateOrderDto = Omit<Order, "_id" | "createdAt" | "updatedAt">
export type UpdateOrderDto = Partial<CreateOrderDto>

export interface PaginatedResponse<T> {
  data: T[]
  page: number
  limit: number
  total: number
  totalPages: number
}
