import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ClipboardList } from "lucide-react"

export default function CheckInCheckOut() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5" />
          Check-in / Check-out Forms
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Check-in Form */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Check-in</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Traveler Name</label>
                <Input placeholder="Full name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
                <Input placeholder="Passport number" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hotel</label>
                <Input placeholder="Hotel name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                <Input type="date" className="w-full" />
              </div>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Check-in</Button>
            </div>
          </div>

          {/* Check-out Form */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Check-out</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Traveler Name</label>
                <Input placeholder="Full name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
                <Input placeholder="Passport number" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hotel</label>
                <Input placeholder="Hotel name" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                <Input type="date" className="w-full" />
              </div>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">Check-out</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
