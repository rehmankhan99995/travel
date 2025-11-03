"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Trash2,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

interface Refund {
  id: number
  bookingId: string
  packageName: string
  status: string
  requestDate: string
  amount: number
}

export default function RefundRequests() {
  const [refundRequests, setRefundRequests] = useState<Refund[]>([
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
  ])

  const [isNewDialogOpen, setIsNewDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedRefund, setSelectedRefund] = useState<Refund | null>(null)

  const [formData, setFormData] = useState({
    bookingId: "",
    packageName: "",
    amount: "",
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle size={16} className="text-green-600" />
      case "Pending":
        return <Clock size={16} className="text-yellow-500" />
      case "Rejected":
        return <AlertCircle size={16} className="text-red-500" />
      default:
        return null
    }
  }

  const handleAddRefund = () => {
    if (!formData.bookingId || !formData.packageName || !formData.amount) {
      toast.error("Please fill all fields!")
      return
    }

    const newRefund: Refund = {
      id: refundRequests.length + 1,
      bookingId: formData.bookingId,
      packageName: formData.packageName,
      amount: parseFloat(formData.amount),
      status: "Pending",
      requestDate: new Date().toISOString().split("T")[0],
    }

    setRefundRequests([...refundRequests, newRefund])
    setIsNewDialogOpen(false)
    setFormData({ bookingId: "", packageName: "", amount: "" })
    toast.success("Refund request added successfully 🎉")
  }

  const handleDeleteRefund = () => {
    if (!selectedRefund) return
    setRefundRequests(refundRequests.filter((r) => r.id !== selectedRefund.id))
    setIsDeleteDialogOpen(false)
    toast.success("Refund request deleted 🗑️")
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Refund Requests
          </h1>
          <p className="text-muted-foreground">
            Manage your refund requests
          </p>
        </div>
        <Button
          className="bg-blue-700 cursor-pointer text-white hover:bg-blue-800"
          onClick={() => setIsNewDialogOpen(true)}
        >
          <Plus size={18} />
          New Refund Request
        </Button>
      </div>

      {/* Refund Cards */}
      <div className="space-y-4">
        {refundRequests.map((request) => (
          <Card
            key={request.id}
            className="p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {request.packageName}
                  </h3>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 border-blue-300"
                  >
                    {getStatusIcon(request.status)}
                    {request.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Booking ID</p>
                    <p className="font-semibold text-foreground">
                      {request.bookingId}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Request Date</p>
                    <p className="font-semibold text-foreground">
                      {request.requestDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Amount</p>
                    <p className="font-bold text-blue-700">
                      ${request.amount}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                className="cursor-pointer"
                  variant="outline"
                  onClick={() => {
                    setSelectedRefund(request)
                    setIsViewDialogOpen(true)
                  }}
                >
                  View Details
                </Button>

                <Button
                  className="cursor-pointer"
                  variant="destructive"
                  onClick={() => {
                    setSelectedRefund(request)
                    setIsDeleteDialogOpen(true)
                  }}
                >
                  <Trash2 size={16} />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* New Refund Dialog */}
      <Dialog open={isNewDialogOpen} onOpenChange={setIsNewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Refund Request</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <Label>Booking ID</Label>
              <Input
                value={formData.bookingId}
                onChange={(e) =>
                  setFormData({ ...formData, bookingId: e.target.value })
                }
                placeholder="Enter Booking ID"
              />
            </div>
            <div>
              <Label>Package Name</Label>
              <Input
                value={formData.packageName}
                onChange={(e) =>
                  setFormData({ ...formData, packageName: e.target.value })
                }
                placeholder="Enter Package Name"
              />
            </div>
            <div>
              <Label>Amount</Label>
              <Input
                type="number"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                placeholder="Enter Amount"
              />
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button
              onClick={handleAddRefund}
              className="bg-blue-700 text-white"
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Refund Details</DialogTitle>
          </DialogHeader>
          {selectedRefund && (
            <div className="space-y-3 text-sm">
              <p>
                <strong>Booking ID:</strong> {selectedRefund.bookingId}
              </p>
              <p>
                <strong>Package Name:</strong> {selectedRefund.packageName}
              </p>
              <p>
                <strong>Request Date:</strong> {selectedRefund.requestDate}
              </p>
              <p>
                <strong>Status:</strong> {selectedRefund.status}
              </p>
              <p>
                <strong>Amount:</strong> ${selectedRefund.amount}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Refund Request</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this refund request? This action cannot be undone.
          </p>
          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteRefund}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
