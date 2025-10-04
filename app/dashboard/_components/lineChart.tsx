'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "1", zonas: 186, last_weeks: 80 },
  { month: "2", zonas: 305, last_weeks: 200 },
  { month: "3", zonas: 237, last_weeks: 120 },
  { month: "4", zonas: 73, last_weeks: 190 },
  { month: "5", zonas: 209, last_weeks: 130 },
  { month: "6", zonas: 214, last_weeks: 140 },
  { month: "7", zonas: 186, last_weeks: 80 },
  { month: "8", zonas: 305, last_weeks: 200 },
  { month: "9", zonas: 237, last_weeks: 120 },
  { month: "10", zonas: 73, last_weeks: 190 },
  { month: "11", zonas: 209, last_weeks: 130 },
  { month: "12", zonas: 214, last_weeks: 140 },
];

const chartConfig = {
  zonas: {
    label: "Zonas",
    color: "#5A6ACF",
  },
  last_weeks: {
    label: "Últimas semanas",
    color: "#E6E8EC",
  },
} satisfies ChartConfig;

export function LineChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[200px] w-full mt-2">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} align="left"/>
        <Bar dataKey="zonas" fill="var(--color-zonas)" radius={4} />
        <Bar dataKey="last_weeks" fill="var(--color-last_weeks)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
