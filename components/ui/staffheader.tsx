"use client"

import { Bell, ChevronDown } from "lucide-react"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
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
  )
}
