"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Download, Hotel } from "lucide-react"

const vouchers = [
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
]

export default function HotelVouchers() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Hotel Vouchers</h1>
          <p className="text-muted-foreground">Create and manage hotel booking vouchers</p>
        </div>
        <Button className="bg-primary text-primary-foreground">
          <Plus size={18} />
          Create Voucher
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vouchers.map((voucher) => (
          <Card key={voucher.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Hotel size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{voucher.hotelName}</h3>
                  <p className="text-sm text-muted-foreground">ID: {voucher.voucherId}</p>
                </div>
              </div>
              <Badge>{voucher.status}</Badge>
            </div>

            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Check-in</p>
                  <p className="font-semibold text-foreground">{voucher.checkIn}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Check-out</p>
                  <p className="font-semibold text-foreground">{voucher.checkOut}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Nights</p>
                  <p className="font-semibold text-foreground">{voucher.nights}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">Rate/Night</p>
                  <p className="font-semibold text-primary">${voucher.rate}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-primary text-primary-foreground" size="sm">
                <Download size={16} />
                Download
              </Button>
              <Button className="flex-1 bg-transparent" variant="outline" size="sm">
                View
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
