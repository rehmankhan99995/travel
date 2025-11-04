"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function HotelManagement() {
  const [addOpen, setAddOpen] = useState(false)
  const [viewOpen, setViewOpen] = useState(false)
  const [hotelName, setHotelName] = useState("")
  const [city, setCity] = useState("")
  const [tier, setTier] = useState("")

  const handleAddHotel = () => {
    if (!hotelName || !city || !tier) {
      toast.error("Please fill in all fields before adding a hotel.")
      return
    }
    toast.success(`Hotel "${hotelName}" added successfully!`)
    setAddOpen(false)
    setHotelName("")
    setCity("")
    setTier("")
  }

  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Hotel Management</CardTitle>
          <CardDescription>Add, modify, or remove hotel partnerships</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <p className="font-medium text-foreground">Active Hotels: 284</p>
              <p className="text-sm text-muted-foreground">Across 45 cities</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="font-medium text-foreground">Pending Approvals: 12</p>
              <p className="text-sm text-muted-foreground">New partnerships waiting</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="font-medium text-foreground">Inactive Hotels: 23</p>
              <p className="text-sm text-muted-foreground">Need renewal</p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <p className="font-medium text-foreground">Tier Distribution</p>
              <p className="text-sm text-muted-foreground">5★: 84, 4★: 120, 3★: 80</p>
            </div>
          </div>

          {/* Buttons */}
          <Button className="w-full" onClick={() => setAddOpen(true)}>
            + Add Hotel Partner
          </Button>
          <Button variant="outline" className="w-full bg-transparent" onClick={() => setViewOpen(true)}>
            View All Hotels
          </Button>
        </CardContent>
      </Card>

      {/* ✅ Add Hotel Dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Hotel Partner</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              className="mt-5"
              placeholder="Hotel Name"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
            />
            <Input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              placeholder="Tier (e.g., 3★, 4★, 5★)"
              value={tier}
              onChange={(e) => setTier(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setAddOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddHotel}>Add Hotel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ✅ View All Hotels Dialog */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>All Hotels</DialogTitle>
          </DialogHeader>
          <div className="max-h-60 mt-3 overflow-y-auto space-y-2">
            {[
              "Hilton Makkah",
              "Raffles Jeddah",
              "Fairmont Madinah",
              "Swissôtel Makkah",
              "Pullman ZamZam",
              "InterContinental Riyadh",
              "Marriott Dammam",
            ].map((hotel, idx) => (
              <div
                key={idx}
                className="p-3 border border-border rounded-md hover:bg-muted/50 flex justify-between"
              >
                <p>{hotel}</p>
                <span className="text-sm text-muted-foreground">Active</span>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={() => setViewOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
