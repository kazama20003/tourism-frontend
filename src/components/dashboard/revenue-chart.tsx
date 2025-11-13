"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { date: "Lun", revenue: 12400, target: 15000 },
  { date: "Mar", revenue: 18200, target: 15000 },
  { date: "Mié", revenue: 15800, target: 15000 },
  { date: "Jue", revenue: 21500, target: 15000 },
  { date: "Vie", revenue: 28900, target: 15000 },
  { date: "Sáb", revenue: 35200, target: 15000 },
  { date: "Dom", revenue: 24600, target: 15000 },
]

const chartConfig = {
  revenue: {
    label: "Ingresos",
    color: "hsl(var(--chart-3))",
  },
  target: {
    label: "Objetivo",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} className="text-xs" />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          className="text-xs"
          tickFormatter={(value) => `$${value / 1000}k`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          dataKey="target"
          type="monotone"
          stroke="hsl(var(--chart-4))"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
        />
        <Line
          dataKey="revenue"
          type="monotone"
          stroke="hsl(var(--chart-3))"
          strokeWidth={2}
          dot={{ fill: "hsl(var(--chart-3))", r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  )
}
