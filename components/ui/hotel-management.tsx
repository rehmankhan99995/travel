"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HotelManagement() {
  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Hotel Management</CardTitle>
          <CardDescription>Add, modify, or remove hotel partnerships</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
          <Button className="w-full">+ Add Hotel Partner</Button>
          <Button variant="outline" className="w-full bg-transparent">
            View All Hotels
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
