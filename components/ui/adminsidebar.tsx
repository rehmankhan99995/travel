"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Plane, RefreshCw, Ticket, Package, BarChart3, LogOut } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Flight Info", href: "/admin/flights", icon: Plane },
    { name: "Refunds", href: "/admin/refunds", icon: RefreshCw },
    { name: "Vouchers", href: "/admin/vouchers", icon: Ticket },
    { name: "Packages", href: "/admin/packages", icon: Package },
    { name: "Reports", href: "/admin/reports", icon: BarChart3 },
  ]

  return (
    <div className="h-full w-full bg-blue-700 text-white flex flex-col">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center border-b border-white">
        <h1 className="text-lg font-bold text-white">Kalima Travels</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8 px-3 space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-start gap-2 py-3 px-3 rounded-lg transition-colors ${
                isActive ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"
              }`}
              title={item.name}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium text-center">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-white">
        <button
          className="flex items-center justify-start gap-2 w-full py-3 px-3 rounded-lg text-white hover:text-black hover:bg-white transition-colors"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-xs font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
