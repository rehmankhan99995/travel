"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from "sonner"

export default function StaffReports() {
  const [filter, setFilter] = useState<"All" | "Active" | "On Leave">("All")
  const [sortDescending, setSortDescending] = useState(true)

  const staffData = [
    { name: "Alice Thompson", role: "Senior Accountant", transactions: 234, status: "Active" },
    { name: "Bob Peterson", role: "Accountant", transactions: 189, status: "Active" },
    { name: "Carol Martinez", role: "Financial Analyst", transactions: 145, status: "On Leave" },
    { name: "David Lee", role: "Junior Accountant", transactions: 98, status: "Active" },
  ]

  // ✅ Filter staff by status
  const filteredStaff =
    filter === "All" ? staffData : staffData.filter((s) => s.status === filter)

  // ✅ Sort staff by transactions
  const sortedStaff = [...filteredStaff].sort((a, b) =>
    sortDescending ? b.transactions - a.transactions : a.transactions - b.transactions
  )

  // ✅ Refresh toast
  const handleRefresh = () => {
    toast.success("Staff report refreshed successfully!", {
      description: "Latest performance data loaded.",
    })
  }

  return (
    <div className="p-8 space-y-6">
      <Toaster position="top-right" richColors />

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Staff Performance Report</CardTitle>
              <CardDescription>Staff activity and productivity overview</CardDescription>
            </div>

            {/* ✅ Controls */}
            <div className="flex items-center gap-3">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as "All" | "Active" | "On Leave")}
                className="border border-border rounded-md px-3 py-2 text-sm bg-white shadow-sm hover:border-primary focus:outline-none"
              >
                <option>All</option>
                <option>Active</option>
                <option>On Leave</option>
              </select>

              <Button
                variant="outline"
                onClick={() => setSortDescending(!sortDescending)}
              >
                {sortDescending ? "Sort ↓" : "Sort ↑"}
              </Button>

              <Button onClick={handleRefresh}>Refresh Report</Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {sortedStaff.map((staff, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{staff.name}</p>
                  <p className="text-sm text-muted-foreground">{staff.role}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">{staff.transactions}</p>
                  <p
                    className={`text-xs font-medium ${
                      staff.status === "Active" ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {staff.status}
                  </p>
                </div>
              </div>
            ))}

            {sortedStaff.length === 0 && (
              <p className="text-center text-muted-foreground py-6">No staff found for this filter.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
