"use client"

import { useState, useEffect, useRef } from "react"
import {
  Bell,
  ChevronDown,
  LogOut,
  User,
  Settings,
  Calendar,
  Clock,
  Wallet,
  PlaneTakeoff,
  Hotel,
  Package,
  ClipboardCheck,
} from "lucide-react"
import StatCard from "@/components/ui/stat-card"

export default function Dashboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotifOpen, setIsNotifOpen] = useState(false)
  const [message, setMessage] = useState("")

  const profileRef = useRef<HTMLDivElement>(null)
  const notifRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false)
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setIsNotifOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Functional quick link actions
  const handleAction = (type: string) => {
    switch (type) {
      case "ticket":
        setMessage("Opening ticket creation page...")
        break
      case "hotel":
        setMessage("Opening hotel voucher creation page...")
        break
      case "package":
        setMessage("Opening Umrah package form...")
        break
      case "checkin":
        setMessage("Loading check-in/check-out management...")
        break
      case "transaction":
        setMessage("New transaction modal will open...")
        break
      default:
        setMessage("")
    }
    setTimeout(() => setMessage(""), 4000) // Clear message after 4 seconds
  }

  return (
    <>
      {/* === Header === */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between relative">
        <h1 className="text-2xl font-bold text-gray-900">Staff Dashboard</h1>

        <div className="flex items-center gap-4">
          {/* === Notification Dropdown === */}
          <div ref={notifRef} className="relative">
            <button
              onClick={() => {
                setIsNotifOpen(!isNotifOpen)
                setIsProfileOpen(false)
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition relative"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {isNotifOpen && (
              <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-md py-2 z-50">
                <h3 className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
                  Notifications
                </h3>
                <div className="max-h-64 overflow-y-auto">
                  <div className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                    ✉️ New message from Admin
                  </div>
                  <div className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                    ✅ Your report has been approved
                  </div>
                  <div className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                    ⚠️ Password will expire soon
                  </div>
                </div>
                <button className="w-full text-sm text-blue-600 hover:bg-gray-50 py-2 mt-1">
                  View all
                </button>
              </div>
            )}
          </div>

          {/* === Profile Dropdown === */}
          <div
            ref={profileRef}
            className="relative flex items-center gap-3 pl-4 border-l border-gray-200"
          >
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
                className={`w-4 h-4 transition-transform ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
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

      {/* === Main Dashboard Content === */}
      <div className="p-8 overflow-auto">
        {/* Header with Action Button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
          <button
            onClick={() => handleAction("transaction")}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer transition font-medium hover:bg-blue-800"
          >
            + New Transaction
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard value="12" label="Tickets Created" icon="calendar" />
          <StatCard value="8" label="Hotels Booked" icon="clock" />
          <StatCard value="5" label="Umrah Packages" icon="wallet" />
          <StatCard value="23" label="Check-ins Today" icon="calendar" />
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-4 gap-6">
          <div
            onClick={() => handleAction("ticket")}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <PlaneTakeoff className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Create Ticket
              </h3>
            </div>
            <p className="text-sm text-gray-600">Book new flight tickets</p>
          </div>

          <div
            onClick={() => handleAction("hotel")}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <Hotel className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Create Hotel Voucher
              </h3>
            </div>
            <p className="text-sm text-gray-600">Generate hotel bookings</p>
          </div>

          <div
            onClick={() => handleAction("package")}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Add Umrah Package
              </h3>
            </div>
            <p className="text-sm text-gray-600">Create package deals</p>
          </div>

          <div
            onClick={() => handleAction("checkin")}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <ClipboardCheck className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Check-in/Check-out
              </h3>
            </div>
            <p className="text-sm text-gray-600">Manage traveler details</p>
          </div>
        </div>

        {/* Feedback Banner */}
        {message && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700">
            {message}
          </div>
        )}
      </div>
    </>
  )
}
