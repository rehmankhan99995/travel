import Header from "@/components/ui/staffheader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MoreVertical } from "lucide-react"

export default function HotelsPage() {
  const vouchers = [
    { id: 1, hotel: "Hilton Makkah", guest: "Ali Al-Otaibi", nights: 3, price: "1,200 SAR", status: "Active" },
    {
      id: 2,
      hotel: "Intercontinental Jeddah",
      guest: "Sara Al-Yami",
      nights: 2,
      price: "850 SAR",
      status: "Completed",
    },
    { id: 3, hotel: "Pullman Riyadh", guest: "Nora Al-Khaled", nights: 4, price: "1,600 SAR", status: "Active" },
    { id: 4, hotel: "Sofitel Al Balad", guest: "Mohammed Al-Amer", nights: 3, price: "1,400 SAR", status: "Pending" },
  ]

  return (
    <>
      {/* Header */}
      <Header title="Hotel Management" />

      {/* Content */}
      <div className="p-8 overflow-auto flex-1">
        {/* Title with Action Button */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Hotel Vouchers</h2>
            <p className="text-gray-600 mt-1">Create and manage hotel bookings</p>
          </div>
          <Button className="bg-blue-700 text-white cursor-pointer">+ Create Voucher</Button>
        </div>

        {/* Hotel Vouchers Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                All Hotel Vouchers
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Hotel</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Guest</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Nights</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vouchers.map((voucher) => (
                    <tr key={voucher.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900">{voucher.hotel}</td>
                      <td className="py-3 px-4 text-gray-600">{voucher.guest}</td>
                      <td className="py-3 px-4 text-gray-600">{voucher.nights}</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">{voucher.price}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            voucher.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : voucher.status === "Completed"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {voucher.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
