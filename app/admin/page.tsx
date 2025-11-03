"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

export default function TravelDashboard() {

  // Sample data for travel bookings
  const currentBooking = {
    duration: "3 Days",
    nextPayment: "€90",
    lastPayment: "€90",
    remainingBalance: "€180",
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

  // Refund requests
  const refundRequests = [
    {
      id: 1,
      passenger: "Ahmed Hassan",
      amount: "€120",
      date: "2024-01-15",
      status: "pending",
      reason: "Schedule change",
    },
    {
      id: 2,
      passenger: "Fatima Ali",
      amount: "€250",
      date: "2024-01-14",
      status: "approved",
      reason: "Medical emergency",
    },
    {
      id: 3,
      passenger: "Omar Khan",
      amount: "€180",
      date: "2024-01-13",
      status: "rejected",
      reason: "Policy violation",
    },
  ]

  // Travel packages
  const packages = [
    { id: 1, name: "Umrah 15 Days", price: "€1200", hotel: "4-star", flights: "Qatar Airways", status: "active" },
    { id: 2, name: "Dubai Tour 7 Days", price: "€800", hotel: "3-star", flights: "Emirates", status: "active" },
    { id: 3, name: "Europe 10 Days", price: "€1500", hotel: "4-star", flights: "Turkish Airlines", status: "archived" },
  ]

  // Reports data
  const reports = {
    daily: { income: "€5,420", bookings: 12, refunds: 2 },
    agent: { topAgent: "Ahmed Mohammad - €12,500", performances: 8 },
    staff: { active: 15, onLeave: 2, training: 1 },
  }

  const getStatusColor = (status:any) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Button className="bg-blue-700 text-white cursor-pointer">+ New Demand</Button>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-gray-900">{currentBooking.duration}</div>
              <div className="text-sm text-gray-600 mt-2">Next Payment</div>
              <div className="flex items-center mt-2 text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-gray-900">{currentBooking.lastPayment}</div>
              <div className="text-sm text-gray-600 mt-2">Last Payment</div>
              <div className="flex items-center mt-2 text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-gray-900">{currentBooking.remainingBalance}</div>
              <div className="text-sm text-gray-600 mt-2">Remaining Balance</div>
              <div className="flex items-center mt-2 text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Welcome message */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to Travel Dashboard</h2>
          <p className="text-gray-600">Select a section from the sidebar to manage your travel services.</p>
        </div>
      </div>
    </div>
  )
}
