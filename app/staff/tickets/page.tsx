"use client"

import { useState } from "react"
import Header from "@/components/ui/staffheader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, MoreVertical } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function TicketsPage() {
  const [tickets, setTickets] = useState([
    { id: 1, passenger: "Ahmed Al-Rashid", route: "RUH → LHR", date: "2025-11-15", status: "Confirmed" },
    { id: 2, passenger: "Fatima Al-Saud", route: "RUH → JED", date: "2025-11-20", status: "Pending" },
    { id: 3, passenger: "Mohammed Al-Amer", route: "RUH → CAI", date: "2025-12-01", status: "Confirmed" },
    { id: 4, passenger: "Layla Al-Dosari", route: "RUH → DXB", date: "2025-12-05", status: "Confirmed" },
    { id: 5, passenger: "Hassan Al-Harbi", route: "RUH → AMS", date: "2025-12-10", status: "Pending" },
  ])

  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // New Ticket Form
  const [newTicket, setNewTicket] = useState({
    passenger: "",
    route: "",
    date: "",
    status: "Pending",
  })

  const filteredTickets = tickets.filter((t) => {
    const matchesSearch = t.passenger.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "All" || t.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleAddTicket = () => {
    if (!newTicket.passenger || !newTicket.route || !newTicket.date) return alert("All fields are required!")
    setTickets([
      ...tickets,
      { id: tickets.length + 1, ...newTicket },
    ])
    setNewTicket({ passenger: "", route: "", date: "", status: "Pending" })
    setIsDialogOpen(false)
  }

  return (
    <>
      {/* Header */}
      <Header title="Tickets Management" />

      {/* Content */}
      <div className="p-8 overflow-auto flex-1">
        {/* Title + Actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Tickets</h2>
            <p className="text-gray-600 mt-1">Manage and create flight tickets</p>
          </div>
          <Button
            className="bg-blue-700 text-white cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          >
            + Create Ticket
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <Input
            placeholder="Search by passenger name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <Select onValueChange={setStatusFilter} value={statusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Confirmed">Confirmed</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tickets Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="flex items-center gap-2">
              <Plane className="w-5 h-5" />
              All Tickets
            </CardTitle>
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
                  {filteredTickets.map((ticket) => (
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
                        <button
                          onClick={() => alert(`Viewing ${ticket.passenger}'s ticket`)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredTickets.length === 0 && (
                    <tr>
                      <td colSpan={5} className="text-center py-6 text-gray-500">
                        No tickets found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ➕ Create Ticket Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Ticket</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <Input
              placeholder="Passenger Name"
              value={newTicket.passenger}
              onChange={(e) => setNewTicket({ ...newTicket, passenger: e.target.value })}
            />
            <Input
              placeholder="Route (e.g., RUH → DXB)"
              value={newTicket.route}
              onChange={(e) => setNewTicket({ ...newTicket, route: e.target.value })}
            />
            <Input
              type="date"
              value={newTicket.date}
              onChange={(e) => setNewTicket({ ...newTicket, date: e.target.value })}
            />
            <Select
              value={newTicket.status}
              onValueChange={(v) => setNewTicket({ ...newTicket, status: v })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Confirmed">Confirmed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddTicket} className="bg-blue-700 text-white">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
