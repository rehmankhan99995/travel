"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Users,
  FileText,
  CreditCard,
  RotateCcw,
  Hotel,
  DollarSign,
  Lock,
  LogOut,
  Settings,
} from "lucide-react"

export default function Sidebaraccountant() {
  const pathname = usePathname()

  const menuItems = [
    { id: "daily-reports", label: "Daily Reports", icon: BarChart3, href: "/accountant/daily-reports" },
    { id: "profit-loss", label: "P&L Statements", icon: DollarSign, href: "/accountant/profit-loss" },
    { id: "staff-reports", label: "Staff Reports", icon: Users, href: "/accountant/staff-reports" },
    { id: "user-management", label: "User Management", icon: Lock, href: "/accountant/user-management" },
    { id: "account-statements", label: "Account Statements", icon: FileText, href: "/accountant/account-statements" },
    { id: "balance-updates", label: "Balance Updates", icon: CreditCard, href: "/accountant/balance-updates" },
    { id: "refund-requests", label: "Refund Requests", icon: RotateCcw, href: "/accountant/refund-requests" },
    { id: "hotel-management", label: "Hotel Management", icon: Hotel, href: "/accountant/hotel-management" },
  ]

  return (
    <aside
      className="
        fixed top-0 left-0 h-screen w-64 
        bg-blue-700 text-white 
        flex flex-col justify-between 
        shadow-lg z-50
      "
    >
      {/* Logo Section */}
      <div>
        <div className="p-6 border-b border-blue-500/30">
          <h1 className="text-2xl font-bold">Finance Hub</h1>
          <p className="text-blue-100 text-sm mt-1">Accountant Portal</p>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                  isActive
                    ? "bg-white/20 text-white shadow-md"
                    : "text-blue-100 hover:bg-white/10"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Footer Buttons */}
      <div className="border-t border-blue-500/30 px-4 py-4 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-white/10 transition text-sm font-medium">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-red-600 hover:text-white transition text-sm font-medium">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
