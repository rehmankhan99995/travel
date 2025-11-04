"use client"

import { useState } from "react"
import Header from "@/components/ui/staffheader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Package, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

interface UmrahPackage {
  id: number
  name: string
  price: string
  seats: string
  status: string
}

export default function UmrahPage() {
  const [packages, setPackages] = useState<UmrahPackage[]>([
    { id: 1, name: "7-Day Gold Umrah", price: "5,500 SAR", seats: "40/50", status: "Available" },
    { id: 2, name: "10-Day Premium Umrah", price: "7,200 SAR", seats: "25/30", status: "Available" },
    { id: 3, name: "5-Day Silver Umrah", price: "3,800 SAR", seats: "45/50", status: "Almost Full" },
    { id: 4, name: "14-Day Platinum Umrah", price: "10,500 SAR", seats: "8/20", status: "Limited" },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [openDialog, setOpenDialog] = useState(false)
  const [newPackage, setNewPackage] = useState({ name: "", price: "", seats: "", status: "Available" })

  // Filtered packages
  const filteredPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddPackage = () => {
    if (!newPackage.name || !newPackage.price || !newPackage.seats) return
    const newPkg = { id: Date.now(), ...newPackage }
    setPackages((prev) => [...prev, newPkg])
    setNewPackage({ name: "", price: "", seats: "", status: "Available" })
    setOpenDialog(false)
  }

  const handleDelete = (id: number) => {
    setPackages((prev) => prev.filter((pkg) => pkg.id !== id))
  }

  return (
    <>
      <Header title="Umrah Packages" />

      <div className="p-8 overflow-auto flex-1">
        {/* Title with Action Button and Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-bold text-gray-900">Umrah Packages</h2>
            <p className="text-gray-600 mt-1">Manage and create Umrah packages</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Input
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-60"
            />
            <Button onClick={() => setOpenDialog(true)} className="bg-blue-700 text-white">
              + Create Package
            </Button>
          </div>
        </div>

        {/* Umrah Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Package className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{pkg.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{pkg.seats} seats booked</p>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(pkg.id)} className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900">{pkg.price}</p>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      pkg.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : pkg.status === "Almost Full"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {pkg.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Packages Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Packages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Package</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Available Seats</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPackages.map((pkg) => (
                    <tr key={pkg.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900">{pkg.name}</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">{pkg.price}</td>
                      <td className="py-3 px-4 text-gray-600">{pkg.seats}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            pkg.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {pkg.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <MoreVertical className="w-4 h-4 text-gray-400" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDelete(pkg.id)} className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Package Modal */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Package</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            <Input
              placeholder="Package Name"
              value={newPackage.name}
              onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
            />
            <Input
              placeholder="Price (e.g. 5500 SAR)"
              value={newPackage.price}
              onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
            />
            <Input
              placeholder="Seats (e.g. 20/50)"
              value={newPackage.seats}
              onChange={(e) => setNewPackage({ ...newPackage, seats: e.target.value })}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddPackage} className="bg-blue-700 text-white">
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
