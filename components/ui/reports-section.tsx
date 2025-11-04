"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Clock } from "lucide-react"
import { toast } from "sonner"

interface RefundRequest {
  id: number
  agent: string
  amount: string
  reason: string
  status: "pending" | "approved" | "rejected"
  date: string
}

export default function ReportsSection() {
  const [refundRequests, setRefundRequests] = useState<RefundRequest[]>([
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
    {
      id: 4,
      agent: "Emma Wilson",
      amount: "$450",
      reason: "Price adjustment",
      status: "rejected",
      date: "2024-11-02",
    },
  ])

  // ✅ Status Icon Renderer
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

  // ✅ Approve / Reject Handler
  const handleAction = (id: number, action: "approved" | "rejected") => {
    setRefundRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: action } : req))
    )

    // 🔔 Toast feedback
    toast.success(
      action === "approved" ? "✅ Refund Approved" : "❌ Refund Rejected",
      {
        description:
          action === "approved"
            ? "The refund has been successfully approved."
            : "The refund request has been rejected.",
      }
    )
  }

  // ✅ Add New User Simulation
  const handleAddUser = () => {
    toast.info("👤 Add New User", {
      description: "Redirecting to user creation form...",
    })
  }

  // ✅ Add New Hotel Simulation
  const handleAddHotel = () => {
    toast.info("🏨 Add New Hotel Partner", {
      description: "Redirecting to hotel creation form...",
    })
  }

  return (
    <div className="space-y-6">
      {/* Refund Requests Section */}
      <Card>
        <CardHeader>
          <CardTitle>Refund Requests (Review & Approve)</CardTitle>
          <CardDescription>Process pending refund requests from agents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {refundRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div>{getStatusIcon(request.status)}</div>
                  <div>
                    <p className="font-medium text-foreground">{request.agent}</p>
                    <p className="text-sm text-muted-foreground">{request.reason}</p>
                  </div>
                </div>

                <div className="text-right mr-6">
                  <p className="font-bold text-foreground">{request.amount}</p>
                  <p className="text-xs text-muted-foreground">{request.date}</p>
                </div>

                {/* Action Buttons or Status Badge */}
                {request.status === "pending" ? (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => handleAction(request.id, "approved")}
                    >
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleAction(request.id, "rejected")}
                    >
                      Reject
                    </Button>
                  </div>
                ) : (
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      request.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
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

      {/* User & Hotel Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Create, modify, or remove user accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 border border-border rounded-lg">
                <p className="font-medium text-foreground">Active Staff: 42</p>
                <p className="text-sm text-muted-foreground">Across 8 branches</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <p className="font-medium text-foreground">Active Agents: 156</p>
                <p className="text-sm text-muted-foreground">Premium & Standard tiers</p>
              </div>
              <Button className="w-full" onClick={handleAddUser}>
                + Add New User
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Hotel Management */}
        <Card>
          <CardHeader>
            <CardTitle>Hotel Management</CardTitle>
            <CardDescription>Add or remove hotel partnerships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 border border-border rounded-lg">
                <p className="font-medium text-foreground">Active Hotels: 284</p>
                <p className="text-sm text-muted-foreground">Across 45 cities</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <p className="font-medium text-foreground">Pending Approvals: 12</p>
                <p className="text-sm text-muted-foreground">New partnerships waiting</p>
              </div>
              <Button className="w-full" onClick={handleAddHotel}>
                + Add Hotel Partner
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
