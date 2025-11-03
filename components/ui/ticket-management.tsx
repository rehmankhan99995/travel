import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, MoreVertical } from "lucide-react"

export default function TicketManagement() {
  const tickets = [
    { id: 1, passenger: "Ahmed Al-Rashid", route: "RUH → LHR", date: "2025-11-15", status: "Confirmed" },
    { id: 2, passenger: "Fatima Al-Saud", route: "RUH → JED", date: "2025-11-20", status: "Pending" },
    { id: 3, passenger: "Mohammed Al-Amer", route: "RUH → CAI", date: "2025-12-01", status: "Confirmed" },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Plane className="w-5 h-5" />
            Tickets
          </CardTitle>
        </div>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">+ Create Ticket</Button>
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
                        ticket.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
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
  )
}
