"use client"

import { useState } from "react"
import Header from "@/components/ui/staffheader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MoreVertical } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function HotelsPage() {
  const [vouchers, setVouchers] = useState([
    { id: 1, hotel: "Hilton Makkah", guest: "Ali Al-Otaibi", nights: 3, price: "1,200 SAR", status: "Active" },
    { id: 2, hotel: "Intercontinental Jeddah", guest: "Sara Al-Yami", nights: 2, price: "850 SAR", status: "Completed" },
    { id: 3, hotel: "Pullman Riyadh", guest: "Nora Al-Khaled", nights: 4, price: "1,600 SAR", status: "Active" },
    { id: 4, hotel: "Sofitel Al Balad", guest: "Mohammed Al-Amer", nights: 3, price: "1,400 SAR", status: "Pending" },
  ])

  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [newVoucher, setNewVoucher] = useState({
    hotel: "",
    guest: "",
    nights: "",
    price: "",
    status: "Pending",
  })

  // Filter logic
  const filteredVouchers = vouchers.filter((v) => {
    const matchesSearch =
      v.hotel.toLowerCase().includes(search.toLowerCase()) ||
      v.guest.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "All" || v.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Add voucher
  const handleAddVoucher = () => {
    if (!newVoucher.hotel || !newVoucher.guest || !newVoucher.nights || !newVoucher.price) {
      return alert("All fields are required!")
    }

    
    setNewVoucher({
      hotel: "",
      guest: "",
      nights: "",
      price: "",
      status: "Pending",
    })

    setIsDialogOpen(false)
  }

  return (
    <>
      {/* Header */}
      <Header title="Hotel Management" />

      {/* Main Content */}
      <div className="p-8 overflow-auto flex-1">
        {/* Page Title + Button */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Hotel Vouchers</h2>
            <p className="text-gray-600 mt-1">Create and manage hotel bookings</p>
          </div>
          <Button className="bg-blue-700 text-white" onClick={() => setIsDialogOpen(true)}>
            + Create Voucher
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <Input
            placeholder="Search by hotel or guest..."
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
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Hotel Vouchers Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              All Hotel Vouchers
            </CardTitle>
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
                  {filteredVouchers.map((voucher) => (
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
                        <button
                          onClick={() => alert(`Viewing voucher for ${voucher.guest}`)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredVouchers.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center py-6 text-gray-500">
                        No vouchers found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ➕ Create Voucher Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Hotel Voucher</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <Input
              placeholder="Hotel Name"
              value={newVoucher.hotel}
              onChange={(e) => setNewVoucher({ ...newVoucher, hotel: e.target.value })}
            />
            <Input
              placeholder="Guest Name"
              value={newVoucher.guest}
              onChange={(e) => setNewVoucher({ ...newVoucher, guest: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Number of Nights"
              value={newVoucher.nights}
              onChange={(e) => setNewVoucher({ ...newVoucher, nights: e.target.value })}
            />
            <Input
              placeholder="Price (e.g., 1200 SAR)"
              value={newVoucher.price}
              onChange={(e) => setNewVoucher({ ...newVoucher, price: e.target.value })}
            />
            <Select
              value={newVoucher.status}
              onValueChange={(v) => setNewVoucher({ ...newVoucher, status: v })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddVoucher} className="bg-blue-700 text-white">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
