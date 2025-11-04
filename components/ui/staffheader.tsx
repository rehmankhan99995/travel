"use client"

import { useState, useRef, useEffect } from "react"
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotifOpen, setIsNotifOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)
  const notifRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false)
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between relative">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* 🔔 Notification Button */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setIsNotifOpen(!isNotifOpen)
              setIsProfileOpen(false)
            }}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 top-10 w-64 bg-white border border-gray-200 rounded-xl shadow-md z-50">
              <div className="p-3 border-b">
                <h4 className="text-sm font-semibold text-gray-800">Notifications</h4>
              </div>
              <div className="max-h-48 overflow-y-auto">
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                  ✈️ New flight ticket created
                </div>
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                  🏨 Hotel booking confirmed
                </div>
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                  📦 New Umrah package added
                </div>
              </div>
              <div className="border-t px-4 py-2 text-center text-sm text-blue-600 hover:bg-gray-50 cursor-pointer">
                View all
              </div>
            </div>
          )}
        </div>

        {/* 👤 Profile Dropdown */}
        <div className="relative flex items-center gap-3 pl-4 border-l border-gray-200" ref={profileRef}>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Staff"
            alt="User"
            className="w-8 h-8 rounded-full"
          />

          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen)
              setIsNotifOpen(false)
            }}
            className="flex items-center gap-1 text-gray-900 font-medium hover:text-gray-600"
          >
            Staff Member
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 top-12 w-44 bg-white border border-gray-200 rounded-xl shadow-md py-2 z-50">
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <User className="w-4 h-4" /> Profile
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Settings className="w-4 h-4" /> Settings
              </button>
              <hr className="my-1" />
              <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
