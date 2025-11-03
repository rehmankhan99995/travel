"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BalanceUpdates() {
  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Balance Updates</CardTitle>
          <CardDescription>Manage and update account balances</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">Total Balances</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">$3,858,680</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-600 font-medium">Today's Changes</p>
              <p className="text-3xl font-bold text-green-900 mt-2">+$125,450</p>
            </div>
          </div>
          <Button className="w-full">Update Agent Balances</Button>
          <Button variant="outline" className="w-full bg-transparent">
            Adjust Account Balance
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
