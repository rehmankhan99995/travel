"use client"

import Header from "@/components/ui/header"
import SidebarNav from "@/components/ui/sidebar-nav"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <SidebarNav />

      {/* Main content area with margin for sidebar */}
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 overflow-auto bg-gradient-to-b from-background to-blue-50/30 px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Travel Hub</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-700">
                <p className="text-sm text-gray-600 mb-2">Total Packages</p>
                <p className="text-3xl font-bold text-blue-700">24</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-700">
                <p className="text-sm text-gray-600 mb-2">Active Bookings</p>
                <p className="text-3xl font-bold text-blue-700">8</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-700">
                <p className="text-sm text-gray-600 mb-2">Account Balance</p>
                <p className="text-3xl font-bold text-blue-700">$5,240</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Start</h2>
              <p className="text-gray-600">
                Use the navigation sidebar to access packages, manage your bookings, view account statements, and more.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
