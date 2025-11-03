"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { toast } from "sonner" // ✅ FIXED HERE
import { Plane } from "lucide-react"
import { Clock } from 'lucide-react';
import { DollarSign } from 'lucide-react';

const visaTypes = [
  {
    id: 1,
    country: "Saudi Arabia - Umrah",
    type: "Umrah Visa",
    duration: "30 days",
    price: 150,
    processingTime: "5-7 days",
    requirements: ["Passport", "Photo", "Hotel booking"],
  },
  {
    id: 2,
    country: "Saudi Arabia - Hajj",
    type: "Hajj Visa",
    duration: "60 days",
    price: 200,
    processingTime: "7-10 days",
    requirements: ["Passport", "Photo", "Vaccination cert"],
  },
  {
    id: 3,
    country: "United Arab Emirates - Baku",
    type: "Transit Visa",
    duration: "14 days",
    price: 50,
    processingTime: "2-3 days",
    requirements: ["Passport", "Photo"],
  },
  {
    id: 4,
    country: "United Arab Emirates - Dubai",
    type: "Tourist Visa",
    duration: "30 days",
    price: 100,
    processingTime: "3-5 days",
    requirements: ["Passport", "Photo", "Hotel booking"],
  },
]

export default function VisaSection() {
  const [selectedVisa, setSelectedVisa] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [form, setForm] = useState({ name: "", passport: "", email: "" })

  const handleApply = (visa: any) => {
    setSelectedVisa(visa)
    setIsDialogOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsDialogOpen(false)
    setForm({ name: "", passport: "", email: "" })
    toast.success(`Visa application for ${selectedVisa.type} submitted successfully! 🎉`)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Visa Services</h1>
        <p className="text-muted-foreground">Apply for visas and check rates set by admin</p>
      </div>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visaTypes.map((visa) => (
          <Card key={visa.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">{visa.type}</h3>
                <p className="text-sm text-muted-foreground">{visa.country}</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plane size={20} className="text-primary" />
              </div>
            </div>

            <div className="space-y-3 mb-6 flex-1">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Processing Time</p>
                  <p className="font-semibold text-foreground">{visa.processingTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-primary" />
                <div className="text-sm">
                  <p className="text-muted-foreground">Price</p>
                  <p className="font-bold text-primary text-lg">${visa.price}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Validity</p>
                <Badge variant="secondary">{visa.duration}</Badge>
              </div>

              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Requirements</p>
                <ul className="text-sm space-y-1">
                  {visa.requirements.map((req, idx) => (
                    <li key={idx} className="text-foreground">
                      • {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              onClick={() => handleApply(visa)}
              className="w-full cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Apply Now
            </Button>
          </Card>
        ))}
      </div>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for {selectedVisa?.type}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label>Passport Number</Label>
              <Input
                value={form.passport}
                onChange={(e) => setForm({ ...form, passport: e.target.value })}
                placeholder="Enter passport number"
                required
              />
            </div>

            <div>
              <Label>Email Address</Label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                required
              />
            </div>

            <DialogFooter>
              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                Submit Application
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
