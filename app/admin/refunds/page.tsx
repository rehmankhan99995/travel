"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

export default function RefundsPage() {
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

  const getStatusColor = (status:any) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Refund Requests</h1>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Manage Refunds</h2>
          </div>
          <div className="divide-y">
            {refundRequests.map((req) => (
              <div key={req.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{req.passenger}</div>
                  <div className="text-sm text-gray-600 mt-1">{req.reason}</div>
                  <div className="text-xs text-gray-500 mt-2">Requested: {req.date}</div>
                </div>
                <div className="text-right mr-4">
                  <div className="font-bold text-gray-900">{req.amount}</div>
                </div>
                <div className="flex gap-2">
                  {req.status === "pending" && (
                    <>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </>
                  )}
                  {req.status === "approved" && <Badge className={getStatusColor(req.status)}>Approved</Badge>}
                  {req.status === "rejected" && <Badge className={getStatusColor(req.status)}>Rejected</Badge>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
