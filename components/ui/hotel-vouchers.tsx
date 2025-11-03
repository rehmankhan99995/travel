"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Plus, Download, Hotel, Trash2 } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu" // adjust your import path

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

  const [formData, setFormData] = useState({
    hotelName: "",
    voucherId: "",
    nights: "",
    checkIn: "",
    checkOut: "",
    rate: "",
  })

  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null)

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
    toast.success("Voucher created successfully 🎉")
  }

  const handleDeleteVoucher = (voucherId: number) => {
    setVouchers(vouchers.filter((v) => v.id !== voucherId))
    toast.success("Voucher deleted 🗑️")
  }

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

        {/* Create Voucher Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-blue-700 text-white hover:bg-blue-800 flex items-center gap-2">
              <Plus size={18} />
              Create Voucher
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-80 p-4 space-y-3">
            <DropdownMenuLabel className="text-lg font-semibold">
              Create New Voucher
            </DropdownMenuLabel>

            <Input
              placeholder="Hotel Name"
              value={formData.hotelName}
              onChange={(e) =>
                setFormData({ ...formData, hotelName: e.target.value })
              }
            />
            <Input
              placeholder="Voucher ID"
              value={formData.voucherId}
              onChange={(e) =>
                setFormData({ ...formData, voucherId: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Nights"
              value={formData.nights}
              onChange={(e) =>
                setFormData({ ...formData, nights: e.target.value })
              }
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                type="date"
                value={formData.checkIn}
                onChange={(e) =>
                  setFormData({ ...formData, checkIn: e.target.value })
                }
              />
              <Input
                type="date"
                value={formData.checkOut}
                onChange={(e) =>
                  setFormData({ ...formData, checkOut: e.target.value })
                }
              />
            </div>
            <Input
              type="number"
              placeholder="Rate/Night ($)"
              value={formData.rate}
              onChange={(e) =>
                setFormData({ ...formData, rate: e.target.value })
              }
            />

            <Button
              className="w-full bg-blue-700 text-white hover:bg-blue-800"
              onClick={handleAddVoucher}
            >
              Add Voucher
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Voucher Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vouchers.map((voucher) => (
          <Card key={voucher.id} className="p-6 hover:shadow-lg transition-shadow">
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
                  <p className="font-semibold text-foreground">{voucher.checkIn}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Check-out
                  </p>
                  <p className="font-semibold text-foreground">{voucher.checkOut}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Nights
                  </p>
                  <p className="font-semibold text-foreground">{voucher.nights}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Rate/per Night
                  </p>
                  <p className="font-semibold text-blue-700">${voucher.rate}</p>
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
                variant="destructive"
                className="flex-1 cursor-pointer"
                size="sm"
                onClick={() => handleDeleteVoucher(voucher.id)}
              >
                <Trash2 size={16} />
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
