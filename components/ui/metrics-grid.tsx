"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function MetricsGrid() {
  const metrics = [
    {
      label: "Today Revenue",
      value: "$45,820",
      change: "+12.5%",
      positive: true,
      icon: "📊",
    },
    {
      label: "Pending Approvals",
      value: "23",
      change: "5 urgent",
      positive: false,
      icon: "⏳",
    },
    {
      label: "Active Agents",
      value: "156",
      change: "+8 this week",
      positive: true,
      icon: "👥",
    },
    {
      label: "Agent Credit Balance",
      value: "$2.4M",
      change: "-$50K used today",
      positive: false,
      icon: "💳",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <Card
          key={idx}
          className="bg-gradient-to-br from-white to-gray-50 border-l-4 border-l-blue-500 hover:shadow-lg transition"
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium mb-2">{metric.label}</p>
                <h3 className="text-2xl font-bold text-foreground">{metric.value}</h3>
                <div
                  className={`flex items-center gap-1 mt-2 text-sm font-medium ${metric.positive ? "text-green-600" : "text-orange-600"}`}
                >
                  {metric.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {metric.change}
                </div>
              </div>
              <span className="text-3xl">{metric.icon}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
