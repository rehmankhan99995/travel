"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfitLossStatements() {
  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Monthly P&L Statement</CardTitle>
          <CardDescription>November 2024 financial overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-bold mt-2">$847,250</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Total Expenses</p>
              <p className="text-2xl font-bold mt-2">$445,680</p>
            </div>
            <div className="border border-border rounded-lg p-4 bg-green-50">
              <p className="text-sm text-green-600 font-medium">Net Profit</p>
              <p className="text-2xl font-bold text-green-700 mt-2">$401,570</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Profit Margin</p>
              <p className="text-2xl font-bold mt-2">47.4%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
