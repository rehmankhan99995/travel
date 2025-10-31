import Header from "@/components/ui/staffheader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, MoreVertical } from "lucide-react"

export default function TicketsPage() {
  const tickets = [
    { id: 1, passenger: "Ahmed Al-Rashid", route: "RUH → LHR", date: "2025-11-15", status: "Confirmed" },
    { id: 2, passenger: "Fatima Al-Saud", route: "RUH → JED", date: "2025-11-20", status: "Pending" },
    { id: 3, passenger: "Mohammed Al-Amer", route: "RUH → CAI", date: "2025-12-01", status: "Confirmed" },
    { id: 4, passenger: "Layla Al-Dosari", route: "RUH → DXB", date: "2025-12-05", status: "Confirmed" },
    { id: 5, passenger: "Hassan Al-Harbi", route: "RUH → AMS", date: "2025-12-10", status: "Pending" },
  ]

  return (
    <>
      {/* Header */}
      <Header title="Tickets Management" />

      {/* Content */}
      <div className="p-8 overflow-auto flex-1">
        {/* Title with Action Button */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Tickets</h2>
            <p className="text-gray-600 mt-1">Manage and create flight tickets</p>
          </div>
          <Button className="bg-blue-700 text-white cursor-pointer">+ Create Ticket</Button>
        </div>

        {/* Tickets Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Plane className="w-5 h-5" />
                All Tickets
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Passenger</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Route</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900">{ticket.passenger}</td>
                      <td className="py-3 px-4 text-gray-600">{ticket.route}</td>
                      <td className="py-3 px-4 text-gray-600">{ticket.date}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            ticket.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {ticket.status}
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
