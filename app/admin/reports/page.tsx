"use client"

import { BarChart3, Users } from "lucide-react"

export default function ReportsPage() {
  const reports = {
    daily: { income: "€5,420", bookings: 12, refunds: 2 },
    agent: { topAgent: "Ahmed Mohammad - €12,500", performances: 8 },
    staff: { active: 15, onLeave: 2, training: 1 },
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Reports & Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Daily Accounts */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-5 h-5 text-gray-700 mr-3" />
              <h3 className="font-semibold text-gray-900">Daily Accounts</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 uppercase">Daily Income</div>
                <div className="text-2xl font-bold text-gray-900">{reports.daily.income}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Total Bookings</div>
                <div className="text-2xl font-bold text-gray-900">{reports.daily.bookings}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Refunds Processed</div>
                <div className="text-2xl font-bold text-gray-900">{reports.daily.refunds}</div>
              </div>
            </div>
          </div>

          {/* Agent Performance */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-gray-700 mr-3" />
              <h3 className="font-semibold text-gray-900">Agent Performance</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 uppercase">Top Agent</div>
                <div className="font-medium text-gray-900 text-sm">{reports.agent.topAgent}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">Active Agents</div>
                <div className="text-2xl font-bold text-gray-900">{reports.agent.performances}</div>
              </div>
            </div>
          </div>

          {/* Staff Summary */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-gray-700 mr-3" />
              <h3 className="font-semibold text-gray-900">Staff Summary</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 uppercase">Active Staff</div>
                <div className="text-2xl font-bold text-green-600">{reports.staff.active}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">On Leave</div>
                <div className="text-2xl font-bold text-yellow-600">{reports.staff.onLeave}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase">In Training</div>
                <div className="text-2xl font-bold text-blue-600">{reports.staff.training}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
