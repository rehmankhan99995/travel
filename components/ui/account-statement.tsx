"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

const transactions = [
  {
    id: 1,
    date: "2024-11-01",
    description: "Package Purchase - Umrah Premium",
    amount: -2500,
    type: "debit",
  },
  {
    id: 2,
    date: "2024-10-28",
    description: "Commission Earned",
    amount: 500,
    type: "credit",
  },
  {
    id: 3,
    date: "2024-10-25",
    description: "Package Purchase - Makkah Express",
    amount: -1800,
    type: "debit",
  },
  {
    id: 4,
    date: "2024-10-20",
    description: "Commission Earned",
    amount: 450,
    type: "credit",
  },
]

export default function AccountStatement() {
  const totalBalance = transactions.reduce((sum, t) => sum + t.amount, 5000)
  const totalCredit = transactions.filter((t) => t.type === "credit").reduce((sum, t) => sum + t.amount, 0)
  const totalDebit = transactions.filter((t) => t.type === "debit").reduce((sum, t) => sum + Math.abs(t.amount), 0)

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Account Statement</h1>
        <p className="text-muted-foreground">View your account balance and transaction history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <p className="text-sm text-muted-foreground mb-2">Total Balance</p>
          <p className="text-3xl font-bold text-primary">${totalBalance.toFixed(2)}</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total Credit</p>
              <p className="text-2xl font-bold text-green-600">${totalCredit.toFixed(2)}</p>
            </div>
            <TrendingUp size={28} className="text-green-600 opacity-50" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Total Debit</p>
              <p className="text-2xl font-bold text-red-600">${totalDebit.toFixed(2)}</p>
            </div>
            <TrendingDown size={28} className="text-red-600 opacity-50" />
          </div>
        </Card>
      </div>

      {/* Transaction History */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Transaction History</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
                <th className="text-center py-3 px-4 font-semibold text-foreground">Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-border hover:bg-secondary transition-colors">
                  <td className="py-3 px-4 text-muted-foreground">{tx.date}</td>
                  <td className="py-3 px-4 text-foreground font-medium">{tx.description}</td>
                  <td
                    className={`py-3 px-4 text-right font-bold ${tx.type === "credit" ? "text-green-600" : "text-red-600"}`}
                  >
                    {tx.type === "credit" ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Badge variant={tx.type === "credit" ? "default" : "secondary"}>
                      {tx.type === "credit" ? "Credit" : "Debit"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
