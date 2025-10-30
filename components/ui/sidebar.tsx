"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, CreditCard, Map, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/" },
    { id: "payments", label: "Payments", icon: CreditCard, href: "/payments" },
    { id: "journeys", label: "Journeys", icon: Map, href: "/journeys" },
    { id: "profile", label: "Profile", icon: User, href: "/profiles" },
  ]

  const getIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="h-full w-[270px] bg-blue-700 flex flex-col p-6">
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
                isActive ? "bg-white text-black" : "text-white hover:text-white cursor-pointer",
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <button className="w-full flex mt-8 items-center gap-3 px-4 py-3 text-white hover:text-white cursor-pointer transition-colors rounded-lg">
        <LogOut size={20} />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  )
}