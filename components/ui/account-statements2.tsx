"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AccountStatements() {
  return (
    <div className="p-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Statements</CardTitle>
          <CardDescription>Customized financial account views</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { account: "Operating Account", balance: "$523,450", status: "Active" },
              { account: "Agent Credit Account", balance: "$2,340,000", status: "Active" },
              { account: "Reserve Account", balance: "$850,000", status: "Active" },
              { account: "Commission Pool", balance: "$145,230", status: "Active" },
            ].map((acct, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50"
              >
                <div className="flex-1">
                  <p className="font-medium">{acct.account}</p>
                  <p className="text-sm text-muted-foreground">{acct.status}</p>
                </div>
                <p className="font-bold text-lg">{acct.balance}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
