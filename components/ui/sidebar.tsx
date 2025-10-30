"use client"

import { cn } from "@/lib/utils"
import { CreditCard, Home, LogOut, Map, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/" },
    { id: "payments", label: "Payments", icon: CreditCard, href: "/payments" },
    { id: "journeys", label: "Journeys", icon: Map, href: "/journeys" },
    { id: "profile", label: "Profile", icon: User, href: "/profile" },
  ]

  const getIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="h-screen w-64 bg-black flex flex-col p-6">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold text-center">Kalma Travels</h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = getIsActive(item.href)

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive ? "bg-white text-black" : "text-gray-400 hover:text-white",
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors rounded-lg">
        <LogOut size={20} />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  )
}
