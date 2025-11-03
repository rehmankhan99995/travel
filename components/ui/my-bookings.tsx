"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
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
    description:
      "Experience premium accommodation and guided tours in both Makkah and Madinah, with comfortable transport and meals included.",
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
    description:
      "Quick and convenient travel to Makkah with a 5-day stay near the Haram, including visa processing and transportation.",
  },
]

export default function MyBookings() {
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null)

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
                  <Detail icon={<Calendar size={18} />} label="Travel Date" value={booking.travelDate} />
                  <Detail icon={<MapPin size={18} />} label="Destination" value={booking.destination} />
                  <Detail icon={<Users size={18} />} label="Travelers" value={booking.travelers} />
                  <Detail icon={<DollarSign size={18} />} label="Total Cost" value={`$${booking.totalPrice}`} />
                </div>
              </div>

              <Button
                variant="outline"
                className="md:w-auto cursor-pointer flex items-center gap-2 border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent"
                onClick={() => setSelectedBooking(booking)}
              >
                View Details
                <ChevronRight size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Dialog for Booking Details */}
      <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
        <DialogContent className="max-w-lg">
          {selectedBooking && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-600">{selectedBooking.packageName}</DialogTitle>
                <DialogDescription>
                  Status:{" "}
                  <Badge
                    variant={selectedBooking.status === "Confirmed" ? "default" : "secondary"}
                    className="ml-2"
                  >
                    {selectedBooking.status}
                  </Badge>
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">{selectedBooking.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <p>
                    <span className="font-semibold">Booking Date:</span> {selectedBooking.bookingDate}
                  </p>
                  <p>
                    <span className="font-semibold">Travel Date:</span> {selectedBooking.travelDate}
                  </p>
                  <p>
                    <span className="font-semibold">Destination:</span> {selectedBooking.destination}
                  </p>
                  <p>
                    <span className="font-semibold">Travelers:</span> {selectedBooking.travelers}
                  </p>
                  <p>
                    <span className="font-semibold">Total Price:</span> ${selectedBooking.totalPrice}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// helper component for details display
function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string | number
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground font-medium uppercase">{label}</p>
        <p className="text-sm font-semibold text-foreground mt-1">{value}</p>
      </div>
    </div>
  )
}
