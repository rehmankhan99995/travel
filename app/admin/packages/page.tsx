"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      name: "Umrah 15 Days",
      date: "15/11/2023",
      amount: "€1200",
      hotel: "4-star",
      flights: "Qatar Airways",
      status: "active",
      invoice: "PKG24513",
    },
    {
      id: 2,
      name: "Dubai Tour 7 Days",
      date: "14/11/2023",
      amount: "€800",
      hotel: "3-star",
      flights: "Emirates",
      status: "inactive",
      invoice: "PKG24512",
    },
    {
      id: 3,
      name: "Europe 10 Days",
      date: "13/11/2023",
      amount: "€1500",
      hotel: "4-star",
      flights: "Turkish Airlines",
      status: "active",
      invoice: "PKG24511",
    },
    {
      id: 4,
      name: "Thailand Tour 5 Days",
      date: "12/11/2023",
      amount: "€600",
      hotel: "3-star",
      flights: "Thai Airways",
      status: "active",
      invoice: "PKG24510",
    },
    {
      id: 5,
      name: "Egypt Tour 8 Days",
      date: "11/11/2023",
      amount: "€900",
      hotel: "4-star",
      flights: "EgyptAir",
      status: "active",
      invoice: "PKG24509",
    },
  ]

  const getStatusColor = (status:any) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status:any) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Travel Packages</h1>
          <Button className="bg-blue-700 text-white cursor-pointer">
            <Download className="w-4 h-4 mr-2" />
            Upload Package
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Package Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{pkg.name}</div>
                    <div className="text-xs text-gray-500">{pkg.invoice}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{pkg.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{pkg.amount}</td>
                  <td className="px-6 py-4">
                    <Badge className={getStatusColor(pkg.status)}>{getStatusLabel(pkg.status)}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
