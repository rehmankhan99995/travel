"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Clock } from "lucide-react"

export default function RefundRequests() {
  const refundRequests = [
    {
      id: 1,
      agent: "John Smith",
      amount: "$1,250",
      reason: "Cancelled booking",
      status: "pending",
      date: "2024-11-03",
    },
    {
      id: 2,
      agent: "Sarah Johnson",
      amount: "$890",
      reason: "Duplicate charge",
      status: "pending",
      date: "2024-11-03",
    },
    {
      id: 3,
      agent: "Mike Davis",
      amount: "$2,100",
      reason: "Service complaint",
      status: "approved",
      date: "2024-11-02",
    },
    { id: 4, agent: "Emma Wilson", amount: "$450", reason: "Price adjustment", status: "rejected", date: "2024-11-02" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />
      case "approved":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Refund Requests</CardTitle>
          <CardDescription>Review, approve, or reject refund requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {refundRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0">{getStatusIcon(request.status)}</div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{request.agent}</p>
                    <p className="text-sm text-muted-foreground">{request.reason}</p>
                  </div>
                </div>
                <div className="text-right mr-6">
                  <p className="font-bold text-foreground">{request.amount}</p>
                  <p className="text-xs text-muted-foreground">{request.date}</p>
                </div>
                {request.status === "pending" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">
                      Reject
                    </Button>
                  </div>
                )}
                {request.status !== "pending" && (
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      request.status === "approved" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
