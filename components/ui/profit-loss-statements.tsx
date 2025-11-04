"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"

export default function ProfitLossStatements() {
  // ✅ Sample financial data by month
  const data = {
    "November 2024": { revenue: 847250, expenses: 445680 },
    "October 2024": { revenue: 799300, expenses: 420120 },
    "September 2024": { revenue: 756900, expenses: 398750 },
  }

  const [selectedMonth, setSelectedMonth] = useState<keyof typeof data>("November 2024")

  // ✅ Compute P&L dynamically
  const { revenue, expenses } = data[selectedMonth]
  const profit = revenue - expenses
  const margin = ((profit / revenue) * 100).toFixed(2)

  // ✅ Toast when report is generated
  const handleGenerate = () => {
    toast.success(`P&L Report for ${selectedMonth} generated successfully!`, {
      description: `Net Profit: $${profit.toLocaleString()} (${margin}%)`,
    })
  }

  return (
    <div className="p-8 space-y-6">
      {/* ✅ Toaster */}
      <Toaster position="top-right" richColors />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Monthly P&L Statement</CardTitle>
              <CardDescription>{selectedMonth} financial overview</CardDescription>
            </div>

            {/* ✅ Month Selector */}
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value as keyof typeof data)}
              className="border border-border rounded-md px-3 py-2 bg-white text-sm font-medium shadow-sm hover:border-primary focus:outline-none"
            >
              {Object.keys(data).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-bold mt-2">${revenue.toLocaleString()}</p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Total Expenses</p>
              <p className="text-2xl font-bold mt-2">${expenses.toLocaleString()}</p>
            </div>

            <div
              className={`border border-border rounded-lg p-4 ${
                profit >= 0 ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  profit >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {profit >= 0 ? "Net Profit" : "Net Loss"}
              </p>
              <p
                className={`text-2xl font-bold mt-2 ${
                  profit >= 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                ${profit.toLocaleString()}
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Profit Margin</p>
              <p
                className={`text-2xl font-bold mt-2 ${
                  profit >= 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                {margin}%
              </p>
            </div>

            {/* ✅ Generate Report Button */}
            <Button className="w-full mt-4" onClick={handleGenerate}>
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
