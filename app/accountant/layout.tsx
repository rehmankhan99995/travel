"use client"

import React, { useState } from "react"
import Sidebaraccountant from "@/components/ui/sidebaraccountant"
import { Bell, ChevronDown, LogOut, LogIn } from "lucide-react"
import { toast, Toaster } from "sonner"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [checkedIn, setCheckedIn] = useState(false)

  // ✅ Check-in / Check-out function
  const handleCheck = async () => {
    setIsProcessing(true)
    toast.loading("Processing...", { duration: 1000 })

    setTimeout(() => {
      setCheckedIn(!checkedIn)
      toast.success(checkedIn ? "Checked out successfully!" : "Checked in successfully!")
      setIsProcessing(false)
    }, 1000)
  }

  // ✅ Logout function
  const handleLogout = () => {
    toast.info("You have been logged out.")
    setIsDropdownOpen(false)
  }

  // ✅ Notification button
  const handleNotification = () => {
    toast.info("No new notifications", {
      description: "You're all caught up!",
    })
  }

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* ✅ Fixed Sidebar */}
      <Sidebaraccountant />

      {/* ✅ Main content area with margin to avoid overlapping the sidebar */}
      <main className="flex-1 ml-64 flex flex-col overflow-hidden">
        {/* ✅ Toaster (must be inside layout to show notifications) */}
        <Toaster position="top-right" richColors />

        {/* ✅ Header */}
        <header className="border-b bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          {/* Left Section */}
          <div>
            <h1 className="text-2xl font-bold">Accountant Dashboard</h1>
            <p className="text-gray-500 text-sm">Manage financial operations & approvals</p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* 🔔 Notification Button */}
            <button
              onClick={handleNotification}
              className="relative p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full"></span>
            </button>

            {/* 👤 User Dropdown */}
            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 transition"
              >
                <div className="text-right">
                  <p className="font-medium text-gray-800">Admin User</p>
                  <p className="text-sm text-gray-500">Accountant</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  A
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <button
                    onClick={handleCheck}
                    disabled={isProcessing}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    {checkedIn ? (
                      <>
                        <LogOut className="w-4 h-4" /> Check Out
                      </>
                    ) : (
                      <>
                        <LogIn className="w-4 h-4" /> Check In
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ✅ Scrollable main content area */}
        <div className="flex-1 overflow-auto p-8">{children}</div>
      </main>
    </div>
  )
}
