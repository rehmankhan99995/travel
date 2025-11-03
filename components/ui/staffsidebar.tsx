"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Ticket, Building2, Package, ClipboardList, LogOut } from "lucide-react"

export default function StaffSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <aside className="w-[20%] bg-blue-700 text-white flex flex-col fixed h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-white">
        <h1 className="text-lg font-bold text-center mb-2">Kalima Travels</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        <Link href="/staff">
          <button
            className={`w-full text-white flex items-center gap-3 px-3 py-2 mb-2.5 rounded-lg font-medium transition ${
              isActive("/staff") ? "text-black! bg-white" : "hover:text-black hover:bg-white"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm">Dashboard</span>
          </button>
        </Link>
        <Link href="/staff/tickets">
          <button
            className={`w-full text-white flex items-center gap-3 px-3 py-2 mb-2.5 rounded-lg font-medium transition ${
              isActive("/staff/tickets") ? "text-black! bg-white" : "hover:text-black hover:bg-white"
            }`}
          >
            <Ticket className="w-5 h-5" />
            <span className="text-sm">Tickets</span>
          </button>
        </Link>
        <Link href="/staff/hotels">
          <button
            className={`w-full text-white flex items-center gap-3 px-3 py-2 mb-2.5 rounded-lg font-medium transition ${
              isActive("/staff/hotels") ? "text-black! bg-white" : "hover:text-black hover:bg-white"
            }`}
          >
            <Building2 className="w-5 h-5" />
            <span className="text-sm">Hotels</span>
          </button>
        </Link>
        <Link href="/staff/umrah">
          <button
            className={`w-full text-white flex items-center gap-3 px-3 py-2 mb-2.5 rounded-lg font-medium transition ${
              isActive("/staff/umrah") ? "text-black! bg-white" : "hover:text-black hover:bg-white"
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="text-sm">Umrah</span>
          </button>
        </Link>
        <Link href="/staff/check-in">
          <button
            className={`w-full text-white flex items-center gap-3 px-3 py-2 mb-2.5 rounded-lg font-medium transition ${
              isActive("/staff/check-in") ? "text-black! bg-white" : "hover:text-black hover:bg-white"
            }`}
          >
            <ClipboardList className="w-5 h-5" />
            <span className="text-sm">Check-in</span>
          </button>
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-2 border-t border-white">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white hover:bg-white hover:text-black transition">
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </aside>
  )
}
