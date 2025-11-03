"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Download,
  Hotel,
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

interface Voucher {
  id: number
  hotelName: string
  voucherId: string
  nights: number
  checkIn: string
  checkOut: string
  rate: number
  status: string
}

export default function HotelVouchers() {
  const [vouchers, setVouchers] = useState<Voucher[]>([
    {
      id: 1,
      hotelName: "Makkah Royal Hotel",
      voucherId: "VOU-001",
      nights: 7,
      checkIn: "2024-12-15",
      checkOut: "2024-12-22",
      rate: 150,
      status: "Active",
    },
    {
      id: 2,
      hotelName: "Madinah Deluxe Resort",
      voucherId: "VOU-002",
      nights: 5,
      checkIn: "2024-12-22",
      checkOut: "2024-12-27",
      rate: 120,
      status: "Active",
    },
  ])

  const [isNewDialogOpen, setIsNewDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null)

  const [formData, setFormData] = useState({
    hotelName: "",
    voucherId: "",
    nights: "",
    checkIn: "",
    checkOut: "",
    rate: "",
  })

  // Add new voucher
  const handleAddVoucher = () => {
    if (
      !formData.hotelName ||
      !formData.voucherId ||
      !formData.nights ||
      !formData.checkIn ||
      !formData.checkOut ||
      !formData.rate
    ) {
      toast.error("Please fill all fields!")
      return
    }

    const newVoucher: Voucher = {
      id: vouchers.length + 1,
      hotelName: formData.hotelName,
      voucherId: formData.voucherId,
      nights: parseInt(formData.nights),
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      rate: parseFloat(formData.rate),
      status: "Active",
    }

    setVouchers([...vouchers, newVoucher])
    setFormData({
      hotelName: "",
      voucherId: "",
      nights: "",
      checkIn: "",
      checkOut: "",
      rate: "",
    })
    setIsNewDialogOpen(false)
    toast.success("Voucher created successfully 🎉")
  }

  // Delete voucher
  const handleDeleteVoucher = () => {
    if (!selectedVoucher) return
    setVouchers(vouchers.filter((v) => v.id !== selectedVoucher.id))
    setIsDeleteDialogOpen(false)
    toast.success("Voucher deleted 🗑️")
  }

  // Mock download
  const handleDownload = (voucher: Voucher) => {
    toast.success(`Downloading voucher ${voucher.voucherId}...`)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Hotel Vouchers
          </h1>
          <p className="text-muted-foreground">
            Create and manage hotel booking vouchers
          </p>
        </div>
        <Button
          className="bg-blue-700 cursor-pointer text-white hover:bg-blue-800"
          onClick={() => setIsNewDialogOpen(true)}
        >
          <Plus size={18} />
          Create Voucher
        </Button>
      </div>

      {/* Voucher Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vouchers.map((voucher) => (
          <Card
            key={voucher.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Hotel size={24} className="text-blue-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {voucher.hotelName}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ID: {voucher.voucherId}
                  </p>
                </div>
              </div>
              <Badge>{voucher.status}</Badge>
            </div>

            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Check-in
                  </p>
                  <p className="font-semibold text-foreground">
                    {voucher.checkIn}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Check-out
                  </p>
                  <p className="font-semibold text-foreground">
                    {voucher.checkOut}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Nights
                  </p>
                  <p className="font-semibold text-foreground">
                    {voucher.nights}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Rate/Night
                  </p>
                  <p className="font-semibold text-blue-700">
                    ${voucher.rate}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                className="flex-1 cursor-pointer bg-blue-700 text-white"
                size="sm"
                onClick={() => handleDownload(voucher)}
              >
                <Download size={16} />
                Download
              </Button>
              <Button
              
                variant="outline"
                className="flex-1 cursor-pointer"
                size="sm"
                onClick={() => {
                  setSelectedVoucher(voucher)
                  setIsViewDialogOpen(true)
                }}
              >
                View
              </Button>
              <Button
                className="cursor-pointer"
                variant="destructive"
                size="sm"
                onClick={() => {
                  setSelectedVoucher(voucher)
                  setIsDeleteDialogOpen(true)
                }}
              >
                <Trash2 size={16} />
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Create Voucher Dialog */}
      <Dialog open={isNewDialogOpen} onOpenChange={setIsNewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Voucher</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <div>
              <Label>Hotel Name</Label>
              <Input
                value={formData.hotelName}
                onChange={(e) =>
                  setFormData({ ...formData, hotelName: e.target.value })
                }
                placeholder="Enter hotel name"
              />
            </div>
            <div>
              <Label>Voucher ID</Label>
              <Input
                value={formData.voucherId}
                onChange={(e) =>
                  setFormData({ ...formData, voucherId: e.target.value })
                }
                placeholder="Enter voucher ID"
              />
            </div>
            <div>
              <Label>Nights</Label>
              <Input
                type="number"
                value={formData.nights}
                onChange={(e) =>
                  setFormData({ ...formData, nights: e.target.value })
                }
                placeholder="Enter nights"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Check-in</Label>
                <Input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) =>
                    setFormData({ ...formData, checkIn: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Check-out</Label>
                <Input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) =>
                    setFormData({ ...formData, checkOut: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <Label>Rate/Night ($)</Label>
              <Input
                type="number"
                value={formData.rate}
                onChange={(e) =>
                  setFormData({ ...formData, rate: e.target.value })
                }
                placeholder="Enter rate"
              />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button onClick={handleAddVoucher} className="bg-blue-700 text-white">
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Voucher Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Voucher Details</DialogTitle>
          </DialogHeader>
          {selectedVoucher && (
            <div className="space-y-2 text-sm">
              <p><strong>Hotel:</strong> {selectedVoucher.hotelName}</p>
              <p><strong>Voucher ID:</strong> {selectedVoucher.voucherId}</p>
              <p><strong>Check-in:</strong> {selectedVoucher.checkIn}</p>
              <p><strong>Check-out:</strong> {selectedVoucher.checkOut}</p>
              <p><strong>Nights:</strong> {selectedVoucher.nights}</p>
              <p><strong>Rate/Night:</strong> ${selectedVoucher.rate}</p>
              <p><strong>Status:</strong> {selectedVoucher.status}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Voucher</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this voucher? This action cannot be undone.
          </p>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteVoucher}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
