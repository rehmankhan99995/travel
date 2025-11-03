import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package } from "lucide-react"

export default function UmrahPackages() {
  const packages = [
    { id: 1, name: "5-Day Umrah", price: "2,500 SAR", participants: 12 },
    { id: 2, name: "7-Day Umrah + Medina", price: "3,200 SAR", participants: 8 },
    { id: 3, name: "10-Day Premium Umrah", price: "4,500 SAR", participants: 5 },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Umrah Packages
          </CardTitle>
        </div>
        <Button className="bg-gray-900 text-white hover:bg-gray-800 text-sm">+ Create Package</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div>
                <p className="font-semibold text-gray-900">{pkg.name}</p>
                <p className="text-sm text-gray-600">{pkg.participants} participants</p>
              </div>
              <p className="font-semibold text-gray-900">{pkg.price}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
