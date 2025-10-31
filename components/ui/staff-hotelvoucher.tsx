import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"

export default function HotelVouchers() {
  const vouchers = [
    { id: 1, hotel: "Hilton Makkah", guest: "Ali Al-Otaibi", nights: 3, price: "1,200 SAR" },
    { id: 2, hotel: "Intercontinental Jeddah", guest: "Sara Al-Yami", nights: 2, price: "850 SAR" },
    { id: 3, hotel: "Pullman Riyadh", guest: "Nora Al-Khaled", nights: 4, price: "1,600 SAR" },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Hotel Vouchers
          </CardTitle>
        </div>
        <Button className="bg-gray-900 text-white hover:bg-gray-800 text-sm">+ Create Voucher</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {vouchers.map((voucher) => (
            <div
              key={voucher.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div>
                <p className="font-semibold text-gray-900">{voucher.hotel}</p>
                <p className="text-sm text-gray-600">
                  {voucher.guest} • {voucher.nights} nights
                </p>
              </div>
              <p className="font-semibold text-gray-900">{voucher.price}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
