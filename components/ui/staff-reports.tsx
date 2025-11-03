"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffReports() {
  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Staff Performance Report</CardTitle>
          <CardDescription>Staff member activity and productivity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Alice Thompson", role: "Senior Accountant", transactions: 234, status: "Active" },
              { name: "Bob Peterson", role: "Accountant", transactions: 189, status: "Active" },
              { name: "Carol Martinez", role: "Financial Analyst", transactions: 145, status: "On Leave" },
              { name: "David Lee", role: "Junior Accountant", transactions: 98, status: "Active" },
            ].map((staff, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50"
              >
                <div className="flex-1">
                  <p className="font-medium">{staff.name}</p>
                  <p className="text-sm text-muted-foreground">{staff.role}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{staff.transactions}</p>
                  <p className={`text-xs ${staff.status === "Active" ? "text-green-600" : "text-yellow-600"}`}>
                    {staff.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
