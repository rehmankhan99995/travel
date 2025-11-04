"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { toast } from "sonner"

export default function AccountStatements() {
  const [open, setOpen] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<any>(null)

  const accounts = [
    { account: "Operating Account", balance: "$523,450", status: "Active" },
    { account: "Agent Credit Account", balance: "$2,340,000", status: "Active" },
    { account: "Reserve Account", balance: "$850,000", status: "Active" },
    { account: "Commission Pool", balance: "$145,230", status: "Active" },
  ]

  const handleViewStatement = (acct: any) => {
    setSelectedAccount(acct)
    setOpen(true)
    toast.success(`Opened statement for ${acct.account}`)
  }

  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Statements</CardTitle>
          <CardDescription>Customized financial account views</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accounts.map((acct, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition"
              >
                <div className="flex-1">
                  <p className="font-medium">{acct.account}</p>
                  <p className="text-sm text-muted-foreground">{acct.status}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-lg">{acct.balance}</p>
                  <Button size="sm" onClick={() => handleViewStatement(acct)}>
                    View Statement
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dialog for Viewing Statement */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedAccount?.account} Statement</DialogTitle>
          </DialogHeader>

          {selectedAccount && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Account Status: {selectedAccount.status}</p>
              <p className="text-sm">Current Balance: <strong>{selectedAccount.balance}</strong></p>
              <div className="border-t pt-3 space-y-2">
                <p className="text-sm font-medium">Recent Transactions</p>
                <ul className="text-sm list-disc list-inside text-muted-foreground space-y-1">
                  <li>Deposit – $10,000 (Nov 1, 2025)</li>
                  <li>Withdrawal – $2,500 (Oct 27, 2025)</li>
                  <li>Transfer to Commission Pool – $1,200 (Oct 22, 2025)</li>
                </ul>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
