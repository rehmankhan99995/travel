"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function UserManagement() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  const handleCreateUser = () => {
    if (!name.trim() || !role.trim()) {
      toast.error("Please fill in all fields")
      return
    }

    toast.success(`User "${name}" created successfully!`)
    setName("")
    setRole("")
    setOpen(false)
  }

  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Create, modify, or remove user accounts</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {/* Stats Cards */}
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

            {/* Create Button */}
            <Button className="w-full" onClick={() => setOpen(true)}>
              + Create New User
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dialog for Creating New User */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New User</DialogTitle>
          </DialogHeader>
          <div className="space-y-5">
            <div>
              <Label className="mt-2">Name</Label>
              <Input className="mt-2" placeholder="Enter user name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label>Role</Label>
              <Input className="mt-2" placeholder="Enter user role (e.g. Agent, Staff)" value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
          </div>
          <DialogFooter>
            <Button className="mt-4" onClick={handleCreateUser}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
