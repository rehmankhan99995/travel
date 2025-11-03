"use client"

import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export default function VouchersPage() {
  const vouchers = [
    {
      id: 1,
      hotel: "Hilton Hotel, Dubai",
      checkin: "Jan 15, 2024",
      checkout: "Jan 18, 2024",
      flight: "EK 101 - Emirates",
      passenger: "Muhammad Malique",
    },
    {
      id: 2,
      hotel: "Marriott Hotel, Mecca",
      checkin: "Feb 01, 2024",
      checkout: "Feb 08, 2024",
      flight: "SV 203 - Saudi Airlines",
      passenger: "Fatima Hassan",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hotel Vouchers</h1>
          <Button className="bg-blue-700 text-white cursor-pointer">
            <FileText className="w-4 h-4 mr-2" />
            Create Voucher
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            {vouchers.map((voucher) => (
              <div key={voucher.id} className="border rounded-lg p-4 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Hotel</div>
                    <div className="font-medium text-gray-900">{voucher.hotel}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Guest</div>
                    <div className="font-medium text-gray-900">{voucher.passenger}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Check-in / Check-out</div>
                    <div className="font-medium text-gray-900">
                      {voucher.checkin} - {voucher.checkout}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase mb-1">Flight</div>
                    <div className="font-medium text-gray-900">{voucher.flight}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
