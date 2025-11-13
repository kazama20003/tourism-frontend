"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { date: "Lun", bookings: 45, previous: 38 },
  { date: "Mar", bookings: 52, previous: 42 },
  { date: "Mié", bookings: 48, previous: 45 },
  { date: "Jue", bookings: 61, previous: 48 },
  { date: "Vie", bookings: 73, previous: 55 },
  { date: "Sáb", bookings: 89, previous: 72 },
  { date: "Dom", bookings: 67, previous: 58 },
]

const chartConfig = {
  bookings: {
    label: "Reservas",
    color: "hsl(var(--chart-1))",
  },
  previous: {
    label: "Semana anterior",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function BookingsChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="fillBookings" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="fillPrevious" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} className="text-xs" />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} className="text-xs" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="previous"
          type="monotone"
          fill="url(#fillPrevious)"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
        />
        <Area
          dataKey="bookings"
          type="monotone"
          fill="url(#fillBookings)"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  )
}
