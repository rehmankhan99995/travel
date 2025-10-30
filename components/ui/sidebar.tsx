"use client"

import { useState } from "react"
import { Home, CreditCard, Map, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard")

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, url:"/" },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "journeys", label: "Journeys", icon: Map },
    { id: "profile", label: "Profile", icon: User },
  ]

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
          const isActive = activeItem === item.id


          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive ? "bg-white text-black" : "text-gray-400 hover:text-white",
              )}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
              <Link href={}></Link>
            </button>
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