'use client'

import { ChevronDown, Bell } from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left section */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Travel Agent Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            Manage your packages & services
          </p>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          {/* Notification bell */}
          <button className="relative p-2 text-slate-400 hover:text-slate-600">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors">
            <div className="relative h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center">
              {/* Example avatar — you can replace with <Image /> */}
              <span className="text-sm font-semibold text-slate-700">J</span>
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-sm font-medium text-slate-900">John Doe</span>
              <span className="text-xs text-slate-500">Travel Agent</span>
            </div>
            <ChevronDown className="text-[#838383] w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
