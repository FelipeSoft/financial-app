"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", incomes: 186, expenses: 80 },
    { month: "February", incomes: 305, expenses: 200 },
    { month: "March", incomes: 237, expenses: 120 },
    { month: "April", incomes: 73, expenses: 190 },
    { month: "May", incomes: 209, expenses: 130 },
    { month: "June", incomes: 214, expenses: 140 },
]

const chartConfig = {
    incomes: {
        label: "Incomes",
        color: "hsl(var(--chart-1))",
    },
    expenses: {
        label: "Expenses",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function AreaChartComponent() {
    return (
        <ChartContainer className="w-full h-[400px]" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                    dataKey="expenses"
                    type="natural"
                    fill="var(--color-expenses)"
                    fillOpacity={0.4}
                    stroke="var(--color-expenses)"
                    stackId="a"
                />
                <Area
                    dataKey="incomes"
                    type="natural"
                    fill="var(--color-incomes)"
                    fillOpacity={0.4}
                    stroke="var(--color-incomes)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}
