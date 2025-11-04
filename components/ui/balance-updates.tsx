"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function BalanceUpdates() {
  const [open, setOpen] = useState(false)
  const [adjustOpen, setAdjustOpen] = useState(false)
  const [agentAmount, setAgentAmount] = useState("")
  const [adjustAmount, setAdjustAmount] = useState("")

  const handleAgentUpdate = () => {
    if (!agentAmount) {
      toast.error("Please enter an amount to update agent balances.")
      return
    }
    toast.success(`Agent balances updated by $${agentAmount}`)
    setOpen(false)
    setAgentAmount("")
  }

  const handleAdjustBalance = () => {
    if (!adjustAmount) {
      toast.error("Please enter an amount to adjust the account.")
      return
    }
    toast.success(`Account balance adjusted by $${adjustAmount}`)
    setAdjustOpen(false)
    setAdjustAmount("")
  }

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

          {/* Update Agent Balances Button */}
          <Button className="w-full" onClick={() => setOpen(true)}>
            Update Agent Balances
          </Button>

          {/* Adjust Account Balance Button */}
          <Button variant="outline" className="w-full bg-transparent" onClick={() => setAdjustOpen(true)}>
            Adjust Account Balance
          </Button>
        </CardContent>
      </Card>

      {/* Dialog 1 - Update Agent Balances */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Agent Balances</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mt-3">
              Enter the total amount to distribute across all agent accounts.
            </p>
            <Input
              type="number"
              placeholder="Enter amount"
              value={agentAmount}
              onChange={(e) => setAgentAmount(e.target.value)}
            />
          </div>
          <DialogFooter className="mt-4">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className="" onClick={handleAgentUpdate}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog 2 - Adjust Account Balance */}
      <Dialog open={adjustOpen} onOpenChange={setAdjustOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adjust Account Balance</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground mt-3">
              Enter an amount to manually adjust the company’s total balance.
            </p>
            <Input
              type="number"
              placeholder="Enter adjustment amount"
              value={adjustAmount}
              onChange={(e) => setAdjustAmount(e.target.value)}
            />
          </div>
          <DialogFooter className="mt-3">
            <Button variant="secondary" onClick={() => setAdjustOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAdjustBalance}>Apply Adjustment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
