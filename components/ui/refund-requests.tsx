"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Clock, CheckCircle, AlertCircle } from "lucide-react"

const refundRequests = [
  {
    id: 1,
    bookingId: "BK001",
    packageName: "Umrah Premium Package",
    status: "Approved",
    requestDate: "2024-10-15",
    amount: 500,
  },
  {
    id: 2,
    bookingId: "BK002",
    packageName: "Makkah Express",
    status: "Pending",
    requestDate: "2024-10-25",
    amount: 300,
  },
]

export default function RefundRequests() {
  const [isOpen, setIsOpen] = useState(false)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle size={16} className="text-blue-600" />
      case "Pending":
        return <Clock size={16} className="text-blue-400" />
      case "Rejected":
        return <AlertCircle size={16} className="text-blue-300" />
      default:
        return null
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Refund Requests</h1>
          <p className="text-muted-foreground">Manage your refund requests</p>
        </div>
        <Button className="bg-blue-700 text-white hover:bg-blue-800">
          <Plus size={18} />
          New Refund Request
        </Button>
      </div>

      <div className="space-y-4">
        {refundRequests.map((request) => (
          <Card key={request.id} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{request.packageName}</h3>
                  <Badge
                    variant={request.status === "Approved" ? "default" : "secondary"}
                    className="flex items-center gap-1"
                  >
                    {getStatusIcon(request.status)}
                    {request.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Booking ID</p>
                    <p className="font-semibold text-foreground">{request.bookingId}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Request Date</p>
                    <p className="font-semibold text-foreground">{request.requestDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Amount</p>
                    <p className="font-bold text-blue-700">${request.amount}</p>
                  </div>
                </div>
              </div>
              <Button variant="outline">View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
