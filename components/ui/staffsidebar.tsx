"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Ticket,
  Building2,
  Package,
  ClipboardList,
  LogOut,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

const staffNavItems = [
  { href: "/staff", label: "Dashboard", icon: LayoutDashboard },
  { href: "/staff/tickets", label: "Tickets", icon: Ticket },
  { href: "/staff/hotels", label: "Hotels", icon: Building2 },
  { href: "/staff/umrah", label: "Umrah", icon: Package },
  { href: "/staff/check-in", label: "Check-in", icon: ClipboardList },
]

export default function StaffSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-blue-700 text-white flex flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="px-6 py-8 border-b border-blue-600">
        <h1 className="text-2xl font-bold text-white">Kalima Travels</h1>
        <p className="text-xs text-blue-100 mt-1">Staff Dashboard</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
        {staffNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 text-sm font-medium",
                isActive
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-blue-100 hover:bg-blue-600 hover:text-white"
              )}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer items */}
      <div className="border-t border-blue-600 px-4 py-4 space-y-2">
        <button className="w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all text-blue-100 hover:bg-blue-600 hover:text-white text-sm font-medium">
          <Settings size={18} />
          <span>Settings</span>
        </button>
        <button className="w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all text-blue-100 hover:bg-red-600 hover:text-white text-sm font-medium">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
