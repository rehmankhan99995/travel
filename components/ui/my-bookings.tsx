"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, DollarSign, ChevronRight } from "lucide-react"

const bookings = [
  {
    id: 1,
    packageName: "Umrah Premium Package",
    status: "Confirmed",
    bookingDate: "2024-11-01",
    travelDate: "2024-12-15",
    travelers: 4,
    totalPrice: 10000,
    destination: "Makkah & Madinah",
  },
  {
    id: 2,
    packageName: "Makkah Express",
    status: "Processing",
    bookingDate: "2024-10-28",
    travelDate: "2024-11-20",
    travelers: 2,
    totalPrice: 3600,
    destination: "Makkah",
  },
]

export default function MyBookings() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <Badge variant="secondary" className="px-4 py-2 text-xs font-semibold mb-4">
          📋 My Bookings
        </Badge>
        <h1 className="text-4xl font-bold text-foreground mb-2">Your Travel Reservations</h1>
        <p className="text-lg text-muted-foreground">Track and manage all your confirmed bookings</p>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card
            key={booking.id}
            className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-400 hover:border-l-blue-600 bg-gradient-to-r from-white to-blue-50/20"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{booking.packageName}</h3>
                  <Badge
                    variant={booking.status === "Confirmed" ? "default" : "secondary"}
                    className="text-xs font-semibold"
                  >
                    {booking.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Calendar size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase">Travel Date</p>
                      <p className="text-sm font-semibold text-foreground mt-1">{booking.travelDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MapPin size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase">Destination</p>
                      <p className="text-sm font-semibold text-foreground mt-1">{booking.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase">Travelers</p>
                      <p className="text-sm font-semibold text-foreground mt-1">{booking.travelers}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <DollarSign size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase">Total Cost</p>
                      <p className="text-sm font-bold text-blue-600 mt-1">${booking.totalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="md:w-auto flex items-center gap-2 border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                View Details
                <ChevronRight size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
