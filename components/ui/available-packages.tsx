"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MapPin, Calendar, Plane } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Umrah Premium Package",
    duration: "14 days",
    price: 2500,
    description: "Premium Umrah experience with luxury accommodations",
    includes: ["5-star hotel", "Round-trip flights", "Visa processing", "Ground transport"],
    icon: "🕌",
  },
  {
    id: 2,
    name: "Hajj Deluxe Package",
    duration: "21 days",
    price: 4500,
    description: "Complete Hajj package with premium services",
    includes: ["Deluxe hotel", "Premium flights", "Visa processing", "Guided tours"],
    icon: "⛩️",
  },
  {
    id: 3,
    name: "Makkah Express",
    duration: "10 days",
    price: 1800,
    description: "Budget-friendly Umrah package",
    includes: ["3-star hotel", "Economy flights", "Visa processing", "Basic transport"],
    icon: "✈️",
  },
]

export default function AvailablePackages() {
  const [selectedPackages, setSelectedPackages] = useState<number[]>([])

  return (
    <div className="p-8">
      <div className="mb-12">
        <div className="inline-block mb-4">
          <Badge variant="secondary" className="px-4 py-2 text-xs font-semibold">
            🌍 Travel Packages
          </Badge>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-3">Available Travel Packages</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore our carefully curated travel packages designed for unforgettable journeys
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-6 border-l-4 border-l-blue-500 bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Available Packages</p>
              <p className="text-3xl font-bold text-blue-700 mt-1">{packages.length}</p>
            </div>
            <Plane size={40} className="text-blue-400/20" />
          </div>
        </Card>
        <Card className="p-6 border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Best Deal</p>
              <p className="text-3xl font-bold text-blue-700 mt-1">$1,800</p>
            </div>
            <MapPin size={40} className="text-blue-400/20" />
          </div>
        </Card>
        <Card className="p-6 border-l-4 border-l-blue-700 bg-gradient-to-br from-white to-blue-50/30 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Premium Package</p>
              <p className="text-3xl font-bold text-blue-700 mt-1">$4,500</p>
            </div>
            <Calendar size={40} className="text-blue-400/20" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white"
          >
            <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-4xl">{pkg.icon}</div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, white 20%, transparent 50%), radial-gradient(circle at 80% 80%, white 20%, transparent 50%)",
                }}
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-lg font-bold text-foreground leading-tight">{pkg.name}</h3>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs font-semibold">
                  {pkg.duration}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{pkg.description}</p>

              <div className="mb-6 pb-6 border-b border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <p className="text-3xl font-bold text-blue-600">${pkg.price}</p>
              </div>

              <div className="mb-6 space-y-3">
                <p className="text-xs font-semibold text-foreground uppercase tracking-widest opacity-70">
                  What's Included:
                </p>
                {pkg.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold py-2 transition-all duration-300">
                Reserve Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
