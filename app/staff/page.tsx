import { Bell, ChevronDown } from "lucide-react"
import StatCard from "@/components/ui/stat-card"

export default function Dashboard() {
  return (
    <>
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Staff Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Staff"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <button className="flex items-center gap-1 text-gray-900 font-medium hover:text-gray-600">
              Staff Member
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 overflow-auto">
        {/* Header with Action Button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer transition font-medium">
            + New Transaction
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard value="12" label="Tickets Created" icon="calendar" />
          <StatCard value="8" label="Hotels Booked" icon="clock" />
          <StatCard value="5" label="Umrah Packages" icon="wallet" />
          <StatCard value="23" label="Check-ins Today" icon="calendar" />
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Ticket</h3>
            <p className="text-sm text-gray-600">Book new flight tickets</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Hotel Voucher</h3>
            <p className="text-sm text-gray-600">Generate hotel bookings</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Umrah Package</h3>
            <p className="text-sm text-gray-600">Create package deals</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Check-in/Check-out</h3>
            <p className="text-sm text-gray-600">Manage traveler details</p>
          </div>
        </div>
      </div>
    </>
  )
}
