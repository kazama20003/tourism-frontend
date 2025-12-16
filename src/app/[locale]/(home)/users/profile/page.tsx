"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Image from "next/image"
import {
  User,
  Mail,
  Phone,
  Calendar,
  Package,
  Heart,
  Edit,
  MapPin,
  DollarSign,
  CheckCircle,
  Clock,
  XCircle,
  ShoppingCart,
  LogOut,
  Trash2,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useProfile, useUpdateProfile, useLogout } from "@/hooks/use-auth"
import { useMyOrders } from "@/hooks/use-orders"
import { useCart } from "@/hooks/use-cart"
import { toast } from "sonner"
import type { UpdateUserDto } from "@/types/user"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function StatCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="bg-secondary p-6 opacity-0">
      <Icon className="w-5 h-5 text-accent mb-3" />
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <p className="text-xl font-serif text-foreground">{value}</p>
    </div>
  )
}

const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case "confirmed":
    case "delivered":
    case "completed":
      return "bg-green-500/10 text-green-600"
    case "pending":
      return "bg-yellow-500/10 text-yellow-600"
    case "cancelled":
    case "canceled":
      return "bg-red-500/10 text-red-600"
    default:
      return "bg-muted text-muted-foreground"
  }
}

const getStatusIcon = (status: string) => {
  switch (status?.toLowerCase()) {
    case "confirmed":
    case "delivered":
    case "completed":
      return <CheckCircle className="w-4 h-4" />
    case "pending":
      return <Clock className="w-4 h-4" />
    case "cancelled":
    case "canceled":
      return <XCircle className="w-4 h-4" />
    default:
      return <Package className="w-4 h-4" />
  }
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const { data: userData } = useProfile()
  const { data: ordersData, isLoading: ordersLoading } = useMyOrders()
  const { cart, removeItem, clearCart, isLoading: cartLoading } = useCart()
  const { trigger: updateProfile, isMutating } = useUpdateProfile()
  const { trigger: logout, isMutating: isLoggingOut } = useLogout()

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        phone: userData.phone || "",
        password: "",
        confirmPassword: "",
      })
    }
  }, [userData])

  useEffect(() => {
    const header = document.querySelector(".max-w-7xl")
    if (!header) return

    const ctx = gsap.context(() => {
      const elements = header.children
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
      )
    })

    return () => ctx.revert()
  }, [])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!userData) return

    if (formData.password || formData.confirmPassword) {
      if (userData.authProvider !== "LOCAL") {
        toast.error("Cannot change password for OAuth accounts")
        return
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match")
        return
      }
      if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters")
        return
      }
    }

    try {
      const updateData: UpdateUserDto = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
      }

      if (formData.password && userData.authProvider === "LOCAL") {
        updateData.password = formData.password
      }

      await updateProfile({ id: userData._id, data: updateData })
      toast.success("Profile updated successfully")
      setIsEditing(false)
      setFormData((prev) => ({ ...prev, password: "", confirmPassword: "" }))
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to update profile"
      toast.error(errorMessage)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch {
      toast.error("Failed to logout")
    }
  }

  const handleRemoveFromCart = async (productId: string) => {
    try {
      await removeItem(productId)
      toast.success("Item removed from cart")
    } catch {
      toast.error("Failed to remove item")
    }
  }

  const handleClearCart = async () => {
    try {
      await clearCart()
      toast.success("Cart cleared")
    } catch {
      toast.error("Failed to clear cart")
    }
  }

  if (!userData) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Please login to view your profile</p>
          <Link
            href="/login"
            className="px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase"
          >
            Login
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-secondary pt-24 pb-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-serif text-foreground">
                  {userData.firstName} {userData.lastName}
                </h1>
                <span className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full tracking-wider uppercase w-fit">
                  {userData.roles[0] || "CLIENT"}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Member since{" "}
                {new Date(userData.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{userData.email}</span>
                </div>
                {userData.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{userData.phone}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="px-6 py-3 bg-red-600 text-white text-xs font-medium tracking-widest uppercase hover:scale-[1.02] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <LogOut className="w-4 h-4" />
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={Package}
              label="Orders"
              value={(Array.isArray(ordersData) ? ordersData.length : 0).toString()}
            />
            <StatCard icon={Heart} label="Favorites" value="0" />
            <StatCard icon={ShoppingCart} label="Cart Items" value={(cart?.items?.length ?? 0).toString()} />
            <StatCard
              icon={DollarSign}
              label="Total Spent"
              value={`$${(Array.isArray(ordersData) ? ordersData.reduce((sum, order) => sum + (order.grandTotal || 0), 0) : 0).toFixed(2)}`}
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="w-full bg-secondary p-1 grid grid-cols-3 gap-1">
              <TabsTrigger value="overview" className="text-xs tracking-wider uppercase">
                Overview
              </TabsTrigger>
              <TabsTrigger value="orders" className="text-xs tracking-wider uppercase">
                My Orders
              </TabsTrigger>
              <TabsTrigger value="cart" className="text-xs tracking-wider uppercase">
                My Cart
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {isEditing ? (
                <div className="bg-secondary p-8">
                  <h3 className="text-2xl font-serif text-foreground mb-6">Edit Profile</h3>
                  <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Read-only)</Label>
                      <Input id="email" value={userData.email} disabled className="bg-muted" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {userData.authProvider === "LOCAL" && (
                      <>
                        <div className="border-t border-border pt-6">
                          <h4 className="text-lg font-serif text-foreground mb-4">Change Password</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="password">New Password</Label>
                              <Input
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="Leave blank to keep current"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="confirmPassword">Confirm Password</Label>
                              <Input
                                id="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                placeholder="Leave blank to keep current"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex gap-3">
                      <Button type="submit" disabled={isMutating} className="px-8">
                        {isMutating ? "Saving..." : "Save Changes"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsEditing(false)
                          setFormData({
                            firstName: userData.firstName || "",
                            lastName: userData.lastName || "",
                            phone: userData.phone || "",
                            password: "",
                            confirmPassword: "",
                          })
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-secondary p-8">
                  <h3 className="text-2xl font-serif text-foreground mb-6">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Full Name</p>
                      <p className="text-foreground">
                        {userData.firstName} {userData.lastName}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <p className="text-foreground">{userData.email}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-foreground">{userData.phone || "Not provided"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Auth Provider</p>
                      <p className="text-foreground capitalize">{userData.authProvider.toLowerCase()}</p>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="orders" className="space-y-4">
              <h3 className="text-2xl font-serif text-foreground mb-6">My Orders</h3>

              {ordersLoading ? (
                <div className="text-center py-8">
                  <p>Loading orders...</p>
                </div>
              ) : Array.isArray(ordersData) && ordersData.length > 0 ? (
                <div className="space-y-4">
                  {ordersData?.map((order) => (
                    <div key={order._id} className="bg-secondary p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs text-accent font-medium tracking-wider uppercase">
                              {order.confirmationCode || order._id}
                            </span>
                            <span
                              className={`text-[10px] px-2 py-1 rounded-full font-medium uppercase tracking-wider flex items-center gap-1 ${getStatusColor(order.status)}`}
                            >
                              {getStatusIcon(order.status)}
                              {order.status}
                            </span>
                          </div>

                          <div className="space-y-4">
                            {order.items.map((item, idx) => {
                              return (
                                <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-0">
                                  <div className="flex-1">
                                    <h4 className="font-serif text-foreground mb-1">
                                      {item.productType} - {item.productId}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                      {item.productType}
                                      {item.adults && ` • Adults: ${item.adults}`}
                                      {item.children && ` • Children: ${item.children}`}
                                      {item.infants && ` • Infants: ${item.infants}`}
                                    </p>
                                    {item.travelDate && (
                                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        <span>{new Date(item.travelDate).toLocaleDateString()}</span>
                                      </div>
                                    )}
                                    {item.notes && (
                                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                        <MapPin className="w-3 h-3" />
                                        <span>{item.notes}</span>
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <p className="font-serif text-foreground">${item.totalPrice.toFixed(2)}</p>
                                  </div>
                                </div>
                              )
                            })}
                          </div>

                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Subtotal:</span>
                              <span className="text-foreground">${order.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-serif">
                              <span className="text-foreground">Total:</span>
                              <span className="text-foreground">${order.grandTotal.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-secondary p-12 text-center">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No orders yet</p>
                  <Link
                    href="/tours"
                    className="inline-block px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:scale-[1.02] transition-all"
                  >
                    Browse Tours
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="cart" className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif text-foreground">My Cart</h3>
                {cart && cart.items && cart.items.length > 0 && (
                  <Button onClick={handleClearCart} variant="destructive" size="sm" className="gap-2">
                    <Trash2 className="w-4 h-4" />
                    Clear Cart
                  </Button>
                )}
              </div>

              {cartLoading ? (
                <div className="text-center py-8">
                  <p>Loading cart...</p>
                </div>
              ) : cart && cart.items && cart.items.length > 0 ? (
                <div className="space-y-4">
                  <div className="bg-secondary p-6">
                    <div className="space-y-4">
                      {cart.items.map((item, idx) => {
                        const productId = typeof item.productId === "string" ? item.productId : item.productId._id
                        const productTitle = typeof item.productId === "string" ? item.productId : item.productId.title
                        const productImage =
                          typeof item.productId === "string" ? null : item.productId.images?.[0]?.url || null

                        return (
                          <div key={idx} className="flex gap-4 pb-4 border-b border-border last:border-0">
                            {productImage && (
                              <div className="w-24 h-24 bg-muted rounded overflow-hidden shrink-0">
                                <Image
                                  src={productImage || "/placeholder.svg"}
                                  alt={productTitle}
                                  width={96}
                                  height={96}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-serif text-foreground mb-1">{productTitle}</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                {item.productType}
                                {item.adults && ` • Adults: ${item.adults}`}
                                {item.children && ` • Children: ${item.children}`}
                                {item.infants && ` • Infants: ${item.infants}`}
                              </p>
                              {item.travelDate && (
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  <span>{new Date(item.travelDate).toLocaleDateString()}</span>
                                </div>
                              )}
                              {item.notes && (
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{item.notes}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-right flex flex-col justify-between items-end">
                              <p className="font-serif text-foreground">${item.totalPrice.toFixed(2)}</p>
                              <Button
                                onClick={() => handleRemoveFromCart(productId)}
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="text-foreground">${cart.subtotal.toFixed(2)}</span>
                      </div>
                      {cart.discountTotal > 0 && (
                        <div className="flex justify-between text-sm mb-2 text-green-600">
                          <span>Discount:</span>
                          <span>-${cart.discountTotal.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-lg font-serif">
                        <span className="text-foreground">Total:</span>
                        <span className="text-foreground">${cart.grandTotal.toFixed(2)}</span>
                      </div>

                      <div className="mt-6">
                        <Link
                          href="/checkout"
                          className="w-full inline-block text-center px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:scale-[1.02] transition-all"
                        >
                          Proceed to Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-secondary p-12 text-center">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">Your cart is empty</p>
                  <Link
                    href="/tours"
                    className="inline-block px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase hover:scale-[1.02] transition-all"
                  >
                    Browse Tours
                  </Link>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
