"use client"

import { useState } from "react"
import { ChevronDown, Bell, LogOut, Settings, User } from "lucide-react"

export default function AdminNavbar() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const notifications = [
    { id: 1, message: "New booking received!" },
    { id: 2, message: "Flight package updated successfully." },
    { id: 3, message: "New message from a customer." },
  ]

  return (
    <header className="border-b border-slate-200 bg-white relative">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left section */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Travel Admin Dashboard
          </h1>
          <p className="text-sm text-slate-500">
            Manage your packages & services
          </p>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          {/* Notification bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-400 hover:text-slate-600 transition"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" />
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border border-slate-200 rounded-lg z-50">
                <div className="px-4 py-2 border-b border-slate-100 font-semibold text-slate-700">
                  Notifications
                </div>
                <ul className="max-h-48 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notif) => (
                      <li
                        key={notif.id}
                        className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 cursor-pointer"
                      >
                        {notif.message}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-sm text-slate-500">
                      No new notifications
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="relative h-8 w-8 rounded-full bg-slate-300 flex items-center justify-center">
                <span className="text-sm font-semibold text-slate-700">J</span>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm font-medium text-slate-900">
                  John Doe
                </span>
                <span className="text-xs text-slate-500">Travel Agent</span>
              </div>
              <ChevronDown className="text-[#838383] w-4 h-4" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border border-slate-200 rounded-lg z-50">
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  <User className="w-4 h-4" /> Profile
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  <Settings className="w-4 h-4" /> Settings
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
