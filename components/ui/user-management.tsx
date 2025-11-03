"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function UserManagement() {
  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Create, modify, or remove user accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-lg">
                <p className="font-medium text-foreground">Active Staff: 42</p>
                <p className="text-sm text-muted-foreground">Across 8 branches</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <p className="font-medium text-foreground">Active Agents: 156</p>
                <p className="text-sm text-muted-foreground">Premium & Standard tiers</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <p className="font-medium text-foreground">Blocked Users: 8</p>
                <p className="text-sm text-muted-foreground">Due to compliance issues</p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <p className="font-medium text-foreground">Pending Approval: 5</p>
                <p className="text-sm text-muted-foreground">New registration requests</p>
              </div>
            </div>
            <Button className="w-full">+ Create New User</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
