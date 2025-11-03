"use client"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function FlightsPage() {
  const currentBooking = {
    from: "BRU",
    departure: "09:00",
    to: "JFK",
    arrival: "12:45",
    duration_flight: "05:50",
    passenger: "Muhammad Malique",
    email: "malique125@gmail.com",
    passport: "234564422",
    airlineCode: "G138S2Z",
    airline: "Airline Title",
    ifaCode: "3000",
    class: "Economy Class",
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Flight Information</h1>
          <Button className="bg-blue-700 text-white cursor-pointer">+ New Flight</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Ticket Information */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Ticket Information</h2>

            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">{currentBooking.from}</div>
                <div className="text-2xl font-bold text-gray-700 mt-1">{currentBooking.departure}</div>
                <div className="text-sm text-gray-600 mt-2">Departure</div>
              </div>

              <div className="flex-1 flex flex-col items-center mx-8">
                <div className="w-full border-t-2 border-dashed border-gray-300 mb-2"></div>
                <div className="text-xs text-gray-600 bg-white px-2">Duration {currentBooking.duration_flight}</div>
                <div className="w-full border-t-2 border-dashed border-gray-300 mt-2"></div>
              </div>

              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">{currentBooking.to}</div>
                <div className="text-2xl font-bold text-gray-700 mt-1">{currentBooking.arrival}</div>
                <div className="text-sm text-gray-600 mt-2">Arrival</div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm text-gray-600 mb-2">Flight Information</div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{currentBooking.airline}</span>
                <span className="text-xs text-purple-600">IFA Code: {currentBooking.ifaCode}</span>
              </div>
            </div>
          </div>

          {/* Passenger Details */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Details</h2>
              <span className="text-sm text-purple-600 font-medium">{currentBooking.class}</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-500 uppercase">Name</div>
                <div className="font-medium text-gray-900">{currentBooking.passenger}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Email</div>
                <div className="font-medium text-gray-900 text-sm">{currentBooking.email}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Passport Number</div>
                <div className="font-medium text-gray-900">{currentBooking.passport}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Airline Booking Code</div>
                <div className="font-medium text-gray-900">{currentBooking.airlineCode}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Payments</h2>
            <span className="text-sm text-purple-600 cursor-pointer hover:underline">View All</span>
          </div>
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">€90</div>
                    <div className="text-sm text-gray-600">Your Payment for {currentBooking.airlineCode}</div>
                  </div>
                </div>
                <span className="text-sm text-purple-600 cursor-pointer hover:underline">Details</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
